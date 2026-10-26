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
  MapPinned,
  PackageCheck,
  Recycle,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Trash2,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Footer from "@/app/layouts/footer";
import Header from "@/app/layouts/header";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import shared from "../cation-bed/cation-bed.module.css";
import floc from "../flocculation-systems/flocculation-systems.module.css";
import local from "./bar-screen-systems.module.css";

type TableRow = readonly string[];

type BarScreenType = {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  specs: TableRow[];
  application: string;
};

const screens: BarScreenType[] = [
  {
    number: "01",
    title: "Manual Coarse Bar Screen",
    icon: Filter,
    description: "A simple, economical screen with manual rake cleaning for small and medium channel applications.",
    features: ["Simple and economical design", "Manual cleaning with rake", "Suitable for small and medium capacities", "Available in MS / SS304 / SS316"],
    application: "WTP / STP / ETP",
    specs: [
      ["Channel Width (mm)", "300–3000"],
      ["Channel Depth (mm)", "300–3000"],
      ["Bar Spacing (mm)", "20, 25, 30, 40, 50"],
      ["Bar Size (mm)", "25 × 6, 30 × 6, 40 × 8"],
      ["Inclination", "60°–75°"],
      ["Material", "MS (HDG) / SS304 / SS316"],
      ["Cleaning", "Manual (Rake)"],
      ["Application", "WTP / STP / ETP"],
    ],
  },
  {
    number: "02",
    title: "Automatic Coarse Bar Screen (Rake Type)",
    icon: Settings2,
    description: "An automatic chain-rake screen for continuous coarse-solids removal in municipal and industrial treatment plants.",
    features: ["Automatic rake cleaning with chain drive", "Continuous operation", "Suitable for municipal and industrial STP / ETP", "Available in MS / SS304 / SS316"],
    application: "STP / ETP / Industrial",
    specs: [
      ["Channel Width (mm)", "500–3000"],
      ["Channel Depth (mm)", "500–3000"],
      ["Bar Spacing (mm)", "20, 25, 30, 40, 50"],
      ["Bar Size (mm)", "25 × 6, 30 × 6, 40 × 8"],
      ["Inclination", "60°–75°"],
      ["Material", "SS304 / SS316 / MS (HDG)"],
      ["Drive Motor", "0.37–1.5 kW"],
      ["Cleaning", "Automatic (Chain Rake)"],
      ["Application", "STP / ETP / Industrial"],
    ],
  },
  {
    number: "03",
    title: "Fine Bar Screen (Mechanical)",
    icon: SlidersHorizontal,
    description: "A mechanically cleaned screen for fine-solids screening in water and wastewater treatment applications.",
    features: ["Removal of fine solids (6–20 mm)", "Automatic operation", "Used in WTP / STP / ETP", "Available in SS304 / SS316"],
    application: "WTP / STP / ETP",
    specs: [
      ["Channel Width (mm)", "500–2500"],
      ["Channel Depth (mm)", "500–3000"],
      ["Bar Spacing (mm)", "6, 8, 10, 12, 15, 20"],
      ["Bar Size (mm)", "20 × 5, 25 × 6"],
      ["Inclination", "60°–75°"],
      ["Material", "SS304 / SS316"],
      ["Drive Motor", "0.37–1.1 kW"],
      ["Cleaning", "Automatic"],
      ["Application", "WTP / STP / ETP"],
    ],
  },
  {
    number: "04",
    title: "Step Screen",
    icon: Layers3,
    description: "A stepped screening arrangement for large flows and high-solids loading in STP, ETP and industrial applications.",
    features: ["High efficiency for large flows", "Handles high solids loading", "Suitable for STP / ETP", "Available in MS (HDG) / SS304 / SS316"],
    application: "STP / ETP / Industrial",
    specs: [
      ["Channel Width (mm)", "1000–5000"],
      ["Channel Depth (mm)", "1500–3000"],
      ["Step Gap (mm)", "3–10"],
      ["Bar Size (mm)", "3"],
      ["Material", "SS304 / SS316 / MS (HDG)"],
      ["Drive Motor", "0.75–2.2 kW"],
      ["Cleaning", "Automatic"],
      ["Application", "STP / ETP / Industrial"],
    ],
  },
  {
    number: "05",
    title: "Drum Screen",
    icon: Recycle,
    description: "A continuously self-cleaning drum screen for fine-solids removal in water-treatment and industrial applications.",
    features: ["Continuous self-cleaning operation", "Suitable for WTP and industrial applications", "Removes fine solids (0.5–10 mm)", "Available in SS304 / SS316 construction"],
    application: "WTP / Industrial",
    specs: [
      ["Drum Diameter (mm)", "600–2000"],
      ["Drum Length (mm)", "800–3000"],
      ["Slot Size (mm)", "0.5–10"],
      ["Material", "SS304 / SS316"],
      ["Drive Motor", "0.25–1.1 kW"],
      ["Cleaning", "Continuous (Spray + Brush)"],
      ["Application", "WTP / Industrial"],
    ],
  },
  {
    number: "06",
    title: "Band Screen",
    icon: GitMerge,
    description: "A continuous belt-type screen for high-flow fine screening where the selected installation requires a belt arrangement.",
    features: ["Continuous belt-type screen", "Suitable for high flow and fine screening", "Low power consumption", "Material wording requires confirmation"],
    application: "STP / ETP / Industrial",
    specs: [
      ["Channel Width (mm)", "500–3000"],
      ["Channel Depth (mm)", "1000–4000"],
      ["Slot Size (mm)", "3–10"],
      ["Belt Width (mm)", "500–3000"],
      ["Material", "SS304 / SS316"],
      ["Drive Motor", "0.37–2.2 kW"],
      ["Cleaning", "Continuous"],
      ["Application", "STP / ETP / Industrial"],
    ],
  },
];

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "Protects pumps and downstream equipment", text: "Coarse screening retains debris before it can damage, choke or excessively wear downstream equipment." },
  { icon: Gauge, title: "Improves operation and maintenance", text: "Screening supports smoother operation and can reduce manual maintenance burden when the selected cleaning arrangement is suitable." },
  { icon: Building2, title: "Municipal, industrial and sewage use", text: "The brochure lists water, sewage and industrial applications; suitability remains configuration-dependent." },
  { icon: Settings2, title: "Manual and automatic options", text: "Manual rake, chain-rake and continuous-cleaning arrangements are represented across the six types." },
  { icon: SlidersHorizontal, title: "Custom design", text: "Final screen selection depends on flow, channel dimensions, debris, opening size and site conditions." },
  { icon: Sparkles, title: "Multiple material options", text: "MS, SS304, SS316 and HDG options are brochure-listed, subject to model-specific confirmation." },
];

