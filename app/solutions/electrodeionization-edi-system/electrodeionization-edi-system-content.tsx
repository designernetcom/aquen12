import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleAlert,
  Download,
  Droplets,
  Factory,
  Filter,
  Gauge,
  Layers3,
  Mail,
  Pill,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Utensils,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import local from "../cation-bed/cation-bed.module.css";
import edi from "./electrodeionization-edi-system.module.css";

type TableRow = readonly string[];

const technicalRows: TableRow[] = [
  ["AQU-EDI-0.25", "250", "1", "400 @ 30", "5 Micron SS", "15", "1500 × 800 × 1500", "1.0"],
  ["AQU-EDI-0.5", "500", "1", "800 @ 30", "5 Micron SS", "20", "1800 × 900 × 1600", "1.5"],
  ["AQU-EDI-1.0", "1,000", "2", "1,500 @ 35", "5 Micron SS", "25", "2200 × 1000 × 1700", "2.5"],
  ["AQU-EDI-2.0", "2,000", "3", "3,000 @ 35", "5 Micron SS", "32", "2800 × 1200 × 2000", "4.0"],
  ["AQU-EDI-2.5", "2,500", "4", "3,500 @ 40", "5 Micron SS", "40", "3200 × 1200 × 2100", "5.0"],
  ["AQU-EDI-3.0", "3,000", "4", "4,500 @ 40", "5 Micron SS", "50", "3800 × 1500 × 2200", "6.0"],
  ["AQU-EDI-4.0", "4,000", "6", "6,000 @ 40", "5 Micron SS", "50", "4500 × 1800 × 2300", "8.0"],
  ["AQU-EDI-5.0", "5,000", "8", "7,500 @ 40", "5 Micron SS", "65", "5200 × 2000 × 2500", "10.0"],
];

const qualityRows: TableRow[] = [
  ["pH", "—", "6.0–7.0", "6.0–7.0"],
  ["Conductivity", "µS/cm", "5–30", "0.05–0.2"],
  ["TDS", "mg/L", "3–20", "< 0.1"],
  ["Silica (SiO₂)", "mg/L", "< 1.0", "< 0.01"],
  ["Total Hardness (as CaCO₃)", "mg/L", "< 1.0", "< 0.01"],
  ["Chloride (Cl⁻)", "mg/L", "< 1.0", "< 0.01"],
  ["Sulphate (SO₄²⁻)", "mg/L", "< 1.0", "< 0.01"],
  ["CO₂ (Carbon Dioxide)", "mg/L", "< 1.0", "< 0.01"],
  ["Iron (Fe)", "mg/L", "< 0.01", "< 0.001"],
  ["Manganese (Mn)", "mg/L", "Not legible in supplied image", "Verify against high-resolution source"],
  ["Organics (TOC)", "mg/L", "Not legible in supplied image", "Verify against high-resolution source"],
];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "Complete SS-304 / SS-316 construction", text: "The brochure lists stainless steel construction for vessels, piping, fittings and skid; confirm the final material schedule for each quotation." },
  { icon: Layers3, title: "EDI modules from leading brands", text: "The brochure highlights EDI modules from leading brands. Brand, module model and supply scope require confirmation." },
  { icon: Filter, title: "Filter, pump and instruments", text: "Cartridge filtration, a stainless steel high-pressure pump and stainless steel instruments are shown in the package." },
  { icon: Gauge, title: "High-purity product water", text: "The brochure lists 0.05–0.2 µS/cm conductivity for the EDI product. Actual performance depends on RO permeate and system conditions." },
  { icon: Activity, title: "Continuous operation", text: "EDI is presented for continuous operation without routine acid/alkali regeneration of the EDI process itself." },
  { icon: SlidersHorizontal, title: "Compact skid-mounted design", text: "The package is described as compact and modular, with final skid layout and dimensions varying by model." },
  { icon: Settings2, title: "PLC and HMI automation", text: "Automatic operation with PLC and HMI is listed; no brand, software sequence or certification is implied." },
  { icon: Gauge, title: "Online monitoring", text: "Online conductivity, flow and pressure monitoring are highlighted; confirm the exact instrument list and scope." },
  { icon: Wrench, title: "Low maintenance and long service life", text: "These are brochure-listed benefits, not guaranteed intervals or outcomes. Maintenance depends on feed quality and approved service practice." },
  { icon: Factory, title: "Factory-tested and customized", text: "The brochure describes pre-engineered, factory-tested systems customized from 250 LPH to 5,000 LPH." },
  { icon: Droplets, title: "RO, DM and ultrapure-water duties", text: "Suitable use depends on feed-water quality, upstream RO performance and the required product-water specification." },
  { icon: Activity, title: "Low operating cost", text: "A brochure-listed benefit only; no independent cost comparison or operating-cost guarantee is made here." },
];

