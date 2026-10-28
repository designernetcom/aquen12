import Link from "next/link";
import type { ReactNode } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Beaker,
  Building2,
  Check,
  CircleAlert,
  CircleCheck,
  Download,
  Factory,
  Filter,
  Gauge,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  Mail,
  MapPin,
  PanelsTopLeft,
  Phone,
  Pipette,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Truck,
  Users,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "./page.module.css";

type ModelRow = [string, string, string, string, string, string, string, string];
type QualityRow = [string, string, string];
type IconItem = { icon: LucideIcon; title: string; text: string };

const benefits: IconItem[] = [
  {
    icon: ShieldCheck,
    title: "Fluoride reduction",
    text: "Brochure positioning: treatment for feed water containing fluoride up to 10 mg/L, subject to water chemistry, design and operating conditions.",
  },
  {
    icon: Beaker,
    title: "High-grade activated alumina",
    text: "Activated alumina is stated as the principal treatment media for the fluoride-removal stage.",
  },
  {
    icon: Layers3,
    title: "Three vessel options",
    text: "FRP, MSEP and MSRL constructions are presented for different duty, capacity and site requirements.",
  },
  {
    icon: SlidersHorizontal,
    title: "Automatic or manual operation",
    text: "The brochure presents automatic and manual operating options; the final valve arrangement is configuration-dependent.",
  },
  {
    icon: RefreshCw,
    title: "Backwash arrangement",
    text: "Backwash equipment can include pump, piping and optional blower or air compressor where required by the design.",
  },
  {
    icon: PanelsTopLeft,
    title: "PLC-based controls",
    text: "PLC control with optional HMI is listed as an available control approach for suitable configurations.",
  },
  {
    icon: Factory,
    title: "Compact skid design",
    text: "The brochure describes compact, skid-mounted systems for simpler installation and project coordination.",
  },
  {
    icon: Waves,
    title: "Groundwater applications",
    text: "Suitable borewell, groundwater and industrial applications require confirmation from the feed-water analysis.",
  },
  {
    icon: Gauge,
    title: "Brochure-stated economy",
    text: "Low operating cost and easy maintenance are brochure claims; actual cost and service needs depend on the approved design.",
  },
  {
    icon: Sparkles,
    title: "Custom engineering",
    text: "Custom capacity and configuration can be considered around the water analysis and client requirements.",
  },
];

const vesselOptions: { title: string; fullName: string; features: string[]; note: string }[] = [
  {
    title: "FRP",
    fullName: "Fibreglass Reinforced Plastic",
    features: [
      "Corrosion-resistant vessel construction",
      "Compact and lightweight format",
      "Suitable for small to medium capacities",
      "Easy installation",
      "Cost-effective brochure positioning",
    ],
    note: "Actual pressure, media loading and compatibility must be checked against the approved vessel design.",
  },
  {
    title: "MSEP",
    fullName: "Mild Steel Epoxy Painted",
    features: [
      "Mild steel epoxy-painted vessel",
      "Suitable for medium to large capacities",
      "High structural strength",
      "Epoxy internal coating for corrosion protection",
      "Custom design for site requirements",
    ],
    note: "Coating system, operating limits and duty suitability require project-specific confirmation.",
  },
  {
    title: "MSRL",
    fullName: "Mild Steel Rubber Lined",
    features: [
      "Mild steel rubber-lined vessel",
      "Rubber lining for corrosion resistance",
      "Intended for industrial applications",
      "Presented for aggressive-water duties, subject to compatibility",
      "Long service life as stated in the brochure",
    ],
    note: "Lining material, water chemistry, pressure, temperature and inspection requirements must be verified.",
  },
];

