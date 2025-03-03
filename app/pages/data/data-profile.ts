type AssisentHistory = {
	school: string;
	semester: string;
};

type TeamHistory = {
	team: string;
	stilling: string;
	start: string;
	slutt: string;
};

type HovedstyreHistory = {
	stilling: string;
	start: string;
	slutt: string;
};

type Profile = {
	firstname: string;
	lastname: string;
	vektorEmail: string;
	email: string;
	tlf: string;
	study: string;
	department: string;
	accountnumber: string,
	assistentHistory: AssisentHistory[];
	teamHistory: TeamHistory[];
	hovedstyreHistory: HovedstyreHistory[];
};

export const DataProfile: Profile = {
	firstname: "Julia",
	lastname: "Dai",
	vektorEmail: "julia@vektorprogrammet.no",
	email: "julia@gmail.com",
	tlf: "466 668 88",
	study: "MTDT",
	department: "IT",
	accountnumber: "0000 000 0000",
	assistentHistory: [
		{
			school: "Charlottenlund",
			semester: "Vår 2023",
		},
		{
			school: "Charlottenlund",
			semester: "Høst 2022"
		}
	],
	teamHistory: [
		{
			team: "IT",
			stilling: "Utvikler",
			start: "Vår 2023",
			slutt: "Fortsatt aktiv"
		}
	],
	hovedstyreHistory: [
		{
			stilling: "Medlem",
			start: "Vår 2022",
			slutt: "Høst 2022"
		}
	],
};
