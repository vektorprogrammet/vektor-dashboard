import CreateTable from "@/components/create-table";
import { data } from './data/intervjufordeling';

const intervjufordeling = () => {
  return (
    <main className="w-screen md:w-full">
        <CreateTable
          header={[
            "Navn",
            "Skole",
            "E-post",
            "Semester",
            "Avdeling",
            "Bolk",
            "Dag",
          ]}
          content={data.Assistenter}
        />
    </main>
  );
}

export default intervjufordeling;