import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Droplets, Gauge, ShieldCheck } from "lucide-react";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Iron Removal Plant | 15 m³/hr IRP",
  description:
    "15 m³/hr Iron Removal Plant with MZ-10 media, FRP and MSEP vessel configurations for oxidation, filtration and adsorption.",
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

const frpInput: Row[] = [
  ["Flow Rate", "15 m³/hr"],
  ["Input Iron (Fe)", "15 ppm"],
  ["Media Used", "MZ-10"],
  ["Operating Hours", "20 hrs/day"],
  ["Raw Water pH", "6.5–8.5"],
  ["Temperature", "Ambient"],
  ["Inlet Pressure", "2.0–3.0 kg/cm²"],
  ["Backwash Type", "Air + Water"],
  ["Filter Type", "Pressure Sand Filter (FRP)"],
];
const msepInput: Row[] = [
  ...frpInput.slice(0, 8),
  ["Filter Type", "Pressure Sand Filter (MSEP)"],
];
const filterData = (moc: string, height: string, type: string): Row[] => [
  ["Filter Type", type],
  ["Vessel Material", moc],
  ["Vessel Size (ID)", "1600 mm"],
  ["Vessel Height", height],
  ["Design Pressure", "6 kg/cm²(g)"],
  ["Design Temperature", "60°C"],
  ["No. of Units", "1 No. (Duty)"],
  ["Flow Rate", "15 m³/hr"],
  ["Filtration Velocity", "8.3 m/hr"],
  ["Backwash Velocity", "24–26 m/hr"],
  ["Backwash Duration", "10–12 min"],
  ["Media Used", "MZ-10"],
  ["Media Bed Depth", "1200 mm"],
  ["Free Board", "600 mm"],
];
const media: Row[] = [
  ["Media Type", "MZ-10 (Iron Removal Media)"],
  ["Effective Size", "1.0–2.0 mm"],
  ["Uniformity Coefficient", "≤ 1.7"],
  ["Bulk Density", "750–850 kg/m³"],
  ["Media Quantity", "~ 2,000 kg (Approx.)"],
  ["Media Bed Depth", "1200 mm"],
  ["Support Gravel", "350 mm"],
  ["Gravel", "3–20 mm"],
];
const backwash: Row[] = [
  ["Backwash Flow Rate", "25 m³/hr"],
  ["Backwash Duration", "10–12 min"],
  ["Backwash Water Consumption", "~ 4.0–5.0 m³/cycle"],
  ["Backwash Type", "Air + Water"],
];
const frpPumps: Row[] = [
  ["Flow Rate", "15 m³/hr"],
  ["Head", "20–25 m"],
  ["Pump Type", "Centrifugal Pump"],
  ["Motor Power", "2.2 kW / 3 HP"],
  ["MOC", "CI / SS304"],
];
const backwashPump: Row[] = [
  ["Flow Rate", "25 m³/hr"],
  ["Head", "12–15 m"],
  ["Pump Type", "Centrifugal Pump"],
  ["Motor Power", "2.2 kW / 3 HP"],
  ["MOC", "CI / SS304"],
];
const frpAir: Row[] = [
  ["Type", "Reciprocating"],
  ["Capacity", "40 SCFM @ 7 bar"],
  ["Power", "2.2 kW / 3 HP"],
  ["Tank Capacity", "200 Liters"],
  ["Working Pressure", "7 bar"],
];
const msepAir: Row[] = [
  ["Capacity", "100 LPM @ 6.5 bar"],
  ["Power", "1.5 kW / 2 HP"],
  ["Type", "Reciprocating"],
];
const frpElectric: Row[] = [
  ["Raw Water Pump", "2.2 kW"],
  ["Backwash Pump", "2.2 kW"],
  ["Air Compressor", "2.2 kW"],
  ["Control Panel Load", "1.0 kW"],
  ["Total Connected Load", "~7.6 kW"],
  ["Operating Load", "~6.0 kW"],
];
const msepElectric: Row[] = [
  ["Raw Water Pump", "2.2 kW"],
  ["Backwash Pump", "2.2 kW"],
  ["Air Compressor", "1.5 kW"],
  ["Control Panel Load", "0.5 kW"],
  ["Total Connected Load", "~6.4 kW"],
];
const frpArea: Row[] = [
  ["Filter Area", "2.5 m (L) × 2.0 m (W)"],
  ["Pump Area", "2.0 m (L) × 1.5 m (W)"],
  ["Compressor Area", "2.0 m (L) × 1.5 m (W)"],
  ["Control Panel Area", "1.0 m (L) × 0.6 m (W)"],
  ["Total Area Required", "~20–22 m²"],
  ["Note", "Including Working Space."],
];
const msepArea: Row[] = [
  ["Filter Area", "2.5 m (L) × 2.5 m (W)"],
  ["Pump Area", "2.0 m (L) × 1.5 m (W)"],
  ["Compressor Area", "1.5 m (L) × 1.5 m (W)"],
  ["Control Panel Area", "1.0 m × 0.6 m"],
  ["Total Area Required", "~20–25 m²"],
  ["Note", "Including Working Space."],
];
const frpEquipment: Row[] = [
  ["1", "FRP Vessel (Iron Removal Filter)", "FRP", "1"],
  ["2", "Multiport Valve (Automatic)", "FRP / ABS", "1"],
  ["3", "Raw Water Centrifugal Pump", "CI / SS304", "1"],
  ["4", "Backwash Centrifugal Pump", "CI / SS304", "1"],
  ["5", "Air Compressor", "MS", "1"],
  ["6", "Air Vent Valve", "Brass / CI", "1"],
  ["7", "Drain Valve", "CI", "1"],
  ["8", "Control Panel", "MS", "1"],
  ["9", "Piping & Fittings", "GI / PVC", "L.S."],
];
const msepEquipment: Row[] = [
  ["1", "MSEP Vessel (MZ-10 Media)", "MS (IS 2062)", "1"],
  ["2", "Raw Water Centrifugal Pump", "CI / SS304", "1"],
  ["3", "Backwash Centrifugal Pump", "CI / SS304", "1"],
  ["4", "Air Compressor", "CI / MS", "1"],
  ["5", "Butterfly Valves (All Lines)", "CI / DI / SS", "6"],
  ["6", "Control Panel", "MS / Electrical", "1"],
  ["7", "Pressure Gauge", "SS", "2"],
  ["8", "Air Vent Valve", "Brass / CI", "1"],
  ["9", "Drain Valve", "CI / SS304", "1"],
  ["10", "Piping & Fittings", "GI / PVC", "L.S."],
];
const frpBoq: Row[] = [
  [
    "1",
    "FRP Vessel (Iron Removal Filter)",
    "Ø1600 x 2350 mm, MZ-10 Media",
    "FRP",
    "1",
    "Nos.",
  ],
  [
    "2",
    "Multiport Valve (Automatic)",
    "80 NB, 6 Way",
    "FRP / ABS",
    "1",
    "Nos.",
  ],
  [
    "3",
    "Raw Water Pump",
    "15 m³/hr @ 20–25 m Head, 3 HP",
    "CI / SS304",
    "1",
    "Nos.",
  ],
  [
    "4",
    "Backwash Pump",
    "25 m³/hr @ 12–15 m Head, 3 HP",
    "CI / SS304",
    "1",
    "Nos.",
  ],
  ["5", "Air Compressor", "2.2 kW, 40 SCFM @ 7 bar", "MS", "1", "Nos."],
  ["6", "Air Vent Valve", "25 NB", "Brass / CI", "1", "Nos."],
  ["7", "Drain Valve", "25 NB", "CI", "1", "Nos."],
  ["8", "Control Panel", "As per Layout", "MS", "1", "Nos."],
  [
    "9",
    "Piping & Fittings",
    "As per Layout with Indications",
    "GI / PVC",
    "L.S.",
    "L.S.",
  ],
  ["10", "Foundation & Supports", "MS Fabricated", "MS", "L.S.", "L.S."],
];
const msepBoq: Row[] = [
  [
    "1",
    "MSEP Vessel (Iron Removal Filter)",
    "Ø1600 x 3000 mm, MZ-10 Media",
    "MS (IS 2062)",
    "1",
    "Nos.",
  ],
  [
    "2",
    "Raw Water Pump",
    "15 m³/hr @ 20–25 m Head, 3 HP",
    "CI / SS304",
    "1",
    "Nos.",
  ],
  [
    "3",
    "Backwash Pump",
    "25 m³/hr @ 12–15 m Head, 3 HP",
    "CI / SS304",
    "1",
    "Nos.",
  ],
  ["4", "Air Compressor", "100 LPM @ 6.5 Bar, 1.5 kW", "CI / MS", "1", "Nos."],
  ["5", "Butterfly Valve", "DN 50 – DN 100", "CI / DI / SS", "6", "Nos."],
  ["6", "Pressure Gauge", "0–10 kg/cm²", "SS", "2", "Nos."],
  ["7", "Air Vent Valve", "½” BSP", "Brass / CI", "1", "Nos."],
  ["8", "Drain Valve", "1” BSP", "CI / SS304", "1", "Nos."],
  ["9", "Piping & Fittings", "As per Layout", "GI / PVC", "L.S.", "L.S."],
  [
    "10",
    "Control Panel",
    "DOL Starter with Indications",
    "MS / Electrical",
    "1",
    "Nos.",
  ],
  ["11", "Foundation & Supports", "MS Fabricated", "MS", "L.S.", "L.S."],
];
const generalTechnical: Row[] = [
  [
    "Influent Fe",
    "Up to 5 mg/L (typical design case; higher with pre-oxidation)",
  ],
  [
    "Effluent Fe",
    "≤ 0.3 mg/L typical; ≤ 0.05 mg/L with polishing and good control",
  ],
  ["Design Filtration Velocity", "6–15 m/h typical"],
  ["Bed Depth", "800–1200 mm effective media depth"],
  ["Backwash Rate", "30–60 m³/m²·h"],
  ["Backwash Duration", "10–20 minutes (water); air scour 1–3 min if used"],
];
const generalMoc: Row[] = [
  [
    "FRP",
    "Excellent corrosion resistance, lighter weight, economical for small to medium diameters; lower maximum allowable pressure and temperature limitations.",
  ],
  [
    "MS / Carbon Steel",
    "Robust and cost-effective for high pressure / large diameters; internal lining may be required.",
  ],
  [
    "SS 304 / SS 316",
    "Excellent corrosion resistance and durability; 316 is preferred for higher chlorides or aggressive chemicals.",
  ],
];

