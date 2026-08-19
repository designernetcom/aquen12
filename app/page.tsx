/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck -- Direct design port from the original JavaScript application.
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Droplet,
  Recycle,
  Wrench,
  Factory,
  FlaskConical,
  Settings2,
  Award,
  Users,
  ShieldCheck,
  Rocket,
  Percent,
  Headphones,
  Leaf,
  Stethoscope,
  BedDouble,
  UtensilsCrossed,
  Milk,
  Pill,
  Shirt,
  Building2,
  Home as HomeIcon,
  GraduationCap,
  Landmark,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Star,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ClipboardList,
  Ruler,
  HardHat,
  Gauge,
  FlaskRound,
  Cpu,
  Truck,
  Beaker,
  Cog,
  Boxes,
  Zap,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import "./page.css";

/* ============================================================
   DATA
   ============================================================ */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Projects", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const HERO_STATS = [
  {
    icon: Droplet,
    value: 6,
    suffix: "",
    label: "Core service categories",
    code: "SOLUTIONS",
  },
  {
    icon: Factory,
    value: 11,
    suffix: "",
    label: "Industries we serve",
    code: "SECTORS",
  },
  {
    icon: Settings2,
    value: 3,
    suffix: "",
    label: "In-house production disciplines",
    code: "CAPABILITY",
  },
];

const HERO_SLIDES = [

    {
    eyebrow: "Wastewater Treatment Solutions",
    badge: "Integrated Water & Wastewater Solutions",
    titleStart: "Industrial Sewage",
    titleMiddle: "Treatment Plant for",
    highlight: "Wastewater Recycling",
    description:
      "Aquen sewage treatment plant solutions are engineered to treat wastewater from residential, commercial, institutional and industrial facilities through screening, equalization, biological.",
    image: " banner2.png",
    sideTitle: "Recovery Program",
    sideValue: "99.2%",
    sideText:
      "Reduced BOD, COD, TSS and odour for compliant discharge and reliable non-potable water reuse.",
  },
  {
    eyebrow: "Smart Effluent Engineering",
    badge: "Retrofit, Upgrade And Performance Optimisation",
    titleStart: "Effluent Treatment",
    titleMiddle: "Designed for",
    highlight: "Compliance and Water Reuse",
    description:
      "We modernise aging plants with process upgrades, automation, capacity enhancement and energy-saving interventions that improve compliance without rebuilding from scratch.",
    image: "banner1.png",
    sideTitle: "Upgrade Scope",
    sideValue: "24/7",
    sideText:
      "After-sales support, breakdown response and performance monitoring for mission-critical water systems.",
  },

  {
    eyebrow: "Raw Water To Process Water",
    badge: "Turnkey Water Infrastructure Delivery",
    titleStart: "High-Capacity Water",
    titleMiddle: "Treatment Systems for",
    highlight: "Continuous Industrial Supply",
    description:
      "From filtration and softening to DM and RO polishing, our plants are designed to deliver stable process water quality with automation, reliability and long operating life.",
    image: "banner3.webp",
    sideTitle: "Flow Assurance",
    sideValue: "1,200 m3/day",
    sideText:
      "Integrated treatment trains sized for industrial demand, operational continuity and monitored performance.",
  },

];

const CAPABILITIES = [
  { icon: Ruler, label: "Design" },
  { icon: Factory, label: "Manufacturing" },
  { icon: HardHat, label: "Installation" },
  { icon: Gauge, label: "Commissioning" },
  { icon: Settings2, label: "Retrofitting" },
  { icon: Wrench, label: "Operation & Maintenance" },
];

const SERVICES = [
  {
    icon: Droplet,
    title: "Water Treatment Plants",
    size: "large",
    desc: "Complete raw-to-potable water systems engineered for consistent output, from municipal intake to industrial process water.",
    items: [
      "Raw Water Treatment Plants",
      "Filtration Systems",
      "Softener Plants",
      "Demineralization (DM) Plants",
      "Reverse Osmosis (RO) Systems",
      "Ultra Filtration (UF) Systems",
    ],

    image: "/home-abt.png",
  },
  {
    icon: Recycle,
    title: "Wastewater Treatment",
    size: "medium",
    desc: "Treatment and reuse systems built to meet discharge norms and recover water for secondary use.",
    items: [
      "Sewage Treatment Plants (STP)",
      "Effluent Treatment Plants (ETP)",
      "Package STP & ETP Systems",
      "Grey Water Recycling Systems",
      "Industrial Wastewater Treatment",
    ],
    image: "/banner/water-treatment.png",
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance",
    size: "medium",
    desc: "Round-the-clock plant operation backed by preventive schedules, so performance never depends on luck.",
    items: [
      "Annual Maintenance Contracts (AMC)",
      "Plant Operation",
      "Preventive Maintenance",
      "Chemical Supply",
      "Performance Monitoring",
      "Breakdown Support",
    ],
    image: "/banner/operation-maintenance.png",
  },
  {
    icon: Factory,
    title: "Fabrication & Engineering",
    size: "large",
    desc: "In-house fabrication of pressure-rated vessels and skids, built to spec and pressure-tested before dispatch.",
    items: [
      "MS & SS Pressure Vessel Fabrication",
      "Storage Tanks",
      "Pressure Filters",
      "Skid-Mounted Systems",
      "Custom Process Equipment",
      "Piping Fabrication & Installation",
    ],
    image:
      "/banner/fabrication-engineering.png",
  },
  {
    icon: FlaskConical,
    title: "Advanced Biological Treatment",
    size: "small",
    desc: "Biological processes for demanding effluent loads and tight footprints.",
    items: [
      "MBBR (Moving Bed Biofilm Reactor)",
      "MBR (Membrane Bioreactor)",
      "SBR Process",
      "ASP Process",
    ],
    image:
      "/banner/advanced-biological.png",
  },
  {
    icon: Cog,
    title: "Retrofitting & Upgradation",
    size: "small",
    desc: "Upgrade an aging plant without rebuilding it from scratch.",
    items: [
      "Capacity Enhancement",
      "Technology Upgradation",
      "Energy Saving Modifications",
      "Automation & PLC Integration",
      "Performance Improvement of Existing Plants",
    ],
    image: "/banner/retrofitting.png",
  },
];

