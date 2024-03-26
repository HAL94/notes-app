import { Clock3, Layers, Star } from "lucide-react";
import FilterBadge from "./filter-badge";
import FilterTextField from "./filter-text";

export default function TableFilters() {
  return (
    <div className="flex mb-4 justify-between items-center">
      <div className="flex gap-4 ml-3">
        <FilterBadge
          variant={"outline"}
          text="All"
          Icon={<Layers size={"14px"} />}
        />
        <FilterBadge
          variant={"outline"}
          text="RecentlyOpened"
          Icon={<Clock3 size={"14px"} />}
        />
        <FilterBadge
          variant={"outline"}
          text="Favourites"
          Icon={<Star size={"14px"} />}
        />
      </div>

      <div>
        <FilterTextField />
      </div>
    </div>
  );
}
