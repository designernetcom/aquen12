"use client";
import { useEffect, useRef, useState } from "react";
import { HelpCircle, Warehouse, Building2, Gauge, MoveVertical, Truck, Archive, Cog, ShieldCheck, Check, MessageCircle, Clock, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Image from "next/image";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import "./infrastructure.css";




//  section 2

const IAA_ITEMS = [
  {
    question: "What does Aquen Fluid manufacture?",
    answer:
      "Aquen Fluid manufactures a wide range of water and wastewater treatment systems, including Water Treatment Plants (WTP), Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), RO Plants, UF Systems, DM Plants, filtration units, pressure vessels, and customized process equipment for diverse industrial applications.",
  },
  {
    question: "What supports Aquen Fluid's project delivery?",
    answer:
      "Aquen Fluid's modern manufacturing facility supports precision fabrication, assembly, quality inspection, testing, storage, logistics, and timely dispatch, ensuring efficient execution of turnkey water and wastewater treatment projects.",
  },
  {
    question: "Which sectors does Aquen Fluid's infrastructure serve?",
    answer:
      "Aquen Fluid's infrastructure serves a wide range of industries, including industrial, commercial, institutional, municipal, pharmaceutical, chemical, food & beverage, textile, power, infrastructure, manufacturing, and other process industries, delivering reliable and sustainable water treatment solutions.",
  },
];



//  section 3

const MFR_STATS = [
  { icon: Warehouse, value: "2 Lac", label: "SQ.FT SHOP FLOOR AREA" },
  { icon: Building2, value: "15,000", label: "SQ.FT CORPORATE OFFICE" },
  { icon: Gauge, value: "150", label: "TONS / MONTH CAPACITY" },
  { icon: MoveVertical, value: "10T × 2", label: "EOT CRANE SUPPORT" },
  { icon: Truck, value: "12T", label: "HYDRA MATERIAL HANDLING" },
  { icon: Archive, value: "5,000", label: "SQ.FT STORAGE AREA" },
];




//  section 4

const FOV_CAPABILITIES = [
  "RO Plants",
  "STP Plants",
  "ETP Plants",
  "ZLD Systems",
  "Filtration Units",
  "Pressure Vessels",
  "Skid-Mounted Packages",
];




//  section 5

const ICC_GROUPS = [
  {
    icon: Cog,
    title: "Manufacturing Capabilities",
    accent: "icc-accent-blue",
    items: ["Precision Fabrication", "Shell Rolling", "Dish Pressing", "CNC & Structure Cutting", "Radial Drilling"],
  },
  {
    icon: ShieldCheck,
    title: "Quality & Finishing",
    accent: "icc-accent-teal",
    items: ["Rubber Lining", "Sand Blasting", "Industrial Painting", "Hydro Testing"],
  },
];





//  section 6

type Standard = {
  code: string;
  title: string;
  text: string;
  icon: ReactNode;
};
 
const STANDARDS: Standard[] = [
  {
    code: "STD-01",
    title: "Industry Standards",
    text: "Our systems are engineered in accordance with applicable ASME, IS, and other recognized industry standards, ensuring safety, quality, and compliance across every project.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14.7 3.6L16 6.1c.2.4.6.6 1 .6l2.8.4.6 2.7-2 2c-.3.3-.4.8-.2 1.2l1.2 2.6-2 1.9-2.6-1.1c-.4-.2-.9-.1-1.2.2l-2 2.1-2.7-.7-.4-2.8c-.1-.4-.3-.8-.7-1l-2.5-1.3v-2.8l2.5-1.3c.4-.2.6-.6.7-1l.4-2.8 2.7-.7 2 2.1c.3.3.8.4 1.2.2z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    code: "STD-02",
    title: "Advanced Design Tools",
    text: "Our engineering team utilizes modern software such as AutoCAD, ANSYS, and STAAD Pro for process design, 3D modelling, structural analysis, and manufacturing coordination.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M6 18V6l12 12H6z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9 14h3M9 11h1.6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path
          d="M15 4l5 5M18.8 4.2l1 1c.5.5.5 1.2 0 1.7l-1.1 1.1-2.7-2.7 1.1-1.1c.5-.5 1.2-.5 1.7 0z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    code: "STD-03",
    title: "Customized Engineering",
    text: "Every solution is tailored to the client's water quality, treatment capacity, process requirements, regulatory standards, and site conditions, delivering optimized performance and maximum operational efficiency.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3.5 19.5h17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M5 19.5V9.8l4 2.2V9.8l4 2.2V6h5v13.5" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M6.8 15h1.6M10.8 15h1.6M14.8 15h1.6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M16.2 6V3.8h2.6V6" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      </svg>
    ),
  },
];





