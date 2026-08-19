import { Prisma, PrismaClient, SectionType } from "@prisma/client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();

const permissions = [
  "users.manage",
  "content.edit",
  "content.publish",
  "solutions.manage",
  "pages.manage",
  "projects.manage",
  "media.manage",
  "seo.manage",
  "settings.manage",
];

const menu = [
  [
    "Water Treatment Plants (WTP)",
    "water-treatment-plants",
    [
      "Clarifier Systems",
      "Raw Water Treatment Plants",
      "Filtration Systems",
      "Softener Plants",
      "Demineralization (DM) Plants",
      "Reverse Osmosis (RO) Systems",
      "Ultra Filtration (UF) Systems",
    ],
  ],
  [
    "Wastewater Treatment Plants",
    "wastewater-treatment",
    [
      "Sewage Treatment Plants (STP)",
      "Effluent Treatment Plants (ETP)",
      "Package STP & ETP Systems",
      "Grey Water Recycling Systems",
      "Industrial Wastewater Treatment",
    ],
  ],
  [
    "Operation & Maintenance (O&M)",
    "operation-maintenance",
    [
      "Annual Maintenance Contracts (AMC)",
      "Plant Operation",
      "Preventive Maintenance",
      "Chemical Supply",
      "Performance Monitoring",
      "Breakdown Support",
    ],
  ],
  [
    "Fabrication & Engineering",
    "fabrication-engineering",
    [
      "MS & SS Pressure Vessel Fabrication",
      "Storage Tanks",
      "Pressure Filters",
      "Skid-Mounted Systems",
      "Custom Process Equipment",
      "Piping Fabrication & Installation",
    ],
  ],
  [
    "Advanced Biological Treatment Technologies",
    "advanced-biological-treatment",
    [
      "MBBR (Moving Bed Biofilm Reactor)",
      "MBR (Membrane Bioreactor)",
      "SBR Process",
      "ASP Process",
    ],
  ],
  [
    "Retrofitting & Upgradation",
    "retrofitting-upgradation",
    [
      "Capacity Enhancement",
      "Technology Upgradation",
      "Energy Saving Modifications",
      "Automation & PLC Integration",
      "Performance Improvement",
    ],
  ],
] as const;

const imagePool = [
  "/clarifier-img.png",
  "/clarisettler-img.png",
  "/hrscc.png",
  "/tube-settler-img.png",
  "/lamella-settler-img.png",
  "/service.png",
  "/key-benefits-img.png",
  "/banner/water-treatment.png",
  "/banner/operation-maintenance.png",
  "/banner/fabrication-engineering.png",
  "/banner/advanced-biological.png",
  "/banner/retrofitting.png",
];

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const pageSlugFor = (title: string) => {
  if (title.startsWith("Clarifier")) return "clarifier-system";
  if (title === "MBBR (Moving Bed Biofilm Reactor)") return "mbbr";
  if (title === "MBR (Membrane Bioreactor)") return "mbr";
  return slug(title);
};

const words = (title: string) =>
  title
    .replace(/\([^)]*\)/g, "")
    .replace(/&/g, "and")
    .replace(/\b(STP|ETP|DM|RO|UF|MBBR|MBR|SBR|ASP|MS|SS|PLC|AMC|O|M)\b/g, "")
    .trim()
    .toLowerCase();

const iconByIndex = [
  "Droplet",
  "Filter",
  "ShieldCheck",
  "Gauge",
  "Layers",
  "Wrench",
  "Factory",
  "RefreshCw",
  "FlaskConical",
  "ClipboardCheck",
  "Ruler",
  "Zap",
  "Box",
  "Recycle",
  "PenTool",
  "Pill",
];

type SectionInput = {
  type: SectionType;
  title: string;
  sortOrder: number;
  isEnabled: boolean;
  content: Prisma.InputJsonValue;
};

const heroTitles: Record<string, string> = {
  "clarifier-system": "Industrial Clarifier Systems for Reliable Solid-Liquid Separation",
  "raw-water-treatment-plants": "Reliable Raw Water Treatment Plants Engineered for Industrial Water Quality",
  "filtration-systems": "Industrial Water Filtration Systems for Clear, Consistent Process Water",
  "softener-plants": "Water Softener Plants for Scale Control and Utility Protection",
  "demineralization-plants": "DM Water Plants for Low-Conductivity Industrial Water Treatment",
  "reverse-osmosis-systems": "Industrial Reverse Osmosis Systems for High-Purity Water Production",
  "ultra-filtration-systems": "Ultrafiltration Systems for Fine Suspended Solids and Microbial Barrier Treatment",
  "sewage-treatment-plants": "Sewage Treatment Plants for Domestic Wastewater Recycling and Reuse",
  "effluent-treatment-plants": "Effluent Treatment Plants for Industrial Wastewater Management",
  "package-stp-and-etp-systems": "Packaged STP and ETP Systems for Compact Wastewater Treatment",
  "grey-water-recycling-systems": "Grey Water Recycling Systems for Sustainable Water Reuse",
  "industrial-wastewater-treatment": "Industrial Wastewater Treatment Solutions for Process Effluent Control",
  "annual-maintenance-contracts": "Water and Wastewater Plant AMC Services for Reliable Operation",
  "plant-operation": "Professional Plant Operation Services for WTP, STP and ETP Systems",
  "preventive-maintenance": "Preventive Maintenance Services for Treatment Plant Reliability",
  "chemical-supply": "Treatment Plant Chemical Supply and Dosing Support",
  "performance-monitoring": "Water Treatment Plant Performance Monitoring and Reporting Services",
  "breakdown-support": "Breakdown Support for Water and Wastewater Treatment Plants",
  "ms-and-ss-pressure-vessel-fabrication": "MS and SS Pressure Vessel Fabrication for Treatment and Process Plants",
  "storage-tanks": "Industrial Storage Tanks for Water, Wastewater and Process Utilities",
  "pressure-filters": "Pressure Filter Fabrication for Water Treatment and Polishing Systems",
  "skid-mounted-systems": "Skid-Mounted Treatment Systems for Fast, Compact Site Integration",
  "custom-process-equipment": "Custom Process Equipment Fabrication for Industrial Treatment Plants",
  "piping-fabrication-and-installation": "Process Piping Fabrication and Installation for Treatment Utilities",
  "mbbr": "MBBR Wastewater Treatment Systems for Compact Biological Treatment",
  "mbr": "MBR Wastewater Treatment Systems for High-Quality Treated Water Reuse",
  "sbr-process": "SBR Wastewater Treatment Process for Sequenced Biological Treatment",
  "asp-process": "ASP Wastewater Treatment Process for Conventional Activated Sludge Plants",
  "capacity-enhancement": "Water and Wastewater Plant Capacity Enhancement Solutions by AQUEN Fluid",
  "technology-upgradation": "Treatment Plant Technology Upgradation for Better Process Performance",
  "energy-saving-modifications": "Energy Saving Modifications for Water and Wastewater Treatment Plants",
  "automation-and-plc-integration": "Automation and PLC Integration for Treatment Plant Control",
  "performance-improvement": "Performance Improvement Solutions for Existing Water and Wastewater Plants",
};

const overviewHeadings: Record<string, string> = {
  "reverse-osmosis-systems": "How Do Industrial RO Systems Produce High-Purity Water?",
  "sewage-treatment-plants": "What Is a Sewage Treatment Plant and How Is Treated Water Reused?",
  "effluent-treatment-plants": "What Is an Effluent Treatment Plant for Industrial Wastewater?",
  "mbbr": "How Does an MBBR System Treat Wastewater?",
  "mbr": "How Does an MBR System Combine Biology and Membrane Separation?",
  "sbr-process": "How Does the SBR Process Treat Wastewater in Timed Cycles?",
  "asp-process": "What Is the Activated Sludge Process in Wastewater Treatment?",
  "plant-operation": "Why Choose Professional Plant Operation Services?",
  "ms-and-ss-pressure-vessel-fabrication": "What Goes Into Pressure Vessel Fabrication for Industrial Systems?",
  "capacity-enhancement": "How Can Existing Treatment Plant Capacity Be Increased?",
};

function processFor(categorySlug: string, pageSlug: string, title: string) {
  const service = categorySlug === "operation-maintenance" || categorySlug === "fabrication-engineering" || categorySlug === "retrofitting-upgradation";
  const stages: Record<string, string[]> = {
    "raw-water-treatment-plants": ["Raw Water Intake", "Coagulation and Flocculation", "Clarification", "Filtration", "Treated Water Collection"],
    "clarifier-system": ["Inlet Distribution", "Chemical Conditioning", "Floc Settling", "Sludge Withdrawal", "Clarified Water Outlet"],
    "filtration-systems": ["Feed Water Distribution", "Media Filtration", "Backwash Cycle", "Polishing or Disinfection", "Filtered Water Outlet"],
    "softener-plants": ["Hard Water Feed", "Ion Exchange Softening", "Brine Regeneration", "Rinse and Service Return", "Soft Water Storage"],
    "demineralization-plants": ["Pre-filtered Feed", "Cation Exchange", "Degassing or Anion Exchange", "Mixed Bed Polishing", "DM Water Collection"],
    "reverse-osmosis-systems": ["Feed Water Pretreatment", "Security Filtration", "High-Pressure Pumping", "RO Membrane Separation", "Permeate and Reject Handling"],
    "ultra-filtration-systems": ["Screened Feed Water", "UF Membrane Filtration", "Backwash and Air Scour", "Chemical Cleaning", "UF Filtrate Outlet"],
    "sewage-treatment-plants": ["Screening and Preliminary Treatment", "Sewage Flow Equalization", "Biological Treatment", "Clarification or Solid Separation", "Tertiary Treatment and Disinfection"],
    "effluent-treatment-plants": ["Preliminary Screening", "Effluent Equalization", "pH and Chemical Treatment", "Biological or Physical Treatment", "Clarification and Polishing"],
    "package-stp-and-etp-systems": ["Inlet Collection", "Compact Treatment Modules", "Aeration or Chemical Reaction", "Solid Separation", "Disinfection and Reuse Outlet"],
    "grey-water-recycling-systems": ["Grey Water Collection", "Screening and Equalization", "Biological or Filtration Treatment", "Disinfection", "Reuse Water Storage"],
    "industrial-wastewater-treatment": ["Waste Segregation", "Equalization and Neutralization", "Chemical or Biological Treatment", "Clarification and Sludge Handling", "Polishing for Reuse or Discharge"],
    mbbr: ["Influent Screening and Equalization", "Aeration Tank Contact", "Biofilm Growth on Carriers", "Solids Separation", "Disinfection or Reuse Outlet"],
    mbr: ["Pretreatment", "Biological Aeration", "Membrane Separation", "Permeate Collection", "Sludge Handling and Reuse"],
    "sbr-process": ["Fill", "React", "Settle", "Decant", "Idle and Sludge Wasting"],
    "asp-process": ["Primary Treatment", "Aeration Basin", "Secondary Clarification", "Return Sludge Control", "Treated Effluent Polishing"],
  };
  const serviceStages: Record<string, string[]> = {
    "annual-maintenance-contracts": ["Plant Takeover Audit", "AMC Scope Finalization", "Scheduled Service Visits", "Service Findings and Repairs", "Monthly Maintenance Review"],
    "plant-operation": ["Operator Deployment", "Shift-Wise Plant Checks", "Process Adjustment", "Daily Log Reporting", "Supervisor Review"],
    "preventive-maintenance": ["Equipment Condition Survey", "Maintenance Calendar Planning", "Inspection and Cleaning", "Corrective Action Listing", "Reliability Follow-Up"],
    "chemical-supply": ["Water Chemistry Review", "Chemical Selection", "Dosing Rate Guidance", "Supply and Storage Check", "Consumption Review"],
    "performance-monitoring": ["Parameter Baseline Setup", "Routine Sampling and Readings", "Trend Review", "Corrective Recommendations", "Performance Report Submission"],
    "breakdown-support": ["Fault Call Registration", "Symptom and Alarm Review", "Site Troubleshooting", "Repair or Replacement Action", "Restart Verification"],
    "ms-and-ss-pressure-vessel-fabrication": ["Duty and Drawing Review", "Material Cutting and Rolling", "Welding and Nozzle Fit-Up", "Hydrotest or Leak Test", "Surface Finish and Dispatch"],
    "storage-tanks": ["Storage Duty Review", "Tank Detailing", "Shell and Nozzle Fabrication", "Coating or Passivation", "Site Placement Support"],
    "pressure-filters": ["Filtration Duty Review", "Vessel and Internal Fabrication", "Frontal Piping Assembly", "Media Loading", "Backwash Trial"],
    "skid-mounted-systems": ["Skid Layout Engineering", "Frame Fabrication", "Equipment Mounting", "Piping and Wiring Integration", "Pre-Dispatch Functional Check"],
    "custom-process-equipment": ["Process Function Study", "Custom Equipment Detailing", "Fabrication and Assembly", "Inspection and Corrections", "Site Integration Support"],
    "piping-fabrication-and-installation": ["Route Survey", "Material and Spool Planning", "Pipe Fabrication", "Site Erection and Supports", "Leak Test and Handover"],
    "capacity-enhancement": ["Existing Plant Assessment", "Capacity and Performance Analysis", "Upgrade Planning", "Equipment or Process Modification", "Testing and Validation"],
    "technology-upgradation": ["Technology Audit", "Gap and Objective Mapping", "Upgrade Engineering", "Integration and Installation", "Performance Stabilization"],
    "energy-saving-modifications": ["Energy Baseline Review", "Load and Equipment Study", "Modification Planning", "Implementation", "Savings Verification"],
    "automation-and-plc-integration": ["Control Requirement Study", "Instrumentation Mapping", "PLC and Panel Engineering", "Site Integration", "Trial Run and Operator Handover"],
    "performance-improvement": ["Performance Audit", "Root-Cause Analysis", "Corrective Engineering", "Plant Tuning", "Result Verification"],
  };
  const names = stages[pageSlug] || serviceStages[pageSlug] || (service
    ? ["Site Assessment", "Scope Definition", "Engineering Planning", "Execution", "Performance Review"]
    : ["Feed Collection", "Primary Treatment", "Main Treatment Stage", "Polishing", "Treated Water Outlet"]);
  return {
    heading: service ? `How AQUEN Executes ${title}` : `How ${title} Work`,
    description: service
      ? "The workflow focuses on assessment, planned execution, validation, and sustained plant performance."
      : "The working process explains the actual treatment flow inside the plant, from inlet conditioning to treated water output.",
    items: names.map((name, index) => ({
      stepNumber: `0${index + 1}`,
      icon: iconByIndex[(index + 8) % iconByIndex.length],
      title: name,
      description: service
        ? `${name} is handled with clear scope, site coordination, documentation, and practical engineering checks for ${words(title)} work.`
        : `${name} is configured according to influent quality, hydraulic loading, operating objective, and downstream requirements for the ${words(title)} system.`,
      label: service ? ["Review", "Plan", "Engineer", "Execute", "Validate"][index] : ["Inlet", "Condition", "Treatment", "Separation", "Outlet"][index],
    })),
  };
}

