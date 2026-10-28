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

import base from "../ultrafiltration-system/ultrafiltration-system.module.css";
import styles from "./ozonation-system.module.css";

type TableRow = readonly string[];
type ComponentKind = "generator" | "tank" | "oxygen" | "mixing";

const modelRows: TableRow[] = [
  ["AQU-OZ-1", "1", "0.1", "6–8", "0.25–0.5", "0.5", "0.5–2"],
  ["AQU-OZ-5", "5", "0.5", "6–8", "0.5–1.0", "1.0", "1–5"],
  ["AQU-OZ-10", "10", "1.0", "6–8", "1–2", "1.5", "2–10"],
  ["AQU-OZ-20", "20", "2.0", "6–8", "2–4", "3.0", "5–20"],
  ["AQU-OZ-50", "50", "5.0", "6–8", "5–10", "6.0", "10–50"],
  ["AQU-OZ-100", "100", "10.0", "6–8", "10–20", "12.0", "20–100"],
  ["AQU-OZ-200", "200", "20.0", "6–8", "20–40", "22.0", "50–200"],
  ["AQU-OZ-300", "300", "30.0", "6–8", "30–60", "32.0", "100–300"],
  ["AQU-OZ-500", "500", "50.0", "6–8", "50–100", "50.0", "200–500"],
];

const qualityRows: TableRow[] = [
  ["pH", "—", "6.0–8.5", "6.0–8.5"],
  ["BOD", "mg/L", "10–100", "< 10"],
  ["COD", "mg/L", "50–300", "< 30"],
  ["TSS", "mg/L", "10–100", "< 10"],
  ["Colour (Pt-Co)", "—", "50–500", "< 10"],
  ["Odour", "—", "Present", "Removed"],
  ["Total Coliform", "MPN/100 mL", "10⁴–10⁶", "< 10²"],
  ["E. coli", "MPN/100 mL", "10³–10⁵", "< 10¹"],
  ["Iron (Fe)", "mg/L", "0.5–5.0", "< 0.1"],
  ["Manganese (Mn)", "mg/L", "0.1–2.0", "< 0.1"],
  ["Organic compounds", "—", "Present", "Oxidation, application-dependent"],
];

const mocRows: TableRow[] = [
  ["Ozone generator enclosure", "SS-304 / MS with powder coating"],
  ["Oxygen system", "SS-304 / GI (optional)"],
  ["Contact tank", "SS-304 / FRP / MSEP with FRP lining"],
  ["Piping (ozone line)", "SS-316 / UPVC / PVDF (as per application)"],
  ["Piping (water line)", "UPVC / CPVC / SS-304"],
  ["Venturi / diffuser", "UPVC / SS-304 / PVDF"],
  ["Non-return valve", "SS-316 / UPVC / CPVC"],
  ["Isolation / control valve", "UPVC / CPVC / SS-304"],
  ["Flow meter / ORP / ozone sensor", "PP / PVDF / SS-304"],
  ["Control panel", "MCC with PLC & HMI (optional)"],
  ["Oxygen generation system (PSA)", "MS / SS-304"],
];

const bomItems = [
  ["01", "Oxygen PSA System", "Configuration-dependent"],
  ["02", "Ozone Generator with Panel", "Configuration-dependent"],
  ["03", "Ozone Contact Tank", "Configuration-dependent"],
  ["04", "Venturi / Diffuser Mixing System", "Configuration-dependent"],
  ["05", "Booster Pump", "Configuration-dependent"],
  ["06", "Flow Meter", "Configuration-dependent"],
  ["07", "ORP / Ozone Sensor", "Configuration-dependent"],
  ["08", "Instrumentation", "Configuration-dependent"],
  ["09", "Piping, Valves & Fittings", "Configuration-dependent"],
  ["10", "Control Panel (PLC / HMI)", "Configuration-dependent"],
] as const;

const optionalItems = [
  "PSF",
  "ACF",
  "Micron Filter",
  "Online Ozone Residual Analyzer",
  "Ozone Destroyer (Catalytic)",
  "Booster Pump",
  "UV (as backup)",
];

