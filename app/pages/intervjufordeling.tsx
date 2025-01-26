import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const intervjufordeling = () => {
  return (
    <main className="w-screen md:w-full">
      <Table className="overflow-clip">
        <TableHeader>
          <TableRow>
            <TableHead className="">Søker</TableHead>
            <TableHead>Telefon</TableHead>
            <TableHead>E-post</TableHead>
            <TableHead className="">Linje</TableHead>
            <TableHead className="">År</TableHead>
            <TableHead className="">Tildelt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="">Nora Normann</TableCell>
            <TableCell className="">1234567</TableCell>
            <TableCell className="">noranormann@gmail.com</TableCell>
            <TableCell className="">MTING</TableCell>
            <TableCell className="">2 Klasse</TableCell>
            <TableCell className="">Sven Svenske</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}

export default intervjufordeling;