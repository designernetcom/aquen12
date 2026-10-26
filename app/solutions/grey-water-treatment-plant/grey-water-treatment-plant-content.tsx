import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
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
  HardHat,
  Hotel,
  Hospital,
  Landmark,
  Layers3,
  Leaf,
  MapPinned,
  PackageCheck,
  Recycle,
  School,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Footer from "@/app/layouts/footer";
import Header from "@/app/layouts/header";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import shared from "../cation-bed/cation-bed.module.css";
import floc from "../flocculation-systems/flocculation-systems.module.css";
import local from "./grey-water-treatment-plant.module.css";

type TableRow = readonly string[];

const modelRows: TableRow[] = [
  ["GW-5", "5", "5", "3.0 × 1.2 × 2.0", "1.5", "20"],
  ["GW-10", "10", "10", "4.0 × 1.5 × 2.0", "2.0", "20"],
  ["GW-20", "20", "20", "5.0 × 2.0 × 2.5", "3.5", "20"],
  ["GW-30", "30", "30", "6.0 × 2.0 × 2.5", "4.0", "20"],
  ["GW-50", "50", "30", "8.0 × 2.5 × 2.8", "5.5", "20"],
  ["GW-100", "100", "100", "10.0 × 3.0 × 3.0", "8.0", "20"],
  ["GW-200", "200", "200", "12.0 × 3.5 × 3.5", "12.0", "20"],
];

const qualityRows: TableRow[] = [
  ["pH", "6.5–8.5", "6.5–8.5"],
  ["BOD", "50–150 mg/L", "< 10 mg/L"],
  ["COD", "100–300 mg/L", "< 50 mg/L"],
  ["TSS", "50–200 mg/L", "< 10 mg/L"],
  ["Oil & Grease", "< 10 mg/L", "< 5 mg/L"],
  ["Turbidity", "10–50 NTU", "< 5 NTU"],
  ["Faecal Coliform", "< 1000 MPN/100 mL", "< 100 MPN/100 mL"],
];

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Waves, title: "Reduces fresh-water consumption", text: "Treated greywater can support suitable non-potable reuse applications after the selected treatment and verification." },
  { icon: Leaf, title: "Environment-friendly reuse approach", text: "Recycling appropriate domestic greywater can reduce dependence on fresh water and support sustainability objectives." },
  { icon: Gauge, title: "Cost-effective utility reuse", text: "The brochure lists cost effectiveness and lower water bills as benefits; actual savings depend on site use and operating conditions." },
  { icon: Layers3, title: "Compact and modular design", text: "Chamber-based treatment can be configured for suitable residential, commercial, institutional and industrial projects." },
  { icon: Sparkles, title: "Odour-free operation listed", text: "Odour-free operation is a brochure-listed benefit and should be confirmed for the selected design and operating practice." },
  { icon: Settings2, title: "Automatic or manual operation", text: "Control and operation options can be configured according to the selected plant and project requirements." },
  { icon: Building2, title: "Suitable for multiple project types", text: "The brochure lists buildings, hotels, institutions and industries as application contexts." },
  { icon: ShieldCheck, title: "Green-building support", text: "IGBC/LEED-related green-building alignment is brochure-listed; applicable project requirements must be confirmed." },
];

const processStages: { label: string; title: string; note: string; active?: boolean }[] = [
  { label: "01 · INLET", title: "Screen Chamber", note: "Greywater inlet and bar screening" },
  { label: "02 · EQUALIZATION", title: "Equalization Chamber", note: "Submersible mixer listed" },
  { label: "03 · OPTIONAL", title: "Anoxic Chamber", note: "Optional stage as shown" },
  { label: "04 · BIOLOGICAL", title: "Aeration Chamber", note: "MBBR / diffuser", active: true },
  { label: "05 · SETTLING", title: "Tube Settler Chamber", note: "With lamella media" },
  { label: "06 · SETTLING", title: "Tube Settler Chamber", note: "Second stage retained from brochure" },
  { label: "07 · DISINFECTION", title: "UV / Ozone / Chlorination", note: "Selected disinfection option" },
];

