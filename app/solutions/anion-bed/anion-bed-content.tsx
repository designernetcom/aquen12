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

type TableRow = readonly string[];

const technicalRows: TableRow[] = [
  ["AQU-AB-0.4", "400", "FRP", "200", "1,200", "25", "0.1", "0.4", "15", "10–15"],
  ["AQU-AB-0.25", "250", "FRP", "300", "1,400", "50", "0.25", "0.6", "20", "10–30"],
  ["AQU-AB-0.5", "500", "FRP", "400", "1,650", "75", "0.5", "1.2", "25", "10–30"],
  ["AQU-AB-1.0", "1,000", "FRP / MSEP", "500", "1,800", "125", "1.0", "2.0", "32", "15–30"],
  ["AQU-AB-2.0", "2,000", "FRP / MSEP", "700", "2,000", "200", "2.0", "4.0", "40", "15–30"],
  ["AQU-AB-3.0", "3,000", "MSEP / MSRL", "800", "2,200", "300", "3.0", "6.0", "50", "15–30"],
  ["AQU-AB-5.0", "5,000", "MSEP / MSRL", "1,000", "2,400", "400", "5.0", "10.0", "65", "20–40"],
  ["AQU-AB-7.5", "7,500", "MSEP / MSRL", "1,200", "2,600", "600", "7.5", "15.0", "80", "20–40"],
  ["AQU-AB-10.0", "10,000", "MSEP / MSRL", "1,400", "2,800", "800", "10.0", "20.0", "100", "20–40"],
];

const qualityRows: TableRow[] = [
  ["pH", "—", "6.5–8.5", "8.0–9.5"],
  ["Total Dissolved Solids (TDS)", "mg/L", "50–500", "Not specified for cation + anion"],
  ["Chloride (Cl⁻)", "mg/L", "< 50", "< 1"],
  ["Sulphate (SO₄²⁻)", "mg/L", "< 50", "< 1"],
  ["Nitrate (NO₃⁻)", "mg/L", "< 10", "< 1"],
  ["Silica (SiO₂)", "mg/L", "< 20", "< 1"],
  ["Turbidity", "NTU", "< 5", "< 1"],
  ["Conductivity", "µS/cm", "100–1,000", "< 5–20"],
];

const operatingRows: TableRow[] = [
  ["Service flow rate", "As per table"],
  ["Operating pressure", "2.5–4.0 kg/cm²"],
  ["Maximum pressure", "5.0 kg/cm²"],
  ["Operating temperature", "5–45 °C"],
  ["Bed depth", "As per table"],
  ["Freeboard", "30–50%"],
  ["Regeneration", "4–8% NaOH"],
  ["Regeneration time", "60–90 minutes"],
  ["Slow rinse", "30 minutes"],
  ["Fast rinse", "30 minutes"],
  ["Operating Bed Volume (OBV)", "10–40 m³, depending on water quality"],
];

const bomRows: TableRow[] = [
  ["1", "Anion Bed Vessel (FRP / MSEP / MSRL)", "1 No.", "FRP / MS epoxy lining / MS with FRP or rubber lining, as applicable"],
  ["2", "Strong Base Anion Resin (SBA)", "As per capacity", "Strong Base Anion Resin (Type I or II)"],
  ["3", "Multipot Valve (MPV) / Distribution System", "1 Set", "UPVC / ABS"],
  ["4", "Piping & Fittings", "1 Set", "UPVC / CPVC / PP / MS-SS-304 / SS-316"],
  ["5", "Piping (internal)", "1 Set", "UPVC / CPVC / PP / MS-SS-304 / SS-316"],
  ["6", "Pressure Gauge (PG) / MS-SS (as required)", "2 Nos.", "MS / SS / PP"],
  ["7", "Sampling Valve", "1 No.", "UPVC / SS"],
  ["8", "Air Release Valve (ARV)", "1 No.", "UPVC / SS"],
  ["9", "Drain Valve", "1 No.", "UPVC / SS"],
  ["10", "Flow Meter (Optional)", "1 No.", "UPVC / SS"],
  ["11", "Control Panel (Auto / Manual) — Optional", "1 Set", "MS with powder coating"],
  ["12", "Chemical Dosing System (for NaOH) — Optional", "1 Set", "PP / PVDF / lined material, as specified"],
  ["13", "Regeneration Tank (Optional)", "1 No.", "FRP / PP / MS with lining"],
  ["14", "Instrumentation / accessories, as required", "As required", "According to application"],
];

