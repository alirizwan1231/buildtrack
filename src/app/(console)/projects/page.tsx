import Link from "next/link";
import SitePanel from "@/components/SitePanel";
import { Reveal, AnimatedBar, StatusBadge } from "@/components/ui";
import { IconMapPin, IconUsers, IconCalendar, IconWallet, IconArrowUpRight } from "@/components/icons";
import { projects, money } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">Portfolio</p>
            <h1 className="mt-1.5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Projects</h1>
            <p className="mt-1.5 text-slate-400">{projects.length} projects · {projects.filter((p) => p.status !== "Completed").length} active · click any project for its full site file.</p>
          </div>
          <div className="flex gap-2">
            {["All", "On Track", "At Risk", "Delayed", "Completed"].map((f, i) => (
              <span key={f} className={`cursor-pointer rounded-full px-3.5 py-1.5 text-[13px] font-semibold ring-1 transition ${i === 0 ? "bg-amber-400 text-slate-950 ring-amber-400" : "bg-white/4 text-slate-300 ring-white/10 hover:bg-white/8"}`}>{f}</span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 100}>
            <Link href={`/projects/${p.id}`} className="group block h-full overflow-hidden rounded-3xl border border-white/8 bg-[#10161e] transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-400/35 hover:shadow-[0_24px_50px_rgba(0,0,0,0.5)]">
              <SitePanel kind={p.panel} progress={p.progress} className="aspect-[16/9]" />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold leading-snug text-white transition group-hover:text-amber-200">{p.name}</h2>
                    <p className="mt-1 text-[13px] text-slate-500">{p.type}</p>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
                <p className="mt-2.5 flex items-center gap-1.5 text-sm text-slate-400"><IconMapPin className="h-4 w-4 text-slate-500" /> {p.location}</p>
                <div className="mt-5">
                  <div className="mb-1.5 flex justify-between text-xs font-medium text-slate-400">
                    <span>Overall progress</span>
                    <span className="font-mono font-bold" style={{ color: p.accent }}>{p.progress}%</span>
                  </div>
                  <AnimatedBar value={p.progress} color={p.accent} />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/6 pt-4 text-center">
                  <div>
                    <p className="flex items-center justify-center gap-1 text-[13px] font-bold text-slate-100"><IconWallet className="h-3.5 w-3.5 text-slate-500" />{money(p.budget)}</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-500">Budget</p>
                  </div>
                  <div>
                    <p className="flex items-center justify-center gap-1 text-[13px] font-bold text-slate-100"><IconUsers className="h-3.5 w-3.5 text-slate-500" />{p.status === "Completed" ? "—" : p.workersToday}</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-500">On site</p>
                  </div>
                  <div>
                    <p className="flex items-center justify-center gap-1 text-[13px] font-bold text-slate-100"><IconCalendar className="h-3.5 w-3.5 text-slate-500" />{p.deadline}</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-500">Deadline</p>
                  </div>
                </div>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-300">
                  Open site file <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
