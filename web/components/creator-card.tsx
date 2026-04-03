import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CreatorAvatar } from "@/components/creator-avatar";
import { CreatorStatusBadge } from "@/components/status-badge";
import { formatCompact, formatPercent } from "@/lib/formatters";
import type { Creator } from "@/lib/types";
import { cn } from "@/lib/utils";

export function CreatorCard({
  creator,
  className,
}: {
  creator: Creator;
  className?: string;
}) {
  const primary = creator.platforms[0];
  return (
    <Link href={`/creators/${creator.id}`} className={cn("block", className)}>
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardContent className="flex gap-4 p-4">
          <CreatorAvatar name={creator.displayName} src={creator.avatarUrl} />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="truncate font-semibold">{creator.displayName}</p>
                <p className="truncate text-sm text-muted-foreground">
                  {creator.handle}
                </p>
              </div>
              <CreatorStatusBadge status={creator.status} />
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span>Reach {formatCompact(creator.reach)}</span>
              {primary ? (
                <span>
                  {formatPercent(primary.engagementRate)} engagement
                </span>
              ) : null}
              <span className="truncate">{creator.location}</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {creator.categories.slice(0, 3).map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
