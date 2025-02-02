// create table takes in header and content and maps the content to a table,
// header is a string of the table headers and content is an array of objects
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Props {
  header: string[];
  content: object[];  // Array of objects with dynamic fields
}

const mapToTable = ({ header, content }: Props) => {
  return content.map((element, index) => (
    <TableRow key={index.valueOf()} >
      {Object.values(element).map((value, valueIndex) => (
        <TableCell
          key={`${index.valueOf()}-${valueIndex.valueOf()}`}
          className="whitespace-nowrap text-xs text-center py-3 px-6"
        >
          {value}
        </TableCell>
      ))}
    </TableRow>
  ));
};

const CreateTable = ({ header, content }: Props) => {
  return (
    <Table className="overflow-clip">
      <TableHeader>
        <TableRow>
          {header.map((value, index) => (
            <TableHead key={index.valueOf()}>
              {value}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {mapToTable({ header, content} )}
      </TableBody>
    </Table>
  );
};

export default CreateTable;
