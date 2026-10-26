import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Check,
  CircleAlert,
  CircleDot,
  Droplets,
  Factory,
  Gauge,
  GitBranch,
  Layers3,
  MoveDown,
  Network,
  PackageCheck,
  RefreshCw,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import Footer from "@/app/layouts/footer";
import Header from "@/app/layouts/header";

import base from "./ultrafiltration-system/ultrafiltration-system.module.css";
import local from "./water-components.module.css";

export type WaterComponentKind = "frp" | "mpv" | "distribution";
type TableRow = readonly string[];

const frpRows: TableRow[] = [
  ["AQU-FRP-08", "8 x 44", "203", "1,118", "1,250", "20", "2.5\"", "2.5\"", "Standard", "10", "15"],
  ["AQU-FRP-12", "12 x 48", "305", "1,219", "1,360", "50", "2.5\"", "2.5\"", "Standard", "10", "15"],
  ["AQU-FRP-13", "13 x 54", "330", "1,372", "1,520", "75", "2.5\"", "2.5\"", "Standard", "10", "15"],
  ["AQU-FRP-14", "14 x 65", "356", "1,651", "1,810", "100", "2.5\"", "2.5\"", "Standard", "10", "15"],
  ["AQU-FRP-16", "16 x 65", "406", "1,651", "1,820", "140", "2.5\"", "2.5\"", "Standard", "10", "15"],
  ["AQU-FRP-18", "18 x 65", "457", "1,651", "1,830", "190", "2.5\" / 4\"", "2.5\" / 4\"", "Standard", "10", "15"],
  ["AQU-FRP-21", "21 x 62", "533", "1,575", "1,760", "250", "4\"", "4\"", "Tripod", "10", "15"],
  ["AQU-FRP-24", "24 x 72", "610", "1,829", "2,030", "370", "4\"", "4\"", "Tripod", "10", "15"],
  ["AQU-FRP-30", "30 x 72", "762", "1,829", "2,050", "675", "4\"", "4\"", "Tripod", "10", "15"],
  ["AQU-FRP-36", "36 x 72", "914", "1,829", "2,100", "825", "4\"", "4\"", "Tripod", "10", "15"],
  ["AQU-FRP-42", "42 x 72", "1,067", "1,829", "2,130", "1,200", "6\"", "6\"", "Tripod", "10", "15"],
  ["AQU-FRP-48", "48 x 72", "1,219", "1,829", "2,200", "1,600", "6\"", "6\"", "Tripod", "10", "15"],
  ["AQU-FRP-54", "54 x 72", "1,372", "1,829", "2,250", "2,050", "6\"", "6\"", "Tripod", "10", "15"],
  ["AQU-FRP-60", "60 x 86", "1,524", "2,007", "2,450", "2,700", "6\"", "6\"", "Tripod", "10", "15"],
  ["AQU-FRP-63", "63 x 86", "1,600", "2,187", "2,630", "3,200", "6\"", "6\"", "Tripod", "10", "15"],
];

const frpTechnicalRows: TableRow[] = [
  ["Material", "FRP (Fiberglass Reinforced Plastic)"],
  ["Inner Liner", "Food grade polyethylene (PE)"],
  ["Outer Layer", "UV resistant FRP"],
  ["Design Pressure", "10 bar"],
  ["Max. Operating System Pressure", "10 bar"],
  ["Test Pressure", "15 bar"],
  ["Operating Temperature", "1–50 °C"],
  ["Color", "Blue (Standard)"],
  ["Top Opening", "2.5\" / 4\" / 6\" (as per size)"],
  ["Bottom Opening", "2.5\" / 4\" / 6\" (as per size)"],
  ["Base Type", "Standard / Tripod (3 Leg)"],
  ["Stand Type", "Tripod (3 Leg)"],
];

const mpvTopRows: TableRow[] = [
  ["20 NB (¾\")", "AFT-MT-20", "Filter / Softener", "¾\"", "2.5", "5", "7", "7", "5–50"],
  ["25 NB (1\")", "AFT-MT-25", "Filter / Softener", "1\"", "4.0", "5", "7", "7", "5–50"],
  ["40 NB (1½\")", "AFT-MT-40", "Filter / Softener", "1½\"", "10.0", "5", "7", "7", "5–50"],
];

