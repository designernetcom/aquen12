import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  HeartPulse,
  Hotel,
  Landmark,
  Layers3,
  PanelsTopLeft,
  Pill,
  Recycle,
  RotateCcw,
  Settings2,
  ShieldCheck,
  Shirt,
  SlidersHorizontal,
  Snowflake,
  Utensils,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";

import styles from "./ultrafiltration-system.module.css";

type TableRow = readonly string[];

const capacityCards = [
  ["2 m³/hr", "32 m³/day*", "1 module approx."],
  ["5 m³/hr", "80 m³/day*", "2 modules approx."],
  ["8 m³/hr", "128 m³/day*", "3 modules approx."],
  ["10 m³/hr", "160 m³/day", "4 modules approx."],
  ["15 m³/hr", "240 m³/day", "6 modules approx."],
  ["20 m³/hr", "320 m³/day", "8 modules approx."],
] as const;

const technicalRows: TableRow[] = [
  ["Design flow", "m³/hr", "2", "5", "8", "10", "15", "20"],
  ["Operation hours", "Hrs", "16", "5*", "8*", "16", "16", "16"],
  ["Total daily flow", "m³/day", "32", "80*", "128*", "160", "240", "320"],
  ["Recovery (filtrate)", "%", "92", "92", "92", "92", "92", "92"],
  ["Filtrate flow", "m³/hr", "1.84", "4.6", "7.36", "9.2", "13.8", "18.4"],
  ["Reject flow", "m³/hr", "0.16", "0.4", "0.64", "0.8", "1.2", "1.6"],
  ["Membrane type", "—", "PVDF Hollow Fiber UF (0.01–0.1 µm)", "PVDF Hollow Fiber UF (0.01–0.1 µm)", "PVDF Hollow Fiber UF (0.01–0.1 µm)", "PVDF Hollow Fiber UF (0.01–0.1 µm)", "PVDF Hollow Fiber UF (0.01–0.1 µm)", "PVDF Hollow Fiber UF (0.01–0.1 µm)"],
  ["Pore size", "µm", "0.01–0.1", "0.01–0.1", "0.01–0.1", "0.01–0.1", "0.01–0.1", "0.01–0.1"],
  ["Design flux", "LMH", "60–80", "60–80", "60–80", "60–80", "60–80", "60–80"],
  ["No. of modules (approx.)", "Nos.", "1", "2", "3", "4", "6", "8"],
  ["Membrane area (approx.)", "m²", "60", "120", "180", "240", "360", "480"],
  ["Feed pump capacity", "m³/hr @ m", "2.5 @ 20", "5 @ 20", "8.5 @ 20", "11 @ 20", "16 @ 20", "22 @ 20"],
  ["Backwash pump", "m³/hr @ m", "5 @ 20", "8 @ 20", "12 @ 20", "15 @ 20", "20 @ 20", "25 @ 20"],
  ["CIP pump", "m³/hr @ m", "3 @ 20", "5 @ 20", "5 @ 20", "7 @ 20", "8 @ 20", "8 @ 20"],
  ["Connected load (approx.)", "kW", "5", "8", "10", "12", "18", "20"],
  ["Required area (approx.)", "m²", "8–10", "10–15", "15–20", "18–25", "25–35", "35–50"],
];

const qualityRows: TableRow[] = [
  ["Turbidity", "NTU", "5–50", "< 0.1"],
  ["TSS", "mg/L", "10–100", "< 1"],
  ["COD", "mg/L", "< 100", "< 10"],
  ["BOD", "mg/L", "< 50", "< 5"],
  ["Oil & Grease", "mg/L", "< 10", "< 1"],
  ["SDI (15 min)", "—", "< 5", "< 2"],
  ["pH", "—", "6.0–9.0", "6.0–9.0"],
  ["Total Coliform", "MPN/100 mL", "10–10⁴", "< 10⁴ — confirm source value"],
];

