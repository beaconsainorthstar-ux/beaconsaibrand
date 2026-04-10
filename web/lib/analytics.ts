import posthog from "posthog-js";

function enabled() {
  return Boolean(
    typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_TOKEN?.trim(),
  );
}

/** Custom product event (call from client components / handlers). */
export function captureEvent(
  name: string,
  properties?: Record<string, unknown>,
) {
  if (!enabled()) return;
  try {
    posthog.capture(name, properties);
  } catch {
    /* ignore */
  }
}

/** Call after sign-in so sessions tie to a stable user in PostHog. */
export function identifyUser(
  distinctId: string,
  properties?: Record<string, unknown>,
) {
  if (!enabled()) return;
  try {
    posthog.identify(distinctId, properties);
  } catch {
    /* ignore */
  }
}

export function resetAnalytics() {
  if (!enabled()) return;
  try {
    posthog.reset();
  } catch {
    /* ignore */
  }
}
