import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { getBrand } from "@/lib/data";

export default function SettingsPage() {
  const brand = getBrand();

  return (
    <div>
      <PageHeader
        title="Settings"
        description="Account, team, and notification preferences — all mock fields."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Brand profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="bn">Brand name</Label>
              <Input id="bn" defaultValue={brand.name} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" defaultValue={brand.slug} />
            </div>
            <Button type="button" variant="secondary" disabled>
              Save (mock)
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Team</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {["you@brand.com", "partner@brand.com"].map((email) => (
              <div
                key={email}
                className="flex items-center justify-between rounded-lg border border-border px-3 py-2"
              >
                <span>{email}</span>
                <span className="text-xs text-muted-foreground">Admin</span>
              </div>
            ))}
            <Button type="button" variant="outline" size="sm" disabled>
              Invite teammate
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium">Deliverable submissions</p>
                <p className="text-xs text-muted-foreground">
                  Email when a creator submits assets.
                </p>
              </div>
              <Switch defaultChecked aria-label="Deliverable submissions" />
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium">Weekly digest</p>
                <p className="text-xs text-muted-foreground">
                  Summary of campaign + report activity.
                </p>
              </div>
              <Switch aria-label="Weekly digest" />
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        {/* TODO: theme toggle + SSO when auth lands. */}
        Optional dark/light theme toggle can be added alongside next-themes.
      </p>
    </div>
  );
}