const configurations: { title: string; capacity: string; text: string }[] = [
  { title: "EDI Unit – 250 LPH", capacity: "250 LPH", text: "Brochure-highlighted configuration; confirm module selection and final skid scope." },
  { title: "EDI Unit – 1,000 LPH", capacity: "1,000 LPH", text: "Brochure-highlighted configuration; technical table lists the 1,000 LPH model with 2 EDI modules." },
  { title: "EDI Unit – 2,500 LPH", capacity: "2,500 LPH", text: "Brochure-highlighted configuration; technical table lists the 2,500 LPH model with 4 EDI modules." },
  { title: "EDI Unit – 5,000 LPH", capacity: "5,000 LPH", text: "Brochure-highlighted configuration; technical table lists the 5,000 LPH model with 8 EDI modules." },
];

const applications: { icon: LucideIcon; title: string; image: string; note: string }[] = [
  { icon: Pill, title: "Pharmaceutical", image: "/installation-img2.png", note: "Product-water quality and validation requirements apply." },
  { icon: Factory, title: "Power Plant", image: "/about-img.png", note: "Use depends on the approved high-purity water train." },
  { icon: Gauge, title: "Electronics / Semiconductor", image: "/banner/advanced-biological.png", note: "Final purity targets and contamination controls require confirmation." },
  { icon: Utensils, title: "Food & Beverage", image: "/banner/industries-we-serve.png", note: "Utility and process-water duties are application-specific." },
  { icon: Waves, title: "Chemical Industry", image: "/banner/fabrication-engineering.png", note: "Materials, feed quality and final use require engineering review." },
  { icon: Wrench, title: "Laboratory / Research", image: "/banner/water-treatment.png", note: "Do not infer laboratory-grade compliance from the system alone." },
];

const components: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Layers3, title: "EDI Module", text: "The principal electrodeionization component for producing high-purity product water from suitable pre-treated feed." },
  { icon: Filter, title: "SS Cartridge Filter", text: "Stainless steel cartridge-filter housing with the brochure-listed 5 Micron filter." },
  { icon: Gauge, title: "High Pressure Pump (SS)", text: "Stainless steel pump assembly sized for the selected configuration and model-wise feed-pump figures." },
  { icon: Wrench, title: "SS Piping & Fittings", text: "Stainless steel piping and fittings for the configured skid; exact grade is subject to the final scope." },
  { icon: Activity, title: "Instrumentation", text: "Pressure gauge, flow meter and conductivity meter are illustrated; pH, flow and conductivity scope requires confirmation." },
  { icon: Settings2, title: "PLC Panel with HMI", text: "PLC and human-machine interface in a stainless steel enclosure, without an implied brand or certification." },
];

const scopeItems = [
  "EDI modules, as per capacity",
  "Cartridge filter housing with filter elements",
  "High-pressure pump (SS-304/316)",
  "All piping, fittings and valves (SS-304/316)",
  "Instrumentation (pH, flow, conductivity)",
  "SS skid with support",
  "Control panel with PLC and HMI",
  "Interconnecting cables and accessories",
  "Testing, commissioning and documentation",
];

