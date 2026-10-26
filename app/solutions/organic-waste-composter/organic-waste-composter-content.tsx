import Link from "next/link";
import {
  Apple,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  Factory,
  Filter,
  Gauge,
  HardHat,
  HeartPulse,
  Hotel,
  Landmark,
  Leaf,
  Layers3,
  MapPinned,
  PackageCheck,
  PanelsTopLeft,
  Recycle,
  School,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sprout,
  Trash2,
  Utensils,
  Warehouse,
  Waves,
  Wind,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Footer from "@/app/layouts/footer";
import Header from "@/app/layouts/header";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import shared from "../cation-bed/cation-bed.module.css";
import local from "./organic-waste-composter.module.css";

type TableRow = readonly string[];

type ComposterType = {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  specs: TableRow[];
  application: string;
};

const composters: ComposterType[] = [
  {
    number: "01",
    title: "Manual Composter (Static Type)",
    icon: Layers3,
    description: "A simple, economical system with manual loading and unloading for smaller organic-waste quantities.",
    features: ["Simple and economical design", "Manual loading and unloading", "Suitable for small quantities", "Ideal for residential and small commercial use"],
    application: "Residential and small commercial use",
    specs: [
      ["Capacity", "50–500 kg/day"],
      ["Size (L × W × H)", "1.2 × 1.0 × 1.0 m to 2.5 × 1.5 × 1.2 m"],
      ["Material", "MS with Epoxy / FRP / HDPE"],
      ["Insulation", "Optional"],
      ["Loading", "Manual"],
      ["Operating Batch", "15–30 days"],
      ["Power Requirement", "Nil"],
      ["Output", "Compost (80–90% reduction)"],
    ],
  },
  {
    number: "02",
    title: "Automatic Composter (Rotary Drum Type)",
    icon: Settings2,
    description: "A rotary-drum system for medium to large quantities with automatic operation and selectable odour-control options.",
    features: ["Fully automatic operation", "Continuous or batch process", "Fast composting (24–48 hrs)", "Odour control system with biofilter", "Suitable for medium to large quantities"],
    application: "Medium to large quantity applications",
    specs: [
      ["Capacity", "50–2000 kg/day"],
      ["Size (L × W × H)", "2.0 × 0.4 × 1.5 m to 3.5 × 0.4 × 2.0 m"],
      ["Material", "SS 304 / MS with coating"],
      ["Drive Motor", "0.75–5.0 kW"],
      ["Operating Mode", "Continuous / Batch"],
      ["Processing Time", "24–48 hours"],
      ["Control Panel", "PLC with sensors"],
      ["Odour Control", "Biofilter / UV / Scrubber"],
      ["Output", "Compost (80–90% reduction)"],
    ],
  },
  {
    number: "03",
    title: "In-Vessel Composter",
    icon: Warehouse,
    description: "A closed, compact system with automatic mixing and aeration for institutional and commercial organic-waste applications.",
    features: ["Closed and hygienic system", "Automatic mixing and aeration", "Odour-free with biofilter / UV", "Suitable for institutional and commercial use", "Compact footprint"],
    application: "Institutional and commercial use",
    specs: [
      ["Capacity", "100–3000 kg/day"],
      ["Size (L × W × H)", "2.0 × 1.5 × 2.5 m to 6.0 × 2.5 × 3.0 m"],
      ["Material", "SS 304 / MS with coating"],
      ["Aeration System", "Blower with diffusers"],
      ["Mixing System", "Automatic"],
      ["Processing Time", "24–48 hours"],
      ["Control Panel", "PLC with HMI"],
      ["Odour Control", "Biofilter / Chemical scrubber"],
      ["Output", "Compost (80–90% reduction)"],
    ],
  },
  {
    number: "04",
    title: "Organic Waste Composting Bin (Modular)",
    icon: PackageCheck,
    description: "Expandable manual bins for small to medium quantities, with the number of bins selected according to the project requirement.",
    features: ["Modular design (expandable)", "Manual operation", "Suitable for small to medium quantity", "FRP / HDPE / MS with coating"],
    application: "Small to medium quantity applications",
    specs: [
      ["Capacity", "10–200 kg/day per unit"],
      ["Size (L × W × H)", "0.6 × 0.6 × 0.6 m to 1.2 × 1.2 × 1.2 m"],
      ["Material", "FRP / HDPE / MS"],
      ["No. of Bins", "4–10 per requirement"],
      ["Loading", "Manual"],
      ["Processing Time", "15–30 days"],
      ["Power Requirement", "Nil"],
      ["Output", "Compost (80–90% reduction)"],
    ],
  },
  {
    number: "05",
    title: "Continuous Composter",
    icon: Recycle,
    description: "A larger-capacity system with continuous feeding and discharge, lower manpower needs, and automated temperature and aeration control.",
    features: ["Continuous feeding and discharge", "High efficiency and low manpower", "Suitable for large quantities", "Automated temperature and aeration control"],
    application: "Large quantity applications",
    specs: [
      ["Capacity", "500–5000 kg/day"],
      ["Size (L × W × H)", "4.0 × 1.5 × 2.0 m to 10.0 × 3.0 × 2.5 m"],
      ["Material", "MS with coating / SS 304"],
      ["Drive Motor", "1.5–7.5 kW"],
      ["Feeding System", "Screw feeder"],
      ["Processing Time", "24–48 hours"],
      ["Control Panel", "PLC with sensors"],
      ["Odour Control", "Biofilter / Scrubber"],
      ["Output", "Compost (80–90% reduction)"],
    ],
  },
  {
    number: "06",
    title: "Community / Decentralized Composter",
    icon: Building2,
    description: "A modular or aesthetic configuration for societies, campuses and parks, with custom capacity and optional aeration.",
    features: ["Suitable for societies, campuses, parks", "Aesthetic design", "Odourless operation", "Available in MS / FRP / HDPE", "Custom capacity as per requirement"],
    application: "Societies, campuses and parks",
    specs: [
      ["Capacity", "500–10000 kg/day"],
      ["Size (L × W × H)", "1.5 × 1.0 × 1.2 m to 4.0 × 2.0 × 1.5 m"],
      ["Material", "MS with Epoxy / FRP / HDPE"],
      ["Design", "Modular / Aesthetic"],
      ["Loading", "Manual / Semi-Automatic"],
      ["Processing Time", "15–30 days"],
      ["Power Requirement", "Optional (Aeration)"],
      ["Output", "Compost (80–90% reduction)"],
    ],
  },
];

const heroBenefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Leaf, title: "Eco-friendly", text: "A brochure-listed approach to managing biodegradable organic waste." },
  { icon: ShieldCheck, title: "Robust and reliable design", text: "A company-listed benefit; final configuration and duty require confirmation." },
  { icon: Gauge, title: "Low operating cost", text: "A brochure-listed benefit; actual operating cost depends on model and site conditions." },
  { icon: Recycle, title: "Reduces landfill waste", text: "Supports diversion of selected biodegradable feedstock to biological processing." },
  { icon: Sprout, title: "Produces useful compost", text: "Compost quality and suitability depend on feedstock, operation and applicable testing." },
  { icon: Building2, title: "Suitable for various sectors", text: "Six configurations are presented for a range of residential, commercial and institutional contexts." },
];

