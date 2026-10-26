import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Beaker,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  Factory,
  Filter,
  Gauge,
  GitMerge,
  Layers3,
  Pipette,
  Recycle,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Waves,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Footer from "@/app/layouts/footer";
import Header from "@/app/layouts/header";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import shared from "../cation-bed/cation-bed.module.css";
import local from "../flocculation-systems/flocculation-systems.module.css";

type TableRow = readonly string[];

type CoagulationType = {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  specs: TableRow[];
  application: string;
};

const systems: CoagulationType[] = [
  {
    number: "01",
    title: "Flash Mixer (Rapid Mix)",
    icon: Wind,
    description: "A rapid-mixing arrangement for uniform coagulant distribution and particle destabilization in WTP, STP and ETP applications.",
    features: ["Rapid and uniform mixing of coagulant", "High-efficiency impeller design", "MS / SS / FRP options", "Suitable for WTP / STP / ETP"],
    application: "WTP / STP / ETP",
    specs: [
      ["Capacity", "5–200 KLD"],
      ["Tank Type", "Cylindrical / Square"],
      ["Material", "MS / SS304 / SS316 / FRP"],
      ["Tank Diameter", "0.5–2.0 m"],
      ["Tank Height", "1.0–3.0 m"],
      ["HRT", "30–60 seconds"],
      ["Agitator Type", "High Speed"],
      ["Motor", "0.37–5.5 kW"],
      ["Impeller", "SS316 / FRP"],
      ["Inlet / Outlet Size", "25 NB – 150 NB"],
    ],
  },
  {
    number: "02",
    title: "Coagulation Reaction Tank",
    icon: GitMerge,
    description: "A baffled reaction tank that provides controlled mixing and retention time for coagulant-conditioned water or wastewater.",
    features: ["Controlled mixing and retention time", "Baffled design for uniform mixing", "MS / FRP / MSEP / SS options, subject to confirmation", "Customized capacities"],
    application: "Water and wastewater reaction treatment",
    specs: [
      ["Capacity", "10–500 KLD"],
      ["Tank Type", "Rectangular"],
      ["Material", "MS / HDPE / SS / FRP"],
      ["Length", "1.0–6.0 m"],
      ["Width", "1.0–3.0 m"],
      ["Height", "1.5–3.0 m"],
      ["HRT", "5–15 minutes"],
      ["Agitator Type", "Medium Speed"],
      ["Motor", "0.37–5.5 kW"],
      ["Baffle", "Included"],
      ["Inlet / Outlet Size", "50 NB – 250 NB"],
    ],
  },
  {
    number: "03",
    title: "Coagulant Dosing System",
    icon: Pipette,
    description: "A chemical dosing arrangement with dosing pump, chemical tank, controls and associated accessories, selected from the treatment design.",
    features: ["Dosing pump, chemical tank and controls", "Auto or manual control options", "Level switch, agitator and calibration column listed", "Chemical selection requires process evaluation or jar testing"],
    application: "Coagulant conditioning",
    specs: [
      ["Dosing Capacity", "50–1000 LPH"],
      ["Dosing Pump Type", "Diaphragm / Peristaltic"],
      ["Tank Material", "HDPE / FRP / SS304"],
      ["Tank Capacity", "100–2000 L"],
      ["Motor", "0.18–0.75 kW"],
      ["Control", "Auto / Manual (Flow / pH / Turbidity)"],
      ["Accessories", "Level Switch, Agitator, Calibration Column"],
      ["Chemical", "Alum, PAC, Ferric Chloride, etc."],
    ],
  },
  {
    number: "04",
    title: "Inline Static Mixer",
    icon: Filter,
    description: "A stationary-element mixer for distributing injected chemicals through a flowing stream without moving parts.",
    features: ["No moving parts; low maintenance", "Efficient mixing with minimum pressure loss", "Suitable for coagulant / pH correction", "UPVC / SS construction"],
    application: "Coagulant / pH correction",
    specs: [
      ["Size", "25 NB – 300 NB"],
      ["Material", "UPVC / SS304 / SS316"],
      ["Type", "Static / No moving parts"],
      ["Mixing Element", "Helical / Cross baffle"],
      ["Pressure Loss", "0.1–0.3 bar"],
      ["Installation", "Horizontal / Vertical"],
      ["Application", "Coagulant / pH correction"],
      ["Flow Range", "1–500 m³/hr"],
    ],
  },
  {
    number: "05",
    title: "Chemical Preparation Tank",
    icon: Beaker,
    description: "A tank arrangement for preparing alum or PAC solutions with selected material, slow-speed agitation and accessories.",
    features: ["Preparation of alum / PAC solutions", "HDPE / FRP / SS construction", "Agitator with slow-speed motor", "Suitable for bulk chemical storage and preparation"],
    application: "Alum / PAC solution preparation",
    specs: [
      ["Capacity", "500–5000 L"],
      ["Material", "HDPE / FRP / SS304"],
      ["Diameter", "1.0–2.5 m"],
      ["Height", "1.0–3.0 m"],
      ["Agitator Type", "Slow Speed"],
      ["Motor", "0.18–1.5 kW"],
      ["Accessories", "Manhole, Level Switch, Drain"],
      ["Application", "Alum / PAC Solution Preparation"],
    ],
  },
  {
    number: "06",
    title: "Flocculation Tank",
    icon: Layers3,
    description: "A gentle-mixing tank for floc formation before a suitable clarifier, DAF or filtration stage.",
    features: ["Gentle mixing for floc formation", "Multi-compartment design", "MS / FRP / MSEP / SS options, subject to verification", "Suitable for clarifier / DAF / filtration applications"],
    application: "Clarifier / DAF / filtration applications",
    specs: [
      ["Capacity", "10–500 KLD"],
      ["Tank Type", "Rectangular"],
      ["Material", "MS / HDPE / SS / FRP"],
      ["Length", "2.0–8.0 m"],
      ["Width", "1.0–3.0 m"],
      ["Height", "1.5–3.0 m"],
      ["HRT", "15–45 minutes"],
      ["Agitator Type", "Slow Speed (Paddle)"],
      ["Motor", "0.37–5.5 kW"],
      ["Inlet / Outlet Size", "50 NB – 250 NB"],
    ],
  },
];

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Filter, title: "Improves treatment of suspended matter", text: "The brochure lists TSS, colour, turbidity, COD and BOD; actual removal depends on chemistry, mixing and downstream separation." },
  { icon: ShieldCheck, title: "Essential pretreatment", text: "Coagulation can prepare water for clarification and filtration where required by the treatment design." },
  { icon: Building2, title: "Municipal, industrial and sewage use", text: "Suitable application contexts listed in the brochure; equipment and operating settings remain application-specific." },
  { icon: Recycle, title: "Supports organic-load and heavy-metal reduction", text: "The brochure lists these benefits, but no universal removal efficiency or contaminant guarantee is implied." },
  { icon: Gauge, title: "Compact and easy to operate", text: "A brochure-listed benefit subject to the selected equipment, controls, installation and operating conditions." },
  { icon: SlidersHorizontal, title: "Custom design", text: "Equipment can be configured according to flow, water quality, chemical conditioning and process requirements." },
];

