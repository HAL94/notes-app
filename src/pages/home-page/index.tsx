import Container from "@/components/ui/container";
import CreateProject from "./create-project";
import NoteTableView from "./note-table";
import NewProjectBanner from "./create-project/banner";

export default function Home() {
  return (
    <div className="w-full flex flex-col h-screen">
      <NewProjectBanner className="w-full bg-[#f2eaf7] min-h-[40vh]">
        <CreateProject />
      </NewProjectBanner>
      <div className="w-full flex-1 h-full bg-[#fafafa]">
        <Container>
          <NoteTableView />
        </Container>
      </div>
    </div>
  )
}
