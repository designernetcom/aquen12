// @ts-nocheck
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Droplets, ShieldCheck } from "lucide-react";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Water Softener | 15000 LPH Industrial Softening System",
  description:
    "15 m³/hr Water Softener with FRP and MSEP vessel configurations, cation exchange resin and automatic regeneration.",
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

const basic: Row[] = [
  ["Design Flow", "15 m³/hr"],
  ["Operation Hours", "20 Hrs/ Day"],
  ["Raw Water Hardness", "400 mg/l (as CaCO₃)"],
  ["Treated Water Hardness", "< 20 mg/l (as CaCO₃)"],
  ["Regeneration Cycle", "20 Hrs"],
  ["Vessel Type", "MSEP (MS Fabricated)"],
  ["Vessel Size (ID x H)", "1600 mm x 2600 mm"],
  ["Operating Pressure", "2.5 to 4.0 kg/cm²"],
  ["Design Pressure", "6.0 kg/cm²"],
  ["Design Temperature", "5 – 50 °C"],
  ["Media", "Cation Resin (Food Grade)"],
  ["Resin Quantity", "2200 Liters (approx.)"],
  ["Free Board", "40% of Vessel Height"],
];
const regeneration: Row[] = [
  ["1", "Backwash", "2.25"],
  ["2", "Brine Draw & Slow Rinse", "2.70"],
  ["3", "Fast Rinse", "2.25"],
  ["4", "Final Rinse", "1.13"],
  ["TOTAL", "", "8.33 m³ / Cycle"],
];
const pump: Row[] = [
  ["Type", "Centrifugal Monoblock Pump"],
  ["Flow", "15 m³/ Hr"],
  ["Head", "30 MWC"],
  ["Power", "2.2 kW (3 HP)"],
  ["Voltage", "415 V, 3 Phase, 50 Hz"],
  ["Material", "CI / SS 304"],
  ["Quantity", "1 Working + 1 Spare"],
];
const backwashPump: Row[] = [
  ["Type", "Centrifugal Monoblock Pump"],
  ["Flow", "18 m³/ Hr"],
  ["Head", "20 MWC"],
  ["Power", "1.5 kW (2 HP)"],
  ["Voltage", "415 V, 3 Phase, 50 Hz"],
  ["Material", "CI / SS 304"],
  ["Quantity", "1 Working + 1 Spare"],
];
const regenTank: Row[] = [
  ["Type", "PE / PP"],
  ["Capacity", "1000 Liters"],
  ["Provision", "Lid, Inlet, Brine Draw Connection, Overflow & Drain"],
];
const frpElectric: Row[] = [
  ["Raw Water Pump (3 HP)", "2.2 kW"],
  ["Backwash Pump (2 HP)", "1.5 kW"],
  ["Control Panel & Accessories", "0.3 kW"],
  ["Total Connected Load", "4.0 kW"],
];
const msepElectric: Row[] = [
  ["Raw Water Pump (3 HP)", "2.2 kW"],
  ["Backwash Pump (2 HP)", "1.5 kW"],
  ["Multiport Valve Actuator", "0.2 kW"],
  ["Control Panel & Accessories", "0.3 kW"],
  ["Total Connected Load", "4.2 kW"],
];
const frpArea: Row[] = [
  ["Length", "5.0 Meter"],
  ["Width", "3.0 Meter"],
  ["Height", "3.5 Meter"],
  ["Area", "15.0 m² (approx.)"],
];
const msepArea = frpArea;
const frpEquipment: Row[] = [
  [
    "1",
    "Water Softener Vessel (MSEP)",
    "MS Fabricated",
    "1 No.",
    "With Nozzles",
  ],
  ["2", "Multiport Valve (Automatic)", "CI / SS", "1 No.", "DN65"],
  ["3", "Raw Water Pump", "CI / SS", "1 No.", "(1W + 1S)"],
  ["4", "Backwash Pump", "CI / SS", "1 No.", "(1W + 1S)"],
  ["5", "Regeneration Tank", "PE / PP", "1 No.", "1000 Ltrs."],
  ["6", "Butterfly Valves", "CI / SS", "As per Line", "DN65"],
  ["7", "Piping & Fittings", "UPVC / GI / SS", "As per Line", "–"],
  ["8", "Control Panel", "–", "1 No.", "Auto Operation"],
  ["9", "Pressure Gauge", "–", "2 Nos.", "Inlet & Outlet"],
  ["10", "Drain Connections", "–", "2 Nos.", "Backwash & Rinse"],
];
const msepEquipment: Row[] = [
  [
    "1",
    "Water Softener Vessel (MSEP)",
    "MS Fabricated",
    "1 No.",
    "With Nozzles",
  ],
  ["2", "Raw Water Pump", "CI / SS", "1 No.", "(1W + 1S)"],
  ["3", "Backwash Pump", "CI / SS", "1 No.", "(1W + 1S)"],
  ["4", "Regeneration Tank", "PE / PP", "1 No.", "1000 Ltrs."],
  ["5", "Butterfly Valves", "CI / SS", "As per Line", "DN65"],
  ["6", "Piping & Fittings", "UPVC / GI / SS", "As per Line", "–"],
  ["7", "Control Panel", "–", "1 No.", "Auto Operation"],
  ["8", "Pressure Gauge", "–", "2 Nos.", "Inlet & Outlet"],
  ["9", "Drain Connections", "–", "2 Nos.", "Backwash & Rinse"],
];
const frpBoq: Row[] = [
  ["1", "Water Softener Vessel (MSEP)", "1600Ø x 2600 mm", "No.", "1"],
  ["2", "Raw Water Pump", "3 HP, 15 m³/hr, 30 mwc", "Set", "2 (1W+1S)"],
  ["3", "Backwash Pump", "2 HP, 18 m³/hr, 20 mwc", "Set", "2 (1W+1S)"],
  ["4", "Regeneration Tank", "1000 Liters", "No.", "1"],
  ["5", "Butterfly Valve", "DN65, CI / SS", "No.", "10"],
  ["6", "Piping & Fittings", "GI / UPVC / SS", "Lot", "1"],
  ["7", "Control Panel", "Auto with Timer", "No.", "1"],
  ["8", "Pressure Gauge", "0 – 10 kg/cm²", "No.", "2"],
  ["9", "Misc. Accessories", "Strainer, NRV, Unions etc.", "Lot", "1"],
];
const msepBoq: Row[] = [
  ["1", "Water Softener Vessel (MSEP)", "1600Ø x 2600 mm", "No.", "1"],
  ["2", "Multiport Valve (Automatic)", "DN65", "No.", "1"],
  ["3", "Raw Water Pump", "3 HP, 15 m³/hr, 30 mwc", "Set", "2 (1W+1S)"],
  ["4", "Backwash Pump", "2 HP, 18 m³/hr, 20 mwc", "Set", "2 (1W+1S)"],
  ["5", "Regeneration Tank", "1000 Liters", "No.", "1"],
  ["6", "Butterfly Valve", "DN65, CI / SS", "No.", "10"],
  ["7", "Piping & Fittings", "GI / UPVC / SS", "Lot", "1"],
  ["8", "Control Panel", "Auto with Timer", "No.", "1"],
  ["9", "Pressure Gauge", "0 – 10 kg/cm²", "No.", "2"],
  ["10", "Misc. Accessories", "Strainer, NRV, Unions etc.", "Lot", "1"],
];

