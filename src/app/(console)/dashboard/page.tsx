import Link from "next/link";
import SitePanel from "@/components/SitePanel";
import { Reveal, AnimatedBar, StatusBadge } from "@/components/ui";
import {
  IconProjects, IconHardHat, IconAlert, IconWallet, IconArrowUpRight, IconMapPin,
  IconTrending, IconCheckCircle, IconClock,
} from "@/components/icons";
import { projects, portfolioStats, weeklyProgress, money } from "@/data/projects";
import { materials, materialStatus } from "@/data/materials";

const budgetPct = Math.round((portfolioStats.totalSpent / portfolioStats.totalBudget) * 100);
const alerts = materials.filter((m) => materialStatus(m) !== "healthy");
const maxBar = Math.max(...weeklyProgress.map((d) => Math.max(d.planned, d.actual)));

const activity = [
  { icon: IconCheckCircle, color: "text-emerald-300 bg-emerald-400/12", text: "Azure Heights — daily report filed: 16th floor slab pour complete", time: "12 min ago" },
  { icon: IconAlert, color: "text-red-300 bg-red-400/12", text: "Crescent Retail Mall — aluminium profiles below critical level", time: "48 min ago" },
  { icon: IconTrending, color: "text-sky-300 bg-sky-400/12", text: "Northgate Hub — cladding milestone hit 88%, ahead of plan", time: "2 hrs ago" },
  { icon: IconClock, color: "text-amber-300 bg-amber-400/12", text: "Harborview Bridge — revised baseline submitted for client review", time: "5 hrs ago" },
];

export default function DashboardPage() {
  const kpis = [
    { icon: IconProjects, label: "Active Projects", value: String(portfolioStats.activeProjects), sub: `${projects.length} total in portfolio`, tint: "text-amber-300 bg-amber-400/12 ring-amber-400/25" },
    { icon: IconHardHat, label: "Workers On Site Today", value: String(portfolioStats.workersToday), sub: "Across all live sites", tint: "text-sky-300 bg-sky-400/12 ring-sky-400/25" },
    { icon: IconAlert, label: "Material Alerts", value: String(alerts.length), sub: `${alerts.filter((a) => materialStatus(a) === "critical").length} critical — reorder now`, tint: "text-red-300 bg-red-400/12 ring-red-400/25" },
    { icon: IconWallet, label: "Budget Used", value: `${budgetPct}%`, sub: `${money(portfolioStats.totalSpent)} of ${money(portfolioStats.totalBudget)}`, tint: "text-emerald-300 bg-emerald-400/12 ring-emerald-400/25" },
  ];

  return (
    <div className="space-y-6">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">Portfolio Overview</p>
            <h1 className="mt-1.5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Good morning, Ali</h1>
            <p className="mt-1.5 text-slate-400">Here is what is happening across your sites today, Tuesday Nov 18.</p>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300">
            View all projects <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k, i) => (
          <Reveal key={k.label} delay={i * 90}>
            <div className="group rounded-3xl border border-white/8 bg-gradient-to-b from-white/5 to-transparent p-5 transition duration-500 hover:-translate-y-1 hover:border-white/16">
              <div className="flex items-center justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${k.tint}`}><k.icon className="h-5.5 w-5.5" /></span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Live</span>
              </div>
              <p className="mt-4 text-[34px] font-extrabold leading-none text-white">{k.value}</p>
              <p className="mt-1.5 text-sm font-semibold text-slate-300">{k.label}</p>
              <p className="mt-0.5 text-[13px] text-slate-500">{k.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.55fr_1fr]">
        {/* Project progress board */}
        <Reveal>
          <section className="h-full rounded-3xl border border-white/8 bg-[#10161e] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Project Progress</h2>
              <Link href="/projects" className="text-sm font-semibold text-amber-300 transition hover:text-amber-200">Manage</Link>
            </div>
            <div className="mt-5 space-y-5">
              {projects.map((p) => (
                <Link key={p.id} href={`/projects/${p.id}`} className="group block">
                  <div className="flex items-center gap-4">
                    <SitePanel kind={p.panel} showProgress={false} className="hidden h-12 w-16 shrink-0 rounded-lg ring-1 ring-white/10 sm:block" />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="truncate font-semibold text-slate-100 transition group-hover:text-amber-200">{p.name}</p>
                        <span className="font-mono text-sm font-bold" style={{ color: p.accent }}>{p.progress}%</span>
                      </div>
                      <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500"><IconMapPin className="h-3 w-3" /> {p.location} · {p.workersToday} on site</p>
                      <div className="mt-2"><AnimatedBar value={p.progress} color={p.accent} height={7} /></div>
                    </div>
                    <StatusBadge status={p.status} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Weekly chart + activity */}
        <div className="space-y-6">
          <Reveal delay={100}>
            <section className="rounded-3xl border border-white/8 bg-[#10161e] p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Planned vs Actual</h2>
                <span className="text-xs font-medium text-slate-500">Portfolio % · this week</span>
              </div>
              <div className="mt-6 flex h-36 items-end gap-3">
                {weeklyProgress.map((d) => (
                  <div key={d.day} className="group flex flex-1 flex-col items-center gap-2">
                    <div className="flex h-28 w-full items-end justify-center gap-1">
                      <div className="w-2.5 rounded-t bg-white/18 transition-all duration-700 group-hover:bg-white/30" style={{ height: `${(d.planned / maxBar) * 100}%` }} title={`Planned ${d.planned}%`} />
                      <div className="w-2.5 rounded-t bg-gradient-to-t from-amber-500 to-amber-300 shadow-[0_0_10px_rgba(245,179,1,0.35)] transition-all duration-700" style={{ height: `${(d.actual / maxBar) * 100}%` }} title={`Actual ${d.actual}%`} />
                    </div>
                    <span className="text-[11px] font-medium text-slate-500">{d.day}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-5 border-t border-white/6 pt-4 text-xs text-slate-400">
                <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-white/25" /> Planned</span>
                <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-amber-400" /> Actual</span>
                <span className="ml-auto font-semibold text-emerald-300">On plan overall</span>
              </div>
            </section>
          </Reveal>

          <Reveal delay={180}>
            <section className="rounded-3xl border border-white/8 bg-[#10161e] p-6">
              <h2 className="text-lg font-bold text-white">Latest Activity</h2>
              <ul className="mt-4 space-y-4">
                {activity.map((a) => (
                  <li key={a.text} className="flex gap-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${a.color}`}><a.icon className="h-4.5 w-4.5" /></span>
                    <div className="min-w-0">
                      <p className="text-[13.5px] leading-snug text-slate-300">{a.text}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{a.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>

      {/* Alerts strip */}
      <Reveal>
        <section className="rounded-3xl border border-red-400/20 bg-gradient-to-r from-red-500/8 via-[#10161e] to-[#10161e] p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="flex items-center gap-2.5 text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-400/15 text-red-300"><IconAlert className="h-5 w-5" /></span>
              Materials that need attention
            </h2>
            <Link href="/materials" className="text-sm font-semibold text-amber-300 transition hover:text-amber-200">Open inventory</Link>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {alerts.slice(0, 4).map((m) => (
              <div key={m.id} className="rounded-2xl bg-black/25 p-4 ring-1 ring-white/8">
                <p className="font-semibold text-slate-100">{m.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{m.project}</p>
                <p className="mt-3 text-sm">
                  <span className={materialStatus(m) === "critical" ? "font-bold text-red-300" : "font-bold text-orange-300"}>
                    {m.stock.toLocaleString()} {m.unit} left
                  </span>
                  <span className="text-slate-500"> · min {m.minLevel.toLocaleString()}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
