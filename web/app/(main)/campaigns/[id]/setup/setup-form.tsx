"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { CreatorAvatar } from "@/components/creator-avatar";
import type { Campaign, Creator } from "@/lib/types";
import { PLATFORM_LABELS } from "@/lib/constants";
import type { Platform } from "@/lib/types";

const PLATFORMS: Platform[] = [
  "instagram",
  "tiktok",
  "youtube",
  "twitter",
  "facebook",
];

export function CampaignSetupForm({
  campaign,
  brandName,
  selectedCreators,
  prefillCreatorId,
}: {
  campaign: Campaign;
  brandName: string;
  selectedCreators: Creator[];
  prefillCreatorId?: string;
}) {
  const [saved, setSaved] = useState(false);
  const [name, setName] = useState(campaign.name);
  const [objective, setObjective] = useState(campaign.objective);
  const [budgetMin, setBudgetMin] = useState(String(campaign.budgetMin));
  const [budgetMax, setBudgetMax] = useState(String(campaign.budgetMax));
  const [platforms, setPlatforms] = useState<Platform[]>(campaign.platforms);

  const togglePlatform = (p: Platform) => {
    setPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
    );
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Basics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="brand">Brand</Label>
            <Input id="brand" value={brandName} readOnly />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Campaign name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="objective">Objective</Label>
            <textarea
              id="objective"
              className="min-h-[88px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="min">Budget min (USD)</Label>
              <Input
                id="min"
                inputMode="numeric"
                value={budgetMin}
                onChange={(e) => setBudgetMin(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="max">Budget max (USD)</Label>
              <Input
                id="max"
                inputMode="numeric"
                value={budgetMax}
                onChange={(e) => setBudgetMax(e.target.value)}
              />
            </div>
          </div>
          <Separator />
          <div>
            <p className="text-sm font-medium">Platforms</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {PLATFORMS.map((p) => (
                <label
                  key={p}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm"
                >
                  <Checkbox
                    checked={platforms.includes(p)}
                    onCheckedChange={() => togglePlatform(p)}
                  />
                  {PLATFORM_LABELS[p]}
                </label>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="text-base">Selected creators</CardTitle>
          <p className="text-sm text-muted-foreground">
            {prefillCreatorId
              ? `Query hint: ${prefillCreatorId}`
              : "Roster from mock campaign data."}
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          {selectedCreators.map((c) => (
            <Link
              key={c.id}
              href={`/creators/${c.id}`}
              className="flex items-center gap-3 rounded-lg border border-transparent px-1 py-1 hover:border-border"
            >
              <CreatorAvatar name={c.displayName} src={c.avatarUrl} size="sm" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{c.displayName}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {c.handle}
                </p>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      <div className="lg:col-span-2 flex flex-wrap items-center gap-3">
        <Button
          type="button"
          onClick={() => {
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
          }}
        >
          Save draft (mock)
        </Button>
        {saved ? (
          <span className="text-sm text-emerald-500">Saved locally (mock).</span>
        ) : null}
        <p className="text-xs text-muted-foreground">
          {/* TODO: persist via API; today this only updates React state. */}
        </p>
      </div>
    </div>
  );
}