const mocRows: TableRow[] = [
  ["UF membrane housing", "UPVC / UPVC-PVDF / SS-304"],
  ["Process piping (feed/filtrate/backwash)", "UPVC / SS-304 (Standard)"],
  ["Valves", "UPVC / SS-304 (Optional)"],
  ["Pumps (feed/backwash/CIP)", "CI / SS-304 (as per duty)"],
  ["Skid", "MS Epoxy Painted / SS-304 (Optional)"],
  ["Cartridge filter housing", "UPVC / SS-304"],
  ["Instrumentation", "Pressure gauge, flow meter, turbidity meter, level switches, etc."],
  ["Control panel", "MCC with PLC (Standard)"],
];

const bomRows: TableRow[] = [
  ["1", "Feed Pump", "11 m³/hr @ 20 m, SS-304", "1 No."],
  ["2", "Cartridge Filter Housing", "5 µm, UPVC / SS-304", "1 No."],
  ["3", "UF Membrane Modules", "PVDF, 60 m²/module", "4 Nos."],
  ["4", "Membrane Housing", "UPVC", "4 Nos."],
  ["5", "Backwash Pump", "15 m³/hr @ 20 m", "1 No."],
  ["6", "CIP Pump", "5 m³/hr @ 20 m", "1 No."],
  ["7", "Piping & Valves", "UPVC, SS-304", "1 Set"],
  ["8", "Instrumentation", "PG, FM, turbidity meter, etc.", "1 Set"],
  ["9", "Skid", "MS Epoxy / SS-304", "1 Set"],
  ["10", "Control Panel", "MCC with PLC", "1 Set"],
];

const features = [
  ["Fine separation", "Pore size listed as 0.01–0.1 µm in the brochure.", Waves],
  ["Automatic cleaning", "Automatic backwash and CIP are listed features.", RotateCcw],
  ["PLC-based control", "MCC with PLC control panel as a standard catalogue item.", Settings2],
  ["Compact skid", "Skid-mounted and containerized configurations can be considered.", PanelsTopLeft],
  ["Flexible capacity", "Nominal brochure range from 2 to 20 m³/hr.", SlidersHorizontal],
  ["Project-specific MOC", "SS / MS skid and piping options depend on the approved design.", ShieldCheck],
  ["Lower chemical use", "Low chemical consumption is a brochure-listed design intent, not a guarantee.", FlaskConical],
  ["Easy operation", "Operation and maintenance arrangements are selected for the application.", Wrench],
] as const;

const applications = [
  ["Residential Societies", Building2],
  ["Commercial Buildings", Landmark],
  ["Hospitals & Healthcare", HeartPulse],
  ["Hotels & Resorts", Hotel],
  ["Food & Beverage Industry", Utensils],
  ["Pharmaceutical Industry", Pill],
  ["Textile Industry", Shirt],
  ["Cooling Tower", Snowflake],
  ["Power Plants", Zap],
  ["Industrial Water", Factory],
  ["Municipal Water Treatment", Landmark],
  ["RO Feed Pretreatment", Layers3],
  ["Wastewater Reuse & Recycling", Recycle],
] as const;

const optionalItems = [
  "MGF / ACF Pre-Treatment",
  "Chemical Dosing System (CIP)",
  "CIP Tank with Heater (Optional)",
  "Treated Water Storage Tank (UF)",
  "Online Turbidity Meter (Tank/UF)",
  "SS-304 Skid & Piping",
  "Containerized Package",
];

