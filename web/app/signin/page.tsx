import { Suspense } from "react";
import type { Metadata } from "next";
import { SignInForm } from "./signin-form";

export const metadata: Metadata = {
  title: "Sign in | Beacons",
  description: "Log in to your Beacons account.",
};

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-zinc-100 text-zinc-500">
          Loading…
        </div>
      }
    >
      <SignInForm />
    </Suspense>
  );
}