const faqs = [
  ["What is an EDI unit?", "Electrodeionization combines ion-exchange media, ion-selective membranes and an electrical driving force to remove remaining ionic contaminants from suitable pre-treated water, typically RO permeate."],
  ["Is EDI the same as a mixed bed or water softener?", "No. EDI is a distinct continuous electrochemical deionisation process. It should not be described as a conventional sodium-cycle softener or as a mixed-bed resin system."],
  ["What feed water does EDI require?", "The brochure process starts with RO permeate. Upstream RO performance and feed-water quality must meet the approved EDI design requirements; EDI does not replace the upstream RO system."],
  ["What product conductivity is listed?", "The brochure lists a typical EDI-product conductivity of 0.05–0.2 µS/cm. This is a brochure-listed value, not a universal guarantee for every feed condition or configuration."],
  ["What capacities are available?", "The advertised range is 250 LPH to 5,000 LPH. The technical table includes eight models at 250, 500, 1,000, 2,000, 2,500, 3,000, 4,000 and 5,000 LPH."],
  ["What does “LPH @ m” mean for the feed pump?", "The table preserves the brochure notation, such as 400 @ 30 and 7,500 @ 40. The exact pump-head unit and operating point must be confirmed by AQUEN."],
  ["Does EDI require acid or alkali regeneration?", "The brochure highlights no routine acid/alkali regeneration of the EDI process. This does not mean the complete water plant is chemical-free or never needs maintenance or cleaning."],
  ["What is included in the standard scope?", "The brochure lists EDI modules, cartridge filter, SS high-pressure pump, piping and valves, instrumentation, SS skid, PLC/HMI panel, cables/accessories, and testing, commissioning and documentation. Final scope is quotation-specific."],
  ["Are the manganese and TOC values known?", "The additional brochure rows are not legible in the supplied image. They are displayed as verification items rather than invented numerical values."],
  ["Does EDI guarantee product-water quality?", "No. Actual performance depends on RO permeate quality, system configuration, operating conditions, module selection and manufacturer design specifications."],
  ["Can EDI be used for pharma or semiconductor applications?", "It may be suitable where the approved feed and product-water specifications support the application. No industry certification or compliance claim is made here."],
  ["How do I request technical details?", "Use the enquiry form below or share your capacity, RO permeate analysis, target product water and application with AQUEN."],
] as const;

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, compact = false, wide = false, label }: { headers: string[]; rows: TableRow[]; compact?: boolean; wide?: boolean; label: string }) {
  return <div className={`${styles.tableWrap} ${compact ? styles.compactTable : ""} ${wide ? edi.wideTable : ""}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProcessDiagram() {
  return <div className={local.processBoard}>
    <div className={edi.processPath} aria-label="Typical RO plus EDI system process flow diagram">
      <div className={local.processNode}><span>01 · FEED</span><strong>RO Permeate</strong><small>Incoming feed to EDI system</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>02 · STORAGE</span><strong>RO Permeate Tank</strong><small>SS-304/316</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>03 · FILTER</span><strong>Cartridge Filter</strong><small>5 Micron · SS-304/316</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>04 · PUMP</span><strong>Feed Pump</strong><small>SS-304/316 · model-specific</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={`${local.processNode} ${local.processNodeActive}`}><span>05 · EDI</span><strong>EDI Modules</strong><small>Module count varies by model</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>06 · STORAGE</span><strong>Product Water Tank</strong><small>SS-304/316</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>07 · OUTPUT</span><strong>Product Water</strong><small>Ultra pure · 0.05–0.2 µS/cm listed</small></div>
    </div>
    <div className={local.processFoot}><span><b>RO permeate is the feed.</b> EDI does not replace the upstream RO system.</span><span><b>Product quality depends on design.</b> The listed conductivity is typical brochure data, not a guarantee.</span></div>
  </div>;
}

export default function EdiContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>EDI (Electrodeionization) Unit</strong></nav>
<div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN SOLUTION SYSTEM · ELECTRODEIONIZATION</span><h1>EDI <em>(Electrodeionization) Unit</em></h1><h2>Complete Stainless Steel (SS-304 / SS-316) Construction</h2><p>AQUEN offers skid-mounted Electrodeionization systems designed for continuous production of high-purity water from suitable reverse osmosis permeate. The brochure-listed configurations cover 250–5,000 LPH, with stainless steel construction, automated controls and online monitoring options.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About EDI Systems <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link><a className={styles.downloadButton} href="/edi-systems-brochure.pdf" download="Aquen-EDI-Systems-Brochure.pdf" aria-label="Download the Aquen EDI Systems brochure PDF">Download Brochure <Download size={16} /></a></div><div className={styles.heroMetrics}><div><strong>250–5,000 LPH</strong><span>brochure capacity range</span></div><div><strong>SS-304 / SS-316</strong><span>construction</span></div><div><strong>0.05–0.2 µS/cm</strong><span>listed product range</span></div></div><p className={styles.heroNote}>High Purity Water for Industrial Applications · Design · Manufacturing · Supply · Installation · Commissioning · AMC · Cleaner Water · Greener Tomorrow</p></div><div className={styles.heroVisual}><div className={edi.heroVisualPlaceholder}><Layers3 size={45} /><strong>EDI system image to confirm</strong><span>No EDI-specific image asset was found in the current repository. This page does not relabel RO, mixed-bed or other equipment as EDI.</span><small>Replace with an approved EDI photograph or brochure image when supplied.</small></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>EDI configuration reference</span></div><div className={styles.heroCaption}><span>Feed</span><strong>RO permeate</strong><span>Output</span><strong>High-purity water</strong></div></div></div>
      </div></section>

      <section className={styles.section} id="features"><div className={styles.container}><SectionHeading eyebrow="01 · Key features & benefits" title="Continuous high-purity water from suitable RO permeate">The following features are brochure-listed and remain subject to feed-water quality, EDI module selection, operating conditions, instrument scope and final engineering review.</SectionHeading><div className={styles.featureGrid}>{features.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className={styles.cautionNote}><CircleAlert size={19} /><div><strong>Chemical-free qualification</strong><span>“No routine acid/alkali regeneration” refers to the EDI process. It does not mean the complete water-treatment plant is chemical-free or needs no maintenance or cleaning.</span></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="configurations"><div className={styles.container}><SectionHeading eyebrow="02 · EDI model configurations" title="Four brochure-highlighted capacities, eight technical models">The four configurations shown below are the brochure highlights. The complete model-wise table later on this page includes the intervening 500, 2,000, 3,000 and 4,000 LPH capacities.</SectionHeading><div className={edi.configGrid}>{configurations.map(({ title, capacity, text }, index) => <article className={edi.configCard} key={title}><span>0{index + 1} · CONFIGURATION</span><Gauge size={21} /><h3>{title}</h3><strong>{capacity}</strong><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="03 · PROCESS FLOW DIAGRAM (TYPICAL – RO + EDI)" title="RO permeate → EDI modules → ultra-pure product water">The sequence shows the upstream RO feed and the seven brochure-labelled stages without adding unsupported treatment equipment or operating claims.</SectionHeading><ProcessDiagram /><p className={styles.darkNote}>Tank materials, filter material, pump materials and module construction are shown as brochure labels; final equipment scope is model-specific.</p></div></section>

      <section className={styles.section} id="working-principle"><div className={styles.container}><SectionHeading eyebrow="04 · Working principle" title="Ion exchange plus an electrical driving force">Electrodeionization combines ion-exchange media and ion-selective membranes with an electrical driving force to remove remaining ionic contaminants from suitable RO permeate. The exact membrane, resin and electrical design details are not specified in the supplied brochure.</SectionHeading><div className={local.stepGrid}><article><span>01</span><Droplets size={20} /><h3>Receive suitable RO permeate</h3><p>The EDI system depends on the upstream RO system and the quality of the water entering the EDI train.</p></article><article><span>02</span><Layers3 size={20} /><h3>Move ions through the media</h3><p>Ion-exchange media and ion-selective membranes support movement and removal of remaining ionic contaminants.</p></article><article><span>03</span><Activity size={20} /><h3>Apply the electrical driving force</h3><p>The electric field drives ionic transport through the EDI stack; voltage, current and detailed module design are not invented here.</p></article><article><span>04</span><Gauge size={20} /><h3>Monitor product quality</h3><p>Online conductivity, flow and pressure monitoring are highlighted, with exact instruments and control logic to confirm.</p></article></div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Do not infer operating voltage, current, membrane specifications, recovery, reject flow, electrode-rinse flow, cleaning chemistry or product-water yield from this page.</span></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="applications"><div className={styles.container}><SectionHeading eyebrow="05 · Applications" title="High-purity water for industrial applications">The brochure illustrates the following application categories. Suitability depends on feed quality, product-water targets, configuration and the approved process design.</SectionHeading><div className={local.applicationSection}><div className={local.applicationLead}><span className={styles.miniEyebrow}>Application map</span><h3>Match the EDI train to the quality target</h3><p>EDI can be used in appropriate RO, DM and ultrapure-water systems; it does not establish industry certification or compliance by itself.</p></div><div className={local.applicationGrid}>{applications.map(({ icon: Icon, title, image, note }) => <article className={local.applicationCard} key={title}><div className={local.applicationImage}><Image src={image} alt={`${title} application reference`} fill sizes="(max-width: 620px) 50vw, 180px" /><span aria-hidden="true"><Icon size={17} /></span></div><strong>{title}</strong><small>{note}</small></article>)}</div></div></div></section>

      <section className={styles.section} id="quality-data"><div className={styles.container}><SectionHeading eyebrow="06 · Water quality" title="Typical Inlet & Outlet Parameters">The source identifies the inlet as RO permeate and the outlet as EDI product. These are typical brochure values, not independent test results or universal guarantees.</SectionHeading><DataTable label="Typical EDI RO permeate inlet and product outlet parameters" headers={["Parameter", "Unit", "Typical Inlet (RO Permeate)", "Typical Outlet (EDI Product)"]} rows={qualityRows} compact /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Mn and TOC values are not legible in the supplied image and are intentionally shown as verification items. Confirm all values against the high-resolution source, RO performance, EDI configuration and manufacturer design specifications.</span></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="technical-specifications"><div className={styles.container}><SectionHeading eyebrow="07 · Catalogue data" title="TECHNICAL SPECIFICATIONS (250 LPH TO 5,000 LPH)">All eight model rows and the printed values are preserved below. Skid dimensions are approximate; the feed-pump “LPH @ m” notation, pipe-size interpretation and connected-load scope require confirmation.</SectionHeading><div className={styles.sourceBanner}><CircleAlert size={19} /><div><strong>Working brochure transcription — engineering verification required</strong><span>Confirm the AQU-EDI model punctuation, the meaning and unit of “@ m”, whether pipe size applies equally to inlet and outlet, whether connected load covers the complete package, and all customization assumptions.</span></div></div><DataTable label="EDI model technical specifications" headers={["Model", "Capacity (LPH)", "Number of EDI Modules", "Feed Pump (LPH @ m)", "Cartridge Filter (Size)", "Inlet / Outlet Pipe Size (NB)", "Skid Dimensions (L × W × H), mm (approx.)", "Connected Load (kW)"]} rows={technicalRows} wide /><p className={styles.tableFootnote}>Brochure-listed specifications are indicative and must be confirmed for the final application. Do not convert connected load into a power-consumption or monthly-cost guarantee.</p></div></section>

      <section className={styles.section} id="components"><div className={styles.container}><SectionHeading eyebrow="08 · Major components" title="Major Components (BOM)">The brochure illustrates six main component groups. Brand, accuracy, certification and final supply scope are not inferred.</SectionHeading><div className={edi.componentGrid}>{components.map(({ icon: Icon, title, text }) => <article className={edi.componentCard} key={title}><div className={edi.componentIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="scope"><div className={styles.container}><SectionHeading eyebrow="09 · Supply scope" title="Standard Scope of Supply">The following nine items are brochure-listed. Optional components, site utilities, civil work, electrical supply and upstream RO equipment are not added unless confirmed in the commercial scope.</SectionHeading><div className={edi.scopeList}>{scopeItems.map((item) => <span key={item}><Check size={16} />{item}</span>)}</div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Final inclusion, quantities, material grades, testing responsibility and documentation scope must be confirmed in the approved quotation.</span></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="operation"><div className={styles.container}><SectionHeading eyebrow="10 · Operation & maintenance" title="Continuous EDI operation without routine resin regeneration">The brochure highlights continuous operation, online monitoring and automated PLC/HMI operation. EDI normally depends on suitable RO permeate and an approved operating design.</SectionHeading><div className={local.operatingGrid}><div className={edi.qualificationPanel}><CircleAlert size={19} /><div><strong>Manufacturer data still required</strong><p>Operating voltage and current, detailed membrane specifications, resin composition, electrode-rinse flow, cleaning procedures, recovery, reject or concentrate flow, startup, shutdown and troubleshooting instructions are not provided and must not be invented.</p></div></div><div className={local.operatingNote}><CircleAlert size={19} /><div><strong>Chemical and water usage</strong><p>No numerical salt, HCl, NaOH, brine, recovery, wastewater or chemical-consumption values are provided for this EDI unit. Do not transfer mixed-bed regeneration data to EDI.</p></div></div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="11 · Frequently asked questions" title="EDI system questions, answered clearly" /><div className={styles.faqList}>{faqs.map(([question, answer]) => <details className={styles.faqItem} key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className={`${styles.section} ${local.quoteSection}`} id="quote"><div className={styles.container}><div className={local.quoteGrid}><div><span className={styles.eyebrow}>12 · Design, manufacturing, supply, installation, commissioning & AMC</span><h2>Discuss your EDI system requirement.</h2><p>Share your RO permeate quality, required capacity, target product-water conductivity and application. AQUEN can confirm module selection, skid scope, instruments and controls for review.</p><div className={styles.ctaChecklist}><span><Check size={16} />Required capacity from 250–5,000 LPH</span><span><Check size={16} />RO permeate analysis and upstream details</span><span><Check size={16} />Target conductivity and application</span><span><Check size={16} />Automatic / manual preference</span></div><div className={local.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a href="tel:+919096645119">+91 9096645119 <ArrowRight size={14} /></a><a href="tel:+919622554445">+91 9622554445 <ArrowRight size={14} /></a><a href="mailto:ceo@aquenfluid.com"><Mail size={14} /> ceo@aquenfluid.com</a><a href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhamni Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={local.formCard}><span className={local.formEyebrow}>Request technical details</span><h3>Enquire About EDI Systems</h3><p>Required fields use browser validation. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="EDI Electrodeionization Unit Enquiry" /><input type="hidden" name="Source Page" defaultValue="EDI Electrodeionization Solution Page" /><div className={local.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone number *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>City / state<input name="City and State" type="text" autoComplete="address-level2" placeholder="City, state" /></label><label>Capacity in LPH<input name="Capacity" type="text" placeholder="Example: 1,000 LPH" /></label><label>Application<input name="Application" type="text" placeholder="Pharma, power, electronics, etc." /></label><label>RO permeate conductivity<input name="RO permeate conductivity" type="text" placeholder="µS/cm, if known" /></label><label>Existing RO details<input name="Existing RO details" type="text" placeholder="Capacity / stages / to follow" /></label><label>Target product conductivity<input name="Target product conductivity" type="text" placeholder="µS/cm, if known" /></label><label>Operating approach<select name="Operating approach" defaultValue=""><option value="" disabled>Select approach</option><option>Automatic</option><option>Manual</option><option>Unsure</option></select></label><label>Preferred construction<select name="Construction" defaultValue=""><option value="" disabled>Select construction</option><option>SS-304</option><option>SS-316</option><option>Unsure</option></select></label><label className={local.fieldFull}>Message<textarea name="Message" required placeholder="Tell us about your RO permeate, capacity, target quality and application." /></label></div><div className={local.formSubmit}><button type="submit">Submit requirement <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>
    </main>
    <Footer />
  </div>;
}
