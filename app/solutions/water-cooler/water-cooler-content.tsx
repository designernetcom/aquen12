import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleAlert,
  CloudSun,
  Droplets,
  Factory,
  Gauge,
  Hospital,
  Info,
  Landmark,
  Monitor,
  PlugZap,
  School,
  ShieldCheck,
  Snowflake,
  Sparkles,
  ThermometerSun,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import local from "../cation-bed/cation-bed.module.css";
import cooler from "./water-cooler.module.css";

type TableRow = readonly string[];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Gauge, title: "Energy-efficient cooling", text: "The brochure highlights high cooling efficiency with an energy-efficient compressor; no efficiency rating or test result is claimed here." },
  { icon: ShieldCheck, title: "Food-grade SS-304 contact parts", text: "Water-contact parts are listed as food-grade SS-304. Confirm the exact component and material schedule for the selected model." },
  { icon: Snowflake, title: "PUF insulation", text: "High-quality PUF insulation is listed for improved cooling performance and energy saving." },
  { icon: Droplets, title: "Multiple tap options", text: "The brochure shows 2, 3, 4 and 6-tap configurations. Tap count depends on the selected model and configuration." },
  { icon: Waves, title: "Storage and direct-chill range", text: "Storage and direct-chill models are mentioned in the brochure; the main technical table lists the 11 model rows as Storage and this difference requires confirmation." },
  { icon: ThermometerSun, title: "Tropicalized design", text: "The brochure states suitability for high ambient temperatures up to 50°C; verify this capability for the selected model." },
  { icon: Droplets, title: "Optional UV / RO connection", text: "UV purification and RO feed-water connections are optional configurations, not automatically included with every cooler." },
  { icon: Sparkles, title: "Low-noise, long-life compressor", text: "A brochure-listed characteristic; no compressor brand, noise value, warranty or service interval is inferred." },
  { icon: Wrench, title: "Hygienic and easy to clean", text: "Rust-resistant stainless construction and easy-clean surfaces are listed for the product range." },
  { icon: Factory, title: "Broad deployment fit", text: "The brochure presents use in schools, colleges, offices, industries, hospitals, public places and outdoor areas, subject to site review." },
];

const ranges: { icon: LucideIcon; title: string; capacity: string; text: string }[] = [
  { icon: Monitor, title: "Desktop Water Cooler", capacity: "5–20 LPH", text: "Compact capacity range shown in the brochure." },
  { icon: Droplets, title: "Storage Water Cooler", capacity: "20–50 LPH", text: "Storage configuration for smaller shared-use locations." },
  { icon: Droplets, title: "Storage Water Cooler", capacity: "50–100 LPH", text: "Higher shared-use capacity range." },
  { icon: Factory, title: "Storage Water Cooler", capacity: "150–250 LPH", text: "For larger institutions and facilities." },
  { icon: Gauge, title: "Storage Water Cooler", capacity: "500–1,000 LPH", text: "High-demand range; final configuration to confirm." },
];

const technicalRows: TableRow[] = [
  ["AWC-05", "5", "10", "1", "Storage", "0.12", "230 V / 50 Hz", "400 × 400 × 600", "22"],
  ["AWC-10", "10", "20", "1", "Storage", "0.15", "230 V / 50 Hz", "450 × 450 × 750", "28"],
  ["AWC-20", "20", "40", "2", "Storage", "0.25", "230 V / 50 Hz", "600 × 500 × 900", "40"],
  ["AWC-30", "30", "60", "2", "Storage", "0.35", "230 V / 50 Hz", "700 × 550 × 1000", "50"],
  ["AWC-50", "50", "100", "2", "Storage", "0.55", "230 V / 50 Hz", "750 × 600 × 1150", "65"],
  ["AWC-75", "75", "150", "3", "Storage", "0.80", "230 V / 50 Hz", "900 × 650 × 1250", "85"],
  ["AWC-100", "100", "200", "3", "Storage", "1.00", "230 V / 50 Hz", "1000 × 700 × 1350", "110"],
  ["AWC-150", "150", "300", "3", "Storage", "1.50", "230 V / 50 Hz", "1200 × 750 × 1500", "150"],
  ["AWC-250", "250", "500", "5", "Storage", "2.00", "230 V / 50 Hz", "1500 × 900 × 1800", "220"],
  ["AWC-500", "500", "1000", "5", "Storage", "3.50", "415 V / 50 Hz", "1800 × 1000 × 2000", "320"],
  ["AWC-1000", "1000", "1500", "8", "Storage", "5.00", "415 V / 50 Hz", "2200 × 1000 × 2000", "450"],
];

type ModelCard = { title: string; capacity: string; storage: string; taps: string; power: string; supply: string; dimensions: string; warning?: string };

