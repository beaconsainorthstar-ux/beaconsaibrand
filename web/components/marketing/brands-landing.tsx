import Image from "next/image";
import Link from "next/link";
import { Figtree } from "next/font/google";
import {
  BarChart3,
  ChevronDown,
  Headphones,
  LineChart,
  Radio,
  Share2,
  Sparkles,
} from "lucide-react";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const CDN = "https://beacons.ai/_framerusercontent/images";

const img = (file: string, w: number) =>
  `${CDN}/${file}?width=${w}&quality=85`;

const BOOK_DEMO =
  "https://beacons.notion.site/33c2815a497f80af82d8d9fdbe0d0f5f";
const SIGNUP =
  "https://account.beacons.ai/signup?originPage=home&cta_location=header&cta_text=sign_up&referring_user=direct&referral_type=sign_up";
const SIGNIN =
  "https://account.beacons.ai/signin?originPage=home&cta_location=header&cta_text=log_in&referring_user=direct&referral_type=log_in";

const creatorPhotos = [
  "ILB7V1b84KUjMAjxHHu5RoXGr6I.jpeg",
  "BQdFtM1Pu0ES6xJKdurn8zfRHo.jpeg",
  "QnjGJmrYLQf1u2H4kbK44lRg.jpeg",
  "BRbdXnOcKpbqEA4J6BTyyrE4.jpeg",
  "ikIUj8rcvAgZxSgjIIDzgmXCaY.jpeg",
] as const;

const featureBlocks = [
  {
    title: "Smarter creator sourcing",
    body: "Go beyond follower counts with audience quality, relevance, and performance insights. Source creators who actually align with your brand.",
    image: "w8HvUOwyWn5yFPmPk0AfsysO5u0.webp",
  },
  {
    title: "Automated gifting operations",
    body: "Manage end-to-end gifting with a virtual showroom and integrated Shopify workflow to send products without the ops headache.",
    image: "299v0l1LjriBBlAC2astBV8RJ5I.png",
  },
  {
    title: "CRM with social intelligence",
    body: "Access all your creator relationships data from all campaigns in one place. Now you don't have to guess at top performers—you know.",
    image: "QMctAOhq8dEpiQsbACxK1NvIwr4.png",
  },
  {
    title: "Full funnel measurement",
    body: "Learn what converts. Bring together creator signals, first party data, and sales in one place to understand what's really driving results.",
    image: "JRRUmY0BoXsy9Murolmillmsso.png",
  },
] as const;

const whyItems = [
  { icon: Sparkles, label: "Engaged Creator System" },
  { icon: Share2, label: "Social Intelligence" },
  { icon: Headphones, label: "Concierge Service" },
  { icon: BarChart3, label: "Affiliate Compatible" },
  { icon: Radio, label: "Social Listening" },
  { icon: LineChart, label: "Automated Reporting" },
] as const;

