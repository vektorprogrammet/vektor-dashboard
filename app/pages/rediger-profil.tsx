import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import { dataProfile } from "./data/data-profile";
import { linjer } from "./data/linjer";

const formSchema = z.object({
  fornavn: z.string(),
  etternavn: z.string(),
  epost: z.string().email("Ugyldig e-post"),
  telefon: z
    .string()
    .regex(/^(\d{3} \d{2} \d{3}|\d{8})$/, "Telefonnummeret er på feil format"),
  kontonummer: z
    .string()
    .regex(
      /^(\d{4}[ .]?\d{2}[ .]?\d{5}|\d{11})$/,
      "Ugyldig kontonummer-format",
    ),
  profilbilde: z.instanceof(File).optional(),
});

export default function RedigerProfil() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fornavn: dataProfile.firstName,
      etternavn: dataProfile.lastName,
      epost: dataProfile.email,
      telefon: dataProfile.tlf,
      kontonummer: dataProfile.accountNumber,
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    navigate("/dashboard/profile");
  }

  return (
    <div className="flex flex-col mt-10 mx-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <section className="lg:flex-row lg:grid lg:grid-cols-3 gap-4 items-center mb-8">
            <div className="items-center flex flex-col self-start mb-4">
              <img
                className="rounded-full h-40 w-40 object-cover justify-self-center mb-4"
                alt="profilbilde"
                src={imagePreview || dataProfile.profileImage}
              />
              <div className="grid lg:max-w-sm max-w-sm items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="profilbilde"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="picture">
                        Last opp profilbilde
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="picture"
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageChange(e);
                              field.onChange(file);
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-8 lg:col-span-2 bg-gray-50 rounded-lg p-4 lg:mx-20 w-full sm:max-w-xl justify-self-center">
              <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="fornavn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fornavn</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder={dataProfile.firstName}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="etternavn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Etternavn</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder={dataProfile.lastName}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-full">
                  <FormField
                    control={form.control}
                    name="epost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-post</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder={dataProfile.email}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-full">
                  <FormField
                    control={form.control}
                    name="telefon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder={dataProfile.tlf}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-3">
                  <Select>
                    <FormLabel>Linje</FormLabel>
                    <SelectTrigger className="w-[180px] bg-white">
                      <SelectValue placeholder={dataProfile.study} />
                    </SelectTrigger>
                    <SelectContent>
                      {linjer.map((linje) => (
                        <SelectItem key={linje} value={linje}>
                          {linje}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-full">
                  <FormField
                    control={form.control}
                    name="kontonummer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kontonummer</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder={dataProfile.accountNumber}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="sm:col-span-full flex justify-between">
                  <Button
                    type="button"
                    onClick={() => navigate("/dashboard/profile")}
                  >
                    Avbryt
                  </Button>
                  <Button type="submit">Lagre</Button>
                </div>
              </div>
            </div>
          </section>
        </form>
      </Form>
    </div>
  );
}