type SolutionCopy = {
  shortTitle: string;
  highlight: string;
  heroDescription: string;
  overviewHeading: string;
  overviewDescription: string;
  overviewFull: string;
  features: string[];
  benefits: string[];
  applications: string[];
  selection: string[];
  faqs: string[];
};

const solutionCopy = (
  shortTitle: string,
  highlight: string,
  purpose: string,
  heading: string,
  description: string,
  full: string,
  features: string[],
  benefits: string[],
  applications: string[],
  selection: string[],
  faqs: string[],
): SolutionCopy => ({
  shortTitle,
  highlight,
  heroDescription: purpose,
  overviewHeading: heading,
  overviewDescription: description,
  overviewFull: full,
  features,
  benefits,
  applications,
  selection,
  faqs,
});

const copyBySlug: Record<string, SolutionCopy> = {
  "clarifier-system": {
    shortTitle: "Industrial Clarifier Systems",
    highlight: "Solid-Liquid Separation",
    heroDescription: "Clarifier systems separate suspended solids from water or wastewater through controlled floc formation, settling, sludge removal and clarified-water collection for downstream filtration, reuse or discharge.",
    overviewHeading: "Clarification Systems for Stable Suspended Solids Removal",
    overviewDescription: "AQUEN designs industrial clarifier systems for plants that need dependable settling performance despite changing turbidity, solids loading and hydraulic conditions.",
    overviewFull: "Clarifier selection depends on inlet suspended solids, floc characteristics, surface loading rate, retention time, sludge withdrawal method, civil footprint and downstream treatment objective. AQUEN evaluates whether a clariflocculator, HRSCC, tube settler or lamella settler is best suited for the required water quality and operating space.",
    features: ["Coagulation and Flocculation Zone", "Settling and Separation Basin", "Sludge Collection Mechanism", "Clarified Water Outlet System"],
    benefits: ["Improved Suspended Solids Removal", "Stable Clarified Water Quality", "Reduced Load on Filters", "Controlled Sludge Withdrawal", "Compact Settling Options", "Retrofit-Friendly Clarification"],
    applications: ["Raw water clarification", "ETP primary clarification", "STP secondary clarification", "Industrial process water", "Sludge thickening support", "Municipal treatment plants", "High-turbidity source water", "Reuse polishing pre-treatment"],
    selection: ["Influent solids and turbidity", "Surface loading and retention time", "Sludge characteristics and withdrawal", "Civil footprint and hydraulic profile"],
    faqs: ["What does an industrial clarifier remove?", "When is tube settler clarification preferred?", "How is clarifier size selected?", "Does chemical dosing affect clarification?", "How is settled sludge removed?", "Can AQUEN retrofit an existing clarifier?"],
  },
  "raw-water-treatment-plants": {
    shortTitle: "Reliable Raw Water Treatment Plants",
    highlight: "Industrial Water Treatment",
    heroDescription: "Raw water treatment plants condition surface water, borewell water or industrial source water by removing turbidity, suspended solids, colour and other variable impurities before process use, storage or further purification.",
    overviewHeading: "Engineered Raw Water Treatment for Reliable Process Water",
    overviewDescription: "AQUEN configures raw water treatment plants around source-water variation, suspended solids load and the treated-water quality required by downstream users.",
    overviewFull: "Raw water quality can change with season, intake source and industrial operating patterns. AQUEN reviews turbidity, TSS, iron, organics, hardness, flow variation, chemical demand, filtration load and storage requirements before selecting coagulation, clarification, filtration, disinfection or polishing stages.",
    features: ["Raw Water Intake and Equalization", "Coagulation-Flocculation System", "Clarification and Solids Removal", "Filtration and Treated Water Storage"],
    benefits: ["Consistent Downstream Water Quality", "Reduced Turbidity and TSS", "Protection for RO and Utility Systems", "Flexible Treatment Configuration", "Improved Filter Run Length", "Reliable Industrial Water Supply"],
    applications: ["Surface water treatment", "Borewell water conditioning", "Industrial process water", "Cooling tower make-up", "Boiler pre-treatment", "Food and beverage utilities", "Pharmaceutical utilities", "Municipal supply projects"],
    selection: ["Source-water quality variation", "Turbidity and suspended solids load", "Chemical dosing and settling needs", "Downstream filtration or RO requirement"],
    faqs: ["What is a raw water treatment plant?", "Which impurities are removed from raw water?", "Is clarification always required?", "How is raw water filtration selected?", "Can raw water plants feed RO systems?", "What data is needed before design?"],
  },
  "filtration-systems": solutionCopy(
    "Industrial Water Filtration Systems",
    "Particulate Removal",
    "Filtration systems remove suspended solids, turbidity, iron floc, odour-causing contaminants and fine particles from process or utility water before polishing, reuse or membrane treatment.",
    "Layered Filtration for Clear and Consistent Water",
    "AQUEN selects pressure sand filters, activated carbon filters, dual-media filters or polishing filters based on particle load, flow rate, backwash availability and downstream quality targets.",
    "Filter design is driven by inlet turbidity, TSS, colour, organics, iron, flow variation, allowable pressure drop, backwash water source and operating cycle length. AQUEN matches media depth, vessel sizing, distributor design and valve automation to the duty so the system protects downstream softeners, RO plants, cooling systems and process users.",
    ["Pressure Sand Filtration", "Activated Carbon Filtration", "Dual-Media Filter Packages", "Backwash and Valve Automation"],
    ["Lower Suspended Solids", "Improved Water Clarity", "Protection for Membranes and Resins", "Longer Downstream Equipment Life", "Controlled Backwash Operation", "Flexible Media Selection"],
    ["RO pretreatment filtration", "Cooling tower side-stream filtration", "Process water polishing", "Iron removal pre-filtration", "Activated carbon dechlorination", "Utility water filtration", "Borewell water treatment", "Tertiary wastewater filtration"],
    ["Particle size and turbidity load", "Media type and bed depth", "Backwash flow and drain capacity", "Outlet quality required downstream"],
    ["Which filtration system is suitable for industrial water?", "How often should a pressure sand filter be backwashed?", "When is activated carbon filtration required?", "Can filtration protect RO membranes?", "What affects filter media life?", "Can existing filters be automated?"],
  ),
  "softener-plants": solutionCopy(
    "Industrial Water Softener Plants",
    "Hardness Control",
    "Water softener plants remove calcium and magnesium hardness through ion exchange, helping facilities prevent scaling in boilers, cooling circuits, RO systems and process equipment.",
    "Scale Control for Utilities and Process Water",
    "AQUEN sizes softener plants around hardness load, regeneration cycle, salt consumption, treated-water demand and the operating pattern of downstream equipment.",
    "Softener design considers total hardness, flow peaks, resin volume, exchange capacity, brine system layout, regeneration frequency, leakage hardness target, automation level and standby requirement. AQUEN configures simplex, duplex or multi-column softening systems where stable soft water is critical for plant reliability.",
    ["Ion Exchange Resin Vessel", "Brine Preparation System", "Automatic Regeneration Controls", "Soft Water Storage and Distribution"],
    ["Reduced Scaling Risk", "Improved Boiler and Cooling Efficiency", "Lower Cleaning Frequency", "Stable Soft Water Supply", "Duplex Duty-Standby Options", "Predictable Salt Consumption"],
    ["Boiler feed pre-treatment", "Cooling tower make-up", "Laundry and hospitality utilities", "Textile processing water", "Food plant utilities", "RO pretreatment", "Commercial building water systems", "Industrial process water"],
    ["Raw water hardness level", "Peak and daily soft water demand", "Regeneration frequency and salt use", "Duty-standby operating requirement"],
    ["What does a water softener plant remove?", "How is softener capacity calculated?", "Why is brine used in softeners?", "Can softeners be used before RO?", "What causes hardness leakage?", "How often does resin need replacement?"],
  ),
  "demineralization-plants": solutionCopy(
    "De-Mineralized (DM) Water Treatment Plants",
    "High-Purity Industrial Water",
    "DM plants produce high-purity water free from dissolved salts, minerals and silica through cation exchange, degassing, anion exchange and mixed-bed polishing for boiler feed, pharmaceutical, power plant and process applications.",
    "Complete DM Water Treatment Through Ion Exchange",
    "AQUEN engineers demineralization plants around feed-water conductivity, silica leakage, resin selection, regeneration chemistry, instrumentation and DM water storage requirements.",
    "A complete DM plant typically includes a cation exchanger, degasser, anion exchanger, mixed bed polisher and DM water storage and transfer system. The design evaluates feed conductivity, hardness, silica, free carbon dioxide, resin loading, regeneration sequence, acid and caustic handling, rinse volume, pH control, conductivity monitoring and automation level. Typical systems can be configured in MS rubber lined, FRP, SS 304, SS 316 or SS 316L construction depending on duty and water purity requirement.",
    ["Cation Exchange Unit", "Degasser Unit", "Anion Exchange Unit", "Mixed Bed Polisher", "DM Water Storage and Transfer", "Instrumentation and Control Panel"],
    ["High-Purity DM Water Output", "Conductivity Below 0.1 uS/cm with Mixed Bed", "Silica Leakage Control Below 0.02 ppm", "Reusable Resin Through Regeneration", "Compact Modular Plant Design", "Manual, Semi-Auto or PLC Controls"],
    ["Power plant boiler feed water", "Pharmaceutical formulation and process water", "Electronics and semiconductor rinsing", "Chemical and fertilizer industries", "Textile process water", "Laboratories and R&D centers", "RO permeate polishing", "Critical industrial process utilities"],
    ["Feed-water conductivity and hardness", "Silica target and product-water conductivity", "Cation, degasser, anion and mixed-bed sizing", "Regeneration chemicals, valves and control philosophy", "Material of construction: MSRL, FRP or stainless steel", "DM water storage, transfer and vent filtration"],
    ["What is a DM water treatment plant?", "Which stages are used in a complete DM plant?", "What product conductivity can a mixed bed polisher achieve?", "Which chemicals are used for DM plant regeneration?", "Why is a degasser used after the cation exchanger?", "Which materials of construction are suitable for DM plants?"],
  ),
  "ultra-filtration-systems": solutionCopy(
    "Ultrafiltration Systems",
    "Membrane Filtration",
    "UF systems use low-pressure membranes to remove fine suspended solids, colloids and microbial contaminants, creating a stable barrier before RO treatment or reuse.",
    "Fine Membrane Filtration for Reliable Pretreatment",
    "AQUEN applies ultrafiltration where conventional filtration alone cannot provide consistent SDI, turbidity or microbial control for downstream processes.",
    "UF design reviews particle load, turbidity spikes, organic fouling potential, membrane material, flux rate, backwash frequency, chemical cleaning, recovery and feed screening. AQUEN integrates UF skids with pumps, air scouring, CIP provisions and controls to produce consistent filtered water.",
    ["Feed Screening and Dosing", "UF Membrane Skid", "Backwash and Air Scour System", "Chemical Cleaning Package"],
    ["Low Turbidity Filtrate", "Improved RO Feed Stability", "Microbial Barrier Performance", "Compact Modular Expansion", "Automatic Backwash Control", "Lower Fine Particle Carryover"],
    ["RO pretreatment", "Surface water polishing", "Tertiary wastewater reuse", "Food and beverage utilities", "Pharmaceutical pretreatment", "Industrial recycling systems", "Cooling water filtration", "Municipal water treatment"],
    ["Feed SDI and turbidity", "Membrane flux and recovery", "Backwash water and chemical cleaning", "RO or reuse quality objective"],
    ["What does ultrafiltration remove?", "Is UF a replacement for RO?", "Why is UF used before RO?", "How are UF membranes cleaned?", "What affects UF flux?", "Can UF treat recycled wastewater?"],
  ),
  "reverse-osmosis-systems": {
    shortTitle: "Industrial Reverse Osmosis Systems",
    highlight: "Membrane-Based Purification",
    heroDescription: "Industrial RO systems use high-pressure membrane separation to reduce dissolved salts, TDS and selected contaminants for process water, utility feed, product water and reuse applications.",
    overviewHeading: "High-Efficiency Reverse Osmosis for Controlled Water Quality",
    overviewDescription: "AQUEN designs reverse osmosis systems around feed-water chemistry, pretreatment quality, membrane recovery, reject handling and the final permeate requirement.",
    overviewFull: "RO performance depends on TDS, hardness, silica, iron, organics, SDI, chlorine exposure, temperature, recovery target and operating pressure. AQUEN evaluates pretreatment, cartridge filtration, membrane array, high-pressure pumping, antiscalant dosing, cleaning provisions and permeate storage before finalizing an industrial RO plant.",
    features: ["Feed Water Pretreatment", "Cartridge Security Filtration", "High-Pressure RO Membrane Skid", "Permeate and Reject Management"],
    benefits: ["Dissolved Solids Reduction", "Consistent Permeate Quality", "Scalable RO Capacity", "Controlled Water Recovery", "Reduced Load on Downstream Polishing", "Automation-Ready Operation"],
    applications: ["Process water production", "Boiler feed pre-treatment", "Pharmaceutical water systems", "Food and beverage processing", "Textile process water", "Electronics manufacturing", "Industrial water reuse", "High-purity water preparation"],
    selection: ["Feed-water TDS and scaling risk", "SDI and membrane fouling potential", "Permeate quality and recovery target", "Reject disposal or reuse plan"],
    faqs: ["What is an industrial RO system?", "Why is RO feed pretreatment important?", "What affects RO membrane life?", "How is RO recovery decided?", "What happens to RO reject water?", "When does an RO system need cleaning?"],
  },
  "sewage-treatment-plants": {
    shortTitle: "Sewage Treatment Plants",
    highlight: "Sewage Treatment Solutions",
    heroDescription: "Sewage treatment plants treat domestic wastewater from buildings, campuses, hotels, hospitals and townships using biological treatment, solid separation and disinfection for reuse or compliant discharge.",
    overviewHeading: "Reliable Sewage Treatment for Water Reuse and Compliance",
    overviewDescription: "AQUEN engineers STP systems to reduce BOD, COD, TSS and pathogens while supporting treated-water reuse for flushing, gardening, cooling or other non-potable applications.",
    overviewFull: "STP design depends on population load, sewage flow pattern, BOD/COD load, oil and grease, equalization volume, selected biological process, sludge handling, tertiary filtration, disinfection and reuse target. AQUEN aligns the treatment route with site space, operator skill and regulatory requirements.",
    features: ["Screening and Equalization", "Biological Treatment Reactor", "Clarification or Membrane Separation", "Tertiary Filtration and Disinfection"],
    benefits: ["Effective Organic Load Reduction", "Reuse-Ready Treated Water", "Stable Biological Performance", "Reduced Odour and Nuisance", "Compact Plant Integration", "Simplified Daily Operation"],
    applications: ["Residential communities", "Commercial buildings", "Hotels and resorts", "Hospitals", "Educational campuses", "Industrial facilities", "Institutional campuses", "Large housing developments"],
    selection: ["Daily sewage flow and peak factor", "BOD/COD and nutrient load", "Reuse or discharge quality target", "Technology choice: MBBR, MBR, SBR or ASP"],
    faqs: ["What is a sewage treatment plant?", "Which stages are used in an STP?", "Can treated STP water be reused?", "What affects biological STP performance?", "How is STP capacity calculated?", "What maintenance does an STP need?"],
  },
  "effluent-treatment-plants": {
    shortTitle: "Effluent Treatment Plants",
    highlight: "Industrial Effluent Treatment",
    heroDescription: "Effluent treatment plants treat industrial wastewater containing process chemicals, suspended solids, oil, colour, COD and pH variation before reuse, recycling or discharge.",
    overviewHeading: "Industrial Effluent Treatment Designed Around Process Needs",
    overviewDescription: "AQUEN develops ETP solutions around the specific effluent generated by each industry instead of applying a standard municipal wastewater design.",
    overviewFull: "ETP design begins with wastewater characterization: pH, COD, BOD, TSS, TDS, oil and grease, colour, metals, toxicity and batch discharge patterns. AQUEN selects equalization, neutralization, coagulation, biological treatment, clarification, filtration, sludge handling or polishing based on actual process effluent.",
    features: ["Effluent Equalization Tank", "pH Correction and Chemical Treatment", "Biological or Physical Treatment Stage", "Clarification, Filtration and Sludge Handling"],
    benefits: ["Industry-Specific Wastewater Control", "Reduced COD and Suspended Solids", "Better Process Effluent Management", "Reuse and Recycling Potential", "Improved Discharge Readiness", "Flexible Upgrade Options"],
    applications: ["Textile effluent", "Chemical processing wastewater", "Food and beverage effluent", "Pharmaceutical wastewater", "Dairy and beverage plants", "Metal finishing units", "Industrial estates", "Manufacturing process drains"],
    selection: ["Effluent characterization and treatability", "Batch or continuous discharge pattern", "Chemical dosing and sludge generation", "Reuse, recycling or discharge objective"],
    faqs: ["What is an effluent treatment plant?", "How is industrial effluent different from sewage?", "Why is equalization important in an ETP?", "Which chemicals are used in ETP treatment?", "Can ETP water be reused?", "How is ETP sludge handled?"],
  },
  "package-stp-and-etp-systems": solutionCopy(
    "Packaged STP and ETP Systems",
    "Compact Wastewater Treatment",
    "Packaged STP and ETP systems combine tanks, treatment equipment, piping and controls into compact modules for sites needing faster installation and smaller footprints.",
    "Factory-Built Treatment Packages for Space-Limited Sites",
    "AQUEN develops packaged wastewater plants for commercial, residential and industrial sites where civil work, installation time or plant-room space must be controlled.",
    "Packaged plant selection depends on sewage or effluent type, flow variation, BOD/COD load, hydraulic retention time, tank material, lifting access, odour control, automation and treated-water reuse target. AQUEN balances prefabrication with site-specific process requirements.",
    ["Compact Equalization Section", "Integrated Treatment Reactor", "Built-In Solid Separation", "Skid Controls and Interconnecting Piping"],
    ["Faster Site Installation", "Reduced Civil Footprint", "Pre-Engineered Equipment Layout", "Simpler Site Coordination", "Expandable Modular Capacity", "Suitable for Decentralized Treatment"],
    ["Small commercial STPs", "Construction site utilities", "Hotels and resorts", "Industrial sheds", "Temporary labour camps", "Institutional blocks", "Remote wastewater plants", "Compact ETP installations"],
    ["Wastewater type and flow range", "Containerized or skid-mounted layout", "Transport and lifting constraints", "Reuse or discharge requirements"],
    ["What is a packaged STP or ETP?", "When is a packaged plant preferred?", "Can packaged systems be expanded?", "How much civil work is needed?", "Are packaged plants automated?", "Can treated water be reused from packaged systems?"],
  ),
  "grey-water-recycling-systems": solutionCopy(
    "Grey Water Recycling Systems",
    "Non-Potable Water Reuse",
    "Grey water recycling systems treat wastewater from showers, wash basins, laundry and similar low-strength sources so it can be reused for flushing, gardening or utility applications.",
    "Recovering Light Wastewater for Everyday Reuse",
    "AQUEN designs grey water systems separately from sewage treatment, focusing on lower organic load, soap content, filtration, disinfection and reuse storage.",
    "Grey water treatment considers source segregation, detergents, oil traces, equalization, odour control, biological or membrane filtration, disinfection residual, storage turnover and dual plumbing needs. AQUEN aligns the process with the reuse purpose and building operating pattern.",
    ["Grey Water Collection and Screening", "Equalization and Odour Control", "Filtration or Biological Treatment", "Disinfection and Reuse Storage"],
    ["Reduced Freshwater Demand", "Useful Non-Potable Reuse", "Lower Load on STP Systems", "Compact Building Integration", "Improved Sustainability Metrics", "Controlled Reuse Water Quality"],
    ["Toilet flushing reuse", "Landscape irrigation", "Commercial buildings", "Hotels and resorts", "Residential apartments", "Hostels and campuses", "Laundry water recovery", "Cooling make-up after polishing"],
    ["Grey water source segregation", "Soap and organic load", "Reuse storage and disinfection", "Dual plumbing integration"],
    ["What is grey water recycling?", "Which water sources can be recycled?", "Can grey water be used for drinking?", "How is grey water disinfected?", "Does grey water recycling reduce STP load?", "What maintenance is required?"],
  ),
  "industrial-wastewater-treatment": solutionCopy(
    "Industrial Wastewater Treatment Solutions",
    "Process Effluent Control",
    "Industrial wastewater treatment systems manage complex process effluents by combining equalization, chemical treatment, biological treatment, clarification, filtration and reuse polishing as needed.",
    "Treatment Trains Built Around Industrial Effluent Chemistry",
    "AQUEN studies production processes and wastewater streams before selecting a treatment route for pollutant reduction, recycling, discharge compliance or zero-liquid-discharge preparation.",
    "Industrial wastewater design reviews segregation possibilities, pH shocks, COD fractions, biodegradability, TDS, oil, metals, colour, toxicity, sludge generation, automation and operator involvement. AQUEN avoids one-size designs by matching unit processes to the actual effluent profile.",
    ["Stream Segregation and Equalization", "Chemical Reaction and Neutralization", "Biological or Advanced Treatment", "Polishing, Reuse and Sludge Handling"],
    ["Process-Specific Treatment", "Improved Pollutant Reduction", "Better Shock Load Management", "Reuse and Recycling Readiness", "Reduced Compliance Risk", "Scalable Treatment Trains"],
    ["Textile wastewater", "Chemical manufacturing", "Food processing effluent", "Pharmaceutical process drains", "Automotive and engineering units", "Dairy and beverage wastewater", "Common utility areas", "Industrial water recycling"],
    ["Effluent characterization", "Treatability and toxicity review", "Reuse versus discharge objective", "Sludge and reject handling plan"],
    ["How is industrial wastewater treatment designed?", "Why is wastewater characterization necessary?", "Can high-COD effluent be biologically treated?", "What is treatability testing?", "Can industrial wastewater be reused?", "How is sludge from industrial treatment handled?"],
  ),
  "annual-maintenance-contracts": solutionCopy(
    "Water Treatment Plant AMC",
    "Annual Maintenance Support",
    "AMC services keep WTP, STP, ETP, RO and filtration assets reliable through planned inspections, preventive maintenance, operating checks and responsive breakdown support.",
    "Structured Maintenance for Treatment Plant Reliability",
    "AQUEN defines AMC scope around plant condition, critical equipment, visit frequency, consumables, reporting needs and escalation support.",
    "A practical water treatment plant AMC covers pumps, blowers, dosing systems, filters, membranes, valves, instruments, panels, safety checks and performance records. AQUEN uses scheduled service visits and documented observations to reduce avoidable failures and improve operating discipline.",
    ["Preventive Maintenance Visits", "Equipment Inspection Checklist", "Consumable and Spares Planning", "Breakdown Response Coordination"],
    ["Reduced Unplanned Downtime", "Longer Equipment Life", "Documented Service History", "Early Fault Detection", "Predictable Maintenance Planning", "Better Plant Availability"],
    ["RO plant AMC", "STP maintenance contracts", "ETP service support", "Filter and softener maintenance", "Commercial plant rooms", "Industrial utility plants", "Institutional wastewater systems", "Multi-site facility contracts"],
    ["Plant condition assessment", "Visit frequency and service scope", "Critical spares requirement", "Breakdown response expectations"],
    ["What is included in a water treatment plant AMC?", "How often should AMC visits happen?", "Does AMC include chemicals and spares?", "Can AQUEN maintain third-party plants?", "How are breakdowns handled under AMC?", "What records are maintained during service?"],
  ),
  "plant-operation": solutionCopy(
    "Treatment Plant Operation Services",
    "Daily Plant Operation",
    "Plant operation services provide trained operating support for WTP, STP and ETP systems, covering routine checks, process control, chemical dosing, housekeeping and reporting.",
    "Professional Operators for Consistent Plant Output",
    "AQUEN supports facilities that need disciplined daily operation instead of relying on irregular attention from non-specialist site teams.",
    "Operation scope is built around plant hours, manpower requirement, shift pattern, sampling frequency, dosing adjustments, backwash schedules, sludge handling, log sheets and emergency escalation. AQUEN focuses on stable outlet quality and clear accountability at site.",
    ["Operator Deployment", "Daily Process Control", "Chemical Dosing and Backwash Routines", "Log Sheets and Reporting"],
    ["Consistent Day-to-Day Operation", "Better Process Discipline", "Reduced Operator Dependency", "Timely Chemical Adjustment", "Cleaner Plant-Room Practices", "Traceable Operating Records"],
    ["STP operation contracts", "ETP operator services", "WTP plant rooms", "Commercial buildings", "Industrial utilities", "Hotels and hospitals", "Township treatment plants", "Remote facilities"],
    ["Operating hours and shift needs", "Required skill level", "Daily testing and reporting format", "Escalation and supervision plan"],
    ["What do plant operation services include?", "Can AQUEN provide operators for STP and ETP plants?", "How are daily plant logs maintained?", "Who adjusts chemical dosing?", "Can operation services include supervision?", "How is plant performance reviewed?"],
  ),
  "preventive-maintenance": solutionCopy(
    "Preventive Maintenance Services",
    "Planned Reliability Checks",
    "Preventive maintenance services identify wear, fouling, leakage, abnormal noise, dosing issues and control faults before they turn into plant shutdowns.",
    "Maintenance Planning That Prevents Avoidable Failures",
    "AQUEN creates preventive maintenance routines around equipment duty, operating hours, water quality stress and the criticality of each treatment asset.",
    "Preventive work may include pump inspection, blower checks, valve operation, filter backwash review, membrane flushing, resin condition checks, instrument calibration review, panel inspection and housekeeping observations. Findings are documented so corrective work can be prioritized.",
    ["Mechanical Equipment Checks", "Process Equipment Cleaning Review", "Instrument and Panel Inspection", "Maintenance Reports and Action Lists"],
    ["Earlier Fault Detection", "Lower Breakdown Risk", "Improved Equipment Availability", "Cleaner Operating Conditions", "Better Spare Planning", "More Predictable Service Costs"],
    ["Pump and blower rooms", "RO and UF plants", "STP and ETP systems", "Pressure filters", "Softener and DM units", "Dosing systems", "Control panels", "Institutional utility plants"],
    ["Equipment criticality", "Maintenance interval planning", "Inspection checklist coverage", "Corrective action tracking"],
    ["What is preventive maintenance for treatment plants?", "Which equipment needs routine inspection?", "How does preventive maintenance reduce breakdowns?", "Are calibration checks included?", "Can maintenance be scheduled during low-load hours?", "What reports are provided after visits?"],
  ),
  "chemical-supply": solutionCopy(
    "Treatment Chemical Supply",
    "Dosing Chemical Support",
    "Chemical supply services provide suitable treatment chemicals and dosing guidance for coagulation, pH correction, disinfection, antiscalant dosing, cleaning and biological support.",
    "Right Chemicals for Stable Treatment Performance",
    "AQUEN aligns chemical selection with water chemistry, process objective, storage conditions, dosing equipment and operator handling practices.",
    "Chemical requirements vary across WTP, ETP, STP, RO, cooling and reuse systems. AQUEN reviews jar testing needs, pH range, coagulant demand, oxidant compatibility, antiscalant risk, cleaning chemicals, safety data and consumption patterns before recommending supply and dosing practices.",
    ["Coagulants and Flocculants", "pH Correction Chemicals", "RO Antiscalants and Cleaners", "Disinfection and Utility Chemicals"],
    ["Improved Treatment Stability", "Correct Dosing Compatibility", "Reduced Scaling and Fouling", "Safer Chemical Handling", "Predictable Consumption Planning", "Support for Process Troubleshooting"],
    ["ETP chemical dosing", "Raw water coagulation", "RO antiscalant supply", "Membrane cleaning chemicals", "STP disinfection", "pH neutralization", "Cooling water support", "Sludge dewatering aids"],
    ["Water chemistry and treatment goal", "Chemical compatibility", "Storage and handling provision", "Dosing pump and consumption rate"],
    ["Which chemicals are used in water treatment plants?", "How is chemical dosage decided?", "Can AQUEN supply RO antiscalant?", "Why is jar testing useful?", "Are safety data sheets provided?", "Can chemical use be optimized?"],
  ),
  "performance-monitoring": solutionCopy(
    "Plant Performance Monitoring",
    "Data-Based Plant Review",
    "Performance monitoring tracks flow, operating conditions, chemical consumption, equipment health and outlet quality so treatment plants can be corrected before compliance or reliability problems grow.",
    "Turning Plant Data Into Practical Operating Decisions",
    "AQUEN reviews routine readings and site observations to identify process drift, rising energy use, fouling, underdosing or equipment stress.",
    "Monitoring scope may include inlet and outlet parameters, pressure trends, DO readings, pH, TDS, turbidity, BOD/COD sampling, sludge observations, pump hours, blower load and backwash records. AQUEN converts those records into recommendations that operators and plant owners can act on.",
    ["Sampling and Parameter Tracking", "Equipment Trend Review", "Chemical and Utility Consumption Logs", "Performance Reports with Actions"],
    ["Early Process Drift Detection", "Improved Compliance Visibility", "Reduced Guesswork in Operation", "Better Chemical Control", "Energy and Load Insights", "Documented Plant Accountability"],
    ["STP outlet monitoring", "ETP compliance tracking", "RO performance review", "Utility water quality checks", "Industrial wastewater reports", "AMC performance dashboards", "Multi-plant reporting", "Reuse water quality tracking"],
    ["Parameters to be monitored", "Sampling frequency", "Reporting format", "Corrective action responsibility"],
    ["What is treatment plant performance monitoring?", "Which parameters should be tracked?", "Can monitoring identify RO fouling?", "How often should STP water be tested?", "Are reports useful for compliance?", "Can monitoring reduce operating cost?"],
  ),
  "breakdown-support": solutionCopy(
    "Treatment Plant Breakdown Support",
    "Emergency Service Response",
    "Breakdown support helps restore plant operation when pumps, blowers, dosing systems, membranes, valves, panels or process units fail unexpectedly.",
    "Rapid Troubleshooting for Critical Treatment Assets",
    "AQUEN diagnoses mechanical, electrical, process and operational issues so failed treatment systems can be stabilized with practical corrective action.",
    "Breakdown response begins with fault symptoms, alarms, operating history, site access, spare availability and immediate water-quality risk. AQUEN coordinates inspection, temporary bypass guidance, repair planning, replacement recommendations and recommissioning checks as required.",
    ["Fault Diagnosis", "Mechanical and Electrical Troubleshooting", "Emergency Repair Coordination", "Restart and Performance Check"],
    ["Faster Plant Recovery", "Reduced Production Disruption", "Focused Fault Isolation", "Practical Spare Recommendations", "Support Across WTP STP ETP and RO", "Post-Repair Operating Guidance"],
    ["RO plant failures", "STP blower breakdowns", "ETP dosing faults", "Pump and valve issues", "Filter valve malfunction", "Control panel trips", "Membrane system alarms", "Emergency plant shutdowns"],
    ["Failure symptoms and urgency", "Critical equipment availability", "Temporary operating options", "Restart verification steps"],
    ["What should be done during a plant breakdown?", "Can AQUEN troubleshoot electrical and process faults?", "How quickly can a breakdown be diagnosed?", "Are emergency spares required?", "Can failed pumps or blowers be repaired?", "How is performance checked after restart?"],
  ),
  "ms-and-ss-pressure-vessel-fabrication": solutionCopy(
    "MS and SS Pressure Vessel Fabrication",
    "Pressure Equipment Fabrication",
    "AQUEN fabricates MS and SS pressure vessels for filtration, treatment and process utility applications where material grade, weld quality and pressure duty must be matched carefully.",
    "Fabricated Vessels Built for Treatment and Utility Duty",
    "AQUEN develops pressure vessels around design pressure, corrosion conditions, nozzle orientation, internals, coating or passivation needs and installation interfaces.",
    "Pressure vessel fabrication considers shell diameter, plate thickness, end closures, weld procedure, nozzle reinforcement, manhole access, distributor or collector internals, hydrotest requirements and surface finish. AQUEN supports integration into filtration skids, treatment plants and industrial utility systems.",
    ["MS and SS Shell Fabrication", "Nozzle and Manhole Integration", "Internal Distributor Assembly", "Hydrotesting and Surface Finishing"],
    ["Duty-Matched Material Selection", "Controlled Weld Quality", "Custom Nozzle Orientation", "Ready Plant Integration", "Longer Equipment Service Life", "Inspection-Friendly Construction"],
    ["Pressure sand filters", "Activated carbon filters", "Water treatment vessels", "Chemical process equipment", "Industrial utility systems", "Compressed air receivers", "Skid-mounted packages", "Replacement vessel fabrication"],
    ["Design pressure and temperature", "MS or SS material grade", "Internal lining or passivation", "Testing and inspection requirement"],
    ["What materials are used for pressure vessel fabrication?", "Can AQUEN fabricate both MS and SS vessels?", "How is vessel thickness selected?", "Are nozzles customized for site piping?", "Is hydrotesting provided?", "Can fabricated vessels be integrated into skids?"],
  ),
  "storage-tanks": solutionCopy(
    "Industrial Storage Tanks",
    "Liquid Storage Engineering",
    "Storage tanks hold raw water, treated water, chemicals, sludge or process liquids with construction matched to capacity, liquid characteristics and installation conditions.",
    "Purpose-Built Tanks for Treatment Plant Storage",
    "AQUEN fabricates storage tanks for water and wastewater projects where volume, material compatibility, access, venting, level control and site fit matter.",
    "Tank design reviews liquid type, working volume, freeboard, retention need, MS/SS/FRP compatibility, lining, agitation, drain points, overflow, access ladders, level instruments and foundation interface. AQUEN coordinates tank fabrication with plant piping and process requirements.",
    ["Raw and Treated Water Tanks", "Chemical Dosing Tanks", "Sludge Holding Tanks", "Nozzles, Supports and Accessories"],
    ["Correct Storage Volume", "Material Compatible Construction", "Cleaner Piping Integration", "Accessible Maintenance Points", "Level Instrument Readiness", "Custom Site Footprint"],
    ["Raw water storage", "Treated water tanks", "Chemical preparation tanks", "Sludge holding tanks", "Industrial process storage", "Utility plant rooms", "Reuse water storage", "Skid-mounted reservoirs"],
    ["Liquid characteristics", "Working and standby volume", "Material and lining selection", "Nozzle and level control layout"],
    ["Which storage tank material is suitable?", "How is tank capacity decided?", "Can tanks include level sensors?", "Are chemical tanks different from water tanks?", "Can AQUEN fabricate custom tank sizes?", "What accessories can be added to tanks?"],
  ),
  "pressure-filters": solutionCopy(
    "Pressure Filter Fabrication",
    "Filtration Vessel Manufacturing",
    "Pressure filters are fabricated vessels fitted with internals, media support and valve arrangements for sand, carbon, dual-media or specialty filtration duties.",
    "Fabricated Filter Vessels for Reliable Media Performance",
    "AQUEN builds pressure filters around flow rate, filtration velocity, media depth, backwash rate, distributor design and treatment objective.",
    "Pressure filter fabrication includes vessel sizing, inlet/outlet arrangement, frontal piping, strainers, laterals, media support plates, manholes, drains, air release, painting or lining and hydrotesting. AQUEN configures the filter for efficient service and backwash cycles.",
    ["Filter Vessel Shell", "Distributor and Collector Internals", "Frontal Piping and Valves", "Media Loading and Testing"],
    ["Stable Filtration Velocity", "Effective Backwash Distribution", "Custom Media Configuration", "Reduced Channeling Risk", "Serviceable Valve Layout", "Ready-to-Install Filter Package"],
    ["Sand filtration systems", "Activated carbon filters", "Dual-media filters", "Iron removal filters", "RO pretreatment skids", "Tertiary wastewater polishing", "Cooling water filtration", "Utility water plants"],
    ["Filtration flow and velocity", "Media depth and type", "Backwash water availability", "Internal distributor configuration"],
    ["What is a pressure filter used for?", "How is pressure filter size selected?", "Which media can be loaded in pressure filters?", "Why are internals important?", "Can pressure filters be skid mounted?", "How is a fabricated filter tested?"],
  ),
  "skid-mounted-systems": solutionCopy(
    "Skid-Mounted Treatment Systems",
    "Compact Skid Integration",
    "Skid-mounted systems combine pumps, vessels, membranes, dosing, instruments and panels on a common frame for faster installation and cleaner plant integration.",
    "Pre-Assembled Treatment Skids for Fast Site Fit-Up",
    "AQUEN builds skids where project timelines, plant-room layout, transportability and coordinated mechanical-electrical integration are important.",
    "Skid engineering considers skid footprint, lifting points, equipment access, pipe routing, vibration, cable trays, drain points, instrumentation, panel location, testing and site connection interfaces. AQUEN can integrate filtration, RO, dosing, polishing or compact wastewater modules on skids.",
    ["Structural Skid Frame", "Mounted Process Equipment", "Interconnecting Piping and Valves", "Integrated Instruments and Control Panel"],
    ["Faster Installation", "Cleaner Equipment Layout", "Reduced Site Fabrication", "Factory Assembly Checks", "Transportable Modular Design", "Simpler Future Relocation"],
    ["RO skid packages", "Filtration skids", "Chemical dosing skids", "UF systems", "Compact utility plants", "Pilot treatment units", "Containerized systems", "Industrial process packages"],
    ["Available floor space", "Transport and lifting limits", "Site connection points", "Access for operation and service"],
    ["What is a skid-mounted treatment system?", "Can skids reduce site installation time?", "Which equipment can be mounted on a skid?", "Are skid systems tested before dispatch?", "Can skids be customized for small spaces?", "How are skids connected at site?"],
  ),
  "custom-process-equipment": solutionCopy(
    "Custom Process Equipment",
    "Special-Purpose Fabrication",
    "Custom process equipment is designed and fabricated for treatment duties that cannot be solved with standard vessels, tanks or packaged units.",
    "Engineered Equipment for Non-Standard Plant Requirements",
    "AQUEN develops special-purpose equipment after reviewing process function, material compatibility, hydraulic duty, access needs and integration points.",
    "Custom equipment may include reaction tanks, separators, mixing systems, dosing assemblies, structural frames, sludge handling components or specialized treatment modules. AQUEN converts process requirements into practical fabrication drawings, material lists, assemblies and testing steps.",
    ["Process Requirement Review", "Equipment Detailing", "Fabrication and Assembly", "Inspection and Site Integration"],
    ["Fit for Unique Duties", "Better Process Compatibility", "Custom Layout Control", "Improved Installation Readiness", "Material Choices Matched to Service", "Support for Retrofit Projects"],
    ["Reaction tanks", "Mixing vessels", "Settling modules", "Sludge handling equipment", "Chemical preparation systems", "Utility process skids", "Retrofit components", "Pilot plant equipment"],
    ["Process objective and duty", "Material compatibility", "Dimensional constraints", "Testing and integration needs"],
    ["When is custom process equipment required?", "Can AQUEN work from existing plant constraints?", "How are materials selected?", "Can custom equipment include instruments?", "Is fabrication drawing support provided?", "Can equipment be designed for retrofit use?"],
  ),
  "piping-fabrication-and-installation": solutionCopy(
    "Process Piping Fabrication and Installation",
    "Treatment Plant Piping",
    "Piping fabrication and installation connects tanks, pumps, filters, reactors and utility systems with correctly routed lines, supports, valves and site-tested joints.",
    "Reliable Piping for Water and Wastewater Plant Integration",
    "AQUEN executes process piping around fluid type, flow rate, pressure, material compatibility, maintainability and plant-room access.",
    "Piping work considers pipe material, diameter, pressure class, slope, supports, valves, flanges, unions, drains, vents, instrument tapping, bypass lines and isolation needs. AQUEN aligns prefabrication and site installation with shutdown windows and equipment interfaces.",
    ["Pipe Routing and Isometrics", "MS SS UPVC CPVC HDPE Fabrication", "Valve and Support Installation", "Leak Testing and Commissioning"],
    ["Cleaner Plant Layout", "Reduced Leakage Risk", "Better Maintenance Isolation", "Material-Compatible Lines", "Faster Site Execution", "Improved Hydraulic Flow Paths"],
    ["WTP plant piping", "STP and ETP piping", "RO high-pressure lines", "Chemical dosing lines", "Pump room headers", "Filter interconnections", "Retrofit pipe replacement", "Industrial utility piping"],
    ["Fluid type and pressure", "Pipe material selection", "Valve isolation strategy", "Site routing and support points"],
    ["Which piping materials are used in treatment plants?", "Can AQUEN fabricate SS piping?", "How are pipe sizes selected?", "Can piping be installed during plant shutdown?", "Is leak testing included?", "Can old piping be replaced during retrofits?"],
  ),
  mbbr: {
    shortTitle: "MBBR Wastewater Treatment Systems",
    highlight: "Attached-Growth Biology",
    heroDescription: "MBBR systems use floating biofilm carriers inside aeration tanks to provide compact biological treatment for sewage and biodegradable industrial wastewater.",
    overviewHeading: "Compact Biological Treatment with High Process Flexibility",
    overviewDescription: "AQUEN designs MBBR reactors to improve biological surface area, process stability and organic load removal within a compact aerated treatment volume.",
    overviewFull: "MBBR performance depends on carrier fill percentage, dissolved oxygen, mixing energy, wastewater biodegradability, BOD/COD load, nutrient balance, tank hydraulics and downstream solids separation. AQUEN reviews these inputs before selecting carrier media, aeration, retention time and clarification.",
    features: ["MBBR Carrier Media", "Aeration and Mixing System", "Biofilm Treatment Reactor", "Secondary Clarification and Polishing"],
    benefits: ["Compact Biological Footprint", "Good Load Variation Tolerance", "No Complex Sludge Recirculation", "Higher Biomass Surface Area", "Retrofit-Friendly Upgrade Route", "Suitable for STP and ETP Use"],
    applications: ["Compact STP plants", "Hotel sewage treatment", "Township wastewater", "Industrial biodegradable effluent", "Food processing wastewater", "Capacity upgrades", "Decentralized treatment", "Water reuse systems"],
    selection: ["BOD/COD biodegradability", "Carrier fill and media type", "Aeration oxygen demand", "Clarifier sizing after MBBR"],
    faqs: ["What is MBBR wastewater treatment?", "How do MBBR carriers work?", "Does MBBR need return sludge?", "Can MBBR upgrade an old STP?", "What affects MBBR performance?", "How is biomass retained in MBBR?"],
  },
  mbr: {
    shortTitle: "MBR Wastewater Treatment Systems",
    highlight: "Biology + Membrane Separation",
    heroDescription: "MBR systems combine biological treatment with membrane filtration to produce high-quality treated wastewater suitable for reuse where low suspended solids and compact footprints are required.",
    overviewHeading: "Membrane Bioreactor Treatment for High-Quality Reuse Water",
    overviewDescription: "AQUEN engineers MBR plants for projects needing strong biological treatment, membrane-level solids separation and consistent treated water quality.",
    overviewFull: "MBR design considers mixed liquor concentration, membrane flux, aeration demand, fouling control, influent screening, organic load, sludge age, cleaning strategy, permeate quality and reuse objective. AQUEN balances biological stability with membrane protection and operational access.",
    features: ["Fine Screening and Equalization", "Biological Aeration Tank", "Submerged or External Membrane Module", "Permeate Collection and Cleaning System"],
    benefits: ["Very Low Suspended Solids", "Compact STP Footprint", "High Reuse Water Quality", "Reduced Clarifier Dependence", "Stable Biological Treatment", "Automation-Friendly Operation"],
    applications: ["Premium residential projects", "Hotels and hospitals", "Commercial buildings", "Space-constrained STPs", "High-quality reuse schemes", "Institutional campuses", "Industrial sewage treatment", "Decentralized wastewater plants"],
    selection: ["Influent screening quality", "Membrane flux and fouling risk", "Aeration and energy demand", "Reuse water quality target"],
    faqs: ["What is an MBR system?", "How is MBR different from conventional STP?", "Can MBR water be reused?", "What causes membrane fouling?", "How often are MBR membranes cleaned?", "Is MBR suitable where space is limited?"],
  },
  "sbr-process": {
    shortTitle: "SBR Wastewater Treatment Process",
    highlight: "Sequenced Batch Treatment",
    heroDescription: "SBR systems treat wastewater in timed fill, react, settle and decant cycles, making them suitable for biological treatment where batch operation and flexible control are useful.",
    overviewHeading: "Sequencing Batch Treatment for Controlled Biological Removal",
    overviewDescription: "AQUEN configures SBR systems around cycle timing, aeration control, settling quality and decant requirements for sewage and suitable industrial wastewater.",
    overviewFull: "SBR design reviews influent flow pattern, organic load, tank volume, cycle phases, dissolved oxygen control, sludge age, settling behaviour, decanter selection and treated-water withdrawal. AQUEN tunes the operating cycle to meet performance targets while simplifying plant layout.",
    features: ["Fill and Equalization Phase", "Aerated React Phase", "Settle Phase", "Decant and Sludge Wasting"],
    benefits: ["Flexible Batch Operation", "Integrated Aeration and Settling", "Reduced Separate Clarifier Need", "Good Process Control", "Useful for Variable Flows", "Compact Biological Layout"],
    applications: ["Municipal STP projects", "Township sewage treatment", "Institutional wastewater", "Industrial biodegradable wastewater", "Batch-flow sites", "Plant upgrades", "Reuse water treatment", "Decentralized treatment systems"],
    selection: ["Cycle time and tank volume", "Influent load variation", "Settling and decant quality", "Automation and valve control"],
    faqs: ["What is the SBR process?", "What happens during the react phase?", "Does SBR need a separate clarifier?", "How is SBR cycle time selected?", "Can SBR handle variable flows?", "What maintenance does an SBR need?"],
  },
  "asp-process": solutionCopy(
    "ASP Wastewater Treatment Process",
    "Activated Sludge Treatment",
    "The activated sludge process treats sewage and biodegradable wastewater by aerating mixed liquor, growing suspended biomass and separating treated water in a secondary clarifier.",
    "Conventional Biological Treatment for Stable Organic Removal",
    "AQUEN applies ASP where a proven aeration-basin and return-sludge system is suitable for the available footprint, operator capability and treatment target.",
    "ASP design evaluates BOD load, mixed liquor concentration, F/M ratio, aeration demand, clarifier loading, return activated sludge rate, sludge wasting, nutrient balance, settling properties and power consumption. AQUEN configures blowers, diffusers, clarifiers and controls to keep the biomass healthy and the outlet stable.",
    ["Aeration Basin", "Diffused Aeration System", "Secondary Clarifier", "Return and Waste Sludge Control"],
    ["Proven Biological Treatment", "Strong Organic Load Reduction", "Controllable Biomass Inventory", "Suitable for Large Plants", "Flexible Sludge Management", "Established Operating Practices"],
    ["Municipal sewage treatment", "Large township STPs", "Industrial biodegradable effluent", "Common wastewater facilities", "Food process wastewater", "Plant expansions", "Conventional STP upgrades", "Reuse polishing feed"],
    ["BOD load and F/M ratio", "Aeration oxygen requirement", "Clarifier solids loading", "Return sludge control strategy"],
    ["What is the activated sludge process?", "How does ASP remove BOD?", "Why is return sludge required?", "What causes poor sludge settling?", "How is aeration controlled in ASP?", "Is ASP suitable for large STPs?"],
  ),
  "capacity-enhancement": {
    shortTitle: "Treatment Plant Capacity Enhancement",
    highlight: "Plant Upgrade & Optimization",
    heroDescription: "Capacity enhancement upgrades existing water or wastewater treatment plants to handle higher flow, stronger loads or stricter output requirements without unnecessary full plant replacement.",
    overviewHeading: "Upgrading Existing Treatment Plants for Higher Capacity",
    overviewDescription: "AQUEN assesses hydraulic bottlenecks, process limitations and equipment condition to increase usable treatment capacity from existing assets.",
    overviewFull: "Capacity enhancement may involve equalization changes, media replacement, aeration upgrades, additional membranes, clarifier improvements, pump resizing, automation, dosing correction or sludge handling modifications. AQUEN validates whether the existing plant can be upgraded safely before recommending new civil or mechanical additions.",
    features: ["Existing Plant Performance Audit", "Hydraulic Bottleneck Correction", "Process and Equipment Upgrade", "Trial Run and Capacity Validation"],
    benefits: ["Higher Treatment Capacity", "Better Use of Existing Assets", "Reduced Expansion Footprint", "Improved Process Performance", "Lower Replacement Cost", "Shorter Upgrade Downtime"],
    applications: ["Overloaded STP plants", "Expanded industrial facilities", "ETP load increase", "WTP demand growth", "Reuse capacity upgrades", "Township expansion", "Plant debottlenecking", "Compliance improvement projects"],
    selection: ["Current versus required capacity", "Hydraulic and process bottlenecks", "Equipment reuse possibility", "Shutdown window and validation method"],
    faqs: ["When does a plant need capacity enhancement?", "Can capacity be increased without rebuilding?", "How is extra capacity assessed?", "Which equipment may need modification?", "Can automation be upgraded during expansion?", "How is upgraded capacity validated?"],
  },
  "technology-upgradation": solutionCopy(
    "Treatment Plant Technology Upgradation",
    "Process Technology Upgrade",
    "Technology upgradation replaces or improves outdated treatment processes with better filtration, membrane, biological, dosing, automation or polishing systems for improved performance.",
    "Modernizing Existing Plants With Better Treatment Technology",
    "AQUEN upgrades older WTP, STP and ETP assets after studying performance gaps, operating cost, site limitations and new water-quality targets.",
    "Technology upgrades may involve converting conventional STPs to MBBR, adding UF before RO, replacing old filters, improving sludge handling, adding tertiary polishing, modernizing dosing or integrating automation. AQUEN checks hydraulic compatibility and construction impact before recommending a technology change.",
    ["Existing Technology Audit", "Upgrade Option Comparison", "Equipment and Process Integration", "Commissioning and Stabilization"],
    ["Improved Treatment Quality", "Better Use of Existing Civil Assets", "Reduced Manual Dependency", "Support for Reuse Targets", "Expandable Process Capacity", "Lower Obsolescence Risk"],
    ["Old STP modernization", "ETP process conversion", "WTP filtration upgrades", "RO pretreatment improvement", "Reuse quality upgrades", "Aging equipment replacement", "Biological process retrofits", "Industrial compliance projects"],
    ["Current technology limitations", "Required treated-water target", "Compatibility with existing tanks", "Upgrade downtime and sequencing"],
    ["When should a treatment plant technology be upgraded?", "Can old STPs be converted to MBBR or MBR?", "How are upgrade options compared?", "Can upgradation use existing tanks?", "Does technology upgradation require shutdown?", "How is the upgraded process stabilized?"],
  ),
  "energy-saving-modifications": solutionCopy(
    "Energy Saving Modifications",
    "Treatment Plant Energy Optimization",
    "Energy saving modifications reduce avoidable power consumption in water and wastewater plants by improving pumps, blowers, aeration control, operating schedules and pressure losses.",
    "Lower Power Use Without Sacrificing Treatment Performance",
    "AQUEN reviews electrical load and process demand to identify where existing equipment is oversized, poorly controlled or operating outside efficient ranges.",
    "Energy improvement work may include blower optimization, diffuser cleaning or replacement, pump resizing, VFD installation, pressure-drop reduction, backwash timing changes, automation logic and operating-hour rationalization. AQUEN checks treatment stability before implementing savings measures.",
    ["Energy Baseline Study", "Pump and Blower Review", "Control and VFD Modifications", "Savings Verification"],
    ["Lower Operating Cost", "Reduced Equipment Stress", "Better Aeration Control", "Improved Pump Efficiency", "Measurable Consumption Tracking", "Short Payback Opportunities"],
    ["STP blower optimization", "ETP aeration systems", "RO high-pressure pumps", "Filter backwash pumps", "Cooling water systems", "Industrial utility plants", "Retrofit energy audits", "Automation-based savings"],
    ["Current power consumption", "Process load variation", "Equipment efficiency condition", "Savings validation method"],
    ["How can a treatment plant save energy?", "Are blowers usually high energy consumers?", "Can VFDs reduce power use?", "Will energy savings affect outlet quality?", "How are savings measured?", "Can existing pumps be optimized?"],
  ),
  "automation-and-plc-integration": solutionCopy(
    "Water Treatment Plant Automation",
    "PLC and Instrumentation Control",
    "Automation and PLC integration improves treatment plant control through instruments, panels, interlocks, alarms, sequencing and operator-friendly monitoring.",
    "Smarter Plant Control for Reliable Operation",
    "AQUEN automates WTP, STP, ETP, RO and filtration systems around the actual process sequence, equipment interlocks and monitoring needs.",
    "Automation scope can include level sensors, flow meters, pressure transmitters, pH/ORP/TDS instruments, PLC panels, MCC integration, HMI screens, auto-backwash logic, dosing interlocks, alarm history and remote monitoring. AQUEN maps the control philosophy before panel engineering and site commissioning.",
    ["Instrumentation Mapping", "PLC and Control Panel Engineering", "Auto-Sequencing and Interlocks", "HMI, Alarms and Remote Monitoring"],
    ["Reduced Manual Operation", "Improved Process Consistency", "Faster Alarm Response", "Better Data Visibility", "Safer Equipment Interlocking", "Scalable Control Architecture"],
    ["RO plant automation", "Filter auto-backwash systems", "STP and ETP control panels", "Chemical dosing interlocks", "Pump sequencing", "Level-based transfer systems", "Remote monitoring projects", "Retrofit PLC upgrades"],
    ["Control philosophy", "Instrument selection", "Panel and MCC interface", "Operator monitoring requirement"],
    ["What can be automated in a water treatment plant?", "Can existing panels be upgraded to PLC control?", "Which instruments are required?", "Can filters be set for automatic backwash?", "Is remote monitoring possible?", "How are automation interlocks tested?"],
  ),
  "performance-improvement": solutionCopy(
    "Treatment Plant Performance Improvement",
    "Process Performance Correction",
    "Performance improvement work diagnoses why an existing treatment plant is missing output quality, capacity, reliability or operating-cost targets and applies corrective engineering.",
    "Correcting Process Gaps in Existing Treatment Plants",
    "AQUEN studies plant data, equipment condition and operating practices to resolve recurring treatment failures without unnecessary replacement.",
    "Improvement actions can include chemical dosing correction, media replacement, aeration balancing, membrane cleaning, sludge control, clarifier tuning, hydraulic corrections, automation adjustments or operator training. AQUEN validates changes through trial operation and outlet-quality review.",
    ["Plant Performance Audit", "Root-Cause Diagnosis", "Corrective Modification Plan", "Trial Operation and Result Review"],
    ["Better Outlet Quality", "Reduced Recurring Failures", "Lower Chemical Waste", "Improved Operator Confidence", "Targeted Corrective Spending", "Validated Performance Recovery"],
    ["Non-compliant STP outlets", "ETP treatment failures", "RO quality decline", "Filter performance loss", "High chemical consumption", "Sludge settling problems", "Hydraulic bottlenecks", "Reuse water quality issues"],
    ["Current performance gap", "Historical operating data", "Root-cause testing", "Validation after correction"],
    ["Why is my treatment plant not meeting quality?", "Can performance be improved without full replacement?", "How is root cause identified?", "What if chemical dosing is the issue?", "Can operator practices affect performance?", "How is improvement verified?"],
  ),
};

