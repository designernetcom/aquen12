import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Gauge,
  ShieldCheck,
  Wind,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "../mixed-bed-unit/page.module.css";

export const metadata: Metadata = {
  title: "Degasser Unit | Air Stripping Water Treatment System",
  description:
    "Degasser Unit for removal of dissolved gases from water using air stripping technology, designed for DM plants and industrial water treatment applications.",
};

const technical = [
  ["Type", "Vertical counter-current packed tower"],
  ["Design Flow Rate", "1 – 100 m³/hr (as per plant capacity)"],
  ["CO₂ Removal Efficiency", "90 – 95%"],
  ["Operating Pressure", "Atmospheric"],
  ["Inlet CO₂ Concentration", "50 – 200 ppm (typical)"],
  ["Outlet CO₂ Concentration", "<10 ppm"],
  ["Operating Temperature", "Ambient (25–40°C)"],
  ["Air to Water Ratio", "10 – 15:1 (by volume)"],
  ["Air Blower Type", "Centrifugal / FRP blower"],
  ["Packing Material", "PVC or Polypropylene rings (25–50 mm)"],
  ["Packing Height", "1.5 – 2.5 m (depending on capacity)"],
];
const construction = [
  {
    title: "Mild Steel (MS) Vessel",
    rows: [
      [
        "Material",
        "Mild Steel (IS 2062) with internal rubber lining or epoxy coating",
      ],
      ["Thickness", "5–8 mm (depending on diameter and pressure)"],
      [
        "External Coating",
        "Epoxy primer with PU top coat for corrosion protection",
      ],
      ["Design Pressure", "Atmospheric"],
      ["Manhole", "Top and side inspection manholes provided"],
      ["Support", "MS legs or skirt support"],
      ["Advantages", "Economical, suitable for indoor installation"],
      [
        "Limitations",
        "Prone to corrosion if lining is damaged; not suitable for high-purity or outdoor installations",
      ],
    ],
  },
  {
    title: "Stainless Steel (SS) Vessel",
    rows: [
      ["Material", "SS 304 / SS 316 (as per application)"],
      [
        "Finish",
        "Internal & external surfaces polished (Ra < 1 µm for hygienic use)",
      ],
      ["Thickness", "4–6 mm (depending on design)"],
      ["Corrosion Resistance", "Excellent against acidic and humid conditions"],
      ["Support", "SS legs or skid-mounted"],
      [
        "Advantages",
        "Long life, maintenance-free, suitable for outdoor or pharma-grade applications",
      ],
      ["Limitations", "Higher initial cost"],
    ],
  },
];
const basic5 = [
  ["Capacity", "5 m³/hr"],
  ["Operating Hours", "20 hrs/day"],
  ["Raw Water Type", "Ground Water"],
  ["Removed Gases", "CO₂, H₂S, O₂ (Partial), VOC"],
  ["pH Range", "6.5 – 8.5"],
  ["Temperature", "5 – 45 °C"],
  ["Inlet Pressure", "2.0 – 3.0 kg/cm²"],
  ["Operating Pressure", "Atmospheric"],
  ["System Type", "Air Stripping Degasser"],
  ["Vessel Material", "FRP / MSEP (MSRL)"],
  ["Vessel Diameter", "1200 mm"],
  ["Vessel Height", "3000 mm"],
  ["Packing Type", "PP Random Packing"],
  ["Air Required", "0.8 – 1.0 Nm³/min"],
  ["Air Pressure", "0.35 – 0.6 kg/cm² (Blower)"],
  ["Control", "Manual / Automatic (Optional)"],
];
const blower5 = [
  ["Type", "Roots Blower"],
  ["Air Flow", "1.0 Nm³/min"],
  ["Discharge Pressure", "0.4 – 0.6 kg/cm²"],
  ["Motor Power", "1.5 HP / 1.1 kW"],
  ["Voltage / Phase", "415 V, 3 Phase, 50 Hz"],
];
const rawPump5 = [
  ["Flow", "5.0 m³/hr"],
  ["Head", "15 – 20 mtrs"],
  ["Pump Type", "Centrifugal"],
  ["Motor Power", "1.0 HP"],
];
const backwashPump5 = [
  ["Flow", "6.0 m³/hr"],
  ["Head", "15 – 20 mtrs"],
  ["Pump Type", "Centrifugal"],
  ["Motor Power", "1.5 HP"],
];
const backwash5 = [
  ["Backwash Flow", "6.0 m³/hr"],
  ["Backwash Duration", "10 – 15 min"],
  ["Backwash Frequency", "Once in 24 – 48 hrs (or as per condition)"],
  ["Air Scour (Optional)", "1 – 2 min before backwash"],
  ["Drain Connection", "65 NB"],
  ["Backwash Water Consumed", "1.0 – 1.2 m² Per Cycle"],
];
const tank5 = [
  ["Material", "HDPE"],
  ["Capacity", "500 Ltr."],
  ["Diameter", "800 mm"],
  ["Height", "1100 mm"],
  ["Fittings", "15 NB"],
  ["Use", "For chemical dosing (if required)"],
];
const electric5 = [
  ["Raw Water Pump", "1.0", "1", "1.0", "0.75"],
  ["Backwash Pump", "1.5", "1", "1.5", "1.10"],
  ["Air Blower", "1.5", "1", "1.5", "1.10"],
  ["Control Panel", "0.5", "1", "0.5", "0.37"],
  ["Total Connected Load", "4.5 HP", "–", "–", "3.32 kW"],
];
const area5 = [
  ["System Footprint", "3.5 × 1.8"],
  ["Blower Area", "1.5 × 1.5"],
  ["Panel Area", "1.0 × 0.6"],
  ["Total Area Required", "6.0 × 3.0"],
  ["Total Area Covered", "~ 18.0 m²"],
];
const equipment5 = [
  [
    "1",
    "Degasser Vessel",
    "FRP / MSEP",
    "Dia: 1200 mm, Ht: 3000 mm (Packed)",
    "1",
    "No.",
  ],
  ["2", "Internal Packing", "PP", "Random Packing", "1", "Lot"],
  ["3", "Raw Water Pump", "CI / SS", "5.0 m³/hr @ 20 mtr Head", "1", "No."],
  ["4", "Backwash Pump", "CI / SS", "6.0 m³/hr @ 20 mtr Head", "1", "No."],
  [
    "5",
    "Air Blower (Roots)",
    "Cast Iron",
    "1.0 Nm³/min @ 0.4 – 0.6 kg/cm²",
    "1",
    "No.",
  ],
  ["6", "Butterfly Valve", "CI / UPVC", "65 NB", "6", "Nos."],
  ["7", "Multiport Valve", "FRP / CI", "65 NB", "1", "No."],
  ["8", "Check Valve", "CI / UPVC", "65 NB", "2", "Nos."],
  ["9", "Pressure Gauge", "SS", "0 – 6 kg/cm²", "2", "Nos."],
  ["10", "Air Flow Control Valve", "Brass / SS", "15 NB", "1", "No."],
  ["11", "Piping", "UPVC / CI", "As per P&ID", "1", "Lot"],
  ["12", "Control Panel", "M.S.", "PLC Based (Optional)", "1", "No."],
  ["13", "Level Switch", "PP / SS", "For Dry Run Protection", "2", "Nos."],
  [
    "14",
    "Misc. Fittings",
    "UPVC / SS",
    "Elbows, Tees, Unions, etc.",
    "1",
    "Lot",
  ],
];
const typical10 = [
  ["Flow Rate", "10 m³/hr"],
  ["Tower Diameter", "600 mm"],
  ["Tower Height", "2500 mm"],
  ["Packing Height", "1800 mm"],
  ["Packing Type", "PP Pall Rings – 38 mm"],
  ["Air Blower Capacity", "100 m³/hr at 50 mm WG"],
  ["Water Collection Tank", "1000 L FRP/SS tank"],
  ["CO₂ Removal", "≥ 90%"],
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

export default function DegasserUnitPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            {/* <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/products/degasser-unit">Products</Link>
              <span>/</span>
              <strong>Degasser Unit</strong>
            </div> */}
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>
                  AQUEN product system · air stripping
                </span>
                <h1>
                  Degasser Unit
                </h1>
                <h2>Water Treatment System – Air Stripping Type</h2>
                <p>
                  A Degasser Unit, also known as a CO₂ Scrubber or Decarbonate,
                  removes free carbon dioxide from acidic water after the cation
                  exchanger and reduces the load on the downstream anion
                  exchange unit.
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
                    <strong>90–95%</strong>
                    <span>CO₂ removal efficiency</span>
                  </div>
                  <div>
                    <strong>5 m³/hr</strong>
                    <span>drawing configuration</span>
                  </div>
                  <div>
                    <strong>10–15:1</strong>
                    <span>air to water ratio</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                  <div className={styles.heroVisualMedia}>
                <Image
                  src="/degasser.png"
                  alt="Degasser Tower MSEP 5000 LPH technical system drawing"
                 
                  priority
                  width={1400}
                    height={1128}
                  
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
              title="A controlled release of dissolved gases"
            >
              The Degasser Unit sits between the cation exchanger and anion
              exchanger in a DM water treatment plant.
            </Heading>
            <div className={styles.twoCol}>
              <div className={styles.prose}>
                <p>
                  A Degasser Unit (also known as a CO₂ Scrubber or Decarbonate)
                  is a vital component of a De-mineralized (DM) Water Treatment
                  Plant, installed after the cation exchanger and before the
                  anion exchanger.
                </p>
                <p>
                  Its primary function is to remove free carbon dioxide (CO₂)
                  from the acidic water leaving the cation exchanger. The
                  removal of CO₂ reduces the load on the anion exchange unit and
                  improves the overall efficiency and life of the anion resin.
                </p>
                <div className={styles.featureList}>
                  <div>
                    <Wind size={19} />
                    <span>
                      <strong>Air stripping</strong>
                      <small>
                        Counter-current contact through a packed tower
                      </small>
                    </span>
                  </div>
                  <div>
                    <ShieldCheck size={19} />
                    <span>
                      <strong>Downstream protection</strong>
                      <small>Reduced load on the anion exchange unit</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.cardLabel}>System principle</span>
                <h3>
                  Water down.
                  <br />
                  Air up.
                </h3>
                <p>
                  The large surface area of the packing enables efficient
                  gas–liquid contact, releasing CO₂ from water into the air
                  stream.
                </p>
                <div className={styles.cardRule} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.gallery}>
          <div className={styles.container}>
            <Heading
              eyebrow="02 · System drawing"
              title="Degasser Tower – 5 m³/hr"
            >
              The supplied technical drawing combines the system image, process
              and piping flow diagram, design data, equipment list, and bill of
              quantities.
            </Heading>
            <figure className={styles.galleryFigure}>
              <div className={styles.drawingFrame}>
                <Image
                  src="/degasser-tower-msep-5000-lph.png"
                  alt="Degasser Unit 5 m³/hr system image, process piping diagram and equipment data"
                  fill
                  sizes="(max-width: 1100px) 100vw, 1180px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <figcaption>
                <strong>Degasser Tower MSEP 5000 LPH</strong>
                <span>Supplied 5 m³/hr system and process drawing</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.container}>
            <Heading eyebrow="03 · How it works" title="Principle of Operation">
              Air stripping uses counter-current gas–liquid contact to release
              carbon dioxide from acidic water.
            </Heading>
            <div className={styles.operationGrid}>
              <div className={styles.operationCard}>
                <span>01</span>
                <h3>Carbonic acid formation</h3>
                <p>
                  After the cation exchange process, bicarbonate salts are
                  converted to carbonic acid (H₂CO₃) in the acidic effluent.
                </p>
                <code>H₂CO₃ → H₂O + CO₂ gas</code>
              </div>
              <div className={styles.operationCard}>
                <span>02</span>
                <h3>Packed tower contact</h3>
                <p>
                  Water flows down through PVC / Polypropylene packing while air
                  is blown upward, creating counter-current flow.
                </p>
                <code>Water ↓ · Air ↑</code>
              </div>
              <div className={styles.operationCard}>
                <span>03</span>
                <h3>CO₂ release</h3>
                <p>
                  The packing provides large surface area for gas–liquid
                  contact, allowing CO₂ to be released into the air stream.
                </p>
                <code>CO₂ → vented air stream</code>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <Heading
              eyebrow="04 · Process description"
              title="From acidic feed to degassed water"
            />
            <div className={styles.processSteps}>
              {[
                [
                  "01",
                  "Feed Water",
                  "Acidic water from the cation exchanger enters the top of the degasser tower.",
                ],
                [
                  "02",
                  "Flow Direction",
                  "Water flows downward through the packed media (PVC / Polypropylene rings), while air is blown upward by a centrifugal blower.",
                ],
                [
                  "03",
                  "Air Stripping",
                  "As the water passes through the packing, the air removes CO₂ by mass transfer. The released CO₂ gas is vented to the atmosphere through the top of the tower.",
                ],
                [
                  "04",
                  "Outlet Water",
                  "Degassed water, now with minimal CO₂ content, collects in the degasser tank below and is pumped to the anion exchanger.",
                ],
                [
                  "05",
                  "Efficiency",
                  "The degasser typically removes 90–95% of the CO₂, reducing its concentration to below 5–10 ppm.",
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
              eyebrow="05 · Construction details"
              title="Main Components"
            >
              A packed tower system with the equipment needed for controlled
              air–water contact.
            </Heading>
            <div className={styles.regenerationGrid}>
              {[
                [
                  "01",
                  "Degasser Tower",
                  "Vertical cylindrical tower (packed column) designed for uniform air–water contact.",
                ],
                [
                  "02",
                  "Packing Media",
                  "Lightweight, corrosion-resistant plastic rings (PVC / PP) to maximize contact area.",
                ],
                [
                  "03",
                  "Support & Retainer Grids",
                  "Perforated plates or strainers to hold packing in place.",
                ],
                [
                  "04",
                  "Air Blower",
                  "Provides upward air flow; designed for continuous duty operation.",
                ],
                [
                  "05",
                  "Degassed Water Tank",
                  "Collects CO₂-free water before it is pumped to the anion unit.",
                ],
                [
                  "06",
                  "Piping & Accessories",
                  "Includes vent, drain, sampling, and manhole arrangements.",
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
            <Heading
              eyebrow="06 · Performance"
              title="Technical Specifications"
            >
              General technical specifications for the Degasser Unit.
            </Heading>
            <Table rows={technical} />
          </div>
        </section>
        <section className={styles.construction}>
          <div className={styles.container}>
            <Heading
              eyebrow="07 · Vessel selection"
              title="Vessel Construction Options"
            >
              Separate vessel construction options for indoor, outdoor, and
              application-specific installations.
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
                <span className={styles.eyebrow}>
                  08 · Drawing configuration
                </span>
                <h2>Degasser Unit – 5 m³/hr</h2>
                <p>
                  Design information reproduced from the supplied Degassor Tower
                  MSEP 5000 LPH drawing. This configuration is separate from the
                  10 m³/hr DOCX example below.
                </p>
              </div>
              <Gauge size={45} />
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Basic Design Data</h3>
                <Table rows={basic5} />
              </article>
              <article>
                <h3>Design Summary</h3>
                <ul className={styles.noteList}>
                  <li>
                    Air stripping technology removes dissolved gases like CO₂,
                    H₂S, O₂.
                  </li>
                  <li>
                    Efficient counter current contact between water and air.
                  </li>
                  <li>
                    Reduces corrosion, improves water quality and protects
                    downstream equipment.
                  </li>
                  <li>Air supplied through blower / compressor.</li>
                  <li>Simple design, low maintenance.</li>
                  <li>FRP / MSEP vessel with internal packing.</li>
                  <li>Optional online monitoring &amp; auto control.</li>
                </ul>
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Air Blower / Compressor Data</h3>
                <Table rows={blower5} />
              </article>
              <article>
                <h3>Regeneration / Backwash Data</h3>
                <Table rows={backwash5} />
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Raw Water Pump</h3>
                <Table rows={rawPump5} />
              </article>
              <article>
                <h3>Backwash Pump</h3>
                <Table rows={backwashPump5} />
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Regeneration Tank (Optional)</h3>
                <Table rows={tank5} />
              </article>
              <article>
                <h3>Area Covered (Approx.)</h3>
                <Table rows={area5} />
              </article>
            </div>
            <div className={styles.dataGrid}>
              <article>
                <h3>Electric Load (Approx.)</h3>
                <Table
                  rows={electric5}
                  headers={[
                    "Equipment",
                    "Power (HP)",
                    "Qty.",
                    "Total (HP)",
                    "kW",
                  ]}
                />
              </article>
              <article>
                <h3>Design Notes</h3>
                <ul className={styles.noteList}>
                  <li>
                    Design may vary as per actual water quality and site
                    conditions.
                  </li>
                  <li>All dimensions and data are approximate.</li>
                  <li>Subject to technical change without prior notice.</li>
                </ul>
              </article>
            </div>
            <article className={styles.fullDataCard}>
              <h3>Equipment List &amp; Bill of Quantities (BOQ)</h3>
              <Table
                rows={equipment5}
                headers={[
                  "Sr. No.",
                  "Description",
                  "Material",
                  "Specification / Size",
                  "Qty.",
                  "Unit",
                ]}
              />
            </article>
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
            <Table rows={typical10} />
          </div>
        </section>
        <section className={`${styles.section} ${styles.benefits}`}>
          <div className={styles.container}>
            <Heading eyebrow="10 · Why Degasser" title="Advantages" />
            <div className={styles.benefitGrid}>
              {[
                "Reduces anion resin load → longer resin life",
                "No chemicals required for operation",
                "Simple design and low maintenance",
                "Compact and corrosion-resistant construction",
                "Energy efficient with small blower power requirement",
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
                  "De-mineralization plants",
                  "Boiler feedwater treatment",
                  "Condensate polishing systems",
                  "Power plants and process industries",
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
                  "Maintain clean air filters on blowers to ensure efficient stripping.",
                  "Regularly inspect packing for scaling or fouling; backwash or clean as required.",
                  "Ensure proper venting to avoid back pressure.",
                  "Check for air–water distribution uniformity periodically.",
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
