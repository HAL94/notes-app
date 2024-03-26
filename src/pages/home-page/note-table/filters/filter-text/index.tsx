export default function FilterTextField() {
  return (
    <input
      type="text"
      className="outline-none rounded bg-white p-1 border-[#d1d1d1] border focus:bg-white/50 focus:border-blue-300 min-w-[300px]"
      placeholder="Search my projects.."
      name="term"
    />
  );
}
