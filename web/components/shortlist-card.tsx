import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreatorAvatar } from "@/components/creator-avatar";
import { formatCompact } from "@/lib/formatters";
import type { Shortlist } from "@/lib/types";
import { getCreatorsByIds } from "@/lib/data";

export function ShortlistCard({ shortlist }: { shortlist: Shortlist }) {
  const creators = getCreatorsByIds(shortlist.creatorIds);
  const reach = creators.reduce((acc, c) => acc + c.reach, 0);

  return (
    <Link href={`/shortlists/${shortlist.id}`}>
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-base">{shortlist.name}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {creators.length} creators · {formatCompact(reach)} combined reach
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex -space-x-2">
            {creators.slice(0, 6).map((c) => (
              <CreatorAvatar
                key={c.id}
                name={c.displayName}
                src={c.avatarUrl}
                className="ring-2 ring-card"
                size="sm"
              />
            ))}
            {creators.length > 6 ? (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs ring-2 ring-card">
                +{creators.length - 6}
              </div>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
