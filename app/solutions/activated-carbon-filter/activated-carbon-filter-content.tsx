"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type KeyboardEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  CircleCheck,
  Download,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Landmark,
  Leaf,
  ShieldCheck,
  Utensils,
  Wind,
  type LucideIcon,
} from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "./page.module.css";

type TableRow = string[];
type VesselKey = "frp" | "msep" | "msrl";

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Droplets,
    title: "Colour removal",
    text: "Activated carbon can reduce colour-causing compounds in suitable water streams.",
  },
  {
    icon: Wind,
    title: "Odour control",
    text: "Adsorption helps reduce unwanted odours associated with selected organic compounds.",
  },
  {
    icon: ShieldCheck,
    title: "Chlorine reduction",
    text: "Free chlorine may be reduced under suitable operating and contact-time conditions.",
  },
  {
    icon: FlaskConical,
    title: "Organic impurity reduction",
    text: "The carbon surface can adsorb selected organic impurities present in incoming water.",
  },
  {
    icon: Leaf,
    title: "Improved taste",
    text: "Water acceptability can improve when relevant taste- and odour-causing impurities are removed.",
  },
  {
    icon: Factory,
    title: "Industrial applications",
    text: "Suitable for industrial and commercial treatment systems selected around feed-water quality.",
  },
];

const vessels: {
  key: VesselKey;
  title: string;
  fullName: string;
  image: string;
  imageAlt: string;
  features: string[];
  note: string;
}[] = [
  {
    key: "frp",
    title: "FRP Vessel",
    fullName: "Fibreglass Reinforced Plastic",
    image: "https://www.datocms-assets.com/150507/1748230920-mitchelton-wines-ultrafiltration-water-filtration-1-1.jpg?auto=format&w=2560",
    imageAlt: "Blue FRP activated carbon filter vessels in an industrial water-treatment installation",
    features: [
      "Lightweight construction",
      "Corrosion resistant",
      "Suitable for low to medium pressure",
      "Long service life and easy installation",
      "Economical configuration",
    ],
    note: "Typical reference: FRP vessel with multiport valve and lateral collection system.",
  },
  {
    key: "msep",
    title: "MSEP Vessel",
    fullName: "Mild Steel Epoxy Painted",
    image: "/acf-msep-vessel.png",
    imageAlt: "Activated carbon filter vessel options with pumps in an industrial water-treatment installation",
    features: [
      "High structural strength",
      "Epoxy-coated construction",
      "Suitable for industrial applications",
      "Cost-effective for larger duties",
      "Custom sizes and good indoor corrosion resistance",
    ],
    note: "Vessel construction, coating system and duty should be confirmed during project design.",
  },
  {
    key: "msrl",
    title: "MSRL Vessel",
    fullName: "Mild Steel Rubber Lined",
    image: "/acf-msrl-vessel.png",
    imageAlt: "Grey MSRL activated carbon filter vessels in an industrial water-treatment installation",
    features: [
      "Rubber lining for improved corrosion resistance",
      "Suitable for aggressive-water duties, subject to compatibility",
      "Long service life with appropriate inspection",
      "Suitable for industrial and municipal applications",
      "Custom sizes available to the design duty",
    ],
    note: "Lining compatibility, pressure and temperature limits require project-specific verification.",
  },
];

const modelSizes = [
  ["500", "500 × 1750 mm", "1–2 m³/hr", "80–100 kg"],
  ["750", "750 × 1950 mm", "3–5 m³/hr", "180–220 kg"],
  ["900", "900 × 2100 mm", "6–10 m³/hr", "300–350 kg"],
  ["1200", "1200 × 2400 mm", "10–15 m³/hr", "550–600 kg"],
  ["1500", "1500 × 2600 mm", "15–25 m³/hr", "850–900 kg"],
  ["1800", "1800 × 2850 mm", "25–40 m³/hr", "1200–1400 kg"],
  ["2000", "2000 × 3000 mm", "40–60 m³/hr", "1700–2000 kg"],
];

const vesselTabs: { key: VesselKey; label: string; prefix: string }[] = [
  { key: "frp", label: "FRP Vessels", prefix: "FRP" },
  { key: "msep", label: "MSEP Vessels", prefix: "MSEP" },
  { key: "msrl", label: "MSRL Vessels", prefix: "MSRL" },
];

