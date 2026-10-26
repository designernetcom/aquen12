import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Check,
  ChevronRight,
  CircleAlert,
  CloudCog,
  Cog,
  Factory,
  Fan,
  Gauge,
  Info,
  Layers3,
  MonitorCog,
  PlugZap,
  Settings2,
  ShieldCheck,
  Snowflake,
  ThermometerSun,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import local from "../cation-bed/cation-bed.module.css";
import chiller from "./industrial-water-chiller.module.css";

type TableRow = readonly string[];

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ThermometerSun, title: "Temperature range", text: "The brochure lists 5°C to 30°C, with a standard 7°C–12°C range in its general details. Verify achievable ranges by model and configuration." },
  { icon: Gauge, title: "Energy efficient", text: "Energy efficiency is brochure-listed; no rating, COP, EER or operating-cost estimate is claimed here." },
  { icon: ShieldCheck, title: "Reliable performance", text: "A brochure-listed benefit that remains subject to selected equipment, operating conditions and maintenance." },
  { icon: PlugZap, title: "Easy installation", text: "The brochure presents easy installation; final civil, electrical, piping and service requirements require engineering review." },
  { icon: Layers3, title: "Robust design", text: "Powder-coated MS and optional stainless-steel construction are listed, with final scope depending on the selected configuration." },
  { icon: Settings2, title: "Customizable options", text: "Capacities, condenser arrangement, controls, tank, pump and enclosure can be configured for the project requirement." },
];

const chillerTypes: { icon: LucideIcon; title: string; text: string; note: string }[] = [
  { icon: Fan, title: "Air-Cooled Water Chiller", text: "Compact design with no cooling tower required; suitable for medium-capacity systems.", note: "Category reference; no separate capacity is assigned here." },
  { icon: Waves, title: "Water-Cooled Water Chiller", text: "High-efficiency configuration for large capacities that requires a cooling tower.", note: "Cooling-tower requirement is brochure-listed." },
  { icon: PlugZap, title: "Compact Chiller (Integrated)", text: "A compact chiller concept with built-in pump, tank and controls for a plug-and-play arrangement.", note: "Confirm whether pump and tank are included on the selected model." },
  { icon: Factory, title: "Screw Chiller (High Capacity)", text: "High-capacity screw-chiller category for large industrial applications and high cooling demand.", note: "Use model-wise specifications for capacity and electrical selection." },
];

const technicalRows: TableRow[] = [
  ["ACW-01", "1", "3.5", "0.6", "Scroll", "Air Cooled", "R-410A", "1.2", "230 V / 1 Ph / 50 Hz", "900 × 700 × 900", "120"],
  ["ACW-02", "2", "7", "1.2", "Scroll", "Air Cooled", "R-410A", "2.0", "230 V / 1 Ph / 50 Hz", "1000 × 750 × 1100", "160"],
  ["ACW-03", "3", "10.5", "1.8", "Scroll", "Air Cooled", "R-410A", "3.0", "230 V / 1 Ph / 50 Hz", "1200 × 800 × 1200", "200"],
  ["ACW-05", "5", "17.5", "3.0", "Scroll", "Air Cooled", "R-410A", "5.0", "415 V / 3 Ph / 50 Hz", "1500 × 900 × 1400", "280"],
  ["ACW-08", "8", "28", "4.8", "Scroll", "Air Cooled", "R-410A", "7.5", "415 V / 3 Ph / 50 Hz", "1800 × 1000 × 1600", "400"],
  ["ACW-10", "10", "35", "6.0", "Scroll", "Air Cooled", "R-410A", "10.0", "415 V / 3 Ph / 50 Hz", "2000 × 1100 × 1700", "500"],
  ["ACW-15", "15", "52", "9.0", "Scroll", "Air Cooled", "R-410A", "15.0", "415 V / 3 Ph / 50 Hz", "2200 × 1200 × 1800", "700"],
  ["ACW-20", "20", "70", "12.0", "Scroll", "Air Cooled", "R-410A", "20.0", "415 V / 3 Ph / 50 Hz", "2500 × 1500 × 2000", "900"],
  ["ACW-25", "25", "88", "15.0", "Screw", "Air Cooled", "R-410A", "25.0", "415 V / 3 Ph / 50 Hz", "3000 × 1700 × 2100", "1200"],
  ["ACW-30", "30", "105", "18.0", "Screw", "Air Cooled", "R-410A", "30.0", "415 V / 3 Ph / 50 Hz", "3200 × 1800 × 2200", "1500"],
  ["ACW-40", "40", "140", "24.0", "Screw", "Air/Water Cooled", "R-134a", "40.0", "415 V / 3 Ph / 50 Hz", "3500 × 2000 × 2200", "2000"],
  ["ACW-50", "50", "175", "30.0", "Screw", "Water Cooled", "R-134a", "50.0", "415 V / 3 Ph / 50 Hz", "3800 × 2000 × 2300", "2500"],
  ["ACW-75", "75", "263", "45.0", "Screw", "Water Cooled", "R-134a", "75.0", "415 V / 3 Ph / 50 Hz", "4200 × 2200 × 2400", "3500"],
  ["ACW-100", "100", "350", "60.0", "Screw", "Water Cooled", "R-134a", "100.0", "415 V / 3 Ph / 50 Hz", "5000 × 2200 × 2500", "4500"],
];

