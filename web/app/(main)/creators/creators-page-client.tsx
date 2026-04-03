"use client";

import { useCallback, useState } from "react";
import { LayoutGrid, Table2 } from "lucide-react";
import { CreatorFilterBar } from "@/components/filter-bar";
import { CreatorCard } from "@/components/creator-card";
import { CreatorsTable } from "@/components/creators-table";
import { Button } from "@/components/ui/button";
import type { Creator } from "@/lib/types";
import { cn } from "@/lib/utils";

export function CreatorsPageClient({
  initialCreators,
}: {
  initialCreators: Creator[];
}) {
  const [filtered, setFiltered] = useState(initialCreators);
  const [view, setView] = useState<"grid" | "table">("grid");
  const onFiltered = useCallback((f: Creator[]) => setFiltered(f), []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <CreatorFilterBar creators={initialCreators} onFiltered={onFiltered} />
        <div className="flex gap-1 rounded-lg border border-border p-1">
          <Button
            type="button"
            variant={view === "grid" ? "secondary" : "ghost"}
            size="sm"
            className={cn(view === "grid" && "shadow-sm")}
            onClick={() => setView("grid")}
          >
            <LayoutGrid className="mr-1 h-4 w-4" />
            Grid
          </Button>
          <Button
            type="button"
            variant={view === "table" ? "secondary" : "ghost"}
            size="sm"
            className={cn(view === "table" && "shadow-sm")}
            onClick={() => setView("table")}
          >
            <Table2 className="mr-1 h-4 w-4" />
            CRM table
          </Button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((c) => (
            <CreatorCard key={c.id} creator={c} />
          ))}
        </div>
      ) : (
        <CreatorsTable creators={filtered} />
      )}

      {filtered.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground">
          No creators match your filters.
        </p>
      ) : null}
    </div>
  );
}