const qualityRows: TableRow[] = [
  ["Turbidity (NTU)", "5–50", "<1"],
  ["Colour (TCU)", "10–300", "<5"],
  ["Free Chlorine (mg/L)", "0.1–5.0", "<0.1"],
  ["Odour", "Noticeable", "Absent"],
  ["COD (mg/L)", "<50", "<10"],
  ["BOD (mg/L)", "<20", "<5"],
  ["TDS (mg/L)", "No significant change", "No significant change"],
  ["pH", "6.5–8.5", "6.5–8.5"],
];

const applications: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Droplets,
    title: "Drinking Water Treatment Plants (WTP)",
    text: "Used as part of an appropriately designed drinking-water treatment process.",
  },
  {
    icon: Factory,
    title: "Industrial Process Water",
    text: "Suitable for selected industrial streams where colour, odour or organic impurities require reduction.",
  },
  {
    icon: Gauge,
    title: "RO Pre-Treatment",
    text: "Can reduce free chlorine where required to help protect chlorine-sensitive RO membranes.",
  },
  {
    icon: Landmark,
    title: "Municipal Water Supply",
    text: "Fits suitably designed municipal treatment systems with media and duty selected for the feed water.",
  },
  {
    icon: Building2,
    title: "Commercial & Institutional Buildings",
    text: "Water filtration for hotels, hospitals, campuses and other commercial facilities.",
  },
  {
    icon: Utensils,
    title: "Food & Beverage Industry",
    text: "Applications requiring compatible carbon media and an appropriate validated treatment train.",
  },
  {
    icon: FlaskConical,
    title: "Pharmaceutical Industry",
    text: "Suitable only where the treatment design, media quality and validation requirements are defined.",
  },
  {
    icon: Wind,
    title: "Cooling Tower Make-up",
    text: "Treatment for suitable cooling-water make-up duties based on the source-water analysis.",
  },
];

const processSteps: { number: string; title: string; text: string; icon: LucideIcon }[] = [
  { number: "01", title: "Raw water inlet", text: "Incoming water enters the pressure vessel through the inlet connection.", icon: Droplets },
  { number: "02", title: "Activated carbon bed", text: "Water passes through granular activated carbon selected for the treatment objective.", icon: Leaf },
  { number: "03", title: "Adsorption", text: "Suitable colour, odour, organic compounds and free chlorine may be reduced on the carbon surface.", icon: FlaskConical },
  { number: "04", title: "Gravel support layer", text: "Support media helps maintain the bed and supports even collection through the internals.", icon: CircleCheck },
  { number: "05", title: "Underdrain system", text: "The collection system gathers filtered water and distributes backwash through the bed.", icon: Wind },
  { number: "06", title: "Treated water outlet", text: "Treated water leaves the vessel for the next process or intended application.", icon: ArrowRight },
];

