import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

function initials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const gradients = [
  "from-violet-500 to-fuchsia-500",
  "from-sky-500 to-indigo-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
];

export function CreatorAvatar({
  name,
  src,
  className,
  size = "md",
}: {
  name: string;
  src?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const g = gradients[name.length % gradients.length];
  const dim =
    size === "sm" ? "h-8 w-8 text-xs" : size === "lg" ? "h-14 w-14 text-lg" : "h-10 w-10 text-sm";
  return (
    <Avatar className={cn(dim, className)}>
      {src ? <AvatarImage src={src} alt={name} /> : null}
      <AvatarFallback
        className={cn(
          "bg-gradient-to-br font-semibold text-white",
          g,
        )}
      >
        {initials(name)}
      </AvatarFallback>
    </Avatar>
  );
}
