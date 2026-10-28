import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  Download,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  HeartPulse,
  Landmark,
  Layers3,
  Mail,
  PanelsTopLeft,
  Pill,
  RefreshCw,
  Recycle,
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
import local from "./cation-bed.module.css";

type TableRow = readonly string[];

const technicalRows: TableRow[] = [
  ["AQU-CB-0.4", "400", "FRP", "200", "1,200", "25", "0.1", "0.4", "15", "10–15"],
  ["AQU-CB-0.25", "250", "FRP", "300", "1,400", "50", "0.25", "1.0", "20", "10–25"],
  ["AQU-CB-0.5", "500", "FRP", "400", "1,650", "75", "0.5", "2.0", "25", "10–30"],
  ["AQU-CB-1.0", "1,000", "FRP / MSEP", "500", "1,800", "125", "1.0", "5.0", "32", "15–30"],
  ["AQU-CB-2.0", "2,000", "FRP / MSEP", "700", "2,000", "200", "2.0", "7.5", "40", "15–35"],
  ["AQU-CB-3.0", "3,000", "MSEP / MSRL", "800", "2,200", "300", "3.0", "10.0", "50", "15–35"],
  ["AQU-CB-5.0", "5,000", "MSEP / MSRL", "1,000", "2,400", "400", "5.0", "15.0", "65", "20–40"],
  ["AQU-CB-7.5", "7,500", "MSEP / MSRL", "1,200", "2,600", "600", "7.5", "15.0", "80", "20–40"],
  ["AQU-CB-10.0", "10,000", "MSEP / MSRL", "1,400", "2,800", "800", "10.0", "20.0", "100", "20–40"],
];

const qualityRows: TableRow[] = [
  ["pH", "—", "6.5–8.5", "6.5–7.0"],
  ["Total hardness (as CaCO₃)", "mg/L", "100–1,000", "< 5–10"],
  ["Calcium (Ca²⁺)", "mg/L", "50–300", "< 1–2"],
  ["Magnesium (Mg²⁺)", "mg/L", "10–200", "< 1–2"],
  ["Sodium (Na⁺)", "mg/L", "10–200", "< 5–10"],
  ["Iron (Fe)", "mg/L", "< 1", "< 1"],
  ["Manganese (Mn)", "mg/L", "< 0.5", "< 0.5"],
  ["Turbidity", "NTU", "< 5", "< 1"],
];

const operatingRows: TableRow[] = [
  ["Service flow rate", "As per table"],
  ["Operating pressure", "2.5–4.0 kg/cm²"],
  ["Maximum pressure", "5.0 kg/cm²"],
  ["Operating temperature", "5–45 °C"],
  ["Depth of resin", "As per model"],
  ["Freeboard", "300–500 mm"],
  ["Regeneration chemical", "HCl (5–10%) or H₂SO₄ (3–5%)"],
  ["Regeneration time", "60–90 minutes"],
  ["Slow rinse time", "30 minutes"],
  ["Fast rinse", "30 minutes"],
  ["Operating bed volume (OBV)", "10–40 m³, depending on operating quality"],
];

const bomRows: TableRow[] = [
  ["1", "Cation Bed Vessel (FRP / MSEP / MSRL)", "1 No.", "FRP / MSEP / MSRL; lining as per configuration"],
  ["2", "Strong Acid Cation Resin (SAC)", "As per capacity", "SAC resin"],
  ["3", "Multipot Valve (MPV) / Manual Valve", "1 Set", "As per configuration"],
  ["4", "Piping & Distribution System (internal)", "1 Set", "UPVC / CPVC / PP / SS-304 / SS-316"],
  ["5", "Piping & Fittings (external)", "1 Set", "UPVC / CPVC / PP / SS-304 / SS-316"],
  ["6", "Pressure Gauge (PG) / MS-SS (as required)", "2 Nos.", "MS / SS / PP, as applicable"],
  ["7", "Sampling Valve", "1 No.", "UPVC / SS"],
  ["8", "Air Release Valve (ARV)", "1 No.", "UPVC / SS"],
  ["9", "Drain Valve", "1 No.", "UPVC / SS"],
  ["10", "Flow Meter (Optional)", "1 No.", "UPVC / SS / applicable material"],
  ["11", "Control Panel (Auto / Manual) — Optional", "1 Set", "MS with powder coating"],
  ["12", "Chemical Dosing System (for H₂SO₄ / HCl) — Optional", "1 Set", "PP / PVDF / Lined"],
  ["13", "Regeneration Tank (Optional)", "1 No.", "FRP / PP / MS with lining"],
  ["14", "Instrumentation (Pressure Gauge, Flow Meter, etc.)", "As required", "As per application"],
];

