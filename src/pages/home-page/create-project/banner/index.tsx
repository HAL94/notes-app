import { cn } from "@/lib/utils";

export default function NewProjectBanner({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(null, className)}>
      {children}
    </div>
  )
}