const mocRows: TableRow[] = [
  ["Vessel", "FRP / MS epoxy lined / MS with FRP lining / MSRL"],
  ["Piping", "UPVC / CPVC / PP / MS-SS-304 / SS-316"],
  ["Valves", "UPVC / CPVC / PP / SS-304 / SS-316"],
  ["Distribution system", "UPVC / CPVC / PP / SS-304 / SS-316"],
  ["Multipot valve (MPV)", "UPVC / ABS"],
  ["Instrumentation", "SS-304 / SS-316"],
  ["Control panel", "MS with powder coating / SS-304 (Optional)"],
  ["Resin", "Strong Base Anion Resin, Type I or Type II"],
  ["Gaskets / O-rings", "EPDM / Viton"],
  ["Supports / Skid", "MS with powder coating / SS-304"],
];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "Anion removal", text: "Anion exchange can support high-purity water when the cation stage, resin, feed chemistry and complete train are correctly configured." },
  { icon: Droplets, title: "100–10,000 LPH range", text: "The brochure lists an overall capacity range from 100 LPH to 10,000 LPH." },
  { icon: Layers3, title: "FRP, MSEP and MSRL", text: "Vessel options are listed across the brochure configurations." },
  { icon: Gauge, title: "Low pressure drop", text: "Listed as a brochure feature; actual hydraulics depend on resin bed, model and service flow." },
  { icon: FlaskConical, title: "Strong base anion resin", text: "SBA resin in Type I or Type II form is listed; exact selection is configuration-dependent." },
  { icon: Settings2, title: "Automatic / manual options", text: "Controls and valve arrangements can be selected around the approved operating sequence." },
  { icon: RefreshCw, title: "NaOH regeneration", text: "Sodium hydroxide is a common regenerant for SBA resin; concentration, dosage and procedure require confirmation." },
  { icon: SlidersHorizontal, title: "Compact and rugged", text: "A compact package can be arranged for suitable industrial duties without implying a universal design." },
  { icon: Wrench, title: "Easy regeneration", text: "Regeneration can be arranged with appropriate equipment and an approved operating manual." },
  { icon: Factory, title: "Custom design", text: "Resin, vessel, controls and process train are selected around the required water quality." },
  { icon: Building2, title: "Continuous-operation suitability", text: "Suitable for continuous duty when service and regeneration are designed together." },
];

const applications: { icon: LucideIcon; title: string; image: string; note: string }[] = [
  { icon: Gauge, title: "Boiler Feed Water", image: "/banner/water-treatment.png", note: "May require RO, polishing or other validated stages." },
  { icon: Pill, title: "Pharmaceutical Industry", image: "/installation-img2.png", note: "Application-specific quality and validation requirements apply." },
  { icon: Utensils, title: "Food & Beverage", image: "/banner/industries-we-serve.png", note: "Final train depends on process-water requirements." },
  { icon: Factory, title: "Power Plants", image: "/about-img.png", note: "Boiler and utility water duties need confirmed targets." },
  { icon: Settings2, title: "Electroplating Industry", image: "/uploads/1787122891174-264c261e-f1a2-4d9d-929a-37dede6328bb.png", note: "Feed chemistry and waste handling require review." },
  { icon: FlaskConical, title: "Chemical Industry", image: "/banner/fabrication-engineering.png", note: "Resin and lining compatibility must be confirmed." },
  { icon: Waves, title: "Textile Industry", image: "/installation-img1.png", note: "Anion exchange may be one stage of the water train." },
  { icon: Building2, title: "Automobile Industry", image: "/uploads/1787122866622-f410c89b-d335-40fc-87b0-f7d7b0c7b084.png", note: "Utility water duty and outlet target are application-specific." },
  { icon: HeartPulse, title: "Hospitals & Healthcare", image: "/banner/infrastructure.png", note: "Additional treatment may be required for healthcare uses." },
  { icon: Landmark, title: "Laboratories", image: "/banner/advanced-biological.png", note: "Anion exchange alone does not imply laboratory-grade water." },
  { icon: Factory, title: "Glass Industry", image: "/banner/fabrication-engineering.png", note: "Process-water quality and silica targets require confirmation." },
  { icon: Settings2, title: "Electronic Industry", image: "/banner/operation-maintenance.png", note: "High-purity or electronics-grade quality may need polishing." },
];

