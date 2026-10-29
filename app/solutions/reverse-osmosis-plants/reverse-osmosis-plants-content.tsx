import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Beaker,
  Check,
  ChevronRight,
  CircleAlert,
  Download,
  Droplets,
  Factory,
  Gauge,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Waves,
} from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";

import styles from "./page.module.css";

type TableRow = readonly string[];

const capacityModels = [
  ["RO-250", "250 LPH", "0.25 m³/hr"],
  ["RO-500", "500 LPH", "0.5 m³/hr"],
  ["RO-1000", "1,000 LPH", "1.0 m³/hr"],
  ["RO-2000", "2,000 LPH", "2.0 m³/hr"],
  ["RO-4000", "4,000 LPH", "4.0 m³/hr"],
  ["RO-8000", "8,000 LPH", "8.0 m³/hr"],
  ["RO-15000", "15,000 LPH", "15.0 m³/hr"],
] as const;

const technicalRows: TableRow[] = [
  ["RO-250", "250", "0.25", "50–70", "1", "1.1–1.5 m³/hr @ 10–16 bar", "0.5–0.75", "FRP / SS-304", "SS-304 (RO section)"],
  ["RO-500", "500", "0.5", "50–70", "2", "1.0–1.5 m³/hr @ 10–16 bar", "0.75–1.0", "FRP / SS-304", "SS-304 (RO section)"],
  ["RO-1000", "1,000", "1.0", "50–70", "4", "2.0–2.5 m³/hr @ 10–16 bar", "1.5–2.0", "FRP / SS-304", "SS-304 (RO section)"],
  ["RO-2000", "2,000", "2.0", "50–70", "8", "4.0–5.0 m³/hr @ 10–16 bar", "3.0–4.0", "SS-304", "SS-304"],
  ["RO-4000", "4,000", "4.0", "50–70", "8", "6.0–8.0 m³/hr @ 10–16 bar", "5.5–7.5", "SS-304", "SS-304"],
  ["RO-8000", "8,000", "8.0", "50–70", "16", "10–12 m³/hr @ 10–16 bar", "11–15", "SS-304", "SS-304"],
  ["RO-15000", "15,000", "15.0", "50–70", "24", "18–20 m³/hr @ 10–16 bar", "18–22", "SS-304", "SS-304"],
];

const qualityRows: TableRow[] = [
  ["TDS (mg/L)", "500–3000", "<150"],
  ["Total hardness", "100–1000", "<10"],
  ["pH", "6.5–8.5", "6.5–7.5"],
  ["Turbidity", "0–5", "<1"],
  ["SDI", "<3", "<1"],
  ["Iron", "<0.3", "<0.1"],
  ["Silica", "<20", "<5"],
  ["COD", "<50", "<5"],
  ["BOD", "<10", "<5"],
  ["Oil & grease", "<10", "<1"],
];

const scopeItems = [
  ["01", "FRP Pretreatment", "MGF, ACF and Softener (Optional)"],
  ["02", "Cartridge Filter", "5 or 10 micron filtration"],
  ["03", "High Pressure Pump", "SS-304 pump arrangement"],
  ["04", "RO Membrane System", "Membrane housing and 8 × 40 in membranes"],
  ["05", "Instrumentation", "Pressure gauges, flow meters, conductivity and TDS meters"],
  ["06", "Chemical Dosing", "Antiscalant, pH dosing, SMBS and other project requirements"],
  ["07", "SS-304 Skid & Piping", "Skid, piping, valves and accessories"],
  ["08", "Control Panel", "Auto/Manual operation; PLC optional"],
  ["09", "CIP System", "Optional cleaning-in-place arrangement"],
  ["10", "Flow Measurement", "Product water and reject flow measurement"],
] as const;

const features = [
  "High removal of TDS, hardness and selected dissolved impurities",
  "Compact and modular construction",
  "Reliable operation with low-maintenance design intent",
  "Automatic operation and automatic flushing options",
  "Energy-efficient system design based on feed conditions",
  "FRP / SS-304 material-of-construction options",
  "Customizable for capacity, water quality and site requirements",
];

const applications = [
  "Residential & Commercial Buildings",
  "Hotels, Resorts & Hospitals",
  "Industrial Process Water",
  "Food & Beverage",
  "Pharmaceutical",
  "Boiler Feed Water",
  "Cooling Tower Make-up",
  "Laboratories & R&D",
  "Electroplating & Surface Treatment",
  "Treated-water applications requiring suitable RO",
];