const reuseApplications: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Recycle, title: "Flushing", text: "Non-potable treated greywater for suitable toilet-flushing systems." },
  { icon: Leaf, title: "Gardening & Landscaping", text: "Reuse for suitable landscape irrigation after confirming water quality and site practice." },
  { icon: Waves, title: "Cooling Tower Make-up", text: "Utility reuse where the treated water meets the project’s cooling-water requirements." },
  { icon: HardHat, title: "Construction Activities", text: "Suitable non-potable construction uses subject to site controls and water-quality review." },
  { icon: Settings2, title: "Car Washing", text: "Reuse for appropriate vehicle-washing duties where the selected quality is suitable." },
  { icon: Factory, title: "Industrial Utility", text: "Non-potable industrial utility use after application-specific verification." },
];

const industries: { id: string; icon: LucideIcon; title: string; text: string }[] = [
  { id: "residential", icon: Building2, title: "Residential Societies & Apartments", text: "Greywater recycling for suitable shared residential wastewater streams." },
  { id: "commercial", icon: Landmark, title: "Commercial Buildings", text: "Treatment and reuse planning for commercial-building utility demand." },
  { id: "it-parks", icon: Factory, title: "IT Parks & Offices", text: "Modular greywater treatment for office and campus applications." },
  { id: "schools", icon: School, title: "Schools & Colleges", text: "Reuse planning for institutional non-potable water requirements." },
  { id: "hospitals", icon: Hospital, title: "Hospitals", text: "Application-specific greywater treatment requiring detailed review." },
  { id: "hotels", icon: Hotel, title: "Hotels & Resorts", text: "Treatment and reuse for hospitality utility applications." },
  { id: "industries-1", icon: Factory, title: "Industries", text: "Industrial greywater applications subject to influent characterization." },
  { id: "construction", icon: HardHat, title: "Construction Sites", text: "Suitable temporary or permanent reuse applications subject to site conditions." },
  { id: "industries-2", icon: Factory, title: "Industries", text: "Repeated brochure label retained; application scope requires project confirmation." },
  { id: "landscaping", icon: Leaf, title: "Gardening & Landscaping", text: "Landscape reuse planning for suitable treated greywater." },
];

const projects: { location: string; capacity: string; type: string; status: "Site Completed" | "Site in Progress" }[] = [
  { location: "Pune, Maharashtra", capacity: "20 KLD", type: "Residential Society", status: "Site Completed" },
  { location: "Gurugram, Haryana", capacity: "50 KLD", type: "Commercial Building", status: "Site in Progress" },
  { location: "Ludhiana, Punjab", capacity: "30 KLD", type: "Hotel", status: "Site Completed" },
  { location: "Baddi, Himachal Pradesh", capacity: "25 KLD", type: "Industrial Utility", status: "Site Completed" },
  { location: "Solan, Himachal Pradesh", capacity: "10 KLD", type: "Resort", status: "Site in Progress" },
  { location: "Pune, Maharashtra", capacity: "100 KLD", type: "IT Park", status: "Site Completed" },
  { location: "Ludhiana, Punjab", capacity: "40 KLD", type: "School", status: "Site Completed" },
  { location: "Gurugram, Haryana", capacity: "75 KLD", type: "Commercial Complex", status: "Site Completed" },
];

