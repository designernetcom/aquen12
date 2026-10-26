import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  HeartPulse,
  Landmark,
  Layers3,
  Mail,
  Pill,
  RefreshCw,
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
import mixed from "./mixed-bed-demineralisation-system.module.css";

type TableRow = readonly string[];

const technicalRows: TableRow[] = [
  ["AQU-MB-0.1", "100", "FRP", "200", "1200", "12.5", "12.5", "25", "0.1", "15", "0.025", "20–25", "0.5", "0.5", "0.5"],
  ["AQU-MB-0.25", "250", "FRP", "300", "1400", "25", "25", "50", "0.25", "20", "0.05", "20–25", "1.0", "1.0", "1.0"],
  ["AQU-MB-0.5", "500", "FRP", "400", "1600", "62.5", "62.5", "125", "0.5", "25", "0.125", "20–30", "2.5", "2.5", "1.5"],
  ["AQU-MB-1.0", "1,000", "FRP / MSEP", "500", "1800", "125", "125", "250", "1.0", "32", "0.25", "20–35", "5.0", "5.0", "3.0"],
  ["AQU-MB-2.0", "2,000", "FRP / MSEP", "700", "2000", "200", "200", "400", "2.0", "40", "0.4", "20–35", "8.0", "8.0", "4.5"],
  ["AQU-MB-3.0", "3,000", "MSEP / MSRL", "800", "2200", "300", "300", "600", "3.0", "50", "0.6", "20–35", "12.0", "12.0", "6.0"],
  ["AQU-MB-5.0", "5,000", "MSEP / MSRL", "1,000", "2400", "450", "450", "900", "5.0", "65", "0.9", "20–40", "18.0", "18.0", "8.0"],
  ["AQU-MB-7.5", "7,500", "MSEP / MSRL", "1,200", "2800", "600", "600", "1,200", "7.5", "80", "1.2", "20–40", "24.0", "24.0", "10.0"],
  ["AQU-MB-10", "10,000", "MSEP / MSRL", "1,400", "2800", "800", "800", "1,600", "10.0", "100", "1.6", "20–40", "32.0", "32.0", "12.0"],
];

const regenerationRows: TableRow[] = technicalRows.map((row) => [row[0], row[1], row[12], row[13], row[14]]);

const qualityRows: TableRow[] = [
  ["pH", "—", "6.5–8.5", "6.0–7.0"],
  ["Total Hardness (as CaCO₃)", "mg/L", "< 1", "< 0.1"],
  ["Chloride (Cl⁻)", "mg/L", "< 5", "< 0.1"],
  ["Sulphate (SO₄²⁻)", "mg/L", "< 5", "< 0.1"],
  ["Nitrate (NO₃⁻)", "mg/L", "< 5", "< 0.1"],
  ["Silica (SiO₂)", "mg/L", "< 1", "< 0.1"],
  ["Total Dissolved Solids (TDS)", "mg/L", "< 10", "< 1"],
  ["Conductivity", "µS/cm", "10–50", "< 0.1–1.0"],
];

const operatingRows: TableRow[] = [
  ["Service flow rate", "As per model specification table"],
  ["Operating pressure", "2.5–6.0 kg/cm²"],
  ["Maximum pressure", "6.0 kg/cm²"],
  ["Operating temperature", "5–40 °C"],
  ["Bed depth", "800–1,200 mm"],
  ["Freeboard", "300–500 mm"],
  ["Regeneration method", "Separate regeneration of cation and anion resin"],
  ["Regeneration chemical for cation resin", "HCl, 4–10%"],
  ["Regeneration chemical for anion resin", "NaOH, 4–6%"],
  ["Regeneration time", "60–90 minutes each"],
  ["Slow rinse", "30 minutes"],
  ["Fast rinse", "30 minutes"],
  ["Operating Bed Volume (OBR)", "Appears as 20–40 minutes, depending on water quality; verify meaning and unit"],
];