const processStages: { icon: LucideIcon; label: string; title: string; text: string }[] = [
  { icon: Waves, label: "01 · INLET", title: "Raw Water / Wastewater", text: "Incoming water or wastewater enters the screening channel." },
  { icon: Filter, label: "02 · SCREEN", title: "Bar Screen", text: "The selected manual or automatic screen retains debris according to its opening and arrangement." },
  { icon: GitMerge, label: "03 · CHANNEL", title: "Collection Channel", text: "Screened water continues through the collection channel." },
  { icon: ArrowRight, label: "04 · DOWNSTREAM", title: "Pump / Treatment Units", text: "Screened water proceeds to downstream pumping or treatment equipment." },
];

const applications: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Building2, title: "Water Treatment Plant (WTP)", text: "Coarse screening of incoming water as part of a suitable treatment process." },
  { icon: Waves, title: "Sewage Treatment Plant (STP)", text: "Removal of debris from incoming sewage before downstream treatment. The brochure label should be verified." },
  { icon: Factory, title: "Effluent Treatment Plant (ETP)", text: "Screening of suitable industrial effluent streams." },
  { icon: Settings2, title: "Industrial Wastewater", text: "Screening to help protect pumps and downstream equipment in selected applications." },
  { icon: ShieldCheck, title: "Pump Protection", text: "Removal of coarse debris upstream of pumping systems." },
  { icon: MapPinned, title: "Municipal Wastewater", text: "Screening of incoming wastewater in municipal treatment installations." },
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, label, className = "" }: { headers: string[]; rows: TableRow[]; label: string; className?: string }) {
  return <div className={`${styles.tableWrap} ${className}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProductPanel({ item }: { item: BarScreenType }) {
  const Icon = item.icon;
  return <div className={floc.productPanel}><div className={floc.productPlaceholder}><Icon size={42} /><span>Approved bar-screen equipment image to be supplied or confirmed.</span></div><div className={floc.productPanelLabel}><span>{item.number} / 06</span><small>Configuration reference</small></div></div>;
}

function HeroVisual() {
  return <div className={styles.heroVisual}><div className={styles.heroVisualFrame}><Image src="/clarifier.png" alt="Water-treatment plant equipment reference" fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>Screening reference</span></div><div className={local.heroImageNote}>Existing water-treatment asset shown as a related process reference. It is not presented as a specific AQUEN bar-screen photograph.</div><div className={styles.heroCaption}><span>Applications</span><strong>WTP · STP · ETP</strong><span>Equipment</span><strong>6 configurations</strong></div></div>;
}

export default function BarScreenSystemsContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Bar Screen Systems</strong></nav><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN FLUID TECHNOLOGIES LLP · COMPLETE WATER &amp; WASTEWATER TREATMENT SOLUTIONS</span><h1>BAR SCREEN <em>SYSTEMS</em></h1><h2>For WTP | STP | ETP</h2><p>AQUEN offers bar screen systems for removing coarse solids from incoming water and wastewater. Available configurations include manual and automatic coarse screens, mechanical fine bar screens, step screens, drum screens and band screens.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About Bar Screen Systems <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>6 TYPES</strong><span>brochure configurations</span></div><div><strong>WTP · STP · ETP</strong><span>application contexts</span></div><div><strong>MANUAL + AUTO</strong><span>cleaning arrangements</span></div></div><p className={styles.heroNote}>Effective Removal of Coarse Solids from Water &amp; Wastewater · Final selection depends on flow, debris and channel conditions.</p></div><HeroVisual /></div></div></section>

      <section className={styles.section} id="what-is-bar-screen"><div className={styles.container}><SectionHeading eyebrow="01 · SCREENING FUNDAMENTALS" title="What Is a Bar Screen?">A bar screen is a mechanical device installed at the inlet of water or wastewater treatment plants to remove coarse solids such as rags, plastics, wood, leaves and other floating debris. It protects downstream equipment like pumps, pipes and treatment units from damage, choking and excessive wear.</SectionHeading><div className={floc.explainerGrid}><div className={floc.explainerVisual}><div className={local.screenVisual}><span /><span /><span /><span /><span /><span /><i /><i /><i /></div><ArrowRight size={24} aria-hidden="true" /><div className={local.debrisVisual}><Trash2 size={28} /><span>Captured<br />screenings</span></div></div><div className={floc.explainerCopy}><span className={styles.eyebrow}>INLET PROTECTION</span><h3>Remove debris before it reaches pumps and treatment units</h3><p>Screening removes debris according to the opening, slot size and equipment configuration. It is a physical solids-separation step and does not remove dissolved contaminants.</p><div className={floc.explainerList}><span><Check size={16} />Protects pumps, pipes and downstream treatment equipment.</span><span><Check size={16} />Manual, automatic and continuous-cleaning options are shown.</span><span><Check size={16} />Final capture and hydraulic performance require design verification.</span></div></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="benefits"><div className={styles.container}><SectionHeading eyebrow="02 · KEY BENEFITS" title="Key Benefits">These are brochure-listed benefits. No unsupported capture efficiency, hydraulic capacity or maintenance guarantee is implied.</SectionHeading><div className={styles.featureGrid}>{benefits.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section} id="types"><div className={styles.container}><SectionHeading eyebrow="03 · EQUIPMENT CONFIGURATIONS" title="Types of Bar Screen Systems">The six equipment configurations below preserve the brochure-listed names, features and typical specifications. Select the final system from flow, channel dimensions, debris characteristics, opening size, cleaning method and site conditions.</SectionHeading><div className={floc.typeGrid}>{screens.map((item) => <article className={floc.typeCard} key={item.title}><ProductPanel item={item} /><div className={floc.typeBody}><span>{item.number} · EQUIPMENT TYPE</span><h3>{item.title}</h3><p>{item.description}</p><ul>{item.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><div className={floc.typeFooter}><small>{item.application}</small><a href={`#type-${item.number}`}>View specifications <ArrowRight size={14} /></a></div></div></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="specifications"><div className={styles.container}><SectionHeading eyebrow="04 · TYPICAL SPECIFICATIONS" title="Bar Screen System Technical Specifications">Every parameter from the supplied brochure is retained in a separate, responsive table. Values are typical and must be checked against the approved hydraulic design and manufacturer datasheet.</SectionHeading><div className={floc.specStack}>{screens.map((item) => <article className={floc.specSection} id={`type-${item.number}`} key={item.title}><div className={floc.specHeading}><span>{item.number} / 06</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div><DataTable headers={["Parameter", "Specification (Typical)"]} rows={item.specs} label={`${item.title} typical technical specifications`} className={floc.specTable} /></article>)}</div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Verify channel ranges, bar-size combinations, the Step Screen “Bar Size (mm): 3” entry, the Band Screen material wording, motor basis, slot/bar spacing and whether cleaning arrangements apply to every model before publishing or quoting.</span></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="05 · INSTALLATION &amp; PROCESS FLOW" title="Typical Installation &amp; Process Flow">The main water path and removed-solids path are shown separately. The diagram does not add unverified treatment stages.</SectionHeading><div className={local.processBoard}><div className={local.laneLabel}>Main water path</div><div className={`${floc.processLane} ${local.processLaneFour}`} role="list">{processStages.map(({ icon: Icon, label, title, text }) => <div className={floc.processNode} role="listitem" key={title}><span>{label}</span><Icon size={25} /><strong>{title}</strong><small>{text}</small></div>)}</div><div className={local.laneLabel}>Removed-solids path</div><div className={local.screeningsPath} role="list"><div className={local.screeningsNode} role="listitem"><Trash2 size={23} /><strong>Removed Solids</strong><small>Captured screenings from the selected screen</small></div><ArrowRight size={21} aria-hidden="true" /><div className={`${local.screeningsNode} ${local.screeningsNodeActive}`} role="listitem"><PackageCheck size={23} /><strong>Collection in Bin</strong><small>Proper handling and disposal</small></div></div><div className={floc.processLegend}><span><b>Screen choice:</b> manual / automatic, coarse / fine, drum / band</span><span><b>Downstream:</b> screened water to pump or treatment units</span><span>Hydraulic capacity and screenings handling require site-specific design.</span></div></div><p className={styles.darkNote}>Screened water proceeds to the downstream pump or treatment equipment. Captured solids require appropriate collection and disposal; no disposal method is prescribed by this page.</p></div></section>

      <section className={styles.section} id="applications"><div className={styles.container}><SectionHeading eyebrow="06 · APPLICATIONS" title="Applications">Screen type, opening, cleaning method and material should be selected for the actual application. The brochure lists the following contexts.</SectionHeading><div className={local.applicationGrid}>{applications.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>The brochure appears to label the second application “Sewage Treatment Plant (ETP)”. This may be a typographical error; the intended STP/ETP label should be confirmed against the original artwork.</span></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="selection"><div className={styles.container}><SectionHeading eyebrow="07 · EQUIPMENT SELECTION" title="Find the Right Bar Screen System">AQUEN bar screen systems are available in different configurations for water and wastewater treatment. Final selection depends on channel dimensions, incoming flow, debris characteristics, required screening size, cleaning method and site-specific engineering requirements.</SectionHeading><div className={floc.selectionGrid}><article className={floc.selectionCard}><SlidersHorizontal size={23} /><h3>Selection inputs</h3><ul><li><Check size={16} />Channel width and depth</li><li><Check size={16} />Incoming flow and hydraulic conditions</li><li><Check size={16} />Type and quantity of screenings</li><li><Check size={16} />Bar spacing or slot size</li><li><Check size={16} />Manual versus automatic cleaning</li><li><Check size={16} />Inclination, materials and available space</li></ul></article><article className={floc.selectionCard}><ShieldCheck size={23} /><h3>Technical qualification</h3><p>Downstream pump and treatment equipment, corrosion conditions, screenings-removal arrangement and site-specific engineering requirements should be confirmed before selection. No automatic sizing calculator is included.</p><div className={floc.terminology}><strong>Terminology retained</strong><span>WTP = Water Treatment Plant · STP = Sewage Treatment Plant · ETP = Effluent Treatment Plant · HDG = Hot-Dip Galvanized, subject to confirmation</span><span>Channel width/depth, bar spacing, slot size, motor range and material options are brochure-listed typical values.</span></div></article></div></div></section>

      <section className={`${styles.section} ${shared.quoteSection}`} id="quote"><div className={styles.container}><div className={shared.quoteGrid}><div><span className={styles.eyebrow}>08 · DESIGN, SUPPLY, INSTALLATION &amp; COMMISSIONING</span><h2>Discuss your screening requirement.</h2><p>Share your application, channel dimensions, incoming flow, debris characteristics, required spacing or slot size and manual or automatic preference. AQUEN can review the suitable configuration without assuming a universal hydraulic capacity.</p><div className={styles.ctaChecklist}><span><Check size={16} />Manual and automatic coarse screens</span><span><Check size={16} />Fine, step, drum and band screens</span><span><Check size={16} />WTP, STP and ETP applications</span><span><Check size={16} />Configuration-specific technical review</span></div><div className={shared.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={14} /></a><a href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={shared.formCard}><span className={shared.formEyebrow}>Request technical details</span><h3>Enquire About Bar Screen Systems</h3><p>Provide your application, channel dimensions, screening requirement and equipment preference. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Bar Screen Systems Solution Enquiry" /><input type="hidden" name="Source Page" defaultValue="Bar Screen Systems Solution Page" /><div className={shared.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company / Organization *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>Application type<select name="Application type" defaultValue=""><option value="" disabled>Select application</option><option>Water Treatment Plant (WTP)</option><option>Sewage Treatment Plant (STP)</option><option>Effluent Treatment Plant (ETP)</option><option>Industrial Wastewater</option><option>Pump Protection</option><option>Municipal Wastewater</option></select></label><label>Channel width / depth<input name="Channel width and depth" type="text" placeholder="Example: 1200 × 1800 mm" /></label><label>Bar spacing / slot size<input name="Required bar spacing or slot size" type="text" placeholder="Example: 20 mm" /></label><label>Cleaning preference<select name="Manual or automatic preference" defaultValue=""><option value="" disabled>Select preference</option><option>Manual</option><option>Automatic</option><option>Unsure</option></select></label><label className={shared.fieldFull}>Additional requirements<textarea name="Message" required placeholder="Tell us about flow, debris, material, installation inclination or downstream equipment." /></label></div><div className={shared.formSubmit}><button type="submit">Request Technical Specifications <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="09 · BAR SCREEN FAQ" title="Questions to resolve before specifying a screen">The page preserves brochure values while identifying where hydraulic conditions, openings, materials, cleaning and labels need confirmation.</SectionHeading><div className={styles.faqList}><details className={styles.faqItem}><summary>Does a bar screen remove dissolved contaminants?<span>+</span></summary><p>No. Bar screens are physical screening devices for coarse or fine solids and debris. They do not remove dissolved contaminants.</p></details><details className={styles.faqItem}><summary>What does the fine-screen 6–20 mm statement mean?<span>+</span></summary><p>The brochure describes fine solids removal as 6–20 mm while also listing multiple bar-spacing options. Preserve both as brochure data and confirm the capture range for each configuration.</p></details><details className={styles.faqItem}><summary>What does “Bar Size (mm): 3” mean for the Step Screen?<span>+</span></summary><p>The entry is preserved exactly as printed. Confirm whether it means bar thickness, step gap or another dimension before engineering or quoting.</p></details><details className={styles.faqItem}><summary>Is automatic cleaning included in every screen type?<span>+</span></summary><p>No. Cleaning varies by configuration: manual rake, chain rake, automatic, continuous spray/brush or continuous belt arrangements are listed for different systems.</p></details><details className={styles.faqItem}><summary>Are clarifier or treatment units included with the screen?<span>+</span></summary><p>No. The screened-water path ends at downstream pump or treatment units. This page does not imply a universal bundled treatment package.</p></details></div></div></section>
    </main>
    <Footer />
  </div>;
}