const standardFeatures: { icon: LucideIcon; title: string; text: string; optional?: boolean }[] = [
  { icon: Cog, title: "Hermetic scroll / semi-hermetic screw compressor", text: "High-efficiency compressor types listed in the brochure." },
  { icon: Layers3, title: "Stainless evaporator", text: "Brazed-plate or shell-and-tube evaporator configurations." },
  { icon: Fan, title: "Air- or water-cooled condenser", text: "Fin-and-tube air-cooled or shell-and-tube water-cooled arrangements." },
  { icon: MonitorCog, title: "Digital temperature controller", text: "Digital controller with display, subject to final panel scope." },
  { icon: ShieldCheck, title: "Safety protections", text: "HP/LP, overload and flow-switch protections are brochure-listed." },
  { icon: Waves, title: "SS-304 chilled-water tank", text: "Optional tank, not a standard inclusion on every configuration.", optional: true },
  { icon: PlugZap, title: "Built-in chilled-water pump", text: "Optional pump arrangement; confirm inclusion by model.", optional: true },
  { icon: Waves, title: "Low-noise operation", text: "A brochure-listed characteristic without a published dB value." },
  { icon: Factory, title: "Powder-coated MS / SS enclosure", text: "Enclosure material varies by selected construction and scope." },
  { icon: Snowflake, title: "R-410A / R-134a refrigerant", text: "Refrigerant varies by listed configuration. The brochure’s ‘environment-friendly’ wording requires verification." },
  { icon: Wrench, title: "Easy operation and maintenance", text: "Brochure-listed positioning; no service interval or warranty is inferred." },
];

const optionalFeatures: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Layers3, title: "SS-304 insulated storage tank", text: "Optional 100 L–2,000 L tank range." },
  { icon: PlugZap, title: "Built-in circulation pump", text: "Duty / standby pump option." },
  { icon: Gauge, title: "Flow meter and pressure gauge", text: "Optional instrumentation." },
  { icon: MonitorCog, title: "PLC control panel with HMI", text: "Optional PLC-based controls and HMI." },
  { icon: CloudCog, title: "Data logging and IoT monitoring", text: "Optional hardware/software configuration; no live dashboard is implied." },
  { icon: Activity, title: "Dual-pump system", text: "Duty + standby arrangement." },
  { icon: Settings2, title: "Variable frequency drive", text: "Optional VFD configuration." },
  { icon: ThermometerSun, title: "Special temperature range", text: "Brochure lists −5°C to 30°C; confirm model suitability." },
  { icon: ShieldCheck, title: "Weatherproof enclosure", text: "Optional enclosure for outdoor installation." },
  { icon: Wrench, title: "Client-specific customization", text: "Custom engineering as per requirement." },
];