const mocRows: TableRow[] = [
  ["Vessel", "FRP / MS epoxy coating / MS with FRP lining / rubber lining, according to model"],
  ["Piping", "UPVC / CPVC / PP / MS-SS-304 / SS-316"],
  ["Valves", "UPVC / CPVC / PP / SS-304 / SS-316"],
  ["Distribution system", "UPVC / CPVC / PP / SS-304 / SS-316"],
  ["Multipot valve (MPV)", "UPVC / ABS"],
  ["Instrumentation", "SS-304 / SS-316"],
  ["Control panel", "MS with powder coating / SS-304 (Optional)"],
  ["Resin", "Strong Acid Cation (SAC) resin"],
  ["Gaskets / O-rings", "EPDM / Viton"],
  ["Supports / Skid", "MS with powder coating / SS-304"],
];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "High exchange capacity", text: "Strong acid cation resin is listed for high exchange capacity and long resin life; actual life depends on feed chemistry and operation." },
  { icon: Droplets, title: "Hardness control", text: "Calcium and magnesium can be exchanged according to the selected resin operating form." },
  { icon: Layers3, title: "FRP, MSEP and MSRL", text: "Vessel construction options are listed across the brochure capacity range." },
  { icon: Gauge, title: "Low pressure drop", text: "Listed as a brochure feature; actual hydraulics depend on model, resin bed and service flow." },
  { icon: Settings2, title: "Automatic / manual options", text: "Multipot valve, manual valve and optional control-panel arrangements can be selected by configuration." },
  { icon: FlaskConical, title: "Configuration-specific regeneration", text: "Acid regeneration applies only to confirmed hydrogen-cycle designs; sodium-cycle softening normally uses brine." },
  { icon: SlidersHorizontal, title: "Compact skid-mounted design", text: "Supports a compact package where the approved vessel, piping and controls are arranged as a skid." },
  { icon: RefreshCw, title: "Regenerable process", text: "Resin requires regeneration after its available operating capacity is reached." },
  { icon: Wrench, title: "Continuous-operation suitability", text: "Suitable for continuous duty when the service and regeneration arrangement is designed for it." },
  { icon: Factory, title: "Custom design", text: "Capacity, resin form, vessel, controls and regeneration are selected around water-quality requirements." },
];

const applications: { icon: LucideIcon; title: string; image: string; note: string }[] = [
  { icon: Gauge, title: "Boiler Feed Water", image: "/banner/water-treatment.png", note: "May require additional treatment stages and verified feed targets." },
  { icon: Pill, title: "Pharmaceutical Industry", image: "/installation-img2.png", note: "Application-specific quality and validation requirements apply." },
  { icon: Utensils, title: "Food & Beverage", image: "/banner/industries-we-serve.png", note: "Selected utility and process-water duties only." },
  { icon: Factory, title: "Power Plants", image: "/about-img.png", note: "Final water train depends on boiler and process requirements." },
  { icon: Waves, title: "Textile Industry", image: "/installation-img1.png", note: "Feed chemistry and downstream process use must be reviewed." },
  { icon: FlaskConical, title: "Chemical Industry", image: "/banner/fabrication-engineering.png", note: "Resin and lining compatibility require confirmation." },
  { icon: Settings2, title: "Electroplating Industry", image: "/uploads/1787122891174-264c261e-f1a2-4d9d-929a-37dede6328bb.png", note: "Pretreatment and waste handling are application-dependent." },
  { icon: Building2, title: "Automobile Industry", image: "/uploads/1787122866622-f410c89b-d335-40fc-87b0-f7d7b0c7b084.png", note: "Utility water duty and required outlet quality must be confirmed." },
  { icon: HeartPulse, title: "Hospitals & Healthcare", image: "/banner/infrastructure.png", note: "Additional treatment may be required for healthcare water uses." },
  { icon: Landmark, title: "Laboratories", image: "/banner/advanced-biological.png", note: "Cation exchange alone does not imply laboratory-grade water." },
];

