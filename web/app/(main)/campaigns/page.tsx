import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { CampaignCard } from "@/components/campaign-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { getCampaigns } from "@/lib/data";

export default function CampaignsPage() {
  const campaigns = getCampaigns();
  const draft = campaigns.filter((c) => c.status === "draft");
  const active = campaigns.filter((c) => c.status === "active");
  const completed = campaigns.filter((c) => c.status === "completed");

  return (
    <div>
      <PageHeader
        title="Campaigns"
        description="Track budgets, creators, deliverables, and reporting in one place."
        actions={
          <Button asChild>
            <Link href="/campaigns/campaign-6/setup">New campaign</Link>
          </Button>
        }
      />

      <Tabs defaultValue="active" className="w-full">
        <TabsList>
          <TabsTrigger value="draft">Draft ({draft.length})</TabsTrigger>
          <TabsTrigger value="active">Active ({active.length})</TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({completed.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="draft" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            {draft.map((c) => (
              <CampaignCard key={c.id} campaign={c} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            {active.map((c) => (
              <CampaignCard key={c.id} campaign={c} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            {completed.map((c) => (
              <CampaignCard key={c.id} campaign={c} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