const modelCards: ModelCard[] = [
  { title: "5 LPH · Desktop", capacity: "5 LPH", storage: "10 L", taps: "1 tap", power: "0.12 kW", supply: "230 V (frequency omitted on card)", dimensions: "400 × 400 × 600 mm" },
  { title: "10 LPH", capacity: "10 LPH", storage: "20 L", taps: "1 tap", power: "0.15 kW", supply: "230 V (frequency omitted on card)", dimensions: "450 × 450 × 750 mm" },
  { title: "20 LPH", capacity: "20 LPH", storage: "40 L", taps: "2 taps", power: "0.25 kW", supply: "230 V (frequency omitted on card)", dimensions: "600 × 500 × 750 mm", warning: "Card shows 750 mm height; primary table AWC-20 lists 900 mm. Confirm before publication as an approved dimension." },
  { title: "50 LPH · model ID to confirm", capacity: "50 LPH", storage: "100 L", taps: "2 taps", power: "0.55 kW", supply: "230 V (frequency omitted on card)", dimensions: "750 × 600 × 1150 mm", warning: "The card uses capacity only; confirm the exact model ID." },
  { title: "100 LPH", capacity: "100 LPH", storage: "200 L", taps: "3 taps", power: "1.00 kW", supply: "230 V (frequency omitted on card)", dimensions: "1000 × 700 × 1350 mm" },
  { title: "250 LPH", capacity: "250 LPH", storage: "500 L", taps: "5 taps", power: "2.00 kW", supply: "230 V (frequency omitted on card)", dimensions: "1500 × 900 × 1800 mm" },
  { title: "500 LPH", capacity: "500 LPH", storage: "1000 L", taps: "6 taps shown on card", power: "3.50 kW", supply: "415 V (frequency omitted on card)", dimensions: "1800 × 1000 × 2000 mm", warning: "Product card shows 6 taps; primary table AWC-500 lists 5 taps. Confirm the approved tap count." },
  { title: "1000 LPH", capacity: "1000 LPH", storage: "1500 L", taps: "8 taps", power: "5.00 kW", supply: "415 V (frequency omitted on card)", dimensions: "2200 × 1000 × 2000 mm" },
];

const options: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Droplets, title: "Normal Tap", text: "Standard dispensing option listed in the brochure." },
  { icon: Droplets, title: "Push Tap", text: "Push-operated dispensing option." },
  { icon: Sparkles, title: "Sensor Tap", text: "Optional sensor tap configuration." },
  { icon: Waves, title: "Bottle Filling Tap", text: "Optional bottle-filling arrangement." },
  { icon: ShieldCheck, title: "UV Purification", text: "Optional purification connection; not included by default." },
  { icon: Droplets, title: "RO Feed Connection", text: "Connection option for an upstream RO feed." },
  { icon: ThermometerSun, title: "Digital Temperature Display", text: "Digital display option for configured units." },
  { icon: Sparkles, title: "SS-304 Outer Body", text: "Stainless steel outer-body option listed in the brochure." },
];

