import Image from "next/image";
import { beaconsWordmarkUrl } from "@/lib/beacons-wordmark";
import { cn } from "@/lib/utils";

const WORDMARK_WIDTH = 120;
const WORDMARK_HEIGHT = 33;

export function BeaconsWordmark({
  className,
  priority,
  /** Use on dark backgrounds (e.g. dark-mode sidebar) so the dark asset reads clearly. */
  invertOnDark = false,
}: {
  className?: string;
  priority?: boolean;
  invertOnDark?: boolean;
}) {
  return (
    <Image
      src={beaconsWordmarkUrl(816)}
      alt="Beacons"
      width={WORDMARK_WIDTH}
      height={WORDMARK_HEIGHT}
      className={cn(
        "h-7 w-auto sm:h-8",
        invertOnDark && "dark:brightness-0 dark:invert",
        className,
      )}
      priority={priority}
    />
  );
}