const mpvSideRows: TableRow[] = [
  ["25 NB (1\")", "AFT-SM-25", "Filter / Softener", "1\"", "4.0", "5", "7", "7", "5–50"],
  ["40 NB (1½\")", "AFT-SM-40", "Filter / Softener", "1½\"", "10.0", "5", "7", "7", "5–50"],
  ["50 NB (2\")", "AFT-SM-50", "Filter / Softener", "2\"", "15.0", "5", "7", "7", "5–50"],
  ["65 NB (2½\")", "AFT-SM-65", "Filter / Softener", "2½\"", "25.0", "5", "7", "7", "5–50"],
];

const mpvMaterialRows: TableRow[] = [
  ["Valve Body", "High quality Engineering Plastic (ABS / PP / Nylon)"],
  ["Internal Parts (Spool, Seal, Piston)", "ABS / PP / Nylon"],
  ["O-Ring & Seals", "EPDM (Standard), Viton (Optional)"],
  ["Handle", "ABS / Nylon"],
  ["Fasteners", "SS-304"],
  ["Gaskets", "EPDM"],
  ["Connector (Top Mount)", "ABS / Nylon (Threaded)"],
  ["Flange (Side Mount)", "ABS / Nylon with SS-304 bolts"],
  ["Base / Riser", "Suitable for FRP / MS vessels"],
];

const distributionRows: TableRow[] = [
  ["8 x 44", "203", "1\"", "4", "75", "1\"", "6", "75", "0.25–0.35", "25", "UPVC (SCH-80)", "20 NB", "20 NB"],
  ["12 x 48", "305", "1\"", "6", "100", "1\"", "6", "100", "0.25–0.35", "25", "UPVC (SCH-80)", "20 NB", "20 NB"],
  ["13 x 54", "330", "1\"", "6", "125", "1\"", "6", "125", "0.25–0.35", "25", "UPVC (SCH-80)", "20 NB", "20 NB"],
  ["14 x 65", "356", "1\"", "8", "150", "1\"", "8", "150", "0.30–0.40", "25", "UPVC (SCH-80)", "20 NB", "20 NB"],
  ["16 x 65", "406", "1½\"", "8", "175", "1½\"", "8", "175", "0.30–0.40", "32", "UPVC (SCH-80)", "25 NB", "25 NB"],
  ["18 x 65", "457", "1½\"", "10", "200", "1½\"", "10", "200", "0.30–0.40", "32", "UPVC (SCH-80)", "25 NB", "25 NB"],
  ["21 x 62", "533", "1½\"", "12", "225", "1½\"", "12", "225", "0.30–0.40", "32", "UPVC (SCH-80)", "25 NB", "25 NB"],
  ["24 x 72", "610", "2\"", "12", "250", "2\"", "12", "250", "0.30–0.40", "40", "UPVC (SCH-80)", "40 NB", "40 NB"],
  ["30 x 72", "762", "2½\"", "16", "300", "2½\"", "16", "300", "0.40–0.50", "50", "UPVC (SCH-80)", "50 NB", "50 NB"],
  ["36 x 72", "914", "2½\"", "16", "350", "2½\"", "16", "350", "0.40–0.50", "50", "UPVC (SCH-80)", "50 NB", "50 NB"],
  ["42 x 72", "1,067", "3\"", "20", "400", "3\"", "20", "400", "0.40–0.50", "63", "UPVC (SCH-80)", "50 NB", "50 NB"],
  ["48 x 72", "1,219", "3\"", "24", "450", "3\"", "24", "450", "0.40–0.50", "63", "UPVC (SCH-80)", "65 NB", "65 NB"],
  ["54 x 72", "1,372", "3\"", "28", "500", "3\"", "28", "500", "0.40–0.50", "63", "UPVC (SCH-80)", "65 NB", "65 NB"],
  ["60 x 86", "1,524", "3\"", "32", "550", "3\"", "32", "550", "0.40–0.50", "63", "UPVC (SCH-80)", "65 NB", "65 NB"],
  ["63 x 86", "1,600", "3\"", "32", "600", "3\"", "32", "600", "0.40–0.50", "63", "UPVC (SCH-80)", "65 NB", "65 NB"],
];

const distributionTechnicalRows: TableRow[] = [
  ["Material", "UPVC (SCH-80), Corrosion Resistant"],
  ["Slot Type", "Lateral (0.25–0.50 mm)"],
  ["Operating Temperature", "0–50 °C"],
  ["Max. Operating Pressure", "5 bar"],
  ["Test Pressure", "7 bar"],
  ["Media", "Sand, Gravel, Activated Carbon, Resin etc."],
  ["Application", "MGF, ACF, Softener, Iron Removal, DM Plant and other filtration systems"],
];

