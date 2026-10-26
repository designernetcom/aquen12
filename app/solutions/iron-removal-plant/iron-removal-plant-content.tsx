import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Activity,
  AirVent,
  ArrowDown,
  ArrowRight,
  Beaker,
  Building2,
  Check,
  CircleAlert,
  CircleCheck,
  Factory,
  Filter,
  Gauge,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  Mail,
  PanelsTopLeft,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Truck,
  Users,
  Waves,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "./page.module.css";

type ModelRow = [string, string, string, string, string, string, string, string, string, string];
type QualityRow = [string, string, string];
type IconItem = { icon: LucideIcon; title: string; text: string };

const features: IconItem[] = [
  { icon: ShieldCheck, title: "Iron removal", text: "Designed to reduce iron in suitable feed water through oxidation, filtration and media-based treatment." },
  { icon: Sparkles, title: "Manganese reduction", text: "Manganese treatment can be addressed where the selected media, pH and operating conditions are suitable." },
  { icon: Wind, title: "Hydrogen sulphide reduction", text: "The brochure presents H₂S reduction as part of the treatment scope, subject to configuration and feed-water characteristics." },
  { icon: Waves, title: "Better taste, colour and odour", text: "Reducing iron, manganese and H₂S may improve the appearance, taste and odour of compatible water streams." },
  { icon: SlidersHorizontal, title: "Automatic operation", text: "Automatic multiport, pneumatic or motorized valve options can be selected for the approved design." },
  { icon: Wrench, title: "Low maintenance", text: "The brochure positions the system as easy to maintain; actual service needs depend on media, water quality and equipment." },
];

const vesselOptions: { title: string; fullName: string; image?: string; imageAlt?: string; features: string[]; note: string }[] = [
  {
    title: "FRP",
    fullName: "Fibreglass Reinforced Plastic",
    image: "/irp-15000-lph-frp.png",
    imageAlt: "Supplied FRP Iron Removal Plant technical drawing reference",
    features: ["Corrosion-resistant vessels", "Compact and lightweight", "Suitable for small to medium capacities", "Easy installation", "Cost-effective solution"],
    note: "Pressure, temperature, media loading and final valve configuration require confirmation for the selected duty.",
  },
  {
    title: "MSEP",
    fullName: "Mild Steel Epoxy Painted",
    image: "/irp-15000-lph-msep.png",
    imageAlt: "Supplied MSEP Iron Removal Plant technical drawing reference",
    features: ["Epoxy-painted mild steel vessel", "Suitable for medium to large capacities", "High structural strength", "Epoxy internal coating for corrosion protection", "Custom site-based design"],
    note: "Coating system, operating limits and water-chemistry compatibility require project-specific confirmation.",
  },
  {
    title: "MSRL",
    fullName: "Mild Steel Rubber Lined",
    features: ["Rubber-lined mild steel vessel", "Suitable for high-iron or aggressive-water duties as described in the brochure", "Rubber lining for corrosion resistance", "Intended for industrial applications", "Long service life as claimed in the brochure"],
    note: "Lining material, pressure, temperature, water chemistry and inspection requirements must be verified before supply.",
  },
];

const modelRows: ModelRow[] = [
  ["IRP-0.5", "0.5", "FRP", "350 × 1650", "50", "0.1", "0.3", "0.5", "1.0", "25"],
  ["IRP-1", "1", "FRP / MSEP", "400 × 1800", "75", "0.1", "0.5", "1.0", "2.0", "25"],
  ["IRP-2", "2", "FRP / MSEP", "500 × 2000", "125", "0.2", "0.5", "2.0", "4.0", "40"],
  ["IRP-3", "3", "FRP / MSEP", "600 × 2000", "175", "0.3", "0.7", "3.0", "6.0", "50"],
  ["IRP-5", "5", "FRP / MSEP / MSRL", "750 × 2000", "300", "0.5", "1.0", "5.0", "10.0", "65"],
  ["IRP-10", "10", "MSEP / MSRL", "1000 × 2200", "550", "0.7", "1.5", "10.0", "20.0", "80"],
  ["IRP-15", "15", "MSEP / MSRL", "1200 × 2200", "800", "1.0", "2.0", "15.0", "30.0", "100"],
  ["IRP-20", "20", "MSEP / MSRL", "1400 × 2400", "1100", "1.5", "2.5", "20.0", "40.0", "100"],
  ["IRP-30", "30", "MSEP / MSRL", "1600 × 2400", "1500", "2.0", "3.5", "30.0", "60.0", "150"],
  ["IRP-50", "50", "MSEP / MSRL", "2000 × 2500", "2300", "3.0", "5.0", "50.0", "100.0", "200"],
];

