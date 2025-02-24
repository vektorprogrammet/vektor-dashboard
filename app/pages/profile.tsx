import { useNavigate } from "react-router";

const profile = () => {
	const navigate = useNavigate()
	return (
		<>
			<div className="flex flex-col mt-10 mx-10">
				<section className="lg:flex-row lg:grid lg:grid-cols-3 gap-4 items-center lg:mb-8">
					<img
						className="rounded-full max-h-48 justify-self-center self-end"
						alt="profilbilde"
						src="https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6407131bab385.jpeg"
					/>
					<div className="flex flex-col items-center lg:items-start self-end">
						<h1 className="text-2xl lg:text-4xl font-semibold lg:mb-4 mb-2">
							Julia Dai
						</h1>
						<h3 className="font-medium lg:text-xl">Teammedlem</h3>
						<p className="lg:mb-4">
							<a
								href="mailto:julia@vektorprogrammet.no"
								className="text-blue-600"
							>
								julia@vektorprogrammet.no
							</a>
						</p>
					</div>
				</section>
				<div className="lg:grid lg:grid-cols-3 gap-8 hidden lg:block">
					<div className="col-start-2 col-end-4">
						<h2 className="text-xl font-semibold mt-2">
							Aktivitet i vektorprogrammet
						</h2>
						<h3 className="font-medium text-lg mt-4 mb-2">
							Assistenthistorikk
						</h3>
					</div>
				</div>
				<div className="lg:flex-row lg:grid lg:grid-cols-3 gap-8">
					<div className="col-span-1 mt-8 lg:mt-0">
						<div className="bg-gray-50 rounded-lg font-medium">
							<p className="p-2" onClick={() => navigate("/dashboard/profile/rediger")}>Rediger profil</p>
							<hr className="bg-gray-100" />
							<p className="p-2">Bytt passord</p>
						</div>
						<table className="w-full bg-gray-50 mt-8 p-4 rounded-lg border-separate border-spacing-1">
							<tbody className="">
								<tr className="">
									<td className="font-medium">Avdeling:</td>
									<td>Trondheim</td>
								</tr>
								<tr>
									<td className="font-medium">Linje:</td>
									<td>MTDT</td>
								</tr>
								<tr>
									<td className="font-medium">Telefon:</td>
									<td>466 668 88</td>
								</tr>
								<tr>
									<td className="font-medium">E-post:</td>
									<td>
										<a className="text-blue-600 truncate" href="mailto:julia@gmail.com">
											julia@gmail.com
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-span-2 max-w-3xl">
						<div className="block lg:hidden mt-8">
							<h2 className="text-xl font-semibold mt-2">
								Aktivitet i vektorprogrammet
							</h2>
							<h3 className="font-medium text-lg mt-4 mb-2">
								Assistenthistorikk
							</h3>
						</div>
						<table className="w-full bg-gray-50 rounded-lg overflow-hidden">
							<thead className="text-left bg-gray-200 rounded-t-lg">
								<tr>
									<th className="p-2">Skole</th>
									<th className="p-2">Semester</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="p-2">Charlottenlund</td>
									<td className="p-2">vår 2023</td>
								</tr>
								<tr>
									<td className="p-2">Charlottenlund</td>
									<td className="p-2">Høst 2022</td>
								</tr>
							</tbody>
						</table>
						<h3 className="font-medium text-lg mt-8 mb-2">Teamhistorikk</h3>
						<table className="w-full bg-gray-50 rounded-lg overflow-hidden mb-8">
							<thead className="text-left bg-gray-200 rounded-t-lg">
								<tr>
									<th className="p-2">Team</th>
									<th className="p-2">Stilling</th>
									<th className="p-2">Start</th>
									<th className="p-2">Slutt</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="p-2">IT</td>
									<td className="p-2">Utvikler</td>
									<td className="p-2">Vår 2023</td>
									<td className="p-2">Fortsatt aktiv</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default profile;
