import Link from "next/link";
import SitePanel from "@/components/SitePanel";
import { Reveal, AnimatedBar, StatusBadge } from "@/components/ui";
import {
  IconCrane, IconClipboard, IconEye, IconPackage, IconUsers, IconChart, IconShield,
  IconArrowRight, IconArrowUpRight, IconCheckCircle, IconMapPin, IconTrending, IconWallet,
} from "@/components/icons";
import { projects, portfolioStats, money } from "@/data/projects";

const features = [
  {
    icon: IconClipboard,
    title: "Daily Site Reports",
    text: "Every site, every day. Structured reports with progress percentages, crew counts and blueprint-verified photo panels — filed from the field in under two minutes.",
  },
  {
    icon: IconEye,
    title: "Premium Client Portal",
    text: "Clients get their own live progress page: an overall progress ring, phase checklist and the latest site updates. No phone calls asking 'how is my building going?'",
  },
  {
    icon: IconPackage,
    title: "Material Intelligence",
    text: "Live stock levels across every project with reserved quantities and low-stock alerts before a shortage can stop the pour.",
  },
  {
    icon: IconUsers,
    title: "Crew Attendance",
    text: "Trade-by-trade attendance for every site, every morning. Know exactly who is on the ground before the first mixer starts.",
  },
  {
    icon: IconChart,
    title: "Budget vs Actual",
    text: "Committed budget, actual spend and burn rate per project, rolled up into one portfolio view for the directors.",
  },
  {
    icon: IconShield,
    title: "Safety & Compliance",
    text: "Audit trails, incident-free day counters and inspection checklists attached to each daily report — evidence, not memory.",
  },
];