const faqs = [
  ["What is a cation bed?", "A cation bed is a vessel containing cation-exchange resin. The resin exchanges selected positively charged ions in feed water according to its operating form and the system design."],
  ["What is the difference between sodium-cycle and hydrogen-cycle operation?", "In sodium-cycle softening, calcium and magnesium are exchanged for sodium, reducing hardness without necessarily reducing total dissolved salts. In hydrogen-cycle operation, cations are exchanged for hydrogen ions as one stage of a demineralisation train; downstream anion exchange and other stages may be required."],
  ["Does a cation bed produce fully demineralised water?", "Not by itself in the general case. A hydrogen-cycle cation exchanger is normally one part of a demineralisation train. The selected AQUEN configuration must be confirmed as a softener, a hydrogen-cycle exchanger or another defined duty."],
  ["Which cations can be exchanged?", "The brochure identifies calcium, magnesium, sodium, iron and manganese among relevant cations. Actual removal depends on resin type, operating form, feed chemistry, pretreatment and design."],
  ["What capacities are listed?", "The brochure states a wider range of 100 LPH to 10,000 LPH. The three configuration bands shown are FRP 100–5,000 LPH, MSEP 1,000–10,000 LPH and MSRL 500–10,000 LPH."],
  ["When is acid regeneration used?", "The brochure lists HCl and sulphuric acid values for regeneration, but acid regeneration is configuration-dependent. Sodium-cycle softeners normally use brine. AQUEN must confirm the selected resin form and approved regenerant."],
  ["Does a cation bed remove TDS?", "Sodium-cycle softening replaces calcium and magnesium with sodium, so total dissolved salts are not necessarily reduced. Hydrogen-cycle exchange can alter the ionic composition and pH but does not by itself complete demineralisation."],
  ["Can a cation bed reliably remove iron, manganese or turbidity?", "Not under every operating condition. Feed chemistry, oxidation state, pretreatment, resin selection and operating conditions determine whether additional treatment is required."],
  ["What information is needed for selection?", "Share flow, hardness, calcium, magnesium, sodium, iron, manganese, pH, turbidity, operating hours, intended water use and a water-analysis report if available."],
  ["What maintenance does the system require?", "Maintenance depends on vessel, valve, resin, regenerant arrangement and operating conditions. Follow AQUEN's approved manual for inspection, regeneration, rinsing and service."],
  ["How can I request a quotation?", "Use the enquiry form below or contact AQUEN with the required flow, vessel preference, operating mode, application and feed-water analysis availability."],
] as const;

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className={styles.sectionHeading}><span>{eyebrow}</span><h2>{title}</h2>{children ? <p>{children}</p> : null}</div>;
}

