import { cn } from "@/lib/utils";

export default function SidebarItem({
  icon: Icon,
  title,
  onClick,
  selected,
}: {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  selected: boolean;
}) {
  return (
    <li
      className={cn(
        "p-3 rounded transition-all duration-150 ease-in",
        selected ? "bg-[#333] text-white rounded" : "hover:bg-[#ddd] hover:text-gray-800 hover:rounded-3xl"
      )}
      onClick={onClick}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        {Icon}
        {title}
      </div>
    </li>
  );
}
