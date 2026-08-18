"use client";
import { useEffect, useRef, useState, useCallback } from "react";

import { Activity, Recycle, MapPinned, ShieldCheck, ClipboardList, GitBranch, Cog, Truck, FlaskConical, CheckCircle2,
         Zap, Wrench, Quote, MapPin, Building2, Gauge, Calendar, ChevronLeft, ChevronRight, ArrowRight, MessageCircle, Clock
 } from "lucide-react";

import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import { ReactNode } from "react";
import "./ongoing-projects.css";








//  section 2

const PEO_CARDS = [
  {
    icon: Activity,
    code: "STAGE 01",
    title: "Current Execution Status",
    text: "Each project is shown with its current stage so visitors can understand whether the work is in engineering, manufacturing, dispatch, installation, pre-commissioning or trial-run preparation.",
  },
  {
    icon: Recycle,
    code: "STAGE 02",
    title: "Treatment Technologies Covered",
    text: "Ongoing work includes sewage treatment, effluent treatment, oil-water separation, RO, DM, UF, filtration, water recycling, reuse and zero liquid discharge solutions.",
  },
  {
    icon: MapPinned,
    code: "STAGE 03",
    title: "Site-Based Coordination",
    text: "Layouts, piping routes, civil readiness, equipment access, electrical panels, instruments and utility connections are coordinated according to actual site conditions.",
  },
  {
    icon: ShieldCheck,
    code: "STAGE 04",
    title: "Commissioning-Ready Delivery",
    text: "Execution is planned around outlet quality, reuse goals, compliance norms, hydraulic performance, operator safety and long-term serviceability after handover.",
  },
];


// section 3

const EXJ_STEPS = [
  {
    icon: ClipboardList,
    title: "Site Survey & Inlet Data Review",
    text: "Water, sewage or effluent samples, flow variation, peak load, oil & grease, COD/BOD, TDS, hardness, silica and reuse targets are reviewed before finalizing the execution approach.",
  },
  {
    icon: GitBranch,
    title: "Process Route Finalization",
    text: "The treatment line is selected as per application — screening, equalization, biological treatment, clarification, pressure filtration, activated carbon, softening, UF, RO, DM, MEE or ZLD where required.",
  },
  {
    icon: Cog,
    title: "Engineering, BOM & Manufacturing",
    text: "P&ID, GA drawings, tank sizing, pressure vessels, pumps, blowers, dosing systems, valves, instruments, MCC/PLC panels and skid assemblies are prepared and manufactured under quality checks.",
  },
  {
    icon: Truck,
    title: "Dispatch, Site Installation & Piping",
    text: "Equipment is dispatched stage-wise and installed with interconnecting piping, cable routing, dosing connections, utility tie-ins, platform access and safety clearances as per approved layout.",
  },
  {
    icon: FlaskConical,
    title: "Pre-Commissioning & Trial Run",
    text: "Hydro testing, flushing, electrical loop checks, dry run, wet run, dosing calibration, membrane protection, biological seeding and automation logic checks are completed before performance trials.",
  },
  {
    icon: CheckCircle2,
    title: "Performance Stabilization & Handover",
    text: "The plant is stabilized for outlet quality, flow rate, pressure, recovery, sludge handling and operator readiness before handover with O&M guidance and service support.",
  },
];


//  section 4

const FZP_ITEMS = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "Compliance-Focused Treatment Output",
    text: "Correct pump sizing, pressure loss control, dosing optimization, membrane protection and instrumentation help reduce power use, chemical waste and operating instability.",
  },
  {
    icon: Zap,
    num: "02",
    title: "Energy & Chemical Efficiency",
    text: "Plants are planned with service access for valves, pumps, blowers, filters, membranes, dosing tanks, instruments and electrical panels so maintenance teams can work safely after commissioning.",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Serviceable Plant Layout",
    text: "Plants are planned with access for valves, pumps, blowers, filters, membranes, dosing tanks, instruments and electrical panels so maintenance teams can work safely and quickly.",
  },
];


// section 5

const LPD_FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "oil", label: "Water Treatment / OWS" },
  { key: "work", label: "STP / Sewage" },
  { key: "team", label: "ETP / Effluent" },
  { key: "events", label: "RO / DM / UF" },
  { key: "projects", label: "ZLD / Reuse" },
];
 
