"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { APP_NAME } from "@/lib/constants";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15),transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(168,85,247,0.12),transparent_50%)]" />
      <div className="relative z-10 w-full max-w-md space-y-8 rounded-2xl border border-border bg-card/80 p-8 shadow-xl backdrop-blur">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
            B
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">{APP_NAME}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to manage creators, campaigns, and reports.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@brand.com"
              autoComplete="off"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full" variant="secondary" disabled>
            Sign in
          </Button>
          <div className="relative py-2 text-center text-xs text-muted-foreground">
            <span className="bg-card px-2">or</span>
          </div>
          <Button
            className="w-full"
            onClick={() => router.push("/dashboard")}
          >
            Continue as Demo Brand User
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          {/* TODO: replace with real auth (e.g. Supabase Auth). */}
          Mock login only — no credentials are validated.
        </p>
      </div>
    </div>
  );
}
