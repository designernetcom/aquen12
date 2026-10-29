import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  Download,
  Droplets,
  Factory,
  FlaskConical,
  HeartPulse,
  Hotel,
  Landmark,
  PanelsTopLeft,
  Pill,
  Recycle,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Utensils,
  Waves,
  Wind,
} from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";

import styles from "../ultrafiltration-system/ultrafiltration-system.module.css";
import local from "./uv-disinfection-system.module.css";

type TableRow = readonly string[];

const technicalRows: TableRow[] = [
  ["AQU-UV-1", "1", "1", "30", "0.08", "25", "600 × 90", "SS-304 / SS-316"],
  ["AQU-UV-3", "3", "1", "55", "0.10", "25", "700 × 114", "SS-304 / SS-316"],
  ["AQU-UV-5", "5", "1", "75", "0.10", "40", "900 × 114", "SS-304 / SS-316"],
  ["AQU-UV-10", "10", "2", "75", "0.18", "50", "900 × 168", "SS-304 / SS-316"],
  ["AQU-UV-15", "15", "3", "75", "0.27", "65", "1,000 × 219", "SS-304 / SS-316"],
  ["AQU-UV-20", "20", "4", "75", "0.36", "80", "1,200 × 219", "SS-304 / SS-316"],
  ["AQU-UV-30", "30", "6", "75", "0.54", "100", "1,400 × 273", "SS-304 / SS-316"],
  ["AQU-UV-50", "50", "8", "75", "0.72", "150", "1,600 × 323", "SS-304 / SS-316"],
  ["AQU-UV-75", "75", "10", "75", "0.90", "200", "1,800 × 406", "SS-304 / SS-316"],
  ["AQU-UV-100", "100", "12", "75", "1.08", "250", "2,000 × 406", "SS-304 / SS-316"],
];

const qualityRows: TableRow[] = [
  ["pH", "—", "6.5–8.5", "6.5–8.5"],
  ["Turbidity", "NTU", "< 5", "< 1"],
  ["TSS", "mg/L", "< 10", "< 5"],
  ["Colour", "Hazen", "< 10", "< 5"],
  ["BOD", "mg/L", "< 10", "< 10"],
  ["COD", "mg/L", "< 50", "< 50"],
  ["Total Coliform", "MPN/100 mL", "10³–10⁵", "0–2"],
  ["E. coli", "MPN/100 mL", "10¹–10⁴", "< 1"],
];

const mocRows: TableRow[] = [
  ["UV reactor body", "SS-304 / SS-316"],
  ["Inlet / outlet flanges", "SS-304 / SS-316"],
  ["Quartz sleeve", "High-purity quartz"],
  ["UV lamp", "Low-pressure high-output (LPHO)"],
  ["Seals / O-rings", "EPDM / Viton"],
  ["Lamp housing", "SS-304 / SS-316"],
  ["Control panel enclosure", "MS powder-coated / SS-304 (Optional)"],
  ["Cables & connectors", "Waterproof IP-67"],
  ["UV intensity sensor", "UV sensor with 4–20 mA (Optional)"],
  ["Flow switch", "SS / PP (Optional)"],
];

const bomRows: TableRow[] = [
  ["1", "UV Reactor Chamber", "1 No.", "SS-304 / SS-316"],
  ["2", "UV Lamp (LPHO)", "As per capacity", "High-purity quartz"],
  ["3", "Quartz Sleeve", "As per lamps", "High-purity quartz"],
  ["4", "Ballast / Electronic Driver", "As per lamps", "—"],
  ["5", "UV Intensity Sensor (Optional)", "1 No.", "—"],
  ["6", "Flow Switch (Optional)", "1 No.", "SS / PP"],
  ["7", "Control Panel with Hour Meter", "1 Set", "MS / SS-304 (Optional)"],
  ["8", "Cables, Connectors & Accessories", "1 Set", "—"],
  ["9", "Inlet / Outlet Flanges", "1 Set", "SS-304 / SS-316"],
  ["10", "Seals / O-rings", "1 Set", "EPDM / Viton"],
  ["11", "Skid / Support", "1 Set", "SS-304 / MS (Optional)"],
];