const LPD_PROJECTS = [
  { cat: "oil", badge: "Water Treatment Plant", title: "Water Treatment Plant", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80", alt: "Automobile Workshop OWS oil water separator ongoing project", location: "Maharashtra", industry: "Municipal/Government", capacity: "200 MLD", started: "2019", stage: "Execution" },
  { cat: "oil", badge: "Oil Water Separator", title: "Heavy Engineering OWS", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80", alt: "Heavy Engineering OWS oil water separator ongoing project", location: "Chakan, Maharashtra", industry: "Engineering", capacity: "75 KLD", started: "2020", stage: "Manufacturing Stage" },
  { cat: "oil", badge: "Oil Water Separator", title: "Food Processing Oil Trap", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80", alt: "Food Processing Oil Trap oil water separator ongoing project", location: "Nashik, Maharashtra", industry: "Food Processing", capacity: "40 KLD", started: "2018", stage: "Site Installation" },
  { cat: "oil", badge: "Oil Water Separator", title: "Commercial Kitchen OWS", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80", alt: "Commercial Kitchen OWS oil water separator ongoing project", location: "Mumbai, Maharashtra", industry: "Hospitality", capacity: "25 KLD", started: "2021", stage: "Pre-Commissioning" },
  { cat: "oil", badge: "Oil Water Separator", title: "Petrochemical OWS Package", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80", alt: "Petrochemical OWS Package oil water separator ongoing project", location: "Dahej, Gujarat", industry: "Petrochemical", capacity: "150 KLD", started: "2019", stage: "Piping & Erection" },
  { cat: "oil", badge: "Oil Water Separator", title: "Steel Plant OWS", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80", alt: "Steel Plant OWS oil water separator ongoing project", location: "Jamshedpur, Jharkhand", industry: "Steel Industry", capacity: "120 KLD", started: "2020", stage: "Panel Integration" },
  { cat: "oil", badge: "Oil Water Separator", title: "Railway Depot OWS", image: "https://images.unsplash.com/photo-1581091870622-2d7e6b2f1660?auto=format&fit=crop&w=900&q=80", alt: "Railway Depot OWS oil water separator ongoing project", location: "Nagpur, Maharashtra", industry: "Railway Depot", capacity: "80 KLD", started: "2018", stage: "Equipment Dispatch" },
  { cat: "oil", badge: "Oil Water Separator", title: "Logistics Hub OWS", image: "https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?auto=format&fit=crop&w=900&q=80", alt: "Logistics Hub OWS oil water separator ongoing project", location: "Bhiwandi, Maharashtra", industry: "Logistics", capacity: "60 KLD", started: "2021", stage: "Trial Run Planned" },
 
  { cat: "work", badge: "STP / Sewage", title: "Luxury Residential Township STP", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80", alt: "Luxury Residential Township STP sewage treatment plant project", location: "Pune, Maharashtra", industry: "Residential Township", capacity: "1.5 MLD", started: "2019", stage: "Piping & Erection" },
  { cat: "work", badge: "STP / Sewage", title: "Integrated Housing Society STP", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80", alt: "Integrated Housing Society STP sewage treatment plant project", location: "Mumbai, Maharashtra", industry: "Housing Society", capacity: "850 KLD", started: "2020", stage: "Panel Integration" },
  { cat: "work", badge: "STP / Sewage", title: "Commercial IT Park STP", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80", alt: "Commercial IT Park STP sewage treatment plant project", location: "Hinjewadi, Pune", industry: "Commercial / IT Park", capacity: "1.2 MLD", started: "2018", stage: "Equipment Dispatch" },
  { cat: "work", badge: "STP / Sewage", title: "Five Star Hotel STP", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80", alt: "Five Star Hotel STP sewage treatment plant project", location: "Goa", industry: "Hotel & Hospitality", capacity: "600 KLD", started: "2021", stage: "Trial Run Planned" },
  { cat: "work", badge: "STP / Sewage", title: "Hospital Campus STP", image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80", alt: "Hospital Campus STP sewage treatment plant project", location: "Nashik, Maharashtra", industry: "Healthcare / Hospital", capacity: "400 KLD", started: "2019", stage: "Engineering Stage" },
  { cat: "work", badge: "STP / Sewage", title: "Educational Institute STP", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80", alt: "Educational Institute STP sewage treatment plant project", location: "Nagpur, Maharashtra", industry: "Education Campus", capacity: "300 KLD", started: "2020", stage: "Manufacturing Stage" },
  { cat: "work", badge: "STP / Sewage", title: "Municipal Sewage Treatment Plant", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80", alt: "Municipal Sewage Treatment Plant sewage treatment plant project", location: "Solapur, Maharashtra", industry: "Municipal Infrastructure", capacity: "5 MLD", started: "2017", stage: "Site Installation" },
  { cat: "work", badge: "STP / Sewage", title: "Industrial Township STP", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80", alt: "Industrial Township STP sewage treatment plant project", location: "Dahej, Gujarat", industry: "Industrial Township", capacity: "2 MLD", started: "2018", stage: "Pre-Commissioning" },
 
  { cat: "team", badge: "ETP / Effluent", title: "Pharmaceutical ETP Plant", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80", alt: "Pharmaceutical ETP Plant effluent treatment plant ongoing project", location: "Pune, Maharashtra", industry: "Pharmaceutical Manufacturing", capacity: "350 KLD", started: "2020", stage: "Engineering Stage" },
  { cat: "team", badge: "ETP / Effluent", title: "Textile Dyeing ETP Plant", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80", alt: "Textile Dyeing ETP Plant effluent treatment plant ongoing project", location: "Surat, Gujarat", industry: "Textile Processing", capacity: "1.2 MLD", started: "2019", stage: "Manufacturing Stage" },
  { cat: "team", badge: "ETP / Effluent", title: "Food Processing ETP Plant", image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80", alt: "Food Processing ETP Plant effluent treatment plant ongoing project", location: "Nashik, Maharashtra", industry: "Food & Beverages", capacity: "500 KLD", started: "2021", stage: "Site Installation" },
  { cat: "team", badge: "ETP / Effluent", title: "Chemical Industry ETP Plant", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80", alt: "Chemical Industry ETP Plant effluent treatment plant ongoing project", location: "Ankleshwar, Gujarat", industry: "Chemical Manufacturing", capacity: "900 KLD", started: "2018", stage: "Pre-Commissioning" },
  { cat: "team", badge: "ETP / Effluent", title: "Dairy Processing ETP Plant", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80", alt: "Dairy Processing ETP Plant effluent treatment plant ongoing project", location: "Ahmednagar, Maharashtra", industry: "Dairy Industry", capacity: "300 KLD", started: "2020", stage: "Piping & Erection" },
  { cat: "team", badge: "ETP / Effluent", title: "Automobile Component ETP", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80", alt: "Automobile Component ETP effluent treatment plant ongoing project", location: "Chakan, Pune", industry: "Automobile Components", capacity: "250 KLD", started: "2021", stage: "Panel Integration" },
  { cat: "team", badge: "ETP / Effluent", title: "Brewery Effluent Treatment Plant", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80", alt: "Brewery Effluent Treatment Plant effluent treatment plant ongoing project", location: "Aurangabad, Maharashtra", industry: "Beverage Processing", capacity: "600 KLD", started: "2019", stage: "Equipment Dispatch" },
  { cat: "team", badge: "ETP / Effluent", title: "Paper Mill ETP Plant", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80", alt: "Paper Mill ETP Plant effluent treatment plant ongoing project", location: "Vapi, Gujarat", industry: "Paper & Pulp", capacity: "1.5 MLD", started: "2018", stage: "Trial Run Planned" },
 
  { cat: "events", badge: "RO / DM / UF", title: "Industrial RO Plant", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80", alt: "Industrial RO Plant water treatment plant ongoing project", location: "Pune, Maharashtra", industry: "Manufacturing", capacity: "100 KLD", started: "2020", stage: "Piping & Erection" },
  { cat: "events", badge: "RO / DM / UF", title: "DM Water Plant", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80", alt: "DM Water Plant water treatment plant ongoing project", location: "Mumbai, Maharashtra", industry: "Boiler Feed Water", capacity: "50 KLD", started: "2021", stage: "Panel Integration" },
  { cat: "events", badge: "RO / DM / UF", title: "UF Filtration System", image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80", alt: "UF Filtration System water treatment plant ongoing project", location: "Bengaluru, Karnataka", industry: "Process Water", capacity: "200 KLD", started: "2019", stage: "Equipment Dispatch" },
  { cat: "events", badge: "RO / DM / UF", title: "RO + UF Plant", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80", alt: "RO + UF Plant water treatment plant ongoing project", location: "Chennai, Tamil Nadu", industry: "Industrial Utility", capacity: "250 KLD", started: "2020", stage: "Trial Run Planned" },
  { cat: "events", badge: "RO / DM / UF", title: "Two Pass RO Plant", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80", alt: "Two Pass RO Plant water treatment plant ongoing project", location: "Hyderabad, Telangana", industry: "Pharma Utility", capacity: "150 KLD", started: "2021", stage: "Engineering Stage" },
  { cat: "events", badge: "RO / DM / UF", title: "Softener + RO System", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80", alt: "Softener + RO System water treatment plant ongoing project", location: "Ahmedabad, Gujarat", industry: "Commercial Utility", capacity: "80 KLD", started: "2022", stage: "Manufacturing Stage" },
  { cat: "events", badge: "RO / DM / UF", title: "DM Plant for Power Boiler", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80", alt: "DM Plant for Power Boiler water treatment plant ongoing project", location: "Nagpur, Maharashtra", industry: "Power / Boiler", capacity: "75 KLD", started: "2018", stage: "Site Installation" },
  { cat: "events", badge: "RO / DM / UF", title: "Packaged Drinking RO", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80", alt: "Packaged Drinking RO water treatment plant ongoing project", location: "Goa", industry: "Bottling Plant", capacity: "120 KLD", started: "2020", stage: "Pre-Commissioning" },
 
  { cat: "projects", badge: "ZLD / Reuse", title: "Textile ZLD Plant", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80", alt: "Textile ZLD Plant zero liquid discharge plant ongoing project", location: "Surat, Gujarat", industry: "Textile Processing", capacity: "1 MLD", started: "2019", stage: "Engineering Stage" },
  { cat: "projects", badge: "ZLD / Reuse", title: "Pharma ZLD System", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80", alt: "Pharma ZLD System zero liquid discharge plant ongoing project", location: "Hyderabad, Telangana", industry: "Pharmaceutical", capacity: "500 KLD", started: "2020", stage: "Manufacturing Stage" },
  { cat: "projects", badge: "ZLD / Reuse", title: "Chemical ZLD Plant", image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80", alt: "Chemical ZLD Plant zero liquid discharge plant ongoing project", location: "Ankleshwar, Gujarat", industry: "Chemical Manufacturing", capacity: "750 KLD", started: "2018", stage: "Site Installation" },
  { cat: "projects", badge: "ZLD / Reuse", title: "ETP + RO + MEE System", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80", alt: "ETP + RO + MEE System zero liquid discharge plant ongoing project", location: "Vapi, Gujarat", industry: "Industrial Effluent Reuse", capacity: "600 KLD", started: "2019", stage: "Pre-Commissioning" },
  { cat: "projects", badge: "ZLD / Reuse", title: "Dyeing Unit ZLD", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80", alt: "Dyeing Unit ZLD zero liquid discharge plant ongoing project", location: "Tiruppur, Tamil Nadu", industry: "Textile Dyeing", capacity: "400 KLD", started: "2020", stage: "Piping & Erection" },
  { cat: "projects", badge: "ZLD / Reuse", title: "Automobile Reuse Plant", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80", alt: "Automobile Reuse Plant zero liquid discharge plant ongoing project", location: "Chakan, Pune", industry: "Automobile Industry", capacity: "250 KLD", started: "2021", stage: "Panel Integration" },
  { cat: "projects", badge: "ZLD / Reuse", title: "Food Industry Reuse Plant", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80", alt: "Food Industry Reuse Plant zero liquid discharge plant ongoing project", location: "Nashik, Maharashtra", industry: "Food & Beverages", capacity: "300 KLD", started: "2020", stage: "Equipment Dispatch" },
  { cat: "projects", badge: "ZLD / Reuse", title: "Common ZLD Facility", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80", alt: "Common ZLD Facility zero liquid discharge plant ongoing project", location: "MIDC Tarapur, Maharashtra", industry: "Industrial Estate", capacity: "2 MLD", started: "2017", stage: "Trial Run Planned" },
];







// Functions

// section 5

function getStagePhase(stage: string): string {
  if (stage.includes("Engineering")) return "lpd-phase-engineering";
  if (stage.includes("Manufacturing")) return "lpd-phase-manufacturing";

  if (
    stage.includes("Site Installation") ||
    stage.includes("Piping") ||
    stage.includes("Panel Integration")
  ) {
    return "lpd-phase-installation";
  }

  if (stage.includes("Dispatch")) return "lpd-phase-dispatch";

  if (
    stage.includes("Pre-Commissioning") ||
    stage.includes("Trial Run")
  ) {
    return "lpd-phase-commissioning";
  }

  return "lpd-phase-execution";
}





// Export default

export default function Page() {


//  section 5

  const [activeFilter, setActiveFilter] = useState("all");
  const trackRef = useRef<HTMLDivElement>(null);
 
  const visibleProjects =
    activeFilter === "all"
      ? LPD_PROJECTS
      : LPD_PROJECTS.filter((p) => p.cat === activeFilter);
 
  const handleFilterClick = (key: string) => {
    setActiveFilter(key);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "instant" });
    }
  };
 
  const scrollByCard = (direction: number) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".lpd-card");
    const cardWidth = card ? card.getBoundingClientRect().width : 320;
    trackRef.current.scrollBy({
      left: direction * (cardWidth + 20),
      behavior: "smooth",
    });
  };





  return (
    <div>
      <Header />

      <main>

        <section className="life-hero" id="hero">
          <div className="container">
            <div className="life-hero-grid">
              <div className="life-hero-copy">
                <span className="life-kicker">
                  Ongoing Water &amp; Wastewater Projects Under Execution
                </span>
                <h1>
                  Live Ongoing Projects <span>by Aquen Fluid</span>
                </h1>
                <p>
                  Explore Aquen Fluid projects currently under engineering,
                  manufacturing, installation and commissioning across STP, ETP,
                  RO, DM, UF, OWS, ZLD and water-reuse systems. This page
                  highlights live project categories, capacities, locations,
                  industries and current execution stages.
                </p>
                <div className="life-hero-actions">
                  <a className="btn btn-green" href="#gallery">
                    View Ongoing Projects
                  </a>
                  <a className="btn btn-outline-white" href="#contact-footer">
                    Discuss Your Project
                  </a>
                </div>
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


   <section className="peo-section" id="culture">
      <div className="peo-container">
        <div className="peo-head">
          <span className="peo-kicker">Live Project Overview</span>
          <h2 className="peo-title">
            <span className="peo-title-line">
              Aquen Fluid Ongoing Projects Show Active Execution
            </span>
            <span className="peo-title-line">
              Across Water &amp; Wastewater Treatment Sites
            </span>
          </h2>
          <p className="peo-sub">
            This page is focused on Aquen Fluid projects where work is currently in progress.
            It covers live water and wastewater treatment assignments moving through
            design review, drawing approval, procurement, manufacturing, dispatch,
            site installation, pre-commissioning and trial-run stages.
          </p>
        </div>
 
        <div className="peo-grid">
          {PEO_CARDS.map((card) => (
            <div className="peo-card" key={card.title}>
              <div className="peo-card-top">
                <div className="peo-card-icon">
                  <card.icon size={24} />
                </div>
                <span className="peo-card-code">{card.code}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


   <section className="exj-section" id="worklife">
      <div className="exj-grid-bg" aria-hidden="true" />
      <div className="exj-container">
        <div className="exj-head">
          <span className="exj-kicker">How Ongoing Projects Move Forward</span>
          <h2 className="exj-title">
            How Aquen Fluid Tracks Live Treatment Projects from Site Study to Commissioning
          </h2>
          <p className="exj-sub">
            Every ongoing project follows a controlled workflow from site study to
            commissioning readiness. The treatment process and equipment package are
            finalized according to inlet quality, flow load, site space, reuse target,
            discharge requirement and utility availability.
          </p>
        </div>
 
        <div className="exj-timeline">
          {EXJ_STEPS.map((step, i) => (
            <div className="exj-step" key={step.title}>
              {i !== EXJ_STEPS.length - 1 && <span className="exj-step-line" />}
              <div className="exj-step-icon">
                <step.icon size={22} />
              </div>
              <div className="exj-step-body">
                <span className="exj-step-num">Step 0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="fzp-section" id="growth">
      <div className="fzp-container">
        <div className="fzp-head">
          <span className="fzp-kicker">Ongoing Project Focus Areas</span>
          <h2 className="fzp-title">
            Live Treatment Projects Planned for Compliance, Reuse and Reliable
            Operation
          </h2>
          <p className="fzp-sub">
            For Aquen Fluid, an ongoing project is not only material movement; it is
            controlled progress across engineering, manufacturing, installation
            quality, testing and operational readiness.
          </p>
        </div>
 
        <div className="fzp-banner">
          <div className="fzp-banner-icon">
            <Quote size={22} />
          </div>
          <div>
            <h3>
              From process approval to manufacturing, site erection and
              pre-commissioning, Aquen Fluid focuses on hydraulic balance, treatment
              efficiency, automation logic, safety access and long-term plant
              reliability.
            </h3>
            <p>
              Ongoing STP, ETP, OWS, RO, DM, UF, ZLD and filtration projects are
              configured to meet discharge, reuse, process-water or recycling
              targets based on actual application requirements.
            </p>
          </div>
        </div>
 
        <div className="fzp-panels">
          {FZP_ITEMS.map((item) => (
            <div className="fzp-panel" key={item.title}>
              <span className="fzp-panel-ghost">{item.num}</span>
              <div className="fzp-panel-icon">
                <item.icon size={22} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="lpd-section" id="gallery">
      <div className="lpd-container">
        <div className="lpd-head">
          <span className="lpd-kicker">Ongoing Project Categories</span>
          <h2 className="lpd-title">
            Ongoing Aquen Fluid Projects by Treatment Technology and Industry
          </h2>
          <p className="lpd-sub">
            Browse the live project categories below to see where Aquen Fluid work is
            currently progressing. Each card shares the treatment type, project
            location, industry segment, capacity and present execution stage.
          </p>
        </div>
 
        <div className="lpd-filters" role="tablist" aria-label="Project category filters">
          {LPD_FILTERS.map((f) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === f.key}
              key={f.key}
              className={`lpd-filter ${activeFilter === f.key ? "lpd-filter--active" : ""}`}
              onClick={() => handleFilterClick(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
 
        <div className="lpd-count">
          Showing {visibleProjects.length} of {LPD_PROJECTS.length} projects
        </div>
 
        <div className="lpd-slider">
          <button
            type="button"
            className="lpd-arrow lpd-arrow--prev"
            aria-label="Previous projects"
            onClick={() => scrollByCard(-1)}
          >
            <ChevronLeft size={20} />
          </button>
 
          <div className="lpd-track" ref={trackRef}>
            {visibleProjects.map((p) => (
              <article className="lpd-card" key={p.title}>
                <div className="lpd-card-media">
                  <img src={p.image} alt={p.alt} loading="lazy" />
                  <span className="lpd-card-badge">{p.badge}</span>
                </div>
                <div className="lpd-card-body">
                  <h3>{p.title}</h3>
                  <div className="lpd-meta-grid">
                    <div className="lpd-meta">
                      <MapPin size={13} />
                      <span>{p.location}</span>
                    </div>
                    <div className="lpd-meta">
                      <Building2 size={13} />
                      <span>{p.industry}</span>
                    </div>
                    <div className="lpd-meta">
                      <Gauge size={13} />
                      <span>{p.capacity}</span>
                    </div>
                    <div className="lpd-meta">
                      <Calendar size={13} />
                      <span>Since {p.started}</span>
                    </div>
                  </div>
                  <div className="lpd-stage-row">
                    <span className={`lpd-stage-dot ${getStagePhase(p.stage)}`} />
                    <span className="lpd-stage-label">{p.stage}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
 
          <button
            type="button"
            className="lpd-arrow lpd-arrow--next"
            aria-label="Next projects"
            onClick={() => scrollByCard(1)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>


    {/* <section className="icb-section" id="industry-cta">
      <div className="icb-container">
        <div className="icb-panel">
          <div className="icb-copy">
            <span className="icb-tag">Let's Talk</span>
            <h2 className="icb-title">
              Discuss Your Industry Requirement with Our Experts
            </h2>
            <p className="icb-sub">
              Whether you are planning a new plant, upgrading an existing system or improving reuse and compliance performance, our team can help define the right solution for your industry.
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