const qualityRows: QualityRow[] = [
  ["Iron (Fe)", "0.5–10.0 mg/L", "< 0.3 mg/L"],
  ["Manganese (Mn)", "0.1–5.0 mg/L", "< 0.1 mg/L"],
  ["Hydrogen Sulphide (H₂S)", "0.1–2.0 mg/L", "< 0.06 mg/L"],
  ["pH", "6.5–8.5", "6.5–8.5"],
  ["Turbidity", "Up to 10 NTU", "< 1 NTU"],
];

const additionalFeatures: IconItem[] = [
  { icon: Wind, title: "Compressor and blower", text: "A complete aeration arrangement can include compressor and blower equipment where required by the process design." },
  { icon: Layers3, title: "Pressure-vessel options", text: "FRP, MSEP and MSRL pressure vessels are listed as available construction types." },
  { icon: Beaker, title: "Media choices", text: "Manganese Greensand, Birm and Catalytic Media are identified in the brochure." },
  { icon: SlidersHorizontal, title: "Valve automation", text: "Automatic multiport, pneumatic or motorized valve options are configuration-dependent." },
  { icon: PanelsTopLeft, title: "PLC control", text: "PLC-based control with optional HMI can be selected for suitable automated systems." },
  { icon: Activity, title: "Online monitoring", text: "Optional monitoring for iron, pH, flow and pressure is listed in the brochure." },
  { icon: Gauge, title: "Power-conscious design", text: "Low power consumption and high efficiency are brochure positioning, not universal guarantees." },
  { icon: Factory, title: "Borewell and surface water", text: "Suitability for borewell and surface water depends on the analysis and approved design." },
  { icon: Truck, title: "Skid-mounted format", text: "Compact skid mounting can simplify coordination, installation and commissioning." },
  { icon: Wrench, title: "Installation and AMC", text: "AQUEN services are presented around design, manufacturing, supply, installation and AMC." },
];

const processSteps: { title: string; detail: string; icon: LucideIcon; note?: string }[] = [
  { title: "Raw water tank", detail: "Water with iron", icon: Waves },
  { title: "Feed pump", detail: "Process transfer", icon: Truck },
  { title: "Air compressor", detail: "Compressed air", icon: Wind },
  { title: "Air receiver tank", detail: "Air storage", icon: Layers3 },
  { title: "Air blower", detail: "Aeration air", icon: Wind },
  { title: "Aeration tower", detail: "Oxidation support", icon: Activity },
  { title: "IRP-1 primary", detail: "Main iron-removal stage", icon: Filter },
  { title: "IRP-2 polishing", detail: "Polishing stage", icon: Sparkles },
  { title: "Treated water tank", detail: "Treated storage", icon: Waves },
  { title: "Application", detail: "Downstream use", icon: CircleCheck },
];

const applications: IconItem[] = [
  { icon: Building2, title: "Residential societies & apartments", text: "Community systems requiring iron control around a tested groundwater source." },
  { icon: Landmark, title: "Commercial buildings & IT parks", text: "Suitable utility-water treatment where the water analysis and downstream use are defined." },
  { icon: Factory, title: "Industries & factories", text: "Industrial applications depend on the process requirement, water chemistry and vessel selection." },
  { icon: Users, title: "Hotels & resorts", text: "Can support selected service-water duties subject to the complete treatment design." },
  { icon: HeartPulse, title: "Hospitals", text: "Requires appropriate treatment-train design and application-specific water-quality review." },
  { icon: GraduationCap, title: "Schools & institutions", text: "For institutional water systems designed around tested raw-water conditions." },
];