const processStages: { icon: LucideIcon; label: string; title: string; text: string }[] = [
  { icon: Trash2, label: "01 · INPUT", title: "Organic Waste", text: "Food waste, garden waste and canteen waste are collected for processing." },
  { icon: Filter, label: "02 · PREPARE", title: "Sorting & Pre-treatment", text: "Unwanted materials are separated and the feedstock is prepared for the selected system." },
  { icon: Settings2, label: "03 · BIOLOGICAL", title: "Composting System", text: "Biological decomposition takes place in the selected manual, automatic, in-vessel, continuous or modular system." },
  { icon: Clock3, label: "04 · MATURE", title: "Curing & Maturation", text: "Partially processed material is allowed to mature as required by the system and compost-quality objective." },
  { icon: Sprout, label: "05 · OUTPUT", title: "Final Compost", text: "Finished material is assessed for its intended use; quality depends on feedstock, conditions and testing." },
];

const comparisonRows: TableRow[] = [
  ["Manual Composter (Static Type)", "50–500 kg/day", "Manual", "MS with Epoxy / FRP / HDPE", "15–30 days", "Nil", "Residential and small commercial"],
  ["Automatic Composter (Rotary Drum Type)", "50–2000 kg/day", "Continuous / Batch", "SS 304 / MS with coating", "24–48 hours", "0.75–5.0 kW drive motor", "Medium to large quantities"],
  ["In-Vessel Composter", "100–3000 kg/day", "Automatic mixing and aeration", "SS 304 / MS with coating", "24–48 hours", "Not specified in brochure", "Institutional and commercial"],
  ["Organic Waste Composting Bin (Modular)", "10–200 kg/day per unit", "Manual", "FRP / HDPE / MS", "15–30 days", "Nil", "Small to medium quantity"],
  ["Continuous Composter", "500–5000 kg/day", "Continuous feeding and discharge", "MS with coating / SS 304", "24–48 hours", "1.5–7.5 kW drive motor", "Large quantities"],
  ["Community / Decentralized Composter", "500–10000 kg/day", "Manual / Semi-Automatic", "MS with Epoxy / FRP / HDPE", "15–30 days", "Optional (Aeration)", "Societies, campuses and parks"],
];

