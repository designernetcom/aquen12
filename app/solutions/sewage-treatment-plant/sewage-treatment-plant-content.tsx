import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, BadgeCheck, Building2, Check, ChevronRight, CircleAlert, Factory, Filter, Gauge, HardHat, Hospital, Landmark, Layers3, Leaf, MapPinned, PackageCheck, Recycle, School, Settings2, ShieldCheck, SlidersHorizontal, Sparkles, Waves, Wind, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Footer from "@/app/layouts/footer";
import Header from "@/app/layouts/header";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import shared from "../cation-bed/cation-bed.module.css";
import stp from "./sewage-treatment-plant.module.css";
import sbr from "./sbr-sewage-treatment-plant.module.css";

type TableRow = readonly string[];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Layers3, title: "Compact and modular design", text: "A brochure-listed characteristic; final footprint depends on capacity and site conditions." },
  { icon: Sparkles, title: "High treatment efficiency", text: "A brochure-listed benefit subject to design, operation, maintenance and influent conditions." },
  { icon: Settings2, title: "Automatic PLC-based operation", text: "PLC automation is listed; HMI, SCADA and instrumentation scope are configuration-dependent." },
  { icon: ShieldCheck, title: "Suitable for Indian conditions", text: "A brochure-listed positioning statement; sewage and site characteristics still guide design." },
  { icon: Gauge, title: "Low operation and maintenance", text: "A brochure-listed benefit; actual requirements depend on the selected plant." },
  { icon: Waves, title: "Excellent treated-water quality", text: "Quality depends on design, operation, testing and the intended reuse or discharge." },
  { icon: Building2, title: "Residential to industrial use", text: "Residential, commercial, institutional and industrial applications are listed." },
  { icon: SlidersHorizontal, title: "Flexible for expansion", text: "Expansion can be considered subject to available space and approved engineering." },
  { icon: PackageCheck, title: "FRP, MSEP and RCC options", text: "Construction options are brochure-listed and configuration-dependent." },
  { icon: Filter, title: "Primary and secondary clarification", text: "Clarification stages are shown with the SBR process." },
  { icon: Recycle, title: "Fill, react, settle and decant", text: "Automatic cycle operation is listed; individual stage times are not specified." },
  { icon: Wrench, title: "Reuse or discharge flexibility", text: "Treated water use depends on the approved treatment and applicable requirements." },
];

const cycleStages = [
  ["01 · FILL", "Fill", "Sewage enters the SBR reactor during the fill stage."],
  ["02 · REACT", "React", "Biological reaction occurs under the configured aeration and controls."],
  ["03 · SETTLE", "Settle", "Biomass settles in the reactor before decanting."],
  ["04 · DECANT", "Decant", "Clarified water is decanted for the next configured stage or use."],
];

const processStages = [
  ["01 · INLET", "Bar Screen", "Coarse solids removal", false],
  ["02 · OIL & GREASE", "Oil & Grease Trap (OGT)", "Suitable floatable separation", false],
  ["03 · BALANCING", "Equalization Tank", "Flow and load balancing", false],
  ["04 · PRIMARY", "Primary Clarifier", "Primary clarification", false],
  ["05 · SBR", "SBR Reactors", "Two or more tanks", true],
  ["06 · SECONDARY", "Secondary Clarifier", "Secondary clarification", false],
  ["07 · OPTIONAL", "Pressure Sand Filter (PSF)", "As required by design", false],
  ["08 · OPTIONAL", "Activated Carbon Filter (ACF)", "As required by design", false],
  ["09 · DISINFECTION", "UV / Ozone", "Selected disinfection option", false],
  ["10 · OUTLET", "Treated Water", "Reuse / discharge subject to requirements", false],
] as const;

const sludgeStages = [
  ["EXCESS SLUDGE", "Excess Sludge", "Sludge removed from the process"],
  ["HOLDING", "Sludge Holding Tank", "Intermediate sludge storage"],
  ["DEWATERING", "Filter Press / Screw Press", "Selected dewatering equipment"],
  ["FINAL", "Dry Sludge for Disposal", "Disposal as per approved practice"],
] as const;

