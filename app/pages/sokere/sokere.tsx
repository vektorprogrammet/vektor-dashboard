import { sokere } from '../data/sokere';
import { Soker, columns } from "./columns"
import { DataTable } from "./data-table"

const intervjufordeling = () => {
  return (
    <main className="w-screen md:w-full">
      <DataTable columns={columns} data={sokere} />
    </main>
  );
}

export default intervjufordeling;