const faqs = [
  [
    "What is a Reverse Osmosis plant?",
    "A Reverse Osmosis plant applies pressure to feed water and passes it through a semipermeable membrane. The membrane separates a lower-solids permeate stream from a reject or concentrate stream containing concentrated impurities.",
  ],
  [
    "What does an RO system remove?",
    "RO is used to reduce dissolved salts, TDS, hardness and selected impurities. Actual removal and permeate quality depend on feed analysis, membrane selection, pretreatment and operating conditions.",
  ],
  [
    "What RO capacities are available?",
    "The standard model range on this page is RO-250, RO-500, RO-1000, RO-2000, RO-4000, RO-8000 and RO-15000, from 250 to 15,000 LPH.",
  ],
  [
    "What are permeate and reject water?",
    "Permeate is the treated water that passes through the membrane. Reject, also called concentrate, is the stream that carries a higher concentration of rejected dissolved constituents and needs a suitable disposal or reuse plan.",
  ],
  [
    "Is pretreatment required before RO?",
    "Pretreatment is selected from the feed-water analysis and can include multimedia or sand filtration, activated carbon, softening, cartridge filtration and chemical dosing. The final arrangement is project-specific.",
  ],
  [
    "Why is a cartridge filter used?",
    "A cartridge filter provides a fine protective stage before the high-pressure pump and RO membrane system. AQUEN can configure 5 or 10 micron filtration as required by the design.",
  ],
  [
    "What are MGF and ACF?",
    "MGF means Multimedia or Multi Grade Filter, which helps reduce suspended solids. ACF means Activated Carbon Filter, which is used for chlorine, organics and odor control where required.",
  ],
  [
    "Is chemical dosing included?",
    "Chemical dosing can be included for antiscalant, pH adjustment, SMBS and other treatment needs. Dosing type and setpoints depend on the feed-water report and the final quotation.",
  ],
  [
    "Will the plant always produce the stated capacity?",
    "The model capacities are indicative nominal selections. Actual production and recovery depend on feed quality, temperature, pressure, membrane arrangement, pretreatment and operating conditions.",
  ],
  [
    "How do I select the right RO plant?",
    "Start with required permeate flow, operating hours, feed-water analysis, end-use quality and reject handling. AQUEN can then recommend a suitable capacity and pretreatment configuration.",
  ],
  [
    "What is included in an AQUEN RO quotation?",
    "A quotation can define the selected capacity, pretreatment, pumps, membrane housings and membranes, instrumentation, controls, MOC, optional systems, installation scope and site-specific exclusions.",
  ],
] as const;

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className={styles.sectionHeading}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function DataTable({ headers, rows, compact = false }: { headers: string[]; rows: TableRow[]; compact?: boolean }) {
  return (
    <div className={`${styles.tableWrap} ${compact ? styles.compactTable : ""}`}>
      <table>
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FlowNode({ number, title, detail, icon }: { number: string; title: string; detail: string; icon: React.ReactNode }) {
  return (
    <div className={styles.flowNode}>
      <div className={styles.flowNumber}>{number}</div>
      <div className={styles.flowIcon}>{icon}</div>
      <strong>{title}</strong>
      <span>{detail}</span>
    </div>
  );
}

export default function ReverseOsmosisPlantsContent() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link href="/solutions">Solutions</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <strong>Reverse Osmosis (RO) Plants</strong>
            </nav>

            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>AQUEN SOLUTION SYSTEM · MEMBRANE FILTRATION</span>
                <h1>Reverse Osmosis <em>(RO) Plants</em></h1>
                <h2>Reliable, Efficient, Compact and Customized Solutions</h2>
                <p>
                  AQUEN RO plants use pressure-driven semipermeable membrane separation to reduce dissolved salts, hardness and selected impurities for suitable treated-water applications.
                </p>
                <div className={styles.heroActions}>
                  <Link className={styles.primaryButton} href="/contact">Request a Quote <ArrowRight size={17} /></Link>
                  <Link className={styles.textButton} href="/contact">Contact Us <ArrowRight size={15} /></Link>
                  <a className={styles.downloadButton} href="/reverse-osmosis-solutions-brochure.pdf" download="Aquen-Reverse-Osmosis-Solutions-Brochure.pdf" aria-label="Download the Aquen Reverse Osmosis Solutions brochure PDF">Download Brochure <Download size={16} /></a>
                </div>
                <div className={styles.heroMetrics}>
                  <div><strong>250–15,000 LPH</strong><span>standard model range</span></div>
                  <div><strong>50–70%</strong><span>typical recovery range</span></div>
                  <div><strong>Feed-specific</strong><span>pretreatment & design</span></div>
                </div>
                <p className={styles.heroNote}>Indicative design information only. Final performance depends on feed-water analysis and manufacturer verification.</p>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroVisualFrame}>
                  <Image
                    src="/ro-installation-gallery.png"
                    alt="AQUEN reverse osmosis plant installation references with pretreatment, pumps and control panels"
                    fill
                    priority
                    sizes="(max-width: 850px) 100vw, 52vw"
                  />
                </div>
                <div className={styles.heroBadge}><BadgeCheck size={16} /><span>RO plant reference</span></div>
                <div className={styles.heroCaption}><span>Permeate</span><strong>treated water</strong><span>Reject</span><strong>concentrate</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading eyebrow="01 · RO technology" title="A clear separation process for dissolved solids">
              Feed water is pressurized against a semipermeable membrane. Water that passes through is collected as permeate, while the concentrated stream leaves as reject. The final plant arrangement is selected from the water analysis and intended use.
            </SectionHeading>
            <div className={styles.explainerGrid}>
              <article className={styles.explainerCard}>
                <div className={styles.cardIcon}><Waves size={20} /></div>
                <span>01 / Membrane separation</span>
                <h3>Pressure moves water through the membrane</h3>
                <p>A high-pressure pump supplies the driving pressure needed for the RO membrane stage. Pretreatment protects the membrane from suspended solids, chlorine, hardness and other feed-specific risks.</p>
              </article>
              <article className={styles.explainerCard}>
                <div className={styles.cardIcon}><Droplets size={20} /></div>
                <span>02 / Permeate stream</span>
                <h3>Permeate becomes the treated-water stream</h3>
                <p>Permeate flow and quality depend on the membrane arrangement, feed TDS, temperature, pressure, recovery and maintenance condition. It is not a universal potable-water guarantee.</p>
              </article>
              <article className={styles.explainerCard}>
                <div className={styles.cardIcon}><Gauge size={20} /></div>
                <span>03 / Reject stream</span>
                <h3>Concentrate needs a planned outlet</h3>
                <p>Reject or concentrate carries the rejected dissolved constituents. AQUEN can consider reuse, drain, recovery or site-specific handling requirements in the project scope.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="capacities">
          <div className={styles.container}>
            <SectionHeading eyebrow="02 · Capacity range" title="Choose a model around your permeate requirement">
              The model capacities below are standard nominal selections. Actual production depends on feed-water quality, temperature, pressure, membrane arrangement, pretreatment and operating conditions.
            </SectionHeading>
            <div className={styles.capacityGrid}>
              {capacityModels.map(([model, lph, flow], index) => (
                <article className={`${styles.capacityCard} ${index === 4 ? styles.capacityFeatured : ""}`} key={model}>
                  <div className={styles.capacityTop}><span>RO / {String(index + 1).padStart(2, "0")}</span><SlidersHorizontal size={16} /></div>
                  <h3>{model}</h3>
                  <strong>{lph}</strong>
                  <span>{flow} permeate flow</span>
                  <div className={styles.capacityRule} />
                  <p>Typical recovery: <b>50–70%</b></p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="technical-data">
          <div className={styles.container}>
            <SectionHeading eyebrow="03 · Indicative technical data" title="Standard RO model comparison">
              Brochure values are preserved below for planning and comparison. Pump flow/pressure, membrane counts, exact arrangement and final performance must be verified by the manufacturer against the approved design.
            </SectionHeading>
            <div className={styles.sourceBanner}><CircleAlert size={19} /><div><strong>Important design note</strong><span>Values are indicative and not a performance warranty. Final selection requires feed-water testing, process design and quotation review.</span></div></div>
            <DataTable
              headers={["Model", "Capacity (LPH)", "Permeate flow (m³/hr)", "Typical recovery (%)", "No. membranes (8 × 40 in)", "High-pressure pump (approx.)", "Power consumption (kW)", "Skid MOC", "Piping MOC"]}
              rows={technicalRows}
            />
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="brochure">
          <div className={styles.container}>
            <SectionHeading eyebrow="04 · Product brochure" title="Reverse Osmosis Plants brochure">
              Review the supplied AQUEN brochure for the standard capacity range, process flow, indicative technical data, scope of supply and available configurations.
            </SectionHeading>
            <figure className={styles.brochureFigure}>
              <Image
                src="/ro-brochure-reference.png"
                alt="AQUEN Reverse Osmosis Plants product brochure with process flow, model capacities and technical specifications"
                width={1028}
                height={690}
                sizes="(max-width: 1180px) calc(100vw - 48px), 1180px"
              />
              <figcaption>Supplied Reverse Osmosis Plants brochure · Open image in a new tab for detailed reading.</figcaption>
            </figure>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.container}>
            <SectionHeading eyebrow="04 · System architecture" title="Configured around the water, not a fixed promise">
              A typical plant combines pretreatment, cartridge protection, high-pressure pumping, membrane separation, instrumentation and controls. Every stage remains configurable to the feed report and end-use quality.
            </SectionHeading>
            <div className={styles.flowBoard}>
              <div className={styles.flowTrack}>
                <FlowNode number="01" title="Raw water" detail="feed inlet" icon={<Droplets size={18} />} />
                <ArrowRight className={styles.flowArrow} size={18} aria-hidden="true" />
                <FlowNode number="02" title="MGF / ACF" detail="pretreatment" icon={<Factory size={18} />} />
                <ArrowRight className={styles.flowArrow} size={18} aria-hidden="true" />
                <FlowNode number="03" title="Softener" detail="optional stage" icon={<Beaker size={18} />} />
                <ArrowRight className={styles.flowArrow} size={18} aria-hidden="true" />
                <FlowNode number="04" title="Cartridge" detail="5 or 10 micron" icon={<Settings2 size={18} />} />
                <ArrowRight className={styles.flowArrow} size={18} aria-hidden="true" />
                <FlowNode number="05" title="HP pump" detail="design pressure" icon={<Gauge size={18} />} />
                <ArrowRight className={styles.flowArrow} size={18} aria-hidden="true" />
                <FlowNode number="06" title="RO membrane" detail="permeate + reject" icon={<Waves size={18} />} />
              </div>
              <div className={styles.flowOutputs}>
                <span><Droplets size={15} /> Permeate → treated water</span>
                <span><CircleAlert size={15} /> Reject → concentrate handling plan</span>
              </div>
            </div>
            <p className={styles.darkNote}>MGF = Multimedia / Multi Grade Filter · ACF = Activated Carbon Filter · Pretreatment stages are configurable.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`}>
          <div className={styles.container}>
            <SectionHeading eyebrow="05 · Feed-water envelope" title="Typical inlet and outlet parameters">
              These are typical indicative ranges for discussion only. Test methods, operating conditions, selected membranes and the intended use must be verified before finalizing the design. No potable-water guarantee is implied.
            </SectionHeading>
            <DataTable headers={["Parameter", "Typical inlet", "Typical outlet"]} rows={qualityRows} compact />
          </div>
        </section>

        <section className={styles.section} id="scope">
          <div className={styles.container}>
            <SectionHeading eyebrow="06 · Standard scope" title="A practical RO package, with optional stages clearly marked">
              The final scope depends on capacity, feed-water quality, operating hours, treated-water requirement and the approved quotation.
            </SectionHeading>
            <div className={styles.scopeGrid}>
              {scopeItems.map(([number, title, detail]) => (
                <article className={styles.scopeCard} key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{detail}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`}>
          <div className={styles.container}>
            <div className={styles.splitHeading}>
              <SectionHeading eyebrow="07 · Built for the application" title="Features that stay useful after installation">
                A well-matched RO system balances membrane protection, operational clarity and maintainable construction with the site’s actual water conditions.
              </SectionHeading>
              <div className={styles.applicationCallout}><ShieldCheck size={21} /><strong>Design / Supply / Installation / AMC</strong><span>Available as defined in the approved project scope.</span></div>
            </div>
            <div className={styles.featureApplicationGrid}>
              <article className={styles.featurePanel}><h3>Key features</h3><ul>{features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul></article>
              <article className={styles.applicationPanel}><h3>Applications</h3><div className={styles.applicationList}>{applications.map((application) => <span key={application}><Factory size={15} />{application}</span>)}</div></article>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`} id="faq">
          <div className={styles.container}>
            <SectionHeading eyebrow="08 · Frequently asked questions" title="RO plant questions, answered clearly" />
            <div className={styles.faqList}>
              {faqs.map(([question, answer]) => <details className={styles.faqItem} key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaGrid}>
              <div><span className={styles.eyebrow}>09 · Start with your water report</span><h2>Let’s size the right RO plant for your application.</h2><p>Share your required permeate flow, feed-water analysis and end use. AQUEN can prepare a project-specific configuration and quotation.</p><div className={styles.ctaChecklist}><span><Check size={16} />Capacity and operating hours</span><span><Check size={16} />Feed-water test report</span><span><Check size={16} />Preferred MOC and controls</span><span><Check size={16} />Permeate and reject requirements</span></div></div>
              <div className={styles.ctaCard}><span>Talk to AQUEN</span><strong>AQUEN Fluid Technologies LLP</strong><a href="tel:+919622554445">+91 962255 4445 <ArrowRight size={15} /></a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com <ArrowRight size={15} /></a><Link className={styles.ctaButton} href="/contact">Request a Quote <ArrowRight size={16} /></Link></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