const workflow = [
  { step: "01", title: "Plan", text: "Break the project into phases with dates, budgets and material forecasts." },
  { step: "02", title: "Report", text: "Site engineers file a daily report — progress, crew, materials, photos." },
  { step: "03", title: "Track", text: "Dashboards update instantly: progress bars, burn rate, stock alerts." },
  { step: "04", title: "Share", text: "Clients watch their own portal — live, transparent, always current." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0e13] text-slate-200">
      {/* ---------- Nav ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0e13]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-[0_0_24px_rgba(245,179,1,0.35)]">
              <IconCrane className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-white">BuildTrack</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-400/90">Construction OS</span>
            </span>
          </Link>
          <nav className="ml-10 hidden items-center gap-7 text-sm font-medium text-slate-400 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#projects" className="transition hover:text-white">Live Projects</a>
            <a href="#workflow" className="transition hover:text-white">Workflow</a>
            <Link href="/portal/azure-heights" className="transition hover:text-white">Client Portal</Link>
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <Link href="/dashboard" className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:text-white sm:block">Open Dashboard</Link>
            <Link href="/dashboard" className="group inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-[0_8px_30px_rgba(245,179,1,0.35)] transition hover:bg-amber-300">
              Start Tracking
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
        <div className="hazard h-1.5 opacity-70" />
      </header>

      {/* ---------- Hero ---------- */}
      <section className="blueprint relative overflow-hidden pt-36 pb-20 sm:pt-44">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[130px]" />
        <div className="pointer-events-none absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-sky-500/10 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/8 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
                <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
                {portfolioStats.workersToday} workers on site right now
              </span>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-7xl">
                Every site.
                <br />
                Every day.
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">Under control.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                BuildTrack is the construction project management system for contractors who run multiple sites at once — daily reports, material intelligence, crew attendance and a client portal that makes your company look a decade ahead.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/dashboard" className="group inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 font-bold text-slate-950 shadow-[0_10px_36px_rgba(245,179,1,0.4)] transition hover:bg-amber-300">
                  Explore the Dashboard
                  <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/portal/azure-heights" className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/4 px-6 py-3.5 font-semibold text-white transition hover:border-amber-400/40 hover:bg-white/8">
                  <IconEye className="h-5 w-5 text-amber-300" />
                  View Client Portal
                </Link>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
                {[
                  { k: `${portfolioStats.activeProjects}`, v: "Active projects" },
                  { k: `${portfolioStats.avgProgress}%`, v: "Avg. progress" },
                  { k: money(portfolioStats.totalBudget), v: "Portfolio value" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="sr-only">{s.v}</dt>
                    <dd className="text-3xl font-extrabold text-white">{s.k}</dd>
                    <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* Hero product visual */}
            <Reveal delay={150}>
              <div className="animate-floaty relative">
                <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-amber-400/25 via-transparent to-sky-500/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#0d1219] shadow-2xl">
                  <SitePanel kind="tower" progress={68} className="aspect-[4/3]" />
                  <div className="space-y-4 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-white">Azure Heights Tower</p>
                        <p className="flex items-center gap-1 text-xs text-slate-500"><IconMapPin className="h-3.5 w-3.5" /> Gulberg III, Lahore</p>
                      </div>
                      <StatusBadge status="On Track" />
                    </div>
                    <div>
                      <div className="mb-1.5 flex justify-between text-xs font-medium text-slate-400">
                        <span>Core & Structure</span><span className="font-mono text-amber-300">74%</span>
                      </div>
                      <AnimatedBar value={74} />
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      {[
                        { v: "142", l: "Workers today" },
                        { v: money(11900000), l: "Spent of " + money(18400000) },
                        { v: "Aug 2027", l: "Deadline" },
                      ].map((x) => (
                        <div key={x.l} className="rounded-xl bg-white/4 px-2 py-3 ring-1 ring-white/6">
                          <p className="text-sm font-bold text-white">{x.v}</p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-500">{x.l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -left-4 bottom-24 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#10161e]/95 px-4 py-3 shadow-xl backdrop-blur sm:flex">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300"><IconCheckCircle className="h-5 w-5" /></span>
                  <div className="leading-tight">
                    <p className="text-[13px] font-bold text-white">Daily report filed</p>
                    <p className="text-[11px] text-slate-500">16th floor slab pour · 2 min ago</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section id="features" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-400">The System</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Built for the site, designed for the boardroom</h2>
            <p className="mt-4 text-lg text-slate-400">One system from the piling rig to the client&apos;s phone. Every module below is live in the demo — open the dashboard and click through.</p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 110}>
                <article className="group h-full rounded-3xl border border-white/8 bg-gradient-to-b from-white/5 to-transparent p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-400/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/12 text-amber-300 ring-1 ring-amber-400/25 transition group-hover:bg-amber-400 group-hover:text-slate-950">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-white">{f.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-slate-400">{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Horizontal project rail ---------- */}
      <section id="projects" className="border-y border-white/6 bg-[#0c1118] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-400">Live Portfolio</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Projects moving right now</h2>
            </div>
            <Link href="/projects" className="group inline-flex items-center gap-2 font-semibold text-amber-300 transition hover:text-amber-200">
              All projects <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            {projects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="group w-[340px] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/8 bg-[#10161e] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] sm:w-[400px]"
              >
                <SitePanel kind={p.panel} progress={p.progress} className="aspect-[16/10]" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold leading-snug text-white">{p.name}</h3>
                      <p className="mt-1 flex items-center gap-1 text-[13px] text-slate-500"><IconMapPin className="h-3.5 w-3.5" /> {p.location}</p>
                    </div>
                    <StatusBadge status={p.status} />
                  </div>
                  <div className="mt-5">
                    <AnimatedBar value={p.progress} color={p.accent} />
                    <div className="mt-3 flex items-center justify-between text-[13px] text-slate-400">
                      <span className="inline-flex items-center gap-1.5"><IconWallet className="h-4 w-4 text-slate-500" /> {money(p.spent)} / {money(p.budget)}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-amber-300">Open <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
        <p className="mt-2 text-center text-xs font-medium uppercase tracking-[0.22em] text-slate-600">Scroll sideways to explore the portfolio</p>
      </section>

      {/* ---------- Workflow ---------- */}
      <section id="workflow" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-400">How It Works</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">From site diary to client delight in four steps</h2>
          </Reveal>
          <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent lg:block" />
            {workflow.map((w, i) => (
              <Reveal key={w.step} delay={i * 130}>
                <div className="relative rounded-3xl border border-white/8 bg-white/[0.03] p-7 text-center transition duration-500 hover:border-amber-400/30">
                  <span className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-amber-400/40 bg-[#0d1219] font-mono text-xl font-bold text-amber-300 shadow-[0_0_30px_rgba(245,179,1,0.15)]">{w.step}</span>
                  <h3 className="mt-5 text-xl font-bold text-white">{w.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-20 grid items-center gap-8 overflow-hidden rounded-[32px] border border-amber-400/20 bg-gradient-to-br from-amber-400/12 via-[#10161e] to-[#10161e] p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300"><IconTrending className="h-4 w-4" /> The premium feature</span>
                <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Your clients watch their building rise — live.</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-slate-400">Every project gets a beautiful client portal: progress ring, phase checklist and dated site updates. It is the feature that wins repeat business and referrals.</p>
                <Link href="/portal/azure-heights" className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-300">
                  Open a live client portal <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "100%", l: "Report filing rate" },
                  { v: "6", l: "Projects in demo" },
                  { v: "24/7", l: "Client visibility" },
                  { v: "0", l: "Status calls needed" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-black/25 p-5 ring-1 ring-white/8">
                    <p className="text-3xl font-extrabold text-amber-300">{s.v}</p>
                    <p className="mt-1 text-[13px] text-slate-400">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA + Footer ---------- */}
      <section className="relative overflow-hidden border-t border-white/6 py-24">
        <div className="blueprint absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Run every site like it is your only site.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">Open the live demo — dashboard, projects, materials and client portal are all wired with realistic demo data.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-7 py-3.5 font-bold text-slate-950 shadow-[0_10px_36px_rgba(245,179,1,0.4)] transition hover:bg-amber-300">
                Launch the Demo <IconArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/4 px-7 py-3.5 font-semibold text-white transition hover:bg-white/8">Browse Projects</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <footer className="border-t border-white/6">
        <div className="hazard h-1.5 opacity-70" />
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:px-8">
          <span className="flex items-center gap-2 font-semibold text-slate-300">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400 text-slate-950"><IconCrane className="h-4 w-4" /></span>
            BuildTrack — Construction OS
          </span>
          <p>Frontend demo with sample data. Built with Next.js + Tailwind CSS.</p>
          <nav className="flex gap-5">
            <Link href="/dashboard" className="transition hover:text-white">Dashboard</Link>
            <Link href="/projects" className="transition hover:text-white">Projects</Link>
            <Link href="/materials" className="transition hover:text-white">Materials</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