const faqs = [
  ["What is an anion bed?", "An anion bed is a vessel containing anion-exchange resin. Strong base anion resin exchanges selected anions in water for hydroxide ions in the hydroxide form."],
  ["How does anion-exchange demineralisation work?", "An anion bed is commonly used after a hydrogen-cycle cation bed. Hydrogen ions released by the cation stage and hydroxide ions released by the anion stage combine to form water, while the exchange stages reduce dissolved ionic content."],
  ["What is the difference between a cation bed and an anion bed?", "A cation bed exchanges positively charged ions such as calcium and magnesium, while an anion bed exchanges negatively charged ions such as chloride, sulphate, nitrate, bicarbonate and selected silica species."],
  ["What is strong base anion resin?", "Strong base anion resin is an ion-exchange resin designed to exchange anions across a broad pH range. The brochure lists Type I or Type II resin; the exact choice depends on the design."],
  ["What are Type I and Type II anion resins?", "They are different strong-base anion resin chemistries with different selectivity and operating characteristics. AQUEN should confirm the selected resin and its compatibility with the feed and regenerant."],
  ["Why is an anion bed generally used after a cation bed?", "A hydrogen-cycle cation stage converts cations to hydrogen ions, and the anion stage exchanges anions for hydroxide ions. Together they can reduce ionic content as part of a demineralisation train."],
  ["What does conductivity indicate?", "Conductivity is an indicator of the water's ability to carry electrical current and is related to dissolved ionic content. It is not by itself a complete measure of every water-quality parameter or a guaranteed result."],
  ["What does the operating bed volume mean?", "The brochure includes an Operating Bed Volume column, but its units, meaning and test conditions require confirmation. It should not be treated as guaranteed treated-water volume."],
  ["How is anion resin regenerated?", "The brochure lists NaOH at 4–8%, with indicative regeneration and rinse times. Concentration, dosage, temperature, flow, endpoint and sequence must come from the approved AQUEN manual."],
  ["Which vessel materials are available?", "The brochure lists FRP, MSEP and MSRL configurations. Exact lining, pressure, resin compatibility and optional components depend on the selected model."],
  ["Does an anion bed alone produce fully deionised water?", "No. An anion bed does not by itself remove all dissolved ions. Final deionised-water quality depends on the cation stage, anion resin, feed chemistry, leakage, regeneration and any additional polishing stages."],
  ["How can I request a quotation?", "Use the enquiry form below or contact AQUEN with the required flow, vessel preference, existing cation or RO system, outlet-quality target and feed-water analysis availability."],
] as const;

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, compact = false, label }: { headers: string[]; rows: TableRow[]; compact?: boolean; label: string }) {
  return <div className={`${styles.tableWrap} ${compact ? styles.compactTable : ""}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProcessDiagram() {
  return <div className={local.processBoard}>
    <div className={local.processPath} aria-label="Anion bed demineralisation process flow diagram">
      <div className={local.processNode}><span>01</span><strong>Pre-treated Water</strong><small>TSS below 1 NTU · no free chlorine · pH 6.5–8.5*</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>02</span><strong>MGF / ACF</strong><small>Optional pretreatment</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>03</span><strong>Cation Bed</strong><small>Strong Acid Cation Resin</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={`${local.processNode} ${local.processNodeActive}`}><span>04</span><strong>Anion Bed</strong><small>Strong Base Anion Resin</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>05</span><strong>Treated Water Tank</strong><small>Deionized water*</small></div>
    </div>
    <div className={local.processFoot}><span><b>Brochure pretreatment notes:</b> display as specified conditions pending confirmation, not universal feed-water guarantees.</span><span><b>Final quality:</b> low conductivity / high purity depends on the complete cation–anion train and any polishing stages.</span></div>
  </div>;
}

export default function AnionBedContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Anion Bed</strong></nav>
        <div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN SOLUTION SYSTEM · DEMINERALISATION</span><h1>Anion <em>Bed</em></h1><h2>Demineralisation (De-ionisation) System</h2><p>AQUEN anion beds use strong base anion resin to exchange selected anions for hydroxide ions in the hydroxide form. They are commonly used after a cation-exchange stage as part of a demineralisation train, subject to feed chemistry, resin selection, regeneration and the required treated-water quality.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Request a Quote <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link></div><div className={styles.heroMetrics}><div><strong>100–10,000 LPH</strong><span>brochure capacity range</span></div><div><strong>SBA resin</strong><span>Type I or Type II</span></div><div><strong>FRP / MSEP / MSRL</strong><span>vessel options</span></div></div><p className={styles.heroNote}>Removal of Anions for High Purity Water · Design · Manufacturing · Supply · Installation · Commissioning · AMC</p></div><div className={styles.heroVisual}><div className={styles.heroVisualFrame}><Image src="/anion-msep-5000-lph.png" alt="AQUEN anion bed MSEP vessel reference photograph" fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>Anion vessel reference</span></div><div className={styles.heroCaption}><span>Configuration</span><strong>FRP / MSEP / MSRL</strong><span>Train</span><strong>After cation exchange</strong></div></div></div>
      </div></section>

      <section className={styles.section}><div className={styles.container}><SectionHeading eyebrow="01 · Anion bed overview" title="Anion exchange completes a defined part of the demineralisation train">A strong base anion bed exchanges negatively charged ions in water for hydroxide ions. The brochure lists chloride, sulphate, nitrate, silica and bicarbonate among the relevant anions.</SectionHeading><div className={local.modeGrid}><article className={local.modeCard}><div className={local.modeIcon}><Droplets size={21} /></div><span>STRONG BASE ANION RESIN</span><h3>Exchange anions for hydroxide</h3><p>In the hydroxide form, SBA resin can exchange selected anions including Cl⁻, SO₄²⁻, NO₃⁻, bicarbonate and dissolved silica species. Actual performance depends on resin type, leakage and feed chemistry.</p><strong>Typical role: anion stage after cation exchange</strong></article><article className={local.modeCard}><div className={local.modeIcon}><ShieldCheck size={21} /></div><span>COMPLETE DEMINERALISATION TRAIN</span><h3>Combine cation and anion exchange</h3><p>Hydrogen ions released by a hydrogen-cycle cation bed combine with hydroxide ions from the anion bed to form water. Additional polishing or treatment may still be required for the final target.</p><strong>Typical outcome: lower ionic content, subject to design</strong></article></div><div className={styles.cautionNote}><CircleAlert size={19} /><div><strong>Not a standalone complete deionisation guarantee</strong><span>An anion bed alone does not remove all dissolved ions or always produce fully deionised water. Confirm the complete cation–anion train, resin, regeneration and outlet-quality target with AQUEN.</span></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="configurations"><div className={styles.container}><SectionHeading eyebrow="02 · Product configurations" title="Choose the vessel around the complete water train">The brochure presents FRP, MSEP and MSRL anion-bed configurations. Dimensions, pressure ratings, prices and certifications are not inferred here.</SectionHeading><div className={local.productGrid}><article className={local.productCard}><div className={local.productImage}><Image src="/anionexchangeUnit.png" alt="FRP anion bed vessel reference" fill sizes="(max-width: 620px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div><div className={local.productBody}><span>01 · FRP ANION BED</span><h3>Fibreglass Reinforced Plastic</h3><strong>100 LPH–5,000 LPH</strong><p>Multipot valve (MPV) configuration shown in the brochure.</p><small>Confirm current availability, duty and operating limits.</small></div></article><article className={local.productCard}><div className={local.productImage}><Image src="/anion-msep-5000-lph.png" alt="MSEP anion bed vessel reference" fill sizes="(max-width: 620px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div><div className={local.productBody}><span>02 · MSEP ANION BED</span><h3>Mild Steel with Epoxy Lining</h3><strong>1,000 LPH–10,000 LPH</strong><p>MSEP vessel construction shown in the brochure.</p><small>Confirm lining, resin type and control arrangement.</small></div></article><article className={local.productCard}><div className={local.productImage}><Image src="/anion-dual-vessel-5000-lph.png" alt="MSRL anion bed dual-vessel reference" fill sizes="(max-width: 620px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div><div className={local.productBody}><span>03 · MSRL ANION BED</span><h3>Mild Steel with FRP Lining</h3><strong>500 LPH–10,000 LPH</strong><p>MS with FRP lining as listed in the brochure.</p><small>Confirm lining, compatibility and exact supplied configuration.</small></div></article></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="03 · Process flow" title="Pre-treatment → cation exchange → anion exchange → high-purity duty">The brochure describes the anion bed as generally used in combination with a cation bed for complete demineralisation. The pretreatment notes shown below remain pending confirmation.</SectionHeading><ProcessDiagram /><p className={styles.darkNote}>* TSS below 1 NTU, no free chlorine and pH 6.5–8.5 are displayed as brochure-specified pretreatment conditions, not universal feed-water guarantees.</p></div></section>

      <section className={styles.section} id="working-principle"><div className={styles.container}><SectionHeading eyebrow="04 · Working principle" title="Exchange anions, combine the exchange stages, then regenerate">Pre-treated water enters the train, passes through the cation stage and then through SBA resin. The cation and anion stages together reduce dissolved ionic content for the intended application.</SectionHeading><div className={local.stepGrid}><article><span>01</span><Droplets size={20} /><h3>Pre-treated water</h3><p>MGF and ACF may be included where required. Feed conditions such as turbidity and free chlorine must be confirmed for the selected resin.</p></article><article><span>02</span><RefreshCw size={20} /><h3>Cation exchange</h3><p>The upstream cation bed exchanges cations according to its selected form and prepares the water for the anion stage.</p></article><article><span>03</span><ShieldCheck size={20} /><h3>Anion exchange</h3><p>SBA resin exchanges selected anions for hydroxide ions in the hydroxide form, subject to resin type and operating conditions.</p></article><article><span>04</span><FlaskConical size={20} /><h3>Regeneration</h3><p>NaOH regeneration restores the exchange form when operating capacity is exhausted. The approved manual controls the actual procedure.</p></article></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="features"><div className={styles.container}><SectionHeading eyebrow="05 · Key features" title="Built for the anion stage of a defined water-quality train">The following brochure-listed features are subject to resin selection, feed chemistry, regeneration arrangement and final engineering review.</SectionHeading><div className={styles.featureGrid}>{features.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section} id="technical-specifications"><div className={styles.container}><SectionHeading eyebrow="06 · Catalogue data" title="TECHNICAL SPECIFICATIONS — ANION BED (100 LPH TO 10,000 LPH)">The table below preserves the working brochure transcription. The brochure states that specifications are indicative and can be customized according to water quality and operating conditions.</SectionHeading><div className={styles.sourceBanner}><CircleAlert size={19} /><div><strong>Working transcription — engineering verification required</strong><span>Confirm model identifiers, the first two flow entries, vessel dimensions, shell heights, media quantities, service and backwash flows, connection sizes and the meaning and units of the Operating Bed Volume column against the original brochure or AQUEN data sheet.</span></div></div><DataTable label="Technical specifications for anion bed" headers={["Model", "Flow rate (LPH)", "Vessel type", "Vessel dia. (mm)", "Shell height (mm)", "Media quantity (L)", "Service flow rate (m³/hr)", "Backwash flow rate (m³/hr)", "Inlet / outlet size (NB)", "Operating bed volume (m³)"]} rows={technicalRows} /><p className={styles.tableFootnote}>Do not silently correct or recalculate unclear brochure values. Operating-bed-volume entries are not guaranteed treated-water volume.</p></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="quality-data"><div className={styles.container}><SectionHeading eyebrow="07 · Water quality" title="TYPICAL INLET & OUTLET PARAMETERS">These values are preserved as brochure-provided typical values. Confirm whether outlet figures refer to the anion bed alone or the complete cation–anion demineralisation train.</SectionHeading><DataTable label="Typical anion bed inlet and outlet parameters" headers={["Parameter", "Unit", "Typical inlet", "Typical outlet (after anion bed)"]} rows={qualityRows} compact /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>Confirm the outlet pH range, TDS wording, conductivity range, analytical methods and operating conditions before publication. Do not present these values as guaranteed results or as a promise of complete deionisation.</span></div></div></section>

      <section className={styles.section} id="operating-parameters"><div className={styles.container}><SectionHeading eyebrow="08 · Operating data" title="OPERATING PARAMETERS">The following values are listed in the brochure and remain pending confirmation for each vessel, resin type and operating configuration.</SectionHeading><div className={local.operatingGrid}><DataTable label="Anion bed operating parameters" headers={["Parameter", "Value"]} rows={operatingRows} compact /><div className={local.operatingNote}><CircleAlert size={19} /><div><strong>NaOH regeneration qualification</strong><p>The listed 4–8% NaOH value must be confirmed for the selected resin. Confirm concentration, dosage, temperature, regeneration flow, contact time, rinse durations, endpoint and OBV conditions with AQUEN.</p></div></div></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="regeneration"><div className={styles.container}><SectionHeading eyebrow="09 · Regeneration sequence" title="Restore the anion resin under the approved procedure">The brochure lists the following values. They are indicative and pending engineering confirmation, not a step-by-step operating recipe.</SectionHeading><div className={local.regenerationGrid}><article><span>01</span><FlaskConical size={20} /><h3>Regeneration chemical</h3><strong>NaOH · 4–8%</strong><p>Concentration and consumption are resin- and configuration-dependent.</p></article><article><span>02</span><RefreshCw size={20} /><h3>Regeneration time</h3><strong>60–90 minutes</strong><p>Timing depends on the selected resin and approved process design.</p></article><article><span>03</span><Wrench size={20} /><h3>Rinsing</h3><strong>Slow rinse: 30 minutes · Fast rinse: 30 minutes</strong><p>Do not infer chemical flow, valve positions or endpoints from these values.</p></article></div><div className={local.darkWarning}><CircleAlert size={19} /><span>AQUEN&apos;s approved operating manual is required before publishing chemical handling or step-by-step regeneration instructions.</span></div></div></section>

      <section className={styles.section} id="bom-moc"><div className={styles.container}><SectionHeading eyebrow="10 · Construction & supply" title="TYPICAL BILL OF MATERIAL (BOM) and MATERIAL OF CONSTRUCTION (MOC)">The brochure distinguishes standard and optional components where readable. Quantities and material selections remain subject to configuration and engineering confirmation.</SectionHeading><div className={styles.twoTableGrid}><div><h3 className={styles.tableTitle}>TYPICAL BILL OF MATERIAL (BOM)</h3><DataTable label="Typical anion bed bill of material" headers={["No.", "Description", "Quantity", "MOC / specification"]} rows={bomRows} compact /></div><div><h3 className={styles.tableTitle}>MATERIAL OF CONSTRUCTION (MOC)</h3><DataTable label="Anion bed material of construction" headers={["Item", "Material / options"]} rows={mocRows} compact /></div></div><p className={styles.tableFootnote}>Confirm NaOH compatibility, vessel lining, optional controls and all BOM quantities against the approved engineering BOM. Optional equipment is not implied in every configuration.</p></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="applications"><div className={styles.container}><SectionHeading eyebrow="11 · Applications & industries" title="Where anion exchange may fit">The brochure lists the following industries. Final suitability depends on the complete treatment train and the required treated-water quality.</SectionHeading><div className={local.applicationSection}><div className={local.applicationLead}><span className={styles.miniEyebrow}>Application map</span><h3>Match the anion stage to the duty</h3><p>Boiler-feed, pharmaceutical, electronics and laboratory applications may require RO, mixed-bed polishing or other validated stages after cation–anion exchange.</p></div><div className={local.applicationGrid}>{applications.map(({ icon: Icon, title, image, note }) => <article className={local.applicationCard} key={title}><div className={local.applicationImage}><Image src={image} alt={`${title} application reference`} fill sizes="(max-width: 620px) 50vw, 180px" /><span aria-hidden="true"><Icon size={17} /></span></div><strong>{title}</strong><small>{note}</small></article>)}</div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="12 · Frequently asked questions" title="Anion bed questions, answered clearly" /><div className={styles.faqList}>{faqs.map(([question, answer]) => <details className={styles.faqItem} key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className={`${styles.section} ${local.quoteSection}`} id="quote"><div className={styles.container}><div className={local.quoteGrid}><div><span className={styles.eyebrow}>13 · Design, manufacturing, supply, installation, commissioning & AMC</span><h2>Let&apos;s select the right anion-bed configuration.</h2><p>Share your flow, vessel preference, existing cation or RO system and outlet-quality target. AQUEN can review whether the anion bed fits the complete demineralisation train.</p><div className={styles.ctaChecklist}><span><Check size={16} />Required flow rate in LPH</span><span><Check size={16} />FRP, MSEP or MSRL preference</span><span><Check size={16} />Existing cation bed or RO system</span><span><Check size={16} />Outlet conductivity and water-quality target</span></div><div className={local.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a href="mailto:info@aquenfluid.com"><Mail size={14} /> info@aquenfluid.com</a><small>Office / factory: Charholi Budruk, Pimpri-Chinchwad, Maharashtra 412105, India.</small></div></div><div className={local.formCard}><span className={local.formEyebrow}>Request a quotation</span><h3>Share your anion-bed requirement</h3><p>Required fields use browser validation. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Anion Bed Enquiry" /><input type="hidden" name="Source Page" defaultValue="Anion Bed Solution Page" /><div className={local.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone number *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>City and state<input name="City and State" type="text" autoComplete="address-level2" placeholder="City, state" /></label><label>Required flow rate in LPH<input name="Capacity" type="text" placeholder="Example: 2,000 LPH" /></label><label>Required vessel type<select name="Vessel Type" defaultValue=""><option value="" disabled>Select vessel</option><option>FRP</option><option>MSEP</option><option>MSRL</option><option>Unsure</option></select></label><label>Application<input name="Application" type="text" placeholder="Boiler, pharma, food, utility, etc." /></label><label>Feed-water analysis availability<input name="Feed-water analysis" type="text" placeholder="Available / not available / to follow" /></label><label>Required outlet conductivity / quality<input name="Outlet conductivity or quality" type="text" placeholder="Known target or report" /></label><label className={local.fieldFull}>Existing cation-bed or RO system<input name="Existing cation bed or RO system" type="text" placeholder="Existing equipment, if applicable" /></label><label className={local.fieldFull}>Message<textarea name="Message" required placeholder="Tell us about flow, feed water, cation stage, target quality and site requirements." /></label></div><div className={local.formSubmit}><button type="submit">Submit requirement <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>
    </main>
    <Footer />
  </div>;
}
