import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Droplets,
  Gauge,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "../mixed-bed-unit/page.module.css";

export const metadata: Metadata = {
  title: "Cation Exchange Unit | DM Water Treatment System",
  description:
    "Cation Exchange Unit using Strong Acid Cation resin for removal of hardness and positively charged ions in DM and industrial water treatment systems.",
};

const technical = [
  ["Type of Resin", "Strong Acid Cation (SAC) – H⁺ form"],
  ["Matrix", "Cross-linked polystyrene with divinylbenzene"],
  ["Functional Group", "Sulfonic acid (–SO₃H)"],
  ["Total Exchange Capacity", "1.8 – 2.2 eq/L (wet basis)"],
  ["Moisture Content", "45 – 50%"],
  ["Operating pH Range", "0 – 14"],
  ["Service Flow Rate", "10 – 40 BV/h (Bed Volumes/hour)"],
  ["Regeneration Flow Rate", "2 – 6 BV/h"],
  ["Regenerant Chemical", "HCl (4–5%) or H₂SO₄ (2–3%)"],
  ["Operating Pressure", "2 – 5 kg/cm²"],
  ["Operating Temperature", "Up to 60°C"],
  ["Effluent pH", "2 – 4"],
  ["Outlet Conductivity (Before Degasser)", "30 – 100 µS/cm"],
];
const resinDetail = [
  ["Type of Resin", "Strong Acid Cation (SAC) resin in H⁺ or Na⁺ form"],
  ["Resin Matrix", "Cross-linked polystyrene with divinylbenzene"],
  ["Functional Group", "Sulfonic acid (-SO₃H)"],
  ["Particle Size Distribution", "0.3–1.2 mm (uniformity coefficient < 1.7)"],
  ["Total Exchange Capacity", "1.8 – 2.2 eq/L (wet basis, typical)"],
  ["Moisture Content", "45 – 50% (in Na⁺ form)"],
  ["Operating pH Range", "0 – 14"],
  ["Operating Temperature", "Na⁺ form: up to 150 °C; H⁺ form: up to 120 °C"],
  ["Maximum Operating Pressure", "3–6 bar (depending on vessel design)"],
  ["Service Flow Rate", "10 – 40 BV/h (Bed Volumes per hour)"],
  ["Regeneration Flow Rate", "2 – 6 BV/h (counter-current or co-current)"],
  [
    "Vessel Construction",
    "Mild steel with rubber lining / FRP / stainless steel",
  ],
  [
    "Underdrain System",
    "Hub-and-lateral or nozzle plate with graded support gravel",
  ],
];
const construction = [
  {
    title: "Mild Steel (MS) Rubber-Lined Vessel",
    rows: [
      ["Material", "MS (IS 2062 Gr. A)"],
      ["Internal Lining", "Hard rubber (3–5 mm) or epoxy coating"],
      ["External Coating", "Epoxy primer with PU finish"],
      ["Design Pressure", "Up to 6 kg/cm²"],
      ["Shell Thickness", "5 – 8 mm"],
      ["Supports", "MS legs / skirt support"],
      ["Manholes", "Provided at top and side for maintenance"],
      ["Advantages", "Economical, rugged, easy to fabricate"],
      [
        "Limitations",
        "Requires maintenance; lining prone to mechanical damage",
      ],
    ],
  },
  {
    title: "FRP (Fiberglass Reinforced Plastic) Vessel",
    rows: [
      ["Material", "FRP with thermoplastic liner (PP / PVC / PVDF)"],
      ["Liner Thickness", "3 – 5 mm"],
      ["External Reinforcement", "Filament-wound FRP shell"],
      ["Design Pressure", "Up to 4 kg/cm²"],
      ["Advantages", "Corrosion resistant, lightweight, maintenance-free"],
      [
        "Limitations",
        "Temperature limit (~55°C); not ideal for large-capacity units",
      ],
      ["Applications", "Medium-scale DM plants and outdoor installations"],
    ],
  },
  {
    title: "Stainless Steel (SS) Vessel",
    rows: [
      ["Material", "SS 304 / SS 316 / SS 316L"],
      ["Finish", "Mirror-polished internal and external surfaces (Ra < 1 µm)"],
      ["Design Pressure", "Up to 6 kg/cm²"],
      [
        "Advantages",
        "Long service life, excellent corrosion resistance, hygienic",
      ],
      ["Limitations", "Higher cost"],
      [
        "Applications",
        "Pharma, food & beverage, electronics, and high-purity water systems",
      ],
    ],
  },
];
const frpBasic = [
  ["Capacity", "5 m³ / Hr (Design)"],
  ["Operation Hours", "20 Hrs / Day"],
  ["Raw Water TDS", "1000 ppm"],
  ["Hardness (as CaCO₃)", "400 ppm"],
  ["pH Range", "6.5 – 8.5"],
  ["Temperature", "5 – 45 °C"],
  ["Resin Type", "Strong Acid Cation Resin"],
  ["Vessel Type", "MSEP / FRP Pressure Vessel"],
  ["Regeneration Type", "Sodium Chloride (NaCl)"],
  ["Regeneration Cycle", "20 Hrs"],
  ["Total Connected Load", "5.2 kW (Approx.)"],
  ["Area Required", "20 ft (L) × 12 ft (W) × 10 ft (H)"],
];
const msepBasic = [
  ["Capacity", "5 m³ / Hr (Design)"],
  ["Operation Hours", "20 Hrs / Day"],
  ["Raw Water TDS", "1000 ppm"],
  ["Hardness (as CaCO₃)", "400 ppm"],
  ["pH Range", "6.5 – 8.5"],
  ["Temperature", "5 – 45 °C"],
  ["Resin Type", "Strong Acid Cation Resin"],
  ["Vessel Type", "MSEP (Mild Steel)"],
  ["Regeneration Type", "Sodium Chloride (NaCl)"],
  ["Regeneration Cycle", "20 Hrs"],
  ["Total Connected Load", "5.2 kW (Approx.)"],
  ["Area Required", "20 ft (L) × 12 ft (W) × 10 ft (H)"],
];
const regen5 = [
  ["Regeneration Type", "Sodium Chloride (NaCl)"],
  ["Regeneration Tank Capacity", "500 Liters"],
  ["Service Flow Rate", "5 m³ / Hr"],
  ["Backwash Water", "1.5 m³"],
  ["Brine Preparation Water", "0.5 m³"],
  ["Rinse Water (Slow + Fast)", "1.0 m³"],
  ["Total Water Consumption", "3.0 m³ / Cycle"],
  ["NaCl Consumption", "20 – 25 Kg / Cycle"],
];
const pumps5 = [
  ["Raw Water Pump", "Raw Water Transfer", "5 m³ / Hr", "20 m", "1.1 kW"],
  ["Backwash Pump", "Backwash Service", "5 m³ / Hr", "18 m", "1.1 kW"],
];
const frpElectric = [
  ["Raw Water Pump", "1.1", "1", "1.1"],
  ["Backwash Pump", "1.1", "1", "1.1"],
  ["Multi Port Valve (Motor)", "0.2", "1", "0.2"],
  ["Control Panel & Aux.", "0.2", "1", "0.2"],
  ["Total Connected Load", "–", "–", "2.6 kW"],
  ["Total Demand Load (With Factor)", "–", "–", "5.2 kW"],
];
const msepElectric = [
  ["Raw Water Pump", "1.1", "1", "1.1"],
  ["Backwash Pump", "1.1", "1", "1.1"],
  ["Control Panel & Aux.", "0.2", "1", "0.2"],
  ["Total Connected Load", "–", "–", "2.6 kW"],
  ["Total Demand Load (With Factor)", "–", "–", "5.2 kW"],
];
const area5 = [
  ["Length", "20 ft"],
  ["Width", "12 ft"],
  ["Height", "10 ft"],
  ["Total Area", "240 ft²"],
];
const frpEquipment = [
  ["1", "Cation Pressure Vessel", "MSEP / FRP", "1"],
  ["2", "Multi Port Valve", "CI / SS", "1"],
  ["3", "Raw Water Pump", "CI / SS", "1"],
  ["4", "Backwash Pump", "CI / SS", "1"],
  ["5", "Regeneration Tank", "HDPE", "1"],
  ["6", "Interconnecting Piping", "UPVC / CI", "–"],
  ["7", "Butterfly Valves", "CI / DI", "4"],
  ["8", "Control Panel", "–", "1"],
  ["9", "Instrumentation", "As per Scope", "Lot"],
];
const msepEquipment = [
  ["1", "Cation Pressure Vessel (Mild Steel)", "MS", "1"],
  ["2", "Raw Water Pump", "CI / SS", "1"],
  ["3", "Backwash Pump", "CI / SS", "1"],
  ["4", "Regeneration Tank", "Mild Steel", "1"],
  ["5", "Interconnecting Piping", "MS", "Lot"],
  ["6", "Butterfly Valves", "CI / DI", "6"],
  ["7", "Control Panel", "Auto / Manual", "1"],
  ["8", "Instrumentation", "As per Scope", "Lot"],
];
const frpBoq = [
  ["1", "Cation Pressure Vessel", "MSEP / FRP", "1 No."],
  ["2", "Multi Port Valve", "Automatic", "1 No."],
  ["3", "Raw Water Pump", "5 m³ / Hr @ 20 m", "1 No."],
  ["4", "Backwash Pump", "5 m³ / Hr @ 18 m", "1 No."],
  ["5", "Regeneration Tank", "500 Ltrs (HDPE)", "1 No."],
  ["6", "Butterfly Valves", "65 NB / CI", "4 Nos."],
  ["7", "Piping & Fittings", "UPVC / CI", "Lot"],
  ["8", "Control Panel", "Auto / Manual", "1 No."],
  ["9", "Instrumentation", "As per Scope", "Lot"],
];
const msepBoq = [
  ["1", "Cation Pressure Vessel", "Mild Steel", "1 No."],
  ["2", "Raw Water Pump", "5 m³ / Hr @ 20 m", "1 No."],
  ["3", "Backwash Pump", "5 m³ / Hr @ 18 m", "1 No."],
  ["4", "Regeneration Tank", "500 Ltrs (Mild Steel)", "1 No."],
  ["5", "Butterfly Valves", "65 NB / CI", "6 Nos."],
  ["6", "Piping & Fittings", "MS / GI", "Lot"],
  ["7", "Control Panel", "Auto / Manual", "1 No."],
  ["8", "Instrumentation", "As per Scope", "Lot"],
];
const typical10 = [
  ["Flow Rate", "10 m³/hr"],
  ["Vessel Diameter", "750 mm"],
  ["Vessel Height", "2000 mm"],
  ["Resin Quantity", "300 – 350 Ltrs"],
  ["Resin Type", "SAC (H⁺ form)"],
  ["Regenerant", "4% HCl or 2% H₂SO₄"],
  ["Service Flow Rate", "20 BV/h"],
  ["Backwash Flow Rate", "50% bed expansion"],
  ["Outlet Conductivity", "50 – 100 µS/cm (before Degasser)"],
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
function Config({
  label,
  title,
  basic,
  electric,
  equipment,
  boq,
  hasMultiPort,
}: {
  label: string;
  title: string;
  basic: string[][];
  electric: string[][];
  equipment: string[][];
  boq: string[][];
  hasMultiPort: boolean;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.dataBanner}>
          <div>
            <span className={styles.eyebrow}>{label}</span>
            <h2>{title}</h2>
            <p>
              Configuration-specific values reproduced from the corresponding
              supplied 5 m³/hr drawing.
            </p>
          </div>
          <Gauge size={45} />
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Basic Design Data</h3>
            <Table rows={basic} />
          </article>
          <article>
            <h3>Design Summary</h3>
            <ul className={styles.noteList}>
              <li>
                Cation Unit is designed to remove cations like Ca²⁺, Mg²⁺, Na⁺,
                K⁺, Fe²⁺ etc. using Strong Acid Cation Resin.
              </li>
              <li>
                {hasMultiPort
                  ? "Automatic operation with Multi Port Valve."
                  : "Automatic operation with reliable & simple system."}
              </li>
              <li>Regeneration with NaCl solution.</li>
              <li>
                {hasMultiPort
                  ? "Robust MSEP/FRP vessel with premium quality resin for high efficiency."
                  : "Mild Steel vessel with premium quality resin for high efficiency."}
              </li>
              <li>Suitable for Industrial & Commercial applications.</li>
              <li>Easy operation, low maintenance & longer life.</li>
            </ul>
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Regeneration Details</h3>
            <Table rows={regen5} />
          </article>
          <article>
            <h3>Pump Design Data</h3>
            <Table
              rows={pumps5}
              headers={["Pump", "Service", "Capacity", "Head", "Power"]}
            />
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Electric Load (Approx.)</h3>
            <Table
              rows={electric}
              headers={["Equipment", "Power (kW)", "Qty.", "Total (kW)"]}
            />
          </article>
          <article>
            <h3>Area Covered</h3>
            <Table rows={area5} />
            <ul className={styles.noteList}>
              <li>Area may vary as per site condition.</li>
            </ul>
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Equipment List</h3>
            <Table
              rows={equipment}
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
            </ul>
          </article>
        </div>
        <article className={styles.fullDataCard}>
          <h3>Bill of Quantities (BOQ)</h3>
          <Table
            rows={boq}
            headers={["Sr. No.", "Description", "Specification", "Qty."]}
          />
        </article>
      </div>
    </section>
  );
}
export default function CationExchangeUnitPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
          
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>
                  AQUEN product system · cation exchange
                </span>
                <h1>
                  Cation Exchange <em>Unit</em>
                </h1>
                <h2>Strong Acid Cation Exchange System</h2>
                <p>
                  A cation exchange bed removes positively charged ions
                  including calcium, magnesium, sodium and iron by exchanging
                  them with hydrogen or sodium ions according to the resin type
                  and application.
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
                    <strong>SAC</strong>
                    <span>strong acid cation resin</span>
                  </div>
                  <div>
                    <strong>10–40</strong>
                    <span>BV/h service flow</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroVisual}>
               <div className={styles.heroVisualMedia}>
                <Image
                  src="/anionexchangeUnit.png"
                  alt="Cation Unit MSEP FRP vessel technical configuration"
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
              title="The first exchange stage for DM water"
            >
              The cation bed removes hardness-causing and other undesirable
              positively charged ions.
            </Heading>
            <div className={styles.twoCol}>
              <div className={styles.prose}>
                <p>
                  A cation exchange bed is a water treatment unit designed to
                  remove positively charged ions (cations) such as calcium
                  (Ca²⁺), magnesium (Mg²⁺), sodium (Na⁺), iron (Fe²⁺), and other
                  hardness-causing or undesirable ions from water.
                </p>
                <p>
                  The bed operates by exchanging these cations with hydrogen
                  (H⁺) or sodium (Na⁺) ions, depending on the resin type and
                  application. Typical applications include boiler feedwater
                  preparation, demineralization, and softening.
                </p>
                <div className={styles.featureList}>
                  <div>
                    <Check size={19} />
                    <span>
                      <strong>Hardness removal</strong>
                      <small>Calcium and magnesium exchange</small>
                    </span>
                  </div>
                  <div>
                    <ShieldCheck size={19} />
                    <span>
                      <strong>DM pathway</strong>
                      <small>
                        Feeds downstream degassing and anion exchange
                      </small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.cardLabel}>Exchange principle</span>
                <h3>
                  Cations out.
                  <br />
                  H⁺ / Na⁺ in.
                </h3>
                <p>
                  Exhausted resin is regenerated to restore its ion-exchange
                  capacity and maintain consistent industrial water quality.
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
              title="Two supplied 5 m³/hr configurations"
            >
              The two drawings are retained as distinct MSEP/FRP and MSEP Mild
              Steel systems.
            </Heading>
            <div className={styles.galleryGrid}>
              <figure>
                <div>
                  <Image
                    src="/cation-frp-vessel-5000-lph.png"
                    alt="Cation Unit 5 m³/hr MSEP FRP pressure vessel configuration"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <figcaption>
                  <strong>Cation Unit – 5 m³/hr MSEP/FRP Configuration</strong>
                  <span>Multi Port Valve configuration</span>
                </figcaption>
              </figure>
              <figure>
                <div>
                  <Image
                    src="/cation-msep-5000-lph.png"
                    alt="Cation Unit 5 m³/hr MSEP mild steel configuration"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <figcaption>
                  <strong>
                    Cation Unit – 5 m³/hr MSEP Mild Steel Configuration
                  </strong>
                  <span>Mild Steel pressure vessel configuration</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.container}>
            <Heading
              eyebrow="03 · General technical data"
              title="Resin and vessel specifications"
            />
            <div className={styles.operationGrid}>
              <div className={styles.operationCard}>
                <span>01</span>
                <h3>Resin bed</h3>
                <p>
                  Strong Acid Cation resin operates in H⁺ or Na⁺ form to remove
                  cations from feed water.
                </p>
                <code>Ca²⁺ · Mg²⁺ · Na⁺ · Fe²⁺</code>
              </div>
              <div className={styles.operationCard}>
                <span>02</span>
                <h3>Underdrain</h3>
                <p>
                  Hub-and-lateral or nozzle plate with graded support gravel
                  provides resin support and distribution.
                </p>
                <code>Uniform flow distribution</code>
              </div>
              <div className={styles.operationCard}>
                <span>03</span>
                <h3>Regenerated resin</h3>
                <p>
                  Regeneration restores exchange capacity after the service
                  cycle is exhausted.
                </p>
                <code>NaCl / HCl / H₂SO₄ cycles</code>
              </div>
            </div>
          </div>
        </section>
        <section id="technical-specifications" className={styles.section}>
          <div className={styles.container}>
            <Heading
              eyebrow="04 · Technical specifications"
              title="Cation Exchange Bed – Technical Specifications"
            />
            <Table rows={technical} />
            <div style={{ marginTop: 20 }}>
              <Table rows={resinDetail} />
            </div>
          </div>
        </section>
        <section className={styles.regeneration}>
          <div className={styles.container}>
            <Heading
              eyebrow="05 · General regeneration"
              title="Regeneration Process"
            >
              DOCX guidance for Na⁺ and H⁺ cycle applications, separate from the
              5 m³/hr drawing values below.
            </Heading>
            <div className={styles.regenerationGrid}>
              {[
                [
                  "01",
                  "Chemical Injection / Regenerant Dosing",
                  "Na⁺ cycle: Sodium chloride (NaCl) 8–10% solution. H⁺ cycle: Hydrochloric acid (HCl, 4–6%) or Sulfuric acid (H₂SO₄, 2–4%). Application: downflow (co-current) or upflow (counter-current). Contact time: 30–60 minutes.",
                ],
                [
                  "02",
                  "Displacement / Slow Rinse",
                  "Flow direction: same as regenerant injection. Flow rate: 2–4 BV/h. Purpose: push regenerant uniformly through the resin and displace spent solution.",
                ],
                [
                  "03",
                  "Fast Rinse",
                  "Flow direction: same as service. Flow rate: normal service rate (10–20 BV/h). Duration: until effluent quality stabilizes and meets conductivity/hardness requirements.",
                ],
              ].map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className={styles.notesPanel} style={{ marginTop: 28 }}>
              <div>
                <span className={styles.eyebrow}>Operating information</span>
                <h2>Efficiency &amp; safety</h2>
              </div>
              <ul>
                <li>
                  Regeneration Efficiency: Typically, 60–70% depending on
                  chemical dosage and flow configuration.
                </li>
                <li>
                  Service Cycle Length: Depends on influent quality, flow rate,
                  and leakage tolerance.
                </li>
                <li>
                  Safety Considerations: Handle acids and brines with PPE, use
                  corrosion-resistant piping, and provide neutralization
                  facilities for spent regenerant.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.construction}>
          <div className={styles.container}>
            <Heading
              eyebrow="06 · Vessel selection"
              title="Construction Options"
            />
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
        <Config
          label="07 · Dataset A"
          title="5 m³/hr MSEP/FRP Pressure Vessel Configuration"
          basic={frpBasic}
          electric={frpElectric}
          equipment={frpEquipment}
          boq={frpBoq}
          hasMultiPort
        />
        <Config
          label="08 · Dataset B"
          title="5 m³/hr MSEP Mild Steel Configuration"
          basic={msepBasic}
          electric={msepElectric}
          equipment={msepEquipment}
          boq={msepBoq}
          hasMultiPort={false}
        />
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.exampleBanner}>
              <span className={styles.eyebrow}>09 · DOCX example</span>
              <h2>Typical Design Data – Example 10 m³/hr DM Plant</h2>
              <p>
                This DOCX example is kept separate from both 5 m³/hr drawing
                configurations.
              </p>
            </div>
            <Table rows={typical10} />
          </div>
        </section>
        <section className={`${styles.section} ${styles.benefits}`}>
          <div className={styles.container}>
            <Heading eyebrow="10 · Why Cation Exchange" title="Advantages" />
            <div className={styles.benefitGrid}>
              {[
                "Removes hardness and cations effectively",
                "Simple operation and maintenance",
                "High exchange capacity and regeneration efficiency",
                "Compatible with manual, semi-automatic, or fully automatic valves",
                "Rugged and durable construction in multiple material options",
              ].map((item) => (
                <div key={item}>
                  <Check size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className={styles.applications}>
              <div>
                <Heading eyebrow="11 · Where it is used" title="Applications" />
              </div>
              <ul>
                {[
                  "De-mineralized water systems (as 1st stage)",
                  "Boiler feed water treatment",
                  "Process and cooling water softening",
                  "Power, chemical, and fertilizer industries",
                  "Pharmaceutical and electronics water purification",
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
                  "Maintain feed water free from oil, turbidity, and organics for best resin life.",
                  "Avoid over-exhaustion to prevent silica leakage downstream.",
                  "Regenerate promptly once breakthrough conductivity rises.",
                  "Periodically check acid dosing strength and flow uniformity.",
                  "Inspect rubber lining or FRP surfaces regularly for damage.",
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
