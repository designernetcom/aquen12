import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  Factory,
  Filter,
  GitMerge,
  Layers3,
  Mountain,
  PackageCheck,
  Pipette,
  Recycle,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Waves,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Footer from "@/app/layouts/footer";
import Header from "@/app/layouts/header";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import shared from "../cation-bed/cation-bed.module.css";
import local from "./flocculation-systems.module.css";

type TableRow = readonly string[];

type FlocculatorType = {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  specs: TableRow[];
  application: string;
  image?: { src: string; alt: string };
};

const flocculators: FlocculatorType[] = [
  {
    number: "01",
    title: "Horizontal Flocculator (Paddle Type)",
    icon: GitMerge,
    description: "A compartmentalized horizontal arrangement with slow-speed paddle mixers for water and wastewater treatment applications.",
    features: ["Robust MS / FRP / MSEP / SS design", "Multiple compartments", "Slow-speed paddle mixers", "Suitable for WTP / STP / ETP"],
    application: "WTP / STP / ETP",
    specs: [
      ["Capacity", "5–500 KLD"],
      ["Number of Compartments", "2–4"],
      ["Tank Size (L × W × H)", "As per capacity"],
      ["Material", "MS / FRP / MSEP / SS304/316 / FRP — verify"],
      ["Agitator Type", "Paddle"],
      ["Agitator Speed", "10–40 FPM"],
      ["Motor", "0.18–0.75 kW (each)"],
      ["Baffle", "Provided (optional)"],
      ["Inlet / Outlet Size", "50 NB – 250 NB"],
    ],
  },
  {
    number: "02",
    title: "Vertical Flocculator",
    icon: Wind,
    description: "A compact vertical tank configuration with a central shaft and paddles for sites where footprint is limited.",
    features: ["Compact design", "Central shaft with paddles", "Suitable for limited space", "MS / FRP / SS options, subject to verification"],
    application: "Limited-space treatment installations",
    specs: [
      ["Capacity", "5–200 KLD"],
      ["Tank Diameter", "1.0–4.0 m"],
      ["Tank Height", "1.5–4.0 m"],
      ["Material", "MS / FRP / SS304/316 — verify"],
      ["Agitator Type", "Flat / Inclined Paddle"],
      ["Agitator Speed", "10–40 FPM"],
      ["Motor", "0.18–0.75 kW"],
      ["Drive", "Top Mounted with Gearbox"],
      ["Inlet / Outlet Size", "50 NB – 200 NB"],
    ],
  },
  {
    number: "03",
    title: "Pipe Flocculator (Inline Static Mixer)",
    icon: Filter,
    description: "An inline static mixer with no moving parts for uniform mixing of coagulant or polymer in selected flow conditions.",
    features: ["No moving parts", "Uniform and gentle mixing", "Low pressure loss", "UPVC / SS construction", "Suitable for small to medium capacities"],
    application: "Coagulant / polymer mixing",
    specs: [
      ["Size", "25 NB – 300 NB"],
      ["Material", "UPVC / SS304 / SS316"],
      ["Type", "Static Mixer (No Moving Parts)"],
      ["Mixing Element", "Helical / Cross Baffle"],
      ["Pressure Loss", "0.1–0.5 bar"],
      ["Installation", "Horizontal / Vertical"],
      ["Application", "Coagulant / Polymer Mixing"],
      ["Flow Range", "1–500 m³/hr"],
    ],
  },
  {
    number: "04",
    title: "Mechanical Flocculator (Multi-Stage)",
    icon: Settings2,
    description: "A multi-stage mechanical system with variable-speed mixing for controlled floc formation in high-TSS and industrial wastewater applications.",
    features: ["Multiple stages with variable speed", "Precise floc formation control", "Suitable for high-TSS and industrial wastewater", "MS / FRP / MSEP / SS options, subject to verification"],
    application: "High-TSS and industrial wastewater",
    specs: [
      ["Capacity", "10–500 KLD"],
      ["Number of Stages", "2–4"],
      ["Tank Material", "MS / HDPE / FRP / SS — verify"],
      ["Agitator Type", "Paddle / Turbine"],
      ["Agitator Speed", "10–40 FPM (variable)"],
      ["Motor", "0.18–1.5 kW (each)"],
      ["Drive", "Geared Motor with Variable Speed"],
      ["Inlet / Outlet Size", "50 NB – 300 NB"],
    ],
  },
  {
    number: "05",
    title: "Tank Mounted Flocculator",
    icon: PackageCheck,
    description: "A simple, cost-effective arrangement for small capacities and packaged plants, with FRP or stainless-steel options.",
    features: ["Simple and cost-effective", "Suitable for small capacities", "FRP / SS construction", "Used in packaged plants"],
    application: "Small capacities and packaged plants",
    specs: [
      ["Capacity", "1–100 KLD"],
      ["Tank Diameter", "0.8–3.0 m"],
      ["Tank Height", "1.0–3.0 m"],
      ["Material", "FRP / SS304 / SS316"],
      ["Agitator Type", "Paddle"],
      ["Agitator Speed", "10–40 FPM"],
      ["Motor", "0.18–0.75 kW"],
      ["Inlet / Outlet Size", "40 NB – 150 NB"],
    ],
  },
  {
    number: "06",
    title: "Lamella Flocculator (With Tube Settler)",
    icon: Layers3,
    description: "A combined flocculation and tube-settler arrangement presented for compact solids separation in WTP, STP and ETP applications.",
    features: ["Combination of flocculation and lamella settling", "Compact design with high efficiency", "Suitable for WTP / STP / ETP", "MS / FRP / SS options, subject to verification"],
    application: "WTP / STP / ETP",
    image: { src: "/lamella-settler-img.png", alt: "Industrial lamella and tube-settler water-treatment equipment" },
    specs: [
      ["Capacity", "10–500 KLD"],
      ["Tank Material", "MS / FRP / MSEP / SS — verify"],
      ["Tank Size (L × W × H)", "As per capacity"],
      ["Lamella Module", "Inclined Tube Settler (60°)"],
      ["Agitator Type", "Paddle (Inlet Chamber)"],
      ["Agitator Speed", "10–40 FPM"],
      ["Motor", "0.18–0.75 kW"],
      ["Inlet / Outlet Size", "50 NB – 250 NB"],
    ],
  },
];

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Sparkles, title: "Larger and stronger flocs", text: "Controlled mixing encourages destabilized particles to collide and grow into larger flocs." },
  { icon: Recycle, title: "Improves solid–liquid separation", text: "Flocculation can support clarification, filtration and downstream separation when properly designed." },
  { icon: Filter, title: "Supports contaminant reduction", text: "The brochure lists turbidity, colour, COD, BOD and heavy metals; actual removal depends on chemistry, mixing and separation." },
  { icon: Building2, title: "Municipal, industrial and sewage use", text: "Suitable application contexts listed in the brochure; equipment and operating settings remain application-specific." },
  { icon: Wind, title: "Energy-efficient slow-speed mixing", text: "Slow-speed agitators are brochure-listed; actual energy use depends on the selected equipment and duty." },
  { icon: ShieldCheck, title: "Multiple construction options", text: "MS, SS304, SS316 and FRP are listed options, subject to verification for each system type." },
  { icon: SlidersHorizontal, title: "Custom sizes", text: "Sizing and configuration can be developed according to process requirements and site conditions." },
];

