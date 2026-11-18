import Link from "next/link";
import { notFound } from "next/navigation";
import SitePanel from "@/components/SitePanel";
import { Reveal, AnimatedBar, ProgressRing } from "@/components/ui";
import {
  IconCrane, IconMapPin, IconCalendar, IconCheckCircle, IconClock, IconWallet,
  IconShield, IconArrowRight,
} from "@/components/icons";
import { projects, getProject, money } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ClientPortalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const latest = project.reports[0];
  const activePhase = project.phases.find((p) => p.status === "active");

  return (
    <div className="min-h-screen bg-[#0a0e13] text-slate-200">
      {/* Portal header */}
      <header className="border-b border-white/6 bg-[#0d1219]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-4 py-4 sm:px-6">
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-950"><IconCrane className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block font-extrabold tracking-tight text-white">BuildTrack</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-400/90">Client Portal</span>
            </span>
          </span>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full bg-emerald-400/10 px-3.5 py-1.5 text-[13px] font-semibold text-emerald-300 ring-1 ring-emerald-400/25 sm:inline-flex">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-400" /> Live — updated today
            </span>
            <span className="rounded-full bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-slate-300 ring-1 ring-white/10">Prepared for {project.client}</span>
          </div>
        </div>
        <div className="hazard h-1 opacity-60" />
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        {/* Title */}
        <Reveal className="pt-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">Your Project</p>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{project.name}</h1>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-slate-400">
            <span className="inline-flex items-center gap-1.5"><IconMapPin className="h-4 w-4 text-amber-300" /> {project.location}</span>
            <span className="inline-flex items-center gap-1.5"><IconCalendar className="h-4 w-4 text-amber-300" /> Completion: {project.deadline}</span>
            <span className="inline-flex items-center gap-1.5"><IconWallet className="h-4 w-4 text-amber-300" /> Contract value: {money(project.budget)}</span>
          </p>
        </Reveal>

        {/* Hero panel + ring */}
        <Reveal delay={120}>
          <section className="relative mt-10 overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <SitePanel kind={project.panel} showProgress={false} className="h-72 sm:h-96" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e13]/95 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-6 p-6 sm:p-8">
              <div className="max-w-md">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Latest update · {latest.date}</p>
                <h2 className="mt-2 text-2xl font-bold leading-snug text-white">{latest.title}</h2>
                <p className="mt-2 leading-relaxed text-slate-300">{latest.summary}</p>
              </div>
              <div className="rounded-3xl bg-black/45 p-4 ring-1 ring-white/12 backdrop-blur-md">
                <ProgressRing value={project.progress} size={132} stroke={11} label="Complete" />
              </div>
            </div>
          </section>
        </Reveal>

        {/* Facts strip */}
        <Reveal delay={80}>
          <section className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Current Phase", value: activePhase ? activePhase.name : "Handover Complete", sub: activePhase ? `${activePhase.progress}% through this phase` : "All phases delivered" },
              { label: "Workers On Site Today", value: project.status === "Completed" ? "Site handed over" : `${project.workersToday} crew members`, sub: "Verified at morning muster" },
              { label: "Project Status", value: project.status, sub: project.status === "On Track" ? "Progressing to programme" : project.status === "Completed" ? "Delivered and certified" : "Recovery plan in place — see updates" },
            ].map((f) => (
              <div key={f.label} className="rounded-3xl border border-white/8 bg-[#10161e] p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{f.label}</p>
                <p className="mt-2 text-xl font-bold leading-snug text-white">{f.value}</p>
                <p className="mt-1 text-sm text-slate-500">{f.sub}</p>
              </div>
            ))}
          </section>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* Phase checklist */}
          <Reveal>
            <section className="h-full rounded-3xl border border-white/8 bg-[#10161e] p-6 sm:p-7">
              <h2 className="text-lg font-bold text-white">Construction Phases</h2>
              <ul className="mt-5 space-y-4">
                {project.phases.map((phase) => (
                  <li key={phase.name} className="flex gap-3.5">
                    <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      phase.status === "done" ? "bg-emerald-400 text-slate-950" : phase.status === "active" ? "bg-amber-400 text-slate-950 shadow-[0_0_14px_rgba(245,179,1,0.45)]" : "bg-white/8 text-slate-500"
                    }`}>
                      {phase.status === "done" ? <IconCheckCircle className="h-4 w-4" /> : phase.status === "active" ? <IconClock className="h-4 w-4" /> : <span className="h-2 w-2 rounded-full bg-current" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className={`font-semibold ${phase.status === "upcoming" ? "text-slate-400" : "text-white"}`}>{phase.name}</p>
                        <span className="text-[13px] font-medium text-slate-500">
                          {phase.status === "done" ? "Complete" : phase.status === "active" ? `${phase.progress}%` : phase.start}
                        </span>
                      </div>
                      {phase.status === "active" && <div className="mt-2"><AnimatedBar value={phase.progress} height={6} /></div>}
                      <p className="mt-1 text-xs text-slate-500">{phase.start} — {phase.end}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-400/8 p-4 ring-1 ring-emerald-400/20">
                <IconShield className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <p className="text-sm leading-relaxed text-slate-300">
                  Every update on this page comes from a verified daily site report filed by {project.manager}, our resident engineer on your project.
                </p>
              </div>
            </section>
          </Reveal>

          {/* Updates feed */}
          <Reveal delay={120}>
            <section className="h-full rounded-3xl border border-white/8 bg-[#10161e] p-6 sm:p-7">
              <h2 className="text-lg font-bold text-white">Site Updates</h2>
              <div className="mt-5 space-y-5">
                {project.reports.map((r) => (
                  <article key={r.date + r.title} className="flex gap-4">
                    <SitePanel kind={r.panel} showProgress={false} className="hidden h-20 w-28 shrink-0 rounded-xl ring-1 ring-white/10 sm:block" />
                    <div className="min-w-0">
                      <p className="flex flex-wrap items-center gap-x-2.5 text-xs font-medium text-slate-500">
                        <span className="font-bold uppercase tracking-wider text-amber-300">{r.tag}</span> · {r.date} · Progress {r.progress}%
                      </p>
                      <h3 className="mt-1 font-bold leading-snug text-white">{r.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{r.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-7 rounded-2xl border border-dashed border-white/12 p-5 text-center">
                <p className="font-semibold text-white">Questions about your project?</p>
                <p className="mx-auto mt-1 max-w-sm text-sm text-slate-400">Your project manager replies within one working day. Reference: {project.id.toUpperCase()}-2026.</p>
                <span className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300">
                  Message the Site Team <IconArrowRight className="h-4 w-4" />
                </span>
              </div>
            </section>
          </Reveal>
        </div>

        <p className="mt-12 text-center text-sm text-slate-600">
          This portal refreshes automatically from daily site reports. <Link href="/" className="font-medium text-slate-400 underline decoration-amber-400/50 underline-offset-4 transition hover:text-amber-300">About BuildTrack</Link>
        </p>
      </main>
    </div>
  );
}