const features = [
  ["High disinfection efficiency", "The brochure lists up to 99.99%; validation method, organisms, dose and operating conditions must be confirmed.", ShieldCheck],
  ["Chemical-free process", "UV does not add a chemical disinfectant to the water itself.", Sparkles],
  ["Compact and modular", "Skid-mounted or inline-type arrangements can support a compact treatment footprint.", SlidersHorizontal],
  ["SS-304 / SS-316 construction", "Reactor and component material options follow the selected configuration.", Factory],
  ["Low maintenance and operating cost", "Listed as brochure benefits; actual cost depends on water quality, lamp output and operating pattern.", Settings2],
  ["UV intensity sensor with alarm", "Optional monitoring can help identify low UV output or a service condition.", Activity],
  ["Lamp-life indicator and hour meter", "Supports maintenance planning without implying a fixed replacement interval.", PanelsTopLeft],
  ["Automatic on / off operation", "Controls can be configured around water flow and the approved operating sequence.", Check],
  ["Continuous operation", "Suitable for continuous operation when the final system is designed for the duty.", Waves],
  ["Wide capacity range", "The brochure lists a wider range of 1–100 m³/hr.", Droplets],
  ["Potable-water, RO, STP and ETP uses", "Application suitability remains subject to feed analysis and validated design.", Building2],
  ["Design, manufacturing, supply, installation, commissioning & AMC", "AQUEN can support the project through the listed service stages.", Factory],
] as const;

const applications = [
  ["Drinking Water Plants", Waves, "/banner/water-treatment.png"],
  ["RO Permeate Disinfection", Droplets, "/ro-4000-lph-ss304.png"],
  ["STP Tertiary Treatment", Recycle, "/about-img.png"],
  ["ETP Reuse & Recycling", Factory, "/installation-img1.png"],
  ["Hotels & Resorts", Hotel, "/banner/industries-we-serve.png"],
  ["Hospitals & Healthcare", HeartPulse, "/installation-img2.png"],
  ["Food & Beverage Industry", Utensils, "/banner/water-treatment.png"],
  ["Pharmaceutical Industry", Pill, "/uploads/1787122891174-264c261e-f1a2-4d9d-929a-37dede6328bb.png"],
] as const;

const optionalItems = [
  "UV Intensity Sensor",
  "Flow Switch",
  "Digital UV Controller",
  "SS Skid with Panel",
];