const features = [
  ["Pure-oxygen generation", "Ozone generation from PSA or cylinder oxygen, as listed in the brochure.", Wind],
  ["Automatic dose control", "Automatic ozone-dose control can be configured around the treatment objective.", Settings2],
  ["Disinfection support", "Bacteria, viruses and pathogens — subject to ozone demand, contact time and design.", ShieldCheck],
  ["Odour & colour reduction", "Ozone can oxidize selected odour- and colour-causing substances.", Sparkles],
  ["Oxidation support", "BOD/COD, iron, manganese and sulphide treatment depends on water chemistry.", FlaskConical],
  ["PLC / HMI automation", "Controls and instrumentation can be configured for the selected system.", PanelsTopLeft],
  ["Compact modular design", "Suitable configurations can support continuous or intermittent operation.", SlidersHorizontal],
  ["Application-specific MOC", "SS-304, FRP and MSEP options are listed for suitable applications.", Factory],
] as const;

const applications = [
  ["Residential Societies", Building2],
  ["Hotels & Resorts", Hotel],
  ["Hospitals & Healthcare", HeartPulse],
  ["Industrial Effluents", Factory],
  ["Food & Beverage Industry", Utensils],
  ["Pharmaceutical Applications", Pill],
  ["Dye & Chemical Industry", FlaskConical],
  ["STP Tertiary Treatment", Waves],
  ["Water Reuse Projects", Recycle],
  ["Swimming Pools", Droplets],
  ["Municipal & Sewage Treatment", Landmark],
] as const;