const processStages: { icon: LucideIcon; label: string; title: string; text: string }[] = [
  { icon: Waves, label: "01 · INLET", title: "Raw Water / Wastewater Inlet", text: "Water or wastewater enters the treatment system; its characteristics guide the design." },
  { icon: Pipette, label: "02 · DOSING", title: "Coagulant Dosing System", text: "A selected coagulant is dosed according to the process requirements." },
  { icon: Wind, label: "03 · RAPID MIX", title: "Flash Mixer", text: "Rapid mixing distributes coagulant and promotes destabilization of suspended and colloidal particles." },
  { icon: GitMerge, label: "04 · GENTLE MIX", title: "Flocculation Tank", text: "Gentle mixing encourages destabilized particles to form larger flocs." },
  { icon: Layers3, label: "05 · SEPARATION", title: "Clarifier / DAF / Filter", text: "A suitable downstream process removes flocs; the choice is design-dependent." },
  { icon: Check, label: "06 · OUTLET", title: "Treated Water", text: "The treated stream proceeds to the next stage or intended application subject to required quality." },
];

const applications: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Building2, title: "Drinking Water Treatment (WTP)", text: "Coagulation where required by raw-water characteristics and the treatment design." },
  { icon: Waves, title: "Sewage Treatment Plant (STP)", text: "Chemical treatment for suitable sewage-treatment applications." },
  { icon: Factory, title: "Effluent Treatment Plant (ETP)", text: "Coagulation for selected industrial wastewater streams." },
  { icon: Settings2, title: "Industrial Wastewater", text: "Chemical destabilization of suspended or colloidal matter, depending on wastewater characteristics." },
  { icon: Filter, title: "Tertiary Treatment", text: "Additional chemical treatment where required to achieve the specified downstream water quality." },
  { icon: Recycle, title: "Sludge Thickening", text: "Relevant coagulation or flocculation applications where supported by the process design." },
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, label, className = "" }: { headers: string[]; rows: TableRow[]; label: string; className?: string }) {
  return <div className={`${styles.tableWrap} ${className}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProductPanel({ item }: { item: CoagulationType }) {
  const Icon = item.icon;
  return <div className={local.productPanel}><div className={local.productPlaceholder}><Icon size={42} /><span>Approved coagulation-equipment image to be supplied or confirmed.</span></div><div className={local.productPanelLabel}><span>{item.number} / 06</span><small>Configuration reference</small></div></div>;
}

function HeroVisual() {
  return <div className={styles.heroVisual}><div className={styles.heroVisualFrame}><Image src="/lamella-settler-img.png" alt="Water-treatment equipment reference with chemical dosing pumps and settling vessel" fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>Coagulation reference</span></div><div className={local.heroImageNote}>Existing water-treatment asset shown as a related process reference. It is not presented as a specific AQUEN flash mixer, dosing system or project photograph.</div><div className={styles.heroCaption}><span>Applications</span><strong>WTP · STP · ETP</strong><span>Equipment</span><strong>6 configurations</strong></div></div>;
}

export default function CoagulationSystemsContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Coagulation Systems</strong></nav><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN FLUID TECHNOLOGIES LLP · COMPLETE WATER &amp; WASTEWATER TREATMENT SOLUTIONS</span><h1>COAGULATION <em>SYSTEMS</em></h1><h2>For WTP | STP | ETP</h2><p>AQUEN offers coagulation system solutions for water and wastewater treatment applications. The brochure presents equipment for coagulant dosing, rapid mixing, coagulation reaction, inline mixing, chemical preparation and flocculation. These systems support destabilization and aggregation of suspended and colloidal particles before downstream clarification, flotation or filtration.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About Coagulation Systems <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>6 TYPES</strong><span>brochure configurations</span></div><div><strong>WTP · STP · ETP</strong><span>application contexts</span></div><div><strong>RAPID + CONTROLLED MIXING</strong><span>chemical conditioning</span></div></div><p className={styles.heroNote}>Effective Removal of Suspended Solids, Colour, Turbidity, COD, BOD and Heavy Metals · Actual performance is process-dependent.</p></div><HeroVisual /></div></div></section>

      <section className={styles.section} id="what-is-coagulation"><div className={styles.container}><SectionHeading eyebrow="01 · PROCESS FUNDAMENTALS" title="What Is Coagulation?">Coagulation is a chemical treatment process used to destabilize colloidal and suspended particles in water and wastewater by adding coagulants such as alum, PAC, ferric chloride, etc., and rapid mixing. The destabilized particles form larger flocs in the subsequent flocculation stage, which can then be removed by sedimentation or filtration.</SectionHeading><div className={local.explainerGrid}><div className={local.explainerVisual}><div className={local.particleCluster}><span /><span /><span /><span /><span /></div><ArrowRight size={24} aria-hidden="true" /><div className={local.flocCluster}><span /><span /><span /><span /><span /><span /></div></div><div className={local.explainerCopy}><span className={styles.eyebrow}>COAGULANT → RAPID MIX → FLOCCULATION</span><h3>Destabilize particles before downstream separation</h3><p>Coagulant dosing and rapid mixing help destabilize suspended and colloidal particles. Flocculation then promotes larger flocs, which may be separated by clarification, dissolved air flotation or filtration depending on the process design.</p><div className={local.explainerList}><span><Check size={16} />Chemical selection and dosage require process evaluation or jar testing.</span><span><Check size={16} />Mixing conditions and pH affect the result.</span><span><Check size={16} />Coagulation alone does not guarantee removal of every dissolved contaminant.</span></div></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="benefits"><div className={styles.container}><SectionHeading eyebrow="02 · KEY BENEFITS" title="Benefits of Coagulation Systems">These are brochure-listed process benefits. No numerical removal efficiency or universal contaminant guarantee is implied.</SectionHeading><div className={styles.featureGrid}>{benefits.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section} id="types"><div className={styles.container}><SectionHeading eyebrow="03 · EQUIPMENT CONFIGURATIONS" title="Types of Coagulation Systems">The six equipment configurations below preserve the brochure-listed names, features and typical specifications. Final selection depends on flow, water quality, chemical compatibility, mixing requirements and downstream separation.</SectionHeading><div className={local.typeGrid}>{systems.map((item) => <article className={local.typeCard} key={item.title}><ProductPanel item={item} /><div className={local.typeBody}><span>{item.number} · EQUIPMENT TYPE</span><h3>{item.title}</h3><p>{item.description}</p><ul>{item.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><div className={local.typeFooter}><small>{item.application}</small><a href={`#type-${item.number}`}>View specifications <ArrowRight size={14} /></a></div></div></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="specifications"><div className={styles.container}><SectionHeading eyebrow="04 · TYPICAL SPECIFICATIONS" title="Coagulation System Technical Specifications">Every parameter from the supplied brochure is retained in a separate, responsive table. Values are typical and must be checked against the approved process design and manufacturer datasheet.</SectionHeading><div className={local.specStack}>{systems.map((item) => <article className={local.specSection} id={`type-${item.number}`} key={item.title}><div className={local.specHeading}><span>{item.number} / 06</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div><DataTable headers={["Parameter", "Specification (Typical)"]} rows={item.specs} label={`${item.title} typical technical specifications`} className={local.specTable} /></article>)}</div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Verify ambiguous material entries, MSEP, treatment-capacity units, HRT applicability, motor basis, dosing LPH meaning, pressure-loss range, dimensions and accessory inclusion before publishing or quoting. Chemical dosage and consumption values are intentionally not invented.</span></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="05 · PROCESS FLOW" title="Process Flow Diagram (Typical)">The sequence below reproduces the brochure's typical coagulation flow. Clarifier, DAF and filtration are alternatives or design-dependent downstream separation stages, not necessarily one standard sequence.</SectionHeading><div className={local.processBoard}><div className={local.processLane} role="list">{processStages.map(({ icon: Icon, label, title, text }) => <div className={local.processNode} role="listitem" key={title}><span>{label}</span><Icon size={25} /><strong>{title}</strong><small>{text}</small></div>)}</div><div className={local.processLegend}><span><b>WTP</b> = Water Treatment Plant</span><span><b>STP</b> = Sewage Treatment Plant</span><span><b>ETP</b> = Effluent Treatment Plant</span><span>Coagulant, chemical dosage and downstream separation remain design-dependent.</span></div></div><p className={styles.darkNote}>Do not infer drinking-water quality, chemical consumption, sludge quantity or removal percentages from the diagram ending at “Treated Water.”</p></div></section>

      <section className={styles.section} id="applications"><div className={styles.container}><SectionHeading eyebrow="06 · APPLICATIONS" title="Applications of Coagulation Systems">Coagulation equipment and operating settings vary by application. The brochure lists the following treatment contexts.</SectionHeading><div className={local.applicationGrid}>{applications.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="selection"><div className={styles.container}><SectionHeading eyebrow="07 · TECHNICAL SELECTION" title="Find the Right Coagulation System">AQUEN coagulation systems can be configured for different water and wastewater treatment applications. Equipment selection depends on flow rate, influent characteristics, chemical requirements, mixing conditions, downstream separation and site-specific design considerations. Final sizing and chemical dosing requirements should be confirmed through process evaluation and engineering design.</SectionHeading><div className={local.selectionGrid}><article className={local.selectionCard}><SlidersHorizontal size={23} /><h3>Selection inputs</h3><ul><li><Check size={16} />Raw water or wastewater flow</li><li><Check size={16} />Suspended solids and colloidal particle characteristics</li><li><Check size={16} />Coagulant selection and chemical compatibility</li><li><Check size={16} />Rapid-mixing and flocculation requirements</li><li><Check size={16} />Clarifier, DAF or filtration configuration</li><li><Check size={16} />Space, materials, instrumentation and controls</li></ul></article><article className={local.selectionCard}><ShieldCheck size={23} /><h3>Technical qualification</h3><p>Process evaluation or jar testing should establish the suitable chemical and dosage. The selected dosing pump, tank material, mixer, control mode and downstream separation must be checked against the actual water or wastewater characteristics.</p><div className={local.terminology}><strong>Terminology retained</strong><span>WTP = Water Treatment Plant · STP = Sewage Treatment Plant · ETP = Effluent Treatment Plant · TSS = Total Suspended Solids · COD = Chemical Oxygen Demand · BOD = Biochemical Oxygen Demand · PAC = Poly Aluminium Chloride</span><span>HRT = Hydraulic Retention Time · LPH = Litres Per Hour · KLD = Kilolitres Per Day · NB = Nominal Bore · DAF = Dissolved Air Flotation</span><span>MS, SS304 / SS316, UPVC, HDPE and FRP are preserved as brochure-listed material terms. MSEP is not expanded without confirmation.</span></div></article></div></div></section>

      <section className={`${styles.section} ${shared.quoteSection}`} id="quote"><div className={styles.container}><div className={shared.quoteGrid}><div><span className={styles.eyebrow}>08 · DESIGN, SUPPLY, INSTALLATION &amp; COMMISSIONING</span><h2>Discuss your coagulation requirement.</h2><p>Share your application, flow, water-quality data, chemical context, equipment of interest and downstream separation arrangement. AQUEN can review the suitable configuration without assuming a universal dosage or treatment guarantee.</p><div className={styles.ctaChecklist}><span><Check size={16} />Flash mixers and reaction tanks</span><span><Check size={16} />Coagulant dosing and preparation systems</span><span><Check size={16} />Inline static mixers</span><span><Check size={16} />Flocculation and downstream separation context</span></div><div className={shared.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={14} /></a><a href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={shared.formCard}><span className={shared.formEyebrow}>Request technical details</span><h3>Enquire About Coagulation Systems</h3><p>Provide your application, required flow, water-quality context and equipment interest. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Coagulation Systems Solution Enquiry" /><input type="hidden" name="Source Page" defaultValue="Coagulation Systems Solution Page" /><div className={shared.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company / Organization *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>Application type<select name="Application type" defaultValue=""><option value="" disabled>Select application</option><option>Drinking Water Treatment (WTP)</option><option>Sewage Treatment Plant (STP)</option><option>Effluent Treatment Plant (ETP)</option><option>Industrial Wastewater</option><option>Tertiary Treatment</option><option>Sludge Thickening</option><option>Other</option></select></label><label>Required flow / capacity<input name="Required flow or capacity" type="text" placeholder="Example: 100 KLD" /></label><label>Equipment of interest<select name="Equipment of interest" defaultValue=""><option value="" disabled>Select equipment</option>{systems.map((item) => <option key={item.title}>{item.title}</option>)}<option>Not sure yet</option></select></label><label>Water-quality information<input name="Water-quality information" type="text" placeholder="TSS, turbidity, COD, pH, etc." /></label><label className={shared.fieldFull}>Additional requirements<textarea name="Message" required placeholder="Tell us about coagulant, mixing, downstream separation, materials or site requirements." /></label></div><div className={shared.formSubmit}><button type="submit">Request Technical Specifications <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="09 · COAGULATION FAQ" title="Questions to resolve before specifying equipment">The page preserves brochure values while identifying where chemical selection, units, materials, sizing and downstream separation need confirmation.</SectionHeading><div className={styles.faqList}><details className={styles.faqItem}><summary>Does coagulation alone remove every listed contaminant?<span>+</span></summary><p>No. Coagulation destabilizes selected particles and supports downstream separation. Actual COD, BOD, colour, turbidity, heavy-metal or dissolved-contaminant removal depends on the complete treatment process and water chemistry.</p></details><details className={styles.faqItem}><summary>Does the dosing capacity in LPH equal the treatment capacity?<span>+</span></summary><p>No. The brochure lists 50–1000 LPH for the dosing system, but the intended basis must be confirmed. It should not be confused with the water or wastewater flow capacity.</p></details><details className={styles.faqItem}><summary>What chemical should be dosed?<span>+</span></summary><p>The brochure lists alum, PAC and ferric chloride among examples. Chemical selection, concentration and dosage require process evaluation or jar testing; this page does not prescribe a chemical program.</p></details><details className={styles.faqItem}><summary>Are clarifier, DAF and filtration all included after coagulation?<span>+</span></summary><p>No. They are design-dependent downstream separation options. The final arrangement depends on the treatment objective and approved process design.</p></details><details className={styles.faqItem}><summary>What does MSEP mean?<span>+</span></summary><p>MSEP is preserved as printed in the brochure. Its expansion and exact material standard should be confirmed by AQUEN or the manufacturer.</p></details></div></div></section>
    </main>
    <Footer />
  </div>;
}
