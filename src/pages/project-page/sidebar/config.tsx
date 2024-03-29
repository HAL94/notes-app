import APP_PATHS from "@/routes/pathnames";
import { File, Home, NotebookPen, SquareKanban } from "lucide-react";

const SIDEBAR_CONFIG = [
  {
    id: "home",
    icon: <Home />,
    title: "Home",
    href: () => APP_PATHS.HOME_PAGE
  },
  {
    id: "tasks",
    icon: <SquareKanban/>,
    title: "Tasks",
    href: (projectId: string) => '/' + APP_PATHS.TASKS_PAGE(projectId)
  },
  {
    id: "editor",
    icon: <NotebookPen/>,
    title: "Editor",
    href: (projectId: string) => '/' + APP_PATHS.EDITOR_PAGE(projectId)
  },
  {
    id: "resources",
    icon: <File/>,
    title: "Resources",
    href: (projectId: string) => '/' + APP_PATHS.RESOURCES_PAGE(projectId)
  },
];

export default SIDEBAR_CONFIG;
