// @ts-nocheck
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Droplets, ShieldCheck } from "lucide-react";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Activated Carbon Filter | 15000 LPH ACF",
  description:
    "15 m³/hr Activated Carbon Filter with FRP and NSEP vessel configurations for chlorine, color, odor and organic impurity removal.",
};
type Row = string[];
const frpElectric: Row[] = [
  ["Raw Water Pump", "2.2", "3.0", "1", "2.2"],
  ["Backwash Pump", "3.7", "5.0", "1", "3.7"],
  ["Control Panel & Accessories", "0.5", "0.7", "1", "0.5"],
  ["TOTAL CONNECTED LOAD", "", "", "", "6.4 kW (Approx.)"],
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
  ["Capacity", "15 m³/hr"],
  ["Operation Hours", "20 hrs/day"],
  ["Filter Type", "Activated Carbon Filter"],
  ["Vessel Type", "FRP (Top & Bottom)"],
  ["Design Pressure", "6.0 kg/cm² (g)"],
  ["Operating Pressure", "2.5 – 3.0 kg/cm² (g)"],
  ["Design Temperature", "45 °C"],
  ["Inlet Water Quality", "Turbidity: 10 NTU (Max.); Chlorine: < 1 ppm"],
  ["Backwash Type", "Up Flow"],
  ["Backwash Flow Rate", "40 – 45 m³/hr"],
  ["Backwash Duration", "20 – 25 min"],
  ["Rinse Rate", "25 m³/hr"],
  ["Rinse Duration", "15 min"],
  ["Media", "Activated Carbon (12x40 mesh)"],
  ["Media Depth", "1200 mm"],
  ["Free Board", "600 mm"],
  ["Vessel Dia.", "1600 mm"],
  ["Vessel Height", "2400 mm (Approx.)"],
  ["Inlet / Outlet Size", "80 NB"],
  ["Drain Size", "50 NB"],
  ["Vent Size", "25 NB"],
  ["Total Weight (Dry)", "~ 400 Kg (Approx.)"],
];
const nsepBasic: Row[] = [
  ...frpBasic.slice(0, 3),
  ["Vessel Type", "MS / FRP (STD)"],
  ...frpBasic.slice(4, 17),
  ["Vessel Height (SS)", "3200 mm (Approx.)"],
  ...frpBasic.slice(18, 21),
  ["Total Weight (Dry)", "~ 850 Kg (Approx.)"],
];
const designSummary = [
  "Activated Carbon Filter is used for removal of color, odor, organic impurities and residual chlorine.",
  "Filter designed for continuous operation up to 20 hrs/day.",
  "Backwash by treated water to remove trapped impurities from carbon bed.",
  "Automatic / Manual Multiport Valve operation.",
  "Suitable for municipal & industrial water treatment.",
];
const pumps: Row[] = [
  ["Type", "Centrifugal"],
  ["Capacity", "15 m³/hr"],
  ["Head", "20 m"],
  ["Power", "3.0 HP / 2.2 kW"],
  ["Voltage", "415 V, 3 Ph, 50 Hz"],
  ["Material", "CI / SS 304"],
  ["Qty.", "1 Working + 1 Standby"],
];
const backwashPump: Row[] = [
  ["Type", "Centrifugal"],
  ["Capacity", "45 m³/hr"],
  ["Head", "20 m"],
  ["Power", "5.0 HP / 3.7 kW"],
  ["Voltage", "415 V, 3 Ph, 50 Hz"],
  ["Material", "CI / SS 304"],
  ["Qty.", "1 Working + 1 Standby"],
];
const electrical: Row[] = [
  ["Raw Water Pump", "2.2", "3.0", "1", "2.2"],
  ["Backwash Pump", "3.7", "5.0", "1", "3.7"],
  ["Control Panel & Accessories", "0.5", "0.7", "1", "0.5"],
  ["TOTAL CONNECTED LOAD", "", "", "", "6.4 kW (Approx.)"],
];
const area: Row[] = [
  ["Equipment Foot Print (Vessel + Pumps)", "6.0"],
  ["Working & Maintenance Area", "8.0"],
  ["Panel Area", "1.5"],
  ["Total Area Required", "15.5 m² (Approx.)"],
  [
    "Note",
    "Area may vary as per site condition. Provide adequate space for operation, maintenance and piping.",
  ],
];
const frpEquipment: Row[] = [
  [
    "1",
    "Activated Carbon Filter Vessel (FRP Vessel)",
    "Dia 1600 x 2400 mm",
    "1 No.",
    "",
  ],
  ["2", "Raw Water Pump", "15 m³/hr, 20 m Head", "1W + 1SB", ""],
  ["3", "Backwash Pump", "45 m³/hr, 20 m Head", "1W + 1SB", ""],
  ["4", "Multiport Valve (Manual / Auto)", "80 NB", "1 No.", ""],
  ["5", "Piping, Valves & Fittings", "As per Flow Diagram", "1 Lot", ""],
  ["6", "Control Panel", "Auto / Manual", "1 No.", ""],
  ["7", "Pressure Gauge & Accessories", "0 – 4 kg/cm²", "1 Lot", ""],
];
const nsepEquipment: Row[] = [
  ["1", "Activated Carbon Filter Vessel", "Dia 1600 x 3200 mm", "1 No.", ""],
  ["2", "Raw Water Pump", "15 m³/hr, 20 m Head", "1W + 1SB", ""],
  ["3", "Backwash Pump", "45 m³/hr, 20 m Head", "1W + 1SB", ""],
  ["4", "Multiport Valve (Manual / Auto)", "80 NB", "1 No.", ""],
  ["5", "Piping, Valves & Fittings", "As per Flow Diagram", "1 Lot", ""],
  ["6", "Control Panel", "Auto / Manual", "1 No.", ""],
  ["7", "Pressure Gauge & Accessories", "0 – 4 kg/cm²", "1 Lot", ""],
];
const frpBoq: Row[] = [
  ["1", "Activated Carbon Filter Vessel", "Dia 1600 x 2400 mm", "1", "No."],
  ["2", "Activated Carbon (12x40 Mesh)", "1200 mm Bed Depth", "2100", "Kg"],
  ["3", "Gravel (Support Media)", "6 – 12 mm", "500", "Kg"],
  ["4", "Raw Water Pump", "15 m³/hr, 20 m Head", "2", "Nos."],
  ["5", "Backwash Pump", "45 m³/hr, 20 m Head", "2", "Nos."],
  ["6", "Multiport Valve", "80 NB", "1", "No."],
  ["7", "Pressure Gauge", "0 – 4 kg/cm²", "2", "Nos."],
  [
    "8",
    "Piping & Fittings (UPVC / CI / SS)",
    "As per Flow Diagram",
    "1",
    "Lot",
  ],
  ["9", "Control Panel", "Auto / Manual", "1", "No."],
];
const nsepBoq = frpBoq.map((row) => [...row]);
function Configuration({
  id,
  title,
  label,
  image,
  basic,
  equipment,
  boq,
  isFrp,
}: {
  id: string;
  title: string;
  label: string;
  image: string;
  basic: Row[];
  equipment: Row[];
  boq: Row[];
  isFrp: boolean;
}) {
  return (
    <section id={id} className={styles.config}>
      <div className={styles.container}>
        <Heading eyebrow={label} title={title}>
          15 m³/hr · Activated Carbon (12x40 mesh) · Continuous operation up to
          20 hrs/day
        </Heading>
        <figure className={styles.drawing}>
          <Image
            src={image}
            alt={`${title} technical drawing`}
            width={1536}
            height={1024}
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
              {designSummary.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Raw Water Pump – Design Data</h3>
            <Table rows={pumps} />
          </article>
          <article>
            <h3>Backwash Pump – Design Data</h3>
            <Table rows={backwashPump} />
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Process &amp; Piping Flow Diagram</h3>
            <div className={styles.flow}>
              <span>Raw Water Inlet</span>
              <b>→</b>
              <span>
                {isFrp ? "FRP" : "NSEP"} ACF<small>Activated Carbon Bed</small>
              </span>
              <b>→</b>
              <span>Outlet</span>
            </div>
            <p className={styles.note}>
              Backwash Type: Up Flow · Backwash water from backwash pump · Drain
              connection as shown in the supplied drawing.
            </p>
          </article>
          <article>
            <h3>Electrical Load (Connected Load)</h3>
            <Table
              rows={electrical}
              headers={["Equipment", "Power (kW)", "HP", "Qty.", "Total kW"]}
            />
          </article>
        </div>
        <div className={styles.dataGrid}>
          <article>
            <h3>Area Covered (Approx.)</h3>
            <Table rows={area} />
          </article>
          <article>
            <h3>Equipment List</h3>
            <Table
              rows={equipment}
              headers={[
                "Sr. No.",
                "Description",
                "Specification",
                "Qty.",
                "Remarks",
              ]}
            />
          </article>
        </div>
        <div className={styles.boq}>
          <h3>Bill of Quantities</h3>
          <Table
            rows={boq}
            headers={[
              "Sr. No.",
              "Description",
              "Specification",
              "Qty.",
              "Unit",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default function ActivatedCarbonFilterPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
          
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>
                  AQUEN product system · ACF
                </span>
                <h1>
                  Activated Carbon Filter <em>(ACF)</em>
                </h1>
                <h2>15 m³/hr Water Treatment Application</h2>
                <p>
                  Activated Carbon Filter for removal of color, odor, organic
                  impurities and residual chlorine through adsorption. The
                  supplied designs show FRP and NSEP vessel configurations.
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
                    <strong>1200 mm</strong>
                    <span>carbon depth</span>
                  </div>
                  <div>
                    <strong>20 hrs/day</strong>
                    <span>continuous operation</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                  <div className={styles.heroVisualMedia}>
                <Image
                  src="/Activatedcarbon.png"
                  alt="Activated Carbon Filter 15 m³/hr FRP vessel"
                  fill
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
              title="One ACF product. Two vessel options."
            >
              Both supplied configurations are 15 m³/hr Activated Carbon Filters
              using activated carbon media.
            </Heading>
            <div className={styles.selectorGrid}>
              <a href="#frp">
                <span>Configuration 01</span>
                <strong>FRP Vessel</strong>
                <small>15 m³/hr · top &amp; bottom vessel</small>
              </a>
              <a href="#nsep">
                <span>Configuration 02</span>
                <strong>NSEP Vessel</strong>
                <small>15 m³/hr · MS / FRP standard vessel</small>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.overview}>
          <div className={styles.container}>
            <Heading
              eyebrow="01 · Product overview"
              title="Activated Carbon Filter – 15 m³/hr"
            >
              Adsorption for cleaner, clearer water and downstream protection.
            </Heading>
            <div className={styles.overviewGrid}>
              <article>
                <Droplets size={20} />
                <h3>Working principle</h3>
                <p>
                  Water enters under pressure and passes through granular
                  activated carbon. Contaminants are adsorbed on the carbon
                  surface while treated water flows out.
                </p>
              </article>
              <article>
                <ShieldCheck size={20} />
                <h3>What it removes</h3>
                <p>
                  General ACF information describes removal of free chlorine,
                  organic compounds, color, odor and undesirable taste,
                  supporting downstream RO membranes and ion-exchange resins.
                </p>
              </article>
            </div>
          </div>
        </section>
        <Configuration
          id="frp"
          label="Configuration 01 · FRP Vessel"
          title="Activated Carbon Filter – FRP Vessel · 15 m³/hr"
          image="/acf-15000-lph-frp.png"
          basic={frpBasic}
          equipment={frpEquipment}
          boq={frpBoq}
          electric={frpElectric}
          area={area}
          isFrp
        />
        <Configuration
          id="nsep"
          label="Configuration 02 · NSEP Vessel"
          title="Activated Carbon Filter – NSEP Vessel · 15 m³/hr"
          image="/acf-15000-lph-nsep.png"
          basic={nsepBasic}
          equipment={nsepEquipment}
          boq={nsepBoq}
          electric={electrical}
          area={area}
          isFrp={false}
        />
        <section className={styles.general}>
          <div className={styles.container}>
            <Heading
              eyebrow="02 · General ACF information"
              title="Activated Carbon Filtration Technology"
            >
              General information from the supplied ACF document is
              intentionally separate from the exact 15 m³/hr drawings.
            </Heading>
            <div className={styles.generalGrid}>
              <article>
                <h3>Construction &amp; operation</h3>
                <p>
                  Activated Carbon Filters are available in Mild Steel with
                  epoxy/FRP lining or FRP vessels depending on application.
                  Granular activated carbon adsorbs contaminants on its porous
                  surface; manual or automatic backwashing removes trapped
                  impurities.
                </p>
              </article>
              <article>
                <h3>General applications</h3>
                <ul>
                  {[
                    "Pretreatment before RO Plants and Softening Plants",
                    "Drinking water treatment systems",
                    "Food & Beverage, Pharmaceutical and Chemical industries",
                    "Hotels, Hospitals and Commercial complexes",
                    "Industrial process water and effluent polishing",
                  ].map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className={styles.comparison}>
              <h2>FRP vs NSEP / MS ACF</h2>
              <Table
                headers={[
                  "Parameter",
                  "FRP Vessel ACF",
                  "MS / NSEP Vessel ACF",
                ]}
                rows={[
                  [
                    "Material",
                    "Fiberglass Reinforced Plastic (FRP)",
                    "Mild Steel with Epoxy/FRP lining",
                  ],
                  [
                    "Strength",
                    "Moderate; low-to-medium pressure applications",
                    "Very strong; high-pressure and large-scale applications",
                  ],
                  [
                    "Corrosion Resistance",
                    "Naturally non-corrosive",
                    "Needs epoxy/FRP lining",
                  ],
                  ["Weight", "Lightweight", "Heavy"],
                  [
                    "Maintenance",
                    "Very low maintenance",
                    "Periodic lining/painting maintenance",
                  ],
                  [
                    "Applications",
                    "Domestic, commercial and medium industrial",
                    "Large-scale industrial and continuous operation",
                  ],
                ]}
              />
            </div>
            <div className={styles.featureGrid}>
              {[
                "Chlorine and organic impurity removal",
                "Color, odor and taste improvement",
                "Granular activated carbon media",
                "Top and bottom distribution",
                "Manual or automatic backwashing",
                "Protection for downstream RO and resin systems",
              ].map((x) => (
                <div key={x}>
                  <Check size={17} />
                  {x}
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
