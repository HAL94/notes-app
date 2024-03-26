import { Notebook } from "lucide-react";
import Container from "@/components/ui/container";

export default function CreateProject({
  title = "Create new ",
}: {
  title?: string;
}) {
  return (
    <Container className="h-full flex flex-col gap-6">
      <h1 className="text-3xl font-normal">{title}</h1>
      <button className="flex justify-center items-center bg-white p-5 w-[150px] h-[150px] shadow rounded cursor-pointer hover:shadow-xl duration-100 ease-in">
        <Notebook width={35} height={35} className="text-blue-500" />
      </button>
      <p className="font-normal text-3xl">Blank project</p>
    </Container>
  );
}
