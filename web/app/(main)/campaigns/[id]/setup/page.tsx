import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { CampaignSetupForm } from "./setup-form";
import { getCampaignById, getCreatorsByIds, getBrand } from "@/lib/data";

export default async function CampaignSetupPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ creator?: string; from?: string }>;
}) {
  const { id } = await params;
  const sp = await searchParams;
  const campaign = getCampaignById(id);
  if (!campaign) notFound();

  const brand = getBrand();
  const selectedCreators = getCreatorsByIds(campaign.creatorIds);
  const prefillCreatorId = sp.creator;

  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: "Campaigns", href: "/campaigns" },
          { label: campaign.name, href: `/campaigns/${campaign.id}` },
          { label: "Setup" },
        ]}
        title="Campaign setup"
        description="Configure objective, budget, platforms, and creator lineup. Saves are mocked locally for the prototype."
        actions={
          <Button variant="outline" asChild>
            <Link href={`/campaigns/${campaign.id}`}>Back to campaign</Link>
          </Button>
        }
      />

      <CampaignSetupForm
        campaign={campaign}
        brandName={brand.name}
        selectedCreators={selectedCreators}
        prefillCreatorId={prefillCreatorId}
      />
    </div>
  );
}