//  section 7

type Step = {
  code: string;
  title: string;
  text: string;
  icon: ReactNode;
};
 
const STEPS: Step[] = [
  {
    code: "01",
    title: "Design & Engineering",
    text: "Project requirements, process parameters, equipment sizing, and engineering drawings are finalized to create an optimized treatment solution.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 4h12l4 4v20H8V4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M20 4v4h4" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M11.5 17.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: "02",
    title: "Manufacturing & Assembly",
    text: "Treatment systems, pressure vessels, piping, skids, structural components, and process equipment are fabricated and assembled using advanced manufacturing practices.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 26 15 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M14 12l6 6-1.5 4.5L14 26l-4-4 3.5-4.5L18 14l-4-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M21 5l6 6-2.5 2.5-6-6L21 5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: "03",
    title: "Quality Assurance & Testing",
    text: "Each system undergoes comprehensive quality inspections and performance testing, including hydro testing and other required inspections, to ensure reliability and compliance.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M14 9.5V14l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.8 19.8 26 26" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    code: "04",
    title: "Finishing & Delivery",
    text: "Equipment is surface-finished, painted, packed, and prepared for safe transportation, followed by timely dispatch, installation, and commissioning support.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 22V10h13v12" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M17 14h5l4 4v4h-9" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <circle cx="9" cy="24" r="2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="21" cy="24" r="2" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
];





//  section 8

type IconKey =
  | "droplet"
  | "magnet"
  | "gauge"
  | "wind"
  | "scan"
  | "flame"
  | "ruler"
  | "layers"
  | "shield"
  | "check";
 
interface QualityItem {
  label: string;
  icon: IconKey;
}
 
interface QualityGroup {
  key: string;
  title: string;
  accent: "blue" | "teal";
  items: QualityItem[];
}
 
const GROUPS: QualityGroup[] = [
  {
    key: "testing",
    title: "Testing capabilities",
    accent: "blue",
    items: [
      { label: "Dye Penetrant Testing (DPT)", icon: "droplet" },
      { label: "Magnetic Particle Testing (MPT)", icon: "magnet" },
      { label: "Hydrostatic Testing", icon: "gauge" },
      { label: "Pneumatic Testing", icon: "wind" },
      { label: "Radiographic Inspection (RT)", icon: "scan" },
    ],
  },
  {
    key: "focus",
    title: "Quality focus areas",
    accent: "teal",
    items: [
      { label: "Precision Fabrication & Weld Quality", icon: "flame" },
      { label: "Dimensional Accuracy", icon: "ruler" },
      { label: "Surface Preparation & Finishing", icon: "layers" },
      { label: "Leak-Proof Performance", icon: "shield" },
      { label: "Final Quality Inspection & Performance Verification", icon: "check" },
    ],
  },
];
 
const ICON_PROPS = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};
 