const distributions = [
  ["Top Distributor", "Top distribution for service flow and backwash", CircleDot],
  ["Hub & Lateral", "Bottom collection and distribution arrangement", Network],
  ["Slotted Lateral", "Uniform flow collection through slot openings", GitBranch],
] as const;

const applicationTags = [
  "Multi Grade Filter (MGF)",
  "Activated Carbon Filter (ACF)",
  "Water Softener",
  "Iron Removal Plant",
  "Demineralization (DM) Plant",
  "Ultrafiltration (UF) Treatment",
  "Industrial Process Water",
  "RO Pretreatment",
  "Wastewater Treatment",
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={base.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, label, className = "" }: { headers: string[]; rows: TableRow[]; label: string; className?: string }) {
  return <div className={`${base.tableWrap} ${className}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function TagRow({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return <div className={`${local.tagRow} ${dark ? local.darkTagRow : ""}`}>{items.map((item) => <span className={local.tag} key={item}>{item}</span>)}</div>;
}

function Hero({ kind }: { kind: WaterComponentKind }) {
  const copy = {
    frp: {
      title: "FRP",
      accent: "VESSELS",
      subtitle: "For Water & Wastewater Treatment",
      intro: "High-strength FRP pressure vessels with food-grade polyethylene liners for filtration, softening, iron removal, demineralization and other suitable water-treatment systems.",
      image: "/water-softener-15000-lph-frp.png",
      alt: "AQUEN FRP vessel system reference",
      badge: "FRP pressure vessel range",
      caption: ["Range", "8\" x 44\" – 63\" x 86\"", "Pressure", "10 bar operating"],
      metrics: [["8\"–63\"", "vessel diameter range"], ["10 bar", "operating pressure"], ["Food grade", "PE inner liner"]],
      note: "Standard and tripod base options are shown in the supplied FRP vessel data.",
    },
    mpv: {
      title: "MULTI PORT",
      accent: "VALVE",
      subtitle: "Top & Side Mount Options for Filters and Softeners",
      intro: "Multi Port Valves for FRP and MS vessels, with top-mount and side-mount configurations for filtration, softening and related water-treatment cycles.",
      image: "/mgf-15000-lph-frp.png",
      alt: "AQUEN multigrade filter system with multi port valve reference",
      badge: "MPV configuration range",
      caption: ["Mounts", "Top + side mount", "Cycle", "Filter · backwash · rinse"],
      metrics: [["3 + 4", "top and side sizes"], ["5 bar", "max. operating pressure"], ["5–50 °C", "operating temperature"]],
      note: "The product image is an existing MGF reference showing a multi port valve in service.",
    },
    distribution: {
      title: "DISTRIBUTION",
      accent: "SYSTEMS",
      subtitle: "Top & Lateral (Hub & Lateral) for FRP Vessels",
      intro: "UPVC SCH-80 top distributors and hub-and-lateral assemblies designed for uniform water distribution and collection across the supplied FRP vessel size range.",
      image: "/Multigrade.png",
      alt: "AQUEN multi grade filter cross-section showing vessel distribution media and underdrain reference",
      badge: "FRP vessel distribution",
      caption: ["Material", "UPVC SCH-80", "Vessels", "8\" x 44\" – 63\" x 86\""],
      metrics: [["UPVC", "SCH-80 construction"], ["0.25–0.50 mm", "lateral slot width"], ["0–50 °C", "operating temperature"]],
      note: "The existing MGF cross-section is used as a related underdrain/media reference; final assembly is vessel-specific.",
    },
  }[kind];

  return <section className={base.hero}><div className={base.heroGlow} aria-hidden="true" /><div className={base.container}>
    <nav className={base.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">›</span><span>Solutions</span><span aria-hidden="true">›</span><strong>{copy.title} {copy.accent}</strong></nav>
    <div className={base.heroGrid}><div className={base.heroCopy}>
      <span className={base.eyebrow}>AQUEN FLUID TECHNOLOGIES LLP · WATER &amp; WASTEWATER COMPONENTS</span>
      <h1>{copy.title} <em>{copy.accent}</em></h1>
      <h2>{copy.subtitle}</h2>
      <p>{copy.intro}</p>
      <div className={base.heroActions}><Link className={base.primaryButton} href="/contact">Request a Quote <ArrowRight size={17} /></Link><Link className={base.textButton} href="#specifications">View specifications <ArrowRight size={15} /></Link></div>
      <div className={base.heroMetrics}>{copy.metrics.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div>
      <p className={base.heroNote}>{copy.note}</p>
    </div><div className={base.heroVisual}><div className={base.heroVisualFrame}><Image src={copy.image} alt={copy.alt} fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div><div className={base.heroBadge}><BadgeCheck size={16} /><span>{copy.badge}</span></div><div className={base.heroCaption}><span>{copy.caption[0]}</span><strong>{copy.caption[1]}</strong><span>{copy.caption[2]}</span><strong>{copy.caption[3]}</strong></div></div></div>
  </div></section>;
}

function FrpPage() {
  const benefits: [LucideIcon, string, string][] = [
    [ShieldCheck, "High-strength FRP construction", "FRP winding and a UV-resistant outer layer are listed for a durable vessel shell."],
    [Droplets, "Food-grade PE inner liner", "The liner is specified as food-grade polyethylene for suitable water-treatment duties."],
    [Wrench, "Lightweight and easy to install", "The supplied brochure highlights light weight, low maintenance and easy installation."],
    [Gauge, "Wide standard range", "Standard models cover 8\" x 44\" through 63\" x 86\" with standard or tripod bases."],
    [Factory, "Treatment-system compatible", "Suitable applications include MGF, ACF, softener, iron removal, DM and UF systems."],
    [Settings2, "Custom configurations", "Custom sizes and special pressure ratings are available subject to technical confirmation."],
  ];
  return <>
    <section className={base.section} id="overview"><div className={base.container}><SectionHeading eyebrow="01 · PRODUCT OVERVIEW" title="FRP pressure vessels for water &amp; wastewater treatment">AQUEN FRP pressure vessels are supplied with a food-grade PE liner, UV-resistant FRP outer layer and vessel-specific openings and base arrangements. Final selection should follow the required process duty and approved technical data.</SectionHeading><div className={base.explainerGrid}>{[[Layers3, "Vessel construction", "FRP outer winding, food-grade PE liner and a UV-resistant outer layer form the listed construction details."], [Gauge, "Opening & base options", "Top and bottom openings are available in 2.5\", 4\" and 6\" sizes as per the vessel size, with standard or tripod bases."], [ShieldCheck, "Pressure reference", "The supplied data lists 10 bar design and maximum operating pressure with a 15 bar test pressure."]].map(([Icon, title, text]) => { const CardIcon = Icon as LucideIcon; return <article className={base.explainerCard} key={title as string}><span className={base.cardIcon}><CardIcon size={21} /></span><span>FRP COMPONENT</span><h3>{title as string}</h3><p>{text as string}</p></article>; })}</div></div></section>
    <section className={`${base.section} ${base.lightSection}`} id="specifications"><div className={base.container}><SectionHeading eyebrow="02 · STANDARD DIMENSIONS &amp; SPECIFICATIONS" title="Standard FRP Vessel Dimensions, Volume &amp; Specifications (8&quot; x 44&quot; to 63&quot; x 86&quot;)">The model table below preserves the dimensions, openings, base types and pressure values from the supplied FRP vessel artwork. Dimensions are shown in millimetres unless noted.</SectionHeading><div className={local.specCard}><div className={local.specCardHeader}><span>Model range · 15 standard references</span><strong>Nominal size, volume and pressure details</strong></div><DataTable className={local.compactSpec} label="Standard FRP vessel dimensions, volume and specifications" headers={["Model", "Nominal Size (D x H)", "Diameter (mm)", "Straight Shell Height (mm)", "Overall Height (mm)", "Volume (Liters)", "Top Opening", "Bottom Opening", "Base Type", "Max. Operating Pressure (bar)", "Test Pressure (bar)"]} rows={frpRows} /></div><div className={local.twoColumn}><div className={local.panel}><h3>Technical Details</h3><DataTable className={local.compactSpec} label="FRP vessel technical details" headers={["Parameter", "Details"]} rows={frpTechnicalRows} /></div><div className={local.panel}><h3>Vessel construction details</h3><p className={local.panelLead}>The supplied diagram identifies the following construction and connection points around the FRP vessel.</p><ul className={local.bulletList}>{["Top opening: 2.5\" / 4\" / 6\"", "FRP outer: UV resistance", "FRP winding: high strength", "Food-grade PE liner: corrosion resistant", "Bottom opening: 2.5\" / 4\" / 6\"", "FRP tripod stand: 3-leg stand"].map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><TagRow items={["FRP", "Food grade PE", "UV resistant", "Standard / Tripod"]} /></div></div><div className={local.noteBlock}><CircleAlert size={17} /><span>Technical values are reproduced from the supplied artwork. Confirm the selected model, pressure rating, openings and dimensional tolerances against the approved manufacturer data before quotation.</span></div></div></section>
    <section className={base.section} id="benefits"><div className={base.container}><SectionHeading eyebrow="03 · KEY FEATURES &amp; BENEFITS" title="A practical vessel range for filtration and pretreatment">The following features and benefits are listed for the FRP pressure vessel range.</SectionHeading><div className={local.featureGridWide}>{benefits.map(([Icon, title, text]) => <article className={`${base.featureCard} ${local.featureCardTall}`} key={title}><span className={base.featureIcon}><Icon size={20} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className={`${base.section} ${base.darkSection}`} id="applications"><div className={base.container}><SectionHeading eyebrow="04 · APPLICATIONS" title="Applications across water and wastewater treatment">The brochure lists the following treatment applications for the FRP vessel range.</SectionHeading><div className={base.membraneGrid}><div><ul className={local.bulletList}>{["Multi Grade Filter (MGF)", "Activated Carbon Filter (ACF)", "Water Softener", "Iron Removal Plant", "Demineralization (DM) Plant", "Ultrafiltration (UF) Treatment", "Filtration and Adsorption Systems", "Industrial Process Water", "RO Pretreatment", "Wastewater Treatment"].map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></div><div className={local.panel}><h3>Choose the vessel around the process</h3><p className={local.panelLead}>Vessel size, openings, base arrangement, operating pressure, media and valve/distribution system should be checked together for the intended duty.</p><TagRow dark items={applicationTags} /></div></div></div></section>
    <Faq items={[["What size range is shown for the FRP vessels?", "The supplied standard table ranges from 8\" x 44\" to 63\" x 86\" and includes 15 model references."], ["What are the listed pressure values?", "The technical details list 10 bar design pressure, 10 bar maximum operating system pressure and 15 bar test pressure."], ["Are custom FRP vessel sizes available?", "The brochure states that custom sizes and special pressure ratings are available, subject to technical confirmation."]]} />
    <Quote kind="FRP Vessels" />
  </>;
}

function MpvPage() {
  const functions: [LucideIcon, string, string][] = [[Droplets, "Filter (Service)", "Normal filtration or softening service."], [RefreshCw, "Backwash", "Reverse-flow cleaning cycle."], [Waves, "Rinse (Fast Rinse)", "Rinse stage after backwash."], [GitBranch, "Recirculate (Optional)", "Optional recirculation function."], [MoveDown, "Waste", "Direct flow to waste during a selected cycle."], [CircleDot, "Closed", "Valve closed position."]];
  const features = ["Top Mount (20, 25, 40 NB) and Side Mount (25, 40, 50, 65 NB) options", "Suitable for Filters and Softeners", "Rugged, corrosion-resistant construction", "Smooth and easy operation", "Low pressure drop", "Reliable and long service life", "Compatible with FRP and MS vessels", "Easy installation and maintenance", "Available with EPDM / Viton seals", "Suitable for water and wastewater treatment"];
  return <>
    <section className={base.section} id="overview"><div className={base.container}><SectionHeading eyebrow="01 · PRODUCT OVERVIEW" title="Multi Port Valve (MPV) for filters and softeners">The supplied MPV data covers top-mount and side-mount configurations for FRP vessels, with filter and softener applications, manual operating functions and size-specific flow and pressure references.</SectionHeading><div className={local.mountGrid}><article className={local.mountCard}><span>Top Mount MPV</span><h3>For Filters &amp; Softeners</h3><p>Top-mounted valve arrangement for the listed FRP vessel filter and softener configurations.</p><p className={local.mountSize}>20 NB (¾&quot;) · 25 NB (1&quot;) · 40 NB (1½&quot;)</p></article><article className={local.mountCard}><span>Side Mount MPV</span><h3>For Filters &amp; FRP Vessels</h3><p>Side-mounted valve arrangement with four brochure-listed connection sizes.</p><p className={local.mountSize}>25 NB (1\") · 40 NB (1½\") · 50 NB (2\") · 65 NB (2½\")</p></article></div></div></section>
    <section className={`${base.section} ${base.lightSection}`} id="specifications"><div className={base.container}><SectionHeading eyebrow="02 · TECHNICAL SPECIFICATIONS" title="Top mount and side mount MPV specifications">The tables preserve the size, part number, application, flow, pressure and temperature values supplied in the MPV artwork.</SectionHeading><div className={local.specCard}><div className={local.specCardHeader}><span>Top mount MPV</span><strong>20 NB to 40 NB</strong></div><DataTable className={local.compactSpec} label="Top mount multi port valve technical specifications" headers={["Size (Top Mount)", "Part No.", "Application", "Inlet / Outlet Connection (Inch)", "Max. Flow Rate (m³/h)", "Max. Operating Pressure (bar)", "Test Pressure (bar)", "Test Pressure (bar)", "Operating Temperature (°C)"]} rows={mpvTopRows} /></div><div className={local.specCard}><div className={local.specCardHeader}><span>Side mount MPV</span><strong>25 NB to 65 NB</strong></div><DataTable className={local.compactSpec} label="Side mount multi port valve technical specifications" headers={["Size (Side Mount)", "Part No.", "Application", "Inlet / Outlet Connection (Inch)", "Max. Flow Rate (m³/h)", "Max. Operating Pressure (bar)", "Test Pressure (bar)", "Test Pressure (bar)", "Operating Temperature (°C)"]} rows={mpvSideRows} /></div><div className={local.noteBlock}><CircleAlert size={17} /><span>The supplied artwork repeats a “Test Pressure (bar)” column heading in the MPV technical table. Both printed columns are retained here for source fidelity; verify the intended column labels with the approved valve datasheet.</span></div></div></section>
    <section className={`${base.section} ${base.darkSection}`} id="functions"><div className={base.container}><SectionHeading eyebrow="03 · VALVE FUNCTIONS" title="One valve, defined operating positions">The supplied valve-function diagram identifies the following positions. The exact cycle sequence depends on the selected filter or softener arrangement.</SectionHeading><div className={local.functionGrid}>{functions.map(([Icon, title, text]) => <article className={local.functionCard} key={title}><Icon size={21} /><strong>{title}</strong><span>{text}</span></article>)}</div></div></section>
    <section className={base.section} id="construction"><div className={base.container}><SectionHeading eyebrow="04 · MATERIAL OF CONSTRUCTION" title="Materials selected for compatible water-treatment duties">Component materials below are reproduced from the supplied MPV material table.</SectionHeading><div className={local.twoColumn}><div className={local.panel}><DataTable className={local.compactSpec} label="Multi port valve material of construction" headers={["Component", "Material"]} rows={mpvMaterialRows} /></div><div className={local.panel}><h3>Key Features &amp; Benefits</h3><ul className={local.bulletList}>{features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul></div></div></div></section>
    <section className={`${base.section} ${base.lightSection}`} id="applications"><div className={base.container}><SectionHeading eyebrow="05 · APPLICATIONS" title="MPV applications">The supplied brochure lists the following applications for top-mount and side-mount multi port valves.</SectionHeading><div className={local.featureGridWide}>{["Multi Grade Filters (MGF)", "Activated Carbon Filters (ACF)", "Water Softeners", "Iron Removal Plants", "Demineralization (DM) Plants", "Ultrafiltration (UF) Treatment", "Industrial Water Treatment", "RO Pretreatment", "Commercial and Residential Plants"].map((item, index) => { const Icon = [Layers3, Droplets, RefreshCw, ShieldCheck, Activity, Waves, Factory, Gauge, PackageCheck][index] ?? Layers3; return <article className={base.featureCard} key={item}><span className={base.featureIcon}><Icon size={20} /></span><h3>{item}</h3><p>Suitable where the selected valve size, vessel arrangement and operating cycle match the application.</p></article>; })}</div></div></section>
    <Faq items={[["What is the difference between top-mount and side-mount MPV?", "Top-mount and side-mount refer to the valve arrangement on the vessel. The supplied data lists different size ranges and part numbers for each arrangement."], ["What is the listed operating temperature?", "The MPV technical tables list an operating temperature of 5–50 °C for the top-mount and side-mount references."], ["Are EPDM and Viton seals both available?", "EPDM is listed as standard and Viton as optional in the supplied material-of-construction table. Confirm the selected seal material before ordering."]]} />
    <Quote kind="Multi Port Valve" />
  </>;
}

function DistributionPage() {
  const featureItems = ["Uniform distribution of water during service and backwash", "Top distribution and hub lateral system", "Suitable for all FRP vessel sizes (8\" x 44\" to 63\" x 86\")", "Made from high quality UPVC (SCH-80)", "Rugged and corrosion resistant", "Smooth operation with low pressure drop", "Easy installation and maintenance", "Suitable for MGF, ACF, Softener & other filter systems", "Custom designs available as per equipment"];
  return <>
    <section className={base.section} id="overview"><div className={base.container}><SectionHeading eyebrow="01 · PRODUCT OVERVIEW" title="Top distribution and hub &amp; lateral assemblies">The supplied distribution-system artwork shows top distributors, hub-and-lateral assemblies, slotted laterals, elbows and connections for FRP vessels from 8&quot; x 44&quot; to 63&quot; x 86&quot;.</SectionHeading><div className={local.featureGridWide}>{distributions.map(([title, text, Icon]) => <article className={base.featureCard} key={title}><span className={base.featureIcon}><Icon size={20} /></span><h3>{title}</h3><p>{text}</p></article>)}</div><div className={local.flowGrid}><article className={local.flowCard}><span className={local.flowIcon}><MoveDown size={22} /></span><div><h3>Top Distribution System</h3><p>Top distributor with lateral arms for service inlet flow across the media bed.</p></div></article><article className={local.flowCard}><span className={local.flowIcon}><RefreshCw size={22} /></span><div><h3>Hub &amp; Lateral Distribution System</h3><p>Hub lateral assembly for outlet collection and backwash flow according to the vessel size.</p></div></article></div></div></section>
    <section className={`${base.section} ${base.lightSection}`} id="specifications"><div className={base.container}><SectionHeading eyebrow="02 · SELECTION CHART" title="Distribution system selection chart (Top &amp; Hub Lateral)">The selection chart below retains the vessel sizes, lateral counts, lengths, slot sizes, lateral diameters, material and pipe sizes shown in the supplied artwork.</SectionHeading><div className={`${local.specCard} ${local.selectionTable}`}><div className={local.specCardHeader}><span>15 vessel references</span><strong>Top distributor and bottom hub/lateral selection</strong></div><DataTable label="FRP vessel distribution system selection chart" headers={["Vessel Size (Inch)", "Vessel Diameter (mm)", "Top Distributor Size (Inch)", "No. of Top Laterals", "Top Lateral Length (mm)", "Hub Size (Bottom)", "No. of Bottom Laterals", "Bottom Lateral Length (mm)", "Slot Size (mm)", "Lateral OD (mm)", "Lateral Material", "Top Pipe Size (Inch / NB)", "Bottom Pipe Size (Inch / NB)"]} rows={distributionRows} /></div></div></section>
    <section className={base.section} id="technical-details"><div className={base.container}><SectionHeading eyebrow="03 · TECHNICAL SPECIFICATIONS" title="UPVC distribution system details">Material, pressure, temperature and application details are reproduced from the supplied distribution-system artwork.</SectionHeading><div className={local.twoColumn}><div className={local.panel}><DataTable className={local.compactSpec} label="Distribution system technical specifications" headers={["Parameter", "Details"]} rows={distributionTechnicalRows} /></div><div className={local.panel}><h3>Lateral details</h3><ul className={local.bulletList}><li><SlidersHorizontal size={16} />Slot length: 20–25 mm</li><li><SlidersHorizontal size={16} />Slot width: 0.25–0.50 mm</li><li><Gauge size={16} />Lateral OD: 25 / 32 / 40 / 50 / 63 mm</li><li><GitBranch size={16} />Material: UPVC (SCH-80), corrosion resistant</li><li><Wrench size={16} />Top distributor with 90° elbow option shown for the vessel range</li></ul><TagRow items={["Top distributor", "Hub", "Lateral (slot type)", "Extension pipe", "Threaded connection", "90° elbow"]} /></div></div><div className={local.noteBlock}><CircleAlert size={17} /><span>Final distributor, hub and lateral dimensions are selected per vessel size, media, service flow and backwash arrangement. Confirm the assembly against the approved vessel and process design.</span></div></div></section>
    <section className={`${base.section} ${base.darkSection}`} id="features"><div className={base.container}><SectionHeading eyebrow="04 · KEY FEATURES &amp; BENEFITS" title="Uniform flow through the vessel media bed">The brochure highlights the following distribution-system features.</SectionHeading><div className={base.membraneGrid}><div><ul className={local.bulletList}>{featureItems.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></div><div className={local.panel}><h3>Flow distribution diagram</h3><p className={local.panelLead}>Top distribution is shown for inlet flow. Hub-and-lateral distribution is shown for outlet and backwash flow.</p><div className={local.flowGrid}><article className={local.flowCard}><span className={local.flowIcon}><MoveDown size={22} /></span><div><h3>Top Distribution</h3><p>Inlet flow enters through the top distributor and spreads across the media.</p></div></article><article className={local.flowCard}><span className={local.flowIcon}><RefreshCw size={22} /></span><div><h3>Hub &amp; Lateral</h3><p>Outlet and backwash flow is collected or distributed through the hub and laterals.</p></div></article></div></div></div></div></section>
    <section className={`${base.section} ${base.lightSection}`} id="applications"><div className={base.container}><SectionHeading eyebrow="05 · APPLICATIONS" title="Distribution systems for filtration and treatment vessels">The supplied artwork lists these applications.</SectionHeading><div className={local.featureGridWide}>{applicationTags.map((item, index) => { const Icon = [Layers3, Droplets, RefreshCw, ShieldCheck, Activity, Waves, Factory, Gauge, PackageCheck][index] ?? Layers3; return <article className={base.featureCard} key={item}><span className={base.featureIcon}><Icon size={20} /></span><h3>{item}</h3><p>Selected top distribution or hub-and-lateral arrangement for the matched vessel and treatment duty.</p></article>; })}</div></div></section>
    <Faq items={[["What material is listed for the distribution system?", "The supplied technical table lists UPVC (SCH-80), corrosion resistant, for the distribution system and laterals."], ["What vessel size range is covered?", "The supplied chart covers FRP vessels from 8\" x 44\" through 63\" x 86\"."], ["What is the difference between top distribution and hub & lateral?", "Top distribution handles inlet flow across the media bed. Hub-and-lateral assemblies support collection and outlet/backwash flow at the bottom of the vessel."]]} />
    <Quote kind="Distribution Systems" />
  </>;
}

function Faq({ items }: { items: [string, string][] }) {
  return <section className={base.faqSection} id="faq"><div className={base.container}><SectionHeading eyebrow="06 · FREQUENTLY ASKED QUESTIONS" title="Component selection questions">The supplied brochure values are useful for initial selection; final component sizing remains application-specific.</SectionHeading><div className={base.faqList}>{items.map(([question, answer]) => <details className={base.faqItem} key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>;
}

function Quote({ kind }: { kind: string }) {
  return <section className={base.ctaSection} id="quote"><div className={base.container}><div className={base.ctaGrid}><div><span className={base.eyebrow}>07 · DESIGN, SUPPLY &amp; INSTALLATION</span><h2>Discuss your {kind.toLowerCase()} requirement.</h2><p>Share the vessel size, application, flow, pressure, media and installation arrangement. AQUEN can review the suitable component configuration and confirm the technical details.</p><div className={base.ctaChecklist}><span><Check size={16} />Brochure-based component selection</span><span><Check size={16} />FRP vessel and treatment compatibility</span><span><Check size={16} />Configuration-specific review</span><span><Check size={16} />Supply, installation and service discussion</span></div></div><div className={base.ctaCard}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><div className={base.quoteFields}><span>Office &amp; Factory<br />Pimpri-Chinchwad, Maharashtra – 412105</span><span>Website<br />www.aquenfluid.com</span></div><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={14} /></a><Link href="/contact" className={base.ctaButton}>Request a Quote <ArrowRight size={15} /></Link></div></div></div></section>;
}

export default function WaterComponentsContent({ kind }: { kind: WaterComponentKind }) {
  return <div className={base.page}><Header /><main><Hero kind={kind} />{kind === "frp" ? <FrpPage /> : kind === "mpv" ? <MpvPage /> : <DistributionPage />}</main><Footer /></div>;
}
