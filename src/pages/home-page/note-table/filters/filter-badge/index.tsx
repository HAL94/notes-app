import { Badge, BadgeVariant } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function FilterBadge({
  className,
  Icon,
  text,
  variant,
}: {
  className?: string;
  Icon?: React.ReactNode;
  text: string;
  variant: BadgeVariant;
}) {
  return (
    <Badge
      variant={variant}
      className={cn(
        "py-1.5 flex gap-2 cursor-pointer hover:shadow bg-[#f0f0f0] transition-all duration-100 ease-in",
        className
      )}
    >
      {Icon}
      <span>{text}</span>
    </Badge>
  );
}
