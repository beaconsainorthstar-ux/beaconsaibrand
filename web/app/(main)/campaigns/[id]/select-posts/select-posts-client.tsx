"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import type { TopPost } from "@/lib/types";

export function SelectPostsClient({
  campaignId,
  reportId,
  posts,
}: {
  campaignId: string;
  reportId: string | null;
  posts: TopPost[];
}) {
  const [selected, setSelected] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(posts.map((p) => [p.id, true])),
  );

  return (
    <>
      <div className="mx-auto grid max-w-lg gap-3">
        {posts.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <label className="flex cursor-pointer gap-3 p-3">
              <Checkbox
                checked={selected[p.id] ?? false}
                onCheckedChange={(v) =>
                  setSelected((s) => ({ ...s, [p.id]: Boolean(v) }))
                }
                className="mt-1"
              />
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-muted">
                {p.thumbnailUrl ? (
                  <Image
                    src={p.thumbnailUrl}
                    alt=""
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              <div className="min-w-0 flex-1">
                <p className="line-clamp-3 text-sm font-medium">{p.caption}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.impressions.toLocaleString()} impressions
                </p>
              </div>
            </label>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          size="lg"
          className="w-full max-w-lg"
          onClick={() => {
            alert(
              `Mock: ${Object.values(selected).filter(Boolean).length} posts selected for campaign ${campaignId}.`,
            );
          }}
        >
          Confirm selection
        </Button>
      </div>
      {reportId ? (
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Will sync to report {reportId} when backend exists.
        </p>
      ) : null}
    </>
  );
}