const modelRows: ModelRow[] = [
  ["FRP/MSEP/MSRL-0.5", "0.5", "FRP / MSEP / MSRL", "350 × 1650", "50", "0.5", "1.0", "25"],
  ["FRP/MSEP/MSRL-1", "1", "FRP / MSEP / MSRL", "400 × 1800", "75", "1.0", "2.0", "25"],
  ["FRP/MSEP/MSRL-2", "2", "FRP / MSEP / MSRL", "500 × 2000", "125", "2.0", "4.0", "40"],
  ["FRP/MSEP/MSRL-3", "3", "FRP / MSEP / MSRL", "600 × 2000", "175", "3.0", "6.0", "50"],
  ["FRP/MSEP/MSRL-5", "5", "FRP / MSEP / MSRL", "750 × 2000", "300", "5.0", "10.0", "65"],
  ["FRP/MSEP/MSRL-10", "10", "MSEP / MSRL", "1000 × 2200", "550", "10.0", "20.0", "80"],
  ["FRP/MSEP/MSRL-15", "15", "MSEP / MSRL", "1200 × 2200", "800", "15.0", "30.0", "100"],
  ["FRP/MSEP/MSRL-20", "20", "MSEP / MSRL", "1400 × 2400", "1100", "20.0", "40.0", "100"],
  ["FRP/MSEP/MSRL-30", "30", "MSEP / MSRL", "1600 × 2400", "1500", "30.0", "60.0", "150"],
  ["FRP/MSEP/MSRL-50", "50", "MSEP / MSRL", "2000 × 2500", "2300", "50.0", "100.0", "200"],
];

const qualityRows: QualityRow[] = [
  ["Fluoride (F⁻)", "1.0–10.0 mg/L", "< 1.0 mg/L"],
  ["pH", "6.5–8.5", "6.5–8.5"],
  ["TDS", "Up to 2000 mg/L", "No change"],
  ["Total hardness", "Up to 600 mg/L", "No change"],
  ["Turbidity", "Up to 5 NTU", "< 1 NTU"],
  ["Iron (Fe)", "0.1–2.0 mg/L", "< 0.3 mg/L"],
  ["Manganese (Mn)", "0.1–1.0 mg/L", "< 0.1 mg/L"],
];

const optionalEquipment: IconItem[] = [
  { icon: Truck, title: "Raw water pump set", text: "Optional feed-water pumping sized around the approved process duty." },
  { icon: Filter, title: "Pressure sand filter", text: "Optional pretreatment for turbidity reduction where the water analysis requires it." },
  { icon: Sparkles, title: "Activated carbon filter", text: "Optional organic or chlorine-related pretreatment where compatible with the treatment train." },
  { icon: Wind, title: "Air blower / compressor", text: "Optional aeration or process equipment; applicability must be confirmed for the selected configuration." },
  { icon: SlidersHorizontal, title: "Automatic control valve", text: "Multiport or pneumatic control options are configuration-dependent." },
  { icon: Pipette, title: "Chemical dosing system", text: "Included only when required by the water analysis and approved process design." },
  { icon: Activity, title: "Online fluoride analyzer", text: "Optional monitoring equipment; the exact brochure wording and intended function require confirmation." },
  { icon: Waves, title: "Treated-water storage tank", text: "Optional storage for the treated-water distribution or usage arrangement." },
];

const flowSteps: { title: string; detail: string; optional?: boolean }[] = [
  { title: "Raw water", detail: "High fluoride feed" },
  { title: "Raw water pump", detail: "Feed transfer" },
  { title: "Pressure sand filter", detail: "Turbidity pretreatment", optional: true },
  { title: "Activated carbon filter", detail: "Organic pretreatment", optional: true },
  { title: "Fluoride removal filter 1", detail: "Service" },
  { title: "Fluoride removal filter 2", detail: "Standby arrangement shown in brochure" },
  { title: "Treated water", detail: "Typical fluoride < 1.0 mg/L" },
  { title: "Storage / usage", detail: "Downstream application" },
];

const applications: IconItem[] = [
  { icon: Building2, title: "Residential societies & apartments", text: "Community water systems requiring a fluoride-treatment stage selected around the source analysis." },
  { icon: Users, title: "Rural & community water supply", text: "Suitable for planned community schemes where the treatment train and water quality are confirmed." },
  { icon: GraduationCap, title: "Schools & educational institutions", text: "For institutional water systems designed around tested groundwater and required treated quality." },
  { icon: HeartPulse, title: "Hospitals", text: "Application suitability depends on the full treatment train and site-specific water standards." },
  { icon: Landmark, title: "Hotels & resorts", text: "Potential use for selected service-water and drinking-water treatment arrangements." },
  { icon: Factory, title: "Industries", text: "Industrial use depends on process requirements, feed-water chemistry and approved design." },
  { icon: MapPin, title: "Villages & government schemes", text: "Can be considered for public water schemes subject to project verification and procurement requirements." },
];

