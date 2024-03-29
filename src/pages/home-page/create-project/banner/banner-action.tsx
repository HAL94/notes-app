import { Notebook } from "lucide-react";

export default function NotebookBannerAction({ title }: { title: string }) {
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <h1 className="text-3xl font-normal">{title}</h1>
      <div className="flex justify-center items-center bg-white p-5 w-[150px] h-[150px] shadow rounded cursor-pointer hover:shadow-xl duration-100 ease-in">
        <Notebook width={35} height={35} className="text-blue-500" />
      </div>
      <p className="font-normal text-3xl">Blank project</p>
    </div>
  );
}