function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`${styles.sectionHeading} ${align === "center" ? styles.center : ""}`}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: TableRow[] }) {
  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`}>
              {row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className={styles.bulletList}>
      {items.map((item) => (
        <li key={item}><Check size={14} aria-hidden="true" />{item}</li>
      ))}
    </ul>
  );
}

export default function ActivatedCarbonFilterContent() {
  const [activeVessel, setActiveVessel] = useState<VesselKey>("frp");
  const activeTabIndex = vesselTabs.findIndex((tab) => tab.key === activeVessel);
  const activeTab = vesselTabs[activeTabIndex] ?? vesselTabs[0];

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? vesselTabs.length - 1
        : (index + (event.key === "ArrowRight" ? 1 : -1) + vesselTabs.length) % vesselTabs.length;
    const nextTab = vesselTabs[nextIndex];
    setActiveVessel(nextTab.key);
    document.getElementById(`acf-tab-${nextTab.key}`)?.focus();
  }

  const modelRows = modelSizes.map(([suffix, size, flow, carbon]) => [
    `ACF-${activeTab.prefix}-${suffix}`,
    size,
    flow,
    carbon,
    "Turbidity 5–50 NTU; colour 10–300 TCU",
    "Turbidity <1 NTU; colour <5 TCU",
  ]);

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Solutions</span><span>/</span><strong>Activated Carbon Filter</strong>
            </nav>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.heroEyebrow}>AQUEN SOLUTION SYSTEM · ACTIVATED CARBON</span>
                <h1>Activated Carbon Filter <em>(ACF)</em></h1>
                <h2>Advanced Filtration Solutions for Improved Water Quality</h2>
                <p>
                  Activated Carbon Filters are designed to reduce colour, odour, chlorine and suitable organic impurities in water, helping improve taste and overall quality for industrial, commercial and other suitable treatment applications.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryButton}>Enquire Now <ArrowRight size={17} /></Link>
                  <a href="#model-specifications" className={styles.textButton}>View Specifications <ArrowRight size={16} /></a>
                  <a
                    href="/activated-carbon-filter-catalog.pdf"
                    className={styles.downloadButton}
                    download="Aquen-Activated-Carbon-Filter-Catalog.pdf"
                    aria-label="Download the Aquen Activated Carbon Filter catalog PDF"
                  >
                    Download Catalog <Download size={16} />
                  </a>
                </div>
                <div className={styles.heroMetrics}>
                  <div><strong>8 × 30 mesh</strong><span>standard carbon media</span></div>
                  <div><strong>40–60 m³/hr</strong><span>largest reference flow</span></div>
                  <div><strong>FRP · MSEP · MSRL</strong><span>vessel configurations</span></div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                <div className={styles.heroVisualMedia}>
                  <Image
                    src="/activated-carbon-filter-catalog.avif"
                    alt="Activated carbon filter vessels and pipework in an operating water-treatment installation"
                    width={2560}
                    height={1920}
                    priority
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="benefits">
          <div className={styles.container}>
            <SectionHeading eyebrow="01 / Key benefits" title="Targeted adsorption for better water quality">
              Activated carbon is selected around the incoming water, contact time, carbon grade and treatment objective. Performance should be confirmed with project-specific testing.
            </SectionHeading>
            <div className={styles.benefitGrid}>
              {benefits.map((benefit) => (
                <article className={styles.benefitCard} key={benefit.title}>
                  <span className={styles.iconBox}><benefit.icon size={21} aria-hidden="true" /></span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="vessel-options">
          <div className={styles.container}>
            <SectionHeading eyebrow="02 / Vessel options" title="Activated Carbon Filters available in FRP, MSEP and MSRL vessels">
              Choose the vessel construction around pressure, water chemistry, installation conditions, maintenance expectations and the required flow duty.
            </SectionHeading>
            <div className={styles.vesselGrid}>
              {vessels.map((vessel) => (
                <article className={styles.vesselCard} key={vessel.key}>
                  <div className={styles.vesselImage}>
                    <Image src={vessel.image} alt={vessel.imageAlt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                  </div>
                  <div className={styles.vesselBody}>
                    <span className={styles.cardEyebrow}>ACF / {vessel.key.toUpperCase()}</span>
                    <h3>{vessel.title}</h3>
                    <p className={styles.fullName}>{vessel.fullName}</p>
                    <BulletList items={vessel.features} />
                    <p className={styles.configurationNote}><CircleCheck size={14} aria-hidden="true" />{vessel.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`} id="filtration-process">
          <div className={styles.container}>
            <SectionHeading eyebrow="03 / Filtration process" title="How an Activated Carbon Filter works">
              Water flows through the carbon bed under controlled conditions. Adsorption reduces suitable impurities while the support layers and underdrain collect the treated water.
            </SectionHeading>
            <div className={styles.processGrid}>
              {processSteps.map(({ number, title, text, icon: ProcessIcon }) => {
                return (
                  <article className={styles.processCard} key={number}>
                    <span className={styles.processNumber}>{number}</span>
                    <ProcessIcon size={21} aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.section} id="model-specifications">
          <div className={styles.container}>
            <SectionHeading eyebrow="04 / Model-wise specifications" title="Activated Carbon Filter – Model-Wise Specifications">
              Seven reference sizes are available across each vessel construction. Final sizing, media quantity and operating conditions should be confirmed against the project water analysis.
            </SectionHeading>
            <div className={styles.tabs} role="tablist" aria-label="Activated carbon filter vessel types">
              {vesselTabs.map((tab, index) => (
                <button
                  key={tab.key}
                  id={`acf-tab-${tab.key}`}
                  type="button"
                  role="tab"
                  aria-selected={activeVessel === tab.key}
                  aria-controls={`acf-panel-${tab.key}`}
                  tabIndex={activeVessel === tab.key ? 0 : -1}
                  className={activeVessel === tab.key ? styles.activeTab : ""}
                  onClick={() => setActiveVessel(tab.key)}
                  onKeyDown={(event) => moveTab(event, index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div id={`acf-panel-${activeVessel}`} role="tabpanel" aria-labelledby={`acf-tab-${activeVessel}`} className={styles.specPanel}>
              <div className={styles.specPanelIntro}>
                <div><span>{activeTab.prefix} vessel models</span><strong>ACF-{activeTab.prefix}-500 to ACF-{activeTab.prefix}-2000</strong></div>
                <p>Shared reference dimensions and flow ranges with vessel-specific model prefixes.</p>
              </div>
              <DataTable
                headers={["Model", "Vessel size (Diameter × Height)", "Flow rate", "Carbon media quantity", "Inlet (typical)", "Outlet (typical)"]}
                rows={modelRows}
              />
            </div>
            <p className={styles.dataNote}>Model sizes and carbon quantities are transcribed from the supplied brochure and require verification against the original artwork before publication or quotation.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="product-catalogue">
          <div className={styles.container}>
            <SectionHeading eyebrow="05 / Product catalogue" title="Activated Carbon Filter catalogue">
              Review the complete technical reference for vessel construction, process flow, design data, equipment and bill of quantities.
            </SectionHeading>
            <figure className={styles.catalogFrame}>
              <Image
                src="/acf-15000-lph-frp.png"
                alt="Full activated carbon filter technical catalogue"
                width={1536}
                height={1024}
                sizes="(max-width: 1180px) calc(100vw - 48px), 1180px"
              />
              <figcaption>Full technical catalogue reference · Open image in a new tab for detailed reading.</figcaption>
            </figure>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="activated-carbon-media">
          <div className={styles.container}>
            <SectionHeading eyebrow="06 / Activated carbon media" title="Activated carbon media selected for the treatment objective">
              Granular activated carbon works by adsorption. The carbon grade, media depth, contact time and replacement cycle should be selected around the incoming water and the impurity target.
            </SectionHeading>
            <div className={styles.mediaLayout}>
              <div className={styles.mediaReferenceImage}>
                <Image src="/acf-15000-lph-frp.png" alt="Supplied ACF technical drawing showing activated carbon and gravel support layers" fill sizes="(max-width: 800px) 100vw, 48vw" />
                <span>Supplied ACF technical drawing reference</span>
              </div>
              <div className={styles.mediaContent}>
                <div className={styles.mediaHighlight}><strong>8 × 30 mesh</strong><span>standard media size shown in the brochure</span></div>
                <BulletList items={[
                  "Granular activated carbon media",
                  "High adsorption capacity for suitable impurities",
                  "Colour, odour and organic impurity reduction",
                  "High mechanical strength",
                  "Low ash content",
                  "Available in bulk supply",
                ]} />
                <div className={styles.mediaNote}><strong>Supporting components</strong><p>Gravel support media: 2–6 mm · Underdrain system · Raw-water inlet · Treated-water outlet</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="water-quality">
          <div className={styles.container}>
            <SectionHeading eyebrow="07 / Water quality" title="Typical inlet & outlet parameters">
              These brochure-transcribed values are indicative only. Actual outlet results depend on feed-water quality, carbon type, contact time, operating conditions and the complete treatment process.
            </SectionHeading>
            <div className={styles.qualityCard}><DataTable headers={["Parameter", "Inlet (Typical)", "Outlet (Typical)"]} rows={qualityRows} /></div>
            <p className={styles.dataNote}>TDS is shown as having no significant change. Activated carbon should not be presented as a dissolved-salt removal process.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="applications">
          <div className={styles.container}>
            <SectionHeading eyebrow="08 / Applications" title="Where activated carbon filtration fits">
              Applications are selected around the water source, target impurity, media compatibility and any required validation or compliance process.
            </SectionHeading>
            <div className={styles.applicationGrid}>
              {applications.map((application) => (
                <article className={styles.applicationCard} key={application.title}>
                  <span className={styles.iconBox}><application.icon size={21} aria-hidden="true" /></span>
                  <h3>{application.title}</h3>
                  <p>{application.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection} id="enquiry">
          <div className={styles.container}>
            <div className={styles.ctaGrid}>
              <div>
                <span className={styles.eyebrow}>09 / Start a conversation</span>
                <h2>Looking for the Right Activated Carbon Filter?</h2>
                <p>Contact Aquen Fluid Technologies LLP to discuss your water quality requirements, filtration capacity, vessel construction and activated carbon media selection.</p>
              </div>
              <div className={styles.ctaCard}>
                <div><span>Product</span><strong>Activated Carbon Filter (ACF)</strong></div>
                <div><span>Company</span><strong>Aquen Fluid Technologies LLP</strong></div>
                <div><span>Email</span><a href="mailto:ceo@aquenfluid.com">ceo@aquenfluid.com</a></div>
                <Link href="/contact" className={styles.primaryButton}>Enquire Now <ArrowRight size={17} /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
