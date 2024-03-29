import { useNavigate, useParams } from "react-router-dom";
import SIDEBAR_CONFIG from "./config";
import SidebarItem from "./sidebar-item";

export default function Sidebar() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  return (
    <nav className="bg-[#f0f0f0] px-3 py-4">
      <ul className="list-none cursor-pointer flex flex-col gap-6">
        {SIDEBAR_CONFIG.map((item) => (
          <SidebarItem key={item.id} icon={item.icon} title={item.title} onClick={() => navigate(item.href(id!))} />
        ))}
      </ul>
    </nav>
  );
}
