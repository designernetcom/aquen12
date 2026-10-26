import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  CircleDollarSign,
  Cloud,
  Coins,
  CreditCard,
  Database,
  Droplets,
  Factory,
  Gauge,
  Landmark,
  MapPinned,
  MonitorSmartphone,
  QrCode,
  School,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sun,
  TabletSmartphone,
  WalletCards,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import local from "../cation-bed/cation-bed.module.css";
import atm from "./water-atm.module.css";

type TableRow = readonly string[];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Coins, title: "Coin, RFID & QR/UPI payments", text: "The brochure lists multi-mode payment support; the final payment hardware and gateway configuration depend on the selected system." },
  { icon: Droplets, title: "Purified RO water", text: "RO-based treatment is presented for drinking-water applications, with treatment stages selected from source-water quality." },
  { icon: Settings2, title: "Programmable dispensing", text: "Dispensing quantity and price can be configured for the selected installation." },
  { icon: ShieldCheck, title: "Weather-ready enclosure options", text: "SS-304 or powder-coated, weatherproof construction is listed for suitable indoor or outdoor configurations." },
  { icon: MonitorSmartphone, title: "LCD or touch interface", text: "The brochure lists a user-friendly LCD or touch display; the final display depends on configuration." },
  { icon: Database, title: "Reports & recharge management", text: "Real-time data, transaction reports and recharge management are brochure-listed capabilities." },
  { icon: Gauge, title: "Low-maintenance design", text: "A brochure-listed benefit; actual service needs depend on feed quality, duty cycle and installation conditions." },
  { icon: Waves, title: "24×7 capability", text: "The brochure lists 24×7 operation as a capability, subject to the actual installation and operating conditions." },
  { icon: TabletSmartphone, title: "Optional IoT monitoring", text: "Mobile-app or web-dashboard monitoring is optional and requires confirmation of the selected integration." },
  { icon: CircleDollarSign, title: "Multiple quantities", text: "The system can be configured for multiple dispensing quantity options, including programmable 1, 5, 10 and 20 litre selections." },
  { icon: Smartphone, title: "Automatic outlet control", text: "Automatic dispensing and water outlet cut-off are listed as system functionality." },
  { icon: Factory, title: "Custom capacity & configuration", text: "AQUEN WATM configurations are listed from 50 to 1,000 LPH, with 1,000 LPH identified as customizable." },
];

const paymentOptions: { icon: LucideIcon; title: string; intro: string; bullets: string[] }[] = [
  { icon: Coins, title: "Coin Operated", intro: "A cash-based dispensing option for configured installations.", bullets: ["Multi-coin acceptor", "₹1, ₹2, ₹5 and ₹10 coins listed", "Anti-fraud mechanism", "Easy maintenance"] },
  { icon: WalletCards, title: "RFID Card Operated", intro: "Prepaid card dispensing with user-wise balance management when the card and software configuration is included.", bullets: ["Prepaid / recharge card", "User-wise balance", "Admin software", "Suitable for societies, industries and institutions"] },
  { icon: QrCode, title: "QR Code (UPI) Operated", intro: "A QR/UPI configuration for cashless dispensing and transaction reporting.", bullets: ["Supports UPI apps", "Dynamic QR code", "Instant payment and water dispensing", "No cash handling and real-time transaction report"] },
];

const processStages: { label: string; title: string; note: string; optional?: boolean; active?: boolean }[] = [
  { label: "01 · INLET", title: "Raw Water", note: "Selected source water" },
  { label: "02 · PRETREATMENT", title: "MGF", note: "Multi-Grade Filter · optional", optional: true },
  { label: "03 · PRETREATMENT", title: "ACF", note: "Activated Carbon Filter · optional", optional: true },
  { label: "04 · PRETREATMENT", title: "Softener", note: "Water softener · optional", optional: true },
  { label: "05 · PRETREATMENT", title: "UF", note: "Ultrafiltration · optional", optional: true },
  { label: "06 · TREATMENT", title: "RO System", note: "Reverse osmosis system" },
  { label: "07 · DISINFECTION", title: "UV Disinfection", note: "Ultraviolet disinfection" },
  { label: "08 · DISPENSING", title: "Water ATM", note: "Treated water to outlet", active: true },
];