const faqs = [
  ["What is an Ultrafiltration System?", "UF passes water through a fine membrane. Suspended solids and many microorganisms can be retained depending on membrane properties, integrity, pretreatment and operating conditions; the permeate is collected for the next suitable use or treatment stage."],
  ["What is the difference between UF and RO?", "UF is a lower-pressure membrane process primarily used for suspended solids, colloids and selected microorganism retention. RO is a different pressure-driven process used for dissolved salts and selected dissolved constituents. A final design may use both."],
  ["What UF capacities are available?", "The brochure lists nominal design flows of 2, 5, 8, 10, 15 and 20 m³/hr. Final capacity and daily production require review of feed quality, operating hours and the approved engineering design."],
  ["What is the purpose of PVDF hollow-fiber membranes?", "PVDF is the brochure-listed membrane material for a hollow-fiber UF module. Its suitability, flux, cleaning compatibility and service life must be confirmed for the selected module and feed water."],
  ["What does the pore-size range mean?", "The brochure lists 0.01–0.1 µm. Exact effective separation depends on membrane construction, test method, integrity and operating conditions, so the specification should be technically verified before publication."],
  ["What are MGF and ACF?", "MGF means Multi Grade Filter and ACF means Activated Carbon Filter. They are shown as optional pretreatment stages in the process arrangement and are selected when the feed analysis requires them."],
  ["Why is a cartridge filter used before UF?", "The 5 µm cartridge filter shown in the brochure is a protective prefiltration stage intended to reduce larger particles reaching the UF skid."],
  ["What is backwashing?", "Backwashing reverses or changes the normal flow arrangement to remove retained solids from the membrane system. Frequency, duration and sequence depend on the selected equipment and operating manual."],
  ["What is CIP?", "CIP means cleaning in place. The system can use a cleaning arrangement selected for the membrane and feed conditions; chemical concentration, temperature and cycle sequence must come from the approved manual."],
  ["What affects UF filtration performance?", "Feed-water quality, pretreatment, membrane type, membrane integrity, temperature, flux, recovery, controls, backwash and cleaning practice all affect performance."],
  ["How can I request a quotation?", "Use the existing AQUEN enquiry form and share the required capacity, source water, application and any feed-water analysis. AQUEN can then review the suitable configuration and quotation scope."],
] as const;

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className={styles.sectionHeading}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function DataTable({ headers, rows, compact = false, label }: { headers: string[]; rows: TableRow[]; compact?: boolean; label: string }) {
  return (
    <div className={`${styles.tableWrap} ${compact ? styles.compactTable : ""}`}>
      <table aria-label={label}>
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MembraneIllustration() {
  return (
    <svg className={styles.membraneSvg} viewBox="0 0 520 340" role="img" aria-label="Concept illustration of PVDF hollow-fiber ultrafiltration membranes">
      <defs>
        <linearGradient id="membraneShell" x1="0" x2="1">
          <stop offset="0" stopColor="#dff9ff" />
          <stop offset="1" stopColor="#8ed5e5" />
        </linearGradient>
        <linearGradient id="membraneFiber" x1="0" x2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#b4f1f7" />
        </linearGradient>
      </defs>
      <rect x="48" y="44" width="424" height="252" rx="28" fill="url(#membraneShell)" opacity=".26" stroke="#8ce9f5" strokeWidth="2" />
      <path d="M74 100h372M74 148h372M74 196h372M74 244h372" stroke="#8ce9f5" strokeWidth="2" opacity=".46" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <g key={item} transform={`translate(${83 + item * 43} 77)`}>
          <rect width="18" height="185" rx="9" fill="url(#membraneFiber)" stroke="#70cbd8" strokeWidth="2" />
          <path d="M6 9v167M12 9v167" stroke="#68bfcf" strokeWidth="1" opacity=".9" />
        </g>
      ))}
      <path d="M25 170h36M459 170h36" stroke="#83e5f2" strokeWidth="5" strokeLinecap="round" />
      <circle cx="20" cy="170" r="7" fill="#57d9ea" />
      <circle cx="500" cy="170" r="7" fill="#57d9ea" />
      <text x="22" y="142" fill="#baf6fb" fontSize="12" fontWeight="700">feed</text>
      <text x="434" y="142" fill="#baf6fb" fontSize="12" fontWeight="700">permeate</text>
    </svg>
  );
}

