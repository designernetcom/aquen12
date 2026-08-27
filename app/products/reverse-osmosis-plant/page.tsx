import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Droplets, Gauge, ShieldCheck } from "lucide-react";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Reverse Osmosis Plant | 4000 LPH Industrial RO System",
  description:
    "4000 LPH industrial Reverse Osmosis Plant with SS-304 pretreatment, high-pressure RO system, chemical dosing, micron filtration and PLC-based control.",
};

type Row = string[];

const basicData: Row[] = [
  ["Plant Capacity", "4 m³/hr (4000 LPH)"],
  ["Input Water", "6000 LPH"],
  ["Permeate Water", "4000 LPH"],
  ["Reject Water", "2000 LPH"],
  ["Recovery", "~ 66%"],
  ["Input TDS", "3000 ppm"],
  ["Permeate TDS", "< 50 ppm"],
  ["Feed Pressure (RO)", "12–16 kg/cm²"],
  ["Operating Pressure", "10–16 kg/cm²"],
  ["Operating Hours", "20 hrs/day"],
  ["Power Supply", "415 V, 50 Hz, 3 Ph"],
  ["Raw Water Temp.", "25–35°C"],
  ["pH Range", "6.5–8.5"],
  ["SDI", "< 5"],
  ["Feed Water Type", "Borewell / Municipal"],
];

const inputQuality: Row[] = [
  ["Input Water Quantity", "6000 LPH"],
  ["Input TDS", "3000 ppm"],
  ["pH Range", "6.5–8.5"],
  ["Temperature", "25–35°C"],
  ["Turbidity", "< 5 NTU"],
  ["SDI", "< 5"],
];
const electrical: Row[] = [
  ["Raw Water Pump", "1.10", "1", "1.10"],
  ["Backwash Pump", "1.10", "1", "1.10"],
  ["High Pressure Pump", "5.50", "1", "5.50"],
  ["Flushing Pump", "0.75", "1", "0.75"],
  ["Dosing Pumps", "0.06", "3", "0.18"],
  ["Control Panel & Accessories", "0.60", "1", "0.60"],
  ["TOTAL CONNECTED LOAD", "", "", "9.23 kW"],
  ["Max. Operating Load", "", "", "Approx. 11.0 kW"],
];
const equipment: Row[] = [
  ["1", "Raw Water Pump", "CI / SS", "1"],
  ["2", "Sand Filter Vessel (SS-304)", "SS-304", "1"],
  ["3", "Carbon Filter Vessel (SS-304)", "SS-304", "1"],
  ["4", "Water Softener Vessel (SS-304)", "SS-304", "1"],
  ["5", 'Micron Filter Housing (20")', "PP / UPVC", "1"],
  ["6", "Vertical High Pressure Pump", "SS-304", "1"],
  ["7", "RO Membrane Housing (80/160)", "SS-304", "1"],
  ["8", "RO Membrane 80/40", "Polyamide", "4 Nos."],
  ["9", "Flushing Pump", "CI / SS", "1"],
  ["10", "Dosing Pump (SMBS, pH Booster)", "—", "2"],
  ["11", "Dosing Pump (Anti Scalant)", "—", "1"],
  ["12", "Control Panel (PLC Based)", "—", "1"],
];
const boq: Row[] = [
  ["1", "Raw Water Pump – 6 m³/hr, 20 m Head", "1 No."],
  ["2", "Sand Filter Vessel – SS-304", "1 No."],
  ["3", "Carbon Filter Vessel – SS-304", "1 No."],
  ["4", "Water Softener Vessel – SS-304", "1 No."],
  ["5", 'Micron Filter Housing – 20" Big Blue', "1 No."],
  ["6", "Vertical High Pressure Pump – 6 m³/hr, 120 m Head", "1 No."],
  ["7", "RO Membrane Housing – 80/160", "1 No."],
  ["8", "RO Membrane 80/40", "4 Nos."],
  ["9", "Flushing Pump – 2 m³/hr, 15 m Head", "1 No."],
  ["10", "Dosing Pump (SMBS)", "1 No."],
  ["11", "Dosing Pump (pH Booster)", "1 No."],
  ["12", "Dosing Pump (Anti Scalant)", "1 No."],
  ["13", "Piping, Valves (Butterfly), Fittings (SS-304)", "1 Lot"],
  ["14", "Instruments (Pressure Gauges, Flow Meters, etc.)", "1 Lot"],
];

