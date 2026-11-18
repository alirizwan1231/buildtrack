"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  IconDashboard, IconProjects, IconPackage, IconEye, IconSearch, IconBell, IconCrane, IconAlert,
} from "./icons";
import { projects, portfolioStats } from "@/data/projects";
import { materials, materialStatus } from "@/data/materials";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: IconDashboard },
  { href: "/projects", label: "Projects", icon: IconProjects },
  { href: "/materials", label: "Materials", icon: IconPackage },
  { href: `/portal/${projects[0].id}`, label: "Client Portal", icon: IconEye },
];

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const alertCount = materials.filter((m) => materialStatus(m) !== "healthy").length;
  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href.split("/").slice(0, 2).join("/"));

  return (
    <div className="min-h-screen bg-[#0a0e13] text-slate-200">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-white/8 bg-[#0d1219] lg:flex">
        <Link href="/" className="flex items-center gap-3 px-6 pb-6 pt-7">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-[0_0_24px_rgba(245,179,1,0.35)]">
            <IconCrane className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-white">BuildTrack</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-400/90">Construction OS</span>
          </span>
        </Link>

        <nav className="flex-1 space-y-1 px-3">
          {nav.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active ? "bg-amber-400/12 text-amber-300 shadow-[inset_0_0_0_1px_rgba(245,179,1,0.25)]" : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {item.label}
                {item.label === "Materials" && alertCount > 0 && (
                  <span className="ml-auto rounded-full bg-red-500/15 px-2 py-0.5 text-[11px] font-bold text-red-300 ring-1 ring-red-400/30">{alertCount} alerts</span>
                )}
                {item.label === "Projects" && (
                  <span className="ml-auto rounded-full bg-white/6 px-2 py-0.5 text-[11px] font-bold text-slate-300">{projects.length}</span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mx-3 mb-3 rounded-2xl border border-white/8 bg-gradient-to-br from-white/6 to-transparent p-4">
          <div className="flex items-center gap-2 text-amber-300">
            <IconAlert className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Site Briefing</span>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-400">
            {portfolioStats.workersToday} workers on site today across {portfolioStats.activeProjects} active projects. {alertCount} materials need reordering.
          </p>
          <Link href="/materials" className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-amber-300 transition hover:gap-2 hover:text-amber-200">
            Review inventory
          </Link>
        </div>

        <div className="flex items-center gap-3 border-t border-white/8 px-6 py-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-[13px] font-extrabold text-slate-950">AR</span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Ali Rizwan</p>
            <p className="text-xs text-slate-500">Project Director</p>
          </div>
        </div>
      </aside>

      {/* Main column */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-white/8 bg-[#0a0e13]/85 px-4 py-3.5 backdrop-blur-xl sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 lg:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400 text-slate-950"><IconCrane className="h-5 w-5" /></span>
            <span className="font-extrabold text-white">BuildTrack</span>
          </Link>
          <nav className="flex items-center gap-1 lg:hidden">
            {nav.map((n) => (
              <Link key={n.label} href={n.href} className={`rounded-lg px-2.5 py-1.5 text-[13px] font-medium ${isActive(n.href) ? "bg-amber-400/15 text-amber-300" : "text-slate-400"}`}>{n.label}</Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <label className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-3.5 py-2 text-sm text-slate-400 transition focus-within:border-amber-400/50 md:flex">
              <IconSearch className="h-4 w-4" />
              <input placeholder="Search projects, materials..." className="w-52 bg-transparent text-slate-200 outline-none placeholder:text-slate-500" />
            </label>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-slate-300 transition hover:text-white" aria-label="Notifications">
              <IconBell className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,179,1,0.9)]" />
            </button>
            <span className="hidden rounded-xl border border-white/10 bg-white/4 px-3.5 py-2 text-[13px] font-medium text-slate-300 sm:block">Tue, Nov 18 2026</span>
          </div>
        </header>
        <main className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