function ProcessDiagram() {
  const nodes = [
    ["Raw Water", "feed source"],
    ["Feed Tank", "equalisation"],
    ["Feed Pump", "transfer"],
    ["MGF", "optional"],
    ["ACF", "optional"],
    ["Cartridge Filter", "5 µm"],
    ["UF Skid", "PVDF membranes"],
    ["Filtrate Tank", "treated water"],
    ["Reuse / Further", "treatment"],
  ];
  return (
    <div className={styles.diagramScroller}>
      <svg className={styles.processSvg} viewBox="0 0 1340 390" role="img" aria-label="Ultrafiltration process flow from raw water to reuse or further treatment">
        <defs>
          <marker id="ufArrow" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#79e7f4" /></marker>
          <marker id="ufArrowDark" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#8ab9c8" /></marker>
        </defs>
        <rect x="10" y="22" width="1320" height="198" rx="24" fill="rgba(0, 17, 48, .35)" stroke="rgba(149, 233, 244, .24)" />
        {nodes.map(([title, detail], index) => {
          const x = 25 + index * 144;
          return (
            <g key={title}>
              <rect x={x} y="69" width="118" height="104" rx="16" fill={index === 6 ? "#0c7895" : "rgba(255,255,255,.09)"} stroke={index === 6 ? "#8deaf4" : "rgba(157,235,248,.34)"} strokeWidth="1.4" />
              <text x={x + 12} y="95" fill="#82eaf4" fontSize="10" fontWeight="800" letterSpacing="1.2">{String(index + 1).padStart(2, "0")}</text>
              <text x={x + 12} y="123" fill="#ffffff" fontSize="14" fontWeight="800">{title}</text>
              <text x={x + 12} y="146" fill="#c4e8ef" fontSize="11">{detail}</text>
              {index < nodes.length - 1 ? <path d={`M${x + 118} 121h22`} stroke="#79e7f4" strokeWidth="2" markerEnd="url(#ufArrow)" /> : null}
            </g>
          );
        })}
        <path d="M955 181v38M955 219H860v45" fill="none" stroke="#8ab9c8" strokeWidth="2" strokeDasharray="6 5" markerEnd="url(#ufArrowDark)" />
        <path d="M1028 181v38M1028 219h160v45" fill="none" stroke="#8ab9c8" strokeWidth="2" strokeDasharray="6 5" markerEnd="url(#ufArrowDark)" />
        <rect x="786" y="266" width="150" height="70" rx="14" fill="rgba(255,255,255,.06)" stroke="rgba(157,235,248,.28)" />
        <text x="803" y="292" fill="#b8f4fc" fontSize="12" fontWeight="800">Backwash / CIP</text>
        <text x="803" y="313" fill="#c4e8ef" fontSize="11">cleaning line</text>
        <rect x="1118" y="266" width="140" height="70" rx="14" fill="rgba(255,255,255,.06)" stroke="rgba(157,235,248,.28)" />
        <text x="1140" y="292" fill="#b8f4fc" fontSize="12" fontWeight="800">Drain</text>
        <text x="1140" y="313" fill="#c4e8ef" fontSize="11">connection</text>
      </svg>
    </div>
  );
}

