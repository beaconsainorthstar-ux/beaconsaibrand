import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreatorAvatar } from "@/components/creator-avatar";
import { getShortlistById, getCreatorsByIds, getBrand } from "@/lib/data";
import { formatCompact, formatDate, formatPercent } from "@/lib/formatters";
import { PLATFORM_LABELS } from "@/lib/constants";

export default async function ShortlistDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shortlist = getShortlistById(id);
  if (!shortlist) notFound();

  const brand = getBrand();
  const creators = getCreatorsByIds(shortlist.creatorIds);
  const reach = creators.reduce((acc, c) => acc + c.reach, 0);

  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: "Shortlists", href: "/shortlists" },
          { label: shortlist.name },
        ]}
        title={shortlist.name}
        description={
          shortlist.notes ??
          `Roster for ${brand.name} — ${creators.length} creators, ${formatCompact(reach)} combined reach.`
        }
        actions={
          <>
            <Button variant="outline" asChild>
              <Link href="/campaigns/campaign-6/setup">Create campaign</Link>
            </Button>
            <Button asChild>
              <Link href={`/campaigns/campaign-1/setup?from=${shortlist.id}`}>
                Generate proposal
              </Link>
            </Button>
          </>
        }
      />

      <div className="mb-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
        <span>Updated {formatDate(shortlist.updatedAt)}</span>
        <span>·</span>
        <span>{formatCompact(reach)} combined reach</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {creators.map((c) => {
          const p0 = c.platforms[0];
          return (
            <Link key={c.id} href={`/creators/${c.id}`}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col gap-4 p-5">
                  <div className="flex items-start gap-3">
                    <CreatorAvatar name={c.displayName} src={c.avatarUrl} />
                    <div className="min-w-0">
                      <p className="font-semibold">{c.displayName}</p>
                      <p className="text-sm text-muted-foreground">{c.handle}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="rounded-lg bg-muted/40 px-3 py-2">
                      <p className="text-xs text-muted-foreground">Reach</p>
                      <p className="font-medium tabular-nums">
                        {formatCompact(c.reach)}
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/40 px-3 py-2">
                      <p className="text-xs text-muted-foreground">Engagement</p>
                      <p className="font-medium tabular-nums">
                        {p0 ? formatPercent(p0.engagementRate) : "—"}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {c.platforms.slice(0, 3).map((p) => (
                      <span
                        key={p.platform}
                        className="rounded-full bg-background px-2 py-0.5 text-[11px] text-muted-foreground ring-1 ring-border"
                      >
                        {PLATFORM_LABELS[p.platform]}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        {/* TODO: export one-sheet PDF / share link when product defines workflow. */}
        Roster layout inspired by one-sheet views — export is not wired in this prototype.
      </p>
    </div>
  );
}
