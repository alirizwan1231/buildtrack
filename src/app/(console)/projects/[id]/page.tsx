import Link from "next/link";
import { notFound } from "next/navigation";
import SitePanel from "@/components/SitePanel";
import { Reveal, AnimatedBar, ProgressRing, StatusBadge } from "@/components/ui";
import {
  IconMapPin, IconUsers, IconCalendar, IconWallet, IconCheckCircle, IconClock,
  IconEye, IconChevronRight, IconHardHat, IconPackage, IconClipboard,
} from "@/components/icons";
import { projects, getProject, money } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const budgetPct = Math.round((project.spent / project.budget) * 100);
  const attendancePct = project.attendance.trades.length
    ? Math.round((project.attendance.present / (project.attendance.present + project.attendance.absent)) * 100)
    : 100;

  return (
    <div className="space-y-6">
      {/* Breadcrumb + header */}
      <Reveal>
        <nav className="flex items-center gap-1.5 text-sm text-slate-500">
          <Link href="/projects" className="transition hover:text-amber-300">Projects</Link>
          <IconChevronRight className="h-4 w-4" />
          <span className="font-medium text-slate-300">{project.name}</span>
        </nav>
        <div className="mt-4 overflow-hidden rounded-3xl border border-white/8 bg-[#10161e]">
          <div className="relative">
            <SitePanel kind={project.panel} showProgress={false} className="h-52 sm:h-64" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10161e] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{project.name}</h1>
                  <StatusBadge status={project.status} />
                </div>
                <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-1.5"><IconMapPin className="h-4 w-4 text-amber-300" /> {project.location}</span>
                  <span>{project.type}</span>
                  <span>Client: {project.client}</span>
                </p>
              </div>
              <Link href={`/portal/${project.id}`} className="group inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-amber-300">
                <IconEye className="h-4.5 w-4.5" /> Client Portal View
              </Link>
            </div>
          </div>
          <div className="grid gap-px bg-white/5 sm:grid-cols-2 xl:grid-cols-5">
            {[
              { icon: IconWallet, label: "Budget", value: money(project.budget), sub: `${money(project.spent)} spent · ${budgetPct}%` },
              { icon: IconUsers, label: "Workers Today", value: project.status === "Completed" ? "—" : String(project.workersToday), sub: `of ${project.totalWorkers} total crew` },
              { icon: IconCalendar, label: "Deadline", value: project.deadline, sub: `Started ${project.startDate}` },
              { icon: IconHardHat, label: "Site Manager", value: project.manager.replace("Engr. ", ""), sub: "Resident engineer" },
              { icon: IconClipboard, label: "Daily Reports", value: String(project.reports.length * 41), sub: "filed to date" },
            ].map((s) => (
              <div key={s.label} className="bg-[#10161e] px-6 py-4">
                <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500"><s.icon className="h-3.5 w-3.5" /> {s.label}</p>
                <p className="mt-1 truncate text-lg font-bold text-white">{s.value}</p>
                <p className="text-xs text-slate-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <p className="max-w-4xl leading-relaxed text-slate-400">{project.description}</p>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* Phases timeline */}
        <Reveal>
          <section className="h-full rounded-3xl border border-white/8 bg-[#10161e] p-6">
            <h2 className="text-lg font-bold text-white">Phase Timeline</h2>
            <div className="relative mt-6 space-y-0">
              <div className="absolute bottom-3 left-[13px] top-2 w-px bg-gradient-to-b from-amber-400/60 via-white/12 to-white/5" />
              {project.phases.map((phase) => (
                <div key={phase.name} className="relative flex gap-4 pb-6 last:pb-1">
                  <span className={`relative z-10 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-4 ring-[#10161e] ${
                    phase.status === "done" ? "bg-emerald-400 text-slate-950" : phase.status === "active" ? "bg-amber-400 text-slate-950 shadow-[0_0_16px_rgba(245,179,1,0.5)]" : "bg-white/10 text-slate-500"
                  }`}>
                    {phase.status === "done" ? <IconCheckCircle className="h-4 w-4" /> : phase.status === "active" ? <IconClock className="h-4 w-4" /> : <span className="h-2 w-2 rounded-full bg-current" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className={`font-semibold ${phase.status === "upcoming" ? "text-slate-400" : "text-white"}`}>{phase.name}</p>
                      <span className="font-mono text-sm font-bold" style={{ color: project.accent }}>{phase.progress}%</span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500">{phase.start} — {phase.end}</p>
                    <div className="mt-2.5"><AnimatedBar value={phase.progress} color={project.accent} height={7} /></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Attendance */}
        <Reveal delay={110}>
          <section className="h-full rounded-3xl border border-white/8 bg-[#10161e] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Crew Attendance — Today</h2>
              <ProgressRing value={attendancePct} size={72} stroke={7} color="#38bdf8" />
            </div>
            {project.attendance.trades.length === 0 ? (
              <p className="mt-4 rounded-2xl bg-white/4 p-4 text-sm text-slate-400 ring-1 ring-white/6">Project handed over — site demobilised. Final crew stood down on Oct 28, 2026.</p>
            ) : (
              <>
                <p className="text-sm text-slate-400"><span className="font-bold text-white">{project.attendance.present} present</span> · {project.attendance.absent} absent · muster at 07:30</p>
                <ul className="mt-5 space-y-3.5">
                  {project.attendance.trades.map((t) => (
                    <li key={t.trade}>
                      <div className="flex justify-between text-[13px]">
                        <span className="text-slate-300">{t.trade}</span>
                        <span className="font-mono text-slate-400">{t.present}/{t.total}</span>
                      </div>
                      <div className="mt-1.5"><AnimatedBar value={Math.round((t.present / t.total) * 100)} color="#38bdf8" height={6} /></div>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className="mt-6 rounded-2xl border border-white/8 bg-black/25 p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-white"><IconPackage className="h-4.5 w-4.5 text-amber-300" /> Project Materials</p>
              <ul className="mt-3 space-y-2.5">
                {project.materials.map((m) => (
                  <li key={m.name} className="flex items-center justify-between gap-3 text-[13px]">
                    <span className="text-slate-300">{m.name}</span>
                    <span className={`shrink-0 font-semibold ${m.status === "critical" ? "text-red-300" : m.status === "low" ? "text-orange-300" : "text-slate-400"}`}>
                      {m.stock} in stock
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/materials" className="mt-3.5 inline-block text-[13px] font-semibold text-amber-300 transition hover:text-amber-200">Full inventory</Link>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Daily reports */}
      <Reveal>
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Daily Site Reports</h2>
            <span className="text-sm text-slate-500">Filed by {project.manager}</span>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {project.reports.map((r) => (
              <article key={r.date + r.title} className="group overflow-hidden rounded-3xl border border-white/8 bg-[#10161e] transition duration-500 hover:border-amber-400/30">
                <SitePanel kind={r.panel} progress={r.progress} className="aspect-[16/8]" />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-amber-400/12 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/25">{r.tag}</span>
                    <span className="text-[13px] font-medium text-slate-500">{r.date}</span>
                  </div>
                  <h3 className="mt-3 font-bold leading-snug text-white">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{r.summary}</p>
                  <p className="mt-3.5 flex items-center gap-1.5 border-t border-white/6 pt-3 text-[13px] text-slate-500">
                    <IconUsers className="h-4 w-4" /> {r.workers} workers on site · Progress after report: <span className="font-mono font-bold text-amber-300">{r.progress}%</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
