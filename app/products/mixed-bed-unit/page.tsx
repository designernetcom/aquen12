import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Droplets,
  Gauge,
  Layers3,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mixed Bed Unit (MBU) | High Purity Water Treatment",
  description:
    "Mixed Bed Unit for high-purity water polishing using cation and anion exchange resins, with industrial vessel configurations and regeneration systems.",
};

const technical = [
  ["Type of Unit", "Pressure vessel type – Downflow operation"],
  ["Service Flow Rate", "15 – 30 BV/h (Bed Volumes per hour)"],
  ["Regeneration Flow Rate", "2 – 5 BV/h"],
  ["Cation:Anion Resin Ratio", "40:60 (by volume)"],
  ["Resin Type", "Strong Acid Cation (SAC) + Strong Base Anion (SBA Type I)"],
  ["Resin Exchange Capacity", "SAC: 1.8 eq/L, SBA: 1.2 eq/L"],
  ["Regenerants", "HCl / H₂SO₄ for cation; NaOH for anion"],
  ["Operating Pressure", "2 – 5 kg/cm²"],
  ["Operating Temperature", "Ambient (25–40°C)"],
  ["Treated Water Conductivity", "< 0.1 µS/cm"],
  ["Silica Leakage", "< 0.02 ppm"],
  [
    "Regeneration Frequency",
    "After every 1,000 – 2,000 BV (depending on feed quality)",
  ],
];
const construction = [
  {
    title: "Mild Steel (MS) Rubber Lined Vessel",
    rows: [
      ["Material", "MS (IS 2062 Gr. A)"],
      ["Internal Lining", "Hard rubber lining (3–5 mm) or epoxy coating"],
      ["External Coating", "Epoxy primer with PU top coat"],
      ["Design Pressure", "Up to 6 kg/cm²"],
      ["Thickness", "5–8 mm"],
      ["Supports", "Skirt / leg supports"],
      [
        "Advantages",
        "Cost-effective, strong, suitable for industrial applications",
      ],
      [
        "Limitations",
        "Requires periodic lining inspection; limited corrosion resistance",
      ],
    ],
  },
  {
    title: "FRP (Fiberglass Reinforced Plastic) Vessel",
    rows: [
      ["Material", "FRP with thermoplastic liner (PP / PVC / PVDF)"],
      ["Liner Thickness", "3 – 5 mm"],
      ["External Reinforcement", "Filament wound FRP shell"],
      ["Design Pressure", "Up to 4 kg/cm²"],
      ["Advantages", "Corrosion-resistant, light weight, maintenance-free"],
      [
        "Limitations",
        "Not suitable for high-temperature or very high-pressure service",
      ],
      ["Applications", "Medium-scale DM plants and outdoor installations"],
    ],
  },
  {
    title: "Stainless Steel (SS) Vessel",
    rows: [
      ["Material", "SS 304 / SS 316 / SS 316L"],
      ["Surface Finish", "Mirror polished internal and external (Ra < 1 µm)"],
      ["Design Pressure", "Up to 6 kg/cm²"],
      [
        "Advantages",
        "Long service life, excellent corrosion resistance, suitable for high-purity water",
      ],
      ["Limitations", "Higher initial cost"],
      [
        "Applications",
        "Pharma, power, electronics, and ultrapure water systems",
      ],
    ],
  },
];
const design5 = [
  ["Capacity", "5 m³/hr (Design)"],
  ["Operation Hours", "10 Hrs/Day"],
  ["Raw Water TDS", "1000 ppm"],
  ["Hardness (as CaCO₃)", "400 ppm"],
  ["pH Range", "6.5 – 8.5"],
  ["Temperature", "5 – 45 °C"],
  ["Resin Type", "Mixed Bed Resin"],
  ["Vessel Type", "MSEP (Mild Steel)"],
  ["Vessel Internal Lining", "Epoxy + FRP Lining"],
  ["Vessel Internal", "Glass / FRP"],
  ["Regeneration Type", "HCl + NaOH Solution"],
  ["Regeneration Cycle", "10 Hrs"],
  ["Total Connected Load", "4.5 kW (Approx.)"],
  ["Area Required", "20 ft (L) × 12 ft (W) × 10 ft (H)"],
];
const regeneration5 = [
  ["Regeneration Type", "HCl + NaOH Solution"],
  ["Regeneration Tank Capacity", "500 Liters (Each)"],
  ["Service Flow Rate", "5 m³ / Hr"],
  ["Backwash Water", "1.5 m³"],
  ["Slow Rinse Water", "1.0 m³"],
  ["Fast Rinse Water", "1.0 m³"],
  ["Total Water Consumption", "3.5 m³ / Cycle"],
  ["HCl Consumption", "20 – 25 L / Cycle"],
  ["NaOH Consumption", "20 – 25 L / Cycle"],
];
const pumps5 = [
  ["Raw Water Pump", "Raw Water Transfer", "5 m³/Hr", "20 m", "1.1 kW"],
  ["Backwash Pump", "Backwash Service", "5 m³/Hr", "18 m", "1.1 kW"],
  [
    "Dosing Pumps (HCl + NaOH)",
    "Chemical Dosing",
    "20 LPH",
    "10 m (Each)",
    "—",
  ],
];
const electric5 = [
  ["Raw Water Pump", "1.1", "1", "1.1"],
  ["Backwash Pump", "1.1", "1", "1.1"],
  ["Dosing Pumps (HCl + NaOH)", "0.2", "2", "0.4"],
  ["Control Panel & Aux.", "0.2", "1", "0.2"],
  ["Total Connected Load", "–", "–", "2.8 kW"],
  ["Total Demand Load (With Factor)", "–", "–", "4.5 kW"],
];
const equipment5 = [
  ["1", "Mixed Bed Pressure Vessel (Mild Steel)", "MS with Glass Lining", "1"],
  ["2", "Raw Water Pump", "CI / SS", "1"],
  ["3", "Backwash Pump", "CI / SS", "1"],
  ["4", "Acid Tank (HCl)", "HDPE", "1"],
  ["5", "Caustic Tank (NaOH)", "HDPE", "1"],
  ["6", "Dosing Pumps (HCl + NaOH)", "PP / PVDF", "2"],
  ["7", "Interconnecting Piping", "MS", "Lot"],
  ["8", "Butterfly Valves", "CI / DI", "6"],
  ["9", "Control Panel", "Auto / Manual", "1"],
  ["10", "Instrumentation", "As Per Scope", "Lot"],
];
const boq5 = [
  ["1", "Mixed Bed Pressure Vessel", "Mild Steel with Glass Lining", "1 No."],
  ["2", "Raw Water Pump", "5 m³/Hr @ 20 m", "1 No."],
  ["3", "Backwash Pump", "5 m³/Hr @ 18 m", "1 No."],
  ["4", "Acid Tank", "500 Ltrs (HDPE)", "1 No."],
  ["5", "Caustic Tank", "500 Ltrs (HDPE)", "1 No."],
  ["6", "Dosing Pumps", "PP / PVDF", "2 Nos."],
  ["7", "Butterfly Valve", "65 NB / CI", "6 Nos."],
  ["8", "Piping & Fittings", "MS / GI", "Lot"],
  ["9", "Control Panel", "Auto / Manual", "1 No."],
  ["10", "Instrumentation", "As Per Scope", "Lot"],
];
const design10 = [
  ["Flow Rate", "10 m³/hr"],
  ["Vessel Diameter", "800 mm"],
  ["Vessel Height", "2500 mm"],
  ["Cation Resin Qty", "100 Ltrs"],
  ["Anion Resin Qty", "150 Ltrs"],
  ["Resin Type", "SAC (H⁺ form) + SBA (OH⁻ form)"],
  ["Regenerant", "4% HCl and 4% NaOH"],
  ["Air Mixing Time", "10–15 min"],
  ["Outlet Conductivity", "<0.1 µS/cm"],
  ["Silica Leakage", "<0.02 ppm"],
];

