"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { linjer } from "./data/linjer";
import { DataProfile } from "./data/data-profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useNavigate } from "react-router";


const formSchema = z.object({
	fornavn: z.string(),
	etternavn: z.string(),
	epost: z.string(),
	telefon: z.string(),
	kontonummer: z.string(),
});

const redigerProfil = () => {
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fornavn: "",
			etternavn: "",
			epost: "",
			telefon: "",
			kontonummer: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div className="flex flex-col mt-10 mx-10">
			<section className="lg:flex-row lg:grid lg:grid-cols-3 gap-4 items-center lg:mb-8">
				<div className="items-center flex flex-col self-start mb-4">
					<img className="rounded-full max-h-48 justify-self-center mb-4" alt="profilbilde" src="https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6407131bab385.jpeg"/>
					<button className="rounded-md bg-gray-100 py-2 px-6">
						Bytt profilbilde
					</button>
				</div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 lg:col-span-2 bg-gray-50 rounded-lg p-4 lg:mr-20 max-w-2xl">
						<div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<FormField
									control={form.control}
									name="fornavn"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Fornavn</FormLabel>
											<FormControl>
												<Input className="bg-white" placeholder={DataProfile.firstname} {...field} />
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
												<Input className="bg-white" placeholder={DataProfile.lastname} {...field} />
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
													<Input className="bg-white" placeholder={DataProfile.email} {...field} />
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
													<Input className="bg-white" placeholder={DataProfile.tlf} {...field} />
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
											<SelectValue placeholder={DataProfile.study} />
										</SelectTrigger>
										<SelectContent>
											{linjer.map((linje) => (
												<SelectItem value={linje}>
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
													<Input className="bg-white" placeholder={DataProfile.accountnumber} {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
										/>
								</div>
								<div className="sm:col-span-full flex justify-between">
									<Button	type="button" onClick={() => navigate("/dashboard/profile")}>Avbryt</Button>
									<Button type="submit">Lagre</Button>
								</div>
						</div>
					</form>
				</Form>
			</section>
		</div>
	);
};

export default redigerProfil;
