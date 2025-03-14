import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router";
import { dataProfile } from "./data/data-profile";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col mt-10 mx-10">
        <section className="lg:flex-row lg:grid lg:grid-cols-3 gap-4 items-center lg:mb-8">
          <img
            className="rounded-full h-40 w-40 object-cover justify-self-center self-end"
            alt="profilbilde"
            src={dataProfile.profileImage}
          />
          <div className="flex flex-col items-center lg:items-start self-end">
            <h1 className="text-2xl lg:text-4xl font-semibold lg:mb-4 mb-2">
              {dataProfile.firstName} {dataProfile.lastName}
            </h1>
            <h2 className="font-medium lg:text-xl">Teammedlem</h2>
            <p className="lg:mb-4">
              <a
                href={`mailto:${dataProfile.vektorEmail}`}
                className="text-blue-600 hover:underline"
              >
                {dataProfile.vektorEmail}
              </a>
            </p>
          </div>
        </section>
        <div className="lg:grid lg:grid-cols-3 gap-8 hidden lg:block">
          <div className="col-start-2 col-end-4">
            <h2 className="text-xl font-semibold mt-2">
              Aktivitet i vektorprogrammet
            </h2>
            {dataProfile.boardHistory.length > 0 ? (
              <h3 className="font-medium text-lg mt-2">Medlem i hovedstyret</h3>
            ) : (
              <h3 className="font-medium text-lg mt-2">Teamhistorikk</h3>
            )}
          </div>
        </div>
        <div className="lg:flex-row lg:grid lg:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 mt-8 lg:mt-0">
            <div className="flex flex-col">
              <Button
                asChild
                className="bg-gray-50 hover:bg-gray-100 rounded-t-lg font-medium text-left text-black px-4 py-2 flex flex-row justify-between"
              >
                <NavLink to="/dashboard/profile/rediger">
                  Rediger profil
                  <ChevronRight />
                </NavLink>
              </Button>
              <Button
                type="button"
                className="bg-gray-50 hover:bg-gray-100 rounded-b-lg font-medium text-left text-black px-4 py-2 flex flex-row justify-between"
              >
                Bytt passord
                <ChevronRight />
              </Button>
            </div>
            <Table className="table-fixed w-full bg-gray-50 mt-8 rounded-lg border-separate">
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium w-2/5">Avdeling:</TableCell>
                  <TableCell className="truncate">
                    {dataProfile.department}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium w-2/5">Linje:</TableCell>
                  <TableCell className="truncate">
                    {dataProfile.study}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium w-2/5">Telefon:</TableCell>
                  <TableCell className="truncate">{dataProfile.tlf}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium w-2/5">E-post:</TableCell>
                  <TableCell className="truncate">
                    <a
                      className="text-blue-600 hover:underline"
                      href={`mailto:${dataProfile.email}`}
                    >
                      {dataProfile.email}
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="col-span-2 max-w-3xl">
            <div className="block lg:hidden mt-8">
              <h2 className="text-xl font-semibold mt-2">
                Aktivitet i vektorprogrammet
              </h2>
              {dataProfile.boardHistory.length > 0 ? (
                <h3 className="font-medium text-lg mt-4 mb-2">
                  Medlem i hovedstyret
                </h3>
              ) : (
                <h3 className="font-medium text-lg mt-4 mb-2">Teamhistorikk</h3>
              )}
            </div>
            {dataProfile.boardHistory.length > 0 && (
              <>
                <Table className="w-full bg-gray-50 rounded-lg overflow-hidden">
                  <TableHeader className="text-left bg-gray-200 rounded-t-lg">
                    <TableHead className="p-2 text-black">Stilling</TableHead>
                    <TableHead className="p-2 text-black">Start</TableHead>
                    <TableHead className="p-2 text-black">Slutt</TableHead>
                  </TableHeader>
                  <TableBody>
                    {dataProfile.boardHistory.map((row) => (
                      <TableRow key={`${row.position}-${row.start}-${row.end}`}>
                        <TableCell className="p-2">{row.position}</TableCell>
                        <TableCell className="p-2">{row.start}</TableCell>
                        <TableCell className="p-2">{row.end}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <h3 className="font-medium text-lg mt-8 mb-2">Teamhistorikk</h3>
              </>
            )}
            <Table className="w-full bg-gray-50 rounded-lg overflow-hidden mb-8">
              <TableHeader className="text-left bg-gray-200 rounded-t-lg">
                <TableHead className="p-2 text-black">Team</TableHead>
                <TableHead className="p-2 text-black">Stilling</TableHead>
                <TableHead className="p-2 text-black">Start</TableHead>
                <TableHead className="p-2 text-black">Slutt</TableHead>
              </TableHeader>
              <TableBody>
                {dataProfile.teamHistory.map((row) => (
                  <TableRow
                    key={`${row.team}-${row.position}-${row.start}-${row.end}`}
                    className="border-none"
                  >
                    <TableCell className="p-2">{row.team}</TableCell>
                    <TableCell className="p-2">{row.position}</TableCell>
                    <TableCell className="p-2">{row.start}</TableCell>
                    <TableCell className="p-2">{row.end}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <h3 className="font-medium text-lg mt-8 mb-2">
              Assistenthistorikk
            </h3>
            <Table className="w-full bg-gray-50 rounded-lg overflow-hidden">
              <TableHeader className="text-left bg-gray-200 rounded-t-lg">
                <TableHead className="p-2 text-black">Skole</TableHead>
                <TableHead className="p-2 text-black">Semester</TableHead>
              </TableHeader>
              <TableBody>
                {dataProfile.assistentHistory.map((row) => (
                  <TableRow
                    key={`${row.school}-${row.semester}`}
                    className="border-none"
                  >
                    <TableCell className="p-2">{row.school}</TableCell>
                    <TableCell className="p-2">{row.semester}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