const projectReferences = [
  ["Fazilka, Punjab", "Site in progress", "MSRL Fluoride Removal Plant — 20 m³/hr"],
  ["Bathinda, Punjab", "Site completed", "FRP Fluoride Removal Plant — 10 m³/hr"],
  ["Bikaner, Rajasthan", "Site in progress", "MSEP Fluoride Removal Plant — 30 m³/hr"],
  ["Jodhpur, Rajasthan", "Site completed", "FRP Fluoride Removal Plant — 15 m³/hr"],
  ["Ajmer, Rajasthan", "Site completed", "MSRL Fluoride Removal Plant — 40 m³/hr"],
  ["Gaya, Bihar", "Site in progress", "MSEP Fluoride Removal Plant — 25 m³/hr"],
  ["Muzaffarpur, Bihar", "Site completed", "FRP Fluoride Removal Plant — 25 m³/hr"],
  ["Patna, Bihar", "Site completed", "FRP Fluoride Removal Plant — 10 m³/hr"],
] as const;

const faqItems = [
  ["What is a Fluoride Removal Plant?", "It is a treatment system designed to reduce fluoride in suitable groundwater or other feed water. This brochure describes activated alumina as the principal treatment media; final suitability depends on the water analysis and approved design."],
  ["How does activated alumina remove fluoride?", "Activated alumina provides a surface that can adsorb fluoride under suitable water chemistry and operating conditions. Media selection, pH, contact conditions and loading must be confirmed by the technical team."],
  ["What fluoride concentration can the system treat?", "The supplied brochure presents feed fluoride up to 10 mg/L and a typical outlet below 1.0 mg/L. These are brochure values, not universal guarantees; actual performance requires a confirmed design."],
  ["What is the difference between FRP, MSEP and MSRL vessels?", "FRP is fibreglass reinforced plastic, MSEP is mild steel epoxy painted, and MSRL is mild steel rubber lined. The right construction depends on duty, water chemistry, capacity and site conditions."],
  ["What standard capacities are available?", "The brochure transcription lists 0.5, 1, 2, 3, 5, 10, 15, 20, 30 and 50 m³/hr models. Exact model naming and vessel availability must be verified with AQUEN before quotation."],
  ["What pretreatment may be required?", "Pressure sand filtration, activated carbon, aeration, chemical dosing or other stages may be considered depending on turbidity, organics, iron, manganese and other interfering substances in the feed water."],
  ["What is the purpose of backwashing?", "Backwashing helps flush accumulated solids and restore hydraulic conditions where it forms part of the approved vessel and valve arrangement. Duration and frequency are configuration-specific and are not assumed here."],
  ["What maintenance does the system require?", "Maintenance depends on the vessel, media, controls, pretreatment and water quality. Media life, replacement intervals and maintenance schedules should be provided with the approved product documentation."],
  ["How can I select the appropriate model?", "Share the required flow, operating hours, fluoride concentration, complete water analysis, desired treated quality and site constraints. AQUEN can then confirm the model and treatment train."],
  ["How can I request a quotation from AQUEN?", "Use the Request a Quote or Contact Us buttons and include the water analysis, approximate flow, application, city and any existing treatment details so the technical team can respond accurately."],
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function FluorideRemovalPlantContent() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">-&gt;</span><span>Solutions</span><span aria-hidden="true">-&gt;</span><strong>Fluoride Removal Plant</strong>
            </nav>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.heroEyebrow}>AQUEN SOLUTION SYSTEM / FLUORIDE CONTROL</span>
                <h1>Fluoride Removal <em>Plant</em></h1>
                <h2>Reliable Solution for Safe &amp; Healthy Drinking Water</h2>
                <p>
                  A focused treatment stage for suitable groundwater and other feed-water applications, using activated alumina as the principal media stated in the brochure. The correct configuration starts with the water analysis.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryButton}>Request a Quote <ArrowRight size={17} /></Link>
                  <a href="#contact" className={styles.textButton}>Contact Us <ArrowRight size={16} /></a>
                  <a href="/fluoride-removal-plant-brochure.pdf" className={styles.downloadButton} download="Aquen-Fluoride-Removal-Plant-Brochure.pdf" aria-label="Download the Aquen Fluoride Removal Plant brochure PDF">Download Brochure <Download size={16} /></a>
                </div>
                <div className={styles.heroMetrics}>
                  <div><strong>Up to 10 mg/L*</strong><span>brochure feed claim</span></div>
                  <div><strong>Activated alumina</strong><span>principal media</span></div>
                  <div><strong>FRP / MSEP / MSRL</strong><span>vessel options</span></div>
                </div>
                <p className={styles.heroFootnote}>*Brochure claim, not a universal guarantee. Actual results require feed-water analysis and design confirmation.</p>
              </div>
              <div className={styles.heroVisual} role="img" aria-label="Illustrated Fluoride Removal Plant process reference with service and standby filters">
                <div className={styles.heroVisualTop}><span>AQUEN / MEDIA TREATMENT</span><span>REFERENCE DIAGRAM</span></div>
                <div className={styles.heroVisualGrid} aria-hidden="true" />
                <div className={styles.heroDiagram}>
                  <div className={styles.heroFlowLabel}><span>RAW WATER</span><small>high fluoride feed</small><ArrowRight size={17} /></div>
                  <div className={styles.heroFilters}>
                    <div className={styles.heroFilterCard}>
                      <div className={styles.heroFilterHead}><span>01</span><b>IN SERVICE</b></div>
                      <div className={styles.heroFilterBody}><span className={styles.heroFilterIcon}><Filter size={23} /></span><strong>Fluoride filter</strong><small>Activated alumina</small></div>
                    </div>
                    <div className={styles.heroFilterCard}>
                      <div className={styles.heroFilterHead}><span>02</span><b>STANDBY</b></div>
                      <div className={styles.heroFilterBody}><span className={styles.heroFilterIcon}><Filter size={23} /></span><strong>Fluoride filter</strong><small>Configuration dependent</small></div>
                    </div>
                  </div>
                  <div className={styles.heroFlowLabel}><span>TREATED WATER</span><small>typical brochure flow</small><CircleCheck size={17} /></div>
                </div>
                <div className={styles.heroVisualBottom}>
                  <div><span>MEDIA</span><strong>Activated alumina</strong></div>
                  <div><span>VESSELS</span><strong>FRP / MSEP / MSRL</strong></div>
                  <div className={styles.heroPhotoNote}><CircleAlert size={14} /><span>Verified plant photo pending</span></div>
                </div>
              </div>
            </div>
            <div className={styles.brandStrip} aria-label="AQUEN service capabilities">
              {['Safe Water', 'Low Fluoride', 'Healthy Life', 'Design / Supply / Installation / AMC'].map((label) => <span key={label}>{label}</span>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="overview">
          <div className={styles.container}>
            <SectionHeading eyebrow="01 / Product overview" title="A focused treatment stage for excessive fluoride">
              Fluoride Removal Plants can reduce excessive fluoride in groundwater or other suitable feed water when the complete treatment train is designed around the actual water analysis and required treated-water quality.
            </SectionHeading>
            <div className={styles.overviewGrid}>
              <article className={styles.overviewCard}>
                <span className={styles.iconBox}><Beaker size={23} /></span>
                <h3>Activated alumina media</h3>
                <p>High-grade activated alumina is stated as the principal media. Its performance depends on water chemistry, media condition, contact conditions and the approved operating design.</p>
              </article>
              <article className={styles.overviewCard}>
                <span className={styles.iconBox}><RefreshCw size={23} /></span>
                <h3>Service and backwash</h3>
                <p>The brochure shows service operation with a backwash arrangement. Exact valve sequence, equipment and operating duration are configuration-dependent.</p>
              </article>
              <article className={styles.overviewCard}>
                <span className={styles.iconBox}><CircleCheck size={23} /></span>
                <h3>Analysis-led selection</h3>
                <p>Capacity, vessel construction, pretreatment and outlet expectations should be confirmed from the fluoride concentration and complete feed-water report.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section} id="benefits">
          <div className={styles.container}>
            <SectionHeading eyebrow="02 / Key product benefits" title="Designed around the water, not a generic promise">
              The points below preserve brochure-supported positioning while making the project-specific limits clear.
            </SectionHeading>
            <div className={styles.benefitGrid}>
              {benefits.map(({ icon: BenefitIcon, title, text }) => (
                <article className={styles.benefitCard} key={title}>
                  <span className={styles.iconBox}><BenefitIcon size={21} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`} id="vessel-options">
          <div className={styles.container}>
            <SectionHeading eyebrow="03 / Vessel construction" title="Choose the vessel around the duty">
              FRP, MSEP and MSRL options are shown in the supplied brochure. Material suitability, pressure limits and final availability require confirmation against the project design.
            </SectionHeading>
            <div className={styles.vesselGrid}>
              {vesselOptions.map((vessel, index) => (
                <article className={styles.vesselCard} key={vessel.title}>
                  <div className={styles.vesselTop}><span>0{index + 1}</span><span className={styles.vesselStatus}>Brochure reference</span></div>
                  <h3>{vessel.title}</h3>
                  <p className={styles.vesselFullName}>{vessel.fullName}</p>
                  <ul>{vessel.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
                  <p className={styles.vesselNote}>{vessel.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="technical-specifications">
          <div className={styles.container}>
            <SectionHeading eyebrow="04 / Standard models" title="Technical specifications and standard capacities">
              Values below are transcribed from the supplied Fluoride Removal Plant brochure. Model labels combine vessel types with capacity in the source and must be verified with AQUEN before publication or quotation.
            </SectionHeading>
            <div className={styles.sourceBanner}><CircleAlert size={19} /><div><strong>Source verification required</strong><span>Confirm exact official model naming, vessel availability and the manufacturer document before treating this table as a final engineering schedule.</span></div></div>
            <div className={styles.tableCard}>
              <div className={styles.cardTitle}>Brochure model data</div>
              <div className={styles.tableWrap}>
                <table>
                  <caption className={styles.srOnly}>Fluoride Removal Plant standard model specifications transcribed from the supplied brochure</caption>
                  <thead><tr><th>Model</th><th>Capacity (m³/hr)</th><th>Vessel type</th><th>Vessel size (mm)</th><th>Activated alumina (kg/vessel)</th><th>Service flow (m³/hr)</th><th>Backwash flow (m³/hr)</th><th>Pipe size (NB)</th></tr></thead>
                  <tbody>{modelRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            </div>
            <p className={styles.tableNote}>Standard models and custom capacities are shown in the brochure. No pressure rating, electrical load, pump head, media life or replacement interval is assumed here.</p>
          </div>
        </section>

        <section className={styles.section} id="water-quality">
          <div className={styles.container}>
            <SectionHeading eyebrow="05 / Typical water quality" title="INLET &amp; OUTLET WATER QUALITY (TYPICAL)">
              These are typical brochure values, not guaranteed results or an independent drinking-water compliance statement. Final water suitability must be verified through appropriate testing against applicable standards.
            </SectionHeading>
            <div className={styles.qualityGrid}>
              <div className={styles.qualityIntro}><span className={styles.iconBox}><Gauge size={23} /></span><h3>What the table means</h3><p>The stated outlet values depend on the feed-water conditions, interfering substances, media condition, flow and treatment design. “No change” for TDS and total hardness requires technical clarification from the manufacturer.</p><div className={styles.qualityFlags}><span><CircleAlert size={14} /> Typical source values</span><span><CircleAlert size={14} /> Verification required</span></div></div>
              <div className={styles.tableCard}>
                <div className={styles.cardTitle}>Typical brochure values</div>
                <div className={styles.tableWrap}>
                  <table>
                    <caption className={styles.srOnly}>Typical inlet and outlet water quality values</caption>
                    <thead><tr><th>Parameter</th><th>Typical inlet (groundwater)</th><th>Typical outlet (after fluoride removal)</th></tr></thead>
                    <tbody>{qualityRows.map(([parameter, inlet, outlet]) => <tr key={parameter}><td>{parameter}</td><td>{inlet}</td><td>{outlet}</td></tr>)}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="optional-equipment">
          <div className={styles.container}>
            <SectionHeading eyebrow="06 / Optional equipment" title="Build the treatment train around the source">
              The brochure lists the following as optional or configuration-dependent. Not every item is mandatory for every Fluoride Removal Plant.
            </SectionHeading>
            <div className={styles.equipmentGrid}>
              {optionalEquipment.map(({ icon: EquipmentIcon, title, text }) => <article className={styles.equipmentCard} key={title}><span className={styles.iconBox}><EquipmentIcon size={20} /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.processSection}`} id="process-flow">
          <div className={styles.container}>
            <SectionHeading eyebrow="07 / Process flow" title="A clear path from raw water to treated water">
              This flow follows the sequence shown in the brochure. Optional pretreatment and the Filter 1 / Filter 2 arrangement must be confirmed for the selected system; it is not implied that every plant uses this exact layout.
            </SectionHeading>
            <div className={styles.flowBoard} aria-label="Fluoride Removal Plant process flow diagram">
              <div className={styles.flowTrack}>
                {flowSteps.map((step, index) => <div className={styles.flowGroup} key={step.title}><div className={`${styles.flowNode} ${step.optional ? styles.optionalNode : ""}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step.title}</strong><small>{step.detail}</small>{step.optional && <em>Optional</em>}</div>{index < flowSteps.length - 1 && <ArrowRight className={styles.flowArrow} size={22} aria-hidden="true" />}</div>)}
              </div>
              <div className={styles.flowNotes}><span><ArrowDown size={15} /> Backwash line from treated-water tank</span><span><Wind size={15} /> Blower / air compressor optional</span><span><CircleAlert size={15} /> Typical brochure arrangement</span></div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="applications">
          <div className={styles.container}>
            <SectionHeading eyebrow="08 / Applications" title="For communities, institutions and industry">
              These categories are listed in the brochure. Suitability, treated-water use and project status require application-specific review.
            </SectionHeading>
            <div className={styles.applicationGrid}>
              {applications.map(({ icon: ApplicationIcon, title, text }) => <article className={styles.applicationCard} key={title}><span className={styles.iconBox}><ApplicationIcon size={21} /></span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="projects">
          <div className={styles.container}>
            <SectionHeading eyebrow="09 / Project references" title="Brochure project references awaiting confirmation">
              The supplied brochure lists these locations and captions, but matched original photographs are not available in the current project assets. They are presented as brochure references, not independently verified AQUEN case studies.
            </SectionHeading>
            <div className={styles.projectGrid}>
              {projectReferences.map(([location, status, caption]) => <article className={styles.projectCard} key={location}><div className={styles.projectMedia}><MapPin size={24} /><span>Verified project photo required</span></div><div className={styles.projectBody}><div className={styles.projectMeta}><span>{status}</span><span>Brochure reference</span></div><h3>{location}</h3><p>{caption}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className={styles.section} id="faq">
          <div className={styles.container}>
            <SectionHeading eyebrow="10 / Frequently asked questions" title="Fluoride Removal Plant FAQs">
              General guidance is provided below. Model selection, outlet performance, media life, maintenance intervals and operating costs require a design based on the actual water analysis.
            </SectionHeading>
            <div className={styles.faqList}>
              {faqItems.map(([question, answer]) => <details className={styles.faqItem} key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection} id="contact">
          <div className={styles.container}>
            <div className={styles.ctaGrid}>
              <div>
                <span className={styles.eyebrow}>11 / Request a quotation</span>
                <h2>Let&apos;s confirm the right fluoride treatment train.</h2>
                <p>Use the existing AQUEN enquiry form or contact the team with your city, application, required capacity, feed-water fluoride concentration and complete water analysis if available. Do not rely on a brochure model alone for final selection.</p>
                <div className={styles.enquiryChecklist}><span><Check size={15} /> Required capacity in m³/hr</span><span><Check size={15} /> Feed-water fluoride concentration</span><span><Check size={15} /> Complete water analysis</span><span><Check size={15} /> Application and city / state</span></div>
              </div>
              <div className={styles.ctaCard}>
                <div><span>Company</span><strong>AQUEN Fluid Technologies LLP</strong></div>
                <div><span>Phone</span><a href="tel:+919622554445"><Phone size={14} /> +91 962255 4445</a></div>
                <div><span>Email</span><a href="mailto:info@aquenfluid.com?subject=Fluoride%20Removal%20Plant%20Enquiry"><Mail size={14} /> info@aquenfluid.com</a></div>
                <div><span>Office / factory</span><strong>Charholi Budruk, Pimpri-Chinchwad, Maharashtra - 412105</strong></div>
                <div className={styles.ctaActions}><Link href="/contact" className={styles.primaryButton}>Request a Quote <ArrowRight size={17} /></Link><a href="mailto:info@aquenfluid.com?subject=Fluoride%20Removal%20Plant%20Enquiry" className={styles.contactButton}>Email the team</a></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default FluorideRemovalPlantContent;