const WHY_US = [
  {
    icon: Award,
    title: "Purpose-Built Solutions",
    desc: "Every system is engineered around the application's actual water conditions.",
  },
  {
    icon: Boxes,
    title: "Turnkey Solutions",
    desc: "One contract, one accountable team, start to finish.",
  },
  {
    icon: Users,
    title: "Expert Engineers",
    desc: "Process, mechanical and automation specialists in-house.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Manufacturing",
    desc: "Every vessel fabricated and tested to code.",
  },
  {
    icon: Rocket,
    title: "Fast Installation",
    desc: "Site-ready systems, commissioned on schedule.",
  },
  {
    icon: Percent,
    title: "Competitive Pricing",
    desc: "Transparent costing with no hidden change orders.",
  },
  {
    icon: Headphones,
    title: "24x7 Support",
    desc: "A plant that runs at 3am gets support at 3am.",
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    desc: "Systems designed to reduce fresh-water intake.",
  },
];

const MVV = [
  {
    icon: Rocket,
    title: "Mission",
    text: "Deliver water and wastewater systems that perform reliably for decades, not just at handover.",
  },
  {
    icon: Gauge,
    title: "Vision",
    text: "Be the engineering partner industries call first, wherever water needs to be treated, reused, or recovered.",
  },
  {
    icon: Leaf,
    title: "Values",
    text: "Engineering integrity, environmental responsibility, and a plant-first mindset in every project we take on.",
  },
];

const INDUSTRIES = [
  {
    icon: Stethoscope,
    label: "Hospitals",
    desc: "Reliable treatment for critical healthcare environments.",
  },
  {
    icon: BedDouble,
    label: "Hotels",
    desc: "Efficient reuse systems for high daily water demand.",
  },
  {
    icon: UtensilsCrossed,
    label: "Food",
    desc: "Hygienic process water and compliant wastewater treatment.",
  },
  {
    icon: Milk,
    label: "Dairy",
    desc: "High-load effluent treatment with dependable recovery.",
  },
  {
    icon: Beaker,
    label: "Chemical",
    desc: "Engineered treatment for complex industrial discharge.",
  },
  {
    icon: Pill,
    label: "Pharmaceutical",
    desc: "High-purity water systems built for validated operations.",
  },
  {
    icon: Shirt,
    label: "Textile",
    desc: "Colour removal, recycling and zero-discharge support.",
  },
  {
    icon: Building2,
    label: "Commercial Buildings",
    desc: "Compact automated plants for modern developments.",
  },
  {
    icon: HomeIcon,
    label: "Residential",
    desc: "Quiet, low-maintenance treatment for communities.",
  },
  {
    icon: GraduationCap,
    label: "Educational",
    desc: "Safe, sustainable water systems for active campuses.",
  },
  {
    icon: Landmark,
    label: "Government",
    desc: "Durable public infrastructure engineered for scale.",
  },
];

const INFRASTRUCTURE = [
  {
    icon: FlaskRound,
    title: "R&D Lab",
    desc: "In-house testing of process parameters before a single pipe is laid.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Dedicated production lines for tanks, skids and treatment units.",
  },
  {
    icon: Cog,
    title: "Fabrication",
    desc: "Certified welding and pressure-vessel fabrication under one roof.",
  },
  {
    icon: Truck,
    title: "Distribution Network",
    desc: "Logistics reach across regions for parts, chemicals and support.",
  },
  {
    icon: Cpu,
    title: "Automation",
    desc: "PLC and SCADA integration for remote plant monitoring.",
  },
  {
    icon: Zap,
    title: "Sales Software",
    desc: "Digital quoting and project tracking from enquiry to commissioning.",
  },
];

