"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type KeyboardEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  CircleCheck,
  Droplets,
  Download,
  Factory,
  Fan,
  Filter,
  Gauge,
  Landmark,
  Settings2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "./page.module.css";

type TableRow = string[];

type FilterSystem = {
  key: string;
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  media: string[];
  components: string[];
  benefits: string[];
};

const filterSystems: FilterSystem[] = [
  {
    key: "psf",
    eyebrow: "01 / Pressure filtration",
    title: "Pressure Sand Filter (PSF)",
    image: "/pressure-filter-installation-2.png",
    imageAlt: "Pressure sand filter, multi grade filter and dual media filter installation",
    description:
      "A pressure sand filter removes suspended solids, turbidity, silt and fine particles from raw water through a sand filtration bed with gravel support media.",
    media: ["Silica sand: 0.6–1.2 mm", "Gravel support media: 2–6 mm"],
    components: [
      "Raw-water inlet",
      "Sand filtration bed",
      "Gravel support media",
      "Underdrain system",
      "Filtered-water outlet",
    ],
    benefits: [
      "Suspended solids removal",
      "Turbidity reduction",
      "Improved water clarity",
      "Water pre-treatment",
    ],
  },
  {
    key: "mgf",
    eyebrow: "02 / Graded media",
    title: "Multi Grade Filter (MGF)",
    image: "/pressure-filter-installation-3.png",
    imageAlt: "Multi grade and dual media filter vessels with pumps and pipework",
    description:
      "A multi grade filter uses multiple layers of filtration media to capture different particle sizes and improve filtration efficiency across industrial water streams.",
    media: [
      "Anthracite: 0.8–1.6 mm",
      "Sand: 0.4–0.8 mm",
      "Garnet: 0.2–0.4 mm",
      "Gravel support media: 2–6 mm",
    ],
    components: [
      "Raw-water inlet",
      "Multilayer filtration bed",
      "Underdrain system",
      "Filtered-water outlet",
    ],
    benefits: [
      "Multilayer filtration",
      "Suspended-particle removal",
      "Improved filtration efficiency",
      "Industrial water treatment",
    ],
  },
  {
    key: "dmf",
    eyebrow: "03 / Depth filtration",
    title: "Dual Media Filter (DMF)",
    image: "/pressure-filter-installation-4.png",
    imageAlt: "Filter installation pumps, pipework and control panel",
    description:
      "A dual media filter combines anthracite and sand layers to improve depth filtration and support longer filtration run times, depending on operating conditions.",
    media: [
      "Anthracite: 0.8–1.6 mm",
      "Sand: 0.4–0.8 mm",
      "Gravel support media: 2–6 mm",
    ],
    components: [
      "Raw-water inlet",
      "Anthracite layer",
      "Sand layer",
      "Gravel support media",
      "Underdrain system",
      "Filtered-water outlet",
    ],
    benefits: [
      "Combined-media filtration",
      "Effective particle removal",
      "Improved filtration depth",
      "Longer runs, subject to conditions",
    ],
  },
];

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Filter,
    title: "Turbidity control",
    text: "Removes suspended solids, silt and fine particles from raw water.",
  },
  {
    icon: Droplets,
    title: "Clearer water",
    text: "Improves visual water quality and supports downstream treatment stages.",
  },
  {
    icon: Factory,
    title: "Built for industry",
    text: "Suitable for industrial, commercial and institutional applications.",
  },
  {
    icon: ShieldCheck,
    title: "Three vessel options",
    text: "FRP, MSEP and MSRL configurations can be considered for the duty.",
  },
  {
    icon: Settings2,
    title: "Flexible controls",
    text: "Manual or automatic operation with multiport or butterfly valves.",
  },
  {
    icon: Gauge,
    title: "Scalable capacity",
    text: "Multiple vessel sizes and flow capacities support project-specific design.",
  },
];

