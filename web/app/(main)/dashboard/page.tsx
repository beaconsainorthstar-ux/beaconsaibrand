import Link from "next/link";
import { ArrowRight, FileBarChart, Megaphone, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreatorAvatar } from "@/components/creator-avatar";
import {
  getBrand,
  getCampaigns,
  getCreators,
  getReports,
} from "@/lib/data";
import {
  formatCompact,
  formatCurrency,
  formatDate,
  formatReportMetric,
} from "@/lib/formatters";
import { CampaignStatusBadge } from "@/components/status-badge";

export default function DashboardPage() {
  const brand = getBrand();
  const campaigns = getCampaigns();
  const creators = getCreators();
  const reports = getReports();

  const activeCampaigns = campaigns.filter((c) => c.status === "active");
  const topCreators = [...creators]
    .sort((a, b) => b.reach - a.reach)
    .slice(0, 5);
  const recentReports = [...reports]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 4);

  const totalBudget = activeCampaigns.reduce(
    (acc, c) => acc + (c.budgetMin + c.budgetMax) / 2,
    0,
  );

  return (
    <div>
      <PageHeader
        title={`Welcome back, ${brand.name}`}
        description="Campaign health, creator momentum, and the latest reporting snapshots."
        actions={
          <Button asChild>
            <Link href="/campaigns">New campaign</Link>
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Active campaigns"
          value={String(activeCampaigns.length)}
          hint={`${campaigns.filter((c) => c.status === "draft").length} drafts`}
        />
        <StatCard
          title="Tracked creators"
          value={String(creators.length)}
          hint="Across all shortlists"
        />
        <StatCard
          title="Est. spend (active)"
          value={formatCurrency(totalBudget, "USD", true)}
          hint="Midpoint of budget ranges"
        />
        <StatCard
          title="Live reports"
          value={String(reports.filter((r) => r.status === "live").length)}
          hint={`${reports.length} total`}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">
              Active campaigns
            </CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/campaigns" className="gap-1">
                View all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeCampaigns.length === 0 ? (
              <p className="text-sm text-muted-foreground">No active campaigns.</p>
            ) : (
              activeCampaigns.map((c) => (
                <Link
                  key={c.id}
                  href={`/campaigns/${c.id}`}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-3 py-2 transition-colors hover:bg-muted/40"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium">{c.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {c.creatorIds.length} creators
                    </p>
                  </div>
                  <CampaignStatusBadge status={c.status} />
                </Link>
              ))
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">
              Pending approvals
            </CardTitle>
            <Badge variant="warning">Mock</Badge>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              {/* TODO: wire to real approval queue when backend exists. */}
              Deliverables awaiting brand sign-off in July Travel Campaign.
            </p>
            <ul className="space-y-2">
              {["Carousel: 5 travel hacks", "Recipe collab teaser", "Long-form travel vlog"].map(
                (t) => (
                  <li
                    key={t}
                    className="flex items-center justify-between rounded-md border border-dashed border-border px-3 py-2"
                  >
                    <span>{t}</span>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/campaigns/campaign-1/deliverables">Review</Link>
                    </Button>
                  </li>
                ),
              )}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Top creators</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-3">
            {topCreators.map((c) => (
              <Link
                key={c.id}
                href={`/creators/${c.id}`}
                className="flex items-center gap-3 rounded-lg border border-transparent px-1 py-1 hover:border-border hover:bg-muted/30"
              >
                <CreatorAvatar name={c.displayName} src={c.avatarUrl} />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{c.displayName}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatCompact(c.reach)} reach
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Recent reports</CardTitle>
            <FileBarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-3">
            {recentReports.map((r) => {
              const primary = r.summaryMetrics[2];
              return (
                <Link
                  key={r.id}
                  href={`/reports/${r.id}`}
                  className="block rounded-lg border border-border bg-muted/15 px-3 py-2 transition-colors hover:bg-muted/35"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate font-medium">{r.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Updated {formatDate(r.createdAt)}
                      </p>
                    </div>
                    {primary ? (
                      <span className="shrink-0 text-sm font-semibold tabular-nums">
                        {formatReportMetric(primary)}
                      </span>
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <Link href="/creators" className="gap-2">
            <Users className="h-4 w-4" />
            Browse creators
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/shortlists" className="gap-2">
            Open shortlists
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/reports" className="gap-2">
            <Megaphone className="h-4 w-4" />
            Campaign reports
          </Link>
        </Button>
      </div>
    </div>
  );
}
