export default function SidebarItem({
  icon: Icon,
  title,
  onClick
}: {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void
}) {
  return (
    <li className="hover:bg-[#333] hover:text-white p-3 hover:rounded transition-all duration-150 ease-in" onClick={onClick}>
      <div className="flex flex-col justify-center items-center gap-2">
        {Icon}
        {title}
      </div>
    </li>
  );
}