const WATER_TREATMENT_PROCESS = [
  {
    icon: Droplet,
    title: "Raw Water",
    lines: ["Borewell • River", "Municipal • Sea"],
  },
  {
    icon: FlaskConical,
    title: "Pre-Treatment",
    lines: ["Screening", "Coagulation"],
  },
  {
    icon: Settings2,
    title: "Filtration",
    lines: ["Sand • UF", "Clarification"],
  },
  { icon: Recycle, title: "Purification", lines: ["RO • DM", "UV • Ozone"] },
  {
    icon: CheckCircle2,
    title: "Clean Water",
    lines: ["Process Ready", "Drinking Grade"],
  },
];

const PRODUCTION = [
  {
    icon: Factory,
    title: "Fabrication",
    desc: "Structural and pressure-vessel fabrication to engineering drawings.",
  },
  {
    icon: Zap,
    title: "Electrical",
    desc: "Panel building, wiring and power distribution for plant control.",
  },
  {
    icon: Cpu,
    title: "Instrumentation",
    desc: "Sensors, flow meters and control loops calibrated on-site.",
  },
  {
    icon: Settings2,
    title: "Assembly",
    desc: "Skid-mounted assembly for faster on-site installation.",
  },
  {
    icon: Ruler,
    title: "Design",
    desc: "P&ID, GA drawings and 3D layouts before a single weld.",
  },
];

const PROCESS = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "Understanding your water source, load, and constraints.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    desc: "Scoping capacity, footprint and compliance requirements.",
  },
  {
    icon: Ruler,
    title: "Engineering",
    desc: "Process design, P&IDs and equipment sizing.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "In-house fabrication of vessels, skids and panels.",
  },
  {
    icon: HardHat,
    title: "Installation",
    desc: "Site civil coordination and mechanical erection.",
  },
  {
    icon: CheckCircle2,
    title: "Testing",
    desc: "Wet trials, performance validation against design specs.",
  },
  {
    icon: Headphones,
    title: "Support",
    desc: "AMC, monitoring and breakdown response post handover.",
  },
];

const STATISTICS = [
  { value: 6, suffix: "", label: "Core Service Groups" },
  { value: 11, suffix: "", label: "Industries Served" },
  { value: 3, suffix: "", label: "Production Disciplines" },
  { value: 4, suffix: "", label: "Authorized Product Lines" },
];

const TESTIMONIALS = [
  {
    name: "R. Kulkarni",
    role: "Plant Head, Dairy Processing Unit",
    quote:
      "Our effluent plant has run without a single compliance flag since commissioning. The O&M team knows the system better than we do.",
    rating: 5,
  },
  {
    name: "S. Iyer",
    role: "Facilities Director, Hospital Group",
    quote:
      "They retrofitted our STP without shutting down operations for a single day. That kind of planning is rare.",
    rating: 5,
  },
  {
    name: "A. Deshmukh",
    role: "VP Operations, Textile Manufacturing",
    quote:
      "The fabrication quality on our pressure vessels has held up through three years of continuous operation, zero downtime.",
    rating: 5,
  },
  {
    name: "M. Fernandes",
    role: "Chief Engineer, Commercial Township",
    quote:
      "From first site visit to commissioning was under five months. They kept every commitment on the timeline.",
    rating: 5,
  },
];

/* ============================================================
   HOOKS
   ============================================================ */

function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(node);
        }
      },
      { threshold },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return value;
}

function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
  ...rest
}) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Counter({ value, suffix }) {
  const [ref, visible] = useReveal(0.4);
  const count = useCountUp(value, visible);
  return (
    <span ref={ref} className="counter-num">
      {count}
      {suffix}
    </span>
  );
}