const bomRows: TableRow[] = [
  ["1", "Mixed Bed Vessel (FRP / MSEP / MSRL)", "1 No."],
  ["2", "Cation Resin (SAC)", "1 set, as per table"],
  ["3", "Anion Resin (SBA)", "1 set, as per table"],
  ["4", "Multiport Valve (MPV) / Butterfly Valves", "1 set"],
  ["5", "Piping (UPVC / CPVC / MS / SS — as required)", "1 set"],
  ["6", "Pressure Gauge", "2 Nos."],
  ["7", "Sample Valve", "1 No."],
  ["8", "Air Release Valve (ARV)", "1 No."],
  ["9", "NRV / Non-Return Valve", "1 No."],
  ["10", "Drain Valve", "1 No."],
  ["11", "Flow Meter (Optional)", "1 No."],
  ["12", "Control Panel (Auto / Manual)", "1 No."],
  ["13", "Chemical Dosing System (for regeneration)", "1 set, optional"],
  ["14", "Chemical Storage Tanks (HCl / NaOH)", "2 tanks, optional"],
  ["15", "Interconnecting Fittings, Supports & Accessories", "1 set"],
];

const mocRows: TableRow[] = [
  ["Vessel", "FRP / MS with epoxy lining / MS with FRP lining or MSRL"],
  ["Piping", "UPVC / CPVC / PP / MS / SS-304 / SS-316"],
  ["Valves", "UPVC / CPVC / PP / CI / SS-304 / SS-316"],
  ["Distribution system", "UPVC / CPVC / PP"],
  ["Multiport Valve (FRP)", "UPVC / ABS"],
  ["Instrumentation", "SS-304 / SS-316"],
  ["Cation resin", "MS with powder coating / SS-304 optional"],
  ["Anion resin", "Strong Acid Cation Resin (SAC) — verify this row"],
  ["Gaskets / O-rings", "EPDM or the material listed in the original brochure; verify exact wording"],
  ["Supports / Skid", "MS with red-oxide primer / SS-304 — verify exact wording"],
];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Gauge, title: "Ultra-low conductivity target", text: "The brochure headline advertises conductivity below 1 µS/cm. Actual performance depends on feed quality, resin condition, regeneration and approved design." },
  { icon: Droplets, title: "High-purity polishing", text: "A mixed bed combines cation and anion exchange in one vessel as a final polishing stage for pre-treated water." },
  { icon: Layers3, title: "FRP, MSEP and MSRL", text: "Vessel options are listed across the 100–10,000 LPH brochure range, with overlapping capacity bands that require confirmation." },
  { icon: Settings2, title: "Automatic or manual", text: "The brochure lists both operating options; control-panel scope depends on the selected configuration." },
  { icon: RefreshCw, title: "Separate regeneration", text: "Cation and anion resins are regenerated separately using the listed acid and caustic chemicals, subject to the approved procedure." },
  { icon: SlidersHorizontal, title: "Compact, robust design", text: "The brochure presents a compact package suitable for industrial duties; final footprint and layout are project-specific." },
  { icon: ShieldCheck, title: "Exchange capacity and resin life", text: "These are brochure-listed benefits, not guarantees. Resin life depends on feed water, loading, regeneration and operation." },
  { icon: Wrench, title: "Easy maintenance and resin replacement", text: "Maintenance and replacement should follow AQUEN’s approved manual; the brochure also lists continuous or intermittent operation when the system is designed for it." },
  { icon: Factory, title: "Custom engineering", text: "System design should be selected around water-quality requirements, upstream treatment and the intended critical application." },
];

const applications: { icon: LucideIcon; title: string; image: string; note: string }[] = [
  { icon: Pill, title: "Pharmaceutical", image: "/installation-img2.png", note: "Application-specific quality and validation requirements apply." },
  { icon: Factory, title: "Power Plants", image: "/about-img.png", note: "Used as part of an approved high-purity water train." },
  { icon: Gauge, title: "Electronics", image: "/banner/advanced-biological.png", note: "Final water targets and contamination controls require confirmation." },
  { icon: Utensils, title: "Food & Beverage", image: "/banner/industries-we-serve.png", note: "Utility and process-water duties are application-dependent." },
  { icon: FlaskConical, title: "Chemical Industry", image: "/banner/fabrication-engineering.png", note: "Resin, lining and chemical compatibility require review." },
  { icon: Waves, title: "Textile", image: "/installation-img1.png", note: "Feed chemistry and downstream use determine the duty." },
  { icon: HeartPulse, title: "Hospitals & Healthcare", image: "/banner/infrastructure.png", note: "Do not infer healthcare-grade compliance from the system alone." },
  { icon: Landmark, title: "Laboratories", image: "/banner/water-treatment.png", note: "Actual laboratory-water quality must be separately specified and verified." },
  { icon: Building2, title: "Automobile", image: "/uploads/1787122866622-f410c89b-d335-40fc-87b0-f7d7b0c7b084.png", note: "Utility process and required outlet quality must be confirmed." },
  { icon: Gauge, title: "Boiler Feed Water", image: "/banner/water-treatment.png", note: "A mixed bed may be a polishing stage within a complete boiler-water train." },
];