function DataTable({ headers, rows, compact = false, label }: { headers: string[]; rows: TableRow[]; compact?: boolean; label: string }) {
  return <div className={`${styles.tableWrap} ${compact ? styles.compactTable : ""}`}><table aria-label={label}><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProcessDiagram() {
  return <div className={local.processBoard}>
    <div className={local.processPath} aria-label="Cation bed process flow diagram">
      <div className={local.processNode}><span>01</span><strong>Raw Water</strong><small>Hardness: Ca²⁺, Mg²⁺</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>02</span><strong>Pretreatment Filter</strong><small>Optional · as required</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={`${local.processNode} ${local.processNodeActive}`}><span>03</span><strong>Cation Bed</strong><small>Strong Acid Cation Resin</small></div>
      <div className={local.processArrow} aria-hidden="true"><ArrowRight size={22} /></div>
      <div className={local.processNode}><span>04</span><strong>Treated Water Tank</strong><small>Softened / demineralised*</small></div>
    </div>
    <div className={local.processFoot}><span><b>Softened water</b> is the usual sodium-cycle outcome.</span><span><b>Demineralised water</b> requires the hydrogen-cycle bed to be part of a complete treatment train.</span></div>
  </div>;
}

export default function CationBedContent() {
  return <div className={styles.page}>
    <Header />
    <main>
      <section className={styles.hero}><div className={styles.heroGlow} aria-hidden="true" /><div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span><ChevronRight size={14} aria-hidden="true" /><strong>Cation Bed</strong></nav>
<div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>AQUEN SOLUTION SYSTEM · ION EXCHANGE</span><h1>Cation <em>Bed</em></h1><h2>Water Softening / Demineralisation System</h2><p>AQUEN cation beds use strong acid cation resin to exchange selected cations in feed water. In sodium-cycle operation, calcium and magnesium are exchanged for sodium to reduce hardness. In hydrogen-cycle operation, cation exchange is one stage of a demineralisation train.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="#quote">Request a Quote <ArrowRight size={17} /></Link><Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link><a className={styles.downloadButton} href="/cation-bed-water-treatment-brochure.pdf" download="Aquen-Cation-Bed-Water-Treatment-Brochure.pdf" aria-label="Download the Aquen Cation Bed Water Treatment brochure PDF">Download Brochure <Download size={16} /></a></div><div className={styles.heroMetrics}><div><strong>100–10,000 LPH</strong><span>brochure capacity range</span></div><div><strong>SAC resin</strong><span>H⁺ or Na⁺ form</span></div><div><strong>FRP / MSEP / MSRL</strong><span>vessel options</span></div></div><p className={styles.heroNote}>Removal of Cations for High Purity Water · Design · Manufacturing · Supply · Installation · Commissioning · AMC</p></div><div className={styles.heroVisual}><div className={styles.heroVisualFrame}><Image src="/cation-msep-5000-lph.png" alt="AQUEN cation bed MSEP vessel reference photograph" fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div><div className={styles.heroBadge}><BadgeCheck size={16} /><span>Cation vessel reference</span></div><div className={styles.heroCaption}><span>Configuration</span><strong>FRP / MSEP / MSRL</strong><span>Operating mode</span><strong>Confirm H⁺ or Na⁺</strong></div></div></div>
      </div></section>

      <section className={styles.section}><div className={styles.container}><SectionHeading eyebrow="01 · Cation bed overview" title="One resin. Two operating modes. A different treatment duty.">The brochure describes strong acid cation resin in H⁺ or Na⁺ form. The selected operating mode must be confirmed before the page is treated as a softener or as part of a demineralisation train.</SectionHeading><div className={local.modeGrid}><article className={local.modeCard}><div className={local.modeIcon}><Droplets size={21} /></div><span>SODIUM-CYCLE SOFTENING</span><h3>Reduce calcium and magnesium hardness</h3><p>Calcium and magnesium ions are exchanged for sodium ions. Hardness is reduced, but total dissolved salts are not necessarily reduced. Regeneration normally uses brine in a conventional softener.</p><strong>Typical outcome: softened water</strong></article><article className={local.modeCard}><div className={local.modeIcon}><FlaskConical size={21} /></div><span>HYDROGEN-CYCLE CATION EXCHANGE</span><h3>Prepare cation-exchanged water for a demineralisation train</h3><p>Cations are exchanged for hydrogen ions. The outlet can be acidic and a downstream anion exchanger and other treatment stages may be required to produce demineralised water.</p><strong>Typical outcome: one stage of a treatment train</strong></article></div><div className={styles.cautionNote}><CircleAlert size={19} /><div><strong>Configuration must be confirmed</strong><span>Do not combine sodium-cycle softening and hydrogen-cycle cation exchange into one performance claim. Resin form, feed chemistry, operating cycle and downstream process determine the actual duty.</span></div></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="configurations"><div className={styles.container}><SectionHeading eyebrow="02 · Product configurations" title="Choose the vessel around the water duty">The brochure presents three cation-bed vessel configurations. Dimensions, pressure ratings, prices and certifications are not inferred here.</SectionHeading><div className={local.productGrid}><article className={local.productCard}><div className={local.productImage}><Image src="/cation-frp-vessel-5000-lph.png" alt="FRP cation bed vessel reference" fill sizes="(max-width: 620px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div><div className={local.productBody}><span>01 · FRP CATION BED</span><h3>Fibreglass Reinforced Plastic</h3><strong>100 LPH–5,000 LPH</strong><p>Multipot valve (MPV) configuration shown in the brochure.</p><small>Confirm current availability, duty and operating limits.</small></div></article><article className={local.productCard}><div className={local.productImage}><Image src="/cation-msep-5000-lph.png" alt="MSEP cation bed vessel reference" fill sizes="(max-width: 620px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div><div className={local.productBody}><span>02 · MSEP CATION BED</span><h3>Mild Steel with Epoxy Lining</h3><strong>1,000 LPH–10,000 LPH</strong><p>MSEP vessel construction shown in the brochure.</p><small>Confirm lining, resin form and control arrangement.</small></div></article><article className={local.productCard}><div className={local.productPlaceholder}><Layers3 size={32} /><span>MSRL product photograph to confirm</span></div><div className={local.productBody}><span>03 · MSRL CATION BED</span><h3>Mild Steel with FRP / Rubber Lining</h3><strong>500 LPH–10,000 LPH</strong><p>MS with FRP lining / rubber lining as listed in the brochure.</p><small>No verified MSRL cation image was found in the current asset set.</small></div></article></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="process-flow"><div className={styles.container}><SectionHeading eyebrow="03 · Process flow" title="Raw water → cation bed → the intended treated-water duty">The brochure groups softened and demineralised water together. The diagram keeps that language visible while distinguishing the sodium-cycle and hydrogen-cycle outcomes.</SectionHeading><ProcessDiagram /><p className={styles.darkNote}>* A sodium-cycle cation bed can produce softened water. Hydrogen-cycle cation exchange is normally followed by anion exchange and any other required treatment stages before demineralised water is claimed.</p></div></section>

      <section className={styles.section} id="working-principle"><div className={styles.container}><SectionHeading eyebrow="04 · Working principle" title="Exchange selected cations, then regenerate the resin">Raw water enters the vessel, passes through the strong acid cation resin and exits for the intended application. When the resin reaches its operating capacity, it requires regeneration according to the selected configuration.</SectionHeading><div className={local.stepGrid}><article><span>01</span><Droplets size={20} /><h3>Feed and pretreatment</h3><p>Raw water enters the system. A pretreatment filter may be included where the feed analysis requires protection of the resin bed.</p></article><article><span>02</span><RefreshCw size={20} /><h3>Ion exchange</h3><p>The resin exchanges selected cations according to its operating form: Na⁺ for softening or H⁺ as part of hydrogen-cycle cation exchange.</p></article><article><span>03</span><Gauge size={20} /><h3>Treated-water outlet</h3><p>Water exits as softened water or as a cation-exchanged stream for downstream demineralisation stages, subject to the approved design.</p></article><article><span>04</span><FlaskConical size={20} /><h3>Regeneration</h3><p>The selected resin and operating mode determine the regenerant, rinse sequence and return-to-service procedure.</p></article></div></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="features"><div className={styles.container}><SectionHeading eyebrow="05 · Key features" title="Designed around the exchange capacity and water quality">The following brochure-listed features are subject to resin selection, operating form, feed chemistry, regeneration arrangement and final engineering review.</SectionHeading><div className={styles.featureGrid}>{features.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><div className={styles.featureIcon}><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.section} id="technical-specifications"><div className={styles.container}><SectionHeading eyebrow="06 · Catalogue data" title="TECHNICAL SPECIFICATIONS — CATION BED (100 LPH TO 10,000 LPH)">The table below preserves the working brochure transcription. The brochure note states that specifications are indicative and can be customized as per water quality and operating requirements.</SectionHeading><div className={styles.sourceBanner}><CircleAlert size={19} /><div><strong>Working transcription — engineering verification required</strong><span>Confirm model names, the 250 / 400 LPH entries, dimensions, shell heights, resin quantities, service and backwash flows, connection sizes and the meaning and units of the Operating Bed Volume column against the original high-resolution brochure or AQUEN data sheet.</span></div></div><DataTable label="Technical specifications for cation bed" headers={["Model", "Flow rate (LPH)", "Vessel type", "Vessel dia. (mm)", "Shell height (mm)", "Resin quantity (L)", "Service flow rate (m³/hr)", "Backwash flow rate (m³/hr)", "Inlet / outlet size (NB)", "Operating bed volume (m³)"]} rows={technicalRows} /><p className={styles.tableFootnote}>Do not silently correct or recalculate unclear brochure values. This table is indicative and is not a verified engineering data sheet or performance guarantee.</p></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="quality-data"><div className={styles.container}><SectionHeading eyebrow="07 · Water quality" title="TYPICAL INLET & OUTLET PARAMETERS">These values are preserved as brochure-provided typical values. The outlet description must be confirmed as sodium-cycle softening, hydrogen-cycle cation exchange or a mixture of configurations.</SectionHeading><DataTable label="Typical cation bed inlet and outlet parameters" headers={["Parameter", "Unit", "Typical inlet", "Typical outlet (after cation bed)"]} rows={qualityRows} compact /><div className={styles.inlineWarning}><CircleAlert size={18} /><span>In sodium-cycle softening, calcium and magnesium are replaced by sodium and total dissolved salts are not necessarily reduced. Hydrogen-cycle operation can lower pH and create acidic effluent. A cation exchanger alone does not necessarily remove iron, manganese or turbidity reliably. Confirm all figures against AQUEN test data before presenting them as guaranteed.</span></div></div></section>

      <section className={styles.section} id="operating-parameters"><div className={styles.container}><SectionHeading eyebrow="08 · Operating data" title="OPERATING PARAMETERS">The following values are listed in the brochure and remain pending confirmation for each vessel, resin form and operating configuration.</SectionHeading><div className={local.operatingGrid}><DataTable label="Cation bed operating parameters" headers={["Parameter", "Value"]} rows={operatingRows} compact /><div className={local.operatingNote}><CircleAlert size={19} /><div><strong>Regenerant qualification</strong><p>The listed HCl and H₂SO₄ values must not be applied automatically to sodium-cycle softeners, which normally use brine. Confirm chemical, concentration, pressure, temperature, freeboard, timing and operating-bed-volume conditions with AQUEN.</p></div></div></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`} id="regeneration"><div className={styles.container}><SectionHeading eyebrow="09 · Regeneration sequence" title="Restore resin capacity under the approved procedure">The brochure lists the following regeneration timings. They are displayed as brochure-listed values pending engineering confirmation, not as an operating manual.</SectionHeading><div className={local.regenerationGrid}><article><span>01</span><FlaskConical size={20} /><h3>Regeneration chemical</h3><strong>HCl (5–10%) or H₂SO₄ (3–5%)</strong><p>Use only for the confirmed hydrogen-cycle configuration and approved chemical compatibility.</p></article><article><span>02</span><RefreshCw size={20} /><h3>Regeneration time</h3><strong>60–90 minutes</strong><p>Timing is subject to the selected resin, vessel and approved sequence.</p></article><article><span>03</span><Wrench size={20} /><h3>Rinsing</h3><strong>Slow rinse: 30 minutes · Fast rinse: 30 minutes</strong><p>Do not infer flow settings, valve positions or chemical dosage from these times.</p></article></div><div className={local.darkWarning}><CircleAlert size={19} /><span>The correct procedure depends on sodium-cycle or hydrogen-cycle operation. AQUEN should provide the approved regeneration manual before publication or operation.</span></div></div></section>

      <section className={styles.section} id="bom-moc"><div className={styles.container}><SectionHeading eyebrow="10 · Construction & supply" title="TYPICAL BILL OF MATERIAL (BOM) and MATERIAL OF CONSTRUCTION (MOC)">The brochure distinguishes standard and optional components where readable. Quantities and material selections remain subject to configuration and engineering confirmation.</SectionHeading><div className={styles.twoTableGrid}><div><h3 className={styles.tableTitle}>TYPICAL BILL OF MATERIAL (BOM)</h3><DataTable label="Typical cation bed bill of material" headers={["No.", "Description", "Quantity", "MOC / specification"]} rows={bomRows} compact /></div><div><h3 className={styles.tableTitle}>MATERIAL OF CONSTRUCTION (MOC)</h3><DataTable label="Cation bed material of construction" headers={["Item", "Material"]} rows={mocRows} compact /></div></div><p className={styles.tableFootnote}>Confirm chemical-dosing equipment, resin compatibility, vessel lining, optional controls and all BOM quantities against the selected operating mode. Acid dosing is not implied for every cation bed.</p></div></section>

      <section className={`${styles.section} ${styles.lightSection}`} id="applications"><div className={styles.container}><SectionHeading eyebrow="11 · Applications & industries" title="Where cation exchange may fit">The brochure lists the following industries. Every application may require additional treatment stages, verified water-quality targets and compatible resin and regenerant selection.</SectionHeading><div className={local.applicationSection}><div className={local.applicationLead}><span className={styles.miniEyebrow}>Application map</span><h3>Match the resin to the duty</h3><p>Boiler-feed, pharmaceutical and laboratory applications should not be treated as complete water-quality claims from a cation bed alone.</p></div><div className={local.applicationGrid}>{applications.map(({ icon: Icon, title, image, note }) => <article className={local.applicationCard} key={title}><div className={local.applicationImage}><Image src={image} alt={`${title} application reference`} fill sizes="(max-width: 620px) 50vw, 180px" /><span aria-hidden="true"><Icon size={17} /></span></div><strong>{title}</strong><small>{note}</small></article>)}</div></div></div></section>

      <section className={styles.faqSection} id="faq"><div className={styles.container}><SectionHeading eyebrow="12 · Frequently asked questions" title="Cation bed questions, answered clearly" /><div className={styles.faqList}>{faqs.map(([question, answer]) => <details className={styles.faqItem} key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className={`${styles.section} ${local.quoteSection}`} id="quote"><div className={styles.container}><div className={local.quoteGrid}><div><span className={styles.eyebrow}>13 · Design, manufacturing, supply, installation, commissioning & AMC</span><h2>Let&apos;s select the right cation-bed configuration.</h2><p>Share your required flow, vessel preference, operating mode and feed-water analysis. AQUEN can confirm whether the duty is sodium-cycle softening, hydrogen-cycle cation exchange or part of a larger treatment train.</p><div className={styles.ctaChecklist}><span><Check size={16} />Required flow rate in LPH</span><span><Check size={16} />FRP, MSEP or MSRL preference</span><span><Check size={16} />Sodium-cycle, hydrogen-cycle or unsure</span><span><Check size={16} />Water analysis and treated-water target</span></div><div className={local.contactPanel}><span>Contact AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water &amp; Wastewater Treatment Solutions</p><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={14} /></a><a href="mailto:info@aquenfluid.com"><Mail size={14} /> info@aquenfluid.com</a><small>Office / factory: Charholi Budruk, Pimpri-Chinchwad, Maharashtra 412105, India.</small></div></div><div className={local.formCard}><span className={local.formEyebrow}>Request a quotation</span><h3>Share your cation-bed requirement</h3><p>Required fields use browser validation. The existing AQUEN enquiry workflow handles submission.</p><form action="https://wteinfra.com/api/submit-lead.php" method="POST"><input type="hidden" name="Contact Purpose" defaultValue="Cation Bed Enquiry" /><input type="hidden" name="Source Page" defaultValue="Cation Bed Solution Page" /><div className={local.formGrid}><label>Name *<input name="Name" type="text" autoComplete="name" required placeholder="Your full name" /></label><label>Company *<input name="Company" type="text" autoComplete="organization" required placeholder="Company / organization" /></label><label>Email *<input name="Email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone number *<input name="Mobile" type="tel" autoComplete="tel" required placeholder="+91 XXXXX XXXXX" /></label><label>City and state<input name="City and State" type="text" autoComplete="address-level2" placeholder="City, state" /></label><label>Required flow rate in LPH<input name="Capacity" type="text" placeholder="Example: 2,000 LPH" /></label><label>Required vessel type<select name="Vessel Type" defaultValue=""><option value="" disabled>Select vessel</option><option>FRP</option><option>MSEP</option><option>MSRL</option><option>Unsure</option></select></label><label>Application<input name="Application" type="text" placeholder="Boiler, pharma, food, utility, etc." /></label><label>Operating mode<select name="Operating Mode" defaultValue=""><option value="" disabled>Select operating mode</option><option>Sodium-cycle softening</option><option>Hydrogen-cycle cation exchange</option><option>Unsure</option></select></label><label>Feed-water analysis availability<input name="Feed-water analysis" type="text" placeholder="Available / not available / to follow" /></label><label className={local.fieldFull}>Required treated-water quality<input name="Treated-water quality" type="text" placeholder="Softened water / demineralisation train / target quality" /></label><label className={local.fieldFull}>Message<textarea name="Message" required placeholder="Tell us about hardness, flow, operating hours, downstream process or site requirements." /></label></div><div className={local.formSubmit}><button type="submit">Submit requirement <ArrowRight size={16} /></button><span>Submission uses the existing enquiry workflow. If unavailable, use <Link href="/contact#contact-form">Contact Us</Link>.</span></div></form></div></div></div></section>
    </main>
    <Footer />
  </div>;
}
