import { Input } from "@/components/ui/input";

export default function FilterTextField() {
  return (
    <Input
      type="text"
      placeholder="Search my projects.."
      name="term"
    />
  );
}