const technicalRows: TableRow[] = [
  ["Model", "AQUEN WATM Series"],
  ["Payment options", "Coin + RFID Card + QR (UPI)"],
  ["Dispensing capacity", "50 LPH, 100 LPH, 250 LPH, 500 LPH, 1,000 LPH; customizable"],
  ["Dispensing quantity", "1, 5, 10, 20 litres; programmable"],
  ["Water quality", "IS 10500 / BIS Drinking Water Standard, as stated in brochure"],
  ["Input water source", "Borewell / Municipal / Treated Water"],
  ["Treatment system", "MGF + ACF + Softener + UF + RO + UV; options selected according to water quality"],
  ["Storage tank", "Optional, SS-304 / HDPE, 500 L to 5,000 L"],
  ["Dispensing outlet", "SS-304 water nozzle with automatic cut-off"],
  ["Control panel", "PLC / microcontroller based"],
  ["Display", "LCD / touch screen, optional"],
  ["Material of construction", "SS-304 / powder-coated MS for outdoor configuration, as listed"],
  ["Power supply", "230 V AC, 50 Hz, single phase"],
  ["Operating power", "0.5–3.0 kW, according to capacity"],
  ["Typical dimensions", "900 (W) × 900 (D) × 2,000 (H) mm; customizable"],
  ["Installation", "Indoor / outdoor, with weatherproof canopy for outdoor configuration"],
];

const modelRows: TableRow[] = [
  ["WATM-50", "50 LPH", "Small Societies / Offices", "0.5", "500 L", "700 × 700 × 1,800"],
  ["WATM-100", "100 LPH", "Residential Societies / Small Institutions", "1.0", "1,000 L", "900 × 900 × 2,000"],
  ["WATM-250", "250 LPH", "Large Societies / Schools / Colleges", "1.5", "2,000 L", "1,200 × 1,200 × 2,200"],
  ["WATM-500", "500 LPH", "Commercial / Industrial", "2.0", "3,000 L", "1,500 × 1,500 × 2,400"],
  ["WATM-1000", "1,000 LPH", "Industrial / High Demand Locations", "3.0", "5,000 L", "1,800 × 1,800 × 2,400"],
];

const options: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: BadgeCheck, title: "Client branding", text: "Client logo and artwork" },
  { icon: Droplets, title: "Chilled water", text: "Optional chilled-water configuration" },
  { icon: Smartphone, title: "SMS / mobile recharge", text: "Optional recharge channel" },
  { icon: Cloud, title: "Online wallet / cloud", text: "Cloud-based management option" },
  { icon: Waves, title: "Multiple dispensing points", text: "Configure more than one outlet where required" },
  { icon: CreditCard, title: "Prepaid smart card", text: "Integration with a prepaid card system" },
  { icon: Database, title: "Data logging", text: "Consumption reports and data records" },
  { icon: Sun, title: "Solar power", text: "Solar option for remote areas" },
];

const applications: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Building2, title: "Residential Societies", text: "Shared drinking-water dispensing for residents." },
  { icon: Landmark, title: "Commercial Buildings", text: "Water dispensing for occupants and visitors." },
  { icon: School, title: "Schools & Colleges", text: "Drinking-water dispensing in institutional settings." },
  { icon: Factory, title: "Industries & Factories", text: "Dispensing within industrial premises." },
  { icon: MapPinned, title: "Temples & Public Places", text: "Public-facing dispensing installations." },
  { icon: Waves, title: "Rural & Urban Communities", text: "Community drinking-water access points." },
];