function Config({
  id,
  label,
  title,
  image,
  input,
  filter,
  summary,
  air,
  electric,
  area,
  equipment,
  boq,
  msep,
}: {
  id: string;
  label: string;
  title: string;
  image: string;
  input: Row[];
  filter: Row[];
  summary: string[];
  air: Row[];
  electric: Row[];
  area: Row[];
  equipment: Row[];
  boq: Row[];
  msep?: boolean;
}) {
  return (
    <section id={id} className={styles.config}>
      <div className={styles.container}>
        <Heading eyebrow={label} title={title}>
          Media: MZ-10 · 15 m³/hr Iron Removal Plant
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
        <div className={styles.configGrid}>
          <article>
            <h3>Input Design Data</h3>
            <Table rows={input} />
          </article>
          <article>
            <h3>Design Summary</h3>
            <ul>
              {summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Filter Design Data</h3>
            <Table rows={filter} />
          </article>
          <article>
            <h3>Media Details (MZ-10)</h3>
            <Table rows={media} />
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Backwash Consumption</h3>
            <Table rows={backwash} />
          </article>
          <article>
            <h3>{msep ? "Air Compressor" : "Air Compressor"}</h3>
            <Table rows={air} />
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Pump Design Data – Raw Water Pump</h3>
            <Table rows={frpPumps} />
          </article>
          <article>
            <h3>Pump Design Data – Backwash Pump</h3>
            <Table rows={backwashPump} />
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Electric Load</h3>
            <Table rows={electric} />
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
              headers={["Sr. No.", "Equipment", "Material", "Qty."]}
            />
          </article>
          <article>
            <h3>Process &amp; Piping Flow</h3>
            <div className={styles.flow}>
              <span>Raw Water Inlet</span>
              <b>→</b>
              <span>
                {msep ? "MSEP Vessel" : "FRP Vessel"}
                <small>MZ-10 Media</small>
              </span>
              <b>→</b>
              <span>Outlet to Storage / Use</span>
            </div>
            <ul className={styles.support}>
              <li>Backwash Pump</li>
              <li>Backwash Outlet</li>
              <li>Drain</li>
              <li>Air Vent</li>
              <li>Air Compressor / Air Line</li>
            </ul>
          </article>
        </div>
        <div className={styles.boq}>
          <h3>Bill of Quantities (BOQ)</h3>
          <Table
            rows={boq}
            headers={[
              "Sr. No.",
              "Item Description",
              "Specification / Details",
              "Material",
              "Qty.",
              "Unit",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default function IronRemovalPlantPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
          
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>
                  AQUEN product system · IRP
                </span>
                <h1>
                  Iron Removal Plant <em>(IRP)</em>
                </h1>
                <h2>15 m³/hr Iron Removal System</h2>
                <p>
                  Designed for iron removal using oxidation, filtration and
                  adsorption with MZ-10 Iron Removal Media. One product, with
                  FRP Vessel and MSEP Vessel configurations.
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
                    <span>flow rate</span>
                  </div>
                  <div>
                    <strong>MZ-10</strong>
                    <span>iron removal media</span>
                  </div>
                  <div>
                    <strong>Up to 98%</strong>
                    <span>removal efficiency stated in drawings</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                 <div className={styles.heroVisualMedia}>
                <Image
                  src="/ironremoval.png"
                  alt="Iron Removal Plant 15 m³/hr FRP vessel system"
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
              title="One IRP product. Two vessel systems."
            >
              Both supplied configurations use 15 m³/hr flow and MZ-10 media.
            </Heading>
            <div className={styles.selectorGrid}>
              <a href="#frp">
                <span>Configuration 01</span>
                <strong>FRP Vessel System</strong>
                <small>15 m³/hr · Media: MZ-10</small>
              </a>
              <a href="#msep">
                <span>Configuration 02</span>
                <strong>MSEP Vessel System</strong>
                <small>15 m³/hr · Media: MZ-10</small>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.processSection}>
          <div className={styles.container}>
            <Heading
              eyebrow="01 · How the iron removal plant works"
              title="Process Flow"
            >
              The supplied drawings show the same core treatment arrangement
              with configuration-specific vessel and valve construction.
            </Heading>
            <div className={styles.processFlow} aria-label="Iron removal treatment stages">
              <div className={styles.processStage}>
                <span className={styles.processNumber}>01</span>
                <div>
                  <small>Source</small>
                  <strong>Raw Water Inlet</strong>
                  <p>Incoming water enters the treatment line.</p>
                </div>
              </div>
              <span className={styles.processConnector} aria-hidden="true">→</span>
              <div className={styles.processStage}>
                <span className={styles.processNumber}>02</span>
                <div>
                  <small>Transfer</small>
                  <strong>Raw Water Pump</strong>
                  <p>Maintains the required operating flow and pressure.</p>
                </div>
              </div>
              <span className={styles.processConnector} aria-hidden="true">→</span>
              <div className={`${styles.processStage} ${styles.processStageFeatured}`}>
                <span className={styles.processNumber}>03</span>
                <div>
                  <small>Core treatment</small>
                  <strong>Iron Removal Vessel</strong>
                  <p>Oxidation, filtration and adsorption on <b>MZ-10 media</b>.</p>
                </div>
              </div>
              <span className={styles.processConnector} aria-hidden="true">→</span>
              <div className={styles.processStage}>
                <span className={styles.processNumber}>04</span>
                <div>
                  <small>Clean water</small>
                  <strong>Storage / Use</strong>
                  <p>Treated water is sent onward for its intended use.</p>
                </div>
              </div>
            </div>
            <div className={styles.supportPanel}>
              <div>
                <small>Supporting arrangement</small>
                <strong>Backwash &amp; air-scour provisions</strong>
              </div>
              <ul className={styles.supportList}>
                <li>Backwash Pump</li>
                <li>Backwash Outlet</li>
                <li>Drain</li>
                <li>Air Vent</li>
                <li>Air Compressor / Air Line</li>
              </ul>
            </div>
          </div>
        </section>
        <Config
          id="frp"
          label="Configuration 01 · FRP Vessel System"
          title="15 m³/hr Iron Removal Plant – FRP Vessel System"
          image="/irp-15000-lph-frp.png"
          input={frpInput}
          filter={filterData(
            "FRP (Fiber Reinforced Plastic)",
            "2350 mm (T/T)",
            "Pressure Sand Filter (FRP)",
          )}
          summary={[
            "Efficient removal of iron by oxidation, filtration & adsorption",
            "FRP vessel with multiport valve for automatic operation",
            "High removal efficiency up to 98%",
            "Corrosion resistant and light weight FRP vessel",
            "Low backwash water & power consumption",
            "Easy to operate & maintain",
          ]}
          air={frpAir}
          electric={frpElectric}
          area={frpArea}
          equipment={frpEquipment}
          boq={frpBoq}
        />
        <Config
          id="msep"
          label="Configuration 02 · MSEP Vessel System"
          title="15 m³/hr Iron Removal Plant – MSEP Vessel System"
          image="/irp-15000-lph-msep.png"
          input={msepInput}
          filter={filterData(
            "Mild Steel (IS 2062)",
            "3000 mm (T/T)",
            "Pressure Sand Filter (MSEP)",
          )}
          summary={[
            "Iron removal by oxidation, filtration & adsorption on MZ-10 media",
            "High removal efficiency up to 98%",
            "Robust MS fabricated MSEP vessel with epoxy coated (Internal)",
            "Butterfly Valves for isolation",
            "Automatic / Manual operation",
            "Low backwash water & power consumption",
            "Easy to operate & maintain",
          ]}
          air={msepAir}
          electric={msepElectric}
          area={msepArea}
          equipment={msepEquipment}
          boq={msepBoq}
          msep
        />
        <section className={styles.general}>
          <div className={styles.container}>
            <Heading
              eyebrow="02 · General information from supplied DOCX"
              title="Iron Removal Technology"
            >
              The following educational information is general and is not a
              replacement for the exact FRP or MSEP drawing data above.
            </Heading>
            <div className={styles.generalGrid}>
              <article>
                <h3>General Process Information</h3>
                <p>
                  An Iron Removal Plant removes dissolved and colloidal iron
                  from raw water. Dissolved ferrous iron can be oxidized to
                  particulate ferric iron, then removed by filtration,
                  adsorption and backwashing.
                </p>
                <ul>
                  <li>Raw water feed</li>
                  <li>OPTIONAL pre-sedimentation / clarifier</li>
                  <li>OPTIONAL chemical pretreatment</li>
                  <li>OPTIONAL aeration / oxidation</li>
                  <li>Pressure filtration</li>
                  <li>OPTIONAL post-polishing or disinfection</li>
                  <li>Backwash waste handling</li>
                </ul>
              </article>
              <article>
                <h3>Iron Removal Media Options – General</h3>
                <p>
                  Manganese Greensand, Birm, Filox-G, Anthracite + Sand and
                  Activated Carbon are general media options discussed in the
                  DOCX. The supplied 15 m³/hr drawings specifically use{" "}
                  <strong>MZ-10</strong>.
                </p>
                <Table rows={generalTechnical} />
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Vessel Material Options – General</h3>
                <Table rows={generalMoc} />
              </article>
              <article>
                <h3>Instrumentation &amp; Controls – General</h3>
                <p className={styles.textBlock}>
                  Pressure gauges, differential pressure monitoring, flow
                  meters, automatic control valves, multiport valves, PLC /
                  SCADA and alarm systems are general options. The supplied
                  drawings specifically include multiport/butterfly valve
                  arrangements and control panels.
                </p>
              </article>
            </div>
            <div className={styles.generalGrid}>
              <article>
                <h3>Operation &amp; Maintenance – General</h3>
                <ul>
                  <li>Fill the vessel slowly and remove air.</li>
                  <li>Run initial backwash to settle and clean media fines.</li>
                  <li>
                    Monitor pressure, differential pressure and outlet iron.
                  </li>
                  <li>
                    Backwash with water and use air scour where provided, then
                    rinse.
                  </li>
                  <li>
                    Inspect valves, controls and media; test water quality
                    periodically.
                  </li>
                </ul>
              </article>
              <article>
                <h3>General Features &amp; Applications</h3>
                <ul className={styles.applicationList}>
                  {[
                    "Domestic & Municipal Water Supply",
                    "Industrial Water Treatment",
                    "Boilers",
                    "Cooling Towers",
                    "Process Water",
                    "Food & Beverage",
                    "Pharmaceutical & Healthcare",
                    "Power Plants",
                    "Hotels & Resorts",
                    "Commercial Complexes",
                    "Agriculture & Irrigation",
                  ].map((item) => (
                    <li key={item}>
                      <Check size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <div className={styles.comparison}>
              <h2>FRP vs MSEP Iron Removal Plant</h2>
              <Table
                headers={["Field", "FRP Vessel System", "MSEP Vessel System"]}
                rows={[
                  ["Capacity", "15 m³/hr", "15 m³/hr"],
                  ["Media", "MZ-10", "MZ-10"],
                  [
                    "Filter Type",
                    "Pressure Sand Filter (FRP)",
                    "Pressure Sand Filter (MSEP)",
                  ],
                  [
                    "Vessel Material",
                    "FRP (Fiber Reinforced Plastic)",
                    "Mild Steel (IS 2062)",
                  ],
                  ["Vessel Diameter", "1600 mm", "1600 mm"],
                  ["Vessel Height", "2350 mm (T/T)", "3000 mm (T/T)"],
                  ["Design Pressure", "6 kg/cm²(g)", "6 kg/cm²(g)"],
                  ["Backwash Type", "Air + Water", "Air + Water"],
                  [
                    "Air Compressor",
                    "40 SCFM @ 7 bar; 2.2 kW / 3 HP",
                    "100 LPM @ 6.5 bar; 1.5 kW / 2 HP",
                  ],
                  [
                    "Electrical Load",
                    "~7.6 kW connected; ~6.0 kW operating",
                    "~6.4 kW connected",
                  ],
                  ["Approximate Area", "~20–22 m²", "~20–25 m²"],
                  [
                    "Valve Arrangement",
                    "Multiport Valve (Automatic)",
                    "Butterfly Valves (All Lines)",
                  ],
                  [
                    "Operation",
                    "Automatic operation",
                    "Automatic / Manual operation",
                  ],
                ]}
              />
            </div>
          </div>
        </section>
        <section className={styles.features}>
          <div className={styles.container}>
            <Heading eyebrow="03 · Key features" title="Key Features" />
            <div className={styles.featureGrid}>
              {[
                "Efficient iron removal",
                "MZ-10 Iron Removal Media",
                "Up to 98% removal efficiency as stated in the supplied drawings",
                "Air + water backwashing",
                "Low maintenance",
                "Corrosion-resistant FRP option",
                "Robust MSEP option",
                "Automatic/manual operation depending on configuration",
                "Compact industrial design",
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
