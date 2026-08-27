// @ts-nocheck
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Droplets, ShieldCheck } from "lucide-react";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Multi Grade Filter (MGF) | 15000 LPH DMF",
  description:
    "15 m³/hr Multi Grade Filter with FRP and MSEP vessel configurations for turbidity and suspended-solids reduction.",
};
type Row = string[];
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
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={`${row[0]}-${i}`}>
              {row.map((cell, j) => (
                <td key={`${cell}-${j}`}>{cell}</td>
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
    <div className={styles.heading}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
const frpBasic: Row[] = [
  ["Model", "MGF - 15 m³/hr (FRP)"],
  ["Type", "Multi Grade Filter"],
  ["Flow Rate", "15 m³/Hr"],
  ["Operating Hours", "20 Hrs/Day"],
  ["Inlet Water Quality", "Turbidity: Max. 10 NTU; SDI: Max. 5"],
  ["Filtration Velocity", "15 m/Hr"],
  ["Backwash Velocity", "45 m/Hr"],
  ["Design Pressure", "6 Kg/cm²"],
  ["Operating Pressure", "2.5 – 4.0 Kg/cm²"],
  ["Design Temperature", "5 – 50°C"],
  ["Vessel Material", "FRP (Food Grade)"],
  ["Internal Lining", "PE / FRP Lining"],
  ["Connection Size", "65 NB (Inlet / Outlet)"],
];
const msepBasic: Row[] = [
  ["Model", "MSEP – 15 m³/Hr"],
  ["Type", "Vertical Pressure Sand Filter"],
  ["Flow Rate", "15 m³/Hr"],
  ["Operating Hours", "20 Hrs/Day"],
  ["Inlet Water Quality", "Turbidity: Max. 10 NTU; SDI: Max. 5"],
  ["Filtration Velocity", "15 m/Hr"],
  ["Backwash Velocity", "45 m/Hr"],
  ["Design Pressure", "7 Kg/cm²"],
  ["Operating Pressure", "2.5 – 4.0 Kg/cm²"],
  ["Design Temperature", "5 – 50°C"],
  ["Vessel Material", "MSEP / FRP / MSRL"],
  ["Internal Coating", "Epoxy Coated"],
  ["External Coating", "PU / Epoxy Painted"],
  ["Connection Size", "DN65 / DN80"],
];
const media: Row[] = [
  ["Anthracite", "600 mm"],
  ["Sand", "500 mm"],
  ["Garnet", "200 mm"],
  ["Pebbles", "150 mm"],
];
const pumps: Row[] = [
  ["Flow Rate", "20 m³/Hr"],
  ["Head", "20 m"],
  ["Motor Power", "3.0 HP"],
  ["Efficiency", "~65%"],
  ["NPSHr", "3.0 m"],
  ["Duty Point", "80%"],
];
const frpElectric: Row[] = [
  ["Raw Water Pump", "3.0 HP", "1", "3.0", "415V, 3Ph"],
  ["Backwash Pump", "3.0 HP", "1", "3.0", "415V, 3Ph"],
  ["Multiport Valve Actuator (Optional)", "0.25 HP", "1", "0.25", "230V, 1Ph"],
  ["Total Connected Load", "", "", "6.25 HP", ""],
  ["Approx. Power Consumption", "", "", "4.5 – 5.0 kW/Hr", ""],
];
const msepElectric = frpElectric.map((r) => [...r]);
const frpArea: Row[] = [
  ["Equipment Foot Print (Approx.)", "2.0 m (L) × 1.5 m (W)"],
  ["Recommended Area (With Clearance)", "4.0 m (L) × 3.0 m (W)"],
  ["Area Required", "12.0 m²"],
];
const msepArea: Row[] = [
  ["Equipment Foot Print (Approx.)", "3.0 m (L) × 2.0 m (W)"],
  ["Recommended Area (With Clearance)", "5.0 m (L) × 4.0 m (W)"],
  ["Area Required", "20.0 m²"],
];
const frpEquipment: Row[] = [
  [
    "1",
    "FRP Vessel",
    "Ø1050 mm x 2200 mm H",
    "FRP (Food Grade)",
    "1 No.",
    "Designed for 15 m³/Hr",
  ],
  ["2", "Multiport Valve", "65 NB, 6 Way", "FRP / PP", "1 No.", "Top Mount"],
  [
    "3",
    "Raw Water Pump",
    "20 m³/Hr, 20 m Head, 3.0 HP",
    "CI / SS",
    "1 No.",
    "Centrifugal Pump",
  ],
  [
    "4",
    "Backwash Pump",
    "20 m³/Hr, 20 m Head, 3.0 HP",
    "CI / SS",
    "1 No.",
    "Centrifugal Pump",
  ],
  [
    "5",
    "Pressure Gauge",
    "0 – 10 Kg/cm²",
    "SS-304",
    "2 Nos.",
    "Inlet & Outlet",
  ],
  ["6", "Air Vent Valve", "15 NB", "Brass / SS", "1 No.", "On Top"],
  ["7", "Sampling Valve", "15 NB", "Brass / SS", "2 Nos.", "Inlet & Outlet"],
  ["8", "Drain Valve", "25 NB", "Brass / SS", "2 Nos.", "Inlet & Outlet"],
  [
    "9",
    "Underdrain System",
    "Lateral Type",
    "ABS / UPVC",
    "1 Set",
    "With Nozzles",
  ],
  [
    "10",
    "Piping & Fittings",
    "As per P&ID",
    "UPVC / GI / SS",
    "1 Lot",
    "Complete Interconnection",
  ],
  [
    "11",
    "Electrical Panel",
    "DOL Starter, MCCB",
    "MS Powder Coated",
    "1 No.",
    "For Pumps & Control Valve",
  ],
  ["12", "Foundation Bolts", "M16", "GI", "4 Nos.", "For Vessel Mounting"],
];
const msepEquipment: Row[] = [
  [
    "1",
    "MSEP Vessel",
    "Ø1200 mm x 2400 mm H",
    "MSEP / FRP / MSRL",
    "1 No.",
    "Designed for 15 m³/Hr",
  ],
  [
    "2",
    "Multiport Control Valve",
    "Automatic / 6 Way",
    "CI / DI",
    "1 No.",
    "6 Way / 8 Way",
  ],
  [
    "3",
    "Raw Water Pump",
    "20 m³/Hr, 20 m Head, 3.0 HP",
    "CI / SS",
    "1 No.",
    "Centrifugal Monoblock",
  ],
  [
    "4",
    "Backwash Pump",
    "20 m³/Hr, 20 m Head, 3.0 HP",
    "CI / SS",
    "1 No.",
    "Centrifugal Monoblock",
  ],
  [
    "5",
    "Pressure Gauge",
    "0 – 10 Kg/cm²",
    "SS-304",
    "2 Nos.",
    "Inlet & Outlet",
  ],
  ["6", "Air Vent Valve", "15 NB", "Brass / SS", "1 No.", "On Top"],
  ["7", "Sampling Valve", "15 NB", "Brass / SS", "2 Nos.", "Inlet & Outlet"],
  ["8", "Drain Valve", "25 NB", "Brass / SS", "2 Nos.", "Inlet & Outlet"],
  [
    "9",
    "Underdrain System",
    "Lateral Type",
    "ABS / UPVC",
    "1 Set",
    "With Nozzles",
  ],
  [
    "10",
    "Piping & Fittings",
    "As per P&ID",
    "UPVC / GI / SS",
    "1 Lot",
    "Complete Interconnection",
  ],
  [
    "11",
    "Electrical Panel",
    "DOL Starter, MCCB",
    "MS Powder Coated",
    "1 No.",
    "For Pumps & Control Valve",
  ],
];
const frpBoq: Row[] = [
  ["1", "FRP Vessel", "Nos.", "1"],
  ["2", "Multiport Valve", "Nos.", "1"],
  ["3", "Raw Water Pump", "Nos.", "1"],
  ["4", "Backwash Pump", "Nos.", "1"],
  ["5", "Pressure Gauge", "Nos.", "2"],
  ["6", "Air Vent Valve", "Nos.", "1"],
  ["7", "Sampling Valve", "Nos.", "2"],
  ["8", "Drain Valve", "Nos.", "2"],
  ["9", "Piping & Fittings", "Lot", "1"],
  ["10", "Electrical Panel", "Nos.", "1"],
  ["11", "Installation Material", "Lot", "1"],
];
const msepBoq: Row[] = [
  ["1", "MSEP Vessel", "Nos.", "1"],
  ["2", "Multiport Valve 65 NB", "Nos.", "1"],
  ["3", "Raw Water Pump", "Nos.", "1"],
  ["4", "Backwash Pump", "Nos.", "1"],
  ["5", "Pressure Gauge", "Nos.", "2"],
  ["6", "Air Vent Valve", "Nos.", "1"],
  ["7", "Sampling Valve", "Nos.", "2"],
  ["8", "Drain Valve", "Nos.", "2"],
  ["9", "Piping & Fittings", "Lot", "1"],
  ["10", "Electrical Panel", "Nos.", "1"],
  ["11", "Installation Material", "Lot", "1"],
];
const summary = [
  "Multi Grade Filter is designed to remove suspended particles, turbidity, color, and other impurities.",
  "It consists of graded filtration media to ensure high filtration efficiency and long operating cycles.",
  "Automatic backwash system ensures easy & efficient cleaning.",
  "Suitable for industrial, commercial and institutional use.",
];
function Configuration({
  id,
  title,
  label,
  image,
  basic,
  equipment,
  boq,
  electric,
  area,
  isFrp,
}: {
  id: string;
  title: string;
  label: string;
  image: string;
  basic: Row[];
  equipment: Row[];
  boq: Row[];
  electric: Row[];
  area: Row[];
  isFrp: boolean;
}) {
  return (
    <section id={id} className={styles.config}>
      <div className={styles.container}>
        <Heading eyebrow={label} title={title}>
          15 m³/hr · Anthracite + Sand + Garnet + Pebbles
        </Heading>
        <figure className={styles.drawing}>
          <Image
            src={image}
            alt={`${title} technical drawing`}
            width={1536}
            height={2048}
            sizes="(max-width: 1200px) 100vw, 1180px"
          />
          <figcaption>{title} – supplied technical drawing</figcaption>
        </figure>
        <div className={styles.dataGrid}>
          <article>
            <h3>Basic Design Data</h3>
            <Table rows={basic} />
          </article>
          <article>
            <h3>Design Summary</h3>
            <ul>
              {summary.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Filter Media Configuration</h3>
            <Table rows={media} />
          </article>
          <article>
            <h3>Pump Design Data</h3>
            <Table
              rows={pumps}
              headers={[
                "Parameter",
                isFrp
                  ? "Raw Water Pump / Backwash Pump"
                  : "Raw Water Pump / Backwash Pump",
              ]}
            />
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Filtration Operation – Down Flow</h3>
            <div className={styles.flow}>
              <span>Raw Water Inlet</span>
              <b>→</b>
              <span>
                Multiport Valve<small>Pressure Gauge</small>
              </span>
              <b>→</b>
              <span>
                {isFrp ? "FRP" : "MSEP"} Filter<small>Media Bed</small>
              </span>
              <b>→</b>
              <span>Filtered Water Outlet</span>
            </div>
            <p className={styles.note}>Normal Filtration = Down Flow</p>
          </article>
          <article>
            <h3>Backwash Operation – Up Flow</h3>
            <div className={styles.flow}>
              <span>Backwash Water</span>
              <b>→</b>
              <span>Underdrain</span>
              <b>→</b>
              <span>Media Bed</span>
              <b>→</b>
              <span>Drain</span>
            </div>
            <p className={styles.note}>Backwash = Up Flow</p>
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Electrical Load</h3>
            <Table
              rows={electric}
              headers={[
                "Equipment",
                "Power (HP)",
                "Qty.",
                "Total (HP)",
                "Voltage",
              ]}
            />
          </article>
          <article>
            <h3>Area Covered</h3>
            <Table rows={area} />
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Equipment List</h3>
            <Table
              rows={equipment}
              headers={[
                "Sr. No.",
                "Equipment",
                "Specification",
                "Material",
                "Qty.",
                "Remarks",
              ]}
            />
          </article>
          <article>
            <h3>{isFrp ? "Multiport Valve – 65 NB" : "Valve Arrangement"}</h3>
            <p className={styles.textBlock}>
              {isFrp
                ? 'Size: 65 NB · Type: 6 Way Multiport Valve · Material: FRP / PP · Port Size: 65 NB (2½") · Mounting: Top Mount · Functions: Filtration, Backwash, Rinse, Waste, Recirculate, Close · Operation: Manual'
                : "The supplied MSEP drawing uses butterfly valves in the illustrated piping arrangement."}
            </p>
          </article>
        </div>
        <div className={styles.boq}>
          <h3>Bill of Quantities (BOQ)</h3>
          <Table rows={boq} headers={["Sr. No.", "Item", "Unit", "Qty."]} />
        </div>
      </div>
    </section>
  );
}

export default function MultiGradeFilterPage() {
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
              <strong>Multi Grade Filter</strong>
            </div> */}
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>
                  AQUEN product system · MGF / DMF
                </span>
                <h1>
                  Multi Grade Filter <em>(MGF)</em>
                </h1>
                <h2>15 m³/hr Industrial Water Filtration System</h2>
                <p>
                  Multi Grade Filter engineered for efficient reduction of
                  suspended particles, turbidity, color and other impurities
                  using graded filtration media, with FRP and MSEP vessel
                  configurations.
                </p>
                <div className={styles.actions}>
                  <Link className={styles.primary} href="/contact">
                    Discuss your water system <ArrowRight size={17} />
                  </Link>
                  <a className={styles.textLink} href="#configurations">
                    Explore configurations <ArrowRight size={15} />
                  </a>
                </div>
                <div className={styles.metrics}>
                  <div>
                    <strong>15 m³/hr</strong>
                    <span>capacity</span>
                  </div>
                  <div>
                    <strong>20 Hrs/Day</strong>
                    <span>operating hours</span>
                  </div>
                  <div>
                    <strong>45 m/hr</strong>
                    <span>backwash velocity</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                  <div className={styles.heroVisualMedia}>
                <Image
                  src="/Multigrade.png"
                  alt="Multi Grade Filter 15 m³/hr FRP vessel system"
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
        <section id="configurations" className={styles.selector}>
          <div className={styles.container}>
            <Heading
              eyebrow="Available vessel configurations"
              title="One MGF product. Two vessel systems."
            >
              Both supplied configurations use Anthracite, Sand, Garnet and
              Pebbles as the four media layers.
            </Heading>
            <div className={styles.selectorGrid}>
              <a href="#frp">
                <span>Configuration 01</span>
                <strong>FRP Vessel</strong>
                <small>15 m³/hr · Multi Grade Filter</small>
              </a>
              <a href="#msep">
                <span>Configuration 02</span>
                <strong>MSEP Vessel</strong>
                <small>15 m³/hr · Vertical Pressure Sand Filter</small>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.overview}>
          <div className={styles.container}>
            <Heading
              eyebrow="01 · Product overview"
              title="Multi Grade Filter – 15 m³/hr"
            >
              Also known generally as a Dual Media Filter (DMF).
            </Heading>
            <div className={styles.overviewGrid}>
              <article>
                <Droplets size={20} />
                <h3>Graded media bed</h3>
                <p>
                  Raw water flows downward through Anthracite, Sand, Garnet and
                  Pebbles. The graded layers remove suspended particles,
                  turbidity, color and other impurities.
                </p>
              </article>
              <article>
                <ShieldCheck size={20} />
                <h3>Backwash cleaning</h3>
                <p>
                  During backwashing, water flows upward to loosen the media bed
                  and remove accumulated contaminants. Normal filtration is down
                  flow; backwash is up flow.
                </p>
              </article>
            </div>
          </div>
        </section>
        <Configuration
          id="frp"
          label="Configuration 01 · FRP Vessel"
          title="Multi Grade Filter (FRP) – 15 m³/hr"
          image="/mgf-15000-lph-frp.png"
          basic={frpBasic}
          equipment={frpEquipment}
          boq={frpBoq}
          electric={frpElectric}
          area={frpArea}
          isFrp
        />
        <Configuration
          id="msep"
          label="Configuration 02 · MSEP Vessel"
          title="Multi Grade Filter (MSEP) – 15 m³/hr"
          image="/mgf-15000-lph-msep.png"
          basic={msepBasic}
          equipment={msepEquipment}
          boq={msepBoq}
          electric={msepElectric}
          area={msepArea}
        />
        <section className={styles.general}>
          <div className={styles.container}>
            <Heading
              eyebrow="02 · General DMF / MGF information"
              title="How Multi Grade / Dual Media Filtration Works"
            >
              General educational information from the supplied DMF document is
              separate from the exact 15 m³/hr drawing data.
            </Heading>
            <div className={styles.generalGrid}>
              <article>
                <h3>General filtration technology</h3>
                <p>
                  Anthracite, being coarser and lighter, captures larger
                  suspended particles. Fine sand below removes finer particles
                  and turbidity. Supporting media assists flow distribution and
                  supports the filtration bed. Periodic backwashing loosens and
                  flushes retained solids.
                </p>
              </article>
              <article>
                <h3>Vessel Construction Options</h3>
                <p>
                  <strong>FRP:</strong> Lightweight, corrosion-resistant,
                  non-metallic, compact and easy to install for small/medium
                  capacities.
                </p>
                <p>
                  <strong>MS / MSEP:</strong> Robust fabricated construction
                  with protective internal coating/lining and external
                  anticorrosive protection for higher-duty applications.
                </p>
              </article>
            </div>
            <div className={styles.comparison}>
              <h2>FRP vs MSEP Multi Grade Filter</h2>
              <Table
                headers={["Parameter", "FRP Vessel", "MSEP Vessel"]}
                rows={[
                  ["Capacity", "15 m³/hr", "15 m³/hr"],
                  ["Filtration Velocity", "15 m/hr", "15 m/hr"],
                  ["Backwash Velocity", "45 m/hr", "45 m/hr"],
                  ["Design Pressure", "6 Kg/cm²", "7 Kg/cm²"],
                  ["Operating Pressure", "2.5–4.0 Kg/cm²", "2.5–4.0 Kg/cm²"],
                  [
                    "Media",
                    "Anthracite + Sand + Garnet + Pebbles",
                    "Anthracite + Sand + Garnet + Pebbles",
                  ],
                  [
                    "Media Depths",
                    "600 / 500 / 200 / 150 mm",
                    "600 / 500 / 200 / 150 mm",
                  ],
                  [
                    "Raw & Backwash Pump",
                    "20 m³/hr, 20 m, 3 HP",
                    "20 m³/hr, 20 m, 3 HP",
                  ],
                  ["Total Connected Load", "6.25 HP", "6.25 HP"],
                  [
                    "Approx. Power Consumption",
                    "4.5–5.0 kW/Hr",
                    "4.5–5.0 kW/Hr",
                  ],
                  ["Area Required", "12.0 m²", "20.0 m²"],
                ]}
              />
            </div>
            <div className={styles.scope}>
              <h2>Scope of Supply</h2>
              <div className={styles.applicationGrid}>
                {[
                  "Supply of equipment as per equipment list",
                  "Interconnecting piping & valves",
                  "Electrical panel & cabling",
                  "Operation & Maintenance Manual",
                  "Performance Guarantee",
                  "Erection, Testing & Commissioning – Optional",
                ].map((item) => (
                  <div key={item}>
                    <Check size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.generalGrid}>
              <article>
                <h3>Applications</h3>
                <ul>
                  {[
                    "Drinking Water Treatment",
                    "RO Pretreatment",
                    "UF Pretreatment",
                    "Water Softener Pretreatment",
                    "Industrial Process Water",
                    "Cooling Tower Make-Up Water",
                    "STP Tertiary Filtration",
                    "ETP Tertiary Filtration",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <h3>Engineering Notes</h3>
                <ul>
                  <li>
                    Design is indicative and can be customized as per site
                    condition and raw water quality.
                  </li>
                  <li>
                    Filtration media should be replaced periodically for better
                    performance.
                  </li>
                  <li>
                    Regular backwashing is recommended for optimum efficiency.
                  </li>
                  <li>
                    All valves are Butterfly valves for reliable and easy
                    operation where identified in the drawing.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className={styles.features}>
          <div className={styles.container}>
            <Heading eyebrow="03 · Key features" title="Key Features" />
            <div className={styles.featureGrid}>
              {[
                "Turbidity Reduction",
                "Suspended Solids Removal",
                "Graded Multi-Layer Media",
                "Efficient Backwashing",
                "Low Pressure Drop",
                "Long Filtration Cycles",
                "Industrial Construction",
                "Easy Operation & Maintenance",
              ].map((item) => (
                <div key={item}>
                  <ShieldCheck size={17} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