const constructionOptions: { icon: LucideIcon; title: string; text: string; features: string[] }[] = [
  { icon: Layers3, title: "FRP System", text: "FRP construction for suitable small to medium capacity applications.", features: ["Lightweight and compact", "Corrosion resistant", "Quick installation", "Cost effective"] },
  { icon: ShieldCheck, title: "MSEP System", text: "MSEP System (Mild Steel Epoxy Painted) for suitable medium to large capacity projects.", features: ["Epoxy internal coating", "High strength and long life", "Custom design as per requirement", "Indoor / outdoor installation listed"] },
  { icon: Wrench, title: "MSRL System", text: "MSRL System (Mild Steel Rubber Lined) for suitable aggressive-water and industrial applications.", features: ["Rubber lining", "Suitable for high TDS and aggressive water", "High corrosion resistance", "Long service life"] },
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, label, className = "" }: { headers: string[]; rows: TableRow[]; label: string; className?: string }) {
  return <div className={styles.tableWrap + " " + className}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={row[0] + "-" + rowIndex}>{row.map((cell, cellIndex) => <td key={row[0] + "-" + cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProcessLane() {
  return <div className={local.processLane} role="list">{processStages.map(({ label, title, note, active }) => <div className={local.processNode + " " + (active ? local.processNodeActive : "")} key={label + "-" + title} role="listitem"><span>{label}</span><strong>{title}</strong><small>{note}</small></div>)}</div>;
}

function HeroVisual() {
  return <div className={styles.heroVisual}><div className={styles.heroVisualFrame}><Image src="/banner/advanced-biological.png" alt="Related biological wastewater treatment plant reference" fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>Greywater context</span></div><div className={local.heroVisualNote}>Existing biological-treatment asset shown as a related process reference. It is not presented as a specific AQUEN greywater project photograph.</div><div className={styles.heroCaption}><span>Capacity</span><strong>5–200 KLD</strong><span>Reuse</span><strong>Non-potable</strong></div></div>;
}

export default function GreyWaterTreatmentPlantContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Grey Water Treatment Plant</strong></nav><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN FLUID TECHNOLOGIES LLP · COMPLETE WATER &amp; WASTEWATER TREATMENT SOLUTIONS</span><h1>GREY WATER <em>TREATMENT PLANT</em></h1><h2>Recycle &amp; Reuse Domestic Grey Water</h2><p>AQUEN grey water treatment plant solutions are designed for suitable domestic greywater generated from bathrooms, showers, hand-wash basins, laundry and appropriate kitchen activities, excluding toilet wastewater. The brochure presents chamber-based MBBR treatment with clarification and selected disinfection for non-potable reuse applications.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About Grey Water Treatment <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>5–200 KLD</strong><span>brochure model range</span></div><div><strong>MBBR</strong><span>chamber-based treatment</span></div><div><strong>NON-POTABLE</strong><span>reuse applications</span></div></div><p className={styles.heroNote}>Grey Water Treatment For a Cleaner Greener Future · Final reuse suitability depends on treatment design, testing and site conditions.</p></div><HeroVisual /></div></div></section>

      <section className={styles.section} id="what-is-greywater"><div className={styles.container}><SectionHeading eyebrow="01 · GREYWATER FUNDAMENTALS" title="What Is Grey Water?">Greywater is wastewater generated from bathrooms, showers, hand-wash basins, laundry and suitable kitchen activities, excluding toilet wastewater. With appropriate treatment and verification, it can be reused for non-potable applications such as flushing, gardening, cooling, construction and other utility purposes. It is not drinking water and should not be presented as potable without a separately approved treatment train.</SectionHeading><div className={floc.explainerGrid}><div className={floc.explainerVisual}><div className={local.greywaterVisual}><span /><span /><span /><span /></div><ArrowRight size={24} aria-hidden="true" /><div className={local.greywaterVisual}><span /><span /><span /><span /></div></div><div className={floc.explainerCopy}><span className={styles.eyebrow}>TREAT · RECYCLE · CONSERVE</span><h3>Convert suitable domestic greywater into a reuse stream</h3><p>The treatment sequence is chamber-based and uses MBBR technology as identified in the brochure. The selected outlet quality, disinfection method and reuse application must be confirmed for the project.</p><div className={floc.explainerList}><span><Check size={16} />Toilet wastewater is excluded from the greywater definition used here.</span><span><Check size={16} />Reuse is non-potable and application-specific.</span><span><Check size={16} />Kitchen streams require suitability review, especially oil and grease loading.</span></div></div></div></div></section>

      <section className={styles.section + " " + styles.lightSection} id="benefits"><div className={styles.container}><SectionHeading eyebrow="02 · KEY BENEFITS" title="Key Benefits">The points below preserve the brochure’s messaging without turning broad marketing statements into universal performance guarantees.</SectionHeading><div className={styles.featureGrid}>{benefits.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section + " " + styles.darkSection} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="03 · TYPICAL TREATMENT PROCESS" title="Process Flow Diagram (Chamber Based System)">The brochure sequence is preserved below, including the two tube-settler-related stages shown in the source diagram. The Anoxic Chamber is marked optional as printed.</SectionHeading><div className={local.processBoard}><div className={local.laneHeading}><span>Grey Water Inlet → Treated Water for Reuse</span><small>Typical sequence · confirm final process design</small></div><ProcessLane /><div className={local.stageGrid}>{processStages.slice(0, 4).map(({ label, title, note }) => <article key={"detail-" + label}><span>{label}</span><h3>{title}</h3><p>{note}. The final stage configuration depends on the required treatment and reuse application.</p></article>)}</div><div className={floc.processLegend}><span><b>Biological:</b> MBBR / diffuser in the aeration chamber</span><span><b>Clarification:</b> two tube-settler labels retained from the brochure</span><span><b>Disinfection:</b> UV / ozone / chlorination option</span></div></div><p className={styles.darkNote}>The flow diagram is a typical representation. It does not add treatment stages or imply that treated water is potable.</p></div></section>

      <section className={styles.section} id="water-quality"><div className={styles.container}><SectionHeading eyebrow="04 · WATER QUALITY PARAMETERS" title="Typical Inlet &amp; Outlet Water Quality">The values below are transcribed as typical brochure values for greywater treatment. They are not unconditional guarantees and must be confirmed against the approved design, influent, operation, maintenance, testing method and applicable reuse requirements.</SectionHeading><DataTable headers={["Parameter", "Typical Inlet — Greywater", "Typical Outlet — After Treatment"]} rows={qualityRows} label="Typical greywater inlet and outlet water quality" className={local.qualityTable} /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Outlet values are typical brochure values, not guaranteed results for every installation. Reuse suitability must be confirmed for the intended non-potable application.</span></div></div></section>

      <section className={styles.section + " " + styles.lightSection} id="technical-specifications"><div className={styles.container}><SectionHeading eyebrow="05 · STANDARD MODELS" title="Technical Specifications &amp; Standard Models">The seven greywater models and all brochure-listed columns are retained below. Chamber dimensions are approximate, operation is listed as 20 hours, and custom capacities and chamber sizes are available on request.</SectionHeading><DataTable headers={["Model", "Capacity (m³/day)", "Capacity (KLD)", "Approx. Chamber Dimensions L × W × H (m)", "Power (kW)", "Operation Hours"]} rows={modelRows} label="Grey water treatment plant standard model specifications" className={local.modelTable} /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>GW-50 is transcribed as 50 m³/day and 30 KLD because that is how the supplied brochure presents it. Since 1 m³/day equals 1 KLD, this row must be verified against the original company datasheet before publication as an approved specification. Power consumption also varies with design and equipment selection.</span></div></div></section>

      <section className={styles.section} id="construction-options"><div className={styles.container}><SectionHeading eyebrow="06 · PLANT CONSTRUCTION OPTIONS" title="Plant Construction Options">FRP, MSEP and MSRL are brochure-listed greywater plant construction options. Their use depends on capacity, water characteristics, site conditions and the approved design.</SectionHeading><div className={local.constructionGrid}>{constructionOptions.map(({ icon: Icon, title, text, features }) => <article className={local.constructionCard} key={title}><Icon size={23} /><h3>{title}</h3><p>{text}</p><ul>{features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul></article>)}</div></div></section>

      <section className={styles.section + " " + styles.lightSection} id="features"><div className={styles.container}><SectionHeading eyebrow="07 · SYSTEM FEATURES" title="Key Features of the Grey Water Treatment Plant">These features are brochure-listed. The phrase “No pressure filters required (optional)” is retained as an ambiguous source statement and requires confirmation rather than being interpreted as an absolute claim.</SectionHeading><div className={styles.featureGrid}><article className={styles.featureCard}><div className={styles.featureIcon}><Layers3 size={20} /></div><h3>Chamber-based MBBR treatment</h3><p>Chamber-based treatment with MBBR technology is identified as a key feature.</p></article><article className={styles.featureCard}><div className={styles.featureIcon}><Filter size={20} /></div><h3>Pressure filters listed as optional</h3><p>The brochure wording is “No pressure filters required (optional)”; its intended meaning must be verified.</p></article><article className={styles.featureCard}><div className={styles.featureIcon}><SlidersHorizontal size={20} /></div><h3>Compact, modular and customizable</h3><p>Plant configuration can be considered against project capacity, space and reuse requirements.</p></article><article className={styles.featureCard}><div className={styles.featureIcon}><Settings2 size={20} /></div><h3>Automatic or manual operation</h3><p>Automatic/manual operation with a control panel is brochure-listed, subject to configuration.</p></article><article className={styles.featureCard}><div className={styles.featureIcon}><Waves size={20} /></div><h3>Selected disinfection options</h3><p>UV, ozone or chlorination can be considered according to the approved treatment design.</p></article><article className={styles.featureCard}><div className={styles.featureIcon}><Building2 size={20} /></div><h3>Residential to industrial use</h3><p>Suitable project contexts listed include residential, commercial and industrial applications.</p></article></div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Confirm the intended scope of the pressure-filter statement and the exact control-panel, disinfection and equipment inclusions for each model.</span></div></div></section>

      <section className={styles.section} id="reuse-applications"><div className={styles.container}><SectionHeading eyebrow="08 · REUSE APPLICATIONS" title="Greywater Reuse Applications">The brochure identifies the following non-potable reuse applications. Each use requires suitable treated-water quality and project-specific verification.</SectionHeading><div className={local.reuseGrid}>{reuseApplications.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section + " " + styles.lightSection} id="industries"><div className={styles.container}><SectionHeading eyebrow="09 · INDUSTRIES SERVED" title="Industries &amp; Project Contexts">The industry labels below preserve the brochure list, including its repeated “Industries” entry. Descriptions are general application context and do not make discharge or reuse-compliance claims.</SectionHeading><div className={local.industryGrid}>{industries.map(({ id, icon: Icon, title, text }) => <article className={styles.featureCard} key={id}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section} id="projects"><div className={styles.container}><SectionHeading eyebrow="10 · PROJECT REFERENCES" title="Project Photographs — Ongoing &amp; Completed">The brochure lists the following locations, capacities, project types and statuses. No customer names, dates, testimonials or performance statistics are added.</SectionHeading><div className={local.projectGrid}>{projects.map(({ location, capacity, type, status }) => <article className={local.projectCard} key={location + "-" + capacity + "-" + type}><div className={local.projectMedia}><MapPinned size={28} /><span>Approved project photograph to be supplied or confirmed.</span></div><div className={local.projectBody}><h3>{location}</h3><p><strong>{capacity}</strong> · {type}</p><span className={local.projectStatus + " " + (status === "Site in Progress" ? local.projectStatusProgress : "")}>{status}</span></div></article>)}</div><div className={local.assetNote}><PackageCheck size={17} /><span>The current repository does not contain approved greywater project photographs. The project references above preserve brochure data without presenting generic or unrelated images as AQUEN project photos.</span></div></div></section>

      <section className={styles.section + " " + styles.darkSection} id="selection"><div className={styles.container}><SectionHeading eyebrow="11 · DESIGN &amp; SELECTION" title="Select the Right Grey Water Treatment Configuration">Final capacity, chamber dimensions, power, treatment sequence, construction option and disinfection method depend on greywater flow, influent characteristics, reuse objective, available space and site conditions.</SectionHeading><div className={floc.selectionGrid}><article className={floc.selectionCard}><SlidersHorizontal size={23} /><h3>Selection inputs</h3><ul><li><Check size={16} />Average and peak greywater flow</li><li><Check size={16} />Source streams and kitchen oil / grease loading</li><li><Check size={16} />Required non-potable reuse application</li><li><Check size={16} />Inlet water quality and testing</li><li><Check size={16} />Available space and chamber arrangement</li><li><Check size={16} />Disinfection and operating preference</li></ul></article><article className={floc.selectionCard}><ShieldCheck size={23} /><h3>Technical qualification</h3><p>Confirm model selection, GW-50 capacity notation, chamber dimensions, power basis, equipment inclusions, pressure-filter wording and reuse-water requirements before approval. The page does not provide a potable-water claim or an unverified sizing calculator.</p><div className={floc.terminology}><strong>Scope and terminology</strong><span>KLD = kilolitres per day · MBBR = Moving Bed Biofilm Reactor · FRP = Fibre Reinforced Plastic</span><span>MSEP and MSRL are retained as brochure terminology and should be confirmed against the manufacturer’s official material nomenclature.</span></div></article></div></div></section>

      <section className={styles.section + " " + shared.quoteSection} id="quote"><div className={styles.container}><div className={shared.quoteGrid}><div><span className={styles.eyebrow}>12 · DESIGN, SUPPLY, INSTALLATION &amp; AMC</span><h2>Discuss your greywater reuse requirement.</h2><p>Share your greywater sources, average and peak flow, intended reuse, available space and preferred operating approach. AQUEN can review the suitable configuration without assuming a universal outlet quality.</p><div className={styles.ctaChecklist}><span><Check size={16} />5–200 KLD brochure model range</span><span><Check size={16} />Chamber-based MBBR process</span><span><Check size={16} />FRP, MSEP and MSRL options listed</span><span><Check size={16} />UV, ozone or chlorination options</span></div><div className={shared.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={14} /></a><a href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={shared.formCard}><span className={shared.formEyebrow}>Request technical details</span><h3>Enquire About Grey Water Treatment</h3><p>Provide your source streams, flow, reuse objective and site requirements. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Grey Water Treatment Plant Solution Enquiry" /><input type="hidden" name="Source Page" defaultValue="Grey Water Treatment Plant Solution Page" /><div className={shared.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company / Organization *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>Greywater source<select name="Greywater source" defaultValue=""><option value="" disabled>Select source</option><option>Residential bathrooms / showers</option><option>Commercial building</option><option>Hotel / resort</option><option>Institution / school / hospital</option><option>Industrial utility</option><option>Mixed greywater sources</option></select></label><label>Estimated flow rate<input name="Estimated greywater flow" type="text" placeholder="Example: 50 KLD" /></label><label>Required reuse application<select name="Required reuse application" defaultValue=""><option value="" disabled>Select reuse</option><option>Flushing</option><option>Gardening &amp; Landscaping</option><option>Cooling Tower Make-up</option><option>Construction Activities</option><option>Car Washing</option><option>Industrial Utility (Non-potable)</option></select></label><label>Preferred model<input name="Preferred greywater model" type="text" placeholder="GW-5 to GW-200, if known" /></label><label className={shared.fieldFull}>Additional requirements<textarea name="Message" required placeholder="Tell us about inlet quality, site space, reuse quality, disinfection preference and project status." /></label></div><div className={shared.formSubmit}><button type="submit">Request Technical Specifications <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="13 · GREY WATER FAQ" title="Questions to resolve before specifying a plant">This page preserves brochure-listed greywater values and project references while identifying details that need engineering or source-document confirmation.</SectionHeading><div className={styles.faqList}><details className={styles.faqItem}><summary>What is included in greywater?<span>+</span></summary><p>For this page, greywater includes wastewater from bathrooms, showers, hand-wash basins, laundry and suitable kitchen activities. Toilet wastewater is excluded.</p></details><details className={styles.faqItem}><summary>Is treated greywater suitable for drinking?<span>+</span></summary><p>No. The brochure describes non-potable reuse such as flushing, gardening, cooling, construction and utility use. The page makes no potable-water claim.</p></details><details className={styles.faqItem}><summary>Why does GW-50 show 50 m³/day but 30 KLD?<span>+</span></summary><p>This is how the supplied brochure transcribes the row. Because 1 m³/day equals 1 KLD, the value must be checked against the original company datasheet before it is treated as an approved specification.</p></details><details className={styles.faqItem}><summary>Why are two Tube Settler Chamber stages shown?<span>+</span></summary><p>The source diagram contains two tube-settler-related stages. They are preserved separately, and the company should confirm whether the second stage has a different intended name or function.</p></details><details className={styles.faqItem}><summary>Can the plant be customized?<span>+</span></summary><p>The brochure notes that custom capacities and chamber sizes are available on request. Power consumption varies with design and equipment selection.</p></details></div></div></section>
    </main>
    <Footer />
  </div>;
}
