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
  Gauge,
  GitMerge,
  Layers3,
  PackageCheck,
  Recycle,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Footer from "@/app/layouts/footer";
import Header from "@/app/layouts/header";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import shared from "../cation-bed/cation-bed.module.css";
import floc from "../flocculation-systems/flocculation-systems.module.css";
import local from "./oil-grease-removal-systems.module.css";

type TableRow = readonly string[];

type OilGreaseType = {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  specs: TableRow[];
  application: string;
};

const systems: OilGreaseType[] = [
  {
    number: "01",
    title: "Manual Oil & Grease Trap (OGT)",
    icon: Filter,
    description: "A simple gravity-separation arrangement with manual skimming for suitable small to medium flow applications.",
    features: ["Simple gravity separation", "Manual skimming of floating oil / grease", "Suitable for small to medium flows"],
    application: "Small to medium flows",
    specs: [
      ["Capacity", "5–5000 KLD"],
      ["Material", "RCC / MS / SS304 / SS316 / FRP"],
      ["Length (L)", "1.0–6.0 m"],
      ["Width (W)", "0.5–2.0 m"],
      ["Height (H)", "1.0–2.5 m"],
      ["HRT", "30–60 minutes"],
      ["Inlet / Outlet Size", "50 NB–400 NB"],
      ["Baffle Arrangement", "Yes"],
      ["Skimming", "Manual"],
    ],
  },
  {
    number: "02",
    title: "Automatic Oil Skimmer (Belt Type)",
    icon: Settings2,
    description: "A continuous belt-type skimmer for suitable medium to high flow applications, with an available collection tank.",
    features: ["Continuous automatic skimming", "Belt-type oil collection", "Suitable for medium to high flows", "Available with a collection tank"],
    application: "STP / ETP / Industrial",
    specs: [
      ["Capacity", "10–5000 KLD"],
      ["Material", "SS304 / SS316"],
      ["Tank Size (L × W × H)", "1.5–8.0 m (as per flow)"],
      ["Belt Material", "SS / PU"],
      ["Drive Motor", "0.25–1.1 kW"],
      ["Oil Collection Tank", "50–500 L"],
      ["Skimming Type", "Continuous (Belt)"],
      ["Power Supply", "415 V, 3 Ph, 50 Hz"],
      ["Application", "STP / ETP / Industrial"],
    ],
  },
  {
    number: "03",
    title: "Tube Pack Oil & Grease Separator",
    icon: Layers3,
    description: "A compact separator using inclined tube / lamella pack media for suitable WTP, STP and ETP applications.",
    features: ["High separation efficiency", "Inclined tube / lamella pack media", "Compact design", "Suitable for WTP / STP / ETP"],
    application: "WTP / STP / ETP",
    specs: [
      ["Capacity", "10–5000 KLD"],
      ["Material", "MS / SS304 / SS316 / FRP"],
      ["Tube Pack Media", "PP / PVC"],
      ["Length (L)", "1.5–8.0 m"],
      ["Width (W)", "1.0–3.0 m"],
      ["Height (H)", "1.5–3.0 m"],
      ["HRT", "30–45 minutes"],
      ["Inlet / Outlet Size", "50 NB–300 NB"],
      ["Removal Efficiency", "70–90% (O&G)"],
      ["Application", "WTP / STP / ETP"],
    ],
  },
  {
    number: "04",
    title: "Dissolved Air Flotation (DAF)",
    icon: Waves,
    description: "A dissolved-air flotation arrangement using microbubbles for suitable fine oil-and-grease separation in industrial ETP applications.",
    features: ["Microbubble flotation for fine oil and grease", "High removal efficiency (greater than 90%)", "Suitable for industrial ETP"],
    application: "Industrial ETP",
    specs: [
      ["Capacity", "10–5000 KLD"],
      ["Material", "MS / SS304 / SS316"],
      ["Tank Size (L × W × H)", "2.0–12.0 m (as per flow)"],
      ["Saturator Tank", "Yes"],
      ["Air Compressor", "0.75–7.5 kW"],
      ["Recycle Pump", "Yes"],
      ["Skimming Type", "Chain / Scraper"],
      ["Removal Efficiency", "85–95% (O&G)"],
      ["Power Supply", "415 V, 3 Ph, 50 Hz"],
      ["Application", "Industrial ETP"],
    ],
  },
  {
    number: "05",
    title: "Coalescing Plate Interceptor (CPI)",
    icon: GitMerge,
    description: "A compact, modular interceptor with coalescing plates for suitable industrial and commercial applications.",
    features: ["Coalescing plates for small oil droplets", "Compact and modular design", "Suitable for industrial and commercial use"],
    application: "WTP / STP / ETP",
    specs: [
      ["Capacity", "10–5000 KLD"],
      ["Material", "SS304 / SS316 / FRP"],
      ["Plate Material", "PP / PVC / SS"],
      ["Length (L)", "1.5–8.0 m"],
      ["Width (W)", "1.0–3.0 m"],
      ["Height (H)", "1.5–3.0 m"],
      ["HRT", "20–40 minutes"],
      ["Inlet / Outlet Size", "50 NB–300 NB"],
      ["Removal Efficiency", "70–90% (O&G)"],
      ["Application", "WTP / STP / ETP"],
    ],
  },
  {
    number: "06",
    title: "Skimmer with Collection Tank",
    icon: Recycle,
    description: "An automatic skimmer arrangement with a separate oil collection tank for suitable continuous-operation applications.",
    features: ["Automatic skimmer with scraper / chain", "Separate oil collection tank", "Suitable for continuous operation", "SS304 / SS316 / FRP construction listed"],
    application: "STP / ETP / Industrial",
    specs: [
      ["Capacity", "10–5000 KLD"],
      ["Material", "MS / SS304 / SS316 / FRP"],
      ["Tank Size (L × W × H)", "1.5–8.0 m (as per flow)"],
      ["Skimming Type", "Belt / Chain"],
      ["Drive Motor", "0.25–1.1 kW"],
      ["Oil Collection Tank", "50–500 L"],
      ["Skimming Type", "Continuous"],
      ["Power Supply", "415 V, 3 Ph, 50 Hz"],
      ["Application", "STP / ETP / Industrial"],
    ],
  },
];

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "Removes oil, grease, fats and floatable solids", text: "The selected separation method targets suitable free, floating or separable oil-and-grease fractions and other floatable material." },
  { icon: ShieldCheck, title: "Protects pumps and downstream equipment", text: "Removal upstream can help protect pumps, pipelines and downstream treatment equipment from oil and grease loading." },
  { icon: Gauge, title: "Supports biological treatment", text: "Reducing suitable oil-and-grease loading can support biological treatment performance in STP / ETP applications; actual results depend on the process." },
  { icon: Building2, title: "Industrial, commercial and municipal options", text: "The brochure lists these application contexts, with final suitability determined by wastewater characteristics and design." },
  { icon: Settings2, title: "Manual and automatic options", text: "Manual traps, automatic skimmers, flotation and collection-tank arrangements are represented across the six configurations." },
  { icon: SlidersHorizontal, title: "Custom design and material choices", text: "Design can be considered against flow, oil load and site conditions; MS, SS304 / SS316, FRP and RCC are listed subject to equipment type." },
];

