"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    Beaker, Building2, Droplet, Factory, FlaskConical, GraduationCap, HeartPulse, Hotel, Landmark, Lightbulb, LucideIcon, Milk,
  Recycle, ShieldCheck, Shirt, Target, UtensilsCrossed, Wrench, Layers, RefreshCw, Ruler, Zap, Filter, CheckCircle2, ChevronLeft, 
  ChevronRight, PenTool, Gauge, Box, Pill, ZoomIn, ClipboardCheck, ChevronDown
} from "lucide-react";
import Header from "../../../layouts/header";
import Footer from "../../../layouts/footer";
import { ReactNode } from "react";
import "./clarifier-system.css";
import type { JSX } from "react";





type Stage = {
  num: string;
  title: string;
  text: string;
  removal: string;
  icon: JSX.Element;
};
 
const STAGES: Stage[] = [
  {
    num: "01",
    title: "Screening & Collection",
    text: "Raw sewage passes through bar screening to remove rags, plastics, floating matter, and coarse solids before collection and equalization.",
    removal: "0% removed",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M9 8V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 8V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M23 8V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 8V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12.5" cy="14" r="2.2" fill="currentColor" />
        <circle cx="26" cy="20" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Equalization & Aeration",
    text: "Equalization balances flow and organic load, while aeration supplies oxygen for microbial degradation of BOD and COD.",
    removal: "45% removed",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="7" y="10" width="26" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="15" cy="24" r="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="21" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="27" cy="23" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="19" cy="27" r="1.3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Clarification / Membrane Separation",
    text: "Biological solids are separated through clarification, tube settling, or membrane filtration while return sludge maintains stable biomass.",
    removal: "88% removed",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 12L20 6L32 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 12V18L20 24L32 18V12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 20V26L20 32L32 26V20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Tertiary Treatment & Disinfection",
    text: "Tertiary filtration and disinfection polish treated water for flushing, gardening, cooling tower make-up, washing, or compliant discharge.",
    removal: "98% removed",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M20 6C20 6 11 18 11 24.5C11 29.7 15.03 34 20 34C24.97 34 29 29.7 29 24.5C29 18 20 6 20 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M30 10L32 8M32 14H35M30 19L32 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];





type Gauge = {
  key: string;
  label: string;
  unit: string;
  idleAngle: number; // resting needle angle in degrees, CSS custom property
};
 
const GAUGES: Gauge[] = [
  { key: "flow", label: "Flow Rate", unit: "m³ / hr", idleAngle: -58 },
  { key: "quality", label: "Water Quality", unit: "NTU", idleAngle: -58 },
  { key: "objective", label: "Treatment Objective", unit: "target", idleAngle: -58 },
];






const FQ_ITEMS = [
  {
    q: "What is the purpose of a clarifier system?",
    a: "A clarifier system removes suspended solids from water, settles sludge, and improves the quality of clarified water for further treatment, filtration, reuse, or discharge.",
  },
  {
    q: "Where is clarifier equipment used?",
    a: "It is commonly used in water treatment plants, wastewater treatment systems, industrial process water applications, raw water treatment, and municipal clarification stages.",
  },
  {
    q: "What types of clarifier systems do you offer?",
    a: "We offer HRSCC, Tube Settler, Clariflocculator, and Lamella Settler based clarifier systems based on project capacity, solids load, and footprint requirements.",
  },
  {
    q: "Can the clarifier be customized?",
    a: "Yes. Systems can be configured according to flow rate, water quality, sludge characteristics, space availability, and overall plant requirement.",
  },
  {
    q: "How do I select the right clarifier system?",
    a: "The right selection depends on influent quality, suspended solids concentration, flow variation, retention time, civil space, and downstream treatment objectives. Our team evaluates these inputs before recommending a suitable system.",
  },
  {
    q: "Is a clarifier system suitable for industrial wastewater treatment?",
    a: "Yes. A properly engineered industrial clarifier helps improve suspended solids removal, sludge thickening, and treatment stability across multiple wastewater treatment applications.",
  },
];





type SeoCard = {
  icon: LucideIcon;
  title: string;
  text: string;
  points: string[];
  linkPoint?: { prefix: string; links: { label: string; href: string }[]; suffix: string } | null;
};

const SC_CARDS: SeoCard[] = [
  {
    icon: Layers,
    title: "Applications",
    text: "Our clarifier systems are widely used in:",
    points: [
      "Sewage Treatment Plants (STP)",
      "Effluent Treatment Plants (ETP)",
      "Water Treatment Plants (WTP)",
      "Industrial Process Water Treatment",
      "Water Recycling & Reuse Systems",
      "Municipal Water & Wastewater Projects"
    ],
    // linkPoint: {
    //   prefix: "Integration with ",
    //   links: [
    //     { label: "ETP", href: "effluent-treatment-plant/index.html" },
    //     { label: "STP", href: "sewage-treatment-plant/index.html" },
    //     { label: "WTP", href: "water-treatment-plant/index.html" },
    //   ],
    //   suffix: " systems",
    // },
  },
  {
    icon: ClipboardCheck,
    title: "Our Engineering Approach",
    text: "Every Aquen clarifier system is designed based on detailed process evaluation to ensure maximum treatment efficiency and long-term performance.",
    points: [
      "Treatment capacity and flow rate analysis",
      "Water quality and suspended solids assessment",
      "Sludge collection and removal optimization",
      "Site layout and space optimization",
      "Compliance with industry standards and project requirements"
    ],
    linkPoint: null,
  },
];



const GL_ITEMS = [
  {
    image: "/installation-img1.png",
    alt: "Tube Settler Clarifier System Installation",
    caption: "Tube Settler Installation",
    size: "large",
  },
  {
    image: "/installation-img2.png",
    alt: "Clariflocculator Clarifier System Installation",
    caption: "Clariflocculator Installation",
    size: "small",
  },
  {
    image: "/installation-img3.png",
    alt: "Clarifier System Installation",
    caption: "Clarifier System Installation",
    size: "small",
  },
];




const AP_ITEMS = [
  { icon: Droplet, label: "Water Treatment Plants" },
  { icon: Recycle, label: "Wastewater Treatment Plants" },
  { icon: Shirt, label: "Textile Industry" },
  { icon: FlaskConical, label: "Chemical Industry" },
  { icon: UtensilsCrossed, label: "Food & Beverage" },
  { icon: Pill, label: "Pharmaceutical Units" },
  { icon: Landmark, label: "Municipal Utilities" },
  { icon: RefreshCw, label: "Process Water Recovery" },
];


const why = [
  "25+ Years of Industry Experience",
  "Complete Turnkey Solutions",
  "In-house Design & Engineering",
  "Quality Manufacturing",
  "Skilled Installation Team",
  "Prompt After-Sales Service",
  "Competitive Pricing",
  "Timely Project Execution",
  "Commitment to Environmental Sustainability",
];



type Callout = {
  key: string;
  index: string;
  title: string;
  copy: string;
  ntuTarget: number;
  ntuPrefix?: string; // e.g. "<" for the final stage
  marker: { x: number; y: number };
  leaderPath: string;
  box: { x: number; y: number; width: number; height: number };
  align: "top" | "bottom";
};
 
const CALLOUTS: Callout[] = [
  {
    key: "inlet",
    index: "01",
    title: "Raw Water Inlet",
    copy: "Influent enters at the head of the basin, carrying suspended solids at peak turbidity.",
    ntuTarget: 520,
    marker: { x: 150, y: 192 },
    leaderPath: "M150,192 L150,150 L135,110",
    box: { x: 10, y: 15, width: 260, height: 100 },
    align: "top",
  },
  {
    key: "floc",
    index: "02",
    title: "Coagulation & Flocculation",
    copy: "Coagulant dosing binds fine colloidal particles into larger, settleable flocs.",
    ntuTarget: 165,
    marker: { x: 400, y: 268 },
    leaderPath: "M400,268 L520,180 L600,110",
    box: { x: 475, y: 15, width: 260, height: 100 },
    align: "top",
  },
  {
    key: "weir",
    index: "03",
    title: "Clarified Water Outlet",
    copy: "Treated effluent overflows the weir clear and stable, ready for reuse or polishing.",
    ntuTarget: 4,
    ntuPrefix: "<",
    marker: { x: 985, y: 168 },
    leaderPath: "M985,168 L1020,140 L1065,110",
    box: { x: 940, y: 15, width: 250, height: 100 },
    align: "top",
  },
  {
    key: "hopper",
    index: "04",
    title: "Sludge Draw-off",
    copy: "Settled solids collect in the hopper floor and are drawn off for disposal or dewatering.",
    ntuTarget: 38,
    marker: { x: 600, y: 420 },
    leaderPath: "M600,420 L600,465 L600,505",
    box: { x: 475, y: 505, width: 250, height: 100 },
    align: "bottom",
  },
];
 


interface Pillar {
  icon: LucideIcon;
  title: string;
  text: string;
}

const pillars: Pillar[] = [
  {
    icon: Target,
    title: "Mission",
    text: "To deliver reliable, sustainable, and technologically advanced water treatment solutions that help conserve water resources while ensuring complete customer satisfaction.",
  },
  {
    icon: Lightbulb,
    title: "Vision",
    text: "To become one of India’s most trusted solution providers in water and wastewater treatment through innovation, quality, and customer satisfaction.",
  },
  {
    icon: ShieldCheck,
    title: "Values",
    text: "Our values define who we are and guide every project we undertake. We deliver sustainable water treatment solutions with integrity, innovation, and excellence.",
  },
];
const services = [
  {
    icon: Droplet,
    title: "Water Treatment Plants (WTP)",
    items: [
      "Raw Water Treatment Plants",
      "Filtration Systems",
      "Softener Plants",
      "Demineralization (DM) Plants",
      "Reverse Osmosis (RO) Systems",
      "Ultra Filtration (UF) Systems",
    ],
  },
  {
    icon: Recycle,
    title: "Wastewater Treatment Plants",
    items: [
      "Sewage Treatment Plants (STP)",
      "Effluent Treatment Plants (ETP)",
      "Package STP & ETP Systems",
      "Grey Water Recycling Systems",
      "Industrial Wastewater Treatment",
    ],
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance (O&M)",
    items: [
      "Annual Maintenance Contracts (AMC)",
      "Plant Operation",
      "Preventive Maintenance",
      "Chemical Supply",
      "Performance Monitoring",
      "Breakdown Support",
    ],
  },
  {
    icon: Factory,
    title: "Fabrication & Engineering",
    items: [
      "MS & SS Pressure Vessel Fabrication",
      "Storage Tanks",
      "Pressure Filters",
      "Skid-Mounted Systems",
      "Custom Process Equipment",
      "Piping Fabrication & Installation",
    ],
  },
];

const KB_POINTS = [
  {
    icon: PenTool,
    title: "In-house Design",
    text: "Engineered and configured to match hydraulic load, solids profile, and project requirements.",
  },
  {
    icon: Gauge,
    title: "Easy Operation",
    text: "Simple process flow and accessible controls for straightforward daily operation.",
  },
  {
    icon: Box,
    title: "Compact Design",
    text: "Efficient layout for better use of plant space without compromising settling performance.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    text: "Robust build, durable components, and simplified servicing for long operational life.",
  },
  {
    icon: FlaskConical,
    title: "Optimized Dosing",
    text: "Supports effective clarification with optimized coagulant and flocculant dosing.",
  },
  {
    icon: Ruler,
    title: "Custom Capacity",
    text: "Adaptable to different flow rates, influent quality, and water characteristics.",
  },
];

const OV_CHIPS = [
  { icon: Layers, label: "Solid-Liquid Separation" },
  { icon: RefreshCw, label: "Continuous Operation" },
  { icon: Ruler, label: "Compact Footprint" },
  { icon: Wrench, label: "Low Maintenance" },
];
 
const OV_STATS = [
  { value: "24/7", label: "Continuous Operation" },
  { value: "High", label: "Settling Efficiency" },
  { value: "Low", label: "Operator Effort" },
  { value: "Custom", label: "Plant Sizing" },
];

const CB_STEPS = [
  {
    num: "01",
    title: "Drive Unit & Motor",
    text: "Centrally mounted gear-motor assembly powers the rotating bridge at a controlled, continuous speed.",
  },
  {
    num: "02",
    title: "Central Feed Inlet",
    text: "Influent enters through a central feed well, distributing flow evenly across the basin diameter.",
  },
  {
    num: "03",
    title: "Rotating Rake Arm",
    text: "The travelling bridge sweeps settled solids inward and downward toward the collection cone.",
  },
  {
    num: "04",
    title: "Effluent Outlet Weir",
    text: "Clarified water rises and exits over a level, adjustable weir at the basin perimeter.",
  },
  {
    num: "05",
    title: "Sludge Discharge Cone",
    text: "Settled solids collect at the hopper base and are drawn off for downstream handling.",
  },
];
 
const CB_STATS = [
  { value: "99.2%", label: "Solids Removal Efficiency" },
  { value: "1,200 m³/day", label: "Treatment Capacity" },
  { value: "24/7", label: "Continuous Operation" },
];

const industries: {
  icon: LucideIcon;
  label: string;
}[] = [
  { icon: Beaker, label: "Pharmaceuticals" },
  { icon: HeartPulse, label: "Hospitals" },
  { icon: Hotel, label: "Hotels & Resorts" },
  { icon: UtensilsCrossed, label: "Food & Beverage" },
  { icon: Milk, label: "Dairy" },
  { icon: FlaskConical, label: "Chemical Industries" },
  { icon: Shirt, label: "Textile Industries" },
  { icon: Building2, label: "Commercial Buildings" },
  { icon: Building2, label: "Residential Townships" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Landmark, label: "Government Projects" },
];

const TS_ITEMS = [
  {
    icon: Droplet,
    title: "Clariflocculator / Clarisettler",
    desc: "Combines flocculation and clarification in one system for controlled particle agglomeration, stable clarification, and smooth treatment flow.",
    points: ["Integrated flocculation + settling", "Stable, consistent output", "Suited to variable influent loads"],
    image: "/clarisettler-img.png",
    alt: "Clariflocculator & Clarisettler In Water Treatment",
  },
  {
    icon: Zap,
    title: "HRSCC",
    desc: "High-rate solids contact clarifier for rapid mixing, floc formation, and efficient settling where compact installation and high throughput are required.",
    points: ["High-rate solids contact", "Compact plant footprint", "Fast floc formation cycle"],
    image: "/hrscc.png",
    alt: "HRSCC Clarifier In Water Treatment",
  },
  {
    icon: Filter,
    title: "Tube Settler",
    desc: "Improves clarification with inclined settling media for higher surface loading, better solids separation, and smaller installation footprint.",
    points: ["Inclined tube settling media", "Higher surface loading rate", "Reduced civil footprint"],
    image: "/tube-settler-img.png",
    alt: "Tube Settler Clarifier In Water Treatment",
  },
  {
    icon: Layers,
    title: "Lamella Settler",
    desc: "Compact plate-based clarifier suitable for efficient settling, reduced civil footprint, and dependable performance in limited plant space.",
    points: ["Plate-pack settling design", "Space-efficient installation", "Dependable long-term performance"],
    image: "/lamella-settler-img.png",
    alt: "Lamella Settler Clarifier In Water Treatment",
  },
];

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`aq-reveal ${shown ? "shown" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function animateCount(target: number, duration: number, onTick: (n: number) => void) {
  const start = performance.now();
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  let frame: number;
  const step = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    onTick(Math.round(target * easeOutCubic(t)));
    if (t < 1) frame = requestAnimationFrame(step);
  };
  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
}

export type MasterSection = { type: string; title?: string | null; content: Record<string, unknown>; sortOrder: number; isEnabled: boolean };
export type MasterVisualReference = { src: string; alt: string; width: number; height: number; label: string; title: string };
export type MasterSolutionData = { title: string; excerpt?: string | null; sections: MasterSection[]; visualReferences?: MasterVisualReference[] };
type DynamicItem = { icon?: string; title?: string; label?: string; description?: string; text?: string; image?: string; alt?: string; caption?: string; size?: string; value?: string; number?: string; stepNumber?: string; question?: string; answer?: string; bulletPoints?: string[]; points?: string[] };
const ICONS: Record<string, LucideIcon> = { Beaker, Building2, Droplet, Factory, FlaskConical, GraduationCap, HeartPulse, Hotel, Landmark, Lightbulb, Milk, Recycle, ShieldCheck, Shirt, Target, UtensilsCrossed, Wrench, Layers, RefreshCw, Ruler, Zap, Filter, PenTool, Gauge, Box, Pill, ClipboardCheck };
const iconFor = (name?: string) => ICONS[name || ""] || Droplet;
const text = (value: unknown, fallback: string) => typeof value === "string" && value ? value : fallback;
const list = (value: unknown):DynamicItem[] => Array.isArray(value) ? value.map(item=>typeof item==="string"?{title:item}:item as DynamicItem) : [];
 
export default function ClarifierMasterTemplate({ data }: { data?: MasterSolutionData }) {
  const byType = new Map((data?.sections || []).map(section => [section.type, section]));
  const section = (type: string) => byType.get(type);
  const content = (type: string) => section(type)?.content || {};
  const visible = (type: string) => !section(type) || section(type)?.isEnabled !== false;
  const order = (type: string, fallback: number) => section(type)?.sortOrder ?? fallback;
  const hero = content("HERO"), blueprint = content("CUSTOM"), overview = content("OVERVIEW"), systems = content("FEATURES"), benefits = content("BENEFITS"), process = content("PROCESS"), applications = content("APPLICATIONS"), gallery = content("GALLERY"), seo = content("DESCRIPTION"), faq = content("FAQ"), cta = content("CTA");
  const dynamicSystems = list(systems.items).map(x => ({ icon: iconFor(x.icon), title: x.title || "System", desc: x.description || "", image: x.image || "/clarifier-img.png", alt: x.alt || x.title || "", points: x.bulletPoints || x.points || [] }));
  const systemItems = dynamicSystems.length ? dynamicSystems : TS_ITEMS;
  const benefitItems = list(benefits.items).map(x => ({ icon: iconFor(x.icon), title: x.title || "Benefit", text: x.description || x.text || "" }));
  const blueprintSteps = list(blueprint.items).map((x,i) => ({ num: x.stepNumber || x.number || `0${i+1}`, title: x.title || "Process step", text: x.description || x.text || "" }));
  const processItems = list(process.items).map((x,i) => { const Icon=iconFor(x.icon); return { num:x.stepNumber || x.number || `0${i+1}`,title:x.title || "Stage",text:x.description || x.text || "",removal:x.label || "",icon:<Icon/> } });
  const applicationItems = list(applications.items).map(x => ({ icon: iconFor(x.icon), label: x.title || x.label || "Application" }));
  const galleryItems = list(gallery.items).map(x => ({ image: x.image || "/installation-img1.png", alt: x.alt || x.caption || "Project image", caption: x.caption || "Project", size: x.size || "small" }));
  const faqItems = list(faq.items).map(x => ({ q: x.question || x.title || "Question", a: x.answer || x.description || "" }));
  const overviewChips = list(overview.chips).map(x=>({icon:iconFor(x.icon),label:x.label||x.title||"Feature"}));
  const overviewStatistics = list(overview.statistics).map(x=>({value:x.value||"—",label:x.label||x.title||"Statistic"}));
  const seoCards = list(seo.items).map(x=>({icon:iconFor(x.icon),title:x.title||"Engineering",text:x.description||x.text||"",points:x.bulletPoints||x.points||[],linkPoint:null}));
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [ntuValues, setNtuValues] = useState<number[]>(CALLOUTS.map(() => 0));




    const [active, setActive] = useState(0);
  const item = systemItems[active] || systemItems[0];
 
  const goPrev = () => setActive((i) => (i - 1 + systemItems.length) % systemItems.length);
  const goNext = () => setActive((i) => (i + 1) % systemItems.length);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = data?.title ? `${data.title} | AQUEN Fluid` : "AQUEN | Water & Wastewater Treatment Solutions";
  }, [data?.title]);


 


  const [openIndex, setOpenIndex] = useState(0);
 
const toggle = (index: number) => {
  setOpenIndex(openIndex === index ? -1 : index);
};






  // NOTE: if you paste this into a page.tsx that already declares
  // `isVisible` for other sections, this name (isCtaVisible) is already
  // unique — no rename needed.
  const [isCtaVisible, setIsCtaVisible] = useState(false);
 
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCtaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
 
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
 




  

  return (
    <div className="aq-about">
      <Header />
<main style={{display:"flex",flexDirection:"column"}}>
  <section id="hero" hidden={!visible("HERO")} style={{order:order("HERO",0)}}>
    <div className="hero-bg" style={hero.backgroundImage?{backgroundImage:`url(${String(hero.backgroundImage)})`}:undefined}/>
    <div className="hero-overlay" />
    <div className="container hero-content">
      <div className="hero-shell">
        <div className="hero-left">
          <div className="hero-inner">
            <div className="hero-badge hero-anim">
              <div className="hero-dot" />
              <span>{text(hero.badge,"WATER & WASTEWATER TREATMENT SOLUTIONS")}</span>
            </div>
            <h1 className="hero-h1 hero-anim"><span className="hero-line-1">{text(hero.title,text(hero.heading,data?.title || "Industrial Clarifier Systems for "))} </span><span className="hero-line-2 hero-gradient">{text(hero.highlight,"Efficient Water Treatment")}</span></h1>
            <p className="hero-sub hero-anim">{text(hero.description,text(hero.body,data?.excerpt || "AQUEN designs and manufactures high-performance treatment systems for industrial, commercial, and municipal applications."))}</p>
            <div className="hero-actions hero-anim">
              <a className="btn btn-quote" href="/contact">Get a Free Quote</a>
              <a className="btn btn-outline-white" href="#process-train">View Process</a>
              <a className="btn btn-blue" href="/contact">Talk to an Expert</a>
            </div>
          </div>
        </div>
        <div className="hero-right" aria-hidden="true" style={hero.rightImage?{backgroundImage:`url(${String(hero.rightImage)})`}:undefined}/>
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
  
    
    {data?.visualReferences?.length ? <section className="aq-visual-reference-section" id="visual-references" style={{order:1}}>
      <div className="aq-visual-reference-container">
        <div className="aq-visual-reference-head">
          <div className="aq-visual-reference-kicker">{data.title.toUpperCase()} VISUALS</div>
          <h2>{data.title} references</h2>
          <p>Reference visuals for {data.title}, presented for project discussion and equipment confirmation.</p>
        </div>
        <div className="aq-visual-reference-grid">
          {data.visualReferences.map((reference) => <figure className="aq-visual-reference-card" key={reference.src}>
            <Image src={reference.src} alt={reference.alt} width={reference.width} height={reference.height} />
            <figcaption><span>{reference.label}</span><strong>{reference.title}</strong></figcaption>
          </figure>)}
        </div>
      </div>
    </section> : null}


    <section className="ov-section" id="about" hidden={!visible("OVERVIEW")} style={{order:order("OVERVIEW",2)}}>
      <div className="ov-container">
        <div className="ov-grid">
          {/* -------- Media -------- */}
          <div className="ov-media">
            <div className="ov-media-frame">
              <img src={text(overview.image,"/clarifier-img.png")} alt={text(overview.imageAlt,data?.title || "Solution overview")} />
            </div>
            <div className="ov-media-badge">
              <span className="ov-media-badge-icon">
                <ShieldCheck size={40} />
              </span>
              <div>
                <strong>{text(overview.badge,"High-Performance Treatment")}</strong>
                <span>{text(overview.badgeDescription,"Engineered for your flow, load and footprint")}</span>
              </div>
            </div>
          </div>
 
          {/* -------- Copy -------- */}
          <div className="ov-copy">
            <div className="ov-kicker">Overview</div>
            <h2 className="ov-title">
              {text(overview.heading,`What Is ${data?.title || "a Clarifier System"}?`)}
            </h2>
            <p className="ov-desc">
              {text(overview.description,data?.excerpt || "AQUEN engineers reliable water and wastewater treatment systems around each project's operating requirements.")}
            </p>
            <p className="ov-desc">
              {text(
                overview.fullDescription,
                "For complete treatment integration, this system can be combined with Effluent Treatment Plant, Sewage Treatment Plant, and Water Treatment Plant solutions.",
              )}
            </p>
 
            <div className="ov-chip-row">
              {(overviewChips.length?overviewChips:OV_CHIPS).map((c) => (
                <span className="ov-chip" key={c.label}>
                  <c.icon size={14} />
                  {c.label}
                </span>
              ))}
            </div>
 
            <div className="ov-highlight-card">
              <span className="ov-highlight-tag">
                {text(overview.highlightTag, "System Highlights")}
              </span>
              <h3>
                {text(
                  overview.highlightTitle,
                  "Designed for high-performance settling, sludge collection, and clarified water recovery",
                )}
              </h3>
              <p>
                {text(
                  overview.highlightDescription,
                  "Our clarifier systems are suitable for industrial wastewater treatment, process water recovery, raw water clarification, and municipal installations where reliable sedimentation, low carryover, and efficient operation are critical. Each system is configured to match flow rate, solids loading, retention requirements, and available installation space.",
                )}
              </p>
              <div className="ov-stats-grid">
                {(overviewStatistics.length?overviewStatistics:OV_STATS).map((s) => (
                  <div className="ov-stat" key={s.label}>
                    <span className="ov-stat-num">{s.value}</span>
                    <span className="ov-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   <section className="ts-section" id="solutions" hidden={!visible("FEATURES")} style={{order:order("FEATURES",3)}}>
      <div className="ts-container">
        <div className="ts-head">
          <div className="ts-kicker">Systems We Offer</div>
          <h2 className="ts-title">{text(systems.heading,`${data?.title || "Treatment"} Systems We Offer`)}</h2>
          <p className="ts-sub">
            Different clarifier configurations designed for varying flow capacities,
            suspended solids characteristics, sludge settling behavior, and plant
            treatment requirements.
          </p>
        </div>
 
        <div className="ts-tabs" role="tablist" aria-label="Clarifier technologies">
          {systemItems.map((t, i) => (
            <button
              type="button"
              role="tab"
              aria-selected={active === i}
              key={t.title}
              className={`ts-tab ${active === i ? "ts-tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              <t.icon size={16} />
              {t.title}
            </button>
          ))}
        </div>
 
        <div className="ts-panel">
          <div className="ts-panel-media">
            <img src={item.image} alt={item.alt} />
            <span className="ts-panel-count">
              0{active + 1} / 0{systemItems.length}
            </span>
          </div>
          <div className="ts-panel-body">
            <div className="ts-panel-icon">
              <item.icon size={24} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <ul className="ts-panel-list">
              {item.points.map((p) => (
                <li key={p}>
                  <CheckCircle2 size={16} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="ts-panel-nav">
              <button type="button" className="ts-nav-btn" aria-label="Previous system" onClick={goPrev}>
                <ChevronLeft size={18} />
              </button>
              <div className="ts-nav-dots">
                {systemItems.map((t, i) => (
                  <span
                    key={t.title}
                    className={`ts-nav-dot ${active === i ? "ts-nav-dot--active" : ""}`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
              <button type="button" className="ts-nav-btn" aria-label="Next system" onClick={goNext}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  
   <section className="kb-section" hidden={!visible("BENEFITS")} style={{order:order("BENEFITS",4)}}>
      <div className="kb-container">
        <div className="kb-intro">
          <div className="kb-intro-copy">
            <div className="kb-kicker">Key Benefits</div>
            <h2 className="kb-title">
              {text(benefits.heading,`${data?.title || "System"} Benefits for Daily Performance`)}
            </h2>
            <p className="kb-sub">
              Our clarifier systems are designed for smooth sludge collection, stable
              clarification, reduced operator intervention, and easy integration into
              industrial and municipal treatment plants.
            </p>
          </div>
        </div>
 
        <div className="kb-grid">
          {(benefitItems.length ? benefitItems : KB_POINTS).map((p) => (
            <div className="kb-card" key={p.title}>
              <div className="kb-card-icon">
                <p.icon size={22} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="process-train" className="pt-section" hidden={!visible("PROCESS")} style={{order:order("PROCESS",5)}}>
      <div className="pt-container">
        <div className="pt-header">
          <span className="pt-badge">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="pt-badge-icon">
              <path
                d="M12 3C12 3 6.5 10 6.5 14.5C6.5 17.8 9 20.5 12 20.5C15 20.5 17.5 17.8 17.5 14.5C17.5 10 12 3 12 3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            Working Process
          </span>
          <h2 className="pt-title">{text(process.heading,`How ${data?.title || "the Treatment System"} Works`)}</h2>
          <p className="pt-sub">
            Four stages, start to finish — from raw influent to water clean
            enough to reuse or discharge.
          </p>
        </div>
 
        <div className="pt-timeline">
          {(processItems.length?processItems:STAGES).map((stage, i) => (
            <div className="pt-item" key={stage.num} style={{ ["--i" as string]: i }}>
              <div className="pt-node">
                <span className="pt-node-icon">{stage.icon}</span>
              </div>
              <div className="pt-card">
                <span className="pt-card-num">{stage.num}</span>
                <h3 className="pt-card-title">{stage.title}</h3>
                <p className="pt-card-text">{stage.text}</p>
                <span className="pt-card-tag">{stage.removal}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  
<section className="ap-section" hidden={!visible("APPLICATIONS")} style={{order:order("APPLICATIONS",6)}}>
      <div className="ap-container">
        <div className="ap-head">
          <div className="ap-kicker">Applications</div>
          <h2 className="ap-title">{text(applications.heading,`${data?.title || "System"} Applications by Industry`)}</h2>
          <p className="ap-sub">
            Suitable for water treatment and wastewater clarification across
            industrial and municipal sectors.
          </p>
        </div>
 
        <div className="ap-grid">
          {(applicationItems.length ? applicationItems : AP_ITEMS).map((item) => (
            <div className="ap-tile" key={item.label}>
              <div className="ap-tile-icon">
                <item.icon size={22} />
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

   <section className="gl-section" id="projects" hidden={!visible("GALLERY")} style={{order:order("GALLERY",7)}}>
      <div className="gl-container">
        <div className="gl-head">
          <div className="gl-kicker">Project Gallery</div>
          <h2 className="gl-title">{text(gallery.heading,`${data?.title || "System"} Installation Views`)}</h2>
          <p className="gl-sub">
            Replace these placeholders with your actual clarifier system project
            photos for the strongest visual impact.
          </p>
        </div>
 
        <div className="gl-grid">
          {(galleryItems.length ? galleryItems : GL_ITEMS).map((item) => (
            <article
              className={`gl-card ${item.size === "large" ? "gl-card--large" : ""}`}
              key={item.image}
            >
              <img src={item.image} alt={item.alt} />
              <div className="gl-card-overlay">
                <span className="gl-card-zoom">
                  <ZoomIn size={18} />
                </span>
                <span className="gl-card-caption">{item.caption}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="sc-section" id="clarifier-seo-content" hidden={!visible("DESCRIPTION")} style={{order:order("DESCRIPTION",8)}}>
      <div className="sc-container">
        <div className="sc-head">
          <div className="sc-kicker">Applications &amp; Selection</div>
          <h2 className="sc-title">
            {text(seo.heading,`Why Choose Our ${data?.title || "Treatment Systems"}?`)}
          </h2>
          <p className="sc-sub">
            Our Industrial Clarifier Systems are engineered to deliver efficient solid-liquid separation, improved water quality, and reliable sludge management for a wide range of water and wastewater treatment applications.
          </p>
        </div>
 
        <div className="sc-grid">
          {(seoCards.length?seoCards:SC_CARDS).map((card) => (
            <div className="sc-card" key={card.title}>
              <div className="sc-card-icon">
                <card.icon size={22} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <ul className="sc-card-list">
                {card.points.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={15} />
                    <span>{point}</span>
                  </li>
                ))}
                {card.linkPoint && (
                  <li>
                    <CheckCircle2 size={15} />
                    <span>
                      {card.linkPoint.prefix}
                      {card.linkPoint.links.map((l, i) => (
                        <span key={l.label}>
                          <a href={l.href} className="sc-link">
                            {l.label}
                          </a>
                          {i < card.linkPoint!.links.length - 1 ? ", " : ""}
                        </span>
                      ))}
                      {card.linkPoint.suffix}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="fq-section" id="faq" hidden={!visible("FAQ")} style={{order:order("FAQ",9)}}>
      <div className="fq-container">
        <div className="fq-head"><div className="fq-kicker">FAQ</div><h2 className="fq-title">{text(faq.heading,`${data?.title || "Solution"} FAQs`)}</h2><p className="fq-sub">{text(faq.description,"Answers to frequently asked questions about this solution.")}</p></div>
        <div className="fq-list">{(faqItems.length?faqItems:FQ_ITEMS).map((entry,i)=>{const isOpen=openIndex===i;return <div className={`fq-item ${isOpen?"fq-item--open":""}`} key={entry.q}><button type="button" className="fq-question" onClick={()=>toggle(i)} aria-expanded={isOpen}><span className="fq-question-num">0{i+1}</span><span className="fq-question-text">{entry.q}</span><span className="fq-question-icon"><ChevronDown size={18}/></span></button><div className="fq-answer"><div className="fq-answer-inner"><p>{entry.a}</p></div></div></div>})}</div>
      </div>
    </section>

    {/* <section ref={sectionRef} id="cta-banner" hidden={!visible("CTA")} style={{order:order("CTA",10)}} className={`cta-panel${isCtaVisible?" is-visible":""}`}>
      <div className="cta-panel__container"><div className="cta-panel__content"><span className="cta-panel__eyebrow">{text(cta.badge,"Engineered around your requirements")}</span><h2 className="cta-panel__title">{text(cta.title,`Need a Custom ${data?.title || "Treatment"} Solution?`)}</h2><p className="cta-panel__sub">{text(cta.description,"Share your flow rate, water quality, and treatment objective with our engineering team.")}</p><div className="cta-panel__actions"><a className="cta-panel__btn cta-panel__btn--fill" href={text(cta.primaryLink,"/contact")}>{text(cta.primaryText,"Get a Free Quote")}</a><a className="cta-panel__btn cta-panel__btn--outline" href={text(cta.secondaryLink,`tel:${text(cta.contactNumber,"+918888889611")}`)}>{text(cta.secondaryText,"Call Us Now")}</a></div></div></div>
    </section> */}

  
   {/* <section className="fq-section" id="faq">
      <div className="fq-container">
        <div className="fq-head">
          <div className="fq-kicker">FAQ</div>
          <h2 className="fq-title">Clarifier System FAQs</h2>
          <p className="fq-sub">
            Quick answers to common clarifier system, wastewater clarifier, and sludge
            settling queries.
          </p>
        </div>
 
        <div className="fq-list">
          {FQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`fq-item ${isOpen ? "fq-item--open" : ""}`} key={item.q}>
                <button
                  type="button"
                  className="fq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="fq-question-num">0{i + 1}</span>
                  <span className="fq-question-text">{item.q}</span>
                  <span className="fq-question-icon">
                    <ChevronDown size={18} />
                  </span>
                </button>
                <div className="fq-answer">
                  <div className="fq-answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section> */}

    {/* <section
      ref={sectionRef}
      id="cta-banner"
      className={`cta-panel${isCtaVisible ? " is-visible" : ""}`}
    >
      <div className="cta-panel__container">
        <div className="cta-panel__gauges">
          {GAUGES.map((g, i) => (
            <div
              key={g.key}
              className="gauge"
              style={{
                transitionDelay: `${i * 150}ms`,
                ["--needle-angle" as string]: `${g.idleAngle}deg`,
                ["--needle-delay" as string]: `${i * 0.6}s`,
              }}
            >
              <svg viewBox="0 0 120 120" className="gauge__dial">
                <path d="M20,47 A46,46 0 1 1 100,93" className="gauge__track" />
                <path
                  d="M20,47 A46,46 0 1 1 100,93"
                  className="gauge__track-fill"
                  pathLength={1}
                />
                <g className="gauge__needle-group">
                  <line x1="60" y1="70" x2="60" y2="30" className="gauge__needle" />
                  <circle cx="60" cy="70" r="4.5" className="gauge__hub" />
                </g>
              </svg>
              <div className="gauge__readout">
                <span className="gauge__value">—</span>
                <span className="gauge__unit">{g.unit}</span>
              </div>
              <span className="gauge__label">{g.label}</span>
            </div>
          ))}
        </div>
 
        <div className="cta-panel__content">
          <span className="cta-panel__eyebrow">Live Readout — Awaiting Your Numbers</span>
          <h2 className="cta-panel__title">Need a Custom Clarifier System Solution?</h2>
          <p className="cta-panel__sub">
            Share your flow rate, water quality, and treatment objective, and
            our team will help you select the right industrial clarifier
            configuration for your plant.
          </p>
 
          <div className="cta-panel__actions">
            <a className="cta-panel__btn cta-panel__btn--fill" href="#contact-footer">
              Get a Free Quote
            </a>
            <a className="cta-panel__btn cta-panel__btn--outline" href="tel:+918888889611">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="cta-panel__btn-icon">
                <path
                  d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 13l4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section> */}




</main>


      <Footer />
    </div>
  );
}