const msepPumpData: Row[] = [
  ["Raw Water Pump", "Centrifugal", "6", "20", "1"],
  ["Backwash Pump", "Centrifugal", "6", "20", "1"],
  ["High Pressure Pump", "Vertical Multistage", "6", "120", "1"],
  ["Flushing Pump", "Centrifugal", "2", "15", "1"],
  ["Dosing Pump", "Metering", "—", "—", "3"],
];
const msepElectrical: Row[] = [
  ["Raw Water Pump", "1.50", "1", "1.50"],
  ["Backwash Pump", "1.50", "1", "1.50"],
  ["High Pressure Pump", "5.50", "1", "5.50"],
  ["Flushing Pump", "0.75", "1", "0.75"],
  ["Dosing Pumps", "0.06", "3", "0.18"],
  ["Control Panel & Accessories", "0.60", "1", "0.60"],
  ["TOTAL CONNECTED LOAD", "", "", "10.03 kW"],
  ["Max. Operating Load", "", "", "Approx. 11.5 kW"],
];
const msepEquipment: Row[] = [
  ["1", "Raw Water Pump", "CI / SS", "1"],
  ["2", "Sand Filter Vessel – MSEP/FRP", "FRP / MSEP", "1"],
  ["3", "Carbon Filter Vessel – MSEP/FRP", "FRP / MSEP", "1"],
  ["4", "Water Softener Vessel – MSEP/FRP", "FRP / MSEP", "1"],
  ["5", 'Micron Filter Housing (20")', "PP / UPVC", "1"],
  ["6", "Vertical High Pressure Pump", "SS 304", "1"],
  ["7", "RO Membrane Housing (80/160)", "FRP", "1"],
  ["8", "RO Membrane 80/40", "Polyamide", "4 Nos."],
  ["9", "Flushing Pump", "CI / SS", "1"],
  ["10", "Dosing Pumps (SMBS, pH Booster, Anti Scalant)", "—", "3"],
  ["11", "Control Panel (PLC Based)", "—", "1"],
];
const msepBoq: Row[] = [
  ["1", "Raw Water Pump – 6 m³/hr, 20 m Head", "1 No."],
  ["2", "Sand Filter Vessel – MSEP/FRP", "1 No."],
  ["3", "Carbon Filter Vessel – MSEP/FRP", "1 No."],
  ["4", "Water Softener Vessel – MSEP/FRP", "1 No."],
  ["5", 'Micron Filter Housing – 20" Big Blue', "1 No."],
  ["6", "Vertical High Pressure Pump – 6 m³/hr, 120 m Head", "1 No."],
  ["7", "RO Membrane Housing – 80/160", "1 No."],
  ["8", "RO Membrane 80/40", "4 Nos."],
  ["9", "Flushing Pump – 2 m³/hr, 15 m Head", "1 No."],
  ["10", "Dosing Pump (SMBS)", "1 No."],
  ["11", "Dosing Pump (pH Booster)", "1 No."],
  ["12", "Dosing Pump (Anti Scalant)", "1 No."],
  ["13", "Piping, Valves (Butterfly), Fittings", "1 Lot"],
  ["14", "Instruments (Pressure Gauges, Flow Meters, etc.)", "1 Lot"],
];
const generalTechnical: Row[] = [
  ["Feed Water TDS", "500–2000 ppm"],
  ["Recovery Rate", "50–75%"],
  ["Salt Rejection", "≥ 99%"],
  ["Operating Pressure", "10–30 bar (depending on feed)"],
  ["Flow Rate", "As per plant design (m³/hr)"],
  ["Permeate Quality", "< 500 µS/cm (depending on feed)"],
];
const mocOptions: Row[] = [
  ["RO Pressure Vessels", "FRP / SS 304 / SS 316"],
  ["Piping & Valves", "SS 304 / SS 316 / PVC"],
  ["Feed & High-Pressure Pump", "SS 304 / SS 316"],
  ["Pre-treatment Tanks", "FRP / SS 304 / SS 316"],
  ["Permeate Storage Tanks", "SS 304 / SS 316 / FRP"],
  ["Instrumentation Wetted Parts", "SS 316"],
];
const generalComponents: Row[] = [
  [
    "Multimedia/Sand Filter",
    "Removes suspended solids; FRP / SS Vessel, SS internals; filtration rate 10–15 m³/m²/hr; operating pressure 2–3 kg/cm²",
  ],
  [
    "Activated Carbon Filter",
    "Removes chlorine, organics, and odor; MOC FRP/SS; capacity based on feed water volume",
  ],
  [
    "Water Softener (Optional)",
    "Reduces hardness to prevent scaling; FRP/SS; cation exchange resin (Na+ form)",
  ],
  [
    "Inline Dosing",
    "Anti-scalant dosing to prevent membrane scaling; pH adjustment chemical dosing if required",
  ],
];

