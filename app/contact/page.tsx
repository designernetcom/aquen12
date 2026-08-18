"use client";
import { useEffect, useRef, useState, } from "react";
import { ArrowRight, MessageCircle, Clock,  } from "lucide-react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { ReactNode } from "react";
import "./contact.css";




//  section 3

type PurposeKey = "enquire" | "vendor" | "career" | "other";
type IconKey =
  | "water"
  | "link"
  | "briefcase"
  | "comments"
  | "phone"
  | "mail"
  | "drop"
  | "filter"
  | "wrench";
 
const ICON_PROPS = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};


 
const ICONS: Record<IconKey, ReactNode> = {
  water: (
    <svg {...ICON_PROPS}>
      <path d="M12 2.5s7 8 7 12.5a7 7 0 1 1-14 0c0-4.5 7-12.5 7-12.5z" />
    </svg>
  ),
  link: (
    <svg {...ICON_PROPS}>
      <path d="M10 13a5 5 0 0 0 7.54.54l2-2a5 5 0 0 0-7.07-7.07l-1.13 1.12" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-2 2a5 5 0 0 0 7.07 7.07l1.12-1.12" />
    </svg>
  ),
  briefcase: (
    <svg {...ICON_PROPS}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  ),
  comments: (
    <svg {...ICON_PROPS}>
      <path d="M21 11.5a8.38 8.38 0 0 1-4.7 7.6 8.5 8.5 0 0 1-8.6-.3L3 20l1.2-4.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5h.3a8.5 8.5 0 0 1 8 8v.5z" />
    </svg>
  ),
  phone: (
    <svg {...ICON_PROPS}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  mail: (
    <svg {...ICON_PROPS}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  ),



    drop: (
    <svg {...ICON_PROPS}>
      <path d="M12 2.5s7 8 7 12.5a7 7 0 1 1-14 0c0-4.5 7-12.5 7-12.5z" />
    </svg>
  ),
  filter: (
    <svg {...ICON_PROPS}>
      <path d="M3 4h18" />
      <path d="M6 4v6l5 6v5" />
      <path d="M18 4v6l-3.2 3.8" />
    </svg>
  ),
  wrench: (
    <svg {...ICON_PROPS}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2z" />
    </svg>
  ),
};
 
interface Purpose {
  key: PurposeKey;
  icon: IconKey;
  label: string;
  desc: string;
}
 
const PURPOSES: Purpose[] = [
  {
    key: "enquire",
    icon: "water",
    label: "Enquire",
    desc: "STP, ETP, WTP, RO, ZLD, O&M, project discussion or quotation.",
  },
  {
    key: "vendor",
    icon: "link",
    label: "Vendor",
    desc: "Supplier registration, purchase communication and vendor proposals.",
  },
  {
    key: "career",
    icon: "briefcase",
    label: "Career",
    desc: "Job applications, resume submission and HR communication.",
  },
  {
    key: "other",
    icon: "comments",
    label: "Other",
    desc: "General messages, media, office or any other communication.",
  },
];
 
const DEPTS_BY_PURPOSE: Record<
  PurposeKey,
  { name: string; desc: string; tel: string; telHref: string; email: string }[]
> = {
  enquire: [
    {
      name: "Sales — Domestic",
      desc: "Project discussions, quotation requests and technical assistance.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
    {
      name: "Sales — International",
      desc: "Project discussions, quotation requests and technical assistance.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
    {
      name: "Purchase",
      desc: "Vendor registrations and supplier relationship queries.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
    {
      name: "HR",
      desc: "Job authentication, confirmation and career communication.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
  ],
  vendor: [
    {
      name: "Sales",
      desc: "Project discussions, quotation requests and technical assistance.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
    {
      name: "Purchase",
      desc: "Vendor registrations and supplier relationship queries.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
    {
      name: "HR",
      desc: "Job authentication, confirmation and career communication.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
  ],
  career: [
    {
      name: "Sales",
      desc: "Project discussions, quotation requests and technical assistance.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
    {
      name: "Purchase",
      desc: "Vendor registrations and supplier relationship queries.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
    {
      name: "HR",
      desc: "Job authentication, confirmation and career communication.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
  ],
  other: [
    {
      name: "Sales",
      desc: "Project discussions, quotation requests and technical assistance.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
    {
      name: "Purchase",
      desc: "Vendor registrations and supplier relationship queries.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
    {
      name: "HR",
      desc: "Job authentication, confirmation and career communication.",
      tel: "+91 962255 4445",
      telHref: "+919622554445",
      email: "info@aquenfluid.com",
    },
  ],
};




// section 4

interface Office {
  key: string;
  label: string;
  title: string;
  address: string;
  mapsHref: string;
  embedSrc: string;
}
 
const OFFICES: Office[] = [
  {
    key: "corporate",
    label: "Head Office",
    title: "Corporate Office",
    address:
      "Sr. 165/2/9, Alankapuram Rd, opp. Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra 412105",
    mapsHref:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120975.19820892993!2d73.73899711614696!3d18.64267156608166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8377fbdeab3%3A0x2c4265dab1a7a0f8!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1785758967969!5m2!1sen!2sin",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120975.19820892993!2d73.73899711614696!3d18.64267156608166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8377fbdeab3%3A0x2c4265dab1a7a0f8!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1785758967969!5m2!1sen!2sin",
  },
  // {
  //   key: "factory",
  //   label: "Manufacturing",
  //   title: "Factory Office",
  //   address:
  //     "PAP-S-77, MIDC Phase – II, Sawardari Village, Chakan, Tal - Khed, Dist – Pune, Maharashtra, India - 410501.",
  //   mapsHref:
  //     "https://www.google.com/maps/search/?api=1&query=WTE%20Infra%20Projects%20Pvt.%20Ltd%20PAP-S-77%20MIDC%20Phase%20II%20Sawardari%20Village%20Chakan%20Pune%20410501",
  //   embedSrc:
  //     "https://www.google.com/maps?q=WTE%20Infra%20Projects%20Pvt.%20Ltd%20PAP-S-77%20MIDC%20Phase%20II%20Sawardari%20Village%20Chakan%20Pune%20410501&output=embed",
  // },
];
 
const PinIcon: ReactNode = (
  <svg {...ICON_PROPS}>
    <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
 
const ArrowIcon: ReactNode = (
  <svg {...ICON_PROPS} width={14} height={14}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);




//  section 5

const CITIES = [
  "Delhi",
  "Mumbai",
  "Hyderabad",
  "Bangalore",
  "Ahmedabad",
  "Kolhapur",
  "Nagpur",
  "Goa",
];
 
const STATS = [
  { value: "19+", label: "Years experience" },
  { value: "40+", label: "Countries" },
];
 
const PinnIcon: ReactNode = (
  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);
 
const GlobeIcon: ReactNode = (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14.5 14.5 0 0 1 0 18" />
    <path d="M12 3a14.5 14.5 0 0 0 0 18" />
  </svg>
);




//  section 6

interface FaqCard {
  key: string;
  icon: "drop" | "filter" | "wrench";
  title: string;
  items: string[];
}
 
const CARDS: FaqCard[] = [
  {
    key: "stp-etp",
    icon: "drop",
    title: "For STP / ETP",
    items: [
      "Flow capacity",
      "Wastewater source",
      "Inlet characteristics, if available",
      "Application type",
      "Site location",
    ],
  },
  {
    key: "zld-ro",
    icon: "filter",
    title: "For ZLD / RO",
    items: [
      "TDS level",
      "Feed water source",
      "Recovery expectation",
      "Reject handling requirement",
      "Operating hours",
    ],
  },
  {
    key: "service",
    icon: "wrench",
    title: "For service support",
    items: [
      "Plant type",
      "Current issue",
      "Installed capacity",
      "Photographs, if available",
      "Urgency level",
    ],
  },
];
 
 

 
const CheckIcon: ReactNode = (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12 5 5L20 7" />
  </svg>
);










export default function Page() {

  //  section 3

  const [active, setActive] = useState<PurposeKey>("enquire");
  const depts = DEPTS_BY_PURPOSE[active];




  return (
    <div>
      <Header />

      <main>
        <section className="life-hero" id="hero">
          <div className="container">
            <div className="life-hero-grid">
              <div className="life-hero-copy">
                <span className="life-kicker">
                  Contact Aquen Experts
                </span>
                <h1>
                  Let’s Build Your <span>Water Treatment Solution</span>
                </h1>
                <p>
                  Connect with Aquen for customized Water & Wastewater Treatment Solutions, including STP, ETP, WTP, RO, UF, DM, MBR, MBBR, desalination, water recycling, and process treatment systems. Share your requirements, and our experts will recommend the most efficient, reliable, and sustainable solution for your application.
                </p>
                {/* <div className="life-hero-actions">
                  <a className="btn btn-green" href="#gallery">
                    View Ongoing Projects
                  </a>
                  <a className="btn btn-outline-white" href="#contact-footer">
                    Discuss Your Project
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>

    <section className="qc-section" id="quick-contact">
      <div className="qc-container">
        <div className="qc-header">
          {/* <span className="qc-eyebrow">Contact Directory</span> */}
          {/* <h2 className="qc-title">Get in touch with WTE</h2> */}
        </div>
 
        <div className="qc-grid">
          <a className="qc-card" href="tel:+919622554445">
            <span className="qc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.92.33 1.82.63 2.68a2 2 0 0 1-.45 2.11L8.09 9.66a16 16 0 0 0 6.25 6.25l1.15-1.15a2 2 0 0 1 2.11-.45c.86.3 1.76.51 2.68.63A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <h3 className="qc-card-title">Call Sales</h3>
            <p className="qc-card-text">For project and sales queries.</p>
            <span className="qc-card-value">
              +91 962255 4445
              <svg className="qc-card-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
 
          <a className="qc-card" href="mailto:info@aquenfluid.com">
            <span className="qc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x={3} y={5} width={18} height={14} rx={2} />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <h3 className="qc-card-title">Email Requirement</h3>
            <p className="qc-card-text">Send your technical details.</p>
            <span className="qc-card-value">
              info@aquenfluid.com
              <svg className="qc-card-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
 
          <a className="qc-card" href="https://wa.me/919622554445" target="_blank" rel="noopener">
            <span className="qc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5" />
              </svg>
            </span>
            <h3 className="qc-card-title">WhatsApp</h3>
            <p className="qc-card-text">Instant connect for quick project discussions.</p>
            <span className="qc-card-value">
              Message us
              <svg className="qc-card-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
 
          <a className="qc-card" href="#map">
            <span className="qc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0z" />
                <circle cx={12} cy={10} r={3} />
              </svg>
            </span>
            <h3 className="qc-card-title">Visit Office</h3>
            <p className="qc-card-text">Sr. 165/2/9, Alankapuram Rd, opp. Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra 412105</p>
            <span className="qc-card-value">
              Get directions
              <svg className="qc-card-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
        
    <section className="wte-cf" id="contact-form">
      <div className="wte-cf-container">
        <div className="wte-cf-head">
          <span className="wte-cf-eyebrow">Contact Us</span>
          <h2 className="wte-cf-title">How can Aquen Fluid help you today?</h2>
          <p className="wte-cf-lead">
            Select the right option first so your request reaches the correct
            team and the data stays clean in the system.
          </p>
        </div>
 
        <div className="wte-cf-tabs" role="tablist" aria-label="Contact purpose options">
          {PURPOSES.map((p) => (
            <button
              key={p.key}
              type="button"
              role="tab"
              aria-selected={active === p.key}
              aria-controls={`wte-cf-panel-${p.key}`}
              className={`wte-cf-tab${active === p.key ? " is-active" : ""}`}
              onClick={() => setActive(p.key)}
            >
              <span className="wte-cf-tab-icon">{ICONS[p.icon]}</span>
              <span className="wte-cf-tab-text">
                <strong>{p.label}</strong>
                <em>{p.desc}</em>
              </span>
            </button>
          ))}
        </div>
 
        <div className="wte-cf-panel" id={`wte-cf-panel-${active}`} role="tabpanel">
          <div className="wte-cf-grid">
            {/* ENQUIRE FORM */}
            {active === "enquire" && (
              <div className="wte-cf-card">
                <div className="wte-cf-card-head">
                  <h3>Share your water or wastewater treatment requirement</h3>
                  <p>
                    Fill this form for project enquiry, quotation, product
                    requirement or technical discussion. This goes to the
                    enquiry / sales team.
                  </p>
                </div>
                <form action="https://wteinfra.com/api/submit-lead.php" method="POST">
                  <input type="hidden" name="Contact Purpose" defaultValue="Enquire" />
                  <input type="hidden" name="Source Page" defaultValue="Contact Us Page" />
                  <div className="wte-cf-fields">
                    <div className="wte-cf-field">
                      <label htmlFor="name">Name *</label>
                      <input id="name" name="Name" placeholder="Your full name" type="text" required />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="company">Company Name *</label>
                      <input id="company" name="Company" placeholder="Company / organization" type="text" required />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="email">Email *</label>
                      <input id="email" name="Email" placeholder="you@company.com" type="email" required />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="mobile">Mobile *</label>
                      <input id="mobile" name="Mobile" placeholder="+91 XXXXX XXXXX" type="tel" required />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="requirement">Requirement Type *</label>
                      <select id="requirement" name="Requirement Type" required defaultValue="">
                        <option value="" disabled>
                          Select solution
                        </option>
                        <option>STP</option>
                        <option>ETP</option>
                        <option>WTP</option>
                        <option>RO</option>
                        <option>ZLD</option>
                        <option>O&amp;M</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="capacity">Capacity *</label>
                      <input id="capacity" name="Capacity" placeholder="Example: 100 KLD / 1 MLD" type="text" required />
                    </div>
                    <div className="wte-cf-field wte-cf-field-full">
                      <label htmlFor="industry">Industry / Application *</label>
                      <input
                        id="industry"
                        name="Industry"
                        placeholder="Example: Pharma, Food, Textile, Residential, Municipal"
                        type="text"
                        required
                      />
                    </div>
                    <div className="wte-cf-field wte-cf-field-full">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="Message"
                        placeholder="Tell us about water source, wastewater type, treatment goal, site location or any specific requirement."
                        required
                      />
                    </div>
                  </div>
                  <div className="wte-cf-submit">
                    <button className="wte-cf-btn" type="submit">
                      Submit Requirement
                    </button>
                    <p><span>By submitting, your message will be sent to WTE&apos;s enquiry team for follow-up.</span></p>
                  </div>
                </form>
              </div>
            )}
 
            {/* VENDOR FORM */}
            {active === "vendor" && (
              <div className="wte-cf-card">
                <div className="wte-cf-card-head">
                  <h3>Share your vendor / supplier details</h3>
                  <p>
                    This form is only for suppliers, vendors, manufacturers and
                    service providers who want to connect with WTE&apos;s purchase
                    team.
                  </p>
                </div>
                <form action="https://wteinfra.com/api/submit-vendor.php" method="POST">
                  <input type="hidden" name="contact_purpose" defaultValue="Vendor" />
                  <input type="hidden" name="source_page" defaultValue="Contact Us Page" />
                  <div className="wte-cf-fields">
                    <div className="wte-cf-field">
                      <label htmlFor="vendor_company">Company Name *</label>
                      <input id="vendor_company" name="company_name" placeholder="Vendor / supplier company" required type="text" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="vendor_person">Contact Person *</label>
                      <input id="vendor_person" name="contact_person" placeholder="Contact person name" required type="text" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="vendor_email">Email *</label>
                      <input id="vendor_email" name="email" placeholder="purchase / contact email" required type="email" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="vendor_mobile">Mobile *</label>
                      <input id="vendor_mobile" name="phone" placeholder="+91 XXXXX XXXXX" required type="tel" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="vendor_category">Product / Service Category *</label>
                      <input
                        id="vendor_category"
                        name="vendor_category"
                        placeholder="Ex.: Pumps, Panels, Fabrication, Chemicals"
                        required
                        type="text"
                      />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="vendor_location">Location *</label>
                      <input id="vendor_location" name="location" placeholder="City / State" required type="text" />
                    </div>
                    <div className="wte-cf-field wte-cf-field-full">
                      <label htmlFor="vendor_message">Message *</label>
                      <textarea
                        id="vendor_message"
                        name="message"
                        placeholder="Share your supply capability, product range, certifications or business proposal."
                        required
                      />
                    </div>
                  </div>
                  <div className="wte-cf-submit">
                    <button className="wte-cf-btn" type="submit">
                      Submit Vendor Details
                    </button>
                    <span>This will be routed separately to vendor / purchase communication.</span>
                  </div>
                </form>
              </div>
            )}
 
            {/* CAREER FORM */}
            {active === "career" && (
              <div className="wte-cf-card">
                <div className="wte-cf-card-head">
                  <h3>Apply for career opportunities at WTE</h3>
                  <p>This form is only for candidates, resume submissions and HR communication.</p>
                </div>
                <form action="https://wteinfra.com/api/submit-career.php" method="POST" encType="multipart/form-data">
                  <input type="hidden" name="Contact Purpose" defaultValue="Career" />
                  <input type="hidden" name="Source Page" defaultValue="Contact Us Page" />
                  <div className="wte-cf-fields">
                    <div className="wte-cf-field">
                      <label htmlFor="career_name">Name *</label>
                      <input id="career_name" name="Name" placeholder="Your full name" required type="text" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="career_email">Email *</label>
                      <input id="career_email" name="Email" placeholder="your email" required type="email" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="career_mobile">Mobile *</label>
                      <input id="career_mobile" name="Mobile" placeholder="+91 XXXXX XXXXX" required type="tel" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="career_role">Position Applied For *</label>
                      <input id="career_role" name="Position" placeholder="Example: Engineer, Sales, HR" required type="text" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="career_exp">Experience *</label>
                      <input id="career_exp" name="Experience" placeholder="Example: 3 years" required type="text" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="career_resume">Resume *</label>
                      <input id="career_resume" name="Resume" required type="file" accept=".pdf,.doc,.docx" />
                    </div>
                    <div className="wte-cf-field wte-cf-field-full">
                      <label htmlFor="career_message">Message *</label>
                      <textarea
                        id="career_message"
                        name="Message"
                        placeholder="Share your skills, experience and reason for applying."
                        required
                      />
                    </div>
                  </div>
                  <div className="wte-cf-submit">
                    <button className="wte-cf-btn" type="submit">
                      Submit Application
                    </button>
                    <span>This will be routed to WTE&apos;s HR team.</span>
                  </div>
                </form>
              </div>
            )}
 
            {/* OTHER FORM */}
            {active === "other" && (
              <div className="wte-cf-card">
                <div className="wte-cf-card-head">
                  <h3>Send your message to WTE</h3>
                  <p>Use this form for general messages, media, office communication or other queries.</p>
                </div>
                <form action="https://wteinfra.com/api/submit-other.php" method="POST">
                  <input type="hidden" name="Contact Purpose" defaultValue="Other" />
                  <input type="hidden" name="Source Page" defaultValue="Contact Us Page" />
                  <div className="wte-cf-fields">
                    <div className="wte-cf-field">
                      <label htmlFor="other_name">Name *</label>
                      <input id="other_name" name="Name" placeholder="Your full name" required type="text" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="other_email">Email *</label>
                      <input id="other_email" name="Email" placeholder="you@company.com" required type="email" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="other_mobile">Mobile *</label>
                      <input id="other_mobile" name="Mobile" placeholder="+91 XXXXX XXXXX" required type="tel" />
                    </div>
                    <div className="wte-cf-field">
                      <label htmlFor="other_subject">Subject *</label>
                      <input id="other_subject" name="Subject" placeholder="Message subject" required type="text" />
                    </div>
                    <div className="wte-cf-field wte-cf-field-full">
                      <label htmlFor="other_message">Message *</label>
                      <textarea id="other_message" name="Message" placeholder="Write your message here." required />
                    </div>
                  </div>
                  <div className="wte-cf-submit">
                    <button className="wte-cf-btn" type="submit">
                      Send Message
                    </button>
                    <span>Your message will be routed to the concerned WTE team.</span>
                  </div>
                </form>
              </div>
            )}
 
            {/* DEPARTMENT CARD */}
            <aside className="wte-cf-info">
              <div className="wte-cf-info-head">
                <h4>Reach the Right Department</h4>
                <p>Use the department contacts below for faster response based on your requirement.</p>
              </div>
              <div className="wte-cf-dept-list">
                {depts.map((d) => (
                  <div className="wte-cf-dept" key={d.name}>
                    <h5>{d.name}</h5>
                    <p>{d.desc}</p>
                    <div className="wte-cf-dept-links">
                      <a href={`tel:${d.telHref}`}>
                        {ICONS.phone} {d.tel}
                      </a>
                      <a href={`mailto:${d.email}`}>
                        {ICONS.mail} {d.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
        
    <section className="wte-loc" id="map">
      <div className="wte-loc-container">
        <div className="wte-loc-head">
          <span className="wte-loc-eyebrow">Locations</span>
          <h2 className="wte-loc-title">
            Corporate office, factory &amp; sales presence
          </h2>
          <p className="wte-loc-lead">
            WTE supports clients across India and worldwide through
            engineering, manufacturing and service capabilities.
          </p>
        </div>
 
        <div className="wte-loc-list">
          {OFFICES.map((office) => (
            <div className="wte-loc-row" key={office.key}>
              <div className="wte-loc-card">
                <span className="wte-loc-pin">{PinIcon}</span>
                <span className="wte-loc-tag">{office.label}</span>
                <h3>{office.title}</h3>
                <p>{office.address}</p>
                <a
                  className="wte-loc-directions"
                  href={office.mapsHref}
                  rel="noopener"
                  target="_blank"
                >
                  Get directions
                  <span className="wte-loc-directions-icon">{ArrowIcon}</span>
                </a>
              </div>
              <div className="wte-loc-map">
                <iframe
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={office.embedSrc}
                  title={`WTE ${office.title} Map`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="wte-net" id="global-contact">
      <div className="wte-net-container">
        <div className="wte-net-grid">
          <div className="wte-net-copy">
            <span className="wte-net-eyebrow">Sales network</span>
            <h2 className="wte-net-title">
              Connect with WTE across major Indian cities
            </h2>
            <p className="wte-net-lead">
              Sales support is available across Delhi, Mumbai, Hyderabad,
              Bangalore, Ahmedabad, Kolhapur, Nagpur and Goa for regional
              project coordination.
            </p>
            <div className="wte-net-cities">
              {CITIES.map((city) => (
                <span className="wte-net-city" key={city}>
                  <span className="wte-net-city-icon">{PinnIcon}</span>
                  {city}
                </span>
              ))}
            </div>
          </div>
 
          <div className="wte-net-card">
            <span className="wte-net-chip">
              {GlobeIcon}
              Global reach
            </span>
            <h3>Water &amp; wastewater solutions for worldwide requirements.</h3>
            <p>
              From compact package plants to large industrial treatment
              systems, WTE delivers engineered solutions for diverse
              applications and compliance needs.
            </p>
            <div className="wte-net-stats">
              {STATS.map((stat, i) => (
                <div className="wte-net-stat" key={stat.label}>
                  {i > 0 && <span className="wte-net-stat-divider" aria-hidden="true" />}
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="wte-faq" id="contact-faq">
      <div className="wte-faq-container">
        <div className="wte-faq-head">
          <span className="wte-faq-eyebrow">Before you contact</span>
          <h2 className="wte-faq-title">Details that help us respond faster</h2>
          <p className="wte-faq-lead">
            Send these details in the form or by email so our engineering
            team can understand your requirement clearly.
          </p>
        </div>
 
        <div className="wte-faq-grid">
          {CARDS.map((card) => (
            <div className="wte-faq-card" key={card.key}>
              <span className="wte-faq-icon">{ICONS[card.icon]}</span>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>
                    <span className="wte-faq-check">{CheckIcon}</span>
                    {item}
                  </li>
                ))}
              </ul>
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