function Table({
  rows,
  headers = ["Parameter", "Specification"],
}: {
  rows: string[][];
  headers?: string[];
}) {
  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={styles.sectionHeading}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export default function MixedBedUnitPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            {/* <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/products/mixed-bed-unit">Products</Link>
              <span>/</span>
              <strong>Mixed Bed Unit</strong>
            </div> */}
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>
                  AQUEN product system · MBU
                </span>
                <h1>
                  Mixed Bed Unit <em>(MBU)</em>
                </h1>
                <h2>High Purity Water Polishing System</h2>
                <p>
                  A final polishing stage for de-mineralized water treatment
                  plants, combining cation and anion exchange resins in one
                  pressure vessel to produce ultra-pure water with very low
                  conductivity and silica levels.
                </p>
                <div className={styles.heroActions}>
                  <Link className={styles.primaryButton} href="/contact">
                    Discuss your water system <ArrowRight size={17} />
                  </Link>
                  <a
                    className={styles.textButton}
                    href="#technical-specifications"
                  >
                    Explore specifications <ArrowRight size={15} />
                  </a>
                </div>
                <div className={styles.heroMetrics}>
                  <div>
                    <strong>&lt; 0.1</strong>
                    <span>µS/cm conductivity</span>
                  </div>
                  <div>
                    <strong>40:60</strong>
                    <span>resin ratio by volume</span>
                  </div>
                  <div>
                    <strong>2–5</strong>
                    <span>kg/cm² pressure</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroVisual}>
              
                <div className={styles.heroVisualMedia}>
                  <Image
                    src="/mixed-bed-unit.png"
                    alt="Mixed Bed Unit with supporting gravel technical configuration"
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
        <section className={`${styles.section} ${styles.overview}`}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="01 · Product overview"
              title="The final polish for high-purity water"
            >
              AQUEN Mixed Bed Polishers bring the final level of ionic purity to
              DM water treatment.
            </SectionHeading>
            <div className={styles.twoCol}>
              <div className={styles.prose}>
                <p>
                  A Mixed Bed Polisher (MB Unit) is the final stage in a
                  De-Mineralized (DM) Water Treatment Plant, used to produce
                  ultra-pure water with very low conductivity and silica levels.
                </p>
                <p>
                  It consists of a single pressure vessel containing a mixture
                  of cation and anion exchange resins in a specific ratio,
                  typically <strong>40:60 by volume</strong>. The Mixed Bed Unit
                  performs polishing of the DM water obtained from the primary
                  cation and anion exchangers, ensuring high purity suitable for
                  high-pressure boiler feed, pharmaceutical, and semiconductor
                  applications.
                </p>
                <div className={styles.featureList}>
                  <div>
                    <Droplets size={19} />
                    <span>
                      <strong>Ultra-pure output</strong>
                      <small>Conductivity typically &lt; 0.1 µS/cm</small>
                    </span>
                  </div>
                  <div>
                    <Layers3 size={19} />
                    <span>
                      <strong>One compact vessel</strong>
                      <small>Cation and anion resins in one column</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.cardLabel}>System principle</span>
                <h3>
                  Two resin functions.
                  <br />
                  One polished stream.
                </h3>
                <p>
                  Residual ionic impurities and silica traces left after the
                  primary anion unit are removed before the water reaches its
                  final use.
                </p>
                <div className={styles.cardRule} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.gallery}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="02 · System design"
              title="Engineered around the vessel"
            >
              Two supplied configurations show the Mixed Bed Unit, resin bed and
              supporting process equipment.
            </SectionHeading>
            <div className={styles.galleryGrid}>
              <figure>
                <div>
                  <Image
                    src="/mixed-bed-supporting-gravel.png"
                    alt="Mixed Bed Unit with supporting gravel"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
                <figcaption>
                  <strong>Mixed Bed Unit with Supporting Gravel</strong>
                  <span>Resin and support-gravel configuration</span>
                </figcaption>
              </figure>
              <figure>
                <div>
                  <Image
                    src="/mixed-bed-msep-vessel.png"
                    alt="Mixed Bed Unit in MSEP vessel"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
                <figcaption>
                  <strong>Mixed Bed Unit – MSEP Vessel Configuration</strong>
                  <span>5 m³/hr process and piping flow diagram</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section
          id="principle-of-operation"
          className={`${styles.section} ${styles.darkSection}`}
        >
          <div className={styles.container}>
            <SectionHeading
              eyebrow="03 · How it works"
              title="Principle of Operation"
            >
              Cation and anion exchange work together inside a single mixed
              resin column.
            </SectionHeading>
            <div className={styles.operationGrid}>
              <div className={styles.operationCard}>
                <span>01</span>
                <h3>Cation exchange</h3>
                <p>
                  The cation resin is in H⁺ form and removes positively charged
                  ions from the water.
                </p>
                <code>Residual cations → H⁺ form resin</code>
              </div>
              <div className={styles.operationCard}>
                <span>02</span>
                <h3>Anion exchange</h3>
                <p>
                  The anion resin is in OH⁻ form and removes negatively charged
                  ions and silica traces.
                </p>
                <code>Residual anions → OH⁻ form resin</code>
              </div>
              <div className={styles.operationCard}>
                <span>03</span>
                <h3>Pure water</h3>
                <p>
                  The released H⁺ and OH⁻ ions combine to form pure water (H₂O).
                </p>
                <code>H⁺ + OH⁻ → H₂O</code>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="04 · Process description"
              title="From DM water to final polish"
            />
            <div className={styles.processSteps}>
              {[
                [
                  "01",
                  "Feed Water",
                  "Demineralized water from the Anion Exchanger enters the Mixed Bed unit from the top.",
                ],
                [
                  "02",
                  "Service Cycle",
                  "Water flows downward through the mixed resin bed, where cation and anion resins together remove any remaining ions.",
                ],
                [
                  "03",
                  "Treated Water",
                  "Ultra-pure water is collected at the outlet (bottom) with conductivity typically < 0.1 µS/cm and silica < 0.02 ppm.",
                ],
                [
                  "04",
                  "Exhaustion",
                  "Over time, the resins become exhausted and lose their ion exchange capacity. The unit must then undergo regeneration.",
                ],
              ].map(([number, title, text]) => (
                <div key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.regeneration}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="05 · Regeneration"
              title="Mixed Bed Regeneration Process"
            >
              Both resins are separated before chemical regeneration and mixed
              again for the next service cycle.
            </SectionHeading>
            <div className={styles.regenerationGrid}>
              {[
                [
                  "01",
                  "Backwash / Resin Separation",
                  "Water is passed upward through the bed at a controlled rate. Due to density difference, cation resin settles below while anion resin rises above. A separation interface forms between them.",
                ],
                [
                  "02",
                  "Cation Regeneration",
                  "Acid (HCl or H₂SO₄) is passed through the cation resin section. Converts the resin to H⁺ form.",
                ],
                [
                  "03",
                  "Anion Regeneration",
                  "Caustic soda (NaOH) is passed through the anion resin section. Converts the resin to OH⁻ form.",
                ],
                [
                  "04",
                  "Slow Rinse",
                  "Each resin bed is rinsed slowly to remove residual chemicals.",
                ],
                [
                  "05",
                  "Fast Rinse",
                  "Rapid water rinse to flush out remaining regenerant and neutralize the bed.",
                ],
                [
                  "06",
                  "Resin Mixing",
                  "Both resins are mixed using compressed air or water agitation to ensure uniform distribution for the next service cycle.",
                ],
                [
                  "07",
                  "Ready for Service",
                  "The unit is then rinsed to ensure outlet conductivity and pH meet specifications before returning to service.",
                ],
              ].map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="technical-specifications" className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="06 · Performance"
              title="Technical Specifications"
            >
              Typical range and specification for the Mixed Bed Unit.
            </SectionHeading>
            <div className={styles.tableIntro}>
              <span>
                <Gauge size={16} /> Engineering reference
              </span>
              <small>Values shown as supplied in the technical document</small>
            </div>
            <Table rows={technical} />
          </div>
        </section>
        <section className={styles.construction}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="07 · Vessel selection"
              title="Construction Options"
            >
              Select a vessel construction based on pressure, corrosion
              resistance, temperature, and water purity requirements.
            </SectionHeading>
            <div className={styles.constructionGrid}>
              {construction.map((option) => (
                <article key={option.title}>
                  <div className={styles.constructionHead}>
                    <Wrench size={18} />
                    <h3>{option.title}</h3>
                  </div>
                  <Table rows={option.rows} />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.dataBanner}>
              <div>
                <span className={styles.eyebrow}>
                  08 · Drawing configuration
                </span>
                <h2>Mixed Bed Unit – 5 m³/Hr</h2>
                <p>
                  Design data reproduced from the supplied technical drawings.
                  This configuration is separate from the 10 m³/hr DOCX example
                  below.
                </p>
              </div>
              <Gauge size={45} />
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Basic Design Data</h3>
                <Table rows={design5} />
              </article>
              <article>
                <h3>Regeneration Details &amp; Water Consumption Per Cycle</h3>
                <Table rows={regeneration5} />
              </article>
            </div>
            <div className={`${styles.dataGrid} ${styles.two}`}>
              <article>
                <h3>Pump Design Data</h3>
                <Table
                  rows={pumps5}
                  headers={["Pump", "Service", "Capacity", "Head", "Power"]}
                />
              </article>
              <article>
                <h3>Electric Load (Approx.)</h3>
                <Table
                  rows={electric5}
                  headers={["Equipment", "Power (kW)", "Qty.", "Total (kW)"]}
                />
              </article>
            </div>
            <div className={`${styles.dataGrid} ${styles.two}`}>
              <article>
                <h3>Area Covered</h3>
                <Table
                  rows={[
                    ["Length", "20 ft"],
                    ["Width", "12 ft"],
                    ["Height", "10 ft"],
                    ["Total Area", "240 ft²"],
                  ]}
                />
              </article>
              <article>
                <h3>Drawing notes</h3>
                <ul className={styles.noteList}>
                  <li>
                    All dimensions are indicative. Final may change as per site
                    conditions.
                  </li>
                  <li>Design as per standard water treatment practices.</li>
                  <li>Subject to technical change without prior notice.</li>
                  <li>Area may vary as per site condition.</li>
                </ul>
              </article>
            </div>
            <div className={`${styles.dataGrid} ${styles.two}`}>
              <article>
                <h3>Equipment List</h3>
                <Table
                  rows={equipment5}
                  headers={["Sr. No.", "Equipment", "MOC", "Qty."]}
                />
              </article>
              <article>
                <h3>Bill of Quantities</h3>
                <Table
                  rows={boq5}
                  headers={["Sr. No.", "Description", "Specification", "Qty."]}
                />
              </article>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.exampleBanner}>
              <span className={styles.eyebrow}>09 · DOCX example</span>
              <h2>Typical Design Data (Example – 10 m³/hr DM Plant)</h2>
              <p>
                This typical example is intentionally kept separate from the 5
                m³/hr drawing configuration.
              </p>
            </div>
            <Table rows={design10} />
          </div>
        </section>
        <section className={`${styles.section} ${styles.benefits}`}>
          <div className={styles.container}>
            <SectionHeading eyebrow="10 · Why Mixed Bed" title="Advantages" />
            <div className={styles.benefitGrid}>
              {[
                "Produces ultra-pure water with extremely low conductivity and silica.",
                "Compact design — both ion exchange reactions in a single vessel.",
                "Ideal for final polishing in DM and EDI systems.",
                "Fully automatic or manual operation available.",
                "Low regeneration chemical consumption compared to twin-bed systems.",
              ].map((item) => (
                <div key={item}>
                  <Check size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className={styles.applications}>
              <div>
                <SectionHeading
                  eyebrow="11 · Where it is used"
                  title="Applications"
                />
              </div>
              <ul>
                {[
                  "High-pressure boiler feed water",
                  "Power plants and turbine condensate polishing",
                  "Semiconductor and microelectronics industries",
                  "Pharmaceutical and biotech process water",
                  "Laboratory and analytical grade water production",
                ].map((item) => (
                  <li key={item}>
                    <ShieldCheck size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.notes}>
          <div className={styles.container}>
            <div className={styles.notesPanel}>
              <div>
                <span className={styles.eyebrow}>12 · Technical care</span>
                <h2>Operating Notes</h2>
              </div>
              <ul>
                {[
                  "Ensure feed water has conductivity <10 µS/cm for effective polishing.",
                  "Proper resin separation during regeneration is critical for quality.",
                  "Avoid air leakage into the system to prevent resin oxidation.",
                  "Always rinse until outlet conductivity stabilizes before putting into service.",
                  "Periodically analyze resin condition for organic fouling or silica loading.",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
