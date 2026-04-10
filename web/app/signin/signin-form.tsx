"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { captureEvent, identifyUser } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DEMO_USER = "demo";
const DEMO_PASS = "demo";

export function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const origin = searchParams.get("originPage") ?? "home";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (userId.trim() === DEMO_USER && password === DEMO_PASS) {
      identifyUser("demo-brand-user", { prototype: true });
      captureEvent("sign_in_succeeded", { method: "demo_credentials" });
      router.push("/dashboard");
      return;
    }
    captureEvent("sign_in_failed", { reason: "invalid_credentials" });
    setError("Invalid email or password. Use demo / demo for this prototype.");
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-100">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link
            href="https://beacons.ai"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
          >
            beacons.ai
          </Link>
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-800">
            Back to brands
          </Link>
        </div>
      </header>

      <div className="flex flex-1 flex-col items-center px-4 py-12 sm:py-16">
        <Link href="/" className="mb-8 flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-lg font-bold text-white shadow-sm">
            B
          </span>
          <span className="text-xl font-semibold text-zinc-900">Beacons</span>
        </Link>

        <div className="w-full max-w-[400px] rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h1 className="text-center text-2xl font-semibold tracking-tight text-zinc-900">
            Log in
          </h1>
          <p className="mt-2 text-center text-sm text-zinc-500">
            Sign in to your account
            {origin ? (
              <span className="block text-xs text-zinc-400">
                (origin: {origin})
              </span>
            ) : null}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="userid" className="text-zinc-700">
                Email or username
              </Label>
              <Input
                id="userid"
                name="userid"
                type="text"
                autoComplete="username"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="border-zinc-300 bg-white"
                placeholder="you@email.com"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-zinc-700">
                  Password
                </Label>
                <button
                  type="button"
                  className="text-xs font-medium text-violet-600 hover:text-violet-700"
                >
                  Forgot your password?
                </button>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-zinc-300 bg-white"
                placeholder="••••••••"
              />
            </div>

            {error ? (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            ) : null}

            <Button
              type="submit"
              className="h-11 w-full rounded-lg bg-zinc-900 text-base font-semibold hover:bg-zinc-800"
            >
              Sign in
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-zinc-400">
            Prototype: use <strong className="text-zinc-600">demo</strong> /{" "}
            <strong className="text-zinc-600">demo</strong> to open the
            dashboard.
          </p>
        </div>

        <p className="mt-8 max-w-md text-center text-xs text-zinc-500">
          This page mirrors the structure of account sign-in flows. Query
          parameters from the reference URL are preserved when you use{" "}
          <Link href="/login" className="text-violet-600 underline">
            /login
          </Link>{" "}
          redirect.
        </p>
      </div>
    </div>
  );
}