const vessels: {
  title: string;
  fullName: string;
  features: string[];
  note: string;
}[] = [
  {
    title: "FRP Vessel",
    fullName: "Fibreglass Reinforced Plastic",
    features: [
      "Lightweight and corrosion resistant",
      "Suitable for low to medium pressure",
      "Long service life and economical construction",
      "Quick installation",
    ],
    note: "Typical configuration: FRP vessel with multiport valve.",
  },
  {
    title: "MSEP Vessel",
    fullName: "Mild Steel Epoxy Painted",
    features: [
      "High-strength fabricated vessel with epoxy coating",
      "Cost-effective for industrial applications",
      "Good corrosion resistance for indoor applications",
      "Custom sizes for higher flow capacities, subject to design",
    ],
    note: "Typical configuration: MSEP vessel with piping and butterfly valves.",
  },
  {
    title: "MSRL Vessel",
    fullName: "Mild Steel Rubber Lined",
    features: [
      "Mild steel construction with rubber lining",
      "Excellent corrosion resistance",
      "Suitable for harsh-water conditions, subject to design",
      "Durable construction for industrial and municipal duties",
    ],
    note: "Typical configuration: MSRL vessel with lined internals and piping.",
  },
];

type SpecKey = "psf" | "mgf" | "dmf";

const specTabs: { key: SpecKey; label: string; prefix: string }[] = [
  { key: "psf", label: "Pressure Sand Filter", prefix: "PSF" },
  { key: "mgf", label: "Multi Grade Filter", prefix: "MGF" },
  { key: "dmf", label: "Dual Media Filter", prefix: "DMF" },
];

const models = [
  ["500", "500 × 1750 mm", "1–2 m³/hr"],
  ["750", "750 × 1950 mm", "3–5 m³/hr"],
  ["900", "900 × 2100 mm", "6–10 m³/hr"],
  ["1200", "1200 × 2400 mm", "10–15 m³/hr"],
  ["1500", "1500 × 2600 mm", "15–25 m³/hr"],
  ["1800", "1800 × 2850 mm", "25–40 m³/hr"],
  ["2000", "2000 × 3000 mm", "40–60 m³/hr"],
];

const operatingParameters: TableRow[] = [
  ["Operating pressure", "2–6 kg/cm² (standard)"],
  ["Maximum pressure", "8–10 kg/cm² (as per design)"],
  ["Operating temperature", "5–50°C"],
  ["Filtration velocity", "10–15 m³/m²/hr"],
  ["Backwash velocity", "30–40 m³/m²/hr"],
  ["Inlet/outlet connection", "Flanged or screwed, as required"],
  ["Control valve", "Manual/automatic; multiport or butterfly"],
  ["Underdrain", "Lateral type with gravel support"],
  ["Media", "Silica sand and anthracite/garnet, as applicable"],
];

const qualityTables: {
  title: string;
  rows: TableRow[];
}[] = [
  {
    title: "Pressure Sand Filter (PSF)",
    rows: [
      ["Turbidity (NTU)", "5–100", "<1"],
      ["TSS (mg/L)", "10–200", "<5"],
      ["Colour (TCU)", "10–100", "<5"],
    ],
  },
  {
    title: "Multi Grade Filter (MGF)",
    rows: [
      ["Turbidity (NTU)", "10–100", "<1"],
      ["TSS (mg/L)", "10–200", "<5"],
      ["Colour (TCU)", "10–100", "<5"],
      ["SDI", "5–20", "<3"],
    ],
  },
  {
    title: "Dual Media Filter (DMF)",
    rows: [
      ["Turbidity (NTU)", "10–100", "<1"],
      ["TSS (mg/L)", "20–200", "<5"],
      ["Colour (TCU)", "10–100", "<5"],
      ["Iron (mg/L)", "Up to 10", "<0.1"],
      ["Manganese (mg/L)", "Up to 0.5", "<0.1"],
    ],
  },
];