const testimonials = [
  {
    quote:
      "Perplexity partners with creators who are deeply curious and gifted storytellers. Together, we bring to life the ways in which Perplexity satisfies curiosities, solves problems, and simplifies lives.",
    name: "Will Brooke",
    title: "Head of Talent Partnership, Perplexity",
  },
  {
    quote:
      "The Beacons brand portal has been such a time saver when it comes to finding quality content creators to work with for our launches!",
    name: "Corsair",
    title: "",
  },
  {
    quote:
      "We're thrilled to partner with Beacons and their network of engaging, creative, and passionate creators who will bring our products to life in a fun and genuine way",
    name: "Stanley",
    title: "",
  },
  {
    quote:
      "As a pioneer in botanical beauty, Yves Rocher is thrilled to collaborate with Beacons.ai to empower creators who share our passion for sustainability and self-care. We can't wait to see how their creativity inspires new ways to experience our products",
    name: "Yves Rocher",
    title: "",
  },
  {
    quote:
      "As a champion of local discovery and everyday adventure, Groupon is thrilled to partner with Beacons.ai to empower creators who share our passion for supporting small businesses and unforgettable experiences.",
    name: "Groupon",
    title: "",
  },
  {
    quote:
      "Sur La Table is the place for an unsurpassed selection of exclusive and premium-quality goods for the kitchen and table. We're excited to share our passion for cooking and entertaining with the Beacons.ai network of creators.",
    name: "Sur La Table",
    title: "",
  },
  {
    quote:
      "Beacons replaced the fragmented tools and manual workflows we used before by unifying our creator marketing process into one platform, reducing operational effort while increasing impact. It gives us end-to-end visibility across creators, content, gifting, and outcomes so we can make smarter, data-driven decisions. The team has been a strong partner throughout: responsive, thoughtful, and quick to build based on real brand needs.",
    name: "Lucy",
    title: "Irritated Skin",
  },
  {
    quote:
      "Beacons has been a great extension of our marketing team, helping us streamline and scale creator initiatives. We've significantly reduced the time spent building campaigns and onboarding creators, while gaining clearer visibility into what's working. Their tools have helped us uncover blind spots so we can run more efficient, intentional creator campaigns.",
    name: "Victoria",
    title: "Chemist Confessions",
  },
] as const;

const faqItems = [
  "What is a creator gifting platform?",
  "Is influencer gifting effective for beauty brands?",
  "Can Beacons be used for paid creator campaigns?",
  "How do beauty brands track ROI from influencer gifting?",
  "How is Beacons different from other influencer marketing tools?",
] as const;

function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800 ${className}`}
    >
      {children}
    </a>
  );
}

function GhostButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 ${className}`}
    >
      {children}
    </a>
  );
}

