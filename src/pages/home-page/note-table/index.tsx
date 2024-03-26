import { projects } from "@/_mock/notes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FolderKanban } from "lucide-react";
import TableFilters from "./filters";

export default function NoteTableView() {
  return (
    <>
      <TableFilters />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-black text-xl">Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium cursor-pointer">
                <div className="flex gap-4">
                  <FolderKanban className="text-blue-500" />
                  <span>{item.name}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
