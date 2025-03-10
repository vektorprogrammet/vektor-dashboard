import { useNavigate } from "react-router";
import { DataProfile } from "./data/data-profile";
import { ChevronRight } from "lucide-react";

const profile = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className="flex flex-col mt-10 mx-10">
				<section className="lg:flex-row lg:grid lg:grid-cols-3 gap-4 items-center lg:mb-8">
					<img
						className="rounded-full h-40 w-40 object-cover justify-self-center self-end"
						alt="profilbilde"
						src={DataProfile.profileImage}
					/>
					<div className="flex flex-col items-center lg:items-start self-end">
						<h1 className="text-2xl lg:text-4xl font-semibold lg:mb-4 mb-2">
							{DataProfile.firstname} {DataProfile.lastname}
						</h1>
						<h3 className="font-medium lg:text-xl">Teammedlem</h3>
						<p className="lg:mb-4">
							<a
								href="mailto:julia@vektorprogrammet.no"
								className="text-blue-600"
							>
								{DataProfile.vektorEmail}
							</a>
						</p>
					</div>
				</section>
				<div className="lg:grid lg:grid-cols-3 gap-8 hidden lg:block">
					<div className="col-start-2 col-end-4">
						<h2 className="text-xl font-semibold mt-2">
							Aktivitet i vektorprogrammet
						</h2>
						{DataProfile.boardHistory.length != 0 ? (
							<h3 className="font-medium text-lg mt-2">Medlem i hovedstyret</h3>
						) : (
							<h3 className="font-medium text-lg mt-2">Teamhistorikk</h3>
						)}
					</div>
				</div>
				<div className="lg:flex-row lg:grid lg:grid-cols-3 gap-8 mb-8">
					<div className="col-span-1 mt-8 lg:mt-0">
						<div className="flex flex-col">
							<button
								className="bg-gray-50 rounded-t-lg font-medium text-left px-4 py-2 flex flex-row justify-between"
								onClick={() => navigate("/dashboard/profile/rediger")}
							>
								Rediger profil
								<ChevronRight/>
							</button>
							<button className="bg-gray-50 rounded-b-lg font-medium text-left px-4 py-2 flex flex-row justify-between">
								Bytt passord
								<ChevronRight />
							</button>
						</div>
						<table className="table-fixed w-full bg-gray-50 mt-8 p-4 rounded-lg border-separate border-spacing-1">
							<tbody className="">
								<tr className="">
									<td className="font-medium w-2/5">Avdeling:</td>
									<td className="truncate">{DataProfile.department}</td>
								</tr>
								<tr>
									<td className="font-medium w-2/5">Linje:</td>
									<td className="truncate">{DataProfile.study}</td>
								</tr>
								<tr>
									<td className="font-medium w-2/5">Telefon:</td>
									<td className="truncate">{DataProfile.tlf}</td>
								</tr>
								<tr>
									<td className="font-medium w-2/5">E-post:</td>
									<td className="truncate">
										<a
											className="text-blue-600"
											href="mailto:julia@gmail.com"
										>
											{DataProfile.email}
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
							{DataProfile.hovedstyreHistory.length != 0 ? (
								<h3 className="font-medium text-lg mt-4 mb-2">
									Medlem i hovedstyret
								</h3>
							) : (
								<h3 className="font-medium text-lg mt-4 mb-2">Teamhistorikk</h3>
							)}
						</div>
						{DataProfile.hovedstyreHistory.length != 0 && (
							<>
								<table className="w-full bg-gray-50 rounded-lg overflow-hidden">
									<thead className="text-left bg-gray-200 rounded-t-lg">
										<tr>
											<th className="p-2">Stilling</th>
											<th className="p-2">Start</th>
											<th className="p-2">Slutt</th>
										</tr>
									</thead>
									<tbody>
										{DataProfile.hovedstyreHistory.map((row, index) => (
											<tr key={index}>
												<td className="p-2">{row.stilling}</td>
												<td className="p-2">{row.start}</td>
												<td className="p-2">{row.slutt}</td>
											</tr>
										))}
									</tbody>
								</table>
								<h3 className="font-medium text-lg mt-8 mb-2">Teamhistorikk</h3>
							</>
						)}
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
								{DataProfile.teamHistory.map((row, index) => (
									<tr key={index}>
										<td className="p-2">{row.team}</td>
										<td className="p-2">{row.stilling}</td>
										<td className="p-2">{row.start}</td>
										<td className="p-2">{row.slutt}</td>
									</tr>
								))}
							</tbody>
						</table>
						<h3 className="font-medium text-lg mt-8 mb-2">Assistenthistorikk</h3>
						<table className="w-full bg-gray-50 rounded-lg overflow-hidden">
							<thead className="text-left bg-gray-200 rounded-t-lg">
								<tr>
									<th className="p-2">Skole</th>
									<th className="p-2">Semester</th>
								</tr>
							</thead>
							<tbody>
								{DataProfile.assistentHistory.map((row, index) => (
									<tr key={index}>
										<td className="p-2">{row.school}</td>
										<td className="p-2">{row.semester}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default profile;
