import { PageHeader } from "@/components/page-header";
import { CreatorsPageClient } from "./creators-page-client";
import { getCreators } from "@/lib/data";

export default function CreatorsPage() {
  const creators = getCreators();

  return (
    <div>
      <PageHeader
        title="Creators"
        description="Discover and manage creator relationships — grid for browsing, table for CRM-style review."
      />
      <CreatorsPageClient initialCreators={creators} />
    </div>
  );
}
