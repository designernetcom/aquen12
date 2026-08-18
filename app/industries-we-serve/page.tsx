
"use client";
import { useEffect, useRef, useState, useCallback } from "react";

import { ArrowRight, MessageCircle, Clock } from "lucide-react";

import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { ReactNode } from "react";
import "./industries-we-serve.css";
import type { JSX } from "react";




type Industry = {
  slug: string;
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  image: string;
};
 
const INDUSTRIES: Industry[] = [
  { slug: "automotive", eyebrow: "Automotive", title: "Automobile", text: "Process water, paint shop support, utility conditioning and wastewater reuse solutions for automotive production facilities.", href: "automotive-industry.html", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80" },
  { slug: "captive-power", eyebrow: "Power Utility", title: "Captive Power Plant", text: "Reliable make-up water, cooling support, DM and effluent handling systems for captive power operations inside industrial campuses.", href: "captive-power-plant.html", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80" },
  { slug: "cement", eyebrow: "Industrial", title: "Cement", text: "Utility water, cooling, dust-heavy process support and wastewater management systems for cement manufacturing environments.", href: "cement-industry.html", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80" },
  { slug: "chemical", eyebrow: "Process Industry", title: "Chemical", text: "High-performance process water, utility support and effluent treatment designed for diverse chemical manufacturing operations.", href: "chemical-industry.html", image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1200&q=80" },
  { slug: "educational", eyebrow: "Institutional", title: "Educational", text: "Safe utility water, sewage treatment and reuse-ready systems for schools, colleges, universities and training campuses.", href: "educational-industry.html", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" },
  { slug: "epc", eyebrow: "Projects", title: "EPC", text: "Integrated treatment plant packages with coordinated engineering, procurement, installation and commissioning support.", href: "epc-industry.html", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" },
  { slug: "food-beverages", eyebrow: "Hygiene Focus", title: "Food & Beverages", text: "Hygiene-sensitive water treatment, process support, recycle options and compliant wastewater management for food plants.", href: "food-and-beverages-industry.html", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80" },
  { slug: "glass", eyebrow: "Industrial", title: "Glass Manufacturing", text: "Utility water, cooling and wastewater handling systems tailored for glass production and finishing processes.", href: "glass-manufacturing-industry.html", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" },
  { slug: "government-municipal", eyebrow: "Public Sector", title: "Government & Municipal Corporation", text: "Civic water supply, sewage treatment, reuse and public infrastructure systems designed for urban governance needs.", href: "government-and-municipal-corporation.html", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80" },
  { slug: "hospital-healthcare", eyebrow: "Healthcare", title: "Hospital & Healthcare", text: "Reliable utility water, softening, RO and sewage treatment systems for hospitals, labs and healthcare campuses.", href: "hospital-and-healthcare.html", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" },
  { slug: "manufacturing", eyebrow: "Manufacturing", title: "Manufacturing Industry", text: "End-to-end water and wastewater systems for mixed manufacturing plants with varied utility and compliance demands.", href: "manufacturing-industry.html", image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1200&q=80" },
  { slug: "mining", eyebrow: "Extractive", title: "Mining", text: "Raw water treatment, sludge handling, recycle and discharge systems suited for mining and mineral processing operations.", href: "mining-industry.html", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80" },
  { slug: "oil-gas", eyebrow: "Energy", title: "Oil & Gas", text: "Robust process water, oily wastewater treatment and reuse-ready systems for upstream and downstream facilities.", href: "oil-and-gas-industry.html", image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80" },
  { slug: "paint", eyebrow: "Coatings", title: "Paint", text: "Process support water, rinse water reuse and effluent treatment designed for coating and paint operations.", href: "paint-industry.html", image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1200&q=80" },
  { slug: "paper-pulp", eyebrow: "Process Industry", title: "Paper & Pulp", text: "Water reuse, fiber-rich wastewater treatment and process stability support for paper and pulp operations.", href: "paper-and-pulp-industry.html", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" },
  { slug: "petrochemical", eyebrow: "Refining", title: "Petrochemical", text: "High-load treatment systems for process water, utility support, effluent recycle and petrochemical compliance needs.", href: "petrochemical-industry.html", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80" },
  { slug: "pharmaceutical", eyebrow: "Pharma", title: "Pharmaceutical", text: "High-purity water, clean utility support and controlled wastewater treatment for pharmaceutical manufacturing lines.", href: "pharmaceutical-industry.html", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80" },
  { slug: "power", eyebrow: "Utility", title: "Power", text: "Make-up water, DM plants, cooling support and wastewater recovery systems for power generation facilities.", href: "power-industry.html", image: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&w=1200&q=80" },
  { slug: "psu", eyebrow: "Public Enterprise", title: "PSU", text: "Scalable water and wastewater solutions for public sector undertakings with strict operational and compliance requirements.", href: "psu-public-sector.html", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" },
  { slug: "real-estate", eyebrow: "Urban Development", title: "Real Estate", text: "Compact treatment systems for residential, commercial and mixed-use developments with reuse potential.", href: "real-estate-industry.html", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" },
  { slug: "refinery", eyebrow: "Refining", title: "Refinery", text: "Utility water, oily wastewater treatment, recycle and compliance-led systems for refinery operations.", href: "refinery-industry.html", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80" },
  { slug: "rubber", eyebrow: "Industrial", title: "Rubber", text: "Process cooling, utility treatment and wastewater handling for rubber processing and allied manufacturing.", href: "rubber-industry.html", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1200&q=80" },
  { slug: "solar-energy", eyebrow: "Renewable", title: "Solar Energy", text: "Water treatment and recycling support for solar module, utility and renewable energy infrastructure projects.", href: "solar-energy-industry.html", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80" },
  { slug: "specialty-chemicals", eyebrow: "Process Industry", title: "Speciality Chemical", text: "Precision-focused water, recovery and effluent systems for specialty chemical production and value-added processing.", href: "specialty-chemicals-industry.html", image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1200&q=80" },
  { slug: "steel", eyebrow: "Core Utility", title: "Steel", text: "Raw water, DM, RO, cooling and effluent recycling systems engineered for steel manufacturing operations.", href: "steel-industry.html", image: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&w=1200&q=80" },
  { slug: "sugar-distillery", eyebrow: "Agro Industry", title: "Sugar & Distillery", text: "Effluent-intensive operations supported through recovery-driven treatment and reuse-oriented system planning.", href: "sugar-distillery-industry.html", image: "/images/sugar-distillery-water-wastewater-treatment.webp" },
  { slug: "textile", eyebrow: "Manufacturing", title: "Textile", text: "Color-heavy wastewater, reuse systems and treatment trains tailored to textile process conditions.", href: "textile-industry.html", image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80" },
  { slug: "thermal-power", eyebrow: "Power Utility", title: "Thermal Power Plant", text: "Boiler feed, cooling water, condensate polishing and effluent treatment solutions for thermal power applications.", href: "thermal-power-plant-industry.html", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80" },
];



// const Industry Overview


 
const QUICK_NAV = [
  { label: "All Industries", href: "" },
  { label: "By Category", href: "" },
  { label: "Why Aquen Fluid", href: "" },
  { label: "Talk to Expert", href: "" },
];
 
const TAGS = [
  "Municipal",
  "Industrial",
  "Commercial",
  "Infrastructure",
  "Compliance",
  "Reuse",
  "Turnkey Execution",
];
 
const REQUIREMENTS = [
  "Industry-specific solution design instead of one-size-fits-all packages",
  "Integrated treatment trains for supply, utility, recycle and discharge",
  "Layouts planned around maintenance access and operating continuity",
  "Scalable systems for future plant expansion and higher load handling",
];






/* By Category */




type Category = {
  key: "municipal" | "industrial" | "infrastructure";
  title: string;
  items: string[];
  icon: ReactNode;
};
 
const CATEGORIES: Category[] = [
  {
    key: "municipal",
    title: "Municipal & Public Sector Solutions",
    items: [
      "Municipal Corporation projects for civic water and wastewater infrastructure",
      "Hospital and educational campuses with utility and sewage treatment needs",
      "Public infrastructure with potable water, sewage and reuse requirements",
      "Urban and community infrastructure where sustainability and continuity matter",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 34V16L20 6L34 16V34" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 34V22H26V34" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 34H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "industrial",
    title: "Industrial & Process Manufacturing Solutions",
    items: [
      "Chemical & Pharmaceutical",
      "Cement, Paint, Rubber and Paper & Pulp",
      "Steel & Power, Sugar & Distillery, Textile and Refinery & Petrochemical",
      "Food & Beverages and allied process industries",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 34V18L14 24V18L22 24V18L30 24V16L34 20V34H6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 34V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 34V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 34V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "infrastructure",
    title: "Infrastructure, EPC & Commercial Solutions",
    items: [
      "Real Estate developments and utility-focused building projects",
      "Automobile plants and allied infrastructure requirements",
      "EPC-driven projects needing integrated execution support",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 34V12L20 6V34" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 20L32 14V34" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 34H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 16H15M13 22H15M13 28H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];




// Why WTE

type Pillar = {
  key: string;
  title: string;
  text: string;
  icon: ReactNode;
};

 
const PILLARS: Pillar[] = [
  {
    key: "trains",
    title: "Customized Treatment Trains",
    text: "Each sector gets the right combination of pre-treatment, utility treatment, wastewater handling and recovery systems.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 8V12M20 28V32M32 20H28M12 20H8M28.3 11.7L25.5 14.5M14.5 25.5L11.7 28.3M28.3 28.3L25.5 25.5M14.5 14.5L11.7 11.7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    key: "design",
    title: "Process-Aware Design",
    text: "Layouts are aligned to actual site conditions, operating cycles, water balance and plant reliability expectations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 34V18L14 24V18L22 24V18L30 24V16L34 20V34H6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 34H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "reuse",
    title: "Reuse & Compliance Focus",
    text: "Solutions are planned to support water conservation, cleaner discharge and more efficient resource use.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 20C8 13.4 13.4 8 20 8C24.2 8 27.9 10.2 30 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 6V13.5H22.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M32 20C32 26.6 26.6 32 20 32C15.8 32 12.1 29.8 10 26.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 34V26.5H17.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "lifecycle",
    title: "Lifecycle Support",
    text: "From design and execution to optimization and service support, Aquen Fluid stays on as a long-term partner.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M24 8L28 12L15 25L9 27L11 21L24 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M9 33H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];





// Project Approach

 
const APPROACH_TAGS = [
  "Water Quality Study",
  "System Design",
  "Manufacturing",
  "Installation",
  "Service Support",
];
 
const APPROACH_STEPS = [
  {
    num: "01",
    title: "Assess the requirement",
    text: "Study source water, process conditions, utility needs, discharge norms and reuse potential.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M25.5 25.5L33 33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Define the treatment approach",
    text: "Select the right process train for treatment, recovery, reuse and stable operation.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M16 6H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 6V13L8.5 28C8 29.4 9 31 10.6 31H29.4C31 31 32 29.4 31.5 28L23 13V6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M13 24H27" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Execute and support the system",
    text: "Deliver the plant with engineering, installation, commissioning and lifecycle support aligned to site needs.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M23 7L28 12L14 26L7 28L9 21L23 7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M8 33H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];




// Get a Quote








// Functions














// Export default


    export default function IndustryGridSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [scrollRatio, setScrollRatio] = useState(0);
 
  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft < maxScroll - 4);
    setScrollRatio(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  }, []);
 
  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    const onResize = () => updateScrollState();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateScrollState]);
 
  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".ig-card");
    const step = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };







  return (
    <div>
        <Header />

          <main>
    {/* <section className="page-hero page-hero--industries" id="hero">
      <div className="container">
        <div className="industry-hero-grid">
          <div className="reveal-l">
            <div className="industry-badge">
              Industries We Serve
            </div>
            <h1 className="industry-title">
              Industries We Serve
            </h1>
            <p className="industry-sub">
              WTE delivers customized water and wastewater treatment solutions across municipal, industrial and infrastructure sectors. From supply quality and process reliability to recycling, compliance and discharge management, each system is engineered around industry-specific operating needs.
            </p>
            <div className="industry-hero-actions">
              <a className="btn btn-green" href="#industry-grid">
                Explore Industries
              </a>
              <a className="btn btn-outline-white" href="#contact-footer">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> */}


            <section className="life-hero" id="hero">
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="life-hero-grid">
              <div className="life-hero-copy">
                {/* <span className="life-kicker">Industries We Serve</span> */}
                <h1>
                  Industries We Serve
                </h1>
                <p>
                  Aquen delivers customized water and wastewater treatment solutions for industrial, commercial, institutional, and municipal sectors. Our systems are engineered to meet industry-specific water quality, process, recycling, reuse, and environmental compliance requirements, ensuring reliable performance and sustainable water management.  
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




    {/* <section className="kpi-strip">
      <div className="container">
        <div className="kpi-grid reveal">
          <div className="kpi-card">
            <strong>
              28+
            </strong>
            <span>
              Industry segments represented on this page
            </span>
          </div>
          <div className="kpi-card">
            <strong>
              Supply
            </strong>
            <span>
              Solutions for raw water, utility water and high-purity process needs
            </span>
          </div>
          <div className="kpi-card">
            <strong>
              Recycle
            </strong>
            <span>
              Recovery-first designs to reduce fresh water dependence
            </span>
          </div>
          <div className="kpi-card">
            <strong>
              Support
            </strong>
            <span>
              Execution and service aligned to demanding plant operations
            </span>
          </div>
        </div>
      </div>
    </section> */}




   <section className="ig-section" id="industry-grid">
      <div className="ig-container">
        <div className="ig-header">
          <span className="ig-label">All Industries</span>
          <h2 className="ig-title">Explore Solutions by Industry</h2>
          <p className="ig-sub">
            Browse the industries Aquen Fluid serves and see how our water and
            wastewater treatment expertise applies to different process
            environments, utility demands and compliance requirements.
          </p>
        </div>
 
        <div className="ig-carousel">
          <div
            className="ig-track"
            ref={trackRef}
            onScroll={updateScrollState}
            aria-label="Industry cards"
          >
            {INDUSTRIES.map((industry) => (
              <article className="ig-card" key={industry.slug}>
                <div className="ig-card-media">
                  <img src={industry.image} alt={industry.title} loading="lazy" />
                  <span className="ig-card-eyebrow">{industry.eyebrow}</span>
                </div>
                <div className="ig-card-body">
                  <h3 className="ig-card-title">{industry.title}</h3>
                  <p className="ig-card-text">{industry.text}</p>
                  <a className="ig-card-link" href={industry.href}>
                    Learn More
                    <span className="ig-card-link-arrow">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
 
          <div className="ig-controls">
            <div className="ig-progress">
              <span
                className="ig-progress-fill"
                style={{ transform: `scaleX(${Math.max(scrollRatio, 0.04)})` }}
              />
            </div>
 
            <div className="ig-buttons">
              <button
                type="button"
                className="ig-btn"
                aria-label="Scroll industries left"
                disabled={!canScrollPrev}
                onClick={() => scrollByCard(-1)}
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                className="ig-btn"
                aria-label="Scroll industries right"
                disabled={!canScrollNext}
                onClick={() => scrollByCard(1)}
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>




    <section className="ov-section" id="industry-overview">
      <div className="ov-container">
        <div className="ov-header">
          <span className="ov-label">Industry Overview</span>
          <h2 className="ov-title">Water &amp; Wastewater Solutions Across Key Sectors</h2>
          <p className="ov-sub">
            From municipal infrastructure to complex industrial operations,
            Aquen Fluid delivers reliable water and wastewater treatment solutions
            tailored to diverse industry requirements. Our expertise supports
            efficient, compliant and scalable systems across every sector we
            serve.
          </p>
        </div>
 
        <div className="ov-bento">
          {/* Tall left cell: intro copy + quick nav as a stacked menu */}
          <div className="ov-cell ov-cell--nav">
            <span className="ov-cell-tag">A</span>
            <h3 className="ov-cell-title">What you will find on this page</h3>
            <p className="ov-cell-text">
              This page gives you a structured view of the industries Aquen Fluid
              serves, the treatment requirements commonly associated with
              each sector, and the solution direction most relevant to your
              application.
            </p>
 
            <nav className="ov-menu" aria-label="Page sections">
              {QUICK_NAV.map((item) => (
                <a className="ov-menu-link" href={item.href} key={item.href}>
                  <span>{item.label}</span>
                  <span className="ov-menu-arrow">→</span>
                </a>
              ))}
            </nav>
          </div>
 
          {/* Top-right cell: tag cluster */}
          <div className="ov-cell ov-cell--tags">
            <span className="ov-cell-tag">B</span>
            <h3 className="ov-cell-title">Sectors we work across</h3>
            <div className="ov-tag-cluster">
              {TAGS.map((tag, i) => (
                <span
                  className={`ov-tag ov-tag--${(i % 3) + 1}`}
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
 
          {/* Bottom-right cell: numbered requirements */}
          <div className="ov-cell ov-cell--reqs">
            <span className="ov-cell-tag">C</span>
            <h3 className="ov-cell-title">Common requirements across industries</h3>
            <p className="ov-cell-text">
              Every sector has different conditions, but most projects share
              the same goals: reliable quality, stable performance, lower
              risk, and compliant discharge.
            </p>
            <ol className="ov-req-list">
              {REQUIREMENTS.map((item, i) => (
                <li className="ov-req-item" key={item}>
                  <span className="ov-req-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>




   <section className="cat-section" id="industry-groups">
      <div className="cat-container">
        <div className="cat-header">
          <span className="cat-label">By Category</span>
          <h2 className="cat-title">Find Solutions by Sector</h2>
          <p className="cat-sub">
            To make navigation easier, we have grouped industry applications
            into municipal, industrial and infrastructure-led segments so you
            can quickly move to the most relevant solution context.
          </p>
        </div>
 
        <div className="cat-grid">
          {CATEGORIES.map((category) => (
            <article className={`cat-card cat-card--${category.key}`} key={category.key}>
              <div className="cat-card-icon">{category.icon}</div>
              <h3 className="cat-card-title">{category.title}</h3>
              <ul className="cat-list">
                {category.items.map((item) => (
                  <li className="cat-list-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>




   <section className="why-section" id="why-wte">
      <div className="why-container">
        <div className="why-header">
          <span className="why-label">Why Aquen Fluid</span>
          <h2 className="why-title">Why Industries Trust Aquen Fluid</h2>
          <p className="why-sub">
            Aquen Fluid combines engineering depth, process understanding and
            execution capability to deliver treatment systems that perform
            reliably across diverse industries and operating conditions.
          </p>
        </div>
 
        {/* One unified framework card, split into four quadrants around a
            center badge — rather than a separate hub floating above a
            disconnected grid. */}
        <div className="why-framework">
          <div className="why-center-badge">
            <span className="why-center-label">Aquen Fluid</span>
          </div>
 
          {PILLARS.map((pillar) => (
            <article className="why-quadrant" key={pillar.key}>
              <div className="why-quadrant-icon">{pillar.icon}</div>
              <h3 className="why-quadrant-title">{pillar.title}</h3>
              <p className="why-quadrant-text">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>



    
    <section className="pa-section">
      <div className="pa-container">
        <div className="pa-header">
          <span className="pa-label">Project Approach</span>
          <h2 className="pa-heading">
            From industry requirement to engineered treatment solution
          </h2>
          <p className="pa-copy">
            Every industry project begins with understanding process
            conditions, water quality targets, utility needs and discharge
            obligations. From there, Aquen Fluid develops the right treatment path
            for performance, compliance and long-term operability.
          </p>
          <div className="pa-tags">
            {APPROACH_TAGS.map((tag) => (
              <span className="pa-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
 
        {/* Segmented progress meter — three marks for three stages,
            same column layout as the cards below so it reads as one
            unit rather than a decorative bar sitting apart from them. */}
        <div className="pa-meter" aria-hidden="true">
          <span className="pa-meter-seg" />
          <span className="pa-meter-seg" />
          <span className="pa-meter-seg" />
        </div>
 
        <div className="pa-cards">
          {APPROACH_STEPS.map((step) => (
            <div className="pa-card" key={step.num}>
              <div className="pa-card-icon">{step.icon}</div>
              <span className="pa-card-num">Stage {step.num}</span>
              <h3 className="pa-card-title">{step.title}</h3>
              <p className="pa-card-text">{step.text}</p>
            </div>
          ))}
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
              Whether you are planning a new plant, upgrading an existing system or
              improving reuse and compliance performance, our team can help define the
              right solution for your industry.
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
