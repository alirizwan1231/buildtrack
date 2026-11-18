"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* Scroll-reveal wrapper: fades + rises content when it enters the viewport */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }),
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(26px)",
        transition: `opacity .8s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .8s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* Progress bar that animates to its value when scrolled into view */
export function AnimatedBar({ value, color = "#f5b301", height = 8 }: { value: number; color?: string; height?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setW(value); obs.disconnect(); } }),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="w-full overflow-hidden rounded-full bg-white/8" style={{ height }}>
      <div
        className="h-full rounded-full"
        style={{
          width: `${w}%`,
          background: `linear-gradient(90deg, ${color}99, ${color})`,
          transition: "width 1.3s cubic-bezier(.22,1,.36,1)",
          boxShadow: `0 0 12px ${color}55`,
        }}
      />
    </div>
  );
}

/* SVG progress ring that sweeps on view */
export function ProgressRing({ value, size = 120, stroke = 10, color = "#f5b301", label }: { value: number; size?: number; stroke?: number; color?: string; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setV(value); obs.disconnect(); } }),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div ref={ref} className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * v) / 100}
          style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(.22,1,.36,1)", filter: `drop-shadow(0 0 6px ${color}66)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-bold text-white" style={{ fontSize: size * 0.26 }}>{value}%</span>
        {label && <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</span>}
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    "On Track": "bg-emerald-400/10 text-emerald-300 ring-emerald-400/30",
    "At Risk": "bg-orange-400/10 text-orange-300 ring-orange-400/30",
    Delayed: "bg-red-400/10 text-red-300 ring-red-400/30",
    Completed: "bg-violet-400/10 text-violet-300 ring-violet-400/30",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${map[status] ?? "bg-white/10 text-slate-300 ring-white/20"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