const technicalRows: TableRow[] = [
  ["Design Flow", "KLD", "10", "25", "50", "100", "200", "300", "500"],
  ["Operation Hours", "Hrs", "22", "22", "22", "22", "22", "22", "22"],
  ["Average Flow", "m³/hr", "0.45", "1.14", "2.27", "4.55", "9.09", "13.64", "22.73"],
  ["No. of SBR Tanks", "Nos.", "2", "2", "2", "2", "3", "3", "4"],
  ["Working Volume per Tank", "m³", "12", "30", "60", "110", "220", "300", "450"],
  ["Cycle Time", "Hrs", "6", "6", "6", "6", "6", "6", "6"],
  ["MLSS (Operating)", "mg/L", "3,000–4,000", "3,000–4,000", "3,000–4,000", "3,000–4,000", "3,000–4,000", "3,000–4,000", "3,000–4,000"],
  ["F/M Ratio", "kg BOD/kg MLSS", "0.05–0.15", "0.05–0.15", "0.05–0.15", "0.05–0.15", "0.05–0.15", "0.05–0.15", "0.05–0.15"],
  ["Air Requirement (Aeration)", "m³/hr", "15", "35", "70", "140", "280", "420", "700"],
  ["Connected Load (Approx.)", "kW", "3–4", "5–8", "7–12", "15–22", "30–45", "45–65", "75–110"],
  ["Total Area Required (Approx.)", "m²", "40–60", "70–100", "120–180", "200–300", "400–600", "600–850", "900–1,300"],
];

const qualityRows: TableRow[] = [
  ["pH", "—", "6.5–8.5", "6.5–8.0"],
  ["BOD", "mg/L", "200–350", "< 10"],
  ["COD", "mg/L", "400–600", "< 30"],
  ["TSS", "mg/L", "200–300", "< 10"],
  ["Oil & Grease", "mg/L", "10–20", "< 5"],
  ["Ammonia-N", "mg/L", "20–40", "< 5"],
  ["Total Nitrogen", "mg/L", "30–50", "< 10"],
  ["Fecal Coliform", "MPN/100 mL", "10⁵–10⁶", "< 10²"],
];

const mocRows: TableRow[] = [
  ["SBR Reactor Tank", "RCC / MSEP with FRP Lining / FRP"],
  ["Primary & Secondary Clarifier", "FRP / MSEP with FRP Lining"],
  ["Bar Screen (Manual/Auto)", "SS-304 / MS"],
  ["Pumps (Transfer/Decant/Submersible)", "CI / SS-304"],
  ["Blowers", "Root Blower / Turbo Blower"],
  ["Diffusers", "EPDM Fine Bubble Diffuser"],
  ["PSF & ACF Vessels", "FRP / MSEP (FRP Lined)"],
  ["Piping (Process)", "UPVC / CPVC / GI"],
  ["Valves", "UPVC / CPVC / SS-304"],
  ["Instrumentation", "pH, DO, Flow, Level, MLSS, etc."],
  ["Control Panel", "MCC with PLC, HMI (Optional)"],
];

const bomItems: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Filter, title: "Bar Screen (SS-304)", text: "Listed for the typical 50 KLD BOM." },
  { icon: Waves, title: "Submersible Pump (2+1)", text: "Quantity preserved; duty/standby meaning requires confirmation." },
  { icon: Wind, title: "Air Blower (2+1)", text: "Quantity preserved; arrangement requires confirmation." },
  { icon: Waves, title: "Fine Bubble Diffusers", text: "Fine-bubble aeration equipment." },
  { icon: Gauge, title: "Decant Pump (1+1)", text: "Quantity preserved; final duty arrangement requires confirmation." },
  { icon: Filter, title: "PSF", text: "Where included in the configured treatment." },
  { icon: Filter, title: "ACF", text: "Where included in the configured treatment." },
  { icon: ShieldCheck, title: "Disinfection (UV/Ozone)", text: "Selected disinfection option." },
  { icon: Layers3, title: "Sludge Holding Tank", text: "Sludge storage stage in the typical BOM." },
  { icon: Recycle, title: "Filter Press (Optional)", text: "Optional sludge dewatering equipment." },
  { icon: Settings2, title: "Control Panel (PLC)", text: "PLC-based control panel listed." },
];

