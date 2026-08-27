import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Gauge,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "../mixed-bed-unit/page.module.css";

export const metadata: Metadata = {
  title: "Anion Exchange Unit | DM Water Treatment System",
  description:
    "Anion Exchange Unit for removal of negatively charged ions using anion exchange resin for DM plants and industrial high-purity water treatment systems.",
};

const resinTypes = [
  [
    "Weak Base Anion (WBA)",
    "Removes strong acids (HCl, H₂SO₄); does not remove weak acids like silica or CO₂",
    "For partial demineralization or with degasser",
  ],
  [
    "Strong Base Anion (SBA)",
    "Removes both strong and weak acids, including silica",
    "For full demineralization systems",
  ],
];
const technical = [
  ["Type of Resin", "Strong Base Anion (Type I or II) – OH⁻ form"],
  ["Matrix", "Cross-linked polystyrene with divinylbenzene"],
  ["Functional Group", "Quaternary ammonium (-N⁺(CH₃)₃)"],
  ["Total Exchange Capacity", "1.0 – 1.4 eq/L (wet basis)"],
  ["Moisture Content", "45 – 55%"],
  ["Operating pH Range", "0 – 14"],
  ["Service Flow Rate", "10 – 40 BV/h (Bed Volumes per hour)"],
  ["Regeneration Flow Rate", "2 – 6 BV/h"],
  ["Regenerant", "NaOH (4%)"],
  ["Operating Temperature", "Up to 60°C"],
  ["Operating Pressure", "2 – 6 bar"],
  ["Effluent Conductivity", "<10 µS/cm (after Anion)"],
  ["Effluent pH", "6.5 – 7.5"],
  ["Silica Leakage", "<0.1 ppm (typically)"],
];
const construction = [
  {
    title: "Mild Steel (MS) Rubber Lined Vessel",
    rows: [
      ["Material", "Mild Steel (IS 2062)"],
      ["Internal Lining", "Hard rubber lining (3–5 mm) or epoxy coating"],
      ["External Coating", "Epoxy primer with polyurethane finish"],
      ["Thickness", "5–8 mm (as per design pressure)"],
      ["Design Pressure", "Up to 6 kg/cm²"],
      ["Support", "MS legs or skirt support"],
      ["Manhole", "Provided for inspection and resin loading"],
      ["Advantages", "Economical and durable for industrial applications"],
      [
        "Limitations",
        "Requires maintenance; not ideal for outdoor or corrosive environments",
      ],
    ],
  },
  {
    title: "FRP (Fiberglass Reinforced Plastic) Vessel",
    rows: [
      ["Material", "FRP with thermoplastic liner (PP / PVC / PVDF)"],
      ["Liner Thickness", "3 – 5 mm"],
      ["External Reinforcement", "Filament-wound fiberglass"],
      ["Design Pressure", "Up to 4 kg/cm²"],
      ["Advantages", "Corrosion resistant, lightweight, maintenance-free"],
      [
        "Limitations",
        "Not suitable for very high pressures or high temperatures (>60°C)",
      ],
      ["Applications", "Medium-capacity DM plants, outdoor installations"],
    ],
  },
  {
    title: "Stainless Steel (SS) Vessel",
    rows: [
      ["Material", "SS 304 / SS 316 / SS 316L"],
      [
        "Surface Finish",
        "Polished internal & external surface (Ra < 1.0 µm for hygienic use)",
      ],
      ["Design Pressure", "Up to 6 kg/cm²"],
      [
        "Advantages",
        "Long life, corrosion-free, suitable for high-purity and pharmaceutical applications",
      ],
      ["Limitations", "Higher cost compared to FRP and MS vessels"],
      [
        "Applications",
        "Pharma, biotech, food & beverage, high-purity water systems",
      ],
    ],
  },
];
const msepBasic = [
  ["Capacity", "5 m³/hr (Design)"],
  ["Operation Hours", "10 Hrs / Day"],
  ["Raw Water TDS", "1000 ppm"],
  ["Hardness (as CaCO₃)", "400 ppm"],
  ["pH Range", "6.5 – 8.5"],
  ["Temperature", "5 – 45 °C"],
  ["Resin Type", "Strong Base Anion Resin"],
  ["Vessel Type", "MSEP (Mild Steel)"],
  ["Regeneration Type", "Sodium Hydroxide (NaOH)"],
  ["Regeneration Cycle", "10 Hrs"],
  ["Total Connected Load", "5.0 kW (Approx.)"],
  ["Area Required", "20 ft (L) × 12 ft (W) × 10 ft (H)"],
];
const msepRegen = [
  ["Regeneration Type", "Sodium Hydroxide (NaOH)"],
  ["Regeneration Tank Capacity", "500 Liters"],
  ["Service Flow Rate", "5 m³ / Hr"],
  ["Backwash Water", "1.5 m³"],
  ["Brine Preparation Water", "0.5 m³"],
  ["Slow Rinse Water", "1.0 m³"],
  ["Fast Rinse Water", "1.0 m³"],
  ["Total Water Consumption", "4.0 m³ / Cycle"],
  ["NaOH Consumption", "25 – 30 Kg / Cycle"],
];
const msepPumps = [
  ["Raw Water Pump", "Raw Water Transfer", "5 m³ / Hr", "20 m", "1.1 kW"],
  ["Backwash Pump", "Backwash Service", "5 m³ / Hr", "18 m", "1.1 kW"],
];
const msepElectric = [
  ["Raw Water Pump", "1.1", "1", "1.1"],
  ["Backwash Pump", "1.1", "1", "1.1"],
  ["Control Panel & Aux.", "0.3", "1", "0.3"],
  ["Total Connected Load", "–", "–", "2.5 kW"],
  ["Total Demand Load (With Factor)", "–", "–", "5.0 kW"],
];
const msepArea = [
  ["Length", "20 ft"],
  ["Width", "12 ft"],
  ["Height", "10 ft"],
  ["Total Area", "240 ft²"],
];
const msepEquipment = [
  ["1", "Anion Pressure Vessel (Mild Steel)", "MS", "1"],
  ["2", "Raw Water Pump", "CI / SS", "1"],
  ["3", "Backwash Pump", "CI / SS", "1"],
  ["4", "Regeneration Tank", "Mild Steel", "1"],
  ["5", "Interconnecting Piping", "MS", "Lot"],
  ["6", "Butterfly Valves", "CI / DI", "6"],
  ["7", "Control Panel", "Auto / Manual", "1"],
  ["8", "Instrumentation", "As per Scope", "Lot"],
];
const msepBoq = [
  ["1", "Anion Pressure Vessel", "Mild Steel", "1 No."],
  ["2", "Raw Water Pump", "5 m³ / Hr @ 20 m", "1 No."],
  ["3", "Backwash Pump", "5 m³ / Hr @ 18 m", "1 No."],
  ["4", "Regeneration Tank", "500 Ltrs (Mild Steel)", "1 No."],
  ["5", "Butterfly Valves", "65 NB / CI", "6 Nos."],
  ["6", "Piping & Fittings", "MS / GI", "Lot"],
  ["7", "Control Panel", "Auto / Manual", "1 No."],
  ["8", "Instrumentation", "As per Scope", "Lot"],
];
const dualBasic = [
  ["Capacity", "5 m³/hr"],
  ["Operating Hours", "20 hrs/day"],
  ["Raw Water Type", "Treated Water / DM water Feed"],
  ["Max. TDS", "< 2000 ppm"],
  ["pH Range", "6.5 – 8.5"],
  ["Temperature", "5 – 45 °C"],
  ["Inlet Pressure", "2.0 – 3.0 kg/cm²"],
  ["Operating Pressure", "2.5 – 3.5 kg/cm²"],
  ["Type of System", "Anion Exchange Filtration"],
  ["Vessel Material", "FRP / MSEP (MSRL)"],
  ["Valve Type", "Multiport Valve / Butterfly Valve"],
  ["Regeneration Type", "Automatic / Manual"],
  ["Regeneration Chemical", "NaOH"],
  ["Control Panel", "PLC Based / Relay Based"],
];
const dualRegen = [
  ["Regeneration Chemical", "NaOH (Sodium Hydroxide)"],
  ["NaOH Concentration", "4 – 6%"],
  ["Regeneration Time", "60 – 75 min"],
  ["Service Flow", "5.0 m³/hr"],
  ["Backwash", "1.5 m³"],
  ["Rinse", "1.0 m³"],
  ["NaOH Draw & Slow Rinse", "1.0 m³"],
  ["Fast Rinse", "1.0 m³"],
  ["Total Water Consumption", "4.5 m³ Per Regeneration"],
  ["Regeneration Tank Capacity", "500 Ltr."],
];
const dualPumps = [
  ["Raw Water Pump", "5.0 m³/hr", "15 – 20 mtrs", "Centrifugal", "1.0 HP"],
  ["Backwash Pump", "6.0 m³/hr", "15 – 20 mtrs", "Centrifugal", "1.5 HP"],
];
const dualElectric = [
  ["Raw Water Pump", "1.0", "1", "1.0", "0.75"],
  ["Backwash Pump", "1.5", "1", "1.5", "1.10"],
  ["Control Panel", "0.5", "1", "0.5", "0.37"],
  ["Multiport Valve Actuator", "0.1", "2", "0.2", "0.15"],
  ["Total Connected Load", "3.2 HP", "–", "–", "2.37 kW"],
];
const dualArea = [
  ["System Footprint", "3.5 × 1.5"],
  ["Regeneration Tank Area", "1.0 × 1.5"],
  ["Panel Area", "1.0 × 0.6"],
  ["Total Area Required", "5.5 × 3.0"],
  ["Total Area Covered", "~16.5 m²"],
];
const dualEquipment = [
  [
    "1",
    "Anion Exchange Vessel",
    "FRP / MSEP",
    "Dia: 1000 mm, Ht: 2200 mm",
    "2",
    "Nos.",
  ],
  ["2", "Multiport Valve", "CI / FRP", "Automatic, 65 NB", "2", "Nos."],
  ["3", "Raw Water Pump", "CI / SS", "5.0 m³/hr @ 20 mtr Head", "1", "No."],
  ["4", "Backwash Pump", "CI / SS", "6.0 m³/hr @ 20 mtr Head", "1", "No."],
  ["5", "Regeneration Tank", "HDPE", "500 Ltr.", "1", "No."],
  ["6", "Piping", "UPVC / SS", "As per P&ID", "1", "Lot"],
  ["7", "Butterfly Valves", "CI / UPVC", "65 NB", "10", "Nos."],
  ["8", "Check Valve", "CI / UPVC", "65 NB", "4", "Nos."],
  ["9", "Pressure Gauge", "SS", "0 – 6 kg/cm²", "4", "Nos."],
  ["10", "Sampling Valve", "SS / UPVC", "15 NB", "4", "Nos."],
  ["11", "Control Panel", "M.S.", "PLC Based (Optional)", "1", "No."],
  ["12", "Level Switch", "PP / SS", "For Regeneration Tank", "2", "Nos."],
  [
    "13",
    "Misc. Fittings",
    "UPVC / SS",
    "Elbows, Tees, Unions, etc.",
    "1",
    "Lot",
  ],
];
const typical10 = [
  ["Flow Rate", "10 m³/hr"],
  ["Vessel Diameter", "750 mm"],
  ["Vessel Height", "2000 mm"],
  ["Resin Quantity", "300 – 350 Ltrs"],
  ["Resin Type", "SBA Type I – OH⁻ form"],
  ["Service Flow", "20 BV/h"],
  ["Regeneration", "4% NaOH (2 BV)"],
  ["Outlet Conductivity", "<10 µS/cm"],
  ["Silica Leakage", "<0.1 ppm"],
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
function Heading({
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

export default function AnionExchangeUnitPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            {/* <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/products/anion-exchange-unit">Products</Link>
              <span>/</span>
              <strong>Anion Exchange Unit</strong>
            </div> */}
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>
                  AQUEN product system · anion exchange
                </span>
                <h1>
                  Anion Exchange <em>Unit</em>
                </h1>
                <h2>Strong Base Anion Exchange System</h2>
                <p>
                  A critical DM water treatment stage installed after the
                  Degasser Unit, removing negatively charged ions with anion
                  exchange resin before final polishing in the Mixed Bed Unit.
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
                    <strong>5 m³/hr</strong>
                    <span>drawing configurations</span>
                  </div>
                  <div>
                    <strong>OH⁻ form</strong>
                    <span>anion resin exchange</span>
                  </div>
                  <div>
                    <strong>&lt;10</strong>
                    <span>µS/cm after anion</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                  <div className={styles.heroVisualMedia}>
                <Image
                  src="/anionexchangeUnit.png"
                  alt="Anion Exchange Unit dual vessel 5000 LPH technical configuration"
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
            <Heading
              eyebrow="01 · Product overview"
              title="The anion stage after degassing"
            >
              The Anion Exchange Unit removes negatively charged ions from water
              using Strong Base Anion or Weak Base Anion exchange resins.
            </Heading>
            <div className={styles.twoCol}>
              <div className={styles.prose}>
                <p>
                  The Anion Exchange Unit is a critical stage of a
                  De-Mineralized (DM) Water Treatment Plant, installed after the
                  Degasser Unit. Its primary function is to remove negatively
                  charged ions (anions) such as chlorides (Cl⁻), sulfates
                  (SO₄²⁻), nitrates (NO₃⁻), bicarbonates (HCO₃⁻), and silica
                  (SiO₂) from water using Strong Base Anion (SBA) or Weak Base
                  Anion (WBA) exchange resins.
                </p>
                <p>
                  The treated water from the anion exchanger has very low
                  conductivity and neutral pH, making it suitable for
                  high-purity applications such as boiler feed, pharmaceutical
                  production, and process water.
                </p>
                <div className={styles.featureList}>
                  <div>
                    <Check size={19} />
                    <span>
                      <strong>Negative-ion removal</strong>
                      <small>
                        Chlorides, sulfates, nitrates, bicarbonates and silica
                      </small>
                    </span>
                  </div>
                  <div>
                    <ShieldCheck size={19} />
                    <span>
                      <strong>DM water pathway</strong>
                      <small>
                        Feeds the Mixed Bed Polisher for final purification
                      </small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.cardLabel}>System principle</span>
                <h3>
                  Anions out.
                  <br />
                  OH⁻ ions in.
                </h3>
                <p>
                  Negatively charged ions are exchanged with hydroxide ions on
                  the resin. The released OH⁻ combines with H⁺ from the Cation
                  Exchange Unit to form pure water.
                </p>
                <div className={styles.cardRule} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.gallery}>
          <div className={styles.container}>
            <Heading
              eyebrow="02 · Product configurations"
              title="Two 5 m³/hr vessel configurations"
            >
              The supplied drawings describe separate anion-unit configurations.
              Their design data remains separated below.
            </Heading>
            <div className={styles.galleryGrid}>
              <figure>
                <div>
                  <Image
                    src="/anion-msep-5000-lph.png"
                    alt="Anion Unit MSEP mild steel pressure vessel configuration"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <figcaption>
                  <strong>
                    Anion Unit – MSEP Pressure Vessel Configuration
                  </strong>
                  <span>5 m³/hr MSEP mild steel configuration</span>
                </figcaption>
              </figure>
              <figure>
                <div>
                  <Image
                    src="/anion-dual-vessel-5000-lph.png"
                    alt="Anion Unit dual vessel 5000 LPH configuration"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <figcaption>
                  <strong>
                    Anion Unit – Dual Vessel 5000 LPH Configuration
                  </strong>
                  <span>Two-vessel alternating service configuration</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.container}>
            <Heading eyebrow="03 · How it works" title="Principle of Operation">
              The anion exchanger exchanges negatively charged ions with
              hydroxide ions present on the resin.
            </Heading>
            <div className={styles.operationGrid}>
              <div className={styles.operationCard}>
                <span>01</span>
                <h3>Feed from degasser</h3>
                <p>
                  Degassed water from the Degasser Unit enters the top of the
                  anion vessel.
                </p>
                <code>Degasser → Anion vessel</code>
              </div>
              <div className={styles.operationCard}>
                <span>02</span>
                <h3>Ion exchange</h3>
                <p>
                  Anions in the water are exchanged with hydroxide ions (OH⁻) on
                  the resin.
                </p>
                <code>Anions ⇄ OH⁻ form resin</code>
              </div>
              <div className={styles.operationCard}>
                <span>03</span>
                <h3>DM water output</h3>
                <p>
                  The released OH⁻ ions combine with H⁺ from the Cation Exchange
                  Unit to form pure water.
                </p>
                <code>H⁺ + OH⁻ → H₂O</code>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <Heading
              eyebrow="04 · Process and regeneration"
              title="From feed water to restored resin"
            />
            <div className={styles.processSteps}>
              {[
                [
                  "01",
                  "Feed Water",
                  "Degassed water from the Degasser Unit enters the top of the anion vessel.",
                ],
                [
                  "02",
                  "Service Flow (Downflow)",
                  "Water flows through the anion resin bed, where anions are exchanged with hydroxide ions.",
                ],
                [
                  "03",
                  "Treated Water Collection",
                  "De-mineralized water with very low ionic content exits from the bottom and proceeds to the Mixed Bed Polisher.",
                ],
                [
                  "04",
                  "Resin Exhaustion",
                  "The resin becomes saturated with anions and loses exchange capacity. It is then regenerated using sodium hydroxide solution.",
                ],
                [
                  "05",
                  "Backwash",
                  "Suspended solids are removed and the resin bed is classified.",
                ],
                [
                  "06",
                  "Chemical Injection",
                  "Downflow NaOH dosing (typically 4%) is used for ion replacement.",
                ],
                [
                  "07",
                  "Slow Rinse",
                  "Regenerant is pushed through the bed at a low flow rate.",
                ],
                [
                  "08",
                  "Fast Rinse",
                  "High-flow service water removes excess regenerant.",
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
            <Heading
              eyebrow="05 · Resin selection"
              title="Types of Anion Resins"
            >
              The DOCX identifies two anion resin types for different
              demineralization duties.
            </Heading>
            <Table
              rows={resinTypes}
              headers={["Type", "Description", "Application"]}
            />
          </div>
        </section>
        <section id="technical-specifications" className={styles.section}>
          <div className={styles.container}>
            <Heading
              eyebrow="06 · Performance"
              title="Technical Specifications"
            >
              General technical specifications for the Anion Exchange Unit.
            </Heading>
            <Table rows={technical} />
          </div>
        </section>
        <section className={styles.construction}>
          <div className={styles.container}>
            <Heading
              eyebrow="07 · Vessel selection"
              title="Construction Options"
            >
              Three separate construction options for industrial and high-purity
              applications.
            </Heading>
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
                <span className={styles.eyebrow}>08 · Dataset A</span>
                <h2>5 m³/hr MSEP Pressure Vessel Configuration</h2>
                <p>
                  Values reproduced from the supplied Anion 5000 LPH vessel MSEP
                  drawing.
                </p>
              </div>
              <Gauge size={45} />
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Basic Design Data – MSEP Configuration</h3>
                <Table rows={msepBasic} />
              </article>
              <article>
                <h3>Design Summary</h3>
                <ul className={styles.noteList}>
                  <li>
                    Anion Unit is designed to remove anions like Cl⁻, SO₃⁻,
                    NO₃⁻, HCO₃⁻, CO₃⁻, SiO₂, etc. using Strong Base Anion Resin.
                  </li>
                  <li>
                    Automatic operation with reliable &amp; simple system.
                  </li>
                  <li>Regeneration with NaOH solution.</li>
                  <li>
                    Mild Steel vessel with premium quality resin for high
                    efficiency.
                  </li>
                  <li>
                    Suitable for Industrial &amp; Commercial applications.
                  </li>
                  <li>Easy operation, low maintenance &amp; longer life.</li>
                </ul>
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Regeneration Details – MSEP Configuration</h3>
                <Table rows={msepRegen} />
              </article>
              <article>
                <h3>Pump Design Data – MSEP Configuration</h3>
                <Table
                  rows={msepPumps}
                  headers={["Pump", "Service", "Capacity", "Head", "Power"]}
                />
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Electric Load (Approx.) – MSEP Configuration</h3>
                <Table
                  rows={msepElectric}
                  headers={["Equipment", "Power (kW)", "Qty.", "Total"]}
                />
              </article>
              <article>
                <h3>Area Covered – MSEP Configuration</h3>
                <Table rows={msepArea} />
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Equipment List – MSEP Configuration</h3>
                <Table
                  rows={msepEquipment}
                  headers={["Sr. No.", "Equipment", "MOC", "Qty."]}
                />
              </article>
              <article>
                <h3>Design Notes</h3>
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
            <article className={styles.fullDataCard}>
              <h3>Bill of Quantities – MSEP Configuration</h3>
              <Table
                rows={msepBoq}
                headers={["Sr. No.", "Description", "Specification", "Qty."]}
              />
            </article>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.dataBanner}>
              <div>
                <span className={styles.eyebrow}>09 · Dataset B</span>
                <h2>5 m³/hr Dual Vessel Configuration</h2>
                <p>
                  Values reproduced from the supplied 5000 LPH Anion Unit
                  drawing. This configuration is kept separate from the MSEP
                  data.
                </p>
              </div>
              <Zap size={45} />
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Basic Design Data – Dual Vessel Configuration</h3>
                <Table rows={dualBasic} />
              </article>
              <article>
                <h3>Design Summary – Dual Vessel Configuration</h3>
                <ul className={styles.noteList}>
                  <li>Two Anion exchange vessels working in alternation.</li>
                  <li>Cation removal by strong base anion resin.</li>
                  <li>Automatic multiport valve operation.</li>
                  <li>Regeneration using NaOH solution.</li>
                  <li>Low pressure drop, high efficiency.</li>
                  <li>PLC based fully automatic operation (Optional).</li>
                </ul>
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Regeneration Details – Dual Vessel Configuration</h3>
                <Table rows={dualRegen} />
              </article>
              <article>
                <h3>Pump Design Data – Dual Vessel Configuration</h3>
                <Table
                  rows={dualPumps}
                  headers={["Pump", "Flow", "Head", "Pump Type", "Motor Power"]}
                />
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Electric Load (Approx.) – Dual Vessel Configuration</h3>
                <Table
                  rows={dualElectric}
                  headers={[
                    "Equipment",
                    "Power (HP)",
                    "Qty.",
                    "Total HP",
                    "kW",
                  ]}
                />
              </article>
              <article>
                <h3>Area Covered (Approx.) – Dual Vessel Configuration</h3>
                <Table rows={dualArea} />
              </article>
            </div>
            <article className={styles.fullDataCard}>
              <h3>
                Equipment List &amp; Bill of Quantities – Dual Vessel
                Configuration
              </h3>
              <Table
                rows={dualEquipment}
                headers={[
                  "Sr. No.",
                  "Description",
                  "Material",
                  "Specification",
                  "Qty.",
                  "Unit",
                ]}
              />
            </article>
            <div className={styles.dataGrid}>
              <article>
                <h3>Optional Features</h3>
                <ul className={styles.noteList}>
                  <li>Fully Automatic PLC Control Panel</li>
                  <li>Online Conductivity Meter</li>
                  <li>Flow Totalizer</li>
                  <li>Remote Monitoring System</li>
                </ul>
              </article>
              <article>
                <h3>Drawing Notes</h3>
                <ul className={styles.noteList}>
                  <li>Design may vary as per actual water quality analysis.</li>
                  <li>All dimensions and data are approximate.</li>
                  <li>Subject to technical change without prior notice.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.exampleBanner}>
              <span className={styles.eyebrow}>10 · DOCX example</span>
              <h2>Typical Design Data – Example 10 m³/hr Plant</h2>
              <p>
                This DOCX example is intentionally separate from both 5 m³/hr
                drawing configurations.
              </p>
            </div>
            <Table rows={typical10} />
          </div>
        </section>
        <section className={`${styles.section} ${styles.benefits}`}>
          <div className={styles.container}>
            <Heading eyebrow="11 · Why Anion Exchange" title="Advantages" />
            <div className={styles.benefitGrid}>
              {[
                "Produces water of very low ionic content",
                "Neutralizes acidity of cation effluent",
                "Reduces silica and TDS effectively",
                "Simple regeneration using NaOH solution",
                "Suitable for automatic, semi-automatic, or manual control systems",
              ].map((item) => (
                <div key={item}>
                  <Check size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className={styles.applications}>
              <div>
                <Heading eyebrow="12 · Where it is used" title="Applications" />
              </div>
              <ul>
                {[
                  "Power plant boiler feed water",
                  "Chemical and fertilizer industries",
                  "Pharmaceutical and biotech process water",
                  "Electronics and semiconductor manufacturing",
                  "Laboratory and research applications",
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
                <span className={styles.eyebrow}>13 · Technical care</span>
                <h2>Operating Notes</h2>
              </div>
              <ul>
                {[
                  "Ensure degasser outlet water is free from CO₂ before entering the anion unit.",
                  "Regeneration efficiency improves with correct NaOH concentration and slow rinse.",
                  "Regularly monitor effluent conductivity and silica leakage.",
                  "Prevent resin fouling by using filtered, iron-free feed water.",
                  "Periodically sanitize resin bed in case of microbial growth (for long shutdowns).",
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
