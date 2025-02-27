import { DataSokere } from './data/data-sokere';
import { DataTable } from "@/components/data-table"
import type { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export type Soker = {
  id: string;
  name: string;
  tlf: string;
  school: string;
  email: string;
  study: string;
  year: string;
  assigned: string;
}

export const columns: ColumnDef<Soker>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Navn",
  },
  {
    accessorKey: "tlf",
    header: "Telefon",
  },
  {
    accessorKey: "school",
    header: "Skole",
  },
  {
    accessorKey: "email",
    header: "E-post",
  },
  {
    accessorKey: "study",
    header: "Studie",
  },
  {
    accessorKey: "year",
    header: "År",
  },
  {
    accessorKey: "assigned",
    header: "Tildelt",
  },
]

const sokere = () => {
  return (
    <main className="w-screen md:w-full h-full flex flex-col justify-center items-center gap-5 overflow-clip p-1 md:p-6">
      <Tabs defaultValue="account" className="w-[400px]">
        {/* Todo: Routing for Data tables */}
        <TabsList>
          <TabsTrigger value="sokere">Søkere</TabsTrigger>
          <TabsTrigger value="tidligereAssistenter">Tidligere Assistenter</TabsTrigger>
          <TabsTrigger value="intervjufordeling">Intervjufordeling</TabsTrigger>
          <TabsTrigger value="intervjuer">Intervjuer</TabsTrigger>
        </TabsList>
      </Tabs>
      <DataTable columns={columns} data={DataSokere} />
    </main>
  );
}

export default sokere;