const ICONS: Record<IconKey, ReactNode> = {
  droplet: (
    <svg {...ICON_PROPS}>
      <path d="M12 2.5s7 8 7 12.5a7 7 0 1 1-14 0c0-4.5 7-12.5 7-12.5z" />
    </svg>
  ),
  magnet: (
    <svg {...ICON_PROPS}>
      <path d="M6 15V9a6 6 0 0 1 12 0v6" />
      <path d="M6 15a3 3 0 0 0 6 0" />
      <path d="M12 15a3 3 0 0 0 6 0" />
      <path d="M2 9h4M18 9h4" />
    </svg>
  ),
  gauge: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13 15.5 9.5" />
      <path d="M9 5.5 8 3M15 5.5l1-2.5" />
    </svg>
  ),
  wind: (
    <svg {...ICON_PROPS}>
      <path d="M3 8h11a3 3 0 1 0-3-3" />
      <path d="M3 13h15a3 3 0 1 1-3 3" />
      <path d="M3 18h8a2.5 2.5 0 1 0-2.5-2.5" />
    </svg>
  ),
  scan: (
    <svg {...ICON_PROPS}>
      <path d="M4 8V5a1 1 0 0 1 1-1h3" />
      <path d="M16 4h3a1 1 0 0 1 1 1v3" />
      <path d="M20 16v3a1 1 0 0 1-1 1h-3" />
      <path d="M8 20H5a1 1 0 0 1-1-1v-3" />
      <path d="M4 12h16" />
    </svg>
  ),
  flame: (
    <svg {...ICON_PROPS}>
      <path d="M12 2.5c2 3 1 4.5-.5 6-2 2-2.5 4-1 6a5 5 0 0 0 9-3c0-3-2-5-3-8-.5 2-1.5 3-2.5 3-1 0-1.5-2-2-4z" />
    </svg>
  ),
  ruler: (
    <svg {...ICON_PROPS}>
      <rect x="3" y="8" width="18" height="8" rx="1.5" />
      <path d="M7 8v3M11 8v4M15 8v3" />
    </svg>
  ),
  layers: (
    <svg {...ICON_PROPS}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3z" />
      <path d="m4 12.5 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </svg>
  ),
  shield: (
    <svg {...ICON_PROPS}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    </svg>
  ),
  check: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.3 2.3L15.5 10" />
    </svg>
  ),
};





//  section 9

interface TeamStep {
  title: string;
  desc: string;
}
 
const TEAM_STEPS: TeamStep[] = [
  {
    title: "Engineering Team",
    desc: "Mechanical, Electrical, Chemical, Civil, Structural, and Instrumentation engineers delivering innovative and customized treatment solutions.",
  },
  {
    title: "Manufacturing Team",
    desc: "Skilled fabricators, welders, fitters, machinists, and quality professionals ensuring precision manufacturing and superior workmanship.",
  },
  {
    title: "Project Execution Team",
    desc: "Dedicated project managers, quality inspectors, logistics coordinators, and commissioning engineers ensuring timely delivery, installation, and successful project completion.",
  },
];





//  section 10

interface FaqEntry {
  question: string;
  answer: string;
}
 
const FAQS: FaqEntry[] = [
  {
    question: "What does WTE manufacture?",
    answer:
      "WTE manufactures water treatment plants, wastewater treatment systems, pressure vessels, RO plants, STP plants, ETP plants, ZLD systems, filtration units and custom engineered process equipment.",
  },
  {
    question: "What is the manufacturing strength of WTE?",
    answer:
      "WTE infrastructure includes a 2 lac sq.ft shop floor, 15,000 sq.ft corporate office, 150 tons/month capacity, EOT crane support, hydra handling and dedicated storage area.",
  },
  {
    question: "Does WTE execute turnkey projects?",
    answer:
      "Yes. WTE supports turnkey execution from engineering and manufacturing to testing, dispatch, erection, commissioning and long-term O&M support.",
  },
  {
    question: "Which quality tests are supported?",
    answer:
      "WTE supports dye penetrant testing, magnetic particle testing, hydrostatic testing, pneumatic testing, radiography, weld checks, dimensional checks and final inspection.",
  },
];





