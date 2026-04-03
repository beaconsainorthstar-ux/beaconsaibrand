import type { ReportMetric } from "./types";

export function formatCompact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

export function formatPercent(n: number, digits = 1): string {
  return `${n.toFixed(digits)}%`;
}

export function formatCurrency(
  amount: number,
  currency = "USD",
  compact = false,
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 1 : 0,
  }).format(amount);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function formatDateRange(start: string, end: string): string {
  return `${formatDate(start)} – ${formatDate(end)}`;
}

export function formatReportMetric(m: ReportMetric): string {
  switch (m.format) {
    case "compact":
      return formatCompact(m.value);
    case "percent":
      return formatPercent(m.value);
    case "currency":
      return formatCurrency(m.value);
    case "number":
    default:
      return m.value.toLocaleString();
  }
}