const ongoingProjects = [
  ["MSEP Iron Removal Plant", "10 m³/hr"],
  ["FRP Iron Removal Plant", "5 m³/hr"],
  ["MSRL Iron Removal Plant", "20 m³/hr"],
] as const;

const completedProjects = [
  ["Residential Society", "5 m³/hr"],
  ["Commercial Building", "10 m³/hr"],
  ["Industrial Unit", "30 m³/hr"],
  ["School", "2 m³/hr"],
] as const;

const faqItems = [
  ["What is an Iron Removal Plant?", "It is a treatment system designed to reduce iron in suitable feed water. Depending on the selected configuration and water chemistry, the system may also address manganese and hydrogen sulphide."],
  ["How does iron removal work?", "Iron can be oxidized and then removed through filtration and suitable media. The exact arrangement depends on the feed-water analysis, pH, media and required treated-water quality."],
  ["What are FRP, MSEP and MSRL vessels?", "FRP means Fibreglass Reinforced Plastic, MSEP means Mild Steel Epoxy Painted and MSRL means Mild Steel Rubber Lined. The correct construction depends on the application and design duty."],
  ["What standard capacities are available?", "The supplied brochure lists IRP models from 0.5 to 50 m³/hr. Exact model availability, vessel type and final configuration must be confirmed before quotation."],
  ["Which media options are available?", "The brochure identifies Manganese Greensand, Birm and Catalytic Media. Media selection requires a review of iron, manganese, H₂S, pH, turbidity and other feed-water conditions."],
  ["Why is aeration used in the treatment process?", "Aeration can support oxidation of dissolved contaminants before filtration. The brochure shows a compressor, receiver, blower and aeration tower in the documented process flow."],
  ["What is the purpose of primary and polishing stages?", "The brochure presents IRP-1 as the primary iron-removal stage and IRP-2 as the polishing stage. Actual staging should be confirmed for the selected plant."],
  ["What water-quality information is required for system selection?", "Share flow, operating hours, iron, manganese, H₂S, pH, turbidity, temperature, TDS and any other available water-analysis results, along with the intended use."],
  ["How can I request a quotation?", "Use Request a Quote or Contact Us and share the application, city, required capacity and water analysis availability. AQUEN can then confirm the suitable model and treatment train."],
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

function IronRemovalPlantContent() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">-&gt;</span><span>Solutions</span><span aria-hidden="true">-&gt;</span><strong>Iron Removal Plant</strong>
            </nav>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.heroEyebrow}>AQUEN SOLUTION SYSTEM / IRON CONTROL</span>
                <h1>Iron Removal <em>Plant</em></h1>
                <h2>Efficient Solution for Iron, Manganese &amp; H₂S Removal</h2>
                <p>Designed for suitable groundwater and surface-water applications using aeration, filtration and selected iron-removal media. Final treatment performance depends on the feed-water characteristics and approved configuration.</p>
                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryButton}>Request a Quote <ArrowRight size={17} /></Link>
                  <a href="#contact" className={styles.textButton}>Contact Us <ArrowRight size={16} /></a>
                </div>
                <div className={styles.heroMetrics}>
                  <div><strong>0.5–50 m³/hr</strong><span>brochure model range</span></div>
                  <div><strong>Fe / Mn / H₂S</strong><span>treatment scope</span></div>
                  <div><strong>FRP / MSEP / MSRL</strong><span>vessel options</span></div>
                </div>
                <p className={styles.heroFootnote}>Model capacities and typical water-quality values are sourced from the supplied brochure and require technical confirmation before quotation.</p>
              </div>
              <div className={styles.heroVisual}>
                <Image src="/ironremoval.png" alt="AQUEN Iron Removal Plant vessel and aeration system reference" width={1400} height={1128} priority sizes="(max-width: 850px) 100vw, 52vw" />
                <div className={styles.heroVisualLabel}><span>IRON REMOVAL PLANT</span><strong>Fe · Mn · H₂S</strong></div>
                <div className={styles.heroVisualCaption}><CircleCheck size={14} /> Supplied product reference image</div>
              </div>
            </div>
            <div className={styles.brandStrip} aria-label="AQUEN services and product messages">
              {['Clean Water', 'Iron Free Water', 'Healthy Life', 'Design / Manufacturing / Supply / Installation / AMC'].map((label) => <span key={label}>{label}</span>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="overview">
          <div className={styles.container}>
            <SectionHeading eyebrow="01 / Product overview" title="Treat iron at the source with the right process train">
              An Iron Removal Plant can reduce iron and, where the selected configuration is suitable, also address manganese and hydrogen sulphide. The treatment train is selected around the water analysis, required flow and intended application.
            </SectionHeading>
            <div className={styles.overviewGrid}>
              <article className={styles.overviewCard}><span className={styles.iconBox}><Wind size={23} /></span><h3>Aeration-supported oxidation</h3><p>The brochure flow uses a compressor, air receiver, blower and aeration tower before the filtration stages.</p></article>
              <article className={styles.overviewCard}><span className={styles.iconBox}><Filter size={23} /></span><h3>Primary and polishing stages</h3><p>IRP-1 is shown as the primary iron-removal stage and IRP-2 as the polishing stage in the documented sequence.</p></article>
              <article className={styles.overviewCard}><span className={styles.iconBox}><Beaker size={23} /></span><h3>Media-led selection</h3><p>Manganese Greensand, Birm and Catalytic Media are brochure-listed options; the final media needs technical review.</p></article>
            </div>
          </div>
        </section>

        <section className={styles.section} id="features">
          <div className={styles.container}>
            <SectionHeading eyebrow="02 / Key product features" title="Cleaner water for homes, communities and industry">
              Brochure-supported features are presented with the limits that still need confirmation from the site water analysis and final design.
            </SectionHeading>
            <div className={styles.featureGrid}>
              {features.map(({ icon: FeatureIcon, title, text }) => <article className={styles.featureCard} key={title}><span className={styles.iconBox}><FeatureIcon size={21} /></span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`} id="vessel-options">
          <div className={styles.container}>
            <SectionHeading eyebrow="03 / Vessel construction" title="FRP, MSEP or MSRL — selected around the duty">
              Each construction has a different fit for the application. Pressure ratings, material limits and final availability are not assumed beyond the supplied brochure descriptions.
            </SectionHeading>
            <div className={styles.vesselGrid}>
              {vesselOptions.map((vessel, index) => <article className={styles.vesselCard} key={vessel.title}>
                <div className={styles.vesselImage}>{vessel.image ? <Image src={vessel.image} alt={vessel.imageAlt ?? vessel.title} fill sizes="(max-width: 850px) 100vw, 33vw" /> : <div className={styles.vesselPlaceholder}><Layers3 size={28} /><span>MSRL drawing reference required</span></div>}</div>
                <div className={styles.vesselBody}><div className={styles.vesselTop}><span>0{index + 1}</span><span>Brochure reference</span></div><h3>{vessel.title}</h3><p className={styles.vesselFullName}>{vessel.fullName}</p><ul>{vessel.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><p className={styles.vesselNote}>{vessel.note}</p></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="technical-specifications">
          <div className={styles.container}>
            <SectionHeading eyebrow="04 / Standard models" title="Iron Removal Plant technical specifications">
              The following values are transcribed from the supplied brochure. Compressor and blower capacities may vary with raw-water quality and system design; do not treat this table as a final engineering schedule without confirmation.
            </SectionHeading>
            <div className={styles.sourceBanner}><CircleAlert size={19} /><div><strong>Brochure data — technical confirmation required</strong><span>Preserve the values for comparison, then confirm model availability, media selection, valve arrangement and equipment sizing for the application.</span></div></div>
            <div className={styles.tableCard}><div className={styles.cardTitle}>IRP standard model data</div><div className={styles.tableWrap}><table><caption className={styles.srOnly}>Iron Removal Plant standard model specifications from the supplied brochure</caption><thead><tr><th>Model</th><th>Capacity (m³/hr)</th><th>Vessel type</th><th>Vessel size (mm)</th><th>Media quantity (kg/vessel)</th><th>Compressor (m³/min)</th><th>Blower (m³/min)</th><th>Service flow (m³/hr)</th><th>Backwash flow (m³/hr)</th><th>Pipe size (NB)</th></tr></thead><tbody>{modelRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody></table></div></div>
            <p className={styles.tableNote}>Media identified in the brochure: Manganese Greensand / Birm / Catalytic Media. Standard models and custom capacities are available subject to confirmation.</p>
          </div>
        </section>

        <section className={styles.section} id="water-quality">
          <div className={styles.container}>
            <SectionHeading eyebrow="05 / Typical water quality" title="Inlet &amp; Outlet Water Quality (Typical)">
              These are typical brochure values, not guaranteed outcomes for every installation. Exact test conditions, media selection and feed-water assumptions require technical confirmation.
            </SectionHeading>
            <div className={styles.qualityGrid}>
              <div className={styles.qualityIntro}><span className={styles.iconBox}><Gauge size={23} /></span><h3>Read the figures as design references</h3><p>The outlet values depend on pH, contaminant concentrations, turbidity, media condition, flow and the complete treatment arrangement. They do not establish drinking-water safety or compliance with every applicable standard.</p><div className={styles.qualityFlags}><span><CircleAlert size={14} /> Typical brochure values</span><span><CircleAlert size={14} /> Confirm test conditions</span></div></div>
              <div className={styles.tableCard}><div className={styles.cardTitle}>Typical brochure values</div><div className={styles.tableWrap}><table><caption className={styles.srOnly}>Typical inlet and outlet water quality for Iron Removal Plant</caption><thead><tr><th>Parameter</th><th>Typical inlet</th><th>Typical outlet</th></tr></thead><tbody>{qualityRows.map(([parameter, inlet, outlet]) => <tr key={parameter}><td>{parameter}</td><td>{inlet}</td><td>{outlet}</td></tr>)}</tbody></table></div></div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="additional-features">
          <div className={styles.container}>
            <SectionHeading eyebrow="06 / Additional features" title="Configure the plant around the source and site">
              Equipment and controls are optional or configuration-dependent unless the approved quotation says otherwise.
            </SectionHeading>
            <div className={styles.additionalGrid}>{additionalFeatures.map(({ icon: AdditionalIcon, title, text }) => <article className={styles.additionalCard} key={title}><span className={styles.iconBox}><AdditionalIcon size={20} /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.processSection}`} id="process-flow">
          <div className={styles.container}>
            <SectionHeading eyebrow="07 / Process flow" title="From raw water to treated application">
              This diagram follows the documented brochure sequence. It does not add chemical dosing, valve sequences or operating times that are not provided in the source.
            </SectionHeading>
            <div className={styles.flowBoard} aria-label="Iron Removal Plant process flow diagram">
              <div className={styles.flowTrack}>{processSteps.map(({ title, detail, icon: StepIcon }, index) => <div className={styles.flowGroup} key={title}><div className={styles.flowNode}><span>{String(index + 1).padStart(2, "0")}</span><StepIcon size={19} /><strong>{title}</strong><small>{detail}</small></div>{index < processSteps.length - 1 && <ArrowRight className={styles.flowArrow} size={22} aria-hidden="true" />}</div>)}</div>
              <div className={styles.flowNotes}><span><ArrowDown size={15} /> Compressor provides air for blower</span><span><AirVent size={15} /> Blower supports aeration</span><span><CircleAlert size={15} /> Arrangement subject to design confirmation</span></div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="applications">
          <div className={styles.container}>
            <SectionHeading eyebrow="08 / Applications" title="Iron control for homes, institutions and industry">
              These application categories are presented in the brochure. They do not imply a completed AQUEN installation unless independently verified.
            </SectionHeading>
            <div className={styles.applicationGrid}>{applications.map(({ icon: ApplicationIcon, title, text }) => <article className={styles.applicationCard} key={title}><span className={styles.iconBox}><ApplicationIcon size={21} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="projects">
          <div className={styles.container}>
            <SectionHeading eyebrow="09 / Project references" title="Ongoing and completed references">
              The brochure identifies the following installations and project categories. Matched original photographs are not available in the current asset set, so these are clearly marked for company verification rather than presented as confirmed case studies.
            </SectionHeading>
            <div className={styles.projectSections}>
              <div><h3 className={styles.projectSectionTitle}>Ongoing installations</h3><div className={styles.projectGrid}>{ongoingProjects.map(([title, capacity]) => <article className={styles.projectCard} key={title}><div className={styles.projectMedia}><Factory size={25} /><span>Matched brochure photo required</span></div><div className={styles.projectBody}><span className={styles.projectStatus}>Ongoing reference</span><h4>{title}</h4><p>{capacity}</p></div></article>)}</div></div>
              <div><h3 className={styles.projectSectionTitle}>Completed projects</h3><div className={styles.projectGrid}>{completedProjects.map(([title, capacity]) => <article className={styles.projectCard} key={title}><div className={styles.projectMedia}><Building2 size={25} /><span>Matched brochure photo required</span></div><div className={styles.projectBody}><span className={styles.projectStatus}>Completed reference</span><h4>{title}</h4><p>{capacity}</p></div></article>)}</div></div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="faq">
          <div className={styles.container}>
            <SectionHeading eyebrow="10 / Frequently asked questions" title="Iron Removal Plant FAQs">
              General guidance is provided below. Final model selection, media life, maintenance intervals and treatment guarantees require an application-specific review.
            </SectionHeading>
            <div className={styles.faqList}>{faqItems.map(([question, answer]) => <details className={styles.faqItem} key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className={styles.ctaSection} id="contact">
          <div className={styles.container}><div className={styles.ctaGrid}><div><span className={styles.eyebrow}>11 / Request a quotation</span><h2>Let&apos;s select the right iron-removal train.</h2><p>Use the existing AQUEN enquiry form or contact the team with your application, approximate flow, water-analysis availability and site location. The brochure model range is a starting point, not a substitute for engineering review.</p><div className={styles.enquiryChecklist}><span><Check size={15} /> Required capacity in m³/hr</span><span><Check size={15} /> Iron, manganese and H₂S values</span><span><Check size={15} /> pH and turbidity information</span><span><Check size={15} /> Application and city / state</span></div></div><div className={styles.ctaCard}><div><span>Company</span><strong>AQUEN Fluid Technologies LLP</strong></div><div><span>Phone</span><a href="tel:+919622554445"><Phone size={14} /> +91 962255 4445</a></div><div><span>Email</span><a href="mailto:info@aquenfluid.com?subject=Iron%20Removal%20Plant%20Enquiry"><Mail size={14} /> info@aquenfluid.com</a></div><div><span>Office / factory</span><strong>Charholi Budruk, Pimpri-Chinchwad, Maharashtra - 412105</strong></div><div className={styles.ctaActions}><Link href="/contact" className={styles.primaryButton}>Request a Quote <ArrowRight size={17} /></Link><a href="mailto:info@aquenfluid.com?subject=Iron%20Removal%20Plant%20Enquiry" className={styles.contactButton}>Email the team</a></div></div></div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default IronRemovalPlantContent;