const applications: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: School, title: "Schools & Colleges", text: "Shared drinking-water access for students and staff." },
  { icon: Monitor, title: "Offices & IT Parks", text: "Cooling and dispensing for workplace common areas." },
  { icon: Hospital, title: "Hospitals", text: "Configured cooling and dispensing for institutional use." },
  { icon: Factory, title: "Industries & Factories", text: "Cooling provision within industrial premises." },
  { icon: Landmark, title: "Temples & Public Places", text: "Public-facing drinking-water points." },
  { icon: Droplets, title: "Residential Societies", text: "Shared facilities for residents and visitors." },
  { icon: CloudSun, title: "Outdoor & Public Utilities", text: "Outdoor models are available on request, subject to site and enclosure review." },
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, label }: { headers: string[]; rows: TableRow[]; label: string }) {
  return <div className={`${styles.tableWrap} ${cooler.wideTable}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function CoolerVisual() {
  return <div className={styles.heroVisual}><div className={cooler.coolerPlaceholder}><Snowflake size={64} strokeWidth={1.3} /><strong>Water Cooler range</strong><span>5–1,000 LPH · stainless steel cooling solutions</span><small>No verified Water Cooler photograph is currently available in the project assets. Replace this confirmation panel with approved AQUEN product imagery when supplied.</small></div><div className={styles.heroBadge}><Snowflake size={16} /><span>AWC series reference</span></div><div className={styles.heroCaption}><span>Cooling</span><strong>5–1,000 LPH</strong><span>Construction</span><strong>SS-304 options</strong></div></div>;
}

export default function WaterCoolerContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Water Cooler</strong></nav><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN SOLUTION SYSTEM · COOLING & DISPENSING</span><h1>WATER <em>COOLER</em></h1><h2>Cool, Clean, Healthy Drinking Water for a Better Tomorrow</h2><p>AQUEN Fluid Technologies LLP offers stainless steel water coolers across cooling capacities and storage configurations for schools, colleges, offices, hospitals, industries, residential societies and public facilities. Configurations can include multiple dispensing taps, optional purification connections and different dispensing arrangements for the installation.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About Water Coolers <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>5–1,000 LPH</strong><span>brochure cooling range</span></div><div><strong>10–1,500 L</strong><span>listed storage range</span></div><div><strong>SS-304</strong><span>contact-part / body options</span></div></div><p className={styles.heroNote}>Stainless Steel · Energy Efficient · Hygienic · Durable · Available in All Capacities &amp; Configurations</p></div><CoolerVisual /></div></div></section>

      <section className={styles.section} id="features"><div className={styles.container}><SectionHeading eyebrow="01 · KEY FEATURES" title="Cooling systems built around the installation">The following characteristics are brochure-listed. Tap arrangement, purification connection, enclosure scope and ambient-temperature capability require confirmation for the selected configuration.</SectionHeading><div className={styles.featureGrid}>{features.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="range"><div className={styles.container}><SectionHeading eyebrow="02 · OUR RANGE OF WATER COOLERS" title="Five brochure categories across the cooling range">These are general product categories, not invented model numbers. The model-wise reference table and product cards below preserve the supplied brochure values separately.</SectionHeading><div className={cooler.rangeGrid}>{ranges.map(({ icon: Icon, title, capacity, text }, index) => <article className={cooler.rangeCard} key={`${title}-${capacity}`}><div className={cooler.rangeMarker}><Icon size={22} /></div><span>0{index + 1} · RANGE</span><h3>{title}</h3><strong>{capacity}</strong><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section} id="technical-specifications"><div className={styles.container}><SectionHeading eyebrow="03 · TECHNICAL SPECIFICATIONS" title="Primary AWC model-wise reference">The values below are transcribed from the supplied brochure image and must be checked against the original manufacturer specification before being treated as an approved engineering datasheet.</SectionHeading><DataTable headers={["Model", "Cooling capacity (LPH)", "Storage capacity (L)", "No. of taps", "Cooling type", "Power consumption (kW)", "Power supply", "Dimensions (L × W × H), mm", "Approx. weight (kg)"]} rows={technicalRows} label="AQUEN Water Cooler technical specifications" /><div className={cooler.tableNoteGrid}><div className={cooler.tableNote}><Info size={17} /><span>Dimensions and design may vary as per requirement. Custom capacities, tap configurations and outdoor models are listed as available options.</span></div><div className={cooler.tableNote}><CircleAlert size={17} /><span>Confirm whether dimensions represent the complete enclosure and whether accessories affect dimensions. Do not assume all models use the same electrical supply.</span></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="product-models"><div className={styles.container}><SectionHeading eyebrow="04 · PRODUCT MODELS" title="Eight brochure card references">Product cards are shown as brochure references. Where a card conflicts with the primary table or omits a model detail, the difference is called out for manufacturer confirmation.</SectionHeading><div className={cooler.cardGrid}>{modelCards.map(({ title, capacity, storage, taps, power, supply, dimensions, warning }) => <article className={cooler.modelCard} key={title}><div className={cooler.modelPlaceholder}><Snowflake size={35} /><span>Approved product image to be supplied or confirmed.</span></div><div className={cooler.modelBody}><span>WATER COOLER REFERENCE</span><h3>{title}</h3><strong>{capacity}</strong><div className={cooler.modelSpecs}><span><b>Storage:</b> {storage}</span><span><b>Taps:</b> {taps}</span><span><b>Power:</b> {power}</span><span><b>Supply:</b> {supply}</span><span><b>Dimensions:</b> {dimensions}</span></div>{warning ? <div className={cooler.modelWarning}><CircleAlert size={14} />{warning}</div> : null}<Link className={styles.textButton} href="#quote">Enquire about this range <ArrowRight size={14} /></Link></div></article>)}</div></div></section>

      <section className={styles.section} id="options"><div className={styles.container}><SectionHeading eyebrow="05 · OPTIONS & CUSTOMIZATION" title="Configure taps, purification and enclosure details">The following items are brochure-listed options. They are not included in every cooler and must be confirmed for the selected model.</SectionHeading><div className={cooler.optionGrid}>{options.map(({ icon: Icon, title, text }, index) => <article className={cooler.optionCard} key={title}><Icon size={21} /><div><strong>{String(index + 1).padStart(2, "0")} · {title}</strong><small>{text}</small></div></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="applications"><div className={styles.container}><SectionHeading eyebrow="06 · IDEAL FOR" title="Cooling and dispensing across shared-use environments">These application descriptions explain the brochure’s categories and are not a customer or project reference. Capacity, electrical supply, water source and installation conditions still need review.</SectionHeading><div className={cooler.applicationGrid}>{applications.map(({ icon: Icon, title, text }) => <article className={cooler.applicationCard} key={title}><Icon size={23} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="cooling-characteristics"><div className={styles.container}><SectionHeading eyebrow="07 · CONSTRUCTION & COOLING CHARACTERISTICS" title="Stainless, hygienic and configurable">AQUEN’s brochure presents food-grade SS-304 contact parts, PUF insulation, an energy-efficient compressor, multiple taps and optional UV/RO connections. Refrigeration details such as refrigerant, compressor brand, setpoint, COP/EER and service intervals are not specified here.</SectionHeading><div className={cooler.characteristicGrid}><article className={cooler.characteristicCard}><Snowflake size={22} /><h3>Storage-type reference</h3><p>The primary 11-model table lists Cooling Type as Storage.</p></article><article className={cooler.characteristicCard}><Waves size={22} /><h3>Direct-chill mention</h3><p>The features also mention storage and direct-chill models; confirm which configurations are direct-chill before publishing model claims.</p></article><article className={cooler.characteristicCard}><ThermometerSun size={22} /><h3>Up to 50°C ambient</h3><p>This is a brochure-listed tropicalized-design capability pending technical verification.</p></article><article className={cooler.characteristicCard}><PlugZap size={22} /><h3>Electrical supply varies</h3><p>The table lists 230 V / 50 Hz up to AWC-250 and 415 V / 50 Hz for AWC-500 and AWC-1000.</p></article></div><div className={styles.darkNote}><CircleAlert size={17} /> Do not infer refrigeration cycle, wiring, earthing, protection ratings, warranty, noise values or energy-cost estimates from the brochure data.</div></div></section>

      <section className={styles.section} id="installation"><div className={styles.container}><SectionHeading eyebrow="08 · INSTALLATION & CONFIGURATION" title="Specify the cooler around the site">Custom capacities, custom tap configurations and outdoor models are listed as available on request. The final design should confirm the required capacity, water source, electrical supply, dispensing arrangement, enclosure and any upstream purification connection.</SectionHeading><div className={cooler.installationPanel}><div><h3>Configuration review</h3><p>Use the enquiry form to share the location, expected usage, capacity range, storage requirement and preferred tap or purification arrangement.</p></div><div className={cooler.installationChecklist}><span><Check size={16} />Indoor or outdoor installation context</span><span><Check size={16} />Required capacity and storage volume</span><span><Check size={16} />Tap count and dispensing arrangement</span><span><Check size={16} />230 V or 415 V supply to confirm from model selection</span><span><Check size={16} />Optional UV purification or RO feed connection</span></div></div></div></section>

      <section className={`${styles.section} ${local.quoteSection}`} id="quote"><div className={styles.container}><div className={local.quoteGrid}><div><span className={styles.eyebrow}>09 · TECHNICAL ENQUIRY</span><h2>Discuss your Water Cooler requirement.</h2><p>Share your required cooling capacity, storage volume, tap arrangement, installation environment and any purification connection. AQUEN can review the appropriate configuration.</p><div className={styles.ctaChecklist}><span><Check size={16} />5–1,000 LPH cooling range</span><span><Check size={16} />10–1,500 L storage range</span><span><Check size={16} />Tap and purification options</span><span><Check size={16} />Indoor / outdoor configuration review</span></div><div className={local.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a className={cooler.contactLine} href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a className={cooler.contactLine} href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={14} /></a><a className={cooler.contactLine} href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={local.formCard}><span className={local.formEyebrow}>Request technical specifications</span><h3>Enquire About Water Coolers</h3><p>Required fields use browser validation. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Water Cooler Solution Enquiry" /><input type="hidden" name="Source Page" defaultValue="Water Cooler Solution Page" /><div className={local.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone number *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>City / state<input name="City and State" type="text" autoComplete="address-level2" placeholder="City, state" /></label><label>Cooling capacity<input name="Cooling capacity" type="text" placeholder="Example: 100 LPH" /></label><label>Storage requirement<input name="Storage requirement" type="text" placeholder="Example: 200 L" /></label><label>Number of taps<input name="Number of taps" type="text" placeholder="Example: 3 taps" /></label><label>Installation environment<select name="Installation environment" defaultValue=""><option value="" disabled>Select environment</option><option>Indoor</option><option>Outdoor</option><option>Unsure</option></select></label><label>Purification connection<select name="Purification connection" defaultValue=""><option value="" disabled>Select option</option><option>None specified</option><option>UV purification</option><option>RO feed connection</option><option>Unsure</option></select></label><label className={local.fieldFull}>Message<textarea name="Message" required placeholder="Tell us about your capacity, storage, taps, water source and installation requirements." /></label></div><div className={local.formSubmit}><button type="submit">Submit requirement <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>
    </main>
    <Footer />
  </div>;
}
