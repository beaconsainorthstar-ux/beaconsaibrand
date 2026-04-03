import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PlayCircle, Share2, Video, MessageCircle, Smartphone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CreatorAvatar } from "@/components/creator-avatar";
import { CreatorStatusBadge } from "@/components/status-badge";
import { getCreatorById } from "@/lib/data";
import { PLATFORM_LABELS } from "@/lib/constants";
import {
  formatCompact,
  formatCurrency,
  formatPercent,
} from "@/lib/formatters";
import type { Platform } from "@/lib/types";

const platformIcon = (p: Platform) => {
  switch (p) {
    case "instagram":
      return Smartphone;
    case "youtube":
      return PlayCircle;
    case "facebook":
      return Share2;
    case "twitter":
      return MessageCircle;
    case "tiktok":
    default:
      return Video;
  }
};

export default async function CreatorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const creator = getCreatorById(id);
  if (!creator) notFound();

  const totalFollowers = creator.platforms.reduce(
    (acc, p) => acc + p.followers,
    0,
  );

  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: "Creators", href: "/creators" },
          { label: creator.displayName },
        ]}
        title={creator.displayName}
        description={creator.bio}
        actions={
          <>
            <Button variant="outline" asChild>
              <Link href="/shortlists/shortlist-1">Add to shortlist</Link>
            </Button>
            <Button asChild>
              <Link href={`/campaigns/campaign-2/setup?creator=${creator.id}`}>
                Invite to campaign
              </Link>
            </Button>
          </>
        }
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-fuchsia-600/20 via-background to-violet-600/25 p-8 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <CreatorAvatar
            name={creator.displayName}
            src={creator.avatarUrl}
            size="lg"
            className="h-24 w-24 text-2xl"
          />
          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap gap-2">
              {creator.platforms.map((p) => {
                const Icon = platformIcon(p.platform);
                return (
                  <span
                    key={p.platform}
                    className="inline-flex items-center gap-1.5 rounded-full bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {PLATFORM_LABELS[p.platform]}
                  </span>
                );
              })}
            </div>
            <p className="text-3xl font-semibold tracking-tight">
              {formatCompact(totalFollowers)}{" "}
              <span className="text-lg font-normal text-muted-foreground">
                total followers
              </span>
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-violet-600 hover:opacity-95"
              asChild
            >
              <Link href="mailto:hello@example.com">Collaborate with me</Link>
            </Button>
            <p className="text-xs text-muted-foreground">
              {/* TODO: public media kit URL + theme controls from screenshots. */}
              Themed CTA inspired by media kit overview — link is a placeholder.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Platform presence</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {creator.platforms.map((p) => (
              <div
                key={p.platform}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border px-3 py-2"
              >
                <div>
                  <p className="font-medium">{PLATFORM_LABELS[p.platform]}</p>
                  <p className="text-sm text-muted-foreground">{p.handle}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold tabular-nums">
                    {formatCompact(p.followers)} followers
                  </p>
                  <p className="text-muted-foreground">
                    {formatPercent(p.engagementRate)} engagement
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Relationship</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status</span>
              <CreatorStatusBadge status={creator.status} />
            </div>
            <Separator />
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">Location</span>
              <span className="text-right">{creator.location}</span>
            </div>
            {creator.pricingRange ? (
              <>
                <Separator />
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground">Pricing range</span>
                  <span className="text-right tabular-nums">
                    {formatCurrency(creator.pricingRange.min)} –{" "}
                    {formatCurrency(creator.pricingRange.max)}
                  </span>
                </div>
              </>
            ) : null}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Audience — age</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {creator.audience.ageRanges.map((a) => (
              <div key={a.label} className="flex items-center gap-2">
                <div className="w-16 text-xs text-muted-foreground">{a.label}</div>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${a.percent}%` }}
                  />
                </div>
                <div className="w-10 text-right text-xs tabular-nums">
                  {a.percent}%
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Audience — gender</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {creator.audience.gender.map((g) => (
              <div key={g.label} className="flex items-center gap-2">
                <div className="w-24 text-xs text-muted-foreground">{g.label}</div>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-violet-500"
                    style={{ width: `${g.percent}%` }}
                  />
                </div>
                <div className="w-10 text-right text-xs tabular-nums">
                  {g.percent}%
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {creator.previousBrands?.length ? (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-base">Previous brand work</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {creator.previousBrands.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-border bg-muted/30 px-3 py-1 text-sm"
                >
                  {b}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : null}

      {creator.topContent?.length ? (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-base">Top content</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {creator.topContent.map((t) => (
              <div
                key={t.id}
                className="overflow-hidden rounded-xl border border-border bg-muted/20"
              >
                <div className="relative aspect-video">
                  {t.thumbnailUrl ? (
                    <Image
                      src={t.thumbnailUrl}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-muted" />
                  )}
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">{t.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {PLATFORM_LABELS[t.platform]}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
