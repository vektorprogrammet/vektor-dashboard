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
import { NavLink, useNavigate } from "react-router";
import { z } from "zod";
import { dataProfile } from "./data/data-profile";
import { linjer } from "./data/linjer";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email("Ugyldig e-post"),
  phone: z
    .string()
    .regex(/^(\d{3} \d{2} \d{3}|\d{8})$/, "Telefonnummeret er på feil format"),
  accountNumber: z
    .string()
    .regex(
      /^(\d{4}[ .]?\d{2}[ .]?\d{5}|\d{11})$/,
      "Ugyldig kontonummer-format",
    ),
  profileImage: z.instanceof(File).optional(),
});

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function RedigerProfil() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: dataProfile.firstName,
      lastName: dataProfile.lastName,
      email: dataProfile.email,
      phone: dataProfile.phone,
      accountNumber: dataProfile.accountNumber,
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    navigate("/dashboard/profile");
  }

  return (
    <div className="mx-10 mt-10 flex flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <section className="mb-8 items-center gap-4 lg:grid lg:grid-cols-3 lg:flex-row">
            <div className="mb-4 flex flex-col items-center self-start">
              <img
                className="mb-4 h-40 w-40 justify-self-center rounded-full object-cover"
                alt="profilbilde"
                src={imagePreview ?? dataProfile.profileImage}
              />
              <div className="grid max-w-sm items-center gap-1.5 lg:max-w-sm">
                <FormField
                  control={form.control}
                  name="profileImage"
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
            <div className="w-full space-y-8 justify-self-center rounded-lg bg-gray-50 p-4 sm:max-w-xl lg:col-span-2 lg:mx-20">
              <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <FormField
                    control={form.control}
                    name="firstName"
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
                    name="lastName"
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
                    name="email"
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder={dataProfile.phone}
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
                    name="accountNumber"
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
                <div className="flex justify-between sm:col-span-full">
                  <Button type="button">
                    <NavLink to="/dashboard/profile">Avbryt</NavLink>
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
