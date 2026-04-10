"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHReactProvider } from "posthog-js/react";
import { useEffect, type ReactNode } from "react";

export function PostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_TOKEN?.trim();
    const host =
      process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() ||
      "https://us.i.posthog.com";

    if (!key) {
      if (process.env.NODE_ENV === "development") {
        console.info(
          "[analytics] PostHog off: add NEXT_PUBLIC_POSTHOG_TOKEN to web/.env.local",
        );
      }
      return;
    }

    posthog.init(key, {
      api_host: host,
      capture_pageview: false,
      capture_pageleave: true,
      defaults: "2026-01-30",
    });
  }, []);

  return <PHReactProvider client={posthog}>{children}</PHReactProvider>;
}