function copyFor(categorySlug: string, pageSlug: string, title: string, p: ReturnType<typeof profile>): SolutionCopy {
  const existing = copyBySlug[pageSlug];
  if (existing) return existing;
  const lower = p.noun;
  const shortTitle = heroTitles[pageSlug]?.replace(/ by AQUEN Fluid/g, "").replace(/ Engineered for .*/g, "") || title;
  const service = categorySlug === "operation-maintenance";
  const fabrication = categorySlug === "fabrication-engineering";
  const retrofit = categorySlug === "retrofitting-upgradation";
  const highlight = service ? "Plant Reliability Service" : fabrication ? "Fabrication & Integration" : retrofit ? "Upgrade Engineering" : categorySlug === "advanced-biological-treatment" ? "Biological Treatment" : "Treatment System Engineering";
  return {
    shortTitle,
    highlight,
    heroDescription: service
      ? `${title} supports daily plant reliability through planned service routines, condition checks, operating records and corrective action for water and wastewater treatment assets.`
      : fabrication
        ? `${title} covers engineered fabrication, material selection, assembly and site integration for water treatment, wastewater treatment and industrial process utility equipment.`
        : retrofit
          ? `${title} improves existing treatment assets by addressing process bottlenecks, equipment limitations, energy use, controls or treated-water performance.`
          : `${title} are engineered around the actual water quality challenge, treatment objective and operating conditions of industrial, commercial and infrastructure plants.`,
    overviewHeading: overviewHeadings[pageSlug] || `${shortTitle} for Practical Plant Performance`,
    overviewDescription: service
      ? `AQUEN plans ${lower} around plant condition, critical equipment, maintenance frequency and reporting needs.`
      : fabrication
        ? `AQUEN develops ${lower} around duty conditions, material compatibility, installation interfaces and long-term service access.`
        : retrofit
          ? `AQUEN applies ${lower} after studying plant data, bottlenecks, asset condition and performance gaps.`
          : `AQUEN configures ${lower} according to influent quality, process duty, treated-water target and operator requirements.`,
    overviewFull: service
      ? `${shortTitle} considers pumps, blowers, valves, dosing systems, instruments, tanks, filters, membranes, safety checks, consumables and operating logs. AQUEN aligns service frequency with the service scope so plant teams can prevent failures rather than only respond to them.`
      : fabrication
        ? `${shortTitle} engineering checks include material grade, wall thickness or plate selection, weld quality, surface preparation, nozzle placement, skid layout, support design, hydrotesting or leak testing and safe handling during installation.`
        : retrofit
          ? `${shortTitle} work starts with existing drawings, site measurements, operating data, equipment health, power consumption, chemical use and outlet quality history. AQUEN then selects practical upgrades that improve capacity or performance while reducing avoidable disruption.`
          : `${shortTitle} design reviews feed characteristics, hydraulic loading, process sequence, equipment sizing, controls, maintenance access and future expansion. AQUEN uses this information to build a treatment configuration that is technically appropriate for the specific application.`,
    features: p.features.map((feature) => `${shortTitle} ${feature}`),
    benefits: [
      `${shortTitle} Performance`,
      `${shortTitle} Reliability`,
      `${shortTitle} Operating Control`,
      `${shortTitle} Maintenance Access`,
      `${shortTitle} Integration`,
      `${shortTitle} Lifecycle Support`,
    ],
    applications: p.applications,
    selection: [
      `${title} duty conditions`,
      `${title} capacity and load profile`,
      `${title} installation constraints`,
      `${title} operation and maintenance needs`,
    ],
    faqs: [
      `What is included in ${title}?`,
      `Where is ${title} commonly used?`,
      `How does AQUEN select ${lower}?`,
      `What information is needed for ${title}?`,
      `Can ${title} be integrated with existing systems?`,
      `What support is available after ${title} implementation?`,
    ],
  };
}

