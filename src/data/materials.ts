export interface Material {
  id: string;
  name: string;
  category: string;
  unit: string;
  stock: number;
  reserved: number;
  minLevel: number;
  supplier: string;
  lastDelivery: string;
  project: string;
}

export const materials: Material[] = [
  { id: "MAT-001", name: "Portland Cement (OPC)", category: "Concrete", unit: "bags", stock: 2150, reserved: 1800, minLevel: 3000, supplier: "Mapleleaf Cement", lastDelivery: "Nov 15, 2026", project: "Azure Heights Tower" },
  { id: "MAT-002", name: "Steel Rebar Grade 60", category: "Steel", unit: "tons", stock: 84, reserved: 60, minLevel: 50, supplier: "Amreli Steels", lastDelivery: "Nov 12, 2026", project: "Azure Heights Tower" },
  { id: "MAT-003", name: "AAC Blocks 4-inch", category: "Masonry", unit: "pcs", stock: 7400, reserved: 5200, minLevel: 8000, supplier: "Harden Blocks Co.", lastDelivery: "Nov 10, 2026", project: "Azure Heights Tower" },
  { id: "MAT-004", name: "Waterproofing Membrane", category: "Waterproofing", unit: "m2", stock: 640, reserved: 500, minLevel: 1500, supplier: "Sika Pakistan", lastDelivery: "Nov 06, 2026", project: "Palm Vista Villas" },
  { id: "MAT-005", name: "Post-Tension Strands", category: "Steel", unit: "tons", stock: 11, reserved: 8, minLevel: 6, supplier: "PSC International", lastDelivery: "Nov 11, 2026", project: "Palm Vista Villas" },
  { id: "MAT-006", name: "Travertine Tiles", category: "Finishing", unit: "m2", stock: 3800, reserved: 2100, minLevel: 1000, supplier: "Stone Gallery DXB", lastDelivery: "Nov 03, 2026", project: "Palm Vista Villas" },
  { id: "MAT-007", name: "Insulated Cladding Panels", category: "Facade", unit: "m2", stock: 1150, reserved: 900, minLevel: 800, supplier: "PanelTech Industries", lastDelivery: "Nov 14, 2026", project: "Northgate Logistics Hub" },
  { id: "MAT-008", name: "Fire Alarm Cable", category: "Electrical", unit: "m", stock: 350, reserved: 320, minLevel: 1200, supplier: "Pakistan Cables", lastDelivery: "Oct 29, 2026", project: "Northgate Logistics Hub" },
  { id: "MAT-009", name: "Aluminium Facade Profiles", category: "Facade", unit: "tons", stock: 2.1, reserved: 2, minLevel: 8, supplier: "AluPrime Systems", lastDelivery: "Oct 24, 2026", project: "Crescent Retail Mall" },
  { id: "MAT-010", name: "Curtain Wall Glass (DGU)", category: "Facade", unit: "m2", stock: 1900, reserved: 1600, minLevel: 2200, supplier: "Guardian Glass ME", lastDelivery: "Nov 05, 2026", project: "Crescent Retail Mall" },
  { id: "MAT-011", name: "HVAC Ducting GI Sheet", category: "HVAC", unit: "tons", stock: 6, reserved: 4, minLevel: 3, supplier: "Dawlance Industrial", lastDelivery: "Nov 09, 2026", project: "Crescent Retail Mall" },
  { id: "MAT-012", name: "Steel Piles 1200 mm", category: "Marine", unit: "pcs", stock: 18, reserved: 14, minLevel: 24, supplier: "Karachi Steel Works", lastDelivery: "Nov 01, 2026", project: "Harborview Bridge Link" },
  { id: "MAT-013", name: "Diesel — Marine Plant", category: "Fuel", unit: "L", stock: 4200, reserved: 3900, minLevel: 10000, supplier: "PSO Fleet Services", lastDelivery: "Nov 13, 2026", project: "Harborview Bridge Link" },
  { id: "MAT-014", name: "Stay Cable Strand", category: "Steel", unit: "tons", stock: 210, reserved: 0, minLevel: 100, supplier: "Freyssinet Gulf", lastDelivery: "Oct 18, 2026", project: "Harborview Bridge Link" },
  { id: "MAT-015", name: "Ready-Mix Concrete C30", category: "Concrete", unit: "m3", stock: 480, reserved: 420, minLevel: 300, supplier: "Lafarge Aggregates", lastDelivery: "Nov 17, 2026", project: "Azure Heights Tower" },
  { id: "MAT-016", name: "UPVC Pipes & Fittings", category: "Plumbing", unit: "m", stock: 480, reserved: 350, minLevel: 600, supplier: "Popular Pipes", lastDelivery: "Nov 07, 2026", project: "Palm Vista Villas" },
];

export const materialStatus = (m: Material): "critical" | "low" | "healthy" => {
  if (m.stock <= m.minLevel * 0.5) return "critical";
  if (m.stock < m.minLevel) return "low";
  return "healthy";
};