const faqs = [
  ["What is an ozonation system?", "An ozonation system generates ozone and transfers it into water or wastewater so it can support disinfection and oxidation of selected compounds. Actual performance depends on ozone demand, contact time, water chemistry, residual management and system design."],
  ["How is ozone generated?", "The brochure describes generation from high-purity oxygen using corona-discharge technology. Oxygen may be supplied by a PSA system or cylinder, depending on the selected configuration."],
  ["What is corona-discharge ozone generation?", "Corona discharge uses an electrical discharge across an oxygen-containing gas stream to form ozone. The generator, gas quality, cooling and controls must follow the selected manufacturer's design."],
  ["What is the purpose of an ozone contact tank?", "The contact tank provides a controlled space for ozone and water to interact. Its volume and performance depend on the ozone capacity, water quality, contact arrangement and treatment objective."],
  ["What are venturi and diffuser mixing systems?", "They are mixing arrangements used to introduce ozone gas into water. The choice depends on the selected system, gas transfer requirements, hydraulics and application."],
  ["What is the difference between ozone capacity and water flow rate?", "Ozone capacity is the mass of ozone generated per hour, shown in gm/hr. Water flow rate is the volume of water treated per hour. Their relationship is application-specific and cannot be inferred from capacity alone."],
  ["Which ozone capacities are listed in the brochure?", "The listed standard models run from AQU-OZ-1 to AQU-OZ-500, corresponding to 1 to 500 gm/hr. The range and configuration should be confirmed with AQUEN before publication or quotation."],
  ["What is an ORP sensor?", "An oxidation-reduction potential sensor indicates the oxidizing condition of water. ORP can support monitoring, but it is not by itself a universal measure of ozone dose or microbial reduction."],
  ["Why might an ozone destroyer be required?", "An ozone destroyer can be considered where residual ozone in off-gas or process exhaust needs controlled management. The equipment and arrangement must follow the final design and safety requirements."],
  ["Can ozonation be used for wastewater treatment?", "Yes, the brochure lists STP tertiary treatment, industrial effluents, reuse and municipal/sewage treatment among potential applications. Suitability must be established through feed analysis and process design."],
  ["What information is needed to select an ozone system?", "Share water or wastewater source, flow rate, operating pattern, target quality, feed analysis, existing pretreatment, application and any residual or reuse requirements."],
  ["How can I request a quotation?", "Use the existing AQUEN enquiry form and include the desired ozone capacity, flow, application and feed-water analysis availability. AQUEN can then review the configuration and quotation scope."],
] as const;

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={base.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, compact = false, label }: { headers: string[]; rows: TableRow[]; compact?: boolean; label: string }) {
  return <div className={`${base.tableWrap} ${compact ? base.compactTable : ""}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ComponentIllustration({ kind }: { kind: ComponentKind }) {
  if (kind === "generator") {
    return <svg viewBox="0 0 360 220" role="img" aria-label="Concept illustration of an ozone generator panel"><rect x="92" y="20" width="176" height="180" rx="12" fill="#e5f9fd" stroke="#52bfd0" strokeWidth="3" /><rect x="112" y="42" width="136" height="38" rx="6" fill="#052c65" /><circle cx="132" cy="61" r="7" fill="#67e5fa" /><path d="M151 61h74" stroke="#a8eff6" strokeWidth="4" strokeLinecap="round" /><circle cx="132" cy="112" r="12" fill="#078bc9" /><circle cx="174" cy="112" r="12" fill="#67e5fa" /><circle cx="216" cy="112" r="12" fill="#f7ce55" /><path d="M115 158h130" stroke="#70cbd8" strokeWidth="4" strokeLinecap="round" /><text x="180" y="187" textAnchor="middle" fill="#173d59" fontSize="12" fontWeight="700">O₃ GENERATOR PANEL</text></svg>;
  }
  if (kind === "tank") {
    return <svg viewBox="0 0 360 220" role="img" aria-label="Concept illustration of an ozone contact tank"><ellipse cx="180" cy="48" rx="94" ry="22" fill="#d9f6fb" stroke="#52bfd0" strokeWidth="3" /><path d="M86 48v107c0 24 42 43 94 43s94-19 94-43V48" fill="#b8e8ef" fillOpacity=".8" stroke="#52bfd0" strokeWidth="3" /><ellipse cx="180" cy="155" rx="94" ry="43" fill="#8bd6e2" fillOpacity=".65" /><path d="M132 93c0 24 22 24 22 48s22 24 22 48M204 93c0 24-22 24-22 48s-22 24-22 48" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".9" /><text x="180" y="32" textAnchor="middle" fill="#173d59" fontSize="12" fontWeight="700">CONTACT TANK</text></svg>;
  }
  if (kind === "oxygen") {
    return <svg viewBox="0 0 360 220" role="img" aria-label="Concept illustration of an oxygen PSA system"><rect x="55" y="35" width="250" height="155" rx="14" fill="#e5f9fd" stroke="#52bfd0" strokeWidth="3" /><rect x="84" y="57" width="46" height="108" rx="20" fill="#fff" stroke="#078bc9" strokeWidth="3" /><rect x="154" y="57" width="46" height="108" rx="20" fill="#fff" stroke="#078bc9" strokeWidth="3" /><rect x="224" y="57" width="46" height="108" rx="20" fill="#fff" stroke="#078bc9" strokeWidth="3" /><path d="M108 30V15M178 30V15M248 30V15M108 15h140" stroke="#52bfd0" strokeWidth="4" strokeLinecap="round" /><path d="M84 178h186" stroke="#173d59" strokeWidth="4" strokeLinecap="round" /><text x="180" y="207" textAnchor="middle" fill="#173d59" fontSize="12" fontWeight="700">PSA OXYGEN SYSTEM</text></svg>;
  }
  return <svg viewBox="0 0 360 220" role="img" aria-label="Concept illustration of an ozone venturi and diffuser mixing system"><path d="M38 75h78l32 35 38-35h136" fill="none" stroke="#078bc9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" /><path d="M178 75v-35h56" fill="none" stroke="#52bfd0" strokeWidth="10" strokeLinecap="round" /><path d="M220 40l-12-9M220 40l12-9" stroke="#52bfd0" strokeWidth="4" strokeLinecap="round" /><circle cx="145" cy="110" r="25" fill="#e5f9fd" stroke="#52bfd0" strokeWidth="3" /><path d="M135 110h20M145 100v20" stroke="#078bc9" strokeWidth="4" strokeLinecap="round" /><text x="180" y="183" textAnchor="middle" fill="#173d59" fontSize="12" fontWeight="700">VENTURI / DIFFUSER</text></svg>;
}

function OzoneProcessDiagram() {
  return <div className={styles.diagramScroller}><svg className={styles.processSvg} viewBox="0 0 1340 470" role="img" aria-label="Ozonation process flow with separate water and ozone generation paths"><defs><marker id="ozArrow" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#79e7f4" /></marker><marker id="ozArrowSoft" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#8ab9c8" /></marker></defs><rect x="10" y="24" width="1320" height="182" rx="24" fill="rgba(0,17,48,.35)" stroke="rgba(149,233,244,.24)" /><text x="32" y="55" fill="#82eaf4" fontSize="11" fontWeight="800" letterSpacing="1.5">WATER TREATMENT PATH</text><g>{[["Inlet Water", "from STP / ETP"], ["Pre Filter", "PSF / ACF · optional"], ["Mixing System", "venturi / diffuser"], ["Contact Tank", "SS-304 / FRP / MSEP"], ["Treated Water", "reuse / discharge"]].map(([title, detail], index) => { const x = 25 + index * 264; return <g key={title}><rect x={x} y="79" width="208" height="86" rx="16" fill={index === 2 ? "#0c7895" : "rgba(255,255,255,.09)"} stroke={index === 2 ? "#8deaf4" : "rgba(157,235,248,.34)"} strokeWidth="1.4" /><text x={x + 16} y="108" fill="#82eaf4" fontSize="10" fontWeight="800" letterSpacing="1.2">{String(index + 1).padStart(2, "0")}</text><text x={x + 16} y="133" fill="#fff" fontSize="15" fontWeight="800">{title}</text><text x={x + 16} y="152" fill="#c4e8ef" fontSize="11">{detail}</text>{index < 4 ? <path d={`M${x + 208} 122h50`} stroke="#79e7f4" strokeWidth="2" markerEnd="url(#ozArrow)" /> : null}</g>; })}</g><rect x="10" y="242" width="1320" height="190" rx="24" fill="rgba(0,17,48,.23)" stroke="rgba(149,233,244,.19)" /><text x="32" y="273" fill="#82eaf4" fontSize="11" fontWeight="800" letterSpacing="1.5">OZONE GENERATION PATH</text><g><rect x="52" y="308" width="212" height="84" rx="16" fill="rgba(255,255,255,.09)" stroke="rgba(157,235,248,.34)" /><text x="68" y="337" fill="#82eaf4" fontSize="10" fontWeight="800">01</text><text x="68" y="362" fill="#fff" fontSize="15" fontWeight="800">Oxygen System</text><text x="68" y="381" fill="#c4e8ef" fontSize="11">PSA / cylinder</text><path d="M264 350h68" stroke="#79e7f4" strokeWidth="2" markerEnd="url(#ozArrow)" /><rect x="340" y="308" width="212" height="84" rx="16" fill="rgba(255,255,255,.09)" stroke="rgba(157,235,248,.34)" /><text x="356" y="337" fill="#82eaf4" fontSize="10" fontWeight="800">02</text><text x="356" y="362" fill="#fff" fontSize="15" fontWeight="800">Ozone Generator</text><text x="356" y="381" fill="#c4e8ef" fontSize="11">corona discharge</text><path d="M552 350h68" stroke="#79e7f4" strokeWidth="2" markerEnd="url(#ozArrow)" /><rect x="628" y="308" width="212" height="84" rx="16" fill="rgba(255,255,255,.09)" stroke="rgba(157,235,248,.34)" /><text x="644" y="337" fill="#82eaf4" fontSize="10" fontWeight="800">03</text><text x="644" y="362" fill="#fff" fontSize="15" fontWeight="800">Ozone Control Panel</text><text x="644" y="381" fill="#c4e8ef" fontSize="11">dose / controls</text><path d="M840 350H952V165" fill="none" stroke="#8ab9c8" strokeWidth="2" strokeDasharray="6 5" markerEnd="url(#ozArrowSoft)" /><text x="863" y="341" fill="#b8f4fc" fontSize="10" fontWeight="700">gas to mixing</text></g><rect x="1000" y="298" width="278" height="104" rx="16" fill="rgba(255,255,255,.06)" stroke="rgba(157,235,248,.28)" /><text x="1022" y="329" fill="#b8f4fc" fontSize="13" fontWeight="800">Ozone safety & monitoring</text><text x="1022" y="352" fill="#c4e8ef" fontSize="11">Ventilation, leak detection,</text><text x="1022" y="370" fill="#c4e8ef" fontSize="11">ozone destruction and residual</text><text x="1022" y="388" fill="#c4e8ef" fontSize="11">monitoring follow the final design.</text></svg></div>;
}

export default function OzonationSystemContent() {
  const componentCards: { title: string; detail: string; kind: ComponentKind; label: string }[] = [
    { title: "Ozone Generator Panel", detail: "1–500 gm/hr · brochure range to verify", kind: "generator", label: "Generator panel" },
    { title: "Ozone Contact Tank", detail: "SS-304 / FRP / MSEP", kind: "tank", label: "Contact tank" },
    { title: "Oxygen Generation System", detail: "PSA", kind: "oxygen", label: "Oxygen system" },
    { title: "Ozone Mixing System", detail: "Venturi / Diffuser", kind: "mixing", label: "Mixing system" },
  ];

  return <div className={base.page}>
    <Header />
    <main>
      <section className={base.hero}><div className={base.heroGlow} aria-hidden="true" /><div className={base.container}>
        <nav className={base.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Ozonation System</strong></nav>
        <div className={base.heroGrid}><div className={base.heroCopy}><span className={base.eyebrow}>AQUEN SOLUTION SYSTEM · DISINFECTION & ADVANCED OXIDATION</span><h1>Ozonation <em>System</em></h1><h2>Effective Disinfection & Advanced Oxidation for Water & Wastewater Treatment</h2><p>AQUEN ozonation systems are configured to generate ozone, transfer it into water and provide contact time for suitable disinfection and oxidation applications. Ozone demand, water chemistry, contact time and residual management determine the final process design.</p><div className={base.heroActions}><Link className={base.primaryButton} href="/contact#contact-form">Request a Quote <ArrowRight size={17} /></Link><Link className={base.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link><a className={base.downloadButton} href="/ozonation-system-brochure.pdf" download="Aquen-Ozonation-System-Brochure.pdf" aria-label="Download the Aquen Ozonation System brochure PDF">Download Brochure <Download size={16} /></a></div><div className={base.heroMetrics}><div><strong>1–500 gm/hr</strong><span>brochure generator range · verify</span></div><div><strong>PSA / cylinder</strong><span>oxygen source options</span></div><div><strong>Water + wastewater</strong><span>application-specific design</span></div></div><p className={base.heroNote}>Brochure benefits are indicative. Ozone concentration, contact time, water chemistry, generator design and residual management affect actual results.</p></div><div className={base.heroVisual}><div className={base.heroVisualFrame}><Image src="/about-img.png" alt="Representative water-treatment facility reference image" fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div><div className={base.heroBadge}><BadgeCheck size={16} /><span>Water-treatment reference</span></div><div className={base.heroCaption}><span>System</span><strong>disinfection + oxidation</strong><span>Image status</span><strong>ozone photo to confirm</strong></div></div></div>
      </div></section>

      <section className={base.section}><div className={base.container}><SectionHeading eyebrow="01 · Ozonation overview" title="Ozone brings oxidation into the treatment train">Ozone (O₃) is a powerful oxidizing agent. The brochure describes ozone generation from high-purity oxygen using corona-discharge technology, followed by mixing and contact with water in a contact tank.</SectionHeading><div className={base.explainerGrid}><article className={base.explainerCard}><div className={base.cardIcon}><Wind size={20} /></div><span>01 / Generate</span><h3>Ozone from high-purity oxygen</h3><p>PSA or cylinder oxygen can feed the ozone generator. The brochure range and exact configuration require confirmation.</p></article><article className={base.explainerCard}><div className={base.cardIcon}><Droplets size={20} /></div><span>02 / Transfer</span><h3>Mix ozone into the water</h3><p>Venturi, diffuser or another approved arrangement transfers ozone gas into the process water.</p></article><article className={base.explainerCard}><div className={base.cardIcon}><Activity size={20} /></div><span>03 / Contact</span><h3>Allow oxidation to take place</h3><p>Contact time, ozone demand, water quality and residual management determine the treatment outcome.</p></article></div><div className={base.cautionNote}><CircleAlert size={19} /><div><strong>Performance qualification</strong><span>Ozone can support disinfection, odour and colour reduction, and oxidation of selected compounds. It does not guarantee elimination of every contaminant or complete microbial reduction under every condition.</span></div></div></div></section>

      <section className={`${base.section} ${base.lightSection}`} id="components"><div className={base.container}><SectionHeading eyebrow="02 · Main system components" title="A modular ozone treatment package">The brochure identifies four principal components. Exact dimensions, power ratings, materials, models and available capacities must be confirmed against the selected AQUEN configuration.</SectionHeading><div className={styles.componentGrid}>{componentCards.map((card) => <article className={styles.componentCard} key={card.title}><div className={styles.componentVisual}><ComponentIllustration kind={card.kind} /></div><div className={styles.componentCaption}><span>{card.label}</span><h3>{card.title}</h3><p>{card.detail}</p></div></article>)}</div></div></section>

      <section className={`${base.section} ${base.darkSection}`} id="working-principle"><div className={base.container}><div className={styles.workingGrid}><div><span className={base.eyebrow}>03 · Working Principle</span><h2>Generate, mix, contact, monitor</h2><p className={styles.darkLead}>Ozone is generated from oxygen with corona discharge, introduced through a mixing system and contacted with water. Depending on the application, it can support oxidation of iron, manganese, colour, odour and selected organic compounds.</p><div className={styles.workingPoints}><span><Check size={16} />Disinfection support for suitable microorganisms</span><span><Check size={16} />Oxidation of selected colour and odour compounds</span><span><Check size={16} />Water or wastewater treatment configurations</span><span><Check size={16} />Application-specific controls and monitoring</span></div></div><div className={styles.workingCard}><div className={styles.workingIcon}><Sparkles size={22} /></div><span>Design note</span><h3>Ozone dose is not a universal shortcut</h3><p>Ozone demand, contact time, pH, temperature, organic load, mixing efficiency and residual handling must be evaluated in the approved design. No dosage or removal percentage is implied here.</p></div></div></div></section>

      <section className={base.section} id="process-flow"><div className={base.container}><SectionHeading eyebrow="04 · Process flow" title="Separate water and ozone paths, joined at mixing">The process flow follows the brochure: optional PSF/ACF prefiltration protects the water path, while PSA/cylinder oxygen feeds the ozone generation path. The two paths join at the venturi/diffuser mixing system.</SectionHeading><div className={styles.ozoneFlowBoard}><OzoneProcessDiagram /><div className={base.flowLegend}><span><Droplets size={15} /> Water path → contact tank</span><span><Wind size={15} /> Ozone path → mixing system</span><span><CircleAlert size={15} /> Final controls → manufacturer design</span></div></div><p className={base.darkNote}>PSF = Pressure Sand Filter · ACF = Activated Carbon Filter · PSA = Pressure Swing Adsorption · STP = Sewage Treatment Plant · ETP = Effluent Treatment Plant.</p></div></section>

      <section className={`${base.section} ${base.lightSection}`} id="features-applications"><div className={base.container}><SectionHeading eyebrow="05 · Features & applications" title="Configured for the treatment objective">The following features and industries are taken from the brochure. A single ozone configuration is not appropriate for every water or wastewater application.</SectionHeading><div className={base.featureGrid}>{features.map(([title, text, Icon]) => <article className={base.featureCard} key={title}><div className={base.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className={base.applicationBlock}><div><span className={base.miniEyebrow}>Application map</span><h3>Where ozonation may fit</h3><p>Application suitability depends on feed analysis, required water quality, ozone demand, contact arrangement and downstream treatment.</p></div><div className={base.applicationList}>{applications.map(([label, Icon]) => <span key={label}><Icon size={16} />{label}</span>)}</div></div></div></section>

      <section className={base.section} id="technical-specifications"><div className={base.container}><SectionHeading eyebrow="06 · Catalogue data" title="TECHNICAL SPECIFICATIONS — OZONATION SYSTEM (1 gm/hr TO 500 gm/hr)">The following standard-model values are preserved from the supplied brochure transcription. Suggested flow is indicative, and residual ozone depends on the application and contact time.</SectionHeading><div className={base.sourceBanner}><CircleAlert size={19} /><div><strong>Engineering verification required</strong><span>Confirm oxygen requirements, ozone concentration, power loads, contact-tank volumes, model availability and the meaning of the suggested flow range against current AQUEN engineering data sheets.</span></div></div><DataTable label="Technical specifications for ozonation system" headers={["Model", "Ozone capacity (gm/hr)", "Oxygen requirement (Nm³/hr)", "Ozone concentration (% wt)", "Ozone contact tank volume (m³)", "Power load (kW)", "Suggested flow range (m³/hr)"]} rows={modelRows} /><p className={base.tableFootnote}>The table is for technical discussion only and is not a performance warranty or a substitute for the approved engineering design.</p></div></section>

      <section className={`${base.section} ${base.lightSection}`} id="quality-data"><div className={base.container}><SectionHeading eyebrow="07 · Water quality" title="TYPICAL INLET & OUTLET PARAMETERS">These are typical brochure values only. Outlet values can be customized according to application and dosage; they should not be treated as guaranteed performance or regulatory compliance.</SectionHeading><DataTable label="Typical inlet and outlet parameters after ozonation" headers={["Parameter", "Unit", "Typical inlet", "Typical outlet (after ozonation)"]} rows={qualityRows} compact /><div className={base.inlineWarning}><CircleAlert size={18} /><span>Confirm test methods, sample conditions and whether the microbial values represent measured results, design targets or illustrative values. Confirm the intended meaning of the organic-compounds row before publication.</span></div></div></section>

      <section className={base.section} id="materials-bom"><div className={base.container}><SectionHeading eyebrow="08 · Construction & supply" title="Materials and a configuration-dependent BOM">Ozone is a strong oxidant. Material compatibility across gas lines, water lines, seals, valves, sensors and the contact tank must be confirmed for the selected concentration and application.</SectionHeading><div className={base.twoTableGrid}><div><h3 className={base.tableTitle}>Material of construction</h3><DataTable label="Ozonation material of construction" headers={["Item", "Material / specification"]} rows={mocRows} compact /></div><div><h3 className={base.tableTitle}>TYPICAL BILL OF MATERIAL (BOM) — OZONATION SYSTEM</h3><div className={styles.bomList}>{bomItems.map(([number, title, detail]) => <div className={styles.bomItem} key={number}><span>{number}</span><strong>{title}</strong><small>{detail}</small></div>)}</div></div></div><p className={base.tableFootnote}>The brochure does not provide reliable quantities and exact specifications for every BOM row. Request the official engineering BOM before quotation or procurement.</p></div></section>

      <section className={`${base.section} ${base.lightSection}`} id="optional-accessories"><div className={base.container}><SectionHeading eyebrow="09 · Optional accessories" title="Add monitoring and protection where required">Availability depends on the selected configuration and application. The following accessories are listed in the brochure and are not included automatically in every package.</SectionHeading><div className={base.optionalGrid}>{optionalItems.map((item, index) => <div className={base.optionalCard} key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><small>Confirm scope in quotation</small></div>)}</div><div className={styles.safetyBanner}><ShieldCheck size={20} /><div><h3>Safe operation follows the final design</h3><p>Installation, ventilation, leak detection, ozone destruction and residual monitoring should follow the manufacturer&apos;s instructions and applicable safety requirements. This page is not a safety manual and does not set exposure limits or operating procedures.</p></div></div></div></section>

      <section className={base.faqSection} id="faq"><div className={base.container}><SectionHeading eyebrow="10 · Frequently asked questions" title="Ozonation questions, answered clearly" /><div className={base.faqList}>{faqs.map(([question, answer]) => <details className={base.faqItem} key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className={base.ctaSection} id="quote"><div className={base.container}><div className={base.ctaGrid}><div><span className={base.eyebrow}>11 · Design, manufacturing, supply, installation, commissioning & AMC</span><h2>Let’s engineer the right ozone system for your water.</h2><p>Share your ozone capacity, flow rate, application, operating pattern and feed-water analysis availability. The existing AQUEN enquiry workflow can take the project discussion forward.</p><div className={base.ctaChecklist}><span><Check size={16} />Required ozone capacity in gm/hr</span><span><Check size={16} />Required flow in m³/hr</span><span><Check size={16} />Water or wastewater application</span><span><Check size={16} />Feed analysis and target quality</span></div></div><div className={base.ctaCard}><span>Request a quotation</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water & Wastewater Treatment Solutions</p><div className={base.quoteFields}><span>Name · Company</span><span>Email · Phone</span><span>Ozone capacity · Flow</span><span>Application · Message</span></div><Link className={base.ctaButton} href="/contact#contact-form">Open enquiry form <ArrowRight size={16} /></Link><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={15} /></a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={15} /></a></div></div></div></section>
    </main>
    <Footer />
  </div>;
}