function profile(categorySlug: string, title: string) {
  const lower = words(title);
  if (categorySlug === "operation-maintenance") {
    return {
      noun: lower,
      theme: "operation and lifecycle reliability",
      result: "stable plant output, predictable maintenance, and faster response",
      banner: "/banner/operation-maintenance.png",
      overview: "/service.png",
      applications: [
        "Industrial utilities",
        "Commercial treatment plants",
        "Township water systems",
        "STP and ETP facilities",
        "Process water plants",
        "Remote plant rooms",
        "AMC-managed sites",
        "Performance-critical operations",
      ],
      features: [
        "Site audit and takeover",
        "Routine operating schedule",
        "Consumable and chemical planning",
        "Monitoring and reporting",
      ],
    };
  }
  if (categorySlug === "fabrication-engineering") {
    return {
      noun: lower,
      theme: "fabrication accuracy and installation readiness",
      result: "durable equipment, controlled quality, and smoother site execution",
      banner: "/banner/fabrication-engineering.png",
      overview: "/banner/fabrication-engineering.png",
      applications: [
        "Water treatment skids",
        "Wastewater equipment",
        "Industrial utilities",
        "Process plants",
        "Chemical handling systems",
        "Pump rooms",
        "Plant retrofits",
        "Turnkey project sites",
      ],
      features: [
        "Design and detailing",
        "Material selection",
        "Fabrication and assembly",
        "Testing and site integration",
      ],
    };
  }
  if (categorySlug === "advanced-biological-treatment") {
    return {
      noun: lower,
      theme: "biological treatment stability",
      result: "consistent BOD/COD reduction, compact layouts, and reliable treated water quality",
      banner: "/banner/advanced-biological.png",
      overview: "/banner/advanced-biological.png",
      applications: [
        "Municipal STP projects",
        "Industrial biodegradable wastewater",
        "Townships and institutions",
        "Hotels and hospitals",
        "Food and beverage units",
        "Plant capacity upgrades",
        "Water reuse schemes",
        "Compact treatment plants",
      ],
      features: [
        "Bioreactor process design",
        "Aeration and biomass control",
        "Separation and polishing",
        "Automation and commissioning",
      ],
    };
  }
  if (categorySlug === "retrofitting-upgradation") {
    return {
      noun: lower,
      theme: "improved performance from existing assets",
      result: "higher capacity, lower operating stress, and improved compliance readiness",
      banner: "/banner/retrofitting.png",
      overview: "/banner/retrofitting.png",
      applications: [
        "Overloaded STP and ETP plants",
        "Aging WTP assets",
        "Capacity expansion projects",
        "Energy optimization programs",
        "Automation upgrades",
        "Reuse quality improvements",
        "Process bottleneck correction",
        "Compliance improvement works",
      ],
      features: [
        "Plant performance audit",
        "Hydraulic and process corrections",
        "Equipment replacement planning",
        "Commissioning and validation",
      ],
    };
  }
  if (categorySlug === "wastewater-treatment") {
    return {
      noun: lower,
      theme: "wastewater treatment and reuse",
      result: "controlled pollutant reduction, safer discharge, and reuse-ready treated water",
      banner: "/banner/water-treatment.png",
      overview: "/key-benefits-img.png",
      applications: [
        "Manufacturing facilities",
        "Commercial buildings",
        "Hotels and hospitals",
        "Townships and institutions",
        "Food and beverage units",
        "Textile and chemical units",
        "Utilities and infrastructure",
        "Water recycling projects",
      ],
      features: [
        "Equalization and primary treatment",
        "Biological or chemical treatment",
        "Clarification and filtration",
        "Disinfection and reuse polishing",
      ],
    };
  }
  return {
    noun: lower,
    theme: "water treatment performance",
    result: "reliable treated water quality, efficient operation, and long service life",
    banner: "/banner/water-treatment.png",
    overview: "/clarifier-img.png",
    applications: [
      "Industrial process water",
      "Commercial utilities",
      "Municipal water supply",
      "Cooling tower make-up",
      "Boiler feed pre-treatment",
      "Food and beverage plants",
      "Pharmaceutical utilities",
      "Water recycling systems",
    ],
    features:
      title === "Clarifier Systems"
        ? ["Clariflocculator systems", "HRSCC units", "Tube settlers", "Lamella settlers"]
        : ["Pre-treatment package", "Main treatment system", "Polishing stage", "Controls and instrumentation"],
  };
}