const industries: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Building2, title: "Residential Societies", text: "Shared residential wastewater flows." },
  { icon: Landmark, title: "Commercial Buildings", text: "Offices and commercial premises." },
  { icon: Building2, title: "Hotels & Resorts", text: "Hospitality operations." },
  { icon: Hospital, title: "Hospitals & Healthcare", text: "Application-specific healthcare treatment." },
  { icon: School, title: "Educational Institutions", text: "Schools, colleges and campuses." },
  { icon: Factory, title: "IT Parks", text: "Large commercial campuses." },
  { icon: Factory, title: "Industrial Areas", text: "Industrial sewage subject to influent review." },
  { icon: Landmark, title: "Government Projects", text: "Project-specific public-sector treatment." },
  { icon: Building2, title: "Malls & Multiplexes", text: "High-occupancy commercial destinations." },
  { icon: HardHat, title: "Construction Camps", text: "Suitable temporary or permanent camp facilities." },
  { icon: Building2, title: "Townships", text: "Shared township wastewater flows." },
  { icon: SlidersHorizontal, title: "Others", text: "Other suitable applications subject to review." },
];

const gallery = [
  ["Civil Work in Progress", "50 KLD STP"],
  ["SBR Tanks Installation", "100 KLD STP"],
  ["MGF, ACF & Piping Installation", "100 KLD STP"],
  ["Electrical & Control Panel", "100 KLD STP"],
  ["Tertiary Treatment & Pump Room", "100 KLD STP"],
  ["Complete STP Installation", "100 KLD STP"],
];

