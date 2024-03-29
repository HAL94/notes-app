import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import NotebookBannerAction from "./banner/banner-action";
import { useNavigate } from "react-router-dom";
import APP_PATHS from "@/routes/pathnames";

export default function CreateProject({
  title = "Create new ",
}: {
  title?: string;
}) {
  const navigate = useNavigate();

  const onCreateProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const projectName = formData.get('name');

    if (projectName && projectName !== '') {
      navigate(APP_PATHS.PROJECT_PAGE(projectName as string));
    }

  }
  
  return (
    <Container>
      <Popover>
        <PopoverTrigger>
          <NotebookBannerAction title={title} />
        </PopoverTrigger>
        <PopoverContent>
          <form className="flex flex-col justify-start items-start p-3 gap-4" onSubmit={onCreateProject}>
            <Label htmlFor="name">Project Name *</Label>
            <Input name='name' id="name" className="w-full" required />
            <Button type="submit">Create It</Button>
          </form>
        </PopoverContent>
      </Popover>
    </Container>
  );
}