function sectionsFor(categorySlug: string, categoryName: string, title: string): SectionInput[] {
  const p = profile(categorySlug, title);
  const lower = p.noun;
  const pageSlug = pageSlugFor(title);
  const process = processFor(categorySlug, pageSlug, title);
  const c = copyFor(categorySlug, pageSlug, title, p);
  const featureItems = c.features.map((feature, index) => ({
    icon: iconByIndex[index],
    title: feature,
    description: `${feature} is configured for ${c.shortTitle.toLowerCase()} using the relevant duty condition, water or process quality target, and site operating requirement.`,
    image: imagePool[index],
    alt: `${title} ${feature}`,
    bulletPoints: [
      `${feature} sizing and duty review`,
      `${feature} integration with the overall plant`,
      `${feature} operation and service access`,
    ],
  }));
  const benefits = c.benefits.map((benefit, index) => ({
    icon: iconByIndex[(index + 2) % iconByIndex.length],
    title: benefit,
    description: `${benefit} helps the plant address ${c.highlight.toLowerCase()} needs with practical engineering, operating visibility, and serviceable equipment selection.`,
  }));
  const applications = c.applications.map((application, index) => ({
    icon: iconByIndex[(index + 4) % iconByIndex.length],
    title: `${application} for ${c.shortTitle}`,
  }));
  const selectionCards = c.selection.map((item, index) => ({
    icon: iconByIndex[(index + 6) % iconByIndex.length],
    title: item,
    description: `${item} is reviewed before finalizing ${c.shortTitle.toLowerCase()} so the recommendation matches the actual application rather than a generic package.`,
    bulletPoints: [
      `${item} data and site constraints`,
      `${item} effect on ${c.shortTitle.toLowerCase()}`,
      `${item} link to ${c.highlight.toLowerCase()}`,
    ],
  }));
  const faqItems = c.faqs.map((question, index) => ({
    question,
    answer: `${question.replace(/\?$/, "")}: AQUEN Fluid evaluates this for ${c.shortTitle.toLowerCase()} with attention to ${c.highlight.toLowerCase()}, plant duty, operating conditions and long-term maintainability. The final recommendation depends on site data, performance targets and available infrastructure.`,
  }));

  return [
    {
      type: SectionType.HERO,
      title,
      sortOrder: 0,
      isEnabled: true,
      content: {
        badge: categoryName,
        title: c.shortTitle,
        highlight: c.highlight,
        description: c.heroDescription,
        backgroundImage: p.banner,
      },
    },
    {
      type: SectionType.OVERVIEW,
      title: `About ${title}`,
      sortOrder: 1,
      isEnabled: true,
      content: {
        kicker: categorySlug === "operation-maintenance" ? "Service Overview" : categorySlug === "fabrication-engineering" ? "Engineering Overview" : "Treatment Overview",
        heading: c.overviewHeading,
        description: c.overviewDescription,
        fullDescription: c.overviewFull,
        image: p.overview,
        imageAlt: `${title} overview by AQUEN Fluid`,
        badge: "Process-Led Engineering",
        badgeDescription: categorySlug === "fabrication-engineering" ? "Built for duty, material, testing, and site fit" : "Sized for flow, load, footprint, and outlet objective",
        highlightTag: "System Highlights",
        highlightTitle: `${c.shortTitle} selected around real operating data`,
        highlightDescription: `AQUEN Fluid reviews ${c.highlight.toLowerCase()} requirements, capacity, site limitations, utilities, controls and service access before finalizing the ${lower} configuration.`,
        chips: [
          { icon: "Layers", label: c.highlight },
          { icon: "Gauge", label: `${c.shortTitle} Control` },
          { icon: "Ruler", label: "Duty-Based Sizing" },
          { icon: "Wrench", label: "Maintainable Layout" },
        ],
        statistics: [
          { value: "4", label: "Core System Areas" },
          { value: "6", label: "Practical Benefits" },
          { value: "8", label: "Application Segments" },
          { value: "Site", label: "Specific Engineering" },
        ],
      },
    },
    {
      type: SectionType.FEATURES,
      title: "Systems We Offer",
      sortOrder: 2,
      isEnabled: true,
      content: {
        heading: `${c.shortTitle} - Systems and Scope`,
        description: `The scope below reflects the main technical areas that shape ${c.shortTitle.toLowerCase()} performance, operation and maintenance.`,
        items: featureItems,
      },
    },
    {
      type: SectionType.BENEFITS,
      title: "Key Benefits",
      sortOrder: 3,
      isEnabled: true,
      content: {
        heading: `${c.shortTitle} Benefits`,
        description: `Each benefit is linked to the actual purpose of ${c.shortTitle.toLowerCase()}, not a generic plant package.`,
        items: benefits,
      },
    },
    {
      type: SectionType.PROCESS,
      title: "Working Process",
      sortOrder: 4,
      isEnabled: true,
      content: {
        heading: process.heading,
        description: categorySlug === "operation-maintenance" || categorySlug === "fabrication-engineering" || categorySlug === "retrofitting-upgradation"
          ? `This workflow shows how AQUEN scopes, executes and validates ${c.shortTitle.toLowerCase()} without forcing it into a treatment-stage model.`
          : `This process flow explains how ${c.shortTitle.toLowerCase()} moves from inlet conditioning to the treatment step that controls ${c.highlight.toLowerCase()}.`,
        items: process.items,
      },
    },
    {
      type: SectionType.APPLICATIONS,
      title: "Applications",
      sortOrder: 5,
      isEnabled: true,
      content: {
        heading: `${c.shortTitle} Applications`,
        description: `Typical applications where ${c.shortTitle.toLowerCase()} can be applied after site and process review.`,
        items: applications,
      },
    },
    {
      type: SectionType.GALLERY,
      title: "Project Gallery",
      sortOrder: 6,
      isEnabled: true,
      content: {
        heading: `${title} Installation Views`,
        description: `${title} media placeholders are stored in the CMS and can be replaced with project photographs from the admin workflow.`,
        items: [
          { image: "/installation-img1.png", caption: `${title} site installation`, alt: `${title} installation view`, size: "large" },
          { image: "/installation-img2.png", caption: "Process equipment arrangement", alt: `${title} process equipment`, size: "small" },
          { image: "/installation-img3.png", caption: "Commissioning and plant room work", alt: `${title} commissioning work`, size: "small" },
        ],
      },
    },
    {
      type: SectionType.DESCRIPTION,
      title: "Applications & Engineering Approach",
      sortOrder: 7,
      isEnabled: true,
      content: {
        heading: `${c.shortTitle} Applications and Selection`,
        description: `These selection points help customers understand how AQUEN approaches ${c.shortTitle.toLowerCase()} requirements before proposing a solution.`,
        items: selectionCards,
      },
    },
    {
      type: SectionType.FAQ,
      title: "Frequently Asked Questions",
      sortOrder: 8,
      isEnabled: true,
      content: {
        heading: `${c.shortTitle} FAQs`,
        description: `Common technical and project questions about ${c.shortTitle.toLowerCase()}.`,
        items: faqItems,
      },
    },
    {
      type: SectionType.CTA,
      title: "Discuss Your Requirement",
      sortOrder: 9,
      isEnabled: true,
      content: {
        badge: "Engineered around your requirement",
        title: `Need ${c.shortTitle}?`,
        description: `Share your ${lower} requirement, available site details and performance target. AQUEN Fluid will review the application and suggest a practical next step.`,
        primaryText: "Request a Consultation",
        primaryLink: "/contact",
        secondaryText: "Call Us Now",
        secondaryLink: "tel:+918888889611",
        contactNumber: "+918888889611",
      },
    },
  ];
}

