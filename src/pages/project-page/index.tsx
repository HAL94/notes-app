import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function ProjectPage() {
  return (
    <div className="w-full flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <main>
          content here
          <Outlet />
        </main>
      </div>
    </div>
  );
}