function Table({
  rows,
  headers = ["Parameter", "Specification"],
}: {
  rows: Row[];
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

const process = [
  "Raw Water",
  "Raw Water Pump",
  "Sand Filter",
  "Carbon Filter",
  "Softener",
  "Dosing Pumps",
  "Micron Filter",
  "Vertical High Pressure Pump",
  "Anti-Scalant Dosing Pump",
  "RO System",
  "Pure Water",
];
const pretreatment = [
  ["Sand Filter", "Pretreatment stage shown before the carbon filter."],
  [
    "Activated Carbon / Carbon Filter",
    "Pretreatment stage shown before the water softener.",
  ],
  ["Water Softener", "Used for protection of RO membranes."],
  [
    "Chemical Dosing",
    "SMBS, pH Booster and Anti Scalant dosing pumps are shown in the source drawing.",
  ],
  [
    "Micron Filtration",
    '20" Big Blue micron filter housing before the high-pressure pump.',
  ],
];
const features = [
  "High Quality Purified Water",
  "Low Maintenance & Easy Operation",
  "Energy Efficient System",
  "Long Life RO Membranes",
  "SS-304 Piping & Fittings",
  "Automatic PLC Based Control",
  "Dosing for SMBS, pH Booster & Anti Scalant",
];
const applications = [
  "Drinking Water",
  "Industrial Process",
  "Boiler Feed",
  "Pharmaceutical",
  "Food & Beverages",
];

export default function ReverseOsmosisPlantPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
           
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>
                  AQUEN product system · RO plant
                </span>
                <h1>
                  Reverse Osmosis Plant <em>(RO Plant)</em>
                </h1>
                <h2>4 m³/hr Pretreatment + RO System</h2>
                <p>
                  A 4 m³/hr Reverse Osmosis Plant with advanced pretreatment and
                  RO system to produce high quality purified water. The supplied
                  design uses SS-304 pressure vessels, high-pressure pumping and
                  PLC-based automatic operation.
                </p>
                <div className={styles.heroActions}>
                  <Link className={styles.primaryButton} href="/contact">
                    Discuss your water system <ArrowRight size={17} />
                  </Link>
                  <a className={styles.textButton} href="#technical-data">
                    Explore specifications <ArrowRight size={15} />
                  </a>
                </div>
                <div className={styles.heroMetrics}>
                  <div>
                    <strong>4000 LPH</strong>
                    <span>permeate water</span>
                  </div>
                  <div>
                    <strong>~66%</strong>
                    <span>recovery</span>
                  </div>
                  <div>
                    <strong>&lt; 50 ppm</strong>
                    <span>permeate TDS</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                 <div className={styles.heroVisualMedia}>
                <Image
                  src="/reverseosmosis.png"
                  alt="Reverse Osmosis Plant 4000 LPH SS-304 pretreatment and RO system engineering drawing"
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

        <section className={styles.configurations}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Available 4000 LPH configurations"
              title="One RO plant. Two pretreatment constructions."
            >
              Select the configuration that fits the material and site
              requirements. Both are 4 m³/hr / 4000 LPH RO plant designs.
            </SectionHeading>
            <div className={styles.configGrid}>
              <a href="#configuration-ss304">
                <span>Configuration 01</span>
                <strong>SS-304 Pretreatment RO Plant</strong>
                <small>Previous supplied SS-304 drawing</small>
              </a>
              <a href="#configuration-msep">
                <span>Configuration 02</span>
                <strong>MSEP/FRP Pretreatment RO Plant</strong>
                <small>New supplied MSEP/FRP drawing</small>
              </a>
            </div>
          </div>
        </section>
        {/* <section className={styles.quick}>
          <div className={styles.container}>
            <div className={styles.quickGrid}>
              {[
                ["Capacity", "4 m³/hr / 4000 LPH"],
                ["Input", "6000 LPH"],
                ["Permeate", "4000 LPH"],
                ["Reject", "2000 LPH"],
                ["Recovery", "~66%"],
                ["Input TDS", "3000 ppm"],
                ["Permeate TDS", "<50 ppm"],
                ["Operating Hours", "20 hrs/day"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="01 · Product overview"
              title="Reverse Osmosis Plant Overview"
            >
              Industrial Pretreatment + RO System · 4 m³/hr / 4000 LPH
            </SectionHeading>
            <div className={styles.twoCol}>
              <div className={styles.prose}>
                <p>
                  The RO plant is designed with advanced pretreatment and an RO
                  system to produce high quality purified water. Pretreatment
                  includes Sand Filter, Activated Carbon Filter and Water
                  Softener for protection of RO membranes.
                </p>
                <p>
                  The product is available in two supplied pretreatment
                  constructions: SS-304 and MSEP/FRP. Configuration-specific
                  material, pump and electrical values are kept in their
                  respective sections below.
                </p>
              </div>
              <div className={styles.infoCard}>
                <span>Design intent</span>
                <h3>
                  Safe, Pure &amp;
                  <br />
                  Sustainable Water Solutions
                </h3>
                <p>
                  Water passes through pretreatment, micron filtration,
                  high-pressure pumping and the RO membrane system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="configuration-ss304" className={styles.drawing}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Configuration 01 · SS-304"
              title="4 m³/hr RO Plant – SS-304 Pretreatment System"
            >
              The complete previous supplied SS-304 engineering drawing is
              retained, including its configuration-specific process diagram,
              electrical load, area, equipment and BOQ.
            </SectionHeading>
            <figure>
              <Image
                src="/ro-4000-lph-ss304.png"
                alt="Complete SS-304 Reverse Osmosis Plant 4000 LPH technical drawing"
                width={1536}
                height={1024}
                sizes="(max-width: 1200px) 100vw, 1180px"
              />
              <figcaption>
                SS-304 Reverse Osmosis Plant – 4 m³/hr (4000 LPH)
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="configuration-msep" className={styles.sectionAlt}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Configuration 02 · MSEP/FRP"
              title="4 m³/hr RO Plant – MSEP/FRP Configuration"
            >
              This separate configuration uses the new supplied drawing. Its
              pretreatment vessels, RO housing, pump data and electrical values
              are not merged with the SS-304 configuration.
            </SectionHeading>
            <figure className={styles.configFigure}>
              <Image
                src="/ro-4000-lph-msep-frp.png"
                alt="Complete MSEP FRP Reverse Osmosis Plant 4000 LPH technical drawing"
                width={1536}
                height={1024}
                sizes="(max-width: 1200px) 100vw, 1180px"
              />
              <figcaption>
                MSEP/FRP Reverse Osmosis Plant – 4 m³/hr (4000 LPH)
              </figcaption>
            </figure>
            <div className={styles.dataGrid}>
              <article>
                <h3>Pump Design Data</h3>
                <Table
                  rows={msepPumpData}
                  headers={["Pump", "Type", "Flow (m³/hr)", "Head (m)", "Qty."]}
                />
                <p className={styles.sourceNote}>
                  Pump capacity are design values.
                </p>
              </article>
              <article className={styles.area}>
                <h3>Area Covered – MSEP/FRP Configuration</h3>
                <p>Total Area Required (Approx.)</p>
                <strong>
                  8.0 m (L) × 3.5 m (W)
                  <br />= 28.0 m²
                </strong>
                <p>Including Space for Operation &amp; Maintenance.</p>
                <small>
                  Note: Actual area may vary as per site conditions.
                </small>
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Electrical Load – MSEP/FRP</h3>
                <Table
                  rows={msepElectrical}
                  headers={["Equipment", "Power (kW)", "Qty.", "Total (kW)"]}
                />
              </article>
              <article>
                <h3>Design Summary – MSEP/FRP</h3>
                <ul className={styles.summaryList}>
                  {[
                    "4 m³/hr RO Plant with advanced pretreatment and RO purification.",
                    "Sand Filter, Activated Carbon Filter and Water Softener for RO membrane protection.",
                    "FRP / MSEP pressure vessels with butterfly valves for reliable and low-maintenance operation.",
                    "Vertical multistage high-pressure pump and automatic PLC-based operation.",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Equipment List – MSEP/FRP Configuration</h3>
                <Table
                  rows={msepEquipment}
                  headers={["Sr. No.", "Equipment", "Material", "Qty."]}
                />
              </article>
              <article>
                <h3>Input Water Quality</h3>
                <Table rows={inputQuality} />
              </article>
            </div>
            <div className={styles.boq}>
              <h2>Bill of Quantities – Main Equipments</h2>
              <Table
                rows={msepBoq}
                headers={["Sr. No.", "Item Description", "Qty."]}
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.dark}`}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="03 · Treatment process"
              title="Treatment Process"
            >
              The sequence below follows the process shown in the supplied
              drawing.
            </SectionHeading>
            <div className={styles.process}>
              {process.map((step, index) => (
                <div key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                  {step === "Dosing Pumps" && <small>SMBS · pH Booster</small>}
                  {step === "Anti-Scalant Dosing Pump" && (
                    <small>Anti Scalant</small>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="technical-data" className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="04 · Basic design data"
              title="Basic Design Data – 4000 LPH RO Plant"
            />
            <Table rows={basicData} />
            <div className={styles.summaryGrid}>
              <article>
                <h3>Design Summary</h3>
                <ul>
                  {[
                    "The RO plant of 4 m³/hr is designed with advanced pretreatment & RO system to produce high quality purified water.",
                    "Pretreatment includes Sand Filter, Activated Carbon Filter & Water Softener for protection of RO membranes.",
                    "SS-304 pressure vessels with butterfly valves for reliable & low maintenance operation.",
                    "High pressure vertical multistage pump ensures optimum performance & energy efficiency.",
                    "SS-304 high pressure and low pressure piping with SS-304 fittings.",
                    "Fully automatic operation with PLC based control panel.",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <h3>Input Water Quality</h3>
                <Table rows={inputQuality} />
              </article>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="05 · Pretreatment"
              title="Pretreatment System"
            >
              The pretreatment stages shown in the source drawing are presented
              separately for clarity.
            </SectionHeading>
            <div className={styles.cardGrid}>
              {pretreatment.map(([title, text]) => (
                <article key={title}>
                  <Droplets size={19} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className={styles.piping}>
              <div>
                <Gauge size={20} />
                <strong>High Pressure Line (SS-304)</strong>
              </div>
              <div>
                <Gauge size={20} />
                <strong>Low Pressure Line (SS-304)</strong>
              </div>
              <p>
                Backwash Pump is connected to the pretreatment vessels as shown
                in the process and piping flow diagram.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="06 · RO system"
              title="Reverse Osmosis System"
            >
              The RO-side equipment is reproduced from the supplied
              configuration.
            </SectionHeading>
            <div className={styles.roGrid}>
              {[
                [
                  "Vertical High Pressure Pump",
                  "Flow: 6 m³/hr · Head: 120 Mtr",
                ],
                ["RO Membrane Housing", "80/160 · Qty: 1"],
                ["RO Membranes", "80/40 · Polyamide · 4 Nos."],
                ["Flushing System", "Flushing Pump – 2 m³/hr, 15 m Head"],
                ["Permeate Outlet", "Permeate (Pure Water)"],
                ["Reject Line", "Reject to Drain"],
              ].map(([title, text], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.diagram}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="07 · Process & piping"
              title="Process & Piping Flow Diagram"
            >
              Raw Water Inlet, pretreatment vessels, dosing, micron filtration,
              high-pressure pumping, RO membrane housing, flushing pump,
              permeate and reject connections are retained in the supplied
              engineering drawing.
            </SectionHeading>
            <figure>
              <Image
                src="/ro-4000-lph-ss304.png"
                alt="Process and piping flow diagram for 4000 LPH Reverse Osmosis Plant"
                width={1536}
                height={1024}
                sizes="(max-width: 1200px) 100vw, 1180px"
              />
              <figcaption>Supplied process and piping flow diagram</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.dataGrid}>
              <article>
                <h3>Electrical Load</h3>
                <Table
                  rows={electrical}
                  headers={["Equipment", "Power (kW)", "Qty.", "Total (kW)"]}
                />
              </article>
              <article className={styles.area}>
                <h3>Area Covered</h3>
                <p>Total Area Required (Approx.)</p>
                <strong>
                  8.0 m (L) × 3.5 m (W)
                  <br />≈ 28.0 m²
                </strong>
                <p>Including Space for Operation &amp; Maintenance</p>
                <small>
                  Note: Actual area may vary as per site conditions.
                </small>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="08 · Complete equipment"
              title="Equipment List"
            />
            <Table
              rows={equipment}
              headers={["Sr. No.", "Equipment", "Material", "Qty."]}
            />
            <div className={styles.boq}>
              <h2>Bill of Quantities – Main Equipments</h2>
              <Table
                rows={boq}
                headers={["Sr. No.", "Item Description", "Qty."]}
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.bottomGrid}>
              <article>
                <SectionHeading
                  eyebrow="09 · Salient features"
                  title="Salient Features"
                />
                <ul className={styles.checkList}>
                  {features.map((item) => (
                    <li key={item}>
                      <Check size={17} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article>
                <SectionHeading
                  eyebrow="10 · Applications"
                  title="Applications"
                />
                <ul className={styles.checkList}>
                  {applications.map((item) => (
                    <li key={item}>
                      <ShieldCheck size={17} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <div className={styles.note}>
              <strong>Design note</strong>
              <span>
                The design is based on the given input conditions and actual
                performance may vary depending on water quality &amp; site
                conditions.
              </span>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="11 · General RO information"
              title="Reverse Osmosis Technology"
            >
              General technical information from the supplied RO Unit document
              is kept separate from both 4000 LPH configurations.
            </SectionHeading>
            <div className={styles.generalGrid}>
              <article>
                <h3>Principle of Operation</h3>
                <p>
                  RO removes dissolved salts, contaminants and impurities by
                  applying pressure to force water through a semi-permeable
                  membrane.
                </p>
                <ol>
                  <li>Pre-treatment</li>
                  <li>Anti-scalant dosing</li>
                  <li>High-pressure pumping</li>
                  <li>Membrane filtration</li>
                  <li>Post-treatment where required</li>
                </ol>
                <p>
                  <strong>Permeate</strong> is purified water.{" "}
                  <strong>Reject / Concentrate</strong> contains concentrated
                  impurities.
                </p>
              </article>
              <article>
                <h3>General Pre-treatment Information</h3>
                <Table
                  rows={generalComponents}
                  headers={["Stage", "General DOCX information"]}
                />
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Typical / General RO Technical Data</h3>
                <Table rows={generalTechnical} />
              </article>
              <article>
                <h3>Materials of Construction – General Options</h3>
                <Table rows={mocOptions} />
              </article>
            </div>
            <div className={styles.generalGrid}>
              <article>
                <h3>RO Membrane Technology</h3>
                <p>
                  Semi-permeable TFC / Polyamide membrane elements are housed in
                  pressure vessels. Typical / general design data includes
                  50–75% recovery, salt rejection ≥ 99%, operating pressure
                  10–30 bar and single-pass / double-pass arrangements depending
                  on product water quality requirements.
                </p>
              </article>
              <article>
                <h3>Instrumentation &amp; Control</h3>
                <p>
                  General instrumentation includes flow meters for feed,
                  permeate and reject, pressure gauges, conductivity / TDS
                  monitoring and automatic PLC/SCADA control. Both supplied 4000
                  LPH drawings specify PLC-based control.
                </p>
              </article>
            </div>
            <div className={styles.generalGrid}>
              <article>
                <h3>Operation &amp; Maintenance</h3>
                <ul className={styles.summaryList}>
                  <li>
                    Regular pretreatment checks, filter cleaning and dosing pump
                    checks.
                  </li>
                  <li>
                    Membrane CIP when permeate quality drops or pressure rises.
                  </li>
                  <li>
                    Pump lubrication, mechanical seal checks and instrument
                    calibration.
                  </li>
                  <li>Periodic TDS meter and flow sensor calibration.</li>
                </ul>
              </article>
              <article>
                <h3>FRP vs Stainless Steel Construction</h3>
                <p>
                  <strong>FRP:</strong> Lightweight, corrosion-resistant and
                  cost-effective for medium-pressure vessels.
                </p>
                <p>
                  <strong>SS 304 / SS 316:</strong> High durability, corrosion
                  resistance and suitability for high-pressure and aggressive
                  water chemistries.
                </p>
                <p>
                  Construction can be selected according to water chemistry,
                  budget and plant longevity.
                </p>
              </article>
            </div>
            <div className={styles.comparison}>
              <h2>4000 LPH RO Plant Configuration Options</h2>
              <Table
                rows={[
                  [
                    "Plant Capacity",
                    "4 m³/hr (4000 LPH)",
                    "4 m³/hr (4000 LPH)",
                  ],
                  ["Pretreatment Vessel MOC", "SS-304", "MSEP/FRP"],
                  [
                    "Pump Arrangement",
                    "High-pressure pump: 6 m³/hr, 120 Mtr",
                    "Vertical Multistage: 6 m³/hr, 120 m",
                  ],
                  [
                    "Electrical Load",
                    "9.23 kW connected; approx. 11.0 kW max operating",
                    "10.03 kW connected; approx. 11.5 kW max operating",
                  ],
                  [
                    "Area",
                    "8.0 m (L) × 3.5 m (W) ≈ 28.0 m²",
                    "8.0 m (L) × 3.5 m (W) = 28.0 m²",
                  ],
                  [
                    "RO Membrane Configuration",
                    "Housing 80/160, 1; membrane 80/40, 4 Nos.",
                    "Housing 80/160, 1; membrane 80/40, 4 Nos.",
                  ],
                  ["Control System", "PLC-based", "PLC-based"],
                ]}
                headers={[
                  "Field",
                  "SS-304 Configuration",
                  "MSEP/FRP Configuration",
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