const industries: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Building2, title: "Residential Societies", text: "On-site management of selected biodegradable household and community waste." },
  { icon: Hotel, title: "Hotels & Restaurants", text: "Food-waste handling for hospitality and food-service operations." },
  { icon: Landmark, title: "Commercial Buildings", text: "Organic-waste processing for offices and commercial premises." },
  { icon: School, title: "Educational Institutions", text: "Campus food and garden waste management subject to site review." },
  { icon: HeartPulse, title: "Hospitals", text: "Application-specific biodegradable waste management requiring segregation review." },
  { icon: Landmark, title: "Municipal Bodies", text: "Decentralized or community-scale organic-waste processing programs." },
  { icon: Factory, title: "Food Processing Industry", text: "Processing of suitable organic by-products and food waste streams." },
  { icon: Apple, title: "Vegetable & Fruit Markets", text: "Handling of selected biodegradable market waste at source." },
  { icon: Waves, title: "Resorts & Clubs", text: "Organic-waste management for hospitality, recreation and landscape operations." },
  { icon: Utensils, title: "Industrial Canteens", text: "Food-waste processing for industrial workplace canteens." },
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, label, className = "" }: { headers: string[]; rows: TableRow[]; label: string; className?: string }) {
  return <div className={`${styles.tableWrap} ${className}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProductPanel({ item }: { item: ComposterType }) {
  const Icon = item.icon;
  return <div className={local.productPanel}><div className={local.productPanelMark}><Icon size={43} /><span>{item.number} / 06</span></div><strong>Organic waste composter</strong><small>Approved product image to be supplied or confirmed.</small></div>;
}

function HeroVisual() {
  return <div className={styles.heroVisual}><div className={local.heroVisual}><div className={local.heroVisualOrb} aria-hidden="true" /><div className={local.heroVisualTitle}><span>Organic waste pathway</span><strong>Waste → Compost</strong></div><div className={local.heroVisualNodes}><div><Trash2 size={22} /><span>Biodegradable input</span></div><ArrowRight size={20} aria-hidden="true" /><div className={local.heroVisualNodeActive}><Sprout size={22} /><span>Useful compost</span></div></div><div className={local.heroVisualFooter}><span>6 system configurations</span><span>10–10000 kg/day ranges shown</span></div></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>Manual &amp; automatic</span></div><div className={local.heroVisualNote}>No verified composter product photograph is currently available in this repository. This is a non-representational process visual.</div><div className={styles.heroCaption}><span>Product</span><strong>Composter systems</strong><span>Applications</span><strong>Multiple sectors</strong></div></div>;
}

export default function OrganicWasteComposterContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Organic Waste Composter Systems</strong></nav><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN FLUID TECHNOLOGIES LLP · COMPLETE WATER &amp; WASTEWATER TREATMENT SOLUTIONS</span><h1>ORGANIC WASTE <em>COMPOSTER SYSTEMS</em></h1><h2>Manual &amp; Automatic</h2><p>AQUEN offers manual and automatic organic waste composter systems designed to convert biodegradable waste into useful compost. The brochure presents six configurations, from manual static composters to continuous and community-based decentralized systems, for residential, commercial, institutional, municipal and industrial applications.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About Organic Composters <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>6 TYPES</strong><span>brochure configurations</span></div><div><strong>MANUAL + AUTO</strong><span>operating approaches</span></div><div><strong>10–10000 KG/DAY</strong><span>listed capacity ranges</span></div></div><p className={styles.heroNote}>Convert Organic Waste into Valuable Compost · Typical specifications require engineering confirmation.</p></div><HeroVisual /></div></div></section>

      <section className={styles.section} id="what-is-a-composter"><div className={styles.container}><SectionHeading eyebrow="01 · ORGANIC WASTE COMPOSTING" title="What Is an Organic Waste Composter?">An Organic Waste Composter is a biological treatment system that converts biodegradable waste such as food waste, garden waste and canteen waste into nutrient-rich compost through aerobic decomposition. It reduces the volume of waste, helps manage odour and supports sustainable waste management.</SectionHeading><div className={local.explainerGrid}><div className={local.explainerVisual}><div className={local.explainerRing}><Trash2 size={28} /><span>Biodegradable<br />feedstock</span></div><div className={local.explainerArrow}><ArrowRight size={22} /></div><div className={`${local.explainerRing} ${local.explainerRingActive}`}><Sprout size={28} /><span>Compost<br />output</span></div></div><div className={local.explainerCopy}><span className={styles.eyebrow}>AEROBIC DECOMPOSITION</span><h3>Biological treatment for selected organic waste</h3><p>The selected system provides a controlled environment for aerobic decomposition. Feedstock segregation, operating conditions, curing requirements and final compost assessment remain important to the result.</p><div className={local.explainerList}><span><Check size={16} />Food, garden and canteen waste are brochure-listed examples.</span><span><Check size={16} />Not every model accepts every material or produces the same cycle time.</span><span><Check size={16} />Compost suitability depends on quality verification and intended use.</span></div></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="types"><div className={styles.container}><SectionHeading eyebrow="02 · SIX SYSTEM CONFIGURATIONS" title="Types of Organic Waste Composter Systems">Each card preserves the brochure-listed system name, features and application context. Final selection depends on feedstock, quantity, site, operating method and project requirements.</SectionHeading><div className={local.typeGrid}>{composters.map((item) => <article className={local.typeCard} key={item.title}><ProductPanel item={item} /><div className={local.typeBody}><span>{item.number} · SYSTEM TYPE</span><h3>{item.title}</h3><p>{item.description}</p><ul>{item.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><div className={local.typeFooter}><small>{item.application}</small><a href={`#type-${item.number}`}>View specifications <ArrowRight size={14} /></a></div></div></article>)}</div></div></section>

      <section className={styles.section} id="specifications"><div className={styles.container}><SectionHeading eyebrow="03 · MODEL SPECIFICATIONS" title="Complete Technical Specifications">The following tables preserve every brochure-listed row for all six configurations. Values are typical brochure data, not universal guarantees.</SectionHeading><div className={local.specStack}>{composters.map((item) => <article className={local.specSection} id={`type-${item.number}`} key={item.title}><div className={local.specHeading}><span>{item.number} / 06</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div><DataTable headers={["Parameter", "Specification (Typical)"]} rows={item.specs} label={`${item.title} typical technical specifications`} className={local.specTable} /></article>)}</div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>The brochure's “80–90% reduction” output statement is preserved but not interpreted as compost yield. Confirm whether it describes waste volume reduction, waste-weight reduction or another measurement. Also verify operating-batch and processing-time meanings, dimensions, capacity basis, odour-control options, whether additional curing is required, and model-specific material configurations.</span></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="04 · PROCESS FLOW" title="Process Flow Diagram (Typical)">The typical sequence below separates organic-waste input, preparation, biological processing, curing and final compost. It does not add shredders, dryers, chemical dosing or other unverified equipment.</SectionHeading><div className={local.processBoard}><div className={local.processLane} role="list">{processStages.map(({ icon: Icon, label, title, text }) => <div className={local.processNode} role="listitem" key={title}><span>{label}</span><Icon size={25} /><strong>{title}</strong><small>{text}</small></div>)}</div><div className={local.processLegend}><span><b>Typical feedstock:</b> food waste · garden waste · canteen waste</span><span><b>System choice:</b> manual / automatic / in-vessel / continuous / modular</span><span><b>Quality:</b> curing and testing depend on the selected system and intended use</span></div></div><p className={styles.darkNote}>Active processing time is not the same as fully matured compost readiness. The selected system, feedstock and compost-quality requirements determine the necessary curing and maturation approach.</p></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="benefits"><div className={styles.container}><SectionHeading eyebrow="05 · KEY BENEFITS" title="Key Product Benefits">These are brochure-listed benefits presented without unsupported numeric claims about carbon savings, energy savings, landfill diversion, compost nutrient content or payback.</SectionHeading><div className={styles.featureGrid}>{heroBenefits.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section} id="comparison"><div className={styles.container}><SectionHeading eyebrow="06 · CONFIGURATION COMPARISON" title="Compare the Six Composter Configurations">This comparison is a compact reference using only the brochure-listed data. It does not rank systems or recommend a model without project information.</SectionHeading><DataTable headers={["System type", "Capacity", "Operating method", "Material", "Processing time", "Power requirement", "Application"]} rows={comparisonRows} label="Organic waste composter configuration comparison" className={local.comparisonTable} /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Processing time may describe an active processing stage rather than finished compost maturity. “Not specified in brochure” is retained where the supplied content does not provide a value.</span></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="applications"><div className={styles.container}><SectionHeading eyebrow="07 · APPLICATIONS" title="Sectors &amp; Applications">The brochure presents ten application categories. Suitability depends on feedstock segregation, quantity, operating environment, site area and the selected configuration.</SectionHeading><div className={local.industryGrid}>{industries.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="selection"><div className={styles.container}><SectionHeading eyebrow="08 · SYSTEM SELECTION" title="Match the system to the organic-waste requirement">AQUEN can review the estimated organic-waste quantity, feedstock, operating method, site context, odour-control needs, power availability, curing arrangement and intended use of the final compost before proposing a configuration.</SectionHeading><div className={local.selectionGrid}><article className={local.selectionCard}><SlidersHorizontal size={23} /><h3>Selection inputs</h3><ul><li><Check size={16} />Estimated organic waste quantity per day</li><li><Check size={16} />Food, garden, canteen or other selected feedstock</li><li><Check size={16} />Manual, semi-automatic or automatic operation</li><li><Check size={16} />Available footprint, power and odour-control context</li></ul></article><article className={local.selectionCard}><ShieldCheck size={23} /><h3>Qualification notes</h3><p>Do not treat a capacity range, processing time or output-reduction figure as a universal performance guarantee. Final compost quality and suitability require appropriate operating control and testing for the intended use.</p></article></div></div></section>

      <section className={`${styles.section} ${shared.quoteSection}`} id="quote"><div className={styles.container}><div className={shared.quoteGrid}><div><span className={styles.eyebrow}>09 · DESIGN, SUPPLY, INSTALLATION &amp; COMMISSIONING</span><h2>Discuss your organic-waste requirement.</h2><p>Share your daily quantity, feedstock, application, preferred operating method and site context. AQUEN can review the six brochure-listed configurations and the requirements for sorting, composting, curing and maturation.</p><div className={styles.ctaChecklist}><span><Check size={16} />Manual and automatic options</span><span><Check size={16} />10–10000 kg/day ranges shown</span><span><Check size={16} />Residential, commercial and institutional applications</span><span><Check size={16} />Configuration-specific technical review</span></div><div className={shared.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={14} /></a><a href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={shared.formCard}><span className={shared.formEyebrow}>Request technical details</span><h3>Enquire About Organic Composters</h3><p>Share the operating context and selected or preferred system type. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Organic Waste Composter Solution Enquiry" /><input type="hidden" name="Source Page" defaultValue="Organic Waste Composter Solution Page" /><div className={shared.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company / Organization *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>Sector / application<input name="Sector or application" type="text" placeholder="Society, hotel, canteen, etc." /></label><label>Organic waste quantity per day<input name="Estimated organic waste quantity per day" type="text" placeholder="Example: 500 kg/day" /></label><label>Preferred composter type<select name="Preferred composter type" defaultValue=""><option value="" disabled>Select system type</option>{composters.map((item) => <option key={item.title}>{item.title}</option>)}<option>Not sure yet</option></select></label><label>Site location<input name="Site location" type="text" autoComplete="address-level2" placeholder="City, state" /></label><label className={shared.fieldFull}>Additional requirements<textarea name="Message" required placeholder="Tell us about feedstock, operating method, site area, odour control or compost-use requirements." /></label></div><div className={shared.formSubmit}><button type="submit">Request Technical Specifications <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="10 · COMPOSTER FAQ" title="Questions to resolve before specifying a system">The page preserves brochure values while identifying where feedstock, processing time, output measurement and system configuration need confirmation.</SectionHeading><div className={styles.faqList}><details className={styles.faqItem}><summary>Does 24–48 hours mean finished compost is ready?<span>+</span></summary><p>Not necessarily. For the automatic, in-vessel and continuous systems, 24–48 hours is preserved as brochure-listed processing time. Confirm whether it refers to an active processing stage and whether additional curing or maturation is required.</p></details><details className={styles.faqItem}><summary>What does “80–90% reduction” mean?<span>+</span></summary><p>The brochure statement is preserved in the specification tables, but its measurement is unclear. It must not be interpreted as compost yield; confirm whether it refers to volume, weight or another basis.</p></details><details className={styles.faqItem}><summary>Can every model process every organic waste stream?<span>+</span></summary><p>No. Feedstock, segregation, quantity and operating conditions should be reviewed against the selected system. Food, garden and canteen waste are brochure-listed examples.</p></details><details className={styles.faqItem}><summary>Is the modular bin capacity for one bin or the full installation?<span>+</span></summary><p>The brochure states 10–200 kg/day per unit and 4–10 bins per requirement. Confirm the complete installation capacity and package scope before ordering.</p></details><details className={styles.faqItem}><summary>Is compost automatically suitable for agricultural use?<span>+</span></summary><p>No. Compost quality and suitability depend on feedstock, operation, maturation and appropriate testing for the intended use.</p></details></div></div></section>
    </main>
    <Footer />
  </div>;
}