const executionOptions = [
  ["FRP", "FRP is listed as a construction/material option; final availability depends on capacity and design.", Layers3],
  ["MSEP", "MSEP is retained as the brochure abbreviation; its official expansion requires confirmation.", ShieldCheck],
  ["RCC", "RCC is listed for suitable civil-tank execution; detailed civil design is project-specific.", HardHat],
] as const;

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, label, className = "" }: { headers: string[]; rows: TableRow[]; label: string; className?: string }) {
  return <div className={styles.tableWrap + " " + className}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={row[0] + "-" + rowIndex}>{row.map((cell, cellIndex) => <td key={row[0] + "-" + cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProcessLane({ items, laneClass = "" }: { items: readonly (readonly [string, string, string] | readonly [string, string, string, boolean])[]; laneClass?: string }) {
  return <div className={stp.processLane + " " + laneClass} role="list">{items.map((item) => { const [label, title, note, active] = item; return <div className={stp.processNode + " " + (active ? stp.processNodeActive : "")} key={label + "-" + title} role="listitem"><span>{label}</span><strong>{title}</strong><small>{note}</small></div>; })}</div>;
}

function HeroVisual() {
  return <div className={styles.heroVisual}><div className={styles.heroVisualFrame}><Image src="/banner/advanced-biological.png" alt="Related biological wastewater treatment plant reference" fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>SBR context</span></div><div className={stp.heroVisualNote}>Existing biological wastewater-treatment asset shown as a related process reference. It is not presented as a specific AQUEN SBR installation photograph.</div><div className={styles.heroCaption}><span>Capacity</span><strong>10–500 KLD</strong><span>Operation</span><strong>22 hours</strong></div></div>;
}

export default function SewageTreatmentPlantContent() {
  return <div className={styles.page}><Header /><main>
    <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Sewage Treatment Plant (STP)</strong></nav><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN FLUID TECHNOLOGIES LLP · COMPLETE WATER &amp; WASTEWATER TREATMENT SOLUTIONS</span><h1>SEWAGE TREATMENT <em>PLANT (STP)</em></h1><h2>SBR Technology — Sequencing Batch Reactor</h2><p>AQUEN offers SBR-based sewage treatment systems from 10 to 500 KLD for residential, commercial, institutional and industrial applications. Treatment stages and construction options are selected according to project requirements, intended reuse or discharge and applicable norms.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About STP Solutions <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>10–500 KLD</strong><span>brochure capacity range</span></div><div><strong>22 HOURS</strong><span>operation reference</span></div><div><strong>SBR</strong><span>sequencing batch reactor</span></div></div><p className={styles.heroNote}>Cleaner Water, Greener Tomorrow · Typical values and configurations require engineering confirmation.</p></div><HeroVisual /></div></div></section>

    <section className={styles.section} id="overview"><div className={styles.container}><SectionHeading eyebrow="01 · STP OVERVIEW" title="SBR-Based Sewage Treatment Plant">An SBR sewage treatment plant treats domestic sewage through sequential reactor stages. The brochure identifies primary and secondary clarification, automated PLC-based operation, optional tertiary treatment and FRP, MSEP or RCC options across 10–500 KLD. Treated water may be considered for reuse or discharge subject to the selected configuration and applicable requirements.</SectionHeading><div className={stp.membraneGrid}><div className={stp.membranePanel}><div className={stp.membranePlaceholder}><Layers3 size={39} /><strong>Sequential biological treatment</strong><span>SBR reactors operate through fill, react, settle and decant stages; exact timing and controls are design-dependent.</span></div><div className={stp.membranePanelNote}><CircleAlert size={17} /><span>The brochure’s BOD-below-10 mg/L statement is a target requiring confirmation, not an unconditional guarantee.</span></div></div><div className={stp.membranePanel}><div className={stp.membranePlaceholder}><Waves size={39} /><strong>Configured treatment train</strong><span>Screening, oil-and-grease control, equalization, clarification, optional filtration and disinfection are selected for the project.</span></div></div></div></div></section>

    <section className={styles.section + " " + styles.lightSection} id="features"><div className={styles.container}><SectionHeading eyebrow="02 · KEY FEATURES" title="Key Features of Our SBR Sewage Treatment Plant">The following brochure-listed features are presented with the qualifications required for project-specific sewage treatment.</SectionHeading><div className={styles.featureGrid}>{features.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>SCADA is an option only. Confirm its inclusion, the actual BOD target and the reuse or discharge requirements for the selected plant.</span></div></div></section>

    <section className={styles.section + " " + styles.darkSection} id="sbr-technology"><div className={styles.container}><SectionHeading eyebrow="03 · SBR TECHNOLOGY" title="Fill · React · Settle · Decant">SBR treatment operates through sequential stages in a reactor. The brochure states an overall cycle-time entry of 6 hours, but does not provide individual durations for each stage.</SectionHeading><div className={sbr.cycleGrid}>{cycleStages.map(([number, title, text]) => <article className={sbr.cycleCard} key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className={stp.processLegend}><span><b>Overall cycle:</b> 6 hours is retained from the technical table.</span><span><b>Stage timing:</b> individual durations require confirmation.</span><span><b>Controls:</b> PLC automation is listed; final scope is configuration-dependent.</span></div></div></section>

    <section className={styles.section} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="04 · PROCESS FLOW DIAGRAM" title="Process Flow Diagram — SBR Technology with Primary and Secondary Clarification">The main treatment sequence is preserved from the brochure. PSF and ACF remain optional, and sludge handling is shown as a separate branch without inventing sludge-return connections.</SectionHeading><div className={stp.processBoard}><div className={stp.laneHeading}><span>Inlet Sewage → Treated Water (Reuse / Discharge)</span><small>Typical sequence · confirm final process design</small></div><ProcessLane items={processStages} laneClass={sbr.sbrProcessLane} /><div className={stp.laneHeading}><span>Sludge-handling flow</span><small>Separate branch from the main water path</small></div><ProcessLane items={sludgeStages} laneClass={sbr.sbrSludgeLane} /><div className={stp.processLegend}><span><b>Optional:</b> PSF and ACF are shown only where required.</span><span><b>Disinfection:</b> UV/Ozone terminology retained from the brochure.</span><span><b>Sludge:</b> excess sludge to holding, dewatering and disposal.</span></div></div><p className={styles.darkNote}>The exact reactor arrangement, decant routing and sludge-handling connection must be confirmed against the approved engineering drawing.</p></div></section>

    <section className={styles.section} id="installations"><div className={styles.container}><SectionHeading eyebrow="05 · INSTALLATION GALLERY" title="SBR STP Installation Stages">The brochure captions below are preserved in sequence. Approved project photographs are not currently available, so placeholders are used instead of unrelated images.</SectionHeading><div className={sbr.installationGrid}>{gallery.map(([title, capacity]) => <article className={sbr.installationCard} key={title}><div className={sbr.installationMedia}><MapPinned size={28} /><span>Approved installation photograph to be supplied or confirmed.</span></div><div className={sbr.installationBody}><h3>{title}</h3><p>{capacity}</p></div></article>)}</div><div className={stp.assetNote}><PackageCheck size={17} /><span>Six brochure captions and their order are preserved without fabricating project imagery.</span></div></div></section>

    <section className={styles.section + " " + styles.lightSection} id="technical-specifications"><div className={styles.container}><SectionHeading eyebrow="06 · TECHNICAL SPECIFICATIONS" title="Technical Specifications — SBR STP">Operation Hours: 22 HRS. The seven capacity columns and all brochure-listed values and units are preserved as indicative technical data.</SectionHeading><DataTable headers={["Parameter", "Unit", "10 KLD", "25 KLD", "50 KLD", "100 KLD", "200 KLD", "300 KLD", "500 KLD"]} rows={technicalRows} label="SBR sewage treatment plant technical specifications" className={sbr.unitTable} /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Verify MLSS, F/M units, working volume per tank, SBR tank count, cycle-time relationship, aeration, connected load and approximate area against the original engineering datasheet.</span></div></div></section>

    <section className={styles.section} id="inlet-outlet"><div className={styles.container}><SectionHeading eyebrow="07 · WATER QUALITY PARAMETERS" title="Typical Inlet &amp; Outlet Parameters — Domestic Sewage">The brochure values below are typical figures, not guaranteed results. Outlet values can be customized as per discharge / reuse requirements.</SectionHeading><DataTable headers={["Parameter", "Unit", "Inlet (Typical)", "Outlet (Typical)"]} rows={qualityRows} label="Typical domestic sewage inlet and outlet parameters for SBR STP" className={stp.compactTable} /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Actual performance depends on sewage, configuration, operation, maintenance, testing and applicable requirements. Confirm disinfection when presenting the fecal-coliform target.</span></div></div></section>

    <section className={styles.section + " " + styles.lightSection} id="moc"><div className={styles.container}><SectionHeading eyebrow="08 · MATERIAL OF CONSTRUCTION" title="MOC — Material of Construction">The alternatives below are transcribed from the brochure. A single plant will not use every listed material.</SectionHeading><DataTable headers={["Item", "Material"]} rows={mocRows} label="SBR STP materials of construction" className={stp.compactTable} /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Confirm the official meanings and descriptions of MSEP, FRP lining, CI, SS-304, RCC, UPVC and CPVC before treating this as an approved material schedule.</span></div></div></section>

    <section className={styles.section + " " + styles.lightSection} id="bom"><div className={styles.container}><SectionHeading eyebrow="09 · TYPICAL BILL OF MATERIAL" title="Typical Bill of Material (BOM) — 50 KLD SBR STP">The brochure specifically labels this list for a 50 KLD SBR STP. Do not automatically apply these quantities to all capacities.</SectionHeading><div className={stp.bomGrid}>{bomItems.map(({ icon: Icon, title, text }, index) => <article className={stp.bomCard} key={title}><div className={stp.bomNumber}>{String(index + 1).padStart(2, "0")}</div><div className={stp.bomIcon}><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>“2+1” and “1+1” are preserved exactly as brochure quantities. Their duty/standby meaning requires confirmation.</span></div></div></section>

    <section className={styles.section} id="industries"><div className={styles.container}><SectionHeading eyebrow="10 · INDUSTRIES &amp; SECTORS WE SERVE" title="Applications for SBR Sewage Treatment">The brochure identifies the categories below. Descriptions provide general application context and do not identify customers or make compliance claims.</SectionHeading><div className={stp.industryGrid}>{industries.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className={styles.section + " " + styles.lightSection} id="installation-options"><div className={styles.container}><SectionHeading eyebrow="11 · INSTALLATION OPTIONS" title="FRP · MSEP · RCC">The brochure lists FRP, MSEP and RCC as construction or installation options. Detailed comparisons, durations, pricing and service-life claims are not inferred.</SectionHeading><div className={stp.executionGrid}>{executionOptions.map(([title, text, Icon]) => <article className={stp.executionCard} key={title}><div className={styles.featureIcon}><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className={styles.section + " " + styles.darkSection} id="why-aquen"><div className={styles.container}><SectionHeading eyebrow="12 · WHY AQUEN?" title="A treatment partner for configured STP projects">These are brochure-listed service and commercial points. Scope, schedule, pricing and support arrangements are confirmed project by project.</SectionHeading><div className={stp.whyGrid}>{[["Customized Design as per Industry", SlidersHorizontal], ["High Treatment Efficiency", Sparkles], ["Quality Equipment & Components", PackageCheck], ["On-time Execution", HardHat], ["Competitive Pricing", Gauge], ["After Sales Support & AMC", Wrench]].map(([title, Icon]) => <article className={stp.whyCard} key={String(title)}><Icon size={22} /><h3>{String(title)}</h3><p>Brochure-listed benefit subject to the selected project scope and confirmed engineering.</p></article>)}</div></div></section>

    <section className={styles.section + " " + shared.quoteSection} id="quote"><div className={styles.container}><div className={shared.quoteGrid}><div><span className={styles.eyebrow}>13 · DESIGN, SUPPLY, INSTALLATION, COMMISSIONING &amp; AMC</span><h2>Discuss your SBR STP requirement.</h2><p>Share the sewage flow, inlet characteristics, intended reuse or discharge, available area and preferred FRP, MSEP or RCC option. AQUEN can review the suitable configuration without assuming a universal outlet quality.</p><div className={styles.ctaChecklist}><span><Check size={16} />10–500 KLD brochure capacity range</span><span><Check size={16} />SBR fill, react, settle and decant cycle</span><span><Check size={16} />Primary and secondary clarification</span><span><Check size={16} />Optional PSF, ACF and UV/Ozone</span></div><div className={shared.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={14} /></a><a href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={shared.formCard}><span className={shared.formEyebrow}>Request technical details</span><h3>Enquire About STP Solutions</h3><p>Provide your capacity, sewage characteristics, intended use and preferred execution option. The existing enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Sewage Treatment Plant SBR Solution Enquiry" /><input type="hidden" name="Source Page" defaultValue="Sewage Treatment Plant SBR Solution Page" /><div className={shared.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company / Organization *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>Required STP capacity<select name="Required STP capacity" defaultValue=""><option value="" disabled>Select capacity</option><option>10 KLD</option><option>25 KLD</option><option>50 KLD</option><option>100 KLD</option><option>200 KLD</option><option>300 KLD</option><option>500 KLD</option><option>Not sure yet</option></select></label><label>Application<input name="Application" type="text" placeholder="Residential, hotel, institution, etc." /></label><label>Preferred execution type<select name="Preferred execution type" defaultValue=""><option value="" disabled>Select execution type</option><option>FRP</option><option>MSEP</option><option>RCC</option><option>Not sure yet</option></select></label><label>Intended treated-water use<input name="Intended treated-water use" type="text" placeholder="Reuse, discharge, or under review" /></label><label className={shared.fieldFull}>Additional requirements<textarea name="Message" required placeholder="Tell us about inlet quality, area, tertiary treatment, disinfection or sludge handling needs." /></label></div><div className={shared.formSubmit}><button type="submit">Request Technical Specifications <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>

    <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="14 · SBR STP FAQ" title="Questions to resolve before specifying an SBR plant">This page preserves brochure-listed values while identifying where sewage, cycle timing, MOC, equipment quantities and outlet targets need confirmation.</SectionHeading><div className={styles.faqList}><details className={styles.faqItem}><summary>What is the SBR cycle?<span>+</span></summary><p>SBR treatment uses sequential fill, react, settle and decant stages. The brochure lists a 6-hour cycle time, but not individual stage durations.</p></details><details className={styles.faqItem}><summary>Are PSF, ACF and UV/Ozone included in every plant?<span>+</span></summary><p>No. They are optional or configuration-dependent stages selected according to reuse or discharge requirements.</p></details><details className={styles.faqItem}><summary>Are the outlet parameters guaranteed?<span>+</span></summary><p>No. They are typical brochure values. Actual performance depends on influent, configuration, operation, maintenance, testing and applicable requirements.</p></details><details className={styles.faqItem}><summary>Does the 50 KLD BOM apply to all capacities?<span>+</span></summary><p>No. It is specifically labeled as a typical 50 KLD SBR STP BOM. Quantities such as 2+1 and 1+1 require confirmation for other capacities.</p></details><details className={styles.faqItem}><summary>What does MSEP mean?<span>+</span></summary><p>MSEP is preserved as printed in the brochure. Its official expansion and material standard should be confirmed.</p></details></div></div></section>
  </main><Footer /></div>;
}
