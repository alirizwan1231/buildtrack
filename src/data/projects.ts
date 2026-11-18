export type PanelKind = "tower" | "villa" | "mall" | "warehouse" | "bridge" | "office";

export interface Phase {
  name: string;
  progress: number;
  status: "done" | "active" | "upcoming";
  start: string;
  end: string;
}

export interface SiteReport {
  date: string;
  title: string;
  summary: string;
  progress: number;
  workers: number;
  panel: PanelKind;
  tag: string;
}

export interface ProjectMaterial {
  name: string;
  used: string;
  stock: string;
  status: "ok" | "low" | "critical";
}

export interface TradeCrew {
  trade: string;
  present: number;
  total: number;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  location: string;
  type: string;
  status: "On Track" | "At Risk" | "Delayed" | "Completed";
  progress: number;
  budget: number;
  spent: number;
  startDate: string;
  deadline: string;
  manager: string;
  workersToday: number;
  totalWorkers: number;
  panel: PanelKind;
  accent: string;
  description: string;
  phases: Phase[];
  reports: SiteReport[];
  materials: ProjectMaterial[];
  attendance: { present: number; absent: number; trades: TradeCrew[] };
}

export const projects: Project[] = [
  {
    id: "azure-heights",
    name: "Azure Heights Tower",
    client: "Azure Developers (Pvt) Ltd",
    location: "Gulberg III, Lahore",
    type: "Residential Tower · 24 Floors",
    status: "On Track",
    progress: 68,
    budget: 18400000,
    spent: 11900000,
    startDate: "Mar 2026",
    deadline: "Aug 2027",
    manager: "Engr. Salman Tariq",
    workersToday: 142,
    totalWorkers: 168,
    panel: "tower",
    accent: "#f5b301",
    description:
      "A 24-storey residential tower with 3 basement parking levels, rooftop amenities floor and a double-height sky lobby. Currently pouring the 16th floor slab while MEP rough-in runs two floors below the structure.",
    phases: [
      { name: "Excavation & Shoring", progress: 100, status: "done", start: "Mar 2026", end: "May 2026" },
      { name: "Foundation & Raft", progress: 100, status: "done", start: "May 2026", end: "Jul 2026" },
      { name: "Core & Structure", progress: 74, status: "active", start: "Jul 2026", end: "Apr 2027" },
      { name: "Masonry & Blockwork", progress: 41, status: "active", start: "Oct 2026", end: "Jun 2027" },
      { name: "MEP Installation", progress: 28, status: "active", start: "Nov 2026", end: "Jul 2027" },
      { name: "Finishing & Facade", progress: 0, status: "upcoming", start: "May 2027", end: "Aug 2027" },
    ],
    reports: [
      { date: "Nov 17, 2026", title: "16th floor slab pour completed", summary: "380 m3 of concrete poured in a single shift. Cube tests scheduled for day 7 and day 28. Tower crane B load-tested and certified.", progress: 68, workers: 142, panel: "tower", tag: "Structure" },
      { date: "Nov 14, 2026", title: "MEP rough-in reaches floor 12", summary: "Electrical conduit and drainage stacks installed up to level 12. Pressure testing passed on risers 1 through 4 with zero leaks.", progress: 66, workers: 138, panel: "tower", tag: "MEP" },
      { date: "Nov 11, 2026", title: "Blockwork 60% complete on floors 8-10", summary: "AAC block masonry ahead of programme by 2 days. Plaster sample room approved by the client consultant.", progress: 64, workers: 145, panel: "tower", tag: "Masonry" },
      { date: "Nov 07, 2026", title: "Safety audit — zero lost-time incidents", summary: "Third-party safety audit completed. Harness compliance at 100%, two minor housekeeping points closed the same day.", progress: 61, workers: 140, panel: "tower", tag: "Safety" },
    ],
    materials: [
      { name: "Portland Cement", used: "18,240 bags", stock: "2,150 bags", status: "low" },
      { name: "Steel Rebar (Grade 60)", used: "612 tons", stock: "84 tons", status: "ok" },
      { name: "Ready-Mix Concrete", used: "9,480 m3", stock: "On order", status: "ok" },
      { name: "AAC Blocks", used: "96,000 pcs", stock: "7,400 pcs", status: "low" },
    ],
    attendance: {
      present: 142,
      absent: 26,
      trades: [
        { trade: "Steel Fixers", present: 38, total: 44 },
        { trade: "Shuttering Carpenters", present: 34, total: 40 },
        { trade: "Masons", present: 29, total: 34 },
        { trade: "Electricians", present: 16, total: 20 },
        { trade: "Plumbers", present: 11, total: 14 },
        { trade: "General Labour", present: 14, total: 16 },
      ],
    },
  },
  {
    id: "palm-vista-villas",
    name: "Palm Vista Villas",
    client: "Palm Vista Real Estate LLC",
    location: "Palm Jebel Ali Frond, Dubai",
    type: "Luxury Villas · 12 Units",
    status: "On Track",
    progress: 45,
    budget: 26900000,
    spent: 11400000,
    startDate: "May 2026",
    deadline: "Nov 2027",
    manager: "Engr. Ayesha Rahman",
    workersToday: 96,
    totalWorkers: 118,
    panel: "villa",
    accent: "#38bdf8",
    description:
      "Twelve signature beachfront villas with private pools, smart-home infrastructure and landscaped courtyards. Substructure is complete across all plots; superstructure is underway on villas 1 to 6.",
    phases: [
      { name: "Site Enabling & Dewatering", progress: 100, status: "done", start: "May 2026", end: "Jun 2026" },
      { name: "Substructure & Rafts", progress: 100, status: "done", start: "Jun 2026", end: "Sep 2026" },
      { name: "Superstructure", progress: 52, status: "active", start: "Sep 2026", end: "Mar 2027" },
      { name: "Roofing & Waterproofing", progress: 12, status: "active", start: "Nov 2026", end: "May 2027" },
      { name: "MEP & Smart Systems", progress: 8, status: "active", start: "Dec 2026", end: "Aug 2027" },
      { name: "Finishing & Landscaping", progress: 0, status: "upcoming", start: "Jun 2027", end: "Nov 2027" },
    ],
    reports: [
      { date: "Nov 16, 2026", title: "Villa 3 first-floor slab cast", summary: "Post-tension slab cast and curing in progress. Survey confirms levels within 3 mm tolerance across the full footprint.", progress: 45, workers: 96, panel: "villa", tag: "Structure" },
      { date: "Nov 12, 2026", title: "Pool shells excavated for villas 7-9", summary: "Excavation and lean concrete complete. Waterproofing membrane samples approved by the consultant.", progress: 43, workers: 92, panel: "villa", tag: "Civil" },
      { date: "Nov 08, 2026", title: "Sample villa mock-up approved", summary: "Client walkthrough of the finishes mock-up completed. Travertine and brushed-brass package confirmed for all 12 units.", progress: 41, workers: 98, panel: "villa", tag: "Client" },
    ],
    materials: [
      { name: "Post-Tension Strands", used: "46 tons", stock: "11 tons", status: "ok" },
      { name: "Waterproofing Membrane", used: "8,900 m2", stock: "640 m2", status: "critical" },
      { name: "Travertine Tiles", used: "1,150 m2", stock: "3,800 m2", status: "ok" },
      { name: "UPVC Pipes & Fittings", used: "6,200 m", stock: "480 m", status: "low" },
    ],
    attendance: {
      present: 96,
      absent: 22,
      trades: [
        { trade: "Steel Fixers", present: 24, total: 30 },
        { trade: "Shuttering Carpenters", present: 26, total: 32 },
        { trade: "Masons", present: 21, total: 26 },
        { trade: "Electricians", present: 9, total: 12 },
        { trade: "Plumbers", present: 8, total: 10 },
        { trade: "General Labour", present: 8, total: 8 },
      ],
    },
  },
  {
    id: "northgate-logistics",
    name: "Northgate Logistics Hub",
    client: "Northgate Supply Chain Co.",
    location: "Port Qasim Industrial Zone, Karachi",
    type: "Warehouse · 480,000 sq ft",
    status: "On Track",
    progress: 82,
    budget: 12750000,
    spent: 10600000,
    startDate: "Jan 2026",
    deadline: "Mar 2027",
    manager: "Engr. Bilal Chaudhry",
    workersToday: 88,
    totalWorkers: 104,
    panel: "warehouse",
    accent: "#34d399",
    description:
      "A 480,000 sq ft Grade-A logistics warehouse with 14 m clear height, 42 dock levellers and a solar-ready roof. Steel erection is complete and cladding is in its final phase.",
    phases: [
      { name: "Earthworks & Piling", progress: 100, status: "done", start: "Jan 2026", end: "Apr 2026" },
      { name: "Steel Structure", progress: 100, status: "done", start: "Apr 2026", end: "Sep 2026" },
      { name: "Roofing & Cladding", progress: 88, status: "active", start: "Aug 2026", end: "Dec 2026" },
      { name: "Flooring & Dock Equipment", progress: 64, status: "active", start: "Oct 2026", end: "Feb 2027" },
      { name: "Fire & Electrical Systems", progress: 47, status: "active", start: "Nov 2026", end: "Mar 2027" },
      { name: "External Works & Handover", progress: 0, status: "upcoming", start: "Feb 2027", end: "Mar 2027" },
    ],
    reports: [
      { date: "Nov 17, 2026", title: "Cladding reaches 88% — south elevation closed", summary: "Insulated panel installation complete on the south elevation. Roof safety line system installed and certified.", progress: 82, workers: 88, panel: "warehouse", tag: "Cladding" },
      { date: "Nov 13, 2026", title: "Dock levellers 30 of 42 installed", summary: "Hydraulic levellers and dock shelters fitted in bays 1 to 30. Load testing passed at 6 tons per unit.", progress: 79, workers: 91, panel: "warehouse", tag: "Equipment" },
      { date: "Nov 09, 2026", title: "Laser-screed flooring bay 6 poured", summary: "FM2 tolerance floor poured in bay 6 — flatness survey passed with zero remedial grinding required.", progress: 76, workers: 86, panel: "warehouse", tag: "Flooring" },
    ],
    materials: [
      { name: "Insulated Cladding Panels", used: "21,300 m2", stock: "1,150 m2", status: "ok" },
      { name: "Structural Steel", used: "3,240 tons", stock: "96 tons", status: "ok" },
      { name: "Dock Levellers", used: "30 units", stock: "12 units", status: "ok" },
      { name: "Fire Alarm Cable", used: "14,800 m", stock: "350 m", status: "critical" },
    ],
    attendance: {
      present: 88,
      absent: 16,
      trades: [
        { trade: "Steel Erectors", present: 22, total: 26 },
        { trade: "Cladding Installers", present: 24, total: 28 },
        { trade: "Electricians", present: 14, total: 18 },
        { trade: "Flooring Crew", present: 16, total: 18 },
        { trade: "General Labour", present: 12, total: 14 },
      ],
    },
  },
  {
    id: "crescent-retail-mall",
    name: "Crescent Retail Mall",
    client: "Crescent Retail Group",
    location: "F-7 Markaz, Islamabad",
    type: "Retail Mall · 5 Levels + Cinema",
    status: "At Risk",
    progress: 57,
    budget: 31200000,
    spent: 18900000,
    startDate: "Feb 2026",
    deadline: "Dec 2027",
    manager: "Engr. Mahnoor Aslam",
    workersToday: 174,
    totalWorkers: 205,
    panel: "mall",
    accent: "#fb923c",
    description:
      "A five-level retail destination with a 6-screen cinema, food court and 3 levels of basement parking. Facade glazing is behind programme due to a delayed aluminium shipment — recovery plan in motion.",
    phases: [
      { name: "Basements & Retaining Walls", progress: 100, status: "done", start: "Feb 2026", end: "Aug 2026" },
      { name: "Frame & Slabs", progress: 92, status: "active", start: "Jun 2026", end: "Jan 2027" },
      { name: "Facade & Glazing", progress: 38, status: "active", start: "Sep 2026", end: "May 2027" },
      { name: "MEP & HVAC", progress: 44, status: "active", start: "Oct 2026", end: "Aug 2027" },
      { name: "Interior Fit-Out", progress: 9, status: "active", start: "Nov 2026", end: "Nov 2027" },
      { name: "Testing & Handover", progress: 0, status: "upcoming", start: "Oct 2027", end: "Dec 2027" },
    ],
    reports: [
      { date: "Nov 15, 2026", title: "Facade recovery plan approved", summary: "Second aluminium supplier onboarded; expedited shipment lands Dec 02. Weekend shifts added to recover 11 days on the glazing programme.", progress: 57, workers: 174, panel: "mall", tag: "Recovery" },
      { date: "Nov 12, 2026", title: "AHU units installed on roof level", summary: "Four of six air-handling units craned and set. Ductwork risers complete up to level 3.", progress: 55, workers: 169, panel: "mall", tag: "HVAC" },
      { date: "Nov 08, 2026", title: "Cinema shell structure complete", summary: "Raked slab and acoustic isolation bearings installed. Sound consultant inspection booked for next week.", progress: 53, workers: 171, panel: "mall", tag: "Structure" },
    ],
    materials: [
      { name: "Aluminium Facade Profiles", used: "38 tons", stock: "2.1 tons", status: "critical" },
      { name: "Curtain Wall Glass", used: "6,400 m2", stock: "1,900 m2", status: "low" },
      { name: "HVAC Ducting (GI Sheet)", used: "24 tons", stock: "6 tons", status: "ok" },
      { name: "Escalators", used: "4 units", stock: "8 units on site", status: "ok" },
    ],
    attendance: {
      present: 174,
      absent: 31,
      trades: [
        { trade: "Steel Fixers", present: 41, total: 48 },
        { trade: "Shuttering Carpenters", present: 38, total: 44 },
        { trade: "Facade Installers", present: 27, total: 36 },
        { trade: "HVAC Technicians", present: 24, total: 30 },
        { trade: "Electricians", present: 22, total: 25 },
        { trade: "General Labour", present: 22, total: 22 },
      ],
    },
  },
  {
    id: "harborview-bridge",
    name: "Harborview Bridge Link",
    client: "Harborview Infrastructure Authority",
    location: "Keamari Crossing, Karachi",
    type: "Cable-Stayed Bridge · 1.2 km",
    status: "Delayed",
    progress: 34,
    budget: 44800000,
    spent: 13900000,
    startDate: "Apr 2026",
    deadline: "Jun 2028",
    manager: "Engr. Danish Iqbal",
    workersToday: 121,
    totalWorkers: 152,
    panel: "bridge",
    accent: "#f87171",
    description:
      "A 1.2 km cable-stayed crossing with twin 90 m pylons. Marine piling was slowed by monsoon swells; pylon P2 is now rising and a revised baseline programme is under client review.",
    phases: [
      { name: "Marine Piling & Cofferdams", progress: 78, status: "active", start: "Apr 2026", end: "Jan 2027" },
      { name: "Pylon Construction", progress: 36, status: "active", start: "Sep 2026", end: "Sep 2027" },
      { name: "Deck Segments & Stay Cables", progress: 0, status: "upcoming", start: "Jun 2027", end: "Mar 2028" },
      { name: "Approach Roads", progress: 22, status: "active", start: "Oct 2026", end: "Dec 2027" },
      { name: "Lighting, Barriers & Finishes", progress: 0, status: "upcoming", start: "Feb 2028", end: "May 2028" },
      { name: "Load Testing & Opening", progress: 0, status: "upcoming", start: "May 2028", end: "Jun 2028" },
    ],
    reports: [
      { date: "Nov 16, 2026", title: "Pylon P2 reaches 28 m", summary: "Jump-form cycle time improved to 4 days per lift. Marine spread back to full strength after the swell window closed.", progress: 34, workers: 121, panel: "bridge", tag: "Pylons" },
      { date: "Nov 10, 2026", title: "Revised baseline submitted to client", summary: "Recovery programme recovers 6 of the 9 lost weeks through parallel approach-road works. Client review meeting scheduled Nov 24.", progress: 32, workers: 118, panel: "bridge", tag: "Programme" },
      { date: "Nov 04, 2026", title: "Pile cap PC-7 pour complete", summary: "1,150 m3 underwater pour completed with tremie method. Integrity testing passed on all 12 piles.", progress: 30, workers: 124, panel: "bridge", tag: "Marine" },
    ],
    materials: [
      { name: "Marine Grade Concrete", used: "21,600 m3", stock: "On order", status: "ok" },
      { name: "Stay Cable Strand", used: "0 tons", stock: "210 tons", status: "ok" },
      { name: "Steel Piles (1200 mm)", used: "148 pcs", stock: "18 pcs", status: "low" },
      { name: "Diesel (Marine Plant)", used: "96,000 L", stock: "4,200 L", status: "critical" },
    ],
    attendance: {
      present: 121,
      absent: 31,
      trades: [
        { trade: "Marine Crew", present: 34, total: 44 },
        { trade: "Steel Fixers", present: 28, total: 34 },
        { trade: "Formwork Carpenters", present: 25, total: 30 },
        { trade: "Crane Operators", present: 12, total: 14 },
        { trade: "General Labour", present: 22, total: 30 },
      ],
    },
  },
  {
    id: "skyline-office-park",
    name: "Skyline Office Park",
    client: "Skyline Corporate Estates",
    location: "Blue Area, Islamabad",
    type: "Office Park · 3 Buildings",
    status: "Completed",
    progress: 100,
    budget: 15800000,
    spent: 15200000,
    startDate: "Jun 2025",
    deadline: "Oct 2026",
    manager: "Engr. Salman Tariq",
    workersToday: 0,
    totalWorkers: 0,
    panel: "office",
    accent: "#a78bfa",
    description:
      "Three mid-rise office buildings around a landscaped courtyard, delivered 3 weeks ahead of the contractual date with a defect-free handover and LEED Gold documentation submitted.",
    phases: [
      { name: "Foundations", progress: 100, status: "done", start: "Jun 2025", end: "Sep 2025" },
      { name: "Structure", progress: 100, status: "done", start: "Sep 2025", end: "Mar 2026" },
      { name: "Facade & Glazing", progress: 100, status: "done", start: "Feb 2026", end: "Jun 2026" },
      { name: "MEP & Fit-Out", progress: 100, status: "done", start: "Apr 2026", end: "Sep 2026" },
      { name: "Landscaping & Externals", progress: 100, status: "done", start: "Aug 2026", end: "Oct 2026" },
      { name: "Handover", progress: 100, status: "done", start: "Oct 2026", end: "Oct 2026" },
    ],
    reports: [
      { date: "Oct 28, 2026", title: "Final handover certificate signed", summary: "Client took possession of all three buildings. Zero critical snags at handover; 14 minor items closed within the first week.", progress: 100, workers: 36, panel: "office", tag: "Handover" },
      { date: "Oct 19, 2026", title: "LEED Gold documentation submitted", summary: "Energy model shows 31% improvement over baseline. Commissioning reports for all systems uploaded to the client portal.", progress: 99, workers: 58, panel: "office", tag: "Compliance" },
    ],
    materials: [
      { name: "Curtain Wall Glass", used: "11,200 m2", stock: "Returned", status: "ok" },
      { name: "Raised Flooring", used: "18,500 m2", stock: "Returned", status: "ok" },
    ],
    attendance: { present: 0, absent: 0, trades: [] },
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);

export const money = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : `$${(n / 1_000).toFixed(0)}K`;

export const portfolioStats = {
  activeProjects: projects.filter((p) => p.status !== "Completed").length,
  workersToday: projects.reduce((s, p) => s + p.workersToday, 0),
  totalBudget: projects.reduce((s, p) => s + p.budget, 0),
  totalSpent: projects.reduce((s, p) => s + p.spent, 0),
  avgProgress: Math.round(projects.reduce((s, p) => s + p.progress, 0) / projects.length),
};

export const weeklyProgress = [
  { day: "Mon", planned: 54, actual: 52 },
  { day: "Tue", planned: 57, actual: 56 },
  { day: "Wed", planned: 60, actual: 61 },
  { day: "Thu", planned: 63, actual: 62 },
  { day: "Fri", planned: 66, actual: 68 },
  { day: "Sat", planned: 69, actual: 70 },
  { day: "Sun", planned: 71, actual: 71 },
];