/* Section header — eyebrow + gauge tick + title */
function SectionHead({ eyebrow, title, sub, center }) {
  return (
    <Reveal className={`section-head ${center ? "center" : ""}`}>
      <div className="eyebrow-row">
        <span className="gauge-tick" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [serviceIdx, setServiceIdx] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIdx((i) => (i + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const nextHero = useCallback(
    () => setHeroIdx((i) => (i + 1) % HERO_SLIDES.length),
    [],
  );
  const prevHero = useCallback(
    () => setHeroIdx((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length),
    [],
  );
  const nextTestimonial = useCallback(
    () => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length),
    [],
  );
  const prevTestimonial = useCallback(
    () =>
      setTestimonialIdx(
        (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
      ),
    [],
  );

  return (
    <>
      <div className="nt-root">


        {/* ================= NAVBAR ================= */}
        {/* <div className="navbar-wrap">
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <a href="#home" className="logo">
            <img src="./Aquenfluid logo (2).png" alt="AQUEN Water and Wastewater Solutions" style={{ height: 52 }} />

          </a>
          <nav className="nav-links">
            {NAV_LINKS.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          </nav>
          <div className="navbar-actions">
            <a href="#contact" className="icon-btn-call"><MessageSquare size={16} /> Talk to our team</a>
            <a href="#contact" className="btn btn-primary">Get Quote <ArrowRight size={16} /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={24} color="#052C65" />
            </button>
          </div>
        </header>
      </div> */}

        <Header />

        {menuOpen && (
          <div className="mobile-menu">
            <button
              className="close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={30} />
            </button>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        )}

        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <div className="hero-slides">
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={slide.titleStart}
                className={`hero-slide ${index === heroIdx ? "active" : ""}`}
                style={{ backgroundImage: `url("${slide.image}")` }}
              />
            ))}
          </div>
          {/* <span className="hero-watermark">AQUEN</span> */}
          <div className="hero-grid-pattern" />
          <div className="blob hero-glow-1" />
          <div className="blob hero-glow-2" />
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="bubble"
              style={{
                width: 6 + (i % 4) * 5,
                height: 6 + (i % 4) * 5,
                left: `${8 + i * 9}%`,
                bottom: "-40px",
                animationDuration: `${7 + (i % 5)}s`,
                animationDelay: `${i * 0.9}s`,
              }}
            />
          ))}

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-badge-slider">
                <div
                  className="hero-badge-track"
                  style={{
                    "--hero-offset": `${heroIdx * 44}px`,
                    "--hero-mobile-offset": `${heroIdx * 40}px`,
                  }}
                >
                  {HERO_SLIDES.map((slide) => (
                    <div className="hero-badge-item" key={slide.badge}>
                      <Sparkles size={14} />
                      <span>{slide.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
              <h1 className="hero-title manrope-font">
                {HERO_SLIDES[heroIdx].titleStart}
                <br />
                {HERO_SLIDES[heroIdx].titleMiddle}
                <br />
                <span className="grad">{HERO_SLIDES[heroIdx].highlight}</span>
              </h1>
              <p className="hero-sub">{HERO_SLIDES[heroIdx].description}</p>
              {/* <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">Get a Free Quote <ArrowRight size={16} /></a>
              <a href="#process" className="btn btn-ghost">View Process</a>
              <a href="#contact" className="btn btn-ghost">Talk to Our Team</a>
            </div> */}
              <div className="hero-stats">
                {HERO_STATS.map((s) => (
                  <div className="hero-stat" key={s.label}>
                    <div className="hero-stat-top">
                      <span className="hero-stat-icon">
                        <s.icon size={17} />
                      </span>
                      <span className="hero-stat-code">{s.code}</span>
                    </div>
                    <div className="hero-stat-content">
                      <Counter value={s.value} suffix={s.suffix} />
                      <span className="hs-label">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="hero-side">
            <div className="hero-side-stack">
              <div className="hero-side-card">
                <div className="hero-side-top">
                  <span>{HERO_SLIDES[heroIdx].eyebrow}</span>
                  <Gauge size={18} color="#7FE9FF" />
                </div>
                <div className="hero-side-value">{HERO_SLIDES[heroIdx].sideValue}</div>
                <div className="hero-side-title">{HERO_SLIDES[heroIdx].sideTitle}</div>
                <p className="hero-side-text">{HERO_SLIDES[heroIdx].sideText}</p>
              </div>

              <div className="hero-side-mini">
                <div>
                  <strong>Flow Rate</strong>
                  <span>1,200 m3/day</span>
                </div>
                <div>
                  <strong>Output</strong>
                  <span>Tertiary polished reuse water</span>
                </div>
                <div>
                  <strong>Delivery</strong>
                  <span>Design, fabrication, installation and O&amp;M</span>
                </div>
              </div>

              <div className="hero-controls">
                <div className="hero-progress">
                  <button type="button" aria-label="Previous slide" onClick={prevHero}>
                    <ChevronLeft size={18} />
                  </button>
                  <button type="button" aria-label="Next slide" onClick={nextHero}>
                    <ChevronRight size={18} />
                  </button>
                </div>
                <div className="hero-dots">
                  {HERO_SLIDES.map((slide, index) => (
                    <span key={slide.eyebrow} className={`hero-dot ${index === heroIdx ? "active" : ""}`} />
                  ))}
                </div>
                <div className="hero-slide-label">
                  Slide {String(heroIdx + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </section>

        <section id="treatment" className="treatment-showcase">
          {/* <span className="hero-watermark">H₂O</span> */}
          <div className="blob hero-glow-1" />
          <div className="blob hero-glow-2" />
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="bubble"
              style={{
                width: 6 + (i % 4) * 5,
                height: 6 + (i % 4) * 5,
                left: `${8 + i * 9}%`,
                bottom: "-40px",
                animationDuration: `${7 + (i % 5)}s`,
                animationDelay: `${i * 0.9}s`,
              }}
            />
          ))}


          <div className="container hero-grid">
            <Reveal>
              <div className="eyebrow-row">
                <span className="gauge-tick" />
                <span className="eyebrow">Integrated Water Engineering</span>
              </div>
              <h1 className="hero-title manrope-font">
                Precision-engineered water systems built to{" "}
                <span className="grad">perform for decades</span>
              </h1>
              <p className="hero-sub">
                We design, fabricate, install and operate water and wastewater
                treatment plants for industrial, commercial and municipal
                clients, turnkey, from first drawing to daily discharge report.
              </p>
              <div
                className="treatment-features"
                aria-label="Our turnkey capabilities"
              >
                <div className="treatment-feature">
                  <span className="treatment-feature-icon">
                    <Ruler size={19} />
                  </span>
                  <div>
                    <strong>Design &amp; Engineering</strong>
                    <small>Process drawings and plant planning</small>
                  </div>
                </div>
                <div className="treatment-feature">
                  <span className="treatment-feature-icon">
                    <Factory size={19} />
                  </span>
                  <div>
                    <strong>Plant Fabrication</strong>
                    <small>Quality-controlled system assembly</small>
                  </div>
                </div>
                <div className="treatment-feature">
                  <span className="treatment-feature-icon">
                    <Wrench size={19} />
                  </span>
                  <div>
                    <strong>Install &amp; Commission</strong>
                    <small>Complete on-site project delivery</small>
                  </div>
                </div>
                <div className="treatment-feature">
                  <span className="treatment-feature-icon">
                    <Gauge size={19} />
                  </span>
                  <div>
                    <strong>Operate &amp; Monitor</strong>
                    <small>Daily compliance and performance</small>
                  </div>
                </div>
              </div>
              <div className="hero-ctas">
                <a href="#contact" className="btn btn-primary">
                  Get a Quote <ArrowRight size={16} />
                </a>
                <a href="#services" className="btn btn-ghost">
                  Explore Our Work
                </a>
              </div>
              {/* <div className="hero-stats">
              {HERO_STATS.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <Counter value={s.value} suffix={s.suffix} />
                  <span className="hs-label">{s.label}</span>
                </div>
              ))}
            </div> */}
            </Reveal>

            <Reveal delay={150} className="hero-art">
              <div className="hero-art-blob" />
              <div className="plant-panel">
                <svg
                  className="plant-svg"
                  viewBox="0 0 520 420"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="50"
                    y="220"
                    width="120"
                    height="150"
                    rx="10"
                    fill="#ffffff"
                    stroke="#008CFF"
                    strokeWidth="2"
                    className="plant-tank-shimmer"
                  />
                  <rect
                    x="60"
                    y="235"
                    width="100"
                    height="28"
                    rx="4"
                    fill="#00C8FF"
                    opacity="0.3"
                  />
                  <rect
                    x="60"
                    y="273"
                    width="100"
                    height="28"
                    rx="4"
                    fill="#00C8FF"
                    opacity="0.18"
                  />
                  <rect
                    x="220"
                    y="160"
                    width="150"
                    height="210"
                    rx="12"
                    fill="#ffffff"
                    stroke="#052C65"
                    strokeWidth="2"
                    className="plant-tank-shimmer"
                  />
                  <circle
                    cx="295"
                    cy="220"
                    r="34"
                    fill="#eaf7ff"
                    stroke="#00C8FF"
                    strokeWidth="2"
                  />
                  <circle
                    cx="295"
                    cy="220"
                    r="34"
                    fill="none"
                    stroke="#008CFF"
                    strokeWidth="2"
                    strokeDasharray="4 6"
                    className="plant-flow"
                  />
                  <rect
                    x="400"
                    y="250"
                    width="70"
                    height="120"
                    rx="10"
                    fill="#ffffff"
                    stroke="#008CFF"
                    strokeWidth="2"
                  />
                  <line
                    x1="170"
                    y1="280"
                    x2="220"
                    y2="280"
                    stroke="#008CFF"
                    strokeWidth="4"
                    className="plant-flow"
                  />
                  <line
                    x1="370"
                    y1="310"
                    x2="400"
                    y2="310"
                    stroke="#008CFF"
                    strokeWidth="4"
                    className="plant-flow"
                  />
                  <line
                    x1="110"
                    y1="220"
                    x2="110"
                    y2="100"
                    stroke="#052C65"
                    strokeWidth="3"
                  />
                  <line
                    x1="110"
                    y1="100"
                    x2="220"
                    y2="100"
                    stroke="#052C65"
                    strokeWidth="3"
                    strokeDasharray="6 8"
                    className="plant-flow"
                  />
                  <circle
                    cx="110"
                    cy="100"
                    r="6"
                    fill="#00D2FF"
                    stroke="#052C65"
                    strokeWidth="2"
                  />
                  <circle
                    cx="220"
                    cy="100"
                    r="6"
                    fill="#00D2FF"
                    stroke="#052C65"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="floating-card fc-1">
                <div className="fc-label">Flow Rate</div>
                <div className="fc-value">
                  <Gauge size={16} color="#008CFF" /> 1,200 m³/day
                </div>
              </div>
              <div className="floating-card fc-2">
                <div className="fc-label">Recovery Efficiency</div>
                <div className="fc-value">
                  <CheckCircle2 size={16} color="#00B894" /> 99.2%
                </div>
              </div>
              <div className="floating-card fc-3">
                <div className="fc-label">Plant Status</div>
                <div className="fc-value">
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#00B894",
                      display: "inline-block",
                    }}
                  />{" "}
                  Online
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="flow-rule" />

        {/* ================= OVERVIEW ================= */}
        {/* <section id="about" className="section overview">
        <div className="container overview-grid">
          <Reveal className="overview-art">
            <div className="overview-shape" />
            <div className="overview-panel">
              <svg viewBox="0 0 500 380" width="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="500" height="380" fill="#eaf7ff" />
                <rect x="40" y="200" width="90" height="130" rx="8" fill="#ffffff" stroke="#008CFF" strokeWidth="2" />
                <rect x="150" y="150" width="110" height="180" rx="10" fill="#ffffff" stroke="#052C65" strokeWidth="2" />
                <circle cx="205" cy="210" r="26" fill="#00C8FF" opacity="0.25" stroke="#008CFF" strokeWidth="2" />
                <rect x="290" y="230" width="80" height="100" rx="8" fill="#ffffff" stroke="#008CFF" strokeWidth="2" />
                <rect x="400" y="180" width="60" height="150" rx="8" fill="#ffffff" stroke="#052C65" strokeWidth="2" />
                <line x1="130" y1="260" x2="150" y2="260" stroke="#008CFF" strokeWidth="4" />
                <line x1="260" y1="270" x2="290" y2="270" stroke="#008CFF" strokeWidth="4" />
                <line x1="370" y1="280" x2="400" y2="280" stroke="#008CFF" strokeWidth="4" />
              </svg>
            </div>
            <div className="experience-badge">
              <div className="eb-num">360°</div>
              <div className="eb-label">Complete water &amp; wastewater capabilities</div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="eyebrow-row"><span className="gauge-tick" /><span className="eyebrow">Company Overview</span></div>
            <h2 className="section-title" style={{maxWidth:560}}>
              A full-service engineering partner for water, not just a contractor
            </h2>
            <p className="section-sub" style={{maxWidth:520}}>
              We are a leading provider of water and wastewater treatment solutions,
              delivering innovative, reliable and sustainable systems for industrial,
              commercial, institutional and municipal applications. AQUEN brings design,
              manufacturing, installation, commissioning, retrofitting, operation and
              maintenance together to deliver complete treatment solutions.
            </p>
            <div className="cap-grid">
              {CAPABILITIES.map((c) => <div className="cap-chip" key={c.label}><c.icon size={18} /> {c.label}</div>)}
            </div>
            <div className="overview-counters">
              <div><Counter value={6} suffix="" /><span className="oc-label">Core service groups</span></div>
              <div><Counter value={11} suffix="" /><span className="oc-label">Industries served</span></div>
              <div><Counter value={3} suffix="" /><span className="oc-label">Production disciplines</span></div>
            </div>
          </Reveal>
        </div>
      </section> */}

        {/* ================= SERVICES ================= */}
        <section id="services" className="services-pro">
          <div className="container">
            <Reveal className="svc-pro-head">
              <div>
                <div className="svc-pro-kicker">What we build</div>
                <h2 className="manrope-font">
                  Services engineered <span>end to end.</span>
                </h2>
              </div>
              <p>
                One accountable engineering team for the complete
                water-treatment lifecycle—from the first process drawing to
                commissioning, compliance and long-term plant support.
              </p>
            </Reveal>
            <Reveal>
              <div
                className="svc-pro-tabs"
                role="tablist"
                aria-label="Service categories"
              >
                {SERVICES.map((service, index) => (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={serviceIdx === index}
                    className={`svc-pro-tab ${serviceIdx === index ? "active" : ""}`}
                    onClick={() => setServiceIdx(index)}
                    key={service.title}
                  >
                    <service.icon size={16} /> {service.title}
                  </button>
                ))}
              </div>
              <div className="svc-pro-card" key={SERVICES[serviceIdx].title}>
                <div className="svc-pro-copy">
                  <div className="svc-pro-top">
                    <div className="svc-pro-icon">
                      {React.createElement(SERVICES[serviceIdx].icon, {
                        size: 28,
                      })}
                    </div>
                    <span className="svc-pro-count">
                      <strong>0{serviceIdx + 1}</strong> / 0{SERVICES.length}
                    </span>
                  </div>
                  <h3>{SERVICES[serviceIdx].title}</h3>
                  <p>{SERVICES[serviceIdx].desc}</p>
                  <div className="svc-pro-list">
                    {SERVICES[serviceIdx].items.map((item) => (
                      <div className="svc-pro-item" key={item}>
                        <CheckCircle2 size={14} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="svc-pro-footer">
                    <a className="svc-pro-link" href="#contact">
                      Discuss this solution <ArrowUpRight size={15} />
                    </a>
                    <div className="svc-pro-arrows">
                      <button
                        type="button"
                        className="svc-pro-arrow"
                        aria-label="Previous service"
                        onClick={() =>
                          setServiceIdx(
                            (serviceIdx - 1 + SERVICES.length) %
                              SERVICES.length,
                          )
                        }
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        className="svc-pro-arrow"
                        aria-label="Next service"
                        onClick={() =>
                          setServiceIdx((serviceIdx + 1) % SERVICES.length)
                        }
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="svc-pro-visual">
                  <img
                    src={SERVICES[serviceIdx].image}
                    alt={`${SERVICES[serviceIdx].title} system`}
                  />
                  <div className="svc-pro-caption">
                    <div>
                      <strong>Turnkey treatment infrastructure</strong>
                      <small>
                        Designed · Fabricated · Commissioned · Supported
                      </small>
                    </div>
                    <span className="svc-live">
                      <i /> PROJECT READY
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="water-process">
          <div className="container">
            <Reveal className="water-process-head">
              <div>
                <div className="water-process-kicker">Process Overview</div>
                <h2>
                  How Water Treatment <span>Works</span>
                </h2>
              </div>
              <p>
                Aquen engineers every step, from raw water intake to clean,
                reusable output.
              </p>
            </Reveal>
            <div className="water-flow">
              <div className="water-flow-line" aria-hidden="true" />
              <div className="water-flow-grid">
                {WATER_TREATMENT_PROCESS.map((stage, index) => (
                  <Reveal
                    key={stage.title}
                    delay={index * 100}
                    className="water-stage"
                  >
                    <span className="water-stage-number">0{index + 1}</span>
                    <div className="water-stage-node">
                      <stage.icon size={34} />
                    </div>
                    <div className="water-stage-card">
                      <div className="water-card-head">
                        <span className="water-card-label">
                          <i /> Process module
                        </span>
                        <span className="water-card-code">WT-0{index + 1}</span>
                      </div>
                      <div className="water-card-body">
                        <h3>{stage.title}</h3>
                        <div className="water-card-data">
                          {stage.lines.map((line) => (
                            <div className="water-card-row" key={line}>
                              <span>{line}</span>
                              <ArrowRight size={12} />
                            </div>
                          ))}
                        </div>
                      </div>
                      <span className="water-card-meter" aria-hidden="true" />
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="water-quality-pill">
                <i /> Treatment train complete · Output quality verified
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="why-pro">
          <div className="container">
            <Reveal className="why-pro-head">
              <div>
                <div className="why-pro-kicker">Why Clients Choose Us</div>
                <h2>
                  Reliability isn&apos;t a claim.
                  <br />
                  <span>It&apos;s our track record.</span>
                </h2>
              </div>
              <div>
                <p>
                  From process design to after-sales support, every decision is
                  made around one outcome: a treatment plant engineered for
                  reliable, sustainable operation.
                </p>
                <div className="why-proof-row">
                  <div>
                    <strong>6</strong>
                    <span>Service groups</span>
                  </div>
                  <div>
                    <strong>11</strong>
                    <span>Industries served</span>
                  </div>
                  <div>
                    <strong>3</strong>
                    <span>Production disciplines</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="why-pro-grid">
              {WHY_US.map((w, i) => (
                <Reveal key={w.title} delay={i * 60} className="why-pro-card">
                  <span className="why-pro-scan" aria-hidden="true" />
                  <div className="why-pro-top">
                    <div className="why-pro-icon">
                      <w.icon size={24} />
                    </div>
                    <span className="why-pro-index">
                      PROOF {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MISSION / VISION / VALUES ================= */}
        {/* <section className="section mvv-bg">
        <div className="container">
          <SectionHead eyebrow="What Drives Us" title="Mission, vision and values" center />
          <div className="mvv-grid">
            {MVV.map((m, i) => (
              <Reveal key={m.title} delay={i * 100} className="mvv-card">
                <div className="mvv-icon"><m.icon size={26} /></div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

        {/* ================= INDUSTRIES ================= */}
        {/* <section id="industries" className="industries-pro">
        <div className="industries-network-line" aria-hidden="true" />
        <div className="container">
          <Reveal className="industries-pro-head">
            <div><div className="industries-pro-kicker">Who We Serve</div><h2>Industries running on <span>our systems.</span></h2></div>
            <div><p>Different operations create different water challenges. We engineer every treatment train around the sector, discharge profile and performance standard it must serve.</p><div className="industries-proof"><span><CheckCircle2 size={14}/> 11 industry segments</span><span><CheckCircle2 size={14}/> Sector-specific engineering</span></div></div>
          </Reveal>
          <div className="industries-pro-grid">
            {INDUSTRIES.slice(0, 6).map((ind, i) => (
              <Reveal key={ind.label} delay={i * 45} className="industry-pro-card">
                <div className="industry-pro-top"><div className="industry-pro-icon"><ind.icon size={24} /></div><span className="industry-pro-code">SECTOR {String(i + 1).padStart(2,"0")}</span></div>
                <h3>{ind.label}</h3>
                <p>{ind.desc}</p>
                <a href="#contact" className="industry-pro-link" aria-label={`Discuss ${ind.label} solutions`}><ArrowUpRight size={14}/></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

        {/* ================= INFRASTRUCTURE ================= */}

        {/* ================= PRODUCTION ================= */}
        {/* <section className="production-lab">
        <div className="production-energy" aria-hidden="true" />
        <div className="container">
          <Reveal className="production-lab-head">
            <div>
              <div className="production-lab-kicker">Production Capability</div>
              <h2>Five disciplines.<br /><span>One production floor.</span></h2>
            </div>
            <div>
              <p>Engineering, fabrication and controls work side by side—giving every system tighter quality control, faster coordination and complete accountability.</p>
              <div className="production-lab-proof"><span><CheckCircle2 size={15}/> In-house quality control</span><span><CheckCircle2 size={15}/> Factory tested systems</span></div>
            </div>
          </Reveal>
          <div className="production-lab-grid">
            {PRODUCTION.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="production-lab-card">
                <div className="production-lab-num"><span>DISCIPLINE 0{i + 1}</span><i /></div>
                <div className="production-lab-icon"><p.icon size={28} /></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

        {/* ================= PROCESS ================= */}
        {/* <section id="process" className="section process-bg">
        <div className="container" style={{maxWidth: 780}}>
          <SectionHead eyebrow="How A Project Runs" title="Seven stages, one accountable team" center />
          <div className="process-list">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="process-row">
                <div className="p-line" />
                <div className="process-num"><p.icon size={26} /></div>
                <div className="process-body">
                  <div className="process-index">STAGE {String(i + 1).padStart(2, "0")}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

        {/* ================= STATISTICS ================= */}
        {/* <section className="section stats-band">
        <div className="container stats-grid">
          {STATISTICS.map((s) => (
            <div className="stat-item" key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section> */}

        {/* ================= TESTIMONIALS ================= */}
        {/* <section className="section">
        <div className="container">
          <SectionHead eyebrow="Client Voices" title="Plants that keep our clients talking" center />
          <div className="testimonial-wrap">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(TESTIMONIALS[testimonialIdx].rating)].map((_, i) => <Star key={i} size={18} fill="#f5a623" stroke="none" />)}
              </div>
              <p className="testimonial-quote">&ldquo;{TESTIMONIALS[testimonialIdx].quote}&rdquo;</p>
              <div className="testimonial-name">{TESTIMONIALS[testimonialIdx].name}</div>
              <div className="testimonial-role">{TESTIMONIALS[testimonialIdx].role}</div>
            </div>
            <div className="testimonial-nav">
              <button className="t-nav-btn" onClick={prevTestimonial} aria-label="Previous"><ChevronLeft size={20} /></button>
              <div className="t-dots">
                {TESTIMONIALS.map((_, i) => <span key={i} className={`t-dot ${i === testimonialIdx ? "active" : ""}`} onClick={() => setTestimonialIdx(i)} />)}
              </div>
              <button className="t-nav-btn" onClick={nextTestimonial} aria-label="Next"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      </section> */}

        {/* ================= CONTACT CTA ================= */}
        {/* <section id="contact" className="section contact-cta">
        <div className="container cta-inner">
          <Reveal>
            <div className="eyebrow-row" style={{justifyContent:"center"}}><span className="gauge-tick" /><span className="eyebrow">Let's Talk Water</span></div>
            <h2 className="section-title">Tell us what your plant needs to do</h2>
            <p className="section-sub">
              Send us your flow rate, source water and compliance target — we'll come back
              with a system, not just a quote.
            </p>
            <div className="cta-contacts">
              <div className="cta-contact-item">
                <div className="cci-icon"><Phone size={20} /></div>
                <div><div className="cci-label">Project enquiries</div><div className="cci-value">Connect through our enquiry form</div></div>
              </div>
              <div className="cta-contact-item">
                <div className="cci-icon"><Mail size={20} /></div>
                <div><div className="cci-label">Our team</div><div className="cci-value">Water &amp; wastewater specialists</div></div>
              </div>
              <div className="cta-contact-item">
                <div className="cci-icon"><MapPin size={20} /></div>
                <div><div className="cci-label">Visit us</div><div className="cci-value">Office No. 218, Lakshmi Plaza, Kasarwadi, Pune 411012</div></div>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">Get a Quote <ArrowRight size={16} /></a>
              <a href="#contact" className="btn btn-ghost">Send Enquiry</a>
            </div>
          </Reveal>
        </div>
      </section> */}

        {/* ================= FOOTER ================= */}
        {/* <footer className="footer footer-ocean">
        <div className="footer-waves" aria-hidden="true"><span className="footer-wave footer-wave-one" /><span className="footer-wave footer-wave-two" /></div>
        <div className="container footer-cta">
          <div><div className="footer-cta-label">Have a water challenge?</div><h3>Let&apos;s engineer the right treatment solution.</h3></div>
        </div>
        <div className="container footer-grid">
          <div className="footer-brand">
            <h5>About Company</h5>
            <p>AQUEN delivers innovative, reliable and sustainable water and wastewater treatment solutions for industrial, commercial, institutional and municipal applications.</p>
            <div className="footer-contact-mini">
              <span><MapPin size={14} /> Office No. 218, Lakshmi Plaza, Kasarwadi, Pune 411012</span>
              <span><Factory size={14} /> Design, fabrication, installation and service</span>
            </div>
           
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>{NAV_LINKS.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>{SERVICES.slice(0, 5).map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}</ul>
          </div>
          <div>
            <h5>Stay Updated</h5>
            <p className="newsletter-copy">Plant commissioning notes and industry updates—occasionally, never spam.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button aria-label="Subscribe"><ArrowUpRight size={18} /></button>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} AQUEN. All rights reserved. Built by NetCom Business Solutions.</span>
        </div>
      </footer> */}
      </div>
      <Footer />
    </>
  );
}