const processStages: { icon: LucideIcon; label: string; title: string; text: string }[] = [
  { icon: Waves, label: "01 · INLET", title: "Raw Water / Wastewater", text: "Raw water or wastewater enters the selected oil-and-grease separation unit." },
  { icon: Filter, label: "02 · SEPARATION", title: "Oil & Grease Removal System", text: "Gravity, coalescence, mechanical skimming or dissolved air flotation is selected for the application." },
  { icon: ArrowRight, label: "03 · OUTLET", title: "Treated Water to Next Process", text: "The treated-water stream continues to the next appropriate treatment stage." },
];

const applications: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Factory, title: "Food & Beverage Industry", text: "Separation of suitable floating oils, grease and fats from process wastewater." },
  { icon: Building2, title: "Dairy Industry", text: "Oil-and-grease separation for appropriate wastewater streams generated during dairy processing." },
  { icon: Recycle, title: "Edible Oil Industry", text: "Separation of oil-bearing floatables from suitable industrial wastewater." },
  { icon: Settings2, title: "Automobile & Workshop", text: "Oil separation from suitable wash-water and workshop wastewater streams." },
  { icon: Factory, title: "Petrochemical Industry", text: "Oil separation for appropriate process and wastewater applications." },
  { icon: Waves, title: "Laundry & Textile Industry", text: "Oil-and-grease separation where wastewater characteristics make the selected system suitable." },
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, label, className = "" }: { headers: string[]; rows: TableRow[]; label: string; className?: string }) {
  return <div className={`${styles.tableWrap} ${className}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProductPanel({ item }: { item: OilGreaseType }) {
  const Icon = item.icon;
  return <div className={floc.productPanel}><div className={floc.productPlaceholder}><Icon size={42} /><span>Dedicated oil-and-grease equipment photograph to be supplied or confirmed.</span></div><div className={floc.productPanelLabel}><span>{item.number} / 06</span><small>Configuration reference</small></div></div>;
}

function HeroVisual() {
  return <div className={styles.heroVisual}><div className={styles.heroVisualFrame}><Image src="/clarifier.png" alt="Related water-treatment equipment reference" fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>Separation reference</span></div><div className={local.heroImageNote}>Existing water-treatment asset shown as a related process reference. It is not presented as a specific AQUEN oil-and-grease equipment photograph.</div><div className={styles.heroCaption}><span>Applications</span><strong>WTP · STP · ETP</strong><span>Equipment</span><strong>6 configurations</strong></div></div>;
}

export default function OilGreaseRemovalSystemsContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Oil &amp; Grease Removal Systems</strong></nav><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN FLUID TECHNOLOGIES LLP · COMPLETE WATER &amp; WASTEWATER TREATMENT SOLUTIONS</span><h1>OIL &amp; GREASE <em>REMOVAL SYSTEMS</em></h1><h2>For WTP | STP | ETP</h2><p>AQUEN offers oil and grease removal systems for suitable water and wastewater treatment applications. Available configurations include manual oil and grease traps, automatic oil skimmers, tube-pack separators, dissolved air flotation systems, coalescing plate interceptors and skimmers with collection tanks.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About Oil &amp; Grease Removal <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>6 TYPES</strong><span>brochure configurations</span></div><div><strong>WTP · STP · ETP</strong><span>application contexts</span></div><div><strong>MANUAL + AUTO</strong><span>separation options</span></div></div><p className={styles.heroNote}>Effective Separation of Oil, Grease, Fats and Floating Solids · Final selection depends on flow, oil load and wastewater characteristics.</p></div><HeroVisual /></div></div></section>

      <section className={styles.section} id="what-is-oil-grease-removal"><div className={styles.container}><SectionHeading eyebrow="01 · SEPARATION FUNDAMENTALS" title="What Is an Oil &amp; Grease Removal System?">An Oil &amp; Grease Removal System (OGT / O&amp;G Separator) is a physical treatment unit used to separate and remove oil, grease, fats and other floatable materials from water and wastewater by gravitational separation, coalescence and skimming. It is widely used in industrial effluents, sewage, process wastewater and stormwater to protect downstream equipment and improve overall treatment efficiency.</SectionHeading><div className={floc.explainerGrid}><div className={floc.explainerVisual}><div className={local.oilVisual}><span /><span /><span /><span /></div><ArrowRight size={24} aria-hidden="true" /><div className={local.oilVisual}><span /><span /><span /><span /></div></div><div className={floc.explainerCopy}><span className={styles.eyebrow}>FREE OIL · FLOATABLES · SEPARATION</span><h3>Match the separation method to the wastewater</h3><p>Gravity separation allows buoyant material to rise, coalescence helps smaller droplets combine where the selected media supports it, mechanical skimming removes floating material, and DAF uses microbubbles to float suitable fine oil and grease. A simple oil trap does not remove dissolved contaminants.</p><div className={floc.explainerList}><span><Check size={16} />Gravity, coalescence, skimming and DAF are distinct mechanisms.</span><span><Check size={16} />The selected system depends on free, dispersed, emulsified or floating oil characteristics.</span><span><Check size={16} />No universal outlet oil concentration or potable-water claim is made.</span></div></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="benefits"><div className={styles.container}><SectionHeading eyebrow="02 · KEY BENEFITS" title="Key Benefits">These are brochure-listed benefits. They are presented without an unsupported removal-efficiency, operating-cost or discharge-compliance guarantee.</SectionHeading><div className={styles.featureGrid}>{benefits.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section} id="types"><div className={styles.container}><SectionHeading eyebrow="03 · EQUIPMENT CONFIGURATIONS" title="Types of Oil &amp; Grease Removal Systems">The six equipment categories below preserve the brochure-listed names, features and typical specifications. Final selection depends on flow, oil load, wastewater composition, available space and required outlet quality.</SectionHeading><div className={floc.typeGrid}>{systems.map((item) => <article className={floc.typeCard} key={item.title}><ProductPanel item={item} /><div className={floc.typeBody}><span>{item.number} · EQUIPMENT TYPE</span><h3>{item.title}</h3><p>{item.description}</p><ul>{item.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><div className={floc.typeFooter}><small>{item.application}</small><a href={`#type-${item.number}`}>View specifications <ArrowRight size={14} /></a></div></div></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="specifications"><div className={styles.container}><SectionHeading eyebrow="04 · TYPICAL SPECIFICATIONS" title="Oil &amp; Grease Removal System Technical Specifications">All six technical tables are retained from the supplied brochure. Values are typical or indicative and must be checked against the approved process design and manufacturer datasheet.</SectionHeading><div className={floc.specStack}>{systems.map((item) => <article className={floc.specSection} id={`type-${item.number}`} key={item.title}><div className={floc.specHeading}><span>{item.number} / 06</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div><DataTable headers={["Parameter", "Typical Range"]} rows={item.specs} label={`${item.title} typical technical specifications`} className={floc.specTable} /></article>)}</div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Technical verification required: confirm whether dimensions are length-only ranges, whether materials apply across each complete capacity range, the basis of HRT and power supply, and the DAF performance wording. The Skimmer with Collection Tank table intentionally retains its duplicate “Skimming Type” rows.</span></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="05 · TYPICAL PROCESS FLOW" title="Process Flow Diagram (Typical)">The main water path and separated oil/grease path are shown separately. The diagram does not add unlisted treatment stages or imply potable water.</SectionHeading><div className={local.processBoard}><div className={local.laneLabel}>Main water path</div><div className={`${floc.processLane} ${local.processLaneThree}`} role="list">{processStages.map(({ icon: Icon, label, title, text }) => <div className={floc.processNode} role="listitem" key={title}><span>{label}</span><Icon size={25} /><strong>{title}</strong><small>{text}</small></div>)}</div><div className={local.laneLabel}>Separated oil / grease path</div><div className={local.oilPath} role="list"><div className={local.oilNode} role="listitem"><Waves size={23} /><strong>Separated Oil / Grease</strong><small>Material collected by the selected separation technology</small></div><ArrowRight size={21} aria-hidden="true" /><div className={`${local.oilNode} ${local.oilNodeActive}`} role="listitem"><PackageCheck size={23} /><strong>Oil Collection Tank</strong><small>Proper disposal arrangement to be confirmed for the site</small></div></div><div className={floc.processLegend}><span><b>Separation:</b> gravity / coalescence / skimming / DAF</span><span><b>Water path:</b> treated water to the next appropriate process</span><span>Collection, handling and disposal require site-specific planning.</span></div></div><p className={styles.darkNote}>Separated oil and grease should be transferred to an appropriate collection and disposal arrangement. This page does not prescribe a disposal route or claim a universal outlet quality.</p></div></section>

      <section className={styles.section} id="applications"><div className={styles.container}><SectionHeading eyebrow="06 · APPLICATIONS" title="Applications">The selected technology must match the actual wastewater composition, oil form, loading, flow and outlet requirements. The brochure lists the following application categories.</SectionHeading><div className={local.applicationGrid}>{applications.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="selection"><div className={styles.container}><SectionHeading eyebrow="07 · EQUIPMENT SELECTION" title="Find the Right Oil &amp; Grease Removal System">AQUEN offers multiple oil and grease separation configurations for suitable industrial, commercial, municipal and wastewater applications. Final equipment selection and sizing depend on flow rate, influent characteristics, oil type, required outlet quality and site-specific engineering conditions.</SectionHeading><div className={floc.selectionGrid}><article className={floc.selectionCard}><SlidersHorizontal size={23} /><h3>Selection inputs</h3><ul><li><Check size={16} />Average and peak flow</li><li><Check size={16} />Influent oil-and-grease concentration</li><li><Check size={16} />Oil type and density</li><li><Check size={16} />Free, dispersed, emulsified or floating oil characteristics</li><li><Check size={16} />Suspended solids and wastewater composition</li><li><Check size={16} />Required outlet quality</li><li><Check size={16} />Available space and tank configuration</li></ul></article><article className={floc.selectionCard}><ShieldCheck size={23} /><h3>Technical qualification</h3><p>Selection should also consider required separation technology, material compatibility, operating and maintenance requirements, applicable discharge requirements and site conditions. No unverified sizing calculator or performance result is generated by this page.</p><div className={floc.terminology}><strong>Terminology and scope</strong><span>OGT / O&amp;G Separator = Oil &amp; Grease Trap / Oil &amp; Grease Separator · HRT = Hydraulic Retention Time · CPI = Coalescing Plate Interceptor · DAF = Dissolved Air Flotation</span><span>Free or floating oil separation is different from treatment of dissolved or chemically emulsified contaminants; the correct process must be confirmed.</span></div></article></div></div></section>

      <section className={`${styles.section} ${shared.quoteSection}`} id="quote"><div className={styles.container}><div className={shared.quoteGrid}><div><span className={styles.eyebrow}>08 · DESIGN, SUPPLY, INSTALLATION &amp; COMMISSIONING</span><h2>Discuss your oil-and-grease separation requirement.</h2><p>Share your application, flow, oil type, influent concentration, required outlet quality and preferred equipment type. AQUEN can review the suitable configuration without assuming a universal treatment result.</p><div className={styles.ctaChecklist}><span><Check size={16} />Manual and automatic separation options</span><span><Check size={16} />Traps, skimmers, tube packs, CPI and DAF</span><span><Check size={16} />Oil collection and handling review</span><span><Check size={16} />Configuration-specific technical discussion</span></div><div className={shared.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={14} /></a><a href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={shared.formCard}><span className={shared.formEyebrow}>Request technical details</span><h3>Enquire About Oil &amp; Grease Removal</h3><p>Provide your application, flow, oil-and-grease characteristics and equipment preference. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Oil & Grease Removal Systems Solution Enquiry" /><input type="hidden" name="Source Page" defaultValue="Oil & Grease Removal Systems Solution Page" /><div className={shared.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company / Organization *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>Industry / application<select name="Industry or application" defaultValue=""><option value="" disabled>Select application</option><option>Food &amp; Beverage</option><option>Dairy</option><option>Edible Oil</option><option>Automobile &amp; Workshop</option><option>Petrochemical</option><option>Laundry &amp; Textile</option><option>Other industrial wastewater</option></select></label><label>Estimated flow rate<input name="Estimated flow rate" type="text" placeholder="Example: 500 KLD" /></label><label>Influent oil &amp; grease concentration<input name="Influent oil and grease concentration" type="text" placeholder="If known" /></label><label>Preferred equipment type<select name="Preferred equipment type" defaultValue=""><option value="" disabled>Select equipment</option>{systems.map((item) => <option key={item.title}>{item.title}</option>)}<option>Unsure / request recommendation</option></select></label><label className={shared.fieldFull}>Required outlet quality / additional requirements<textarea name="Message" required placeholder="Tell us about outlet quality, oil type, available space, tank arrangement and site requirements." /></label></div><div className={shared.formSubmit}><button type="submit">Request Technical Specifications <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="09 · OIL &amp; GREASE REMOVAL FAQ" title="Questions to resolve before specifying a system">The page preserves brochure values while identifying where feed characteristics, dimensions, performance statements, duplicate labels and equipment scope need confirmation.</SectionHeading><div className={styles.faqList}><details className={styles.faqItem}><summary>Does a simple oil trap remove dissolved contaminants?<span>+</span></summary><p>No. A simple gravity oil trap is intended for suitable floating or separable material and does not remove dissolved contaminants. The appropriate process depends on the wastewater chemistry and oil form.</p></details><details className={styles.faqItem}><summary>Why does the DAF section show two performance statements?<span>+</span></summary><p>The brochure describes DAF as having high removal efficiency greater than 90% and separately lists 85–95% (O&amp;G). Both statements are retained and require verification against the design basis, influent, test method and operating conditions.</p></details><details className={styles.faqItem}><summary>Are all listed dimensions complete tank dimensions?<span>+</span></summary><p>No. For several configurations, the brochure gives a length range followed by “as per flow” without separate width and height ranges. Those dimensions must be confirmed rather than inferred.</p></details><details className={styles.faqItem}><summary>What does the duplicate “Skimming Type” field mean?<span>+</span></summary><p>The Skimmer with Collection Tank table lists “Belt / Chain” and “Continuous” under the same field label. Both rows are preserved; the correct labels or intended distinction should be confirmed before final technical publication.</p></details><details className={styles.faqItem}><summary>Can every oil-and-grease system be used for every wastewater stream?<span>+</span></summary><p>No. Free, dispersed, emulsified and dissolved contaminants behave differently. Final selection depends on oil type, density, concentration, suspended solids, flow, outlet quality and site conditions.</p></details></div></div></section>
    </main>
    <Footer />
  </div>;
}