const applications: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Factory,
    title: "Industrial Process Water",
    text: "Pre-treatment and polishing for process-water systems and production utilities.",
  },
  {
    icon: Filter,
    title: "RO Pre-Treatment",
    text: "Reduces suspended solids and turbidity before membrane systems.",
  },
  {
    icon: Building2,
    title: "Commercial & Institutional",
    text: "Reliable filtration for campuses, hotels, hospitals and commercial facilities.",
  },
  {
    icon: Landmark,
    title: "Municipal Water Supply",
    text: "Adaptable filtration for raw-water conditioning and distribution support.",
  },
  {
    icon: Fan,
    title: "Cooling Tower Make-up",
    text: "Improves make-up water quality to help protect downstream cooling equipment.",
  },
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

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: TableRow[];
}) {
  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            {headers.map((header) => <th key={header}>{header}</th>)}
          </tr>
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

export default function FiltrationSolutionsContent() {
  const [activeTab, setActiveTab] = useState<SpecKey>("psf");

  const activePrefix = specTabs.find((tab) => tab.key === activeTab)?.prefix ?? "PSF";

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? specTabs.length - 1
        : (index + (event.key === "ArrowRight" ? 1 : -1) + specTabs.length) % specTabs.length;
    const nextTab = specTabs[nextIndex];
    setActiveTab(nextTab.key);
    document.getElementById(`tab-${nextTab.key}`)?.focus();
  }

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.heroEyebrow}>AQUEN SOLUTION SYSTEM · WATER FILTRATION</span>
                <h1>Pressure Sand Filter <em>MGF &amp; DMF</em></h1>
                <h2>Reliable Filtration Solutions for Clean &amp; Clear Water</h2>
                <p>
                  Industrial water filtration systems designed to remove suspended solids, reduce turbidity and improve water quality for industrial, commercial and institutional applications.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryButton}>Enquire Now <ArrowRight size={17} /></Link>
                  <a
                    href="/psf-dmf-acf-brochure.pdf"
                    className={styles.brochureButton}
                    download
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Brochure <Download size={16} />
                  </a>
                  <a href="#filtration-systems" className={styles.textButton}>Explore Filtration Systems <ArrowRight size={16} /></a>
                </div>
                <div className={styles.heroMetrics}>
                  <div><strong>1–60 m³/hr</strong><span>reference flow range</span></div>
                  <div><strong>PSF / MGF / DMF</strong><span>filtration approaches</span></div>
                  <div><strong>FRP · MSEP · MSRL</strong><span>vessel configurations</span></div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                <div className={styles.heroVisualMedia}>
                  <Image
                    src="/pressure-filter-hero.png"
                    alt="Pressure sand, multi grade and dual media filter plant with layered media filtration illustration"
                    width={1400}
                    height={1128}
                    priority
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="brochure-overview">
          <div className={styles.container}>
            <SectionHeading eyebrow="Brochure overview" title="PSF, MGF & DMF filtration at a glance">
              Explore the available filtration approaches, vessel configurations, media options and typical operating parameters in one visual reference.
            </SectionHeading>
            <figure className={styles.brochureFigure}>
              <Image
                src="/psf-dmf-acf-overview.png"
                alt="Aquen Fluid Technologies brochure overview for pressure sand, multi grade and dual media filters"
                width={1030}
                height={682}
                sizes="(max-width: 1180px) calc(100vw - 48px), 1180px"
              />
              <figcaption>PSF, MGF and DMF product overview</figcaption>
            </figure>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="benefits">
          <div className={styles.container}>
            <SectionHeading eyebrow="01 / Why filtration" title="Clearer water starts with the right filter">
              Select the filtration depth, vessel construction and control configuration around the water quality and flow duty.
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

        <section className={styles.section} id="filtration-systems">
          <div className={styles.container}>
            <SectionHeading eyebrow="02 / Our filtration systems" title="Three proven filtration approaches">
              Each system can be engineered around incoming water quality, required flow, media depth, vessel construction and downstream process needs.
            </SectionHeading>
            <div className={styles.systemGrid}>
              {filterSystems.map((system) => (
                <article className={styles.systemCard} key={system.key}>
                  <div className={styles.systemImage}>
                    <Image src={system.image} alt={system.imageAlt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                  </div>
                  <div className={styles.systemBody}>
                    <span className={styles.cardEyebrow}>{system.eyebrow}</span>
                    <h3>{system.title}</h3>
                    <p>{system.description}</p>
                    <div className={styles.systemDetails}>
                      <div><h4>Filtration media</h4><BulletList items={system.media} /></div>
                      <div><h4>Main components</h4><BulletList items={system.components} /></div>
                    </div>
                    <div className={styles.systemBenefits}><strong>Key benefits</strong><span>{system.benefits.join(" · ")}</span></div>
                    <a href="#model-specifications" className={styles.inlineLink}>View specifications <ArrowRight size={15} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="vessels">
          <div className={styles.container}>
            <SectionHeading eyebrow="03 / Vessel construction" title="Available in FRP, MSEP and MSRL vessels">
              Vessel selection depends on pressure, water chemistry, flow capacity, installation environment and the approved design basis.
            </SectionHeading>
            <div className={styles.vesselGrid}>
              {vessels.map((vessel) => (
                <article className={styles.vesselCard} key={vessel.title}>
                  <div className={styles.vesselBody}>
                    <span className={styles.cardEyebrow}>Vessel type</span>
                    <h3>{vessel.title}</h3>
                    <p className={styles.fullName}>{vessel.fullName}</p>
                    <BulletList items={vessel.features} />
                    <p className={styles.configurationNote}><CircleCheck size={15} aria-hidden="true" />{vessel.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="model-specifications">
          <div className={styles.container}>
            <SectionHeading eyebrow="04 / Model-wise specifications" title="Flow capacities sized around your duty">
              Use the model family as a starting point. Final sizing depends on water analysis, filtration velocity, backwash requirements and the approved process design.
            </SectionHeading>
            <div className={styles.tabs} role="tablist" aria-label="Filter model specifications">
              {specTabs.map((tab, index) => (
                <button
                  key={tab.key}
                  id={`tab-${tab.key}`}
                  className={activeTab === tab.key ? styles.activeTab : ""}
                  role="tab"
                  type="button"
                  aria-selected={activeTab === tab.key}
                  aria-controls={`panel-${tab.key}`}
                  tabIndex={activeTab === tab.key ? 0 : -1}
                  onClick={() => setActiveTab(tab.key)}
                  onKeyDown={(event) => moveTab(event, index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className={styles.specPanel} id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`} tabIndex={0}>
              <div className={styles.specPanelIntro}><div><span>Selected model family</span><strong>{activePrefix} series</strong></div><p>Vessel diameter × height and flow rates shown below are brochure-transcribed draft values.</p></div>
              <DataTable headers={["Model", "Vessel diameter × height", "Flow rate"]} rows={models.map((model) => [`${activePrefix}-${model[0]}`, model[1], model[2]])} />
            </div>
            <p className={styles.dataNote}>Engineering note: confirm these brochure-transcribed dimensions and flow rates against the approved product datasheet before issuing a quotation or performance guarantee.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.blueSection}`} id="operating-parameters">
          <div className={styles.container}>
            <SectionHeading eyebrow="05 / Engineering basis" title="Design & operating parameters" align="center">
              Typical ranges for preliminary selection. Standard operating pressure and maximum design pressure are intentionally shown as separate values.
            </SectionHeading>
            <div className={styles.singleTableCard}><DataTable headers={["Parameter", "Typical range"]} rows={operatingParameters} /></div>
            <p className={styles.dataNoteLight}>Final parameters are subject to water analysis, vessel construction, media selection, site conditions and approved design calculations.</p>
          </div>
        </section>

        <section className={styles.section} id="water-quality">
          <div className={styles.container}>
            <SectionHeading eyebrow="06 / Water quality" title="Typical inlet & outlet water quality parameters">
              The following readings are brochure-transcribed draft data. They are indicative only and do not constitute a guaranteed outlet quality.
            </SectionHeading>
            <div className={styles.qualityGrid}>
              {qualityTables.map((table) => (
                <article className={styles.qualityCard} key={table.title}>
                  <h3>{table.title}</h3>
                  <DataTable headers={["Parameter", "Inlet", "Outlet"]} rows={table.rows} />
                </article>
              ))}
            </div>
            <p className={styles.dataNote}>Verify all readings against the original brochure artwork and the project-specific raw-water analysis before publishing or committing to a performance target.</p>
          </div>
        </section>

        <section className={styles.section} id="applications">
          <div className={styles.container}>
            <SectionHeading eyebrow="07 / Applications" title="Where these filtration systems fit">
              From raw-water conditioning to RO pre-treatment, filtration is selected as part of the complete treatment train.
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
              <div><span className={styles.eyebrow}>08 / Start a conversation</span><h2>Looking for the right water filtration solution?</h2><p>Contact Aquen Fluid Technologies LLP to discuss your water quality requirements, flow capacity, filtration media and vessel configuration.</p></div>
              <div className={styles.ctaCard}><div><span>Company</span><strong>Aquen Fluid Technologies LLP</strong></div><div><span>Email</span><a href="mailto:ceo@aquenfluid.com">ceo@aquenfluid.com</a></div><div><span>Office / factory</span><strong>Charholi Budruk, Pimpri-Chinchwad, Maharashtra – 412105, India</strong></div><Link href="/contact" className={styles.primaryButton}>Enquire Now <ArrowRight size={17} /></Link></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