export default function UltrafiltrationSystemContent() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span>Solutions</span>
              <ChevronRight size={14} aria-hidden="true" />
              <strong>Ultrafiltration (UF) System</strong>
            </nav>

            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>AQUEN SOLUTION SYSTEM · MEMBRANE FILTRATION</span>
                <h1>Ultrafiltration <em>(UF) System</em></h1>
                <h2>Cleaner Water, Brighter Tomorrow.</h2>
                <p>
                  AQUEN UF systems use fine membrane filtration to reduce suspended solids, turbidity and selected microorganisms for suitable water and wastewater applications. The plant is configured around the feed-water analysis, required quality and approved project design.
                </p>
                <div className={styles.heroActions}>
                  <Link className={styles.primaryButton} href="/contact#contact-form">Request a Quote <ArrowRight size={17} /></Link>
                  <Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link>
                </div>
                <div className={styles.heroMetrics}>
                  <div><strong>2–20 m³/hr</strong><span>brochure capacity range</span></div>
                  <div><strong>0.01–0.1 µm</strong><span>brochure pore-size range</span></div>
                  <div><strong>16 hours</strong><span>catalogue heading · verify model data</span></div>
                </div>
                <p className={styles.heroNote}>Catalogue claims and indicative values are subject to feed-water quality, membrane integrity, operating conditions and final manufacturer verification.</p>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroVisualFrame}>
                  <Image src="/reverseosmosis.png" alt="Representative skid-mounted membrane treatment plant reference image" fill priority sizes="(max-width: 850px) 100vw, 52vw" />
                </div>
                <div className={styles.heroBadge}><BadgeCheck size={16} /><span>Membrane plant reference</span></div>
                <div className={styles.heroCaption}><span>UF design</span><strong>compact · modular</strong><span>Image status</span><strong>UF photo to confirm</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading eyebrow="01 · UF technology" title="Fine membrane filtration, designed around the water">
              Water passes through a membrane with fine pores. Permeate passes through the membrane while suspended solids and many microorganisms can be retained, depending on the membrane, integrity and operating conditions. Retained material is managed through the applicable backwash and cleaning process.
            </SectionHeading>
            <div className={styles.explainerGrid}>
              <article className={styles.explainerCard}><div className={styles.cardIcon}><Waves size={20} /></div><span>01 / Membrane separation</span><h3>Fine pores separate the feed</h3><p>UF uses a pressure-driven membrane barrier. It is not a universal dissolved-salt or all-chemical removal process.</p></article>
              <article className={styles.explainerCard}><div className={styles.cardIcon}><Droplets size={20} /></div><span>02 / Permeate stream</span><h3>Treated water moves forward</h3><p>Permeate can be used as pretreatment or as part of a wider treatment train, subject to the required water quality.</p></article>
              <article className={styles.explainerCard}><div className={styles.cardIcon}><RotateCcw size={20} /></div><span>03 / Cleaning & recovery</span><h3>Backwash and CIP protect performance</h3><p>Cleaning arrangements depend on the selected membrane system, feed water and operating conditions. Follow the final operating manual.</p></article>
            </div>
            <div className={styles.cautionNote}><CircleAlert size={19} /><div><strong>Performance qualification</strong><span>UF performance depends on membrane type, feed-water quality, pretreatment, integrity, flux, recovery, operating conditions and cleaning. UF alone should not be presented as a guarantee of dissolved-salt removal, disinfection or potable-water compliance.</span></div></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="capacities">
          <div className={styles.container}>
            <SectionHeading eyebrow="02 · Capacity range" title="Nominal plant capacities from 2 to 20 m³/hr">
              The brochure lists six design-flow selections. Daily production is shown for catalogue comparison and must be checked against the final operating-hours schedule and approved engineering design.
            </SectionHeading>
            <div className={styles.capacityGrid}>
              {capacityCards.map(([capacity, daily, modules], index) => <article className={`${styles.capacityCard} ${index === 3 ? styles.capacityFeatured : ""}`} key={capacity}><div className={styles.capacityTop}><span>UF / {String(index + 1).padStart(2, "0")}</span><Gauge size={16} /></div><h3>{capacity}</h3><strong>{daily}</strong><span>{modules}</span><div className={styles.capacityRule} /><p>Skid-mounted or containerized options can be considered.</p></article>)}
            </div>
            <p className={styles.tableFootnote}>* The 5 m³/hr and 8 m³/hr operation-hour and daily-flow entries conflict with the general 16-hour catalogue heading. Confirm before publication.</p>
          </div>
        </section>

        <section className={styles.section} id="process-flow">
          <div className={styles.container}>
            <SectionHeading eyebrow="03 · Process flow" title="A flexible UF treatment train">
              The process arrangement below follows the brochure. MGF and ACF are optional; the 5 µm cartridge filter, UF skid, backwash/CIP line and drain connection remain labelled as shown in the source material.
            </SectionHeading>
            <div className={styles.flowBoard}><ProcessDiagram /><div className={styles.flowLegend}><span><Droplets size={15} /> Filtrate → treated water</span><span><RotateCcw size={15} /> Backwash / CIP → cleaning arrangement</span><span><CircleAlert size={15} /> Final sequence → manufacturer manual</span></div></div>
            <p className={styles.darkNote}>MGF = Multi Grade Filter · ACF = Activated Carbon Filter · UF = Ultrafiltration · PVDF = Polyvinylidene Fluoride.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`} id="membrane">
          <div className={styles.container}>
            <div className={styles.membraneGrid}>
              <div><span className={styles.eyebrow}>04 · Membrane module</span><h2>PVDF hollow-fiber UF membranes</h2><p className={styles.darkLead}>The brochure lists high-strength PVDF hollow-fiber membranes with a pore-size range of 0.01–0.1 µm. Backwash and chemical cleaning are part of the listed arrangement.</p><div className={styles.membranePoints}><span><Check size={16} />High flux and long life — brochure claim</span><span><Check size={16} />Backwash and chemical cleaning</span><span><Check size={16} />TSS, colloids and turbidity — brochure claim</span><span><Check size={16} />Microorganism performance requires technical verification</span></div></div>
              <div className={styles.membraneVisual}><MembraneIllustration /><span>Concept illustration · not a manufacturer model drawing</span></div>
            </div>
            <div className={styles.sourceBannerDark}><CircleAlert size={19} /><div><strong>Technical verification required</strong><span>Confirm the exact pore-size specification, microorganism-removal performance, membrane manufacturer/model, area, flux, pressure and cleaning compatibility before treating these as final design values.</span></div></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="features-applications">
          <div className={styles.container}>
            <SectionHeading eyebrow="05 · Features & applications" title="A configurable system for varied water applications">
              The following features and industries are taken from the brochure. Suitability depends on feed-water analysis, required water quality, pretreatment, downstream treatment and process design.
            </SectionHeading>
            <div className={styles.featureGrid}>{features.map(([title, text, Icon]) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
            <div className={styles.applicationBlock}><div><span className={styles.miniEyebrow}>Application map</span><h3>Where UF may fit</h3><p>UF can be considered for water and wastewater applications where the target quality and treatment train support it.</p></div><div className={styles.applicationList}>{applications.map(([label, Icon]) => <span key={label}><Icon size={16} />{label}</span>)}</div></div>
          </div>
        </section>

        <section className={styles.section} id="technical-specifications">
          <div className={styles.container}>
            <SectionHeading eyebrow="06 · Catalogue data" title="TECHNICAL SPECIFICATIONS — UF SYSTEM (OPERATION HOURS: 16 HRS)">
              Source values are preserved for engineering review. The brochure&apos;s table contains conflicts and compact approximations; final flow, hours, membrane data, pumps, load, area and performance require AQUEN/manufacturer confirmation.
            </SectionHeading>
            <div className={styles.sourceBanner}><CircleAlert size={19} /><div><strong>Do not publish as final without confirmation</strong><span>5 m³/hr and 8 m³/hr appear as 5 and 8 operating hours despite the 16-hour heading. Their daily-flow values are preserved as 80 and 128 m³/day and marked with an asterisk.</span></div></div>
            <DataTable label="Technical specifications for UF system" headers={["Parameter", "Unit", "2 m³/hr", "5 m³/hr", "8 m³/hr", "10 m³/hr", "15 m³/hr", "20 m³/hr"]} rows={technicalRows} />
            <p className={styles.tableFootnote}>All other technical fields, including design flux, module count, membrane area, pump capacities, connected load and required area, are indicative brochure transcriptions and require confirmation against the final design.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="quality-data">
          <div className={styles.container}>
            <SectionHeading eyebrow="07 · Water quality" title="TYPICAL INLET & OUTLET PARAMETERS">
              These are typical brochure values and can be customized as per project requirements. Actual performance depends on feed-water quality, membrane integrity, operation, pretreatment and cleaning.
            </SectionHeading>
            <DataTable label="Typical inlet and outlet parameters" headers={["Parameter", "Unit", "Inlet (typical)", "Outlet (UF filtrate)"]} rows={qualityRows} compact />
            <div className={styles.inlineWarning}><CircleAlert size={18} /><span>The total-coliform outlet value is difficult to interpret in the supplied source and is shown as “&lt; 10⁴ — confirm source value”. Do not publish it as a confirmed microbiological performance claim.</span></div>
          </div>
        </section>

        <section className={styles.section} id="materials-bom">
          <div className={styles.container}>
            <SectionHeading eyebrow="08 · Construction & supply" title="Material options and a typical 10 m³/hr BOM">
              The compact slash-separated descriptions below are preserved from the brochure. They describe possible configurations, not a promise that every material or component is available for every model.
            </SectionHeading>
            <div className={styles.twoTableGrid}><div><h3 className={styles.tableTitle}>Material of construction</h3><DataTable label="UF material of construction" headers={["Item", "Material / specification"]} rows={mocRows} compact /></div><div><h3 className={styles.tableTitle}>TYPICAL BOQ / BILL OF MATERIAL (BOM) — 10 m³/hr UF PLANT</h3><DataTable label="Typical bill of materials for 10 cubic metre per hour UF plant" headers={["No.", "Description", "Specification / size", "Quantity"]} rows={bomRows} compact /></div></div>
            <p className={styles.tableFootnote}>BOM row alignment and the exact included scope must be checked against the original high-resolution brochure and official engineering BOM before publication or quotation.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="gallery">
          <div className={styles.container}>
            <SectionHeading eyebrow="09 · Installation gallery" title="UF plant installation references">
              Captions follow the requested brochure labels. Existing project image assets are used here as installation references; UF-specific source photography should be confirmed before presenting these as verified UF installations.
            </SectionHeading>
            <div className={styles.galleryGrid}>
              {[
                ["/installation-img1.png", "UF Plant — 5 m³/hr", "Installation in Progress"],
                ["/installation-img2.png", "UF Plant — 10 m³/hr", "Complete Installation"],
                ["/installation-img3.png", "UF Plant — 15 m³/hr", "Industrial Application"],
                ["/reverseosmosis.png", "UF Plant — 20 m³/hr", "Skid Mounted"],
              ].map(([src, title, detail]) => <figure className={styles.galleryCard} key={title}><div className={styles.galleryImage}><Image src={src} alt={`${title} installation reference`} fill sizes="(max-width: 700px) 100vw, 25vw" /></div><figcaption><span>AQUEN installation reference</span><strong>{title}</strong><small>{detail}</small></figcaption></figure>)}
            </div>
          </div>
        </section>

        <section className={styles.section} id="optional-items">
          <div className={styles.container}>
            <SectionHeading eyebrow="10 · Optional equipment" title="Add only what the application needs">
              These items are listed as optional or application-specific in the brochure. The quotation should identify what is standard, optional, excluded or dependent on the feed-water analysis.
            </SectionHeading>
            <div className={styles.optionalGrid}>{optionalItems.map((item, index) => <div className={styles.optionalCard} key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><small>Confirm scope in quotation</small></div>)}</div>
            <div className={styles.operatingCard}><div className={styles.operatingIcon}><Wrench size={21} /></div><div><h3>Operating conditions and cleaning</h3><p>The catalogue heading specifies 16 operating hours and lists automatic backwash and CIP. It does not provide a validated backwash frequency, cleaning duration, chemical concentration, temperature, sequence, pressure or membrane replacement interval. Use the manufacturer&apos;s operating manual for final instructions.</p></div></div>
          </div>
        </section>

        <section className={styles.faqSection} id="faq">
          <div className={styles.container}>
            <SectionHeading eyebrow="11 · Frequently asked questions" title="UF system questions, answered clearly" />
            <div className={styles.faqList}>{faqs.map(([question, answer]) => <details className={styles.faqItem} key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className={styles.ctaSection} id="quote">
          <div className={styles.container}>
            <div className={styles.ctaGrid}><div><span className={styles.eyebrow}>12 · Design, manufacturing, supply, installation, commissioning & AMC</span><h2>Let’s size the right UF system for your water.</h2><p>Share your capacity, operating hours, feed-water source, application and analysis availability. The existing AQUEN enquiry workflow can then take the project discussion forward.</p><div className={styles.ctaChecklist}><span><Check size={16} />Required UF capacity in m³/hr</span><span><Check size={16} />Feed-water source and analysis</span><span><Check size={16} />Application and reuse target</span><span><Check size={16} />City, state and contact details</span></div></div><div className={styles.ctaCard}><span>Request a quotation</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water & Wastewater Treatment Solutions</p><div className={styles.quoteFields}><span>Name · Company</span><span>Email · Phone</span><span>Capacity · Application</span><span>Water analysis · Message</span></div><Link className={styles.ctaButton} href="/contact#contact-form">Open enquiry form <ArrowRight size={16} /></Link><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={15} /></a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={15} /></a></div></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