export function BrandsLanding() {
  return (
    <div
      className={`${figtree.className} min-h-screen bg-white text-zinc-900 antialiased`}
    >
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 sm:h-16 sm:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="Beacons home"
          >
            <Image
              src={img("HymXJwVpqNNxOplRg4lKlnqzByw.png", 816)}
              alt=""
              width={120}
              height={33}
              className="h-7 w-auto sm:h-8"
              priority
            />
          </Link>
          <nav
            className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex"
            aria-label="Product"
          >
            <a href="https://beacons.ai/" className="hover:text-zinc-900">
              For Creators
            </a>
            <a href="https://beacons.ai/i/managers" className="hover:text-zinc-900">
              For Managers
            </a>
            <a href="https://beacons.ai/i/brands" className="text-zinc-900">
              For Brands
            </a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={SIGNIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              Login
            </a>
            <a
              href={SIGNUP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-semibold text-white hover:bg-zinc-800 sm:h-10 sm:px-5"
            >
              Start for free
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-zinc-100 px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
          <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
              For Brands
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
              {creatorPhotos.map((file) => (
                <div
                  key={file}
                  className="relative h-[120px] w-[90px] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 sm:h-[140px] sm:w-[105px]"
                >
                  <Image
                    src={img(file, 600)}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 90px, 105px"
                  />
                </div>
              ))}
            </div>
            <h1 className="mt-10 max-w-[920px] text-balance text-[2rem] font-semibold leading-[1.12] tracking-tight text-zinc-950 sm:text-5xl sm:leading-[1.08]">
              Turn creator marketing into a scalable growth channel
            </h1>
            <p className="mt-6 max-w-[640px] text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
              Replace creator marketing chaos with a single, clean system. Manage
              creator relationships, scale results, and measure real business
              impact.
            </p>
            <div className="mt-8">
              <PrimaryButton href={BOOK_DEMO}>Get a demo</PrimaryButton>
            </div>

            <div className="relative mt-12 w-full max-w-[1000px] sm:mt-16">
              <Image
                src={img("Y4uQDqJDvsTxJC5T6b3TW3Q0PM.png", 1600)}
                alt="Business dashboard showing revenue, deals, customer list, growth chart, and new activity."
                width={1380}
                height={902}
                className="h-auto w-full rounded-xl shadow-[0_24px_80px_-12px_rgba(15,23,42,0.25)] ring-1 ring-black/5"
                priority
                sizes="(max-width: 1100px) 100vw, 1000px"
              />
            </div>

            <div className="mt-14 grid w-full max-w-[880px] grid-cols-1 gap-10 border-t border-zinc-200 pt-12 sm:grid-cols-3 sm:gap-6">
              {[
                { value: "6M+", label: "Creators" },
                { value: "40B", label: "Total reach" },
                { value: "10M+", label: "Daily Beacons page views" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-semibold tabular-nums tracking-tight text-zinc-950 sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-600">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-14 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
              Trusted by
            </p>
            <div className="mt-6 w-full max-w-[900px]">
              <Image
                src={img("iC5we6sf6smLrheWeFMS9hskovk.png", 1280)}
                alt="Brands that trust Beacons"
                width={1280}
                height={178}
                className="h-auto w-full object-contain opacity-90"
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="border-b border-zinc-100 bg-white px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="text-center text-[1.65rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl">
              Turn creator engagement into business impact
            </h2>
            <div className="mt-14 flex flex-col gap-16 sm:gap-20">
              {featureBlocks.map((f, i) => (
                <div
                  key={f.title}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div
                    className={`overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <Image
                      src={img(f.image, 1200)}
                      alt=""
                      width={936}
                      height={560}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-zinc-600 sm:text-lg">
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <PrimaryButton href={BOOK_DEMO}>Book a demo</PrimaryButton>
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="relative min-h-[420px] overflow-hidden border-b border-zinc-900/10 sm:min-h-[520px]">
          <Image
            src={img("5qWfAjEYDhj21DXe6nq0C5GJzk.png", 1920)}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
          <div className="relative flex min-h-[420px] flex-col items-center justify-center px-4 py-20 text-center text-white sm:min-h-[520px] sm:px-6 sm:py-28">
            <h2 className="mx-auto max-w-[900px] text-balance text-[1.65rem] font-semibold leading-tight sm:text-4xl">
              Tap into a creator ecosystem for brands, from a trusted name in
              the creator economy
            </h2>
            <h3 className="mx-auto mt-6 max-w-[720px] text-pretty text-lg font-normal leading-relaxed text-white/90 sm:text-xl">
              With Beacons, you won&apos;t run out of options. Some creator
              platforms have quality, some have reach. Beacons has both.
            </h3>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <PrimaryButton
                href={BOOK_DEMO}
                className="bg-white text-zinc-900 hover:bg-zinc-100"
              >
                Book a demo
              </PrimaryButton>
              <GhostButton
                href={SIGNUP}
                className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                Start for free
              </GhostButton>
            </div>
          </div>
        </section>

        {/* Why Beacons */}
        <section className="border-b border-zinc-100 bg-zinc-50 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1000px]">
            <h2 className="text-center text-[1.65rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl">
              <span className="block sm:inline">Why Brands </span>
              <span className="block sm:inline">Choose Beacons</span>
            </h2>
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {whyItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-zinc-200/80 bg-white px-5 py-4 shadow-sm"
                >
                  <item.icon
                    className="h-6 w-6 shrink-0 text-zinc-900"
                    strokeWidth={1.5}
                  />
                  <span className="text-left text-sm font-semibold text-zinc-900">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="border-b border-zinc-100 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-violet-700 px-4 py-16 text-center sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[800px]">
            <h2 className="text-[1.65rem] font-semibold leading-tight text-white sm:text-4xl">
              Ready to scale your creator partnerships with confidence?
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <PrimaryButton
                href={BOOK_DEMO}
                className="bg-white text-violet-700 hover:bg-zinc-100"
              >
                Book a demo
              </PrimaryButton>
              <GhostButton
                href={SIGNUP}
                className="border-white/50 bg-transparent text-white hover:bg-white/10"
              >
                Start for free
              </GhostButton>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-b border-zinc-100 bg-white px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-center text-[1.65rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl">
              <span className="block sm:inline">What Brand Partners </span>
              <span className="block sm:inline">Are Saying</span>
            </h2>
            <p className="mt-4 text-center text-base text-zinc-600 sm:text-lg">
              Real experiences from teams using Beacons to power creator
              campaigns
            </p>
            <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((t) => (
                <li
                  key={t.name + t.quote.slice(0, 24)}
                  className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 shadow-sm"
                >
                  <p className="flex-1 text-sm leading-relaxed text-zinc-700">
                    {t.quote}
                  </p>
                  <footer className="mt-5 border-t border-zinc-200/80 pt-4">
                    <p className="text-sm font-semibold text-zinc-900">
                      {t.name}
                    </p>
                    {t.title ? (
                      <p className="mt-0.5 text-xs text-zinc-500">{t.title}</p>
                    ) : null}
                  </footer>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-zinc-50 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-center text-2xl font-semibold text-zinc-950 sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-2">
              {faqItems.map((q) => (
                <details
                  key={q}
                  className="group rounded-xl border border-zinc-200 bg-white px-4 py-3 sm:px-5 sm:py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left text-sm font-semibold text-zinc-900 sm:text-base">
                    {q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    Answers for these topics live on the Beacons help center and
                    marketing site. This demo page mirrors the layout of{" "}
                    <a
                      href="https://beacons.ai/i/brands"
                      className="font-medium text-violet-700 underline-offset-2 hover:underline"
                    >
                      beacons.ai/i/brands
                    </a>
                    .
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-[1100px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Learn more
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <a
                  href="https://beacons.ai/i/managers"
                  className="hover:text-zinc-900"
                >
                  Beacons for Managers
                </a>
              </li>
              <li>
                <a
                  href="https://beacons.ai/i/brands"
                  className="hover:text-zinc-900"
                >
                  Beacons for Brands
                </a>
              </li>
              <li>
                <a href="https://beacons.ai/pricing" className="hover:text-zinc-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://beacons.ai/blog" className="hover:text-zinc-900">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://beacons.ai/referral-program"
                  className="hover:text-zinc-900"
                >
                  Referral Program
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Resources
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <a
                  href="https://help.beacons.ai/"
                  className="hover:text-zinc-900"
                >
                  Brand Resource Center
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <a
                  href="https://beacons.ai/i/terms"
                  className="hover:text-zinc-900"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://beacons.ai/i/beacons-privacy-policy"
                  className="hover:text-zinc-900"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <span className="text-zinc-500">Cookie Notice</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Beacons
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <a href="https://beacons.ai/about" className="hover:text-zinc-900">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://beacons.ai/careers"
                  className="hover:text-zinc-900"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://help.beacons.ai/"
                  className="hover:text-zinc-900"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Creator Tools
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <a href="https://beacons.ai/" className="hover:text-zinc-900">
                  Link in Bio
                </a>
              </li>
              <li>
                <span className="text-zinc-500">Store</span>
              </li>
              <li>
                <span className="text-zinc-500">Email Marketing</span>
              </li>
              <li>
                <span className="text-zinc-500">Media Kit</span>
              </li>
              <li>
                <span className="text-zinc-500">Income Dashboard</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1100px] flex-col items-start justify-between gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center">
          <Image
            src={img("HymXJwVpqNNxOplRg4lKlnqzByw.png", 400)}
            alt="Beacons"
            width={100}
            height={28}
            className="h-7 w-auto opacity-90"
          />
          <p className="text-sm text-zinc-500">
            Need help?{" "}
            <a
              href="mailto:help@beacons.ai"
              className="font-medium text-zinc-800 hover:underline"
            >
              help@beacons.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