const installationCategories = [
  "Residential Societies",
  "Commercial Buildings",
  "Industries",
  "Institutions · Schools / Colleges",
  "Public Places · Parks / Temples / Stations",
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, label, wide = false }: { headers: string[]; rows: TableRow[]; label: string; wide?: boolean }) {
  return <div className={`${styles.tableWrap} ${wide ? atm.wideTable : ""}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function WaterAtmVisual() {
  return <div className={styles.heroVisual}><div className={atm.atmVisual}><div className={atm.atmMachine}><div className={atm.atmBrand}><span>AQUEN</span><small>WATER ATM</small></div><div className={atm.atmScreen}><span>Smart water dispensing</span><strong>1 L / ₹</strong></div><div className={atm.atmControls}><span>COIN</span><span>RFID</span><span>QR / UPI</span></div><div className={atm.atmOutlet} /></div><div className={atm.visualLabel}>Conceptual product visual. Final cabinet, display and payment hardware depend on the selected configuration.</div></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>WATM series reference</span></div><div className={styles.heroCaption}><span>Capacity</span><strong>50–1,000 LPH</strong><span>Dispensing</span><strong>1–20 litres</strong></div></div>;
}

export default function WaterAtmContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Water ATM</strong></nav><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN SOLUTION SYSTEM · SMART WATER DISPENSING</span><h1>WATER <em>ATM</em></h1><h2>Smart Water Solutions for a Better Tomorrow</h2><p>AQUEN Water ATM is a smart drinking-water dispensing solution for residential societies, institutions, public places, commercial facilities and industrial locations. Depending on the selected configuration, it can support coin payments, prepaid RFID cards and QR/UPI payments, together with programmable dispensing quantities and treatment options suited to feed-water quality.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About Water ATM <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>50–1,000 LPH</strong><span>brochure capacity range</span></div><div><strong>COIN + CARD + QR</strong><span>payment headline</span></div><div><strong>1–20 litres</strong><span>programmable quantity</span></div></div><p className={styles.heroNote}>Access Clean &amp; Safe Drinking Water Anytime, Anywhere · Smart · Safe · Sustainable</p></div><WaterAtmVisual /></div></div></section>

      <section className={styles.section} id="features"><div className={styles.container}><SectionHeading eyebrow="01 · KEY FEATURES" title="A configurable drinking-water dispensing platform">Features below are brochure-listed capabilities. Payment hardware, reporting, remote monitoring and treatment stages depend on the selected system configuration.</SectionHeading><div className={styles.featureGrid}>{features.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="payment-options"><div className={styles.container}><SectionHeading eyebrow="02 · PAYMENT OPTIONS" title="Choose the payment experience for your deployment">The Water ATM is an information and enquiry page, not a live payment terminal. Confirm payment gateway, provider and hardware compatibility before ordering.</SectionHeading><div className={atm.paymentGrid}>{paymentOptions.map(({ icon: Icon, title, intro, bullets }) => <article className={atm.paymentCard} key={title}><div className={atm.paymentIcon}><Icon size={23} /></div><h3>{title}</h3><p>{intro}</p><ul>{bullets.map((bullet) => <li key={bullet}><Check size={15} />{bullet}</li>)}</ul></article>)}</div><p className={atm.paymentNote}><CircleAlert size={16} /> The brochure references BHIM, UPI, GPay, PhonePe and Paytm as examples. No provider integration or transaction guarantee is implied without configuration confirmation.</p></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="03 · PROCESS FLOW DIAGRAM" title="Raw water to a configured Water ATM">The brochure sequence is shown below. Pretreatment stages marked optional are selected according to raw-water analysis and the required drinking-water quality; the diagram does not by itself establish water safety.</SectionHeading><div className={atm.processBoard}><div className={atm.processGrid} aria-label="Typical Water ATM treatment and dispensing flow">{processStages.map(({ label, title, note, optional, active }) => <div className={`${atm.processNode} ${optional ? atm.processNodeOptional : ""} ${active ? atm.processNodeActive : ""}`} key={title}><span>{label}</span><strong>{title}</strong><small>{note}</small></div>)}</div><div className={atm.processFoot}><span><b>Optional:</b> MGF, ACF, Softener and UF are not required in every configuration.</span><span><b>Engineering basis:</b> Select treatment from source-water quality and target product-water requirements.</span></div></div><p className={styles.darkNote}>Typical sequence: Raw Water → MGF (Optional) → ACF (Optional) → Softener (Optional) → UF (Optional) → RO System → UV Disinfection → Water ATM.</p></div></section>

      <section className={styles.section} id="technical-specifications"><div className={styles.container}><SectionHeading eyebrow="04 · TECHNICAL SPECIFICATIONS" title="Brochure-listed WATM series reference">All values below are preserved from the supplied brochure. Final treatment, enclosure, power, storage, dimensions and outdoor provisions are configuration-specific.</SectionHeading><DataTable headers={["Parameter", "Brochure specification"]} rows={technicalRows} label="AQUEN Water ATM technical specifications" /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>The brochure references IS 10500 / BIS Drinking Water Standard. This page does not claim certification or verified compliance; actual product-water quality must be confirmed by approved design and appropriate testing.</span></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="available-models"><div className={styles.container}><SectionHeading eyebrow="05 · AVAILABLE MODELS & SPECIFICATIONS" title="Five model references from 50 to 1,000 LPH">Storage tanks are optional. Dimensions are brochure-listed model references and may be customized; do not interpret them as universal enclosure dimensions.</SectionHeading><DataTable headers={["Model", "Dispensing capacity", "Recommended application", "Power (kW)", "Storage tank (optional)", "Dimensions (W × D × H), mm"]} rows={modelRows} wide label="AQUEN Water ATM available models and specifications" /></div></section>

      <section className={styles.section} id="options"><div className={styles.container}><SectionHeading eyebrow="06 · OPTIONS & CUSTOMIZATION" title="Shape the system around your location and operating model">The following are optional or customizable brochure references. Availability, integration effort and third-party service support require technical confirmation.</SectionHeading><div className={atm.optionGrid}>{options.map(({ icon: Icon, title, text }, index) => <article className={atm.optionCard} key={title}><Icon size={21} /><div><strong>{String(index + 1).padStart(2, "0")} · {title}</strong><small>{text}</small></div></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="installations"><div className={styles.container}><SectionHeading eyebrow="07 · OUR WATER ATM INSTALLATIONS" title="Deployment contexts for a public-facing water point">No verified Water ATM installation photograph is currently available in this repository. The cards below preserve the brochure’s installation-context categories without relabelling unrelated project imagery as Water ATM installations.</SectionHeading><div className={atm.installationGrid}>{installationCategories.map((category) => <article className={atm.installationCard} key={category}><MapPinned size={28} /><strong>{category}</strong><small>Approved Water ATM installation image to be supplied or confirmed.</small></article>)}</div><p className={atm.installationNote}>When approved project photographs are available, they can replace these confirmation panels without changing the page structure or image-handling conventions.</p></div></section>

      <section className={styles.section} id="applications"><div className={styles.container}><SectionHeading eyebrow="08 · APPLICATIONS" title="Clean drinking-water access across multiple environments">These descriptions explain the brochure-listed application groups and do not identify a specific customer or installed project.</SectionHeading><div className={styles.featureGrid}>{applications.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="water-quality"><div className={styles.container}><SectionHeading eyebrow="09 · WATER QUALITY & SAFETY" title="Treatment design starts with water analysis">The brochure describes purified RO water and references IS 10500 / BIS Drinking Water Standard. Actual treatment stages and product-water quality must be determined from raw-water analysis, the approved process design and applicable testing.</SectionHeading><div className={atm.qualityGrid}><div className={atm.qualityCard}><h3>What should be confirmed?</h3><p>Before selecting a Water ATM configuration, AQUEN should review the source-water quality, required capacity, storage need, dispensing environment and target drinking-water specification.</p><ul><li><Check size={16} />Borewell, municipal or treated-water source</li><li><Check size={16} />Raw-water analysis and required pretreatment</li><li><Check size={16} />RO, UV and storage configuration</li><li><Check size={16} />Product-water testing and documentation</li></ul></div><div className={styles.operatingCard}><div className={styles.operatingIcon}><ShieldCheck size={22} /></div><div><h3>Safety qualification</h3><p>RO and UV in a process diagram do not by themselves guarantee drinking-water safety. Do not infer certification, microbiological performance, contaminant-removal percentages or operating guarantees from this page.</p></div></div></div></div></section>

      <section className={`${styles.section} ${local.quoteSection}`} id="quote"><div className={styles.container}><div className={local.quoteGrid}><div><span className={styles.eyebrow}>10 · DESIGN, SUPPLY, INSTALLATION & COMMISSIONING</span><h2>Discuss your Water ATM requirement.</h2><p>Share your capacity, location, source-water details, desired payment method and installation environment. AQUEN can review the treatment train, storage and customization scope.</p><div className={styles.ctaChecklist}><span><Check size={16} />Capacity from 50 to 1,000 LPH</span><span><Check size={16} />Coin, RFID or QR/UPI preference</span><span><Check size={16} />Source-water and application details</span><span><Check size={16} />Indoor / outdoor installation context</span></div><div className={local.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a className={atm.contactLine} href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a className={atm.contactLine} href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={14} /></a><a className={atm.contactLine} href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={local.formCard}><span className={local.formEyebrow}>Request technical details</span><h3>Enquire About Water ATM</h3><p>Required fields use browser validation. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Water ATM Solution Enquiry" /><input type="hidden" name="Source Page" defaultValue="Water ATM Solution Page" /><div className={local.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone number *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>City / state<input name="City and State" type="text" autoComplete="address-level2" placeholder="City, state" /></label><label>Capacity in LPH<input name="Capacity" type="text" placeholder="Example: 100 LPH" /></label><label>Payment preference<select name="Payment preference" defaultValue=""><option value="" disabled>Select payment mode</option><option>Coin</option><option>RFID card</option><option>QR / UPI</option><option>Combination</option><option>Unsure</option></select></label><label>Water source<select name="Water source" defaultValue=""><option value="" disabled>Select source</option><option>Borewell</option><option>Municipal</option><option>Treated water</option><option>Unsure</option></select></label><label>Installation environment<select name="Installation environment" defaultValue=""><option value="" disabled>Select environment</option><option>Indoor</option><option>Outdoor</option><option>Unsure</option></select></label><label>Storage requirement<input name="Storage requirement" type="text" placeholder="Optional tank size, if known" /></label><label className={local.fieldFull}>Message<textarea name="Message" required placeholder="Tell us about your source water, capacity, location and Water ATM requirements." /></label></div><div className={local.formSubmit}><button type="submit">Submit requirement <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="11 · WATER ATM FAQ" title="Clear answers before you specify a system">The page separates brochure-listed capabilities from details that require configuration and documentation review.</SectionHeading><div className={styles.faqList}><details className={styles.faqItem}><summary>Are all three payment modes standard on every unit?<span>+</span></summary><p>No. The brochure lists coin, RFID card and QR/UPI options for the WATM series, but the payment hardware, provider integration and software scope depend on the selected configuration.</p></details><details className={styles.faqItem}><summary>Does every Water ATM need MGF, ACF, softener and UF?<span>+</span></summary><p>No. The brochure marks these pretreatment stages optional. The treatment train must be selected from raw-water analysis and the required product-water specification.</p></details><details className={styles.faqItem}><summary>What capacities are shown?<span>+</span></summary><p>The brochure lists 50, 100, 250, 500 and 1,000 LPH, with 1,000 LPH identified as customizable. Model-wise references are preserved in the specifications table.</p></details><details className={styles.faqItem}><summary>Is the storage tank included?<span>+</span></summary><p>Storage is listed as optional, with SS-304 or HDPE tank options from 500 L to 5,000 L. Confirm inclusion and final tank material in the quotation.</p></details><details className={styles.faqItem}><summary>Does the page process a real payment?<span>+</span></summary><p>No. This is a solution-information page. It does not create a payment terminal, collect payment details or simulate a successful transaction.</p></details></div></div></section>
    </main>
    <Footer />
  </div>;
}