async function main() {
  const permissionRows = await Promise.all(
    permissions.map((key) =>
      db.permission.upsert({
        where: { key },
        update: {},
        create: { key, description: key.replace(".", " ") },
      }),
    ),
  );
  const superAdmin = await db.role.upsert({
    where: { name: "Super Admin" },
    update: {},
    create: { name: "Super Admin", description: "Complete platform access" },
  });
  const admin = await db.role.upsert({
    where: { name: "Admin" },
    update: {},
    create: { name: "Admin", description: "Content and website management" },
  });
  const editor = await db.role.upsert({
    where: { name: "Editor" },
    update: {},
    create: { name: "Editor", description: "Draft content editing" },
  });

  await db.rolePermission.createMany({
    data: permissionRows.map((p) => ({
      roleId: superAdmin.id,
      permissionId: p.id,
    })),
    skipDuplicates: true,
  });
  await db.rolePermission.createMany({
    data: permissionRows
      .filter((p) => p.key !== "users.manage" && p.key !== "settings.manage")
      .map((p) => ({ roleId: admin.id, permissionId: p.id })),
    skipDuplicates: true,
  });
  await db.rolePermission.createMany({
    data: permissionRows
      .filter((p) => p.key === "content.edit")
      .map((p) => ({ roleId: editor.id, permissionId: p.id })),
    skipDuplicates: true,
  });

  const email = (process.env.SEED_ADMIN_EMAIL || "admin@aquenfluid.com").toLowerCase();
  await db.user.upsert({
    where: { email },
    update: { roleId: superAdmin.id, status: "ACTIVE" },
    create: {
      name: "AQUEN Administrator",
      email,
      passwordHash: await bcrypt.hash(process.env.SEED_ADMIN_PASSWORD || "ChangeMe!12345", 12),
      roleId: superAdmin.id,
      status: "ACTIVE",
    },
  });

  let createdSubcategories = 0;
  let createdPages = 0;
  let updatedSections = 0;

  for (let ci = 0; ci < menu.length; ci++) {
    const [name, categorySlug, children] = menu[ci];
    const category = await db.solutionCategory.upsert({
      where: { slug: categorySlug },
      update: {
        name,
        sortOrder: ci,
        status: "PUBLISHED",
        isEnabled: true,
        deletedAt: null,
      },
      create: {
        name,
        slug: categorySlug,
        sortOrder: ci,
        status: "PUBLISHED",
        isEnabled: true,
      },
    });

    for (let si = 0; si < children.length; si++) {
      const title = children[si];
      const pageSlug = pageSlugFor(title);
      const existingSub = await db.solutionSubcategory.findUnique({
        where: { categoryId_slug: { categoryId: category.id, slug: pageSlug } },
      });
      const sub = await db.solutionSubcategory.upsert({
        where: { categoryId_slug: { categoryId: category.id, slug: pageSlug } },
        update: {
          name: title,
          sortOrder: si,
          status: "PUBLISHED",
          isEnabled: true,
          deletedAt: null,
        },
        create: {
          categoryId: category.id,
          name: title,
          slug: pageSlug,
          description: `AQUEN ${title} solutions for industrial, commercial, and infrastructure applications.`,
          sortOrder: si,
          status: "PUBLISHED",
          isEnabled: true,
        },
      });
      if (!existingSub) createdSubcategories++;

      const existingPage = await db.solutionPage.findUnique({
        where: { subcategoryId_slug: { subcategoryId: sub.id, slug: pageSlug } },
      });
      const page = await db.solutionPage.upsert({
        where: { subcategoryId_slug: { subcategoryId: sub.id, slug: pageSlug } },
        update: {
          title,
          excerpt: `Engineered ${words(title)} solutions for reliable performance, efficient operation, and long service life.`,
          status: "PUBLISHED",
          publishedAt: new Date(),
          sortOrder: si,
          seoTitle: `${title} | AQUEN Fluid`,
          metaDescription: `Explore AQUEN's engineered ${words(title)} systems, applications, benefits, process, and lifecycle support.`,
          deletedAt: null,
        },
        create: {
          subcategoryId: sub.id,
          title,
          slug: pageSlug,
          excerpt: `Engineered ${words(title)} solutions for reliable performance, efficient operation, and long service life.`,
          status: "PUBLISHED",
          publishedAt: new Date(),
          sortOrder: si,
          seoTitle: `${title} | AQUEN Fluid`,
          metaDescription: `Explore AQUEN's engineered ${words(title)} systems, applications, benefits, process, and lifecycle support.`,
        },
      });
      if (!existingPage) createdPages++;

      const sections = sectionsFor(categorySlug, name, title);
      for (const section of sections) {
        const existingSection = await db.pageSection.findFirst({
          where: { pageId: page.id, type: section.type },
          orderBy: { id: "asc" },
        });
        if (existingSection) {
          await db.pageSection.update({
            where: { id: existingSection.id },
            data: section,
          });
        } else {
          await db.pageSection.create({
            data: { pageId: page.id, ...section },
          });
        }
      }
      updatedSections += sections.length;
    }
  }

  await db.solutionSubcategory.updateMany({
    where: {
      slug: "performance-improvement-of-existing-plants",
      category: { slug: "retrofitting-upgradation" },
      deletedAt: null,
    },
    data: {
      isEnabled: false,
      status: "ARCHIVED",
      deletedAt: new Date(),
    },
  });
  await db.solutionPage.updateMany({
    where: {
      slug: "performance-improvement-of-existing-plants",
      subcategory: { category: { slug: "retrofitting-upgradation" } },
      deletedAt: null,
    },
    data: {
      status: "ARCHIVED",
      deletedAt: new Date(),
    },
  });

  await db.setting.upsert({
    where: { key: "site.name" },
    update: { value: "AQUEN Fluid", isPublic: true },
    create: {
      group: "general",
      key: "site.name",
      value: "AQUEN Fluid",
      isPublic: true,
    },
  });

  console.log(
    `Seeded CMS. Admin: ${email}. Created subcategories: ${createdSubcategories}. Created pages: ${createdPages}. Rebuilt sections: ${updatedSections}.`,
  );
}

main().finally(() => db.$disconnect());
