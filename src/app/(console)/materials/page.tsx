import { Reveal } from "@/components/ui";
import { IconAlert, IconPackage, IconTruck, IconCheckCircle } from "@/components/icons";
import { materials, materialStatus } from "@/data/materials";

const statusStyle = {
  critical: "bg-red-400/12 text-red-300 ring-red-400/30",
  low: "bg-orange-400/12 text-orange-300 ring-orange-400/30",
  healthy: "bg-emerald-400/12 text-emerald-300 ring-emerald-400/30",
} as const;

const statusLabel = { critical: "Critical", low: "Low Stock", healthy: "Healthy" } as const;

export default function MaterialsPage() {
  const critical = materials.filter((m) => materialStatus(m) === "critical");
  const low = materials.filter((m) => materialStatus(m) === "low");
  const healthy = materials.filter((m) => materialStatus(m) === "healthy");

  const summary = [
    { label: "Total SKUs Tracked", value: String(materials.length), icon: IconPackage, tint: "text-sky-300 bg-sky-400/12 ring-sky-400/25" },
    { label: "Critical — Order Today", value: String(critical.length), icon: IconAlert, tint: "text-red-300 bg-red-400/12 ring-red-400/25" },
    { label: "Low Stock", value: String(low.length), icon: IconTruck, tint: "text-orange-300 bg-orange-400/12 ring-orange-400/25" },
    { label: "Healthy Levels", value: String(healthy.length), icon: IconCheckCircle, tint: "text-emerald-300 bg-emerald-400/12 ring-emerald-400/25" },
  ];

  return (
    <div className="space-y-6">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">Inventory</p>
        <h1 className="mt-1.5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Materials</h1>
        <p className="mt-1.5 max-w-2xl text-slate-400">Live stock across all sites, with reserved quantities for upcoming pours and automatic alerts when a material drops below its safety level.</p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summary.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className="flex items-center gap-4 rounded-3xl border border-white/8 bg-gradient-to-b from-white/5 to-transparent p-5 transition duration-500 hover:-translate-y-1">
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${s.tint}`}><s.icon className="h-6 w-6" /></span>
              <div>
                <p className="text-3xl font-extrabold leading-none text-white">{s.value}</p>
                <p className="mt-1.5 text-[13px] font-medium text-slate-400">{s.label}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <section className="overflow-hidden rounded-3xl border border-white/8 bg-[#10161e]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/8 bg-white/[0.03] text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  <th className="px-6 py-4 font-semibold">Material</th>
                  <th className="px-4 py-4 font-semibold">Project</th>
                  <th className="px-4 py-4 font-semibold">Stock Level</th>
                  <th className="px-4 py-4 font-semibold">Supplier</th>
                  <th className="px-4 py-4 font-semibold">Last Delivery</th>
                  <th className="px-6 py-4 text-right font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((m) => {
                  const st = materialStatus(m);
                  const pct = Math.min(100, Math.round((m.stock / (m.minLevel * 2)) * 100));
                  return (
                    <tr key={m.id} className="border-b border-white/5 transition hover:bg-white/[0.03]">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-100">{m.name}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{m.id} · {m.category}</p>
                      </td>
                      <td className="px-4 py-4 text-slate-400">{m.project}</td>
                      <td className="px-4 py-4">
                        <p className="font-mono text-[13px] font-semibold text-slate-200">{m.stock.toLocaleString()} {m.unit}</p>
                        <div className="mt-1.5 h-1.5 w-36 overflow-hidden rounded-full bg-white/8">
                          <div className={`h-full rounded-full ${st === "critical" ? "bg-red-400" : st === "low" ? "bg-orange-400" : "bg-emerald-400"}`} style={{ width: `${pct}%` }} />
                        </div>
                        <p className="mt-1 text-[11px] text-slate-500">{m.reserved.toLocaleString()} reserved · min {m.minLevel.toLocaleString()}</p>
                      </td>
                      <td className="px-4 py-4 text-slate-400">{m.supplier}</td>
                      <td className="px-4 py-4 text-slate-400">{m.lastDelivery}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ${statusStyle[st]}`}>
                          {st !== "healthy" && <IconAlert className="h-3 w-3" />}
                          {statusLabel[st]}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="border-t border-white/6 px-6 py-4 text-[13px] text-slate-500">
            Alerts fire automatically when available stock falls below the safety level — purchase orders can be raised directly from this screen in the full system.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