function Configuration({
  id,
  label,
  title,
  image,
  electric,
  equipment,
  boq,
  isFrp,
}: {
  id: string;
  label: string;
  title: string;
  image: string;
  electric: Row[];
  equipment: Row[];
  boq: Row[];
  isFrp: boolean;
}) {
  return (
    <section id={id} className={styles.config}>
      <div className={styles.container}>
        <Heading eyebrow={label} title={title}>
          15 m³/hr · Cation Resin (Food Grade) · Automatic regeneration system
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
              <li>
                Water softener is designed to remove hardness (Ca²⁺ &amp; Mg²⁺)
                ions by ion exchange process.
              </li>
              <li>Strong acid cation resin in H⁺ form is used.</li>
              <li>
                Hard water passes through resin bed and hardness ions are
                exchanged with Na⁺ ions.
              </li>
              <li>
                When resin gets exhausted, it is regenerated with brine
                solution.
              </li>
              <li>
                System is fully automatic using{" "}
                {isFrp ? "multi-port valve operation" : "butterfly valves"}.
              </li>
              <li>
                Suitable for continuous operation with minimum maintenance.
              </li>
            </ul>
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Regeneration Water Consumed (Per Cycle)</h3>
            <Table
              rows={regeneration}
              headers={["Step", "Description", "Water (m³)"]}
            />
            <p className={styles.noteText}>
              Salt Consumption ~ 180 Kg/Cycle (approx.)
            </p>
          </article>
          <article>
            <h3>Regeneration Tank</h3>
            <Table rows={regenTank} />
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Raw Water Pump – Design Data</h3>
            <Table rows={pump} />
          </article>
          <article>
            <h3>Backwash Pump – Design Data</h3>
            <Table rows={backwashPump} />
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Electrical Load (Total)</h3>
            <Table rows={electric} />
          </article>
          <article>
            <h3>Area Covered (Minimum)</h3>
            <Table rows={isFrp ? frpArea : msepArea} />
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Equipment List</h3>
            <Table
              rows={equipment}
              headers={[
                "Sr. No.",
                "Description",
                "Material",
                "Qty.",
                "Remarks",
              ]}
            />
          </article>
          <article>
            <h3>Working Principle</h3>
            <div className={styles.principle}>
              <span>Hard water</span>
              <b>→</b>
              <span>
                Cation resin bed<small>Ca²⁺ / Mg²⁺ exchanged with Na⁺</small>
              </span>
              <b>→</b>
              <span>Soft water</span>
            </div>
            <p className={styles.noteText}>
              Exhausted resin is regenerated with sodium chloride (NaCl) brine
              solution.
            </p>
          </article>
        </div>
        <div className={styles.boq}>
          <h3>Bill of Quantities (Electro – Mechanical)</h3>
          <Table
            rows={boq}
            headers={[
              "Sr. No.",
              "Item Description",
              "Specification",
              "Unit",
              "Qty.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default function WaterSoftenerPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
         
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>
                  AQUEN product system · water softener
                </span>
                <h1>
                  Water Softener <em>(15 m³/hr)</em>
                </h1>
                <h2>Industrial Ion Exchange Softening System</h2>
                <p>
                  A 15 m³/hr water softener that removes hardness-causing
                  calcium and magnesium ions through cation exchange resin and
                  brine regeneration. The supplied product drawings show FRP and
                  MSEP vessel presentations.
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
                    <span>design flow</span>
                  </div>
                  <div>
                    <strong>&lt; 20 mg/l</strong>
                    <span>treated hardness</span>
                  </div>
                  <div>
                    <strong>20 Hrs</strong>
                    <span>regeneration cycle</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                 <div className={styles.heroVisualMedia}>
                <Image
                  src="/Softener.png"
                  alt="Water Softener 15 m³/hr FRP vessel system"
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
              title="One water softener. Two supplied presentations."
            >
              Both drawings show a 15 m³/hr softening system using cation resin
              and brine regeneration.
            </Heading>
            <div className={styles.selectorGrid}>
              <a href="#frp">
                <span>Configuration 01</span>
                <strong>FRP / Multi Port Valve Type</strong>
                <small>15 m³/hr · cation resin · source drawing</small>
              </a>
              <a href="#msep">
                <span>Configuration 02</span>
                <strong>MSEP / Automatic Butterfly Valve Type</strong>
                <small>15 m³/hr · cation resin · source drawing</small>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.overview}>
          <div className={styles.container}>
            <Heading
              eyebrow="01 · Product overview"
              title="Water Softener Overview"
            >
              Hardness removal through ion exchange
            </Heading>
            <div className={styles.overviewGrid}>
              <article>
                <Droplets size={20} />
                <h3>Softening principle</h3>
                <p>
                  Hard water passes through a bed of strong acid cation resin in
                  sodium form. Calcium and magnesium ions are exchanged with
                  sodium ions, resulting in softened water.
                </p>
              </article>
              <article>
                <ShieldCheck size={20} />
                <h3>Regeneration cycle</h3>
                <p>
                  After the resin gets exhausted, the unit is regenerated with
                  sodium chloride (NaCl) brine solution to restore the resin to
                  sodium form.
                </p>
              </article>
            </div>
          </div>
        </section>
        <Configuration
          id="frp"
          label="Configuration 01 · FRP / Multi Port Valve Type"
          title="15 m³/hr Water Softener – FRP Vessel Presentation"
          image="/water-softener-15000-lph-frp.png"
          electric={frpElectric}
          equipment={frpEquipment}
          boq={frpBoq}
          isFrp
        />
        <Configuration
          id="msep"
          label="Configuration 02 · MSEP / Butterfly Valve Type"
          title="15 m³/hr Water Softener – MSEP Vessel System"
          image="/water-softener-15000-lph-msep.png"
          electric={msepElectric}
          equipment={msepEquipment}
          boq={msepBoq}
        />
        <section className={styles.general}>
          <div className={styles.container}>
            <Heading
              eyebrow="02 · General information from supplied DOCX"
              title="Water Softener in MS and FRP Vessel"
            >
              The following information is general technical guidance and
              remains separate from the exact 15 m³/hr drawing values.
            </Heading>
            <div className={styles.generalGrid}>
              <article>
                <h3>Construction &amp; Applications</h3>
                <p>
                  Water softeners are available in Mild Steel vessels with
                  epoxy/rubber lining and FRP vessels, depending on application,
                  operating pressure and cost considerations. General
                  applications include boiler feed water, cooling tower make-up,
                  RO pretreatment, process industries, laundries, hotels,
                  hospitals and institutions.
                </p>
              </article>
              <article>
                <h3>Modes of Operation</h3>
                <ul>
                  <li>Service (softening mode)</li>
                  <li>Backwash</li>
                  <li>Brine injection &amp; slow rinse</li>
                  <li>Fast rinse</li>
                </ul>
              </article>
            </div>
            <div className={styles.comparison}>
              <h2>FRP vs MSEP Water Softener</h2>
              <Table
                headers={["Parameter", "FRP Vessel", "MSEP / MS Vessel"]}
                rows={[
                  [
                    "Material of Construction",
                    "FRP (Fiberglass Reinforced Plastic)",
                    "Mild Steel with epoxy/rubber lining",
                  ],
                  [
                    "Strength & Durability",
                    "Lightweight; moderate strength",
                    "Heavy-duty industrial construction",
                  ],
                  [
                    "Operating Pressure",
                    "Medium; up to 3–4 kg/cm² general DOCX information",
                    "High; up to 5–6 kg/cm² general DOCX information",
                  ],
                  [
                    "Flow Handling",
                    "Small to medium capacities",
                    "Large volumes and continuous operation",
                  ],
                  [
                    "Maintenance",
                    "Very low maintenance",
                    "Periodic coating maintenance",
                  ],
                  [
                    "Applications",
                    "Hotels, hospitals, laundries, small RO plants",
                    "Boiler feed, cooling towers, power, textile, pharma and steel industries",
                  ],
                ]}
              />
            </div>
          </div>
        </section>
        <section className={styles.features}>
          <div className={styles.container}>
            <Heading
              eyebrow="03 · Features & applications"
              title="Key Features"
            >
              Supported by the supplied drawings and general softener document.
            </Heading>
            <div className={styles.featureGrid}>
              {[
                "Automatic operation",
                "Salt efficiency",
                "Low maintenance",
                "Reliable & durable",
                "High quality resin",
                "Hardness and scale control",
              ].map((item) => (
                <div key={item}>
                  <Check size={17} />
                  {item}
                </div>
              ))}
            </div>
            <div className={styles.applicationGrid}>
              {[
                "Boiler feed water treatment",
                "Cooling tower make-up water",
                "RO plant pretreatment",
                "Process industries",
                "Hotels, hospitals and laundries",
                "Commercial establishments",
              ].map((item) => (
                <div key={item}>
                  <ShieldCheck size={16} />
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