// ---------- page ----------
export default function Page() {


//  section 10

  const [openIndex, setOpenIndex] = useState<number | null>(0);
 
  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };



  return (
    <div>
      <Header />

      <main>
        <section className="life-hero" id="hero">
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="life-hero-grid">
              <div className="life-hero-copy">
                <span className="life-kicker">Infrastructure & Manufacturing</span>
                <h1>
                  Built for <span>Excellence</span>
                </h1>
                <p>
                  Aquen operates a modern manufacturing facility equipped to produce high-quality water and wastewater treatment systems, pressure vessels, process equipment, and customized engineering solutions. Our advanced infrastructure, skilled workforce, and stringent quality control processes ensure precision manufacturing, reliable performance, and timely project delivery for industrial, commercial, institutional, and municipal applications.
                </p>
              </div>
            </div>
          </div>

       <svg
        className="ch-wave"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C240,64 480,0 720,24 C960,48 1200,72 1440,32 L1440,80 L0,80 Z"
          fill="#fff"
        />
      </svg>
        </section>

    <section
      className="iaa-section"
      id="infra-answers"
      aria-label="Infrastructure quick answers"
    >
      <div className="iaa-grid-bg" aria-hidden="true" />
      <div className="iaa-container">
        <div className="iaa-row">
          {IAA_ITEMS.map((item) => (
            <article className="iaa-col" key={item.question}>
              <HelpCircle className="iaa-col-icon" size={18} aria-hidden="true" />
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="mfr-section">
      <div className="mfr-grid-bg" aria-hidden="true" />
      <div className="mfr-container">
        <div className="mfr-head">
          <span className="mfr-kicker">Manufacturing Strength</span>
          <h2 className="mfr-title">
            A strong production base for reliable project delivery.
          </h2>
          <p className="mfr-sub">
            Our facility is planned to support fabrication, assembly, storage,
            material movement and quality testing under one professional
            manufacturing environment.
          </p>
        </div>
 
        <div className="mfr-grid">
          {MFR_STATS.map((stat) => (
            <div className="mfr-tile" key={stat.label}>
              <div className="mfr-tile-top">
                <stat.icon size={16} />
                <span className="mfr-tile-dot" />
              </div>
              <div className="mfr-readout">{stat.value}</div>
              <span className="mfr-tile-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="fov-section">
      <div className="fov-container">
        <div className="fov-grid">
          <div className="fov-copy">
            <span className="fov-kicker">Facility Overview</span>
            <h2 className="fov-title">
              Designed for Advanced Water & Wastewater Treatment Manufacturing
            </h2>
            <p>
              Aquen Fluid&apos;s manufacturing facility is equipped to design and manufacture high-quality water and wastewater treatment systems, including WTP, STP, ETP, RO Plants, UF Systems, DM Plants, filtration units, pressure vessels, and customized skid-mounted treatment solutions.
            </p>
            <p>
              Our modern infrastructure is designed to support efficient production, precision fabrication, stringent quality control, and seamless project execution. Every stage of manufacturing is optimized to ensure reliable performance, consistent quality, and on-time delivery.
            </p>
            <p>
              With dedicated facilities for engineering, fabrication, assembly, testing, storage, and logistics, Aquen Fluid delivers both standard and customized treatment systems tailored to the requirements of industrial, commercial, institutional, and municipal applications.
            </p>
            {/* <div className="fov-chip-row">
              {FOV_CAPABILITIES.map((c) => (
                <span className="fov-chip" key={c}>
                  {c}
                </span>
              ))}
            </div> */}
          </div>
 
          <div className="fov-media">
            <span className="fov-media-frame" aria-hidden="true" />
            <div className="fov-media-photo">
              <img src="/banner/infrastructure-img.png" alt="WTE Infrastructure Facility" />
            </div>
            <div className="fov-media-tag">Manufacturing Facility</div>
          </div>
        </div>
      </div>
    </section>

    <section className="icc-section">
      <div className="icc-container">
        <div className="icc-head">
          <span className="icc-kicker">In-House Capabilities</span>
          <h2 className="icc-title">
            Complete Engineering & Manufacturing Excellence
          </h2>
          <p className="icc-sub">
            Aquen Fluid combines advanced engineering, precision fabrication, quality manufacturing, and rigorous testing to deliver reliable and high-performance water and wastewater treatment systems.
          </p>
        </div>

        <div className="icc-grid">
          {ICC_GROUPS.map((group) => (
            <div className={`icc-panel ${group.accent}`} key={group.title}>
              <div className="icc-panel-head">
                <div className="icc-panel-icon">
                  <group.icon size={22} />
                </div>
                <h3>{group.title}</h3>
              </div>
              <ul className="icc-panel-list">
                {group.items.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="es-section" id="engineering-standards">
      <div className="es-container">
        <div className="es-header">
          <span className="es-label">Engineering Standards</span>
          <h2 className="es-title">Engineered for Quality, Safety & Performance</h2>
          <p className="es-sub">
            At Aquen Fluid, every water and wastewater treatment system is designed using proven engineering practices, industry standards, and advanced design tools to ensure reliable, efficient, and long-lasting performance.
          </p>
        </div>
 
        {/* Spec-sheet row list with reference codes instead of a card
            grid — reads like an engineering document section rather
            than a marketing tile layout. */}
        <div className="es-sheet">
          {STANDARDS.map((std) => (
            <article className="es-row" key={std.code}>
              <div className="es-row-icon">{std.icon}</div>
              <div className="es-row-body">
                <h3 className="es-row-title">{std.title}</h3>
                <p className="es-row-text">{std.text}</p>
              </div>
              <span className="es-row-code">{std.code}</span>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="mf-section" id="manufacturing-flow">
      <div className="mf-container">
        <div className="mf-header">
          <span className="mf-label">Manufacturing Process</span>
          <h2 className="mf-title">From Engineering to Successful Project Delivery</h2>
          <p className="mf-sub">
            Every project at Aquen Fluid follows a structured manufacturing workflow to ensure precision, quality, and timely delivery of water and wastewater treatment systems.
          </p>
        </div>
 
        {/* Blueprint timeline: one continuous rail plus a row of nodes
            that share the exact same 4-column grid as the cards below,
            so nodes always sit centered above their card regardless of
            how much text is in any card. */}
        <div className="mf-timeline">
          <div className="mf-rail" aria-hidden="true">
            <span className="mf-rail-line" />
          </div>
 
          <div className="mf-nodes" aria-hidden="true">
            {STEPS.map((step) => (
              <div className="mf-node-col" key={step.code}>
                <span className="mf-node">{step.code}</span>
                <span className="mf-node-drop" />
              </div>
            ))}
          </div>
 
          <div className="mf-cards">
            {STEPS.map((step) => (
              <article className="mf-card" key={step.code}>
                <div className="mf-card-icon">{step.icon}</div>
                <h3 className="mf-card-title">{step.title}</h3>
                <p className="mf-card-text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="wte-qual">
      <div className="wte-qual-container">
        <div className="wte-qual-head">
          <span className="wte-qual-eyebrow">Quality &amp; testing</span>
          <h2 className="wte-qual-title">
            Committed to Quality, Reliability & Performance
          </h2>
          <p className="wte-qual-lead">
            At Aquen Fluid, every water and wastewater treatment system undergoes rigorous quality inspections and testing throughout the manufacturing process to ensure safety, durability, and long-term operational performance.
          </p>
        </div>
 
        <div className="wte-qual-groups">
          {GROUPS.map((group) => (
            <div className="wte-qual-group" key={group.key}>
              <div className="wte-qual-group-head">
                <span className={`wte-qual-dot wte-qual-dot--${group.accent}`} aria-hidden="true" />
                <h3>{group.title}</h3>
              </div>
              <div className="wte-qual-badges">
                {group.items.map((item) => (
                  <div
                    className={`wte-qual-badge wte-qual-badge--${group.accent}`}
                    key={item.label}
                  >
                    <span className="wte-qual-badge-icon">{ICONS[item.icon]}</span>
                    <span className="wte-qual-badge-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="wte-team">
      <div className="wte-team-container">
        <div className="wte-team-panel">
          <h3>Powered by Expertise</h3>
          <p>
            Infrastructure delivers results when supported by skilled professionals. Aquen Fluid brings together experienced engineers, technicians, and project specialists to ensure seamless execution from design to commissioning.
          </p>
          <div className="wte-team-timeline">
            {TEAM_STEPS.map((step, i) => (
              <div className="wte-team-step" key={step.title}>
                <div className="wte-team-step-marker">
                  <span className="wte-team-step-number">{i + 1}</span>
                  {i < TEAM_STEPS.length - 1 && (
                    <span className="wte-team-step-line" aria-hidden="true" />
                  )}
                </div>
                <div className="wte-team-step-body">
                  <strong>{step.title}</strong>
                  <span>{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        <div className="wte-team-copy">
          <span className="wte-team-eyebrow">Why Aquen Fluid Infrastructure?</span>
          <h2 className="wte-team-title">
            Advanced Infrastructure. Skilled People. Reliable Results.
          </h2>
          <p className="wte-team-pull">
            Aquen Fluid&apos;s modern infrastructure enables complete control over manufacturing quality, customization, and project execution. Our integrated facility is designed to deliver high-performance water and wastewater treatment systems with precision, efficiency, and on-time delivery.
          </p>
          <p>
            From engineering and fabrication to quality assurance and dispatch, every stage is managed under one roof. This allows us to develop customized solutions that meet specific water quality requirements, plant capacities, automation needs, and environmental compliance standards.
          </p>
          <p>
            Our state-of-the-art manufacturing capabilities, combined with experienced professionals, ensure reliable and sustainable treatment systems for industrial, commercial, institutional, and municipal projects.
          </p>
        </div>
      </div>
    </section>

    {/* <section className="wte-ifaq" id="infrastructure-faq">
      <div className="wte-ifaq-container">
        <div className="wte-ifaq-head">
          <span className="wte-ifaq-eyebrow">FAQs</span>
          <h2 className="wte-ifaq-title">
            Infrastructure &amp; manufacturing FAQs
          </h2>
          <p className="wte-ifaq-lead">
            Quick answers about WTE manufacturing strength, quality checks
            and water treatment project execution.
          </p>
        </div>
 
        <div className="wte-ifaq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className={`wte-ifaq-item${isOpen ? " is-open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="wte-ifaq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`wte-ifaq-panel-${index}`}
                  onClick={() => toggle(index)}
                >
                  <span className="wte-ifaq-question">{faq.question}</span>
                  <span className="wte-ifaq-chevron" aria-hidden="true">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className="wte-ifaq-panel-wrap"
                  id={`wte-ifaq-panel-${index}`}
                  role="region"
                >
                  <div className="wte-ifaq-panel-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section> */}

    {/* <section className="icb-section" id="industry-cta">
      <div className="icb-container">
        <div className="icb-panel">
          <div className="icb-copy">
            <span className="icb-tag">Let's Talk</span>
            <h2 className="icb-title">
              Looking for a Reliable Water Treatment Plant Manufacturer?
            </h2>
            <p className="icb-sub">
              Partner with WTE for STP, ETP, ZLD, RO and custom water treatment projects backed by professional infrastructure, engineering expertise and in-house manufacturing strength.
            </p>
          </div>
 
          <div className="icb-actions">
            <a className="icb-btn icb-btn--quote" href="#contact-footer">
              Get a Quote <ArrowRight size={16} />
            </a>
            <a
              className="icb-btn icb-btn--whatsapp"
              href="https://wa.me/918888889611"
              rel="noopener"
              target="_blank"
            >
              <MessageCircle size={16} /> Talk to an Expert
            </a>
            <div className="icb-note">
              <Clock size={14} />
              Typical response within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section> */}
    

      </main>

      <Footer />
    </div>
  );
}
