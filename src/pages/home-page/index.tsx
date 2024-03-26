import Container from "@/components/ui/container";
import CreateProject from "./create-project";
import NoteTableView from "./note-table";

export default function Home() {
  return (
    <div className="w-full flex flex-col h-screen">
      <CreateProject />
      <div className="w-full flex-1 h-full bg-[#fafafa]">
        <Container>
          <NoteTableView />
        </Container>
      </div>
    </div>
  )
}
