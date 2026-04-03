import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ReportCharts } from "@/components/report-charts";
import { SendReportDialog } from "@/components/send-report-dialog";
import { CreatorAvatar } from "@/components/creator-avatar";
import {
  getReportById,
  getCampaignById,
  getCreatorById,
} from "@/lib/data";
import { formatDate, formatPercent, formatReportMetric } from "@/lib/formatters";
import { PLATFORM_LABELS } from "@/lib/constants";
import Image from "next/image";

export default async function ReportDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const report = getReportById(id);
  if (!report) notFound();

  const campaign = getCampaignById(report.campaignId);

  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: "Reports", href: "/reports" },
          { label: report.name },
        ]}
        title={report.name}
        description={
          campaign
            ? `${campaign.name} · Updated ${formatDate(report.createdAt)}`
            : formatDate(report.createdAt)
        }
        actions={
          <>
            <Button variant="outline" asChild>
              <Link href={`/campaigns/${report.campaignId}`}>Campaign</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/campaigns/${report.campaignId}/select-posts`}>
                Select posts
              </Link>
            </Button>
            <SendReportDialog reportName={report.name} />
          </>
        }
      />

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Badge variant={report.status === "live" ? "success" : "secondary"}>
          {report.status}
        </Badge>
        <span className="text-sm text-muted-foreground">
          Overview / Platforms / Creators / Posts mirror the reporting nav pattern from screenshots.
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {report.summaryMetrics.map((m) => (
          <Card key={m.label}>
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">{m.label}</p>
              <p className="mt-1 text-2xl font-semibold tabular-nums">
                {formatReportMetric(m)}
                {m.changePercent != null ? (
                  <span className="ml-2 text-sm font-normal text-emerald-500">
                    +{m.changePercent}%
                  </span>
                ) : null}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="mt-8 w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="creators">Creators</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <ReportCharts report={report} />
        </TabsContent>
        <TabsContent value="platforms" className="mt-4">
          <Card>
            <CardContent className="space-y-3 p-6">
              {report.platformShare.map((p) => (
                <div
                  key={p.platform}
                  className="flex items-center justify-between rounded-lg border border-border px-3 py-2"
                >
                  <span>{PLATFORM_LABELS[p.platform]}</span>
                  <span className="font-medium tabular-nums">{p.percent}%</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="creators" className="mt-4">
          <Card>
            <CardContent className="divide-y divide-border p-0">
              {report.creatorBreakdown.map((row) => {
                const c = getCreatorById(row.creatorId);
                return (
                  <div
                    key={row.creatorId}
                    className="flex flex-wrap items-center justify-between gap-3 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      {c ? (
                        <CreatorAvatar name={c.displayName} src={c.avatarUrl} />
                      ) : null}
                      <div>
                        <p className="font-medium">
                          {c?.displayName ?? row.creatorId}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Reach · engagement
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-sm tabular-nums">
                      <p className="font-semibold">
                        {row.reach.toLocaleString()} reach
                      </p>
                      <p className="text-muted-foreground">
                        {row.engagement.toLocaleString()} engagement
                      </p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="posts" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            {report.topPosts.map((p) => {
              const c = getCreatorById(p.creatorId);
              return (
                <Card key={p.id}>
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-muted">
                      {p.thumbnailUrl ? (
                        <Image
                          src={p.thumbnailUrl}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : null}
                    </div>
                    <div className="space-y-1 p-4">
                      <p className="text-sm font-medium">{p.caption}</p>
                      <p className="text-xs text-muted-foreground">
                        {c?.displayName ?? p.creatorId} ·{" "}
                        {PLATFORM_LABELS[p.platform]}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {p.impressions.toLocaleString()} impressions ·{" "}
                        {formatPercent(p.engagementRate)} ER
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