const processStages: { icon: LucideIcon; label: string; title: string; text: string }[] = [
  { icon: Waves, label: "01 · INLET", title: "Raw Water / Wastewater Inlet", text: "Incoming water or wastewater enters the treatment process." },
  { icon: Pipette, label: "02 · CONDITIONING", title: "Coagulation Dosing", text: "Coagulant dosing and coagulation are carried out as required by the design." },
  { icon: Wind, label: "03 · MIXING", title: "Flocculation Tank", text: "Controlled mixing encourages destabilized particles to form larger flocs." },
  { icon: Layers3, label: "04 · SEPARATION", title: "Clarifier / Tube Settler", text: "A suitable settling arrangement separates settleable flocs from the water." },
  { icon: Check, label: "05 · OUTLET", title: "Treated Water Outlet", text: "Separated water proceeds to the next stage or intended application, subject to required quality." },
];

const applications: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Building2, title: "Drinking Water Treatment (WTP)", text: "Flocculation as part of an appropriately designed drinking-water treatment process." },
  { icon: Waves, title: "Sewage Treatment Plant (STP)", text: "Flocculation for suitable sewage-treatment applications. The brochure label should be confirmed against the original artwork." },
  { icon: Factory, title: "Effluent Treatment Plant (ETP)", text: "Flocculation for industrial effluent treatment where required by the process design." },
  { icon: Settings2, title: "Industrial Wastewater", text: "Controlled mixing for floc formation in selected wastewater streams." },
  { icon: Filter, title: "Tertiary Treatment", text: "Additional solids-separation treatment where required by the process design." },
  { icon: Mountain, title: "Mining & Process Water", text: "Flocculation for appropriate mineral-processing and process-water applications." },
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, label, className = "" }: { headers: string[]; rows: TableRow[]; label: string; className?: string }) {
  return <div className={`${styles.tableWrap} ${className}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProductPanel({ item }: { item: FlocculatorType }) {
  const Icon = item.icon;
  return <div className={local.productPanel}>{item.image ? <div className={local.productImage}><Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 850px) 100vw, 33vw" /></div> : <div className={local.productPlaceholder}><Icon size={42} /><span>Approved product image to be supplied or confirmed.</span></div>}<div className={local.productPanelLabel}><span>{item.number} / 06</span><small>{item.image ? "Existing lamella/tube-settler reference" : "Configuration reference"}</small></div></div>;
}

function HeroVisual() {
  return <div className={styles.heroVisual}><div className={styles.heroVisualFrame}><Image src="/lamella-settler-img.png" alt="Lamella and tube-settler water-treatment equipment reference" fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>Flocculation reference</span></div><div className={local.heroImageNote}>Existing lamella/tube-settler asset shown as a related treatment reference. Final flocculator configuration depends on the selected system.</div><div className={styles.heroCaption}><span>Applications</span><strong>WTP · STP · ETP</strong><span>Equipment</span><strong>6 configurations</strong></div></div>;
}

export default function FlocculationSystemsContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Flocculation Systems</strong></nav><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN FLUID TECHNOLOGIES LLP · COMPLETE WATER &amp; WASTEWATER TREATMENT SOLUTIONS</span><h1>FLOCCULATION <em>SYSTEMS</em></h1><h2>For WTP | STP | ETP</h2><p>AQUEN offers flocculation systems for water and wastewater treatment applications. The available configurations include horizontal paddle-type flocculators, vertical flocculators, pipe flocculators, mechanical multi-stage systems, tank-mounted flocculators and lamella flocculators with tube settlers.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About Flocculation Systems <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>6 TYPES</strong><span>brochure configurations</span></div><div><strong>WTP · STP · ETP</strong><span>application contexts</span></div><div><strong>CONTROLLED MIXING</strong><span>for better floc formation</span></div></div><p className={styles.heroNote}>Efficient Mixing for Better Solid Separation · Final performance depends on process design and operating conditions.</p></div><HeroVisual /></div></div></section>

      <section className={styles.section} id="what-is-flocculation"><div className={styles.container}><SectionHeading eyebrow="01 · PROCESS FUNDAMENTALS" title="What Is Flocculation?">Flocculation is a gentle mixing process used after coagulation to promote the collision and growth of destabilized particles into larger, easily settleable flocs. It can support the removal of suspended solids, colour, turbidity, COD and heavy metals from water and wastewater, improving clarification, filtration and overall treatment performance where the complete process is properly designed.</SectionHeading><div className={local.explainerGrid}><div className={local.explainerVisual}><div className={local.particleCluster}><span /><span /><span /><span /><span /></div><ArrowRight size={24} aria-hidden="true" /><div className={local.flocCluster}><span /><span /><span /><span /><span /><span /></div></div><div className={local.explainerCopy}><span className={styles.eyebrow}>COAGULATION → FLOCCULATION → SEPARATION</span><h3>Controlled mixing for larger settleable flocs</h3><p>Flocculation commonly follows coagulation and precedes an appropriate separation stage. Mixing intensity, residence time, chemical conditioning, influent characteristics and downstream clarification all affect the result.</p><div className={local.explainerList}><span><Check size={16} />Encourages small destabilized particles to aggregate.</span><span><Check size={16} />Supports clarification, filtration or tube-settler separation.</span><span><Check size={16} />Does not by itself guarantee removal of every dissolved contaminant.</span></div></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="benefits"><div className={styles.container}><SectionHeading eyebrow="02 · KEY BENEFITS" title="Key Benefits">These benefits are brochure-listed capabilities. No numerical removal percentage, chemical program or universal operating guarantee is implied.</SectionHeading><div className={styles.featureGrid}>{benefits.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section} id="types"><div className={styles.container}><SectionHeading eyebrow="03 · EQUIPMENT CONFIGURATIONS" title="Types of Flocculation Systems">The six equipment configurations below preserve the brochure-listed names, features and technical specifications. Select the final arrangement from flow, water quality, mixing requirements, materials and downstream separation.</SectionHeading><div className={local.typeGrid}>{flocculators.map((item) => <article className={local.typeCard} key={item.title}><ProductPanel item={item} /><div className={local.typeBody}><span>{item.number} · EQUIPMENT TYPE</span><h3>{item.title}</h3><p>{item.description}</p><ul>{item.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><div className={local.typeFooter}><small>{item.application}</small><a href={`#type-${item.number}`}>View specifications <ArrowRight size={14} /></a></div></div></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="specifications"><div className={styles.container}><SectionHeading eyebrow="04 · TYPICAL SPECIFICATIONS" title="Flocculation System Technical Specifications">Every parameter from the supplied brochure is retained in a separate, responsive table. Values are typical and must be checked against the approved design and manufacturer datasheet.</SectionHeading><div className={local.specStack}>{flocculators.map((item) => <article className={local.specSection} id={`type-${item.number}`} key={item.title}><div className={local.specHeading}><span>{item.number} / 06</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div><DataTable headers={["Parameter", "Specification (Typical)"]} rows={item.specs} label={`${item.title} typical technical specifications`} className={local.specTable} /></article>)}</div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Verify the brochure's ambiguous material entries, MSEP abbreviation, FPM unit, motor basis, pressure-loss range, stage/compartment configuration, tank dimensions and the intended capacity basis before publishing or quoting.</span></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="05 · PROCESS FLOW" title="Process Flow Diagram (Typical)">The sequence below reproduces the brochure's typical flow. Clarifier and tube settler are shown as alternatives in the separation stage; not every installation uses both devices in series.</SectionHeading><div className={local.processBoard}><div className={local.processLane} role="list">{processStages.map(({ icon: Icon, label, title, text }) => <div className={local.processNode} role="listitem" key={title}><span>{label}</span><Icon size={25} /><strong>{title}</strong><small>{text}</small></div>)}</div><div className={local.processLegend}><span><b>WTP</b> = Water Treatment Plant</span><span><b>STP</b> = Sewage Treatment Plant</span><span><b>ETP</b> = Effluent Treatment Plant</span><span>Coagulation dosing and downstream separation remain design-dependent.</span></div></div><p className={styles.darkNote}>Do not infer chemical dosage, sludge production, treated-water quality or a universal clarifier/tube-settler arrangement from this typical diagram.</p></div></section>

      <section className={styles.section} id="applications"><div className={styles.container}><SectionHeading eyebrow="06 · APPLICATIONS" title="Applications">Flocculation equipment and operating settings vary by application. The brochure lists the following treatment contexts.</SectionHeading><div className={local.applicationGrid}>{applications.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="selection"><div className={styles.container}><SectionHeading eyebrow="07 · SYSTEM SELECTION" title="Find the Right Flocculation System">AQUEN flocculation systems are available in different configurations to suit water and wastewater treatment requirements. Final equipment selection depends on flow rate, influent characteristics, upstream chemical conditioning, mixing requirements, downstream separation and site-specific engineering considerations.</SectionHeading><div className={local.selectionGrid}><article className={local.selectionCard}><SlidersHorizontal size={23} /><h3>Selection inputs</h3><ul><li><Check size={16} />Water or wastewater flow rate</li><li><Check size={16} />Influent characteristics and suspended-solids concentration</li><li><Check size={16} />Upstream coagulation and chemical conditioning</li><li><Check size={16} />Required floc formation and downstream separation</li><li><Check size={16} />Tank configuration, space, stages and speed control</li></ul></article><article className={local.selectionCard}><ShieldCheck size={23} /><h3>Technical qualification</h3><p>Confirm material compatibility, downstream clarifier or tube-settler configuration, site installation requirements and the intended performance specification. No unverified sizing calculator or automatic equipment recommendation is included.</p><div className={local.terminology}><strong>Terminology retained</strong><span>NB = Nominal Bore · MS = Mild Steel · SS304 / SS316 = Stainless steel grades · FRP = Fibre-Reinforced Plastic · HDPE = High-Density Polyethylene · UPVC = Unplasticized Polyvinyl Chloride</span><span>MSEP is preserved as printed and is not expanded without confirmation.</span></div></article></div></div></section>

      <section className={`${styles.section} ${shared.quoteSection}`} id="quote"><div className={styles.container}><div className={shared.quoteGrid}><div><span className={styles.eyebrow}>08 · DESIGN, SUPPLY, INSTALLATION &amp; COMMISSIONING</span><h2>Discuss your flocculation requirement.</h2><p>Share your application, flow, water-quality data, preferred equipment type and downstream separation arrangement. AQUEN can review the suitable configuration without assuming a universal chemical program or treatment guarantee.</p><div className={styles.ctaChecklist}><span><Check size={16} />Horizontal, vertical or inline options</span><span><Check size={16} />Mechanical multi-stage configurations</span><span><Check size={16} />Tank-mounted and lamella arrangements</span><span><Check size={16} />WTP, STP and ETP applications</span></div><div className={shared.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={14} /></a><a href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={shared.formCard}><span className={shared.formEyebrow}>Request technical details</span><h3>Enquire About Flocculation Systems</h3><p>Provide your application, required flow and preferred equipment context. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Flocculation Systems Solution Enquiry" /><input type="hidden" name="Source Page" defaultValue="Flocculation Systems Solution Page" /><div className={shared.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>Application type<select name="Application type" defaultValue=""><option value="" disabled>Select application</option><option>Drinking Water Treatment (WTP)</option><option>Sewage Treatment Plant (STP)</option><option>Effluent Treatment Plant (ETP)</option><option>Industrial Wastewater</option><option>Tertiary Treatment</option><option>Mining &amp; Process Water</option></select></label><label>Required flow / capacity<input name="Required flow or capacity" type="text" placeholder="Example: 100 KLD" /></label><label>Preferred equipment type<select name="Preferred equipment type" defaultValue=""><option value="" disabled>Select equipment</option>{flocculators.map((item) => <option key={item.title}>{item.title}</option>)}<option>Not sure yet</option></select></label><label>Available water-quality data<input name="Available water-quality data" type="text" placeholder="TSS, turbidity, COD, etc." /></label><label className={shared.fieldFull}>Additional requirements<textarea name="Message" required placeholder="Tell us about coagulation, mixing, downstream separation, materials or site requirements." /></label></div><div className={shared.formSubmit}><button type="submit">Request Technical Specifications <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="09 · FLOCCULATION FAQ" title="Questions to resolve before specifying equipment">The page preserves brochure values while identifying where units, materials, process conditions and equipment arrangements need confirmation.</SectionHeading><div className={styles.faqList}><details className={styles.faqItem}><summary>Does flocculation remove every dissolved contaminant?<span>+</span></summary><p>No. Flocculation supports particle aggregation and downstream separation. Actual removal of COD, BOD, colour, turbidity, heavy metals or dissolved contaminants depends on the complete treatment process and water chemistry.</p></details><details className={styles.faqItem}><summary>What does 10–40 FPM mean?<span>+</span></summary><p>The brochure lists 10–40 FPM for several agitator configurations. Preserve this value as printed and confirm the intended meaning and unit before converting it to another speed measure.</p></details><details className={styles.faqItem}><summary>Is MSEP a defined material standard here?<span>+</span></summary><p>MSEP is preserved as printed in the brochure. Its expansion and exact material standard should be confirmed by AQUEN or the manufacturer.</p></details><details className={styles.faqItem}><summary>Does a lamella flocculator always include a tube settler?<span>+</span></summary><p>The brochure presents a Lamella Flocculator with Tube Settler as a combined arrangement. Confirm the actual product configuration, as a tube settler is a settling component and not every installation uses the same arrangement.</p></details></div></div></section>
    </main>
    <Footer />
  </div>;
}
