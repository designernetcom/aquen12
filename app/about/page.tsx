"use client";
import { useState, useRef } from "react";
import type { ReactNode } from "react";
import { Droplet, Filter, Building2, Factory, FlaskConical, Globe, Landmark, TrendingUp, Warehouse, Award, Trophy, Pill, Rocket, 
    Building, ChevronLeft, ChevronRight, Recycle, RefreshCw, Plus, Layers, Package, FolderKanban, Mail, ArrowRight, MessageCircle, Clock  } from "lucide-react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import "./about.css";
import Image from "next/image";



//  section 2

const FEATURES = [
  "Engineering-led approach",
  "Manufacturing support",
  "Service focused",
];

const CHECKLIST = [
  "25+ Years of Industry Experience",
  "Complete Turnkey Solutions",
  "In-house Design & Engineering",
  "Quality Manufacturing",
  "Skilled Installation Team",
  "Prompt After-Sales Service",
  "Competitive Pricing",
  "Timely Project Execution",
  "Commitment to Environmental Sustainability"
];





//  section 3

type ViewKey = "vision" | "mission";

const VM_ICON_PROPS = {
  width: 30,
  height: 30,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const EyeIcon: ReactNode = (
  <svg {...VM_ICON_PROPS}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
);

const TargetIcon: ReactNode = (
  <svg {...VM_ICON_PROPS}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

interface ViewData {
  key: ViewKey;
  label: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

const VIEWS: ViewData[] = [
  {
    key: "vision",
    label: "Our vision",
    title: "A trusted, forward-looking water treatment company.",
    desc: "To become one of India's most trusted solution providers in water and wastewater treatment through innovation, quality, and customer satisfaction.",
    icon: EyeIcon,
  },
  {
    key: "mission",
    label: "Our mission",
    title: "Engineered systems, delivered with quality and support.",
    desc: "To deliver reliable, sustainable, and technologically advanced water treatment solutions that help conserve water resources while ensuring complete customer satisfaction.",
    icon: TargetIcon,
  },
];





//  section 4

 
interface ValueTile {
  key: string;
  title: string;
  desc: string;
  icon: ReactNode;
}
 
const ICON_PROPS = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};
 
const WrenchIcon: ReactNode = (
  <svg {...ICON_PROPS}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2z" />
  </svg>
);
 
const FactoryIcon: ReactNode = (
  <svg {...ICON_PROPS}>
    <path d="M3 21V10l6 4v-4l6 4v-4l6 4v7z" />
    <path d="M3 21h18" />
  </svg>
);
 
const GlobeIcon: ReactNode = (
  <svg {...ICON_PROPS}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14.5 14.5 0 0 1 0 18" />
    <path d="M12 3a14.5 14.5 0 0 0 0 18" />
  </svg>
);
 
const HeadsetIcon: ReactNode = (
  <svg {...ICON_PROPS}>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
    <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
    <path d="M20 19a4 4 0 0 1-4 3h-2" />
  </svg>
);
 
const VALUES: ValueTile[] = [
  {
    key: "engineering",
    title: "Engineering Expertise",
    desc: "Innovative process design and customized engineering solutions that ensure efficient, reliable, and compliant treatment systems.",
    icon: WrenchIcon,
  },
  {
    key: "manufacturing",
    title: "End-to-End Solutions",
    desc: "Complete services including design, manufacturing, installation, commissioning, retrofitting, operation, and maintenance under one roof.",
    icon: FactoryIcon,
  },
  {
    key: "global",
    title: "Industry Experience",
    desc: "Proven expertise across diverse industries with solutions tailored to varying water quality, treatment capacities, and operational requirements.",
    icon: GlobeIcon,
  },
  {
    key: "support",
    title: "Customer Support",
    desc: "Dedicated after-sales service, technical assistance, AMC, and operational support to ensure long-term plant performance and customer satisfaction.",
    icon: HeadsetIcon,
  },
];






//  section 5

const GS_MILESTONES = [
  { icon: Droplet, year: "2007", title: "The Beginning", tag: "Foundation of WTE", text: "WTE started its journey in water treatment equipment and project solutions, building the foundation for future engineering growth.", phase: "Foundation", stage: "2007–2014" },
  { icon: Filter, year: "2008", title: "First Product", tag: "Filtration Plant", text: "The company delivered its first filtration plant, marking the transition from concept to a functioning commercial product line.", phase: "Foundation", stage: "2007–2014" },
  { icon: Building2, year: "2009", title: "Builder Sector STP", tag: "Wastewater Projects", text: "WTE entered the residential builder segment with sewage treatment plant projects, broadening its wastewater project portfolio.", phase: "Foundation", stage: "2007–2014" },
  { icon: Factory, year: "2010", title: "Manufacturing Unit", tag: "Bhosari, Pune", text: "A dedicated manufacturing unit was established in Bhosari, Pune, giving WTE in-house fabrication capability for the first time.", phase: "Foundation", stage: "2007–2014" },
  { icon: FlaskConical, year: "2011–12", title: "Sector Expansion", tag: "Sugar & Distillery", text: "WTE extended its treatment systems into the sugar and distillery sectors, taking on more complex process water requirements.", phase: "Foundation", stage: "2007–2014" },
  { icon: Globe, year: "2013–14", title: "Export & ISO", tag: "Dubai / TÜV Nord", text: "The company completed its first export project to Dubai and achieved ISO certification through TÜV Nord, formalizing quality systems.", phase: "Foundation", stage: "2007–2014" },
  { icon: Landmark, year: "2015", title: "Govt Tender STP", tag: "New Identity", text: "WTE secured its first government tender STP project and refreshed its corporate identity to match its growing project scale.", phase: "Expansion", stage: "2015–2018" },
  { icon: TrendingUp, year: "2016", title: "Builder Growth", tag: "Market Expansion", text: "Continued growth in the builder and residential township segment expanded WTE's presence across Maharashtra.", phase: "Expansion", stage: "2015–2018" },
  { icon: Warehouse, year: "2017–18", title: "Chakan Unit", tag: "Infrastructure", text: "A larger manufacturing facility was set up at Chakan, expanding fabrication capacity and equipment handling infrastructure.", phase: "Expansion", stage: "2015–2018" },
  { icon: Award, year: "2019–20", title: "ASME & QMS", tag: "Certification", text: "WTE obtained ASME certification and formalized its Quality Management System, strengthening its pressure vessel manufacturing credibility.", phase: "Certification & Scale", stage: "2019–2022" },
  { icon: Trophy, year: "2021", title: "Recognition & WTPs", tag: "Major Milestones", text: "The company received industry recognition while scaling up delivery of water treatment plant projects across sectors.", phase: "Certification & Scale", stage: "2019–2022" },
  { icon: Pill, year: "2022", title: "Pharma ZLD", tag: "ASME Vessel", text: "WTE delivered a Zero Liquid Discharge system for a pharmaceutical client, backed by in-house ASME-certified vessel manufacturing.", phase: "Certification & Scale", stage: "2019–2022" },
  { icon: Rocket, year: "2023", title: "New Heights", tag: "Global Footprint", text: "WTE's project footprint extended further internationally, reinforcing its position as a growing global treatment solutions provider.", phase: "Growth", stage: "2023–2024" },
  { icon: Building, year: "2024", title: "Corporate Growth", tag: "Team & Office", text: "The team and corporate office expanded to support a growing pipeline of projects and a larger engineering workforce.", phase: "Growth", stage: "2023–2024" },
];





//  section 6

const CPB_ITEMS = [
  {
    icon: Droplet,
    // letter: "A",
    title: "Water Treatment Plants",
    text: "Complete solutions including RO Plants, DM Plants, Water Softeners, Filtration Systems, Ultrafiltration (UF), Desalination Plants, and process water treatment systems for diverse industrial requirements.",
  },
  {
    icon: Recycle,
    // letter: "B",
    title: "Wastewater Treatment Plants",
    text: "Efficient Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), MBR, MBBR, recycling, and water reuse systems designed for environmental compliance and long-term operational efficiency.",
  },
  {
    icon: RefreshCw,
    // letter: "C",
    title: "Industrial Services",
    text: "End-to-end capabilities including design, manufacturing, installation, commissioning, retrofitting, operation, maintenance, and annual maintenance services (AMC) for complete water and wastewater treatment plants.",
  },
];


//  section 7

const CFAQ_ITEMS = [
  {
    q: "What does Aquen do?",
    a: "Aquen specializes in the design, manufacturing, installation, commissioning, retrofitting, operation, and maintenance of complete water and wastewater treatment systems, including STP, ETP, WTP, RO, UF, DM, MBR, MBBR, filtration systems, desalination plants, and customized process treatment solutions.",
  },
  {
    q: "Does Aquen provide turnkey project execution?",
    a: "Yes. Aquen offers complete turnkey solutions, from process design and engineering to manufacturing, supply, installation, testing, commissioning, and long-term operation and maintenance support.",
  },
  {
    q: "Which industries does Aquen serve?",
    a: "Aquen delivers customized water treatment solutions for industrial, commercial, institutional, municipal, infrastructure, healthcare, hospitality, pharmaceutical, food & beverage, chemical, textile, and manufacturing sectors.",
  },
  {
    q: "Why choose Aquen for water and wastewater treatment?",
    a: "With 25+ years of industry experience, Aquen is committed to delivering innovative, energy-efficient, and environmentally compliant treatment solutions. Our engineering expertise, quality manufacturing, reliable project execution, and dedicated customer support ensure long-lasting performance and maximum value for every client.",
  },
];
 
const CFAQ_LINKS = [
  { icon: Layers, label: "Explore Solutions", href: "" },
  { icon: Package, label: "View Products", href: "" },
  { icon: FolderKanban, label: "See Projects", href: "" },
  { icon: Mail, label: "Contact Aquen", href: "" },
];







// ---------- page ----------
export default function Page() {

    //  section 3

      const [active, setActive] = useState<ViewKey>("vision");
  const current = VIEWS.find((v) => v.key === active)!;


//   section 5



  const [activeIndex, setActiveIndex] = useState(0);
  const railRef = useRef<HTMLDivElement | null>(null);
  const activeMilestone = GS_MILESTONES[activeIndex];
 
  const goTo = (index: number) => setActiveIndex(index);
 
const scrollRail = (direction: number) => {
  if (!railRef.current) return;

  railRef.current.scrollBy({
    left: direction * 160,
    behavior: "smooth",
  });
};


//   section 7

  const [openIndex, setOpenIndex] = useState(0);
 
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
 




  return (
    <div>
      <Header />

      <main>
    <section className="ch-hero" id="hero">
      {/* Background image */}
      <div className="ch-media">
        <Image
          src="/banner1.png"
          alt="Aquen Fluid water treatment plant"
          fill
          priority
          sizes="100vw"
          className="ch-media-img"
        />
        <div className="ch-media-overlay" />
        <div className="ch-media-grid" />
      </div>
 
      <div className="ch-container">
        <div className="ch-grid">
          {/* Copy column */}
          <div className="ch-copy">
            <span className="ch-kicker">
              <span className="ch-kicker-dot" />
              About Aquen
            </span>
 
            <h1 className="ch-title">
              Engineering Water & Wastewater Solutions
              
              <span className="ch-title-accent"> 25+ Years of Excellence</span>
            </h1>
 
            <p className="ch-desc">
              Aquen is a trusted provider of water and wastewater treatment solutions, delivering complete turnkey systems for industrial, commercial, institutional, and municipal applications. We specialize in the design, manufacturing, installation, commissioning, retrofitting, operation, and maintenance of STP, ETP, WTP, RO, UF, DM, MBR, MBBR, desalination, filtration, and customized water treatment plants.
            </p><br />
 
            {/* <div className="ch-actions">
              <a href="#contact-form" className="ch-btn ch-btn-primary">
                Get a Technical Quote
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="tel:+910000000000" className="ch-btn ch-btn-ghost">
                Call the Plant Desk
              </a>
            </div> */}
          </div>
 
          {/* Signature element: live status / readout panel */}
          <aside className="ch-panel" aria-label="Response overview">
            <div className="ch-panel-head">
              <span className="ch-panel-status">
                <span className="ch-panel-status-dot" />
                Desk online
              </span>
              <span className="ch-panel-id">AQF&nbsp;/&nbsp;CONTACT</span>
            </div>
 
            <ul className="ch-panel-rows">
              <li className="ch-panel-row">
                <span className="ch-panel-label">Avg. response time</span>
                <span className="ch-panel-value">&lt; 24 hrs</span>
              </li>
              <li className="ch-panel-row">
                <span className="ch-panel-label">Systems delivered</span>
                <span className="ch-panel-value">150+</span>
              </li>
              <li className="ch-panel-row">
                <span className="ch-panel-label">Site assessment</span>
                <span className="ch-panel-value">Free of cost</span>
              </li>
            </ul>
 
            <div className="ch-panel-foot">
              Every enquiry is routed to an engineer who has built the
              system you&apos;re asking about — not a sales queue.
            </div>
          </aside>
        </div>
      </div>
 
      {/* Bottom wave divider into next section */}
      <svg
        className="ch-wave"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C240,64 480,0 720,24 C960,48 1200,72 1440,32 L1440,80 L0,80 Z"
          fill="var(--ch-wave-fill)"
        />
      </svg>
    </section>

    <section className="wte-about">
      <div className="wte-about-container">
        <div className="wte-about-text">
          <div className="eyebrow-row">
            <span className="wte-about-eyebrow"> Who we are</span>
          </div>

          <h2 className="wte-about-title">
            Leading Water & Wastewater Treatment Solutions Provider
          </h2>
          <p>
            We are a leading provider of Water & Wastewater Treatment Solutions, delivering innovative, reliable
             and sustainable systems for industrial, commercial, institutional, and municipal applications. With over 25 years 
             of industry experience, we specialize in the design, manufacturing, installation, commissioning, retrofitting, operation
              and maintenance of complete water and wastewater treatment plants.
          </p>
          <p>
            Our solutions are engineered to meet diverse water treatment requirements while ensuring cost-effectiveness, energy 
            efficiency, and environmental compliance. By combining advanced engineering expertise, high-quality manufacturing, and 
            seamless project execution, we deliver customized treatment systems that help clients optimize water reuse, reduce 
            operational costs, achieve regulatory compliance, and ensure long-term, reliable plant performance.
          </p>
          <div className="wte-about-features">
            {FEATURES.map((feature, i) => (
              <span className="wte-about-feature" key={feature}>
                {i > 0 && <span className="wte-about-feature-sep" aria-hidden="true" />}
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="wte-about-highlight">
          <div className="wte-about-highlight-backdrop" aria-hidden="true" />
          <div className="wte-about-highlight-card">
            <h3>WHY CHOOSE US ?</h3>
            <p>
              Transforming Water. Preserving the Future.
            </p>
            <div className="wte-about-checklist">
              {CHECKLIST.map((item, i) => (
                <div className="wte-about-check-row" key={item}>
                  <span className="wte-about-check-mark">{i + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="wte-vm3">
      <div className="wte-vm3-container">
        <div className="wte-vm3-switch" role="tablist" aria-label="Vision or mission">
          {VIEWS.map((view) => (
            <button
              key={view.key}
              type="button"
              role="tab"
              aria-selected={active === view.key}
              className={`wte-vm3-switch-btn${active === view.key ? " is-active" : ""}`}
              onClick={() => setActive(view.key)}
            >
              {view.label}
            </button>
          ))}
        </div>

        <div className="wte-vm3-stage" key={current.key}>
          <span className="wte-vm3-icon">{current.icon}</span>
          <h2>{current.title}</h2>
          <p>{current.desc}</p>
        </div>
      </div>
    </section>

    <section className="wte-values">
      <div className="wte-values-container">
        <div className="wte-values-head">
          <span className="wte-values-eyebrow"> Our core strength</span>
          <h2 className="wte-values-title">
            Delivering innovation, quality, and sustainable water treatment solutions.
          </h2>
          <p className="wte-values-lead">
            With over 25 years of industry expertise, we provide advanced water and wastewater treatment systems designed 
            to meet the evolving needs of industrial, commercial, institutional, and municipal clients.
          </p>
        </div>
 
        <div className="wte-values-grid">
          {VALUES.map((value) => (
            <div className="wte-values-tile" key={value.key} tabIndex={0}>
              <div className="wte-values-tile-face">
                <span className="wte-values-icon">{value.icon}</span>
                <h3>{value.title}</h3>
              </div>
              <div className="wte-values-tile-reveal">
                <span className="wte-values-icon wte-values-icon--reveal">{value.icon}</span>
                <p>{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* <section className="gs-section" id="timeline">
      <div className="gs-container">
        <div className="gs-head">
          <span className="gs-kicker">WTE Growth Journey</span>
          <h2 className="gs-title">Leading the Way Since 2007</h2>
          <p className="gs-sub">
            From our first step in 2007 to global milestones, explore how WTE
            has grown through engineering, manufacturing and customer trust.
          </p>
        </div>
 

        <div className="gs-spotlight">
          <div className="gs-spotlight-icon">
            <activeMilestone.icon size={30} />
          </div>
          <div className="gs-spotlight-body">
            <span className="gs-spotlight-year">{activeMilestone.year}</span>
            <h3>{activeMilestone.title}</h3>
            <p>{activeMilestone.text}</p>
            <div className="gs-spotlight-meta">
              <span>
                <strong>{activeMilestone.phase}</strong> Key business milestone
              </span>
              <span>
                <strong>{activeMilestone.stage}</strong> Journey phase
              </span>
            </div>
          </div>
        </div>
 

        <div className="gs-rail-wrap">
          <button
            type="button"
            className="gs-rail-arrow"
            aria-label="Scroll timeline left"
            onClick={() => scrollRail(-1)}
          >
            <ChevronLeft size={16} />
          </button>
 
          <div className="gs-rail" ref={railRef}>
            {GS_MILESTONES.map((m, i) => (
              <button
                type="button"
                key={`${m.year}-${m.title}`}
                className={`gs-node ${activeIndex === i ? "gs-node--active" : ""}`}
                onClick={() => goTo(i)}
              >
                <span className="gs-node-icon">
                  <m.icon size={16} />
                </span>
                <span className="gs-node-year">{m.year}</span>
              </button>
            ))}
          </div>
 
          <button
            type="button"
            className="gs-rail-arrow"
            aria-label="Scroll timeline right"
            onClick={() => scrollRail(1)}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section> */}

    <section className="cpb-section">
      <div className="cpb-grid-bg" aria-hidden="true" />
      <div className="cpb-container">
        <div className="cpb-head">
          <span className="cpb-kicker">Capabilities</span>
          <h2 className="cpb-title">
            Comprehensive Water & Wastewater Treatment Solutions for Every Industry
          </h2>
          <p className="cpb-sub">
            We provide advanced and customized water treatment solutions for industrial, commercial, institutional, and municipal applications, ensuring reliable performance, regulatory compliance, and sustainable water management.
          </p>
        </div>
 
        <div className="cpb-grid">
          {CPB_ITEMS.map((item) => (
            <div className="cpb-card" key={item.title}>
              {/* <span className="cpb-card-letter" aria-hidden="true">
                {item.letter}
              </span> */}
              <div className="cpb-card-icon">
                <item.icon size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="cpb-card-bar" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="cfaq-section" id="about-faq">
      <div className="cfaq-container">
        <div className="cfaq-head">
          <span className="cfaq-kicker">Company FAQs</span>
          <h2 className="cfaq-title">
            Quick answers about Aquen Water & Wastewater Solutions
          </h2>
          <p className="cfaq-sub">
            Find answers to common questions from industries, consultants, contractors, institutions, and municipalities looking for reliable water and wastewater treatment solutions.
          </p>
        </div>
 
        <div className="cfaq-list">
          {CFAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <article
                className={`cfaq-item ${isOpen ? "cfaq-item--open" : ""}`}
                key={item.q}
              >
                <button
                  type="button"
                  className="cfaq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="cfaq-question-text">{item.q}</span>
                  <span className="cfaq-question-toggle">
                    <Plus size={16} />
                  </span>
                </button>
                <div className="cfaq-answer">
                  <div className="cfaq-answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
 
        <div className="cfaq-links">
          {CFAQ_LINKS.map((link) => (
            <a className="cfaq-link" href={link.href} key={link.label}>
              <link.icon size={15} />
              {link.label}
            </a>
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
              Planning a water or wastewater treatment project?
            </h2>
            <p className="icb-sub">
                Connect with WTE to discuss your requirement, site condition, capacity, compliance target and suitable treatment approach.
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