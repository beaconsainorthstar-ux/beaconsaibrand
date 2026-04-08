import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Gift,
  Headphones,
  LineChart,
  Radio,
  Search,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";

const DEMO_FORM = "https://form.typeform.com/to/asCaQ4o6";

export function BrandsLanding() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-bold text-white">
              B
            </span>
            <span className="hidden sm:inline">Beacons</span>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-4">
            <span className="hidden text-sm text-zinc-600 md:inline">
              For Brands
            </span>
            <Link
              href="/signin"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              Log in
            </Link>
            <a
              href={DEMO_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Get a demo
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-zinc-100 bg-gradient-to-b from-violet-50/80 via-white to-white px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.15),transparent)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-violet-700">
              Creator Marketing Platform for Brands
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.1]">
              Turn creator marketing into a scalable growth channel
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-zinc-600">
              Replace your creator ops spreadsheet with one platform — and prove ROI to your CMO after every campaign.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={DEMO_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:w-auto"
              >
                Get a demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/signin"
                className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-full border border-zinc-300 bg-white px-8 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 sm:w-auto"
              >
                Log in
              </Link>
            </div>

            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-zinc-200/80 pt-12 sm:grid-cols-3">
              {[
                { label: "Creators", value: "6M+" },
                { label: "Total reach", value: "40B" },
                { label: "Daily Beacons page views", value: "10M+" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-semibold tabular-nums text-zinc-900 sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-xs font-medium uppercase tracking-wider text-zinc-400">
              Trusted by
            </p>
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-8 opacity-70 grayscale">
              {["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"].map(
                (name) => (
                  <div
                    key={name}
                    className="flex h-8 items-center text-sm font-semibold text-zinc-400"
                  >
                    {name}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-100 bg-white px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Turn creator engagement into business impact
            </h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {[
                {
                  icon: Search,
                  title: "Smarter creator sourcing",
                  body: "Go beyond follower counts with audience quality, relevance, and performance insights. Source creators who actually align with your brand.",
                },
                {
                  icon: Gift,
                  title: "Automated gifting operations",
                  body: "Manage end-to-end gifting with a virtual showroom and integrated Shopify workflow to send products without the ops headache.",
                },
                {
                  icon: Users,
                  title: "CRM with social intelligence",
                  body: "Access all your creator relationships data from all campaigns in one place. Now you don't have to guess at top performers—you know.",
                },
                {
                  icon: LineChart,
                  title: "Full funnel measurement",
                  body: "Learn what converts. Bring together creator signals, first party data, and sales in one place to understand what's really driving results.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8"
                >
                  <f.icon className="h-8 w-8 text-violet-600" strokeWidth={1.5} />
                  <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-zinc-600">{f.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <a
                href={DEMO_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Book a demo
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-100 bg-zinc-50 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Tap into a creator ecosystem for brands, from a trusted name in
              the creator economy
            </h2>
            <p className="mt-6 text-lg text-zinc-600">
              With Beacons, you won&apos;t run out of options. Some creator
              platforms have quality, some have reach. Beacons has