const faqs = [
  ["What is a UV disinfection system?", "A UV disinfection system passes water through a reactor where ultraviolet lamps expose the water to UV light. When the required UV dose is delivered, susceptible microorganisms can be inactivated by affecting their ability to reproduce."],
  ["How does UV disinfection work?", "UV lamps emit ultraviolet light inside the reactor. Water flows around a quartz-sleeved lamp and receives the exposure designed for the application. Flow, UV transmittance, lamp output, fouling and reactor design affect performance."],
  ["What is the purpose of the quartz sleeve?", "The high-purity quartz sleeve separates the lamp from the water while allowing UV light to pass through. It must be kept in the condition specified by the manufacturer so lamp output is not unnecessarily reduced."],
  ["What does 254 nm mean?", "254 nm is the UV wavelength identified in the brochure. It describes the nominal wavelength of the UV light used by the system; it is not, by itself, a guarantee of a particular microorganism reduction."],
  ["Which UV system capacities are available?", "The brochure lists a wider system range of 1–100 m³/hr, with capacity bands of 1–10, 10–50 and 50–100 m³/hr. The exact model and design conditions should be confirmed with AQUEN."],
  ["What is the difference between SS-304 and SS-316?", "They are different stainless-steel grades with different corrosion-resistance characteristics. The appropriate grade depends on water chemistry, chloride exposure, installation conditions and the approved material selection."],
  ["Why is low-turbidity water important for UV treatment?", "Particles and colour can shield microorganisms from UV light and reduce UV transmittance. Pretreatment or filtration may therefore be required where the feed does not meet the design water-quality conditions."],
  ["Does UV remove dissolved salts or TDS?", "No. UV is a disinfection process; it does not ordinarily remove dissolved salts, TDS, suspended solids, colour, odour, BOD or COD. Other treatment stages may be required for those objectives."],
  ["Does UV provide a residual disinfectant?", "No. UV does not leave a lasting disinfectant residual in treated water. A final design may require another control strategy when residual protection is needed downstream."],
  ["What does a UV intensity sensor do?", "An optional UV intensity sensor monitors the UV output reaching the measurement point and can support alarms or operator attention when the signal is low."],
  ["What maintenance does a UV system require?", "Maintenance generally includes monitoring lamp output, using the hour meter, inspecting or cleaning the quartz sleeve and replacing lamps in line with the approved AQUEN manual. Frequencies and alarm thresholds are not specified here."],
  ["How can I request a quotation?", "Use the enquiry form below or contact AQUEN with flow, application, water source, turbidity, UV transmittance or a water-analysis report if available. The selected configuration and accessories can then be reviewed."],
] as const;

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, compact = false, label }: { headers: string[]; rows: TableRow[]; compact?: boolean; label: string }) {
  return <div className={`${styles.tableWrap} ${compact ? styles.compactTable : ""}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function UVReactorIllustration({ label }: { label: string }) {
  return <svg className={local.reactorSvg} viewBox="0 0 440 260" role="img" aria-label={`Illustrative ${label} UV reactor arrangement`}>
    <defs><linearGradient id={`reactorShell-${label}`} x1="0" x2="1"><stop offset="0" stopColor="#dff9ff" /><stop offset="1" stopColor="#8ed5e5" /></linearGradient><linearGradient id={`lamp-${label}`} x1="0" x2="1"><stop offset="0" stopColor="#8feeff" /><stop offset=".5" stopColor="#fff" /><stop offset="1" stopColor="#52d6f2" /></linearGradient></defs>
    <rect x="54" y="57" width="332" height="146" rx="72" fill={`url(#reactorShell-${label})`} opacity=".56" stroke="#56b9cc" strokeWidth="3" />
    <rect x="26" y="98" width="58" height="63" rx="16" fill="#d8f5fa" stroke="#56b9cc" strokeWidth="3" /><rect x="356" y="98" width="58" height="63" rx="16" fill="#d8f5fa" stroke="#56b9cc" strokeWidth="3" />
    <path d="M84 129h272" stroke="#2a8caf" strokeWidth="10" strokeLinecap="round" opacity=".7" />
    <path d="M109 129h222" stroke="#83ecfa" strokeWidth="4" strokeLinecap="round" />
    <path d="M125 81v96M175 72v114M225 67v124M275 72v114M325 81v96" stroke="#fff" strokeWidth="12" strokeLinecap="round" opacity=".88" />
    <path d="M125 81v96M175 72v114M225 67v124M275 72v114M325 81v96" stroke={`url(#lamp-${label})`} strokeWidth="4" strokeLinecap="round" />
    <path d="M225 25v33M225 203v28" stroke="#087fae" strokeWidth="2" strokeDasharray="4 4" /><circle cx="225" cy="25" r="5" fill="#087fae" /><circle cx="225" cy="231" r="5" fill="#087fae" />
    <text x="220" y="18" fill="#173d59" fontSize="12" fontWeight="800" textAnchor="middle">UV INTENSITY SENSOR</text><text x="220" y="249" fill="#173d59" fontSize="12" fontWeight="800" textAnchor="middle">254 nm UV LAMPS + QUARTZ SLEEVES</text>
    <text x="55" y="91" fill="#3283a4" fontSize="11" fontWeight="800">INLET</text><text x="350" y="91" fill="#3283a4" fontSize="11" fontWeight="800">OUTLET</text>
  </svg>;
}

function UVProcessDiagram() {
  return <div className={local.processBoard}>
    <div className={local.processPath} aria-label="UV disinfection process flow diagram">
      <div className={local.processNode}><span>01</span><strong>Inlet Water</strong><small>from Filter / RO / STP</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={`${local.processNode} ${local.processNodeActive}`}><span>02</span><strong>UV Reactor</strong><small>254 nm exposure</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>03</span><strong>Outlet Water</strong><small>disinfected water</small></div>
    </div>
    <div className={local.reactorCallouts}>
      <span><b>UV lamp</b> Low-pressure high-output lamp inside the reactor.</span>
      <span><b>Quartz sleeve</b> Separates the lamp from water while transmitting UV.</span>
      <span><b>SS reactor</b> SS-304 / SS-316 construction options.</span>
      <span><b>Intensity sensor</b> Optional sensor and alarm for monitoring UV output.</span>
    </div>
  </div>;
}

export default function UVDisinfectionSystemContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>UV Disinfection System</strong></nav>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>AQUEN SOLUTION SYSTEM · CHEMICAL-FREE DISINFECTION</span>
              <h1>Ultra Violet <em>(UV) Disinfection System</em></h1>
              <h2>Safe, Chemical-Free &amp; Environment-Friendly Disinfection for Water &amp; Wastewater Applications</h2>
              <p>AQUEN UV systems use ultraviolet light inside a stainless-steel reactor to inactivate susceptible bacteria, viruses and protozoa when the required UV dose is delivered. The process adds no chemical disinfectant to the water itself and is selected around water quality, flow and validated performance.</p>
              <div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Request a Quote <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link><a className={styles.downloadButton} href="/uv-disinfection-systems-brochure.pdf" download="Aquen-UV-Water-Disinfection-Systems-Brochure.pdf" aria-label="Download the Aquen UV Water Disinfection Systems brochure PDF">Download Brochure <Download size={16} /></a></div>
              <div className={styles.heroMetrics}><div><strong>1–100 m³/hr</strong><span>brochure system range</span></div><div><strong>254 nm</strong><span>brochure UV wavelength</span></div><div><strong>SS-304 / SS-316</strong><span>reactor options</span></div></div>
              <p className={styles.heroNote}>Design · Manufacturing · Supply · Installation · Commissioning · AMC</p>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroVisualFrame}><Image src="/uv-disinfection-hero.png" alt="Ultraviolet disinfection water treatment plant with clarifier and flowing water" fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div>
              <div className={styles.heroBadge}><BadgeCheck size={16} /><span>Equipment reference</span></div>
              <div className={styles.heroCaption}><span>System</span><strong>UV disinfection</strong><span>Image status</span><strong>UV photo to confirm</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lightSection}`} id="visual-references">
        <div className={styles.container}>
          <SectionHeading eyebrow="UV system visuals" title="UV disinfection system references">Reference visuals for the UV disinfection system, presented for project discussion and equipment confirmation.</SectionHeading>
          <div className={styles.visualReferenceGrid}>
            <figure className={styles.visualReferenceFigure}>
              <Image src="/uv-disinfection-system-catalogue.png" alt="UV disinfection system catalogue reference" width={1027} height={681} />
              <figcaption><span>Catalogue reference</span><strong>UV disinfection system</strong></figcaption>
            </figure>
            <figure className={styles.visualReferenceFigure}>
              <Image src="/uv-disinfection-installation-references.png" alt="UV disinfection system installation reference" width={1022} height={682} />
              <figcaption><span>Installation reference</span><strong>UV treatment equipment</strong></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section}><div className={styles.container}><SectionHeading eyebrow="01 · UV disinfection overview" title="Ultraviolet light, delivered inside the treatment train">UV lamps emit ultraviolet light inside a reactor. Water passes through the reactor and receives exposure at the wavelength identified in the brochure: 254 nm.</SectionHeading><div className={styles.explainerGrid}><article className={styles.explainerCard}><div className={styles.cardIcon}><Sparkles size={20} /></div><span>01 / Expose</span><h3>UV light reaches the water</h3><p>Low-pressure high-output lamps emit UV inside the reactor. A quartz sleeve separates the lamp from the water while allowing the light to pass through.</p></article><article className={styles.explainerCard}><div className={styles.cardIcon}><ShieldCheck size={20} /></div><span>02 / Inactivate</span><h3>Susceptible microorganisms are affected</h3><p>Adequate UV exposure can affect the ability of susceptible bacteria, viruses, protozoa and other pathogens to reproduce.</p></article><article className={styles.explainerCard}><div className={styles.cardIcon}><Activity size={20} /></div><span>03 / Validate</span><h3>Design conditions control performance</h3><p>Flow rate, UV transmittance, turbidity, lamp output, fouling and reactor design determine whether the required UV dose is delivered.</p></article></div><div className={styles.cautionNote}><CircleAlert size={19} /><div><strong>Important process boundary</strong><span>UV is a disinfection step. It does not remove dissolved salts, TDS, suspended solids, colour, odour, BOD or COD, and it does not provide a lasting disinfectant residual.</span></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="capacities"><div className={styles.container}><SectionHeading eyebrow="02 · Product capacities" title="A UV configuration for 1 to 100 m³/hr">The brochure groups UV systems into three capacity bands. The final model is selected from water quality, flow, UV transmittance, target organisms and the required validated performance.</SectionHeading><div className={local.capacityPhotoGrid}>{[["UV System — 1–10 m³/hr", "1–10 m³/hr", "Compact inline / skid arrangement"], ["UV System — 10–50 m³/hr", "10–50 m³/hr", "Modular stainless-steel package"], ["UV System — 50–100 m³/hr", "50–100 m³/hr", "Higher-flow treatment reference"]].map(([title, capacity, detail], index) => <article className={local.capacityPhotoCard} key={title}><div className={local.capacityPhotoBody}><span>0{index + 1} · UV SYSTEM</span><h3>{title}</h3><strong>{capacity}</strong><p>SS-304 / SS-316 · {detail}</p><small>Reference image — exact UV product photograph to confirm against the approved brochure.</small></div></article>)}</div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="working-principle"><div className={styles.container}><SectionHeading eyebrow="03 · Working principle" title="Inlet water → UV reactor → disinfected outlet">Water flows through the stainless-steel UV reactor after suitable upstream treatment. UV lamps expose the water at 254 nm; the outlet is described as disinfected subject to the design conditions and validated performance.</SectionHeading><UVProcessDiagram /><div className={local.workingGrid}><div><h3>What the reactor contains</h3><p>SS-304 / SS-316 reactor construction, UV lamps, quartz sleeves and an optional UV intensity sensor are identified in the brochure. Automatic operation, alarms and hour-meter monitoring can support continuous operation when specified for the final duty.</p></div><div className={local.workingNote}><CircleAlert size={19} /><span>Do not treat the diagram as a lamp-power, UV-dose or reactor-dimension drawing. Those values are selected in the approved design.</span></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="features-applications"><div className={styles.container}><SectionHeading eyebrow="04 · Features & applications" title="Built around the disinfection objective">The brochure lists the following features and application categories. The final UV system must be selected based on water quality, flow rate, UV transmittance and the required disinfection target.</SectionHeading><div className={styles.featureGrid}>{features.map(([title, text, Icon]) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className={local.applicationSection}><div className={local.applicationLead}><span className={styles.miniEyebrow}>Application map</span><h3>Where UV may fit</h3><p>UV can be considered after filtration, RO or biological treatment where the feed quality and required disinfection target support the design.</p></div><div className={local.applicationGrid}>{applications.map(([label, Icon, image]) => <div className={local.applicationCard} key={label}><div className={local.applicationImage}><Image src={image} alt={`${label} water-treatment application reference`} fill sizes="(max-width: 620px) 50vw, 180px" /><span aria-hidden="true"><Icon size={17} /></span></div><strong>{label}</strong></div>)}</div></div></div></section>

      <section className={styles.section} id="technical-specifications"><div className={styles.container}><SectionHeading eyebrow="05 · Catalogue data" title="TECHNICAL SPECIFICATIONS — UV DISINFECTION SYSTEM (1 m³/hr TO 100 m³/hr)">The following values are preserved from the supplied brochure transcription. They are indicative and actual size and configuration may vary based on water quality and UV dose requirements.</SectionHeading><div className={styles.sourceBanner}><CircleAlert size={19} /><div><strong>Engineering verification required before publication</strong><span>Confirm model identifiers, chamber dimensions, connection sizes, total-power interpretation, capacity bands and the UV dose/design conditions associated with each flow capacity against AQUEN&apos;s current data sheet.</span></div></div><DataTable label="Technical specifications for UV disinfection system" headers={["Model", "Flow capacity (m³/hr)", "No. of UV lamps", "Lamp power (W)", "Total power (kW)", "Inlet/outlet size (NB)", "Chamber size (mm)", "MOC"]} rows={technicalRows} /><p className={styles.tableFootnote}>Specifications are indicative. The table is for technical discussion only and is not a performance warranty or a substitute for the approved engineering design.</p></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="quality-data"><div className={styles.container}><SectionHeading eyebrow="06 · Water quality" title="TYPICAL INLET & OUTLET PARAMETERS">These are brochure-provided typical water parameters. Upstream treatment conditions influence turbidity, TSS, colour, BOD and COD; UV primarily inactivates susceptible microorganisms.</SectionHeading><DataTable label="Typical inlet and outlet parameters after UV" headers={["Parameter", "Unit", "Typical inlet", "Typical outlet (after UV)"]} rows={qualityRows} compact /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>For best performance, water shall be low in turbidity and free from colour. UV is used for disinfection and does not remove TDS, BOD and COD. Confirm the total-coliform and E. coli outlet figures against AQUEN validation data before presenting them as guaranteed results.</span></div></div></section>

      <section className={styles.section} id="materials-bom"><div className={styles.container}><SectionHeading eyebrow="07 · Construction & supply" title="Materials and a configuration-dependent BOM">The brochure lists the following material options and typical bill of material. Optional components are not included automatically in every configuration.</SectionHeading><div className={styles.twoTableGrid}><div><h3 className={styles.tableTitle}>Material of construction</h3><DataTable label="UV disinfection material of construction" headers={["Item", "Material"]} rows={mocRows} compact /></div><div><h3 className={styles.tableTitle}>TYPICAL BILL OF MATERIAL (BOM)</h3><DataTable label="Typical UV disinfection bill of material" headers={["No.", "Description", "Quantity", "MOC / specification"]} rows={bomRows} compact /></div></div><p className={styles.tableFootnote}>The brochure does not make every BOM quantity or material selection clear. Request the official engineering BOM before quotation or procurement.</p></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="optional-accessories"><div className={styles.container}><SectionHeading eyebrow="08 · Optional accessories" title="Add monitoring and control where required">Exact accessories depend on the selected model and quotation. The following items are listed in the brochure and are not included automatically in the standard price.</SectionHeading><div className={styles.optionalGrid}>{optionalItems.map((item, index) => <div className={styles.optionalCard} key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><small>Confirm scope in quotation</small></div>)}</div><div className={styles.operatingCard}><div className={styles.operatingIcon}><Settings2 size={20} /></div><div><h3>Operating and maintenance information</h3><p>Water must flow through the reactor under the designed operating conditions. The lamp provides the required ultraviolet output, the quartz sleeve separates the lamp from water, and an optional sensor can monitor output. Quartz-sleeve cleaning and lamp replacement must follow AQUEN&apos;s approved manual; this page does not set lamp-life hours, cleaning frequency, dose, pressure, flow-switch settings or alarm thresholds.</p></div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="09 · Frequently asked questions" title="UV disinfection questions, answered clearly" /><div className={styles.faqList}>{faqs.map(([question, answer]) => <details className={styles.faqItem} key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className={`${styles.section} ${local.quoteSection}`} id="quote"><div className={styles.container}><div className={local.quoteGrid}><div><span className={styles.eyebrow}>10 · Request a quote</span><h2>Let&apos;s design the right UV system for your water.</h2><p>Share your capacity, application, water source and any available water-analysis information. AQUEN can review the UV configuration, upstream treatment and quotation scope.</p><div className={styles.ctaChecklist}><span><Check size={16} />Required capacity in m³/hr</span><span><Check size={16} />Application and water source</span><span><Check size={16} />Turbidity and UV transmittance, if known</span><span><Check size={16} />Water-analysis report availability</span></div></div><div className={local.formCard}><span className={local.formEyebrow}>AQUEN Fluid Technologies LLP</span><h3>Share your UV requirement</h3><p>Complete the fields below for a project enquiry or quotation discussion.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="UV Disinfection System Enquiry" /><input type="hidden" name="Source Page" defaultValue="UV Disinfection System" /><div className={local.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone number *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>City and state<input name="City and State" type="text" autoComplete="address-level2" placeholder="City, state" /></label><label>Required capacity in m³/hr<input name="Capacity" type="text" placeholder="Example: 10 m³/hr" /></label><label>Application<select name="Application" defaultValue=""><option value="" disabled>Select application</option><option>Drinking water plant</option><option>RO permeate disinfection</option><option>STP tertiary treatment</option><option>ETP reuse and recycling</option><option>Hotel / hospital</option><option>Food and beverage</option><option>Pharmaceutical</option><option>Other</option></select></label><label>Water source<input name="Water Source" type="text" placeholder="Filter / RO / STP / ETP / other" /></label><label>Feed-water turbidity, if known<input name="Feed-water turbidity" type="text" placeholder="Example: < 5 NTU" /></label><label>UV transmittance / report availability<input name="UV transmittance or report" type="text" placeholder="Known value or report available" /></label><label className={local.fieldFull}>Message<textarea name="Message" required placeholder="Tell us about flow, water quality, target disinfection and site requirements." /></label></div><div className={local.formSubmit}><button type="submit">Submit requirement <ArrowRight size={16} /></button><span>Required fields use browser validation. Submission uses the existing AQUEN enquiry workflow; if it is unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>
    </main>
    <Footer />
  </div>;
}