const generalRows: TableRow[] = [
  ["Chilled Water Temperature", "5°C to 30°C; standard 7°C–12°C"],
  ["Ambient Temperature", "Up to 45°C for air-cooled models"],
  ["Refrigerant", "R-410A / R-134a"],
  ["Compressor", "Hermetic Scroll / Semi-Hermetic Screw"],
  ["Evaporator", "Stainless Steel Brazed Plate / Shell & Tube"],
  ["Condenser", "Air-Cooled Fin & Tube / Water-Cooled Shell & Tube"],
  ["Control Panel", "Microprocessor / PLC-Based with Safety Interlocks"],
  ["Power Supply", "230 V / 1 Phase / 50 Hz for 1–3 TR; 415 V / 3 Phase / 50 Hz for 5 TR and above"],
  ["Construction Material", "MS Powder Coated / SS-304 Optional"],
];

const applications: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Factory, title: "Pharmaceutical Industry", text: "Process cooling where temperature, flow and material requirements are reviewed for the application." },
  { icon: Layers3, title: "Plastic & PET Industry", text: "Cooling support for production equipment and process circuits, subject to load assessment." },
  { icon: Waves, title: "Food & Beverage Industry", text: "Cooling for process and utility duties where hygienic and temperature requirements are defined." },
  { icon: Cog, title: "Machine Tools & CNC", text: "Cooling support for machine tools and associated process systems." },
  { icon: Factory, title: "Chemical & Process Industry", text: "Industrial temperature control with condenser, refrigerant and materials reviewed for the duty." },
  { icon: Settings2, title: "Injection Molding", text: "Cooling for molding equipment and process loops after cooling-load confirmation." },
  { icon: CloudCog, title: "HVAC Applications", text: "Chilled-water duties for comfort or equipment applications with project-specific design review." },
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, label }: { headers: string[]; rows: TableRow[]; label: string }) {
  return <div className={`${styles.tableWrap} ${chiller.wideTable}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ChillerVisual() {
  return <div className={styles.heroVisual}><div className={chiller.heroPlaceholder}><Snowflake size={64} strokeWidth={1.3} /><strong>Industrial Water Chiller</strong><span>1–100 TR · air-cooled and water-cooled configurations</span><small>No verified AQUEN chiller photograph is currently available in the project assets. Replace this confirmation panel with approved product imagery when supplied.</small></div><div className={styles.heroBadge}><Snowflake size={16} /><span>ACW series reference</span></div><div className={styles.heroCaption}><span>Range</span><strong>1–100 TR</strong><span>Focus</span><strong>Process cooling</strong></div></div>;
}

export default function IndustrialWaterChillerContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Industrial Water Chiller</strong></nav><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN SOLUTION SYSTEM · PROCESS COOLING</span><h1>INDUSTRIAL WATER <em>CHILLER</em></h1><h2>Precise Temperature Control for Process, Machines &amp; Comfort Applications</h2><p>AQUEN Fluid Technologies LLP offers industrial water chillers for process cooling, machinery, production lines and other industrial temperature-control applications. Configurations include air-cooled and water-cooled systems, different cooling capacities, scroll or screw compressors and optional controls to suit project requirements.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About Water Chillers <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>1–100 TR</strong><span>brochure capacity range</span></div><div><strong>Air / Water</strong><span>condenser options</span></div><div><strong>Scroll / Screw</strong><span>compressor types</span></div></div><p className={styles.heroNote}>Energy Efficient · Reliable · Compact · Customizable · Reliable Cooling Solutions for Process and Industry</p></div><ChillerVisual /></div></div></section>

      <section className={styles.section} id="benefits"><div className={styles.container}><SectionHeading eyebrow="01 · KEY PRODUCT BENEFITS" title="Cooling engineered around the process">The brochure lists the following benefits. Temperature range, performance, installation and custom options remain subject to model selection and engineering confirmation.</SectionHeading><div className={styles.featureGrid}>{benefits.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="types"><div className={styles.container}><SectionHeading eyebrow="02 · TYPES OF WATER CHILLERS" title="Four brochure categories for different cooling arrangements">Category descriptions are preserved without assigning unsupported capacities or ratings. Use the technical table and engineering enquiry for model selection.</SectionHeading><div className={chiller.typeGrid}>{chillerTypes.map(({ icon: Icon, title, text, note }, index) => <article className={chiller.typeCard} key={title}><div className={chiller.typeVisual}><Icon size={34} /><span>Approved chiller image to be supplied or confirmed.</span></div><div className={chiller.typeBody}><span>0{index + 1} · CHILLER TYPE</span><h3>{title}</h3><p>{text}</p><small>{note}</small></div></article>)}</div></div></section>

      <section className={styles.section} id="technical-specifications"><div className={styles.container}><SectionHeading eyebrow="03 · TECHNICAL SPECIFICATIONS" title="Primary ACW model-wise reference">The values below are transcribed from the supplied brochure image. The prompt describes 13 models, while the supplied table contains 14 rows; all 14 rows are included here for verification against the approved manufacturer datasheet.</SectionHeading><DataTable headers={["Model", "Cooling capacity (TR)", "Cooling capacity (kW)", "Chilled water flow rate (gpm/hr, as printed)", "Compressor type", "Condenser type", "Refrigerant", "Power consumption (kW)", "Power supply", "Approx. dimensions L × W × H (mm)", "Approx. weight (kg)"]} rows={technicalRows} label="AQUEN Industrial Water Chiller technical specifications" /><div className={chiller.tableNoteGrid}><div className={chiller.tableNote}><Info size={17} /><span>Preserve the flow-rate heading as printed: “gpm/hr” is ambiguous. Do not convert the values to LPM, m³/h or another unit without manufacturer confirmation.</span></div><div className={chiller.tableNote}><CircleAlert size={17} /><span>TR and kW values do not appear to use one consistent conversion ratio across every row. The brochure values are preserved and require engineering verification.</span></div></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="standard-features"><div className={styles.container}><SectionHeading eyebrow="04 · STANDARD FEATURES" title="Core equipment features, with optional components kept explicit">The brochure lists the following equipment and control features. Tank and built-in pump entries are marked optional, not standard inclusions.</SectionHeading><div className={styles.featureGrid}>{standardFeatures.map(({ icon: Icon, title, text, optional }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}{optional ? " · Optional" : ""}</h3><p>{text}</p></article>)}</div><div className={styles.darkNote}><CircleAlert size={17} /> The brochure calls R-410A / R-134a “environment-friendly refrigerant”; verify that marketing wording and the applicable refrigerant selection before publication.</div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="optional-features"><div className={styles.container}><SectionHeading eyebrow="05 · OPTIONAL FEATURES" title="Add controls, storage and monitoring as required">Availability depends on the chiller model and engineering configuration. No tank, pump, VFD, HMI or IoT functionality is implied for every unit.</SectionHeading><div className={chiller.optionalGrid}>{optionalFeatures.map(({ icon: Icon, title, text }, index) => <article className={chiller.optionalCard} key={title}><Icon size={21} /><div><strong>{String(index + 1).padStart(2, "0")} · {title}</strong><small>{text}</small></div></article>)}</div></div></section>

      <section className={styles.section} id="general-details"><div className={styles.container}><SectionHeading eyebrow="06 · GENERAL TECHNICAL DETAILS" title="Brochure-level design reference">These rows preserve the brochure’s general technical statements. Confirm the exact temperature, condenser, refrigerant, construction and electrical requirement for the selected model.</SectionHeading><div className={chiller.detailGrid}><div className={chiller.detailTable}><table aria-label="General industrial water chiller technical details"><tbody>{generalRows.map(([parameter, value]) => <tr key={parameter}><th scope="row">{parameter}</th><td>{value}</td></tr>)}</tbody></table></div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Ambient temperature is listed as up to 45°C for air-cooled models. The general power-supply statement says 230 V single-phase for 1–3 TR and 415 V three-phase for 5 TR and above; confirm exact requirements against the model table and approved datasheet.</span></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="dimensions"><div className={styles.container}><SectionHeading eyebrow="07 · DIMENSION REFERENCE (TYPICAL)" title="Read the model dimensions in the correct order">No approved brochure dimension illustration is available as a separate project asset. The model table preserves the typical order L × W × H, with dimensions and weights marked approximate.</SectionHeading><div className={chiller.dimensionPanel}><h3>Typical dimension notation</h3><p>Use the model-wise table above for the values shown in the brochure. The final footprint, service access and enclosure can change with the selected configuration.</p><div className={chiller.dimensionMarks}><div className={chiller.dimensionMark}><strong>L</strong><span>Length</span></div><div className={chiller.dimensionMark}><strong>W</strong><span>Width</span></div><div className={chiller.dimensionMark}><strong>H</strong><span>Height</span></div></div><p className={chiller.dimensionNote}><CircleAlert size={16} /> Do not infer mounting points, connection sizes, clearances or service-access dimensions from this reference.</p></div></div></section>

      <section className={styles.section} id="applications"><div className={styles.container}><SectionHeading eyebrow="08 · INDUSTRIAL APPLICATIONS" title="Cooling for process, machinery and facility duties">These descriptions explain the brochure-listed categories and do not guarantee suitability for every load, temperature or operating environment.</SectionHeading><div className={chiller.applicationGrid}>{applications.map(({ icon: Icon, title, text }) => <article className={chiller.applicationCard} key={title}><Icon size={23} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${local.quoteSection}`} id="quote"><div className={styles.container}><div className={local.quoteGrid}><div><span className={styles.eyebrow}>09 · ENGINEERING ENQUIRY</span><h2>Discuss your Industrial Water Chiller requirement.</h2><p>Select a chiller according to cooling load, process temperature, chilled-water flow, condenser arrangement, available power supply and installation conditions. The brochure identifies customizable configurations; final selection should be confirmed with AQUEN.</p><div className={styles.ctaChecklist}><span><Check size={16} />Cooling capacity and process load</span><span><Check size={16} />Required chilled-water temperature</span><span><Check size={16} />Air-cooled or water-cooled preference</span><span><Check size={16} />Scroll or screw compressor requirement</span></div><div className={local.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a className={chiller.contactLine} href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a className={chiller.contactLine} href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={14} /></a><a className={chiller.contactLine} href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={local.formCard}><span className={local.formEyebrow}>Request technical specifications</span><h3>Enquire About Water Chillers</h3><p>Required fields use browser validation. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Industrial Water Chiller Solution Enquiry" /><input type="hidden" name="Source Page" defaultValue="Industrial Water Chiller Solution Page" /><div className={local.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone number *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>Application<input name="Application" type="text" placeholder="Process, machinery, HVAC, etc." /></label><label>Required cooling capacity<input name="Required cooling capacity" type="text" placeholder="Example: 10 TR" /></label><label>Chilled-water temperature<input name="Chilled-water temperature" type="text" placeholder="Example: 7–12°C" /></label><label>Preferred condenser<select name="Preferred condenser" defaultValue=""><option value="" disabled>Select condenser</option><option>Air cooled</option><option>Water cooled</option><option>Unsure</option></select></label><label>Compressor preference<select name="Compressor preference" defaultValue=""><option value="" disabled>Select compressor</option><option>Scroll</option><option>Screw</option><option>Unsure</option></select></label><label>Installation environment<select name="Installation environment" defaultValue=""><option value="" disabled>Select environment</option><option>Indoor</option><option>Outdoor</option><option>Unsure</option></select></label><label className={local.fieldFull}>Additional requirements<textarea name="Message" required placeholder="Tell us about your load, process temperature, flow, available power and installation conditions." /></label></div><div className={local.formSubmit}><button type="submit">Submit requirement <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>
    </main>
    <Footer />
  </div>;
}