const faqs = [
  ["What is a mixed bed demineralisation system?", "A mixed bed system contains a homogeneous mixture of strong acid cation resin in H⁺ form and strong base anion resin in OH⁻ form. The resins exchange remaining cations and anions from pre-treated water to produce a high-purity polished stream."],
  ["Is this the same as a conventional water softener?", "No. A conventional sodium-cycle softener exchanges hardness ions for sodium. The brochure supplied for this page describes a mixed bed DI system using H⁺ and OH⁻ resin forms for demineralisation and high-purity polishing."],
  ["What feed water enters the mixed bed?", "The process flow describes pre-treated, softened or demineralised feed water followed by a 5-micron cartridge filter. Upstream treatment depends on the actual feed analysis and design; a cartridge filter alone does not soften or demineralise water."],
  ["What ions can the resins exchange?", "The cation resin exchanges ions such as calcium, magnesium, sodium and potassium. The anion resin exchanges chloride, sulphate, nitrate and silica-related species; the precise silica chemical form should be confirmed technically."],
  ["What conductivity is advertised?", "The brochure headline advertises conductivity below 1 µS/cm. The typical outlet table appears to show < 0.1–1.0 µS/cm, but that notation requires confirmation and is not a universal performance guarantee."],
  ["Which vessel configurations are available?", "The listed options are FRP at 100–5,000 LPH, MSEP at 1,000–10,000 LPH and MSRL at 500–10,000 LPH. The ranges overlap and do not imply that every vessel is available for every model."],
  ["How are mixed bed resins regenerated?", "Cation and anion resins are separated and regenerated separately using the listed HCl and NaOH concentration ranges, followed by rinsing and preparation for service. The page does not replace an approved regeneration procedure."],
  ["Does the system use salt or brine?", "The supplied brochure data specifies acid and caustic regeneration chemicals. It does not specify sodium chloride consumption, brine concentration or salt-tank design, so no salt-consumption claim is made."],
  ["What do the OBR values mean?", "The technical table includes a Recommended OBR column and the operating section shows 20–40 minutes depending on water quality. The meaning and unit of OBR are unclear in the source and must be confirmed before use as an operating limit."],
  ["Are the chemical quantities guaranteed?", "No. The HCl, NaOH and rinse-water values are brochure-listed per-cycle figures pending confirmation. Actual consumption depends on verified design, resin loading, feed quality and the approved regeneration procedure."],
  ["Can it be used for pharmaceutical or boiler water?", "It may form one stage of a high-purity water train for such applications. The mixed bed alone does not establish compliance, and final water quality, validation and downstream requirements must be specified and verified."],
  ["What information is needed for a quotation?", "Share flow in LPH, feed-water analysis, upstream RO or DM details, target conductivity and application, together with the preferred vessel option and operating approach."],
] as const;

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, compact = false, wide = false, label }: { headers: string[]; rows: TableRow[]; compact?: boolean; wide?: boolean; label: string }) {
  return <div className={`${styles.tableWrap} ${compact ? styles.compactTable : ""} ${wide ? mixed.wideTable : ""}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProcessDiagram() {
  return <div className={local.processBoard}>
    <div className={mixed.processPath} aria-label="Mixed bed demineralisation process flow diagram">
      <div className={local.processNode}><span>01 · FEED</span><strong>Pre-treated Water</strong><small>Softened / demineralised feed</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>02 · FILTER</span><strong>Cartridge Filter</strong><small>5 micron filtration</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={`${local.processNode} ${local.processNodeActive}`}><span>03 · EXCHANGE</span><strong>Mixed Bed</strong><small>Cation + anion resin</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>04 · COLLECTION</span><strong>Treated Water Tank</strong><small>Polished water collection</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>05 · OUTPUT</span><strong>Ultra-Pure Water</strong><small>Advertised conductivity &lt; 1 µS/cm</small></div>
    </div>
    <div className={local.processFoot}><span><b>Feed quality matters.</b> Upstream treatment is selected around the actual water analysis.</span><span><b>Conductivity target.</b> The brochure headline is advertised; actual performance requires design and test confirmation.</span></div>
  </div>;
}

export default function MixedBedDemineralisationContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Mixed Bed Demineralisation System</strong></nav>
        <div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN SOLUTION SYSTEM · HIGH-PURITY POLISHING</span><h1>Mixed Bed <em>Demineralisation</em></h1><h2>(DI) System · Ultra Pure Water for Critical Applications</h2><p>AQUEN mixed bed systems polish pre-treated water through a homogeneous mixture of strong acid cation resin in H⁺ form and strong base anion resin in OH⁻ form. The brochure advertises ultra-low conductivity for critical applications; actual output depends on feed quality, resin condition, regeneration and approved engineering.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Enquire About This System <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>100–10,000 LPH</strong><span>brochure capacity range</span></div><div><strong>FRP / MSEP / MSRL</strong><span>vessel options</span></div><div><strong>&lt; 1 µS/cm</strong><span>advertised headline</span></div></div><p className={styles.heroNote}>Design · Manufacturing · Supply · Installation · Commissioning · AMC · Cleaner Water · Greener Tomorrow</p></div><div className={styles.heroVisual}><div className={styles.heroVisualFrame}><Image src="/mixed-bed-unit.png" alt="Mixed bed demineralisation system reference photograph" fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>Mixed bed system reference</span></div><div className={styles.heroCaption}><span>System duty</span><strong>High-purity polishing</strong><span>Configuration</span><strong>FRP / MSEP / MSRL</strong></div></div></div>
      </div></section>

      <section className={styles.section}><div className={styles.container}><SectionHeading eyebrow="01 · System overview" title="Final polishing for high-purity water">A mixed bed is a demineralisation polishing step, not a conventional water softener. It combines cation and anion exchange resins in one vessel so the residual ionic load from a pre-treated stream can be reduced before critical use.</SectionHeading><div className={local.modeGrid}><article className={local.modeCard}><div className={local.modeIcon}><Droplets size={21} /></div><span>CATION RESIN · H⁺ FORM</span><h3>Exchange remaining positive ions</h3><p>Strong acid cation resin exchanges cations such as calcium, magnesium, sodium and potassium for hydrogen ions.</p><strong>Part of the demineralisation mechanism</strong></article><article className={local.modeCard}><div className={local.modeIcon}><FlaskConical size={21} /></div><span>ANION RESIN · OH⁻ FORM</span><h3>Exchange remaining negative ions</h3><p>Strong base anion resin exchanges chloride, sulphate, nitrate and silica-related species for hydroxide ions.</p><strong>H⁺ and OH⁻ combine to form water</strong></article></div><div className={styles.cautionNote}><CircleAlert size={19} /><div><strong>Keep the distinction clear</strong><span>This page describes the supplied Mixed Bed Demineralisation (DI) brochure. It should not be presented as a sodium-cycle softener or as a complete treatment train without the required upstream and downstream stages.</span></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="configurations"><div className={styles.container}><SectionHeading eyebrow="02 · System configurations" title="Select the vessel around the water-quality duty">The brochure lists three construction options with overlapping capacity ranges. The ranges are preserved as advertised and do not imply that every vessel option is available for every model or flow rate.</SectionHeading><div className={local.productGrid}><article className={local.productCard}><div className={local.productImage}><Image src="/mixed-bed-unit.png" alt="Mixed bed system reference for FRP configuration" fill sizes="(max-width: 620px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div><div className={local.productBody}><span>01 · FRP MIXED BED</span><h3>Fibreglass Reinforced Plastic</h3><strong>100 LPH–5,000 LPH</strong><p>FRP vessel described with a Multiport Valve (MPV).</p><small>Reference image; confirm the supplied model and valve arrangement.</small></div></article><article className={local.productCard}><div className={local.productImage}><Image src="/mixed-bed-msep-vessel.png" alt="Mixed bed MSEP vessel brochure reference" fill sizes="(max-width: 620px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div><div className={local.productBody}><span>02 · MSEP MIXED BED</span><h3>MS with Epoxy Lining</h3><strong>1,000 LPH–10,000 LPH</strong><p>MSEP vessel configuration shown in the available brochure reference.</p><small>Confirm lining system, controls and final operating limits.</small></div></article><article className={local.productCard}><div className={local.productPlaceholder}><Layers3 size={32} /><span>MSRL product photograph to confirm</span></div><div className={local.productBody}><span>03 · MSRL MIXED BED</span><h3>MS with FRP / Rubber Lining</h3><strong>500 LPH–10,000 LPH</strong><p>MSRL construction as listed in the supplied brief.</p><small>No verified MSRL-specific image was found in the current asset set.</small></div></article></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="working-principle"><div className={styles.container}><SectionHeading eyebrow="03 · Working principle" title="Two resin functions. One polished stream.">The mixed bed combines strong acid cation resin in H⁺ form with strong base anion resin in OH⁻ form. The exact silica-related species and final water-quality performance require technical confirmation for the feed and application.</SectionHeading><div className={mixed.principleGrid}><article className={mixed.principleCard}><span>01 · CATION EXCHANGE</span><Droplets size={21} /><h3>Remove positive ions</h3><p>Ca²⁺, Mg²⁺, Na⁺ and K⁺ are among the cations identified in the working brochure description.</p><code>Residual cations → H⁺ form resin</code></article><article className={mixed.principleCard}><span>02 · ANION EXCHANGE</span><FlaskConical size={21} /><h3>Remove negative ions</h3><p>Cl⁻, SO₄²⁻, NO₃⁻ and silica-related species are exchanged by the OH⁻ form anion resin.</p><code>Residual anions → OH⁻ form resin</code></article><article className={mixed.principleCard}><span>03 · POLISHED WATER</span><ShieldCheck size={21} /><h3>H⁺ + OH⁻ → H₂O</h3><p>The exchanged hydrogen and hydroxide ions combine to form water, producing a low-conductivity polished stream when the design and resin condition support it.</p><code>High-purity outlet · verify actual result</code></article></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="04 · Process flow" title="Pre-treated feed → mixed bed → ultra-pure water">The process keeps the 5-micron cartridge filter and final conductivity headline visible without implying that the filter itself softens or demineralises the water.</SectionHeading><ProcessDiagram /><p className={styles.darkNote}>Upstream treatment requirements depend on feed-water quality, the selected vessel, resin loading, operating conditions and the actual system design.</p></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="features"><div className={styles.container}><SectionHeading eyebrow="05 · Main system benefits" title="High-purity polishing in a compact vessel">The following benefits are based on the supplied brochure and are subject to the water analysis, resin condition, regeneration arrangement and final engineering review.</SectionHeading><div className={styles.featureGrid}>{features.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section} id="applications"><div className={styles.container}><SectionHeading eyebrow="06 · Applications & industries" title="Where a mixed bed DI system may fit">The brochure lists the following applications. Final water quality, validation, compliance and upstream/downstream process requirements must be specified separately.</SectionHeading><div className={local.applicationSection}><div className={local.applicationLead}><span className={styles.miniEyebrow}>Application map</span><h3>Polish the stream that is ready for polishing</h3><p>A mixed bed is normally part of a larger water-treatment train. Review feed quality, target conductivity and the actual critical application before selecting the system.</p></div><div className={local.applicationGrid}>{applications.map(({ icon: Icon, title, image, note }) => <article className={local.applicationCard} key={title}><div className={local.applicationImage}><Image src={image} alt={`${title} application reference`} fill sizes="(max-width: 620px) 50vw, 180px" /><span aria-hidden="true"><Icon size={17} /></span></div><strong>{title}</strong><small>{note}</small></article>)}</div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="technical-specifications"><div className={styles.container}><SectionHeading eyebrow="07 · Catalogue data" title="TECHNICAL SPECIFICATIONS — MIXED BED DEMINERALISATION SYSTEM (100 LPH TO 10,000 LPH)">The table below preserves the supplied brochure values, model prefix and column labels. Confirm every entry against the original high-resolution source before final engineering or quotation.</SectionHeading><div className={styles.sourceBanner}><CircleAlert size={19} /><div><strong>Working brochure transcription — verification required</strong><span>Verify the AQU-MB model prefix and final suffix, dimensions, resin quantities, vessel combinations, bed-volume values, OBR meaning and units, and whether the HCl and NaOH figures are actual per-cycle doses at the stated concentrations.</span></div></div><DataTable label="Mixed bed demineralisation technical specifications" headers={["Model", "Flow Rate (LPH)", "Vessel Type", "Vessel Diameter (mm)", "Straight Height (mm)", "Cation Resin (L)", "Anion Resin (L)", "Total Resin (L)", "Service Flow Rate (m³/hr)", "Inlet/Outlet Size (NB)", "Operating Bed Volume (m³)", "Recommended OBR (min)", "HCl (L/cycle), 4–10%", "NaOH (L/cycle), 4–6%", "Rinse Water (m³/cycle)"]} rows={technicalRows} wide /><p className={styles.tableFootnote}>Brochure-listed specifications are indicative and must be confirmed for the final application. Do not silently correct unclear values.</p></div></section>

      <section className={styles.section} id="quality-data"><div className={styles.container}><SectionHeading eyebrow="08 · Water quality" title="TYPICAL INLET & OUTLET WATER PARAMETERS">The supplied source identifies the inlet as water from pre-treated water and the outlet as water after the mixed bed. These are typical brochure values, not independent test results or a universal performance guarantee.</SectionHeading><DataTable label="Typical mixed bed inlet and outlet water parameters" headers={["Parameter", "Unit", "Typical Inlet", "Typical Outlet"]} rows={qualityRows} compact /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Confirm the outlet conductivity notation “&lt; 0.1–1.0 µS/cm”, the outlet pH range, the unusually low inlet hardness and TDS values, and whether “inlet” means pre-treated feed water directly entering the mixed bed.</span></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="operating-parameters"><div className={styles.container}><SectionHeading eyebrow="09 · Operating data" title="OPERATING PARAMETERS">The following values are preserved from the supplied brochure. The OBR entry is unclear and must not be presented as a confirmed operating limit.</SectionHeading><div className={local.operatingGrid}><DataTable label="Mixed bed operating parameters" headers={["Parameter", "Brochure value"]} rows={operatingRows} compact /><div className={local.operatingNote}><CircleAlert size={19} /><div><strong>OBR and procedure qualification</strong><p>The final OBR text appears as 20–40 minutes depending on water quality, but the source may use OBR for another parameter. The brochure does not provide complete chemical injection rates, backwash duration, valve positions, neutralisation steps or automated sequences.</p></div></div></div></div></section>

      <section className={styles.section} id="bom-moc"><div className={styles.container}><SectionHeading eyebrow="10 · Construction & supply" title="Typical Bill of Materials (BOM) and Material of Construction">The tables preserve the supplied lists. They are not a promise that every item is included in every configuration or commercial offer.</SectionHeading><div className={styles.twoTableGrid}><div><h3 className={styles.tableTitle}>Typical Bill of Materials (BOM)</h3><DataTable label="Typical mixed bed bill of materials" headers={["Sr. No.", "Description", "Quantity"]} rows={bomRows} compact /></div><div><h3 className={styles.tableTitle}>Material of Construction</h3><DataTable label="Mixed bed material of construction" headers={["Item", "Brochure-listed options"]} rows={mocRows} compact /></div></div><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Verify the exact NRV wording, valve quantities, piping material, control-panel scope, optional dosing and storage-tank inclusion, and the resin-row alignment in the MOC source image. Do not reinterpret resin descriptions as vessel construction materials.</span></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="regeneration"><div className={styles.container}><SectionHeading eyebrow="11 · Regeneration & consumption" title="Separate the resins, regenerate the resins, prepare for service">The brochure identifies separate cation and anion regeneration. This section is a general explanation of the listed approach, not a manufacturer-approved operating procedure.</SectionHeading><div className={mixed.regenGrid}><article className={mixed.regenCard}><span>01 · SEPARATION</span><RefreshCw size={20} /><h3>Prepare the resin beds</h3><p>Cation and anion resins are handled separately for regeneration according to the approved system sequence.</p></article><article className={mixed.regenCard}><span>02 · CATION</span><FlaskConical size={20} /><h3>HCl, 4–10%</h3><p>The supplied operating data lists hydrochloric acid for cation-resin regeneration; exact dosing and handling require confirmation.</p></article><article className={mixed.regenCard}><span>03 · ANION</span><Droplets size={20} /><h3>NaOH, 4–6%</h3><p>The supplied operating data lists sodium hydroxide for anion-resin regeneration; exact dosing and handling require confirmation.</p></article><article className={mixed.regenCard}><span>04 · RINSE</span><Wrench size={20} /><h3>Slow and fast rinse</h3><p>Each regeneration is listed as 60–90 minutes, followed by 30-minute slow and fast rinse stages.</p></article></div><div className={mixed.regenNote}><CircleAlert size={18} /><span><strong>No salt-consumption claim:</strong> the source specifies acid and caustic regeneration, not NaCl consumption or a brine system. Do not infer salt dosage, recovery, wastewater generation or chemical dilution-water requirements.</span></div><div style={{ marginTop: 28 }}><DataTable label="Mixed bed regeneration chemicals and rinse water per model" headers={["Model", "Flow (LPH)", "HCl (L/cycle)", "NaOH (L/cycle)", "Rinse Water (m³/cycle)"]} rows={regenerationRows} compact /></div><p className={styles.tableFootnote}>The per-model figures are brochure-listed and subject to verification against the original table, resin loading, feed quality and approved regeneration procedure.</p></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="12 · Frequently asked questions" title="Mixed bed DI questions, answered clearly" /><div className={styles.faqList}>{faqs.map(([question, answer]) => <details className={styles.faqItem} key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className={`${styles.section} ${local.quoteSection}`} id="quote"><div className={styles.container}><div className={local.quoteGrid}><div><span className={styles.eyebrow}>13 · Design, manufacturing, supply, installation, commissioning & AMC</span><h2>Discuss your high-purity water requirements.</h2><p>Share the feed-water analysis, upstream RO or DM details, required capacity and target conductivity. AQUEN can confirm the vessel, resin, regeneration arrangement and final process scope for review.</p><div className={styles.ctaChecklist}><span><Check size={16} />Required capacity in LPH</span><span><Check size={16} />FRP, MSEP or MSRL preference</span><span><Check size={16} />Feed-water analysis and upstream treatment</span><span><Check size={16} />Target conductivity and application</span></div><div className={local.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a href="tel:+919096645119">+91 9096645119 <ArrowRight size={14} /></a><a href="tel:+919622554445">+91 9622554445 <ArrowRight size={14} /></a><a href="mailto:ceo@aquenfluid.com"><Mail size={14} /> ceo@aquenfluid.com</a><a href="https://www.aquenfluid.com" target="_blank" rel="noreferrer">www.aquenfluid.com <ArrowRight size={14} /></a><small>Office &amp; Factory: Sr. No. 165/2/9, Alankapuram Road, Opposite Yashobhamni Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India.</small></div></div><div className={local.formCard}><span className={local.formEyebrow}>Request technical details</span><h3>Enquire about this system</h3><p>Required fields use browser validation. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Mixed Bed Demineralisation System Enquiry" /><input type="hidden" name="Source Page" defaultValue="Mixed Bed Demineralisation Solution Page" /><div className={local.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone number *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>City / state<input name="City and State" type="text" autoComplete="address-level2" placeholder="City, state" /></label><label>Capacity in LPH<input name="Capacity" type="text" placeholder="Example: 2,000 LPH" /></label><label>Vessel type<select name="Vessel Type" defaultValue=""><option value="" disabled>Select vessel</option><option>FRP</option><option>MSEP</option><option>MSRL</option><option>Unsure</option></select></label><label>Application<input name="Application" type="text" placeholder="Pharma, power, laboratory, etc." /></label><label>Feed-water analysis<input name="Feed-water analysis" type="text" placeholder="Available / to follow" /></label><label>Existing RO / DM details<input name="Existing RO DM details" type="text" placeholder="Plant capacity / stages / none" /></label><label>Target conductivity<input name="Target conductivity" type="text" placeholder="µS/cm, if known" /></label><label>Operating approach<select name="Operating approach" defaultValue=""><option value="" disabled>Select approach</option><option>Automatic</option><option>Manual</option><option>Unsure</option></select></label><label className={local.fieldFull}>Message<textarea name="Message" required placeholder="Tell us about the feed water, upstream treatment, operating hours and critical application." /></label></div><div className={local.formSubmit}><button type="submit">Submit requirement <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>
    </main>
    <Footer />
  </div>;
}
