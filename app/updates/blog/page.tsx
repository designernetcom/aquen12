"use client";
import { useEffect, useRef, useState, useCallback, useMemo  } from "react";
import type { ChangeEvent } from "react";

import { Newspaper, Search, ArrowRight, Droplet, Recycle, Factory, HardHat, Quote } from "lucide-react";

import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import { ReactNode } from "react";
import "./blog.css";



// section 3

const BLX_POSTS = [
  { category: "Wastewater Treatment", image: "uploads/blogs/1784697943-dissolved-air-flotation-daf-system-working-applications.webp", alt: "What is Dissolved Air Flotation (DAF)? Working & Applications", title: "What is Dissolved Air Flotation (DAF)? Working & Applications", excerpt: "Dissolved Air Flotation (DAF) is an effective wastewater treatment process for removing suspended solids, oil, grease, fats, and fine particles. This article explains the DAF system working process, key components, applications, advantages, challenges, and design considerations.", href: "blog-detail/what-is-dissolved-air-flotation-daf-working-applications.html" },
  { category: "Water Treatment", image: "uploads/blogs/1784607774-common-mistakes-selecting-tertiary-treatment-plant.webp", alt: "Common Mistakes While Selecting a TTP Plant", title: "Common Mistakes While Selecting a TTP Plant", excerpt: "Avoid costly errors while selecting a Tertiary Treatment Plant for industrial water reuse. Learn how water quality, treatment technology, operating cost, automation, and maintenance affect TTP performance.", href: "blog-detail/common-mistakes-while-selecting-a-ttp-plant.html" },
  { category: "Water Treatment", image: "uploads/blogs/1784521334-how-to-choose-right-oil-water-separator.webp", alt: "How to Choose the Right Oil Water Separator for Your Industry", title: "How to Choose the Right Oil Water Separator for Your Industry", excerpt: "Choose the right Oil Water Separator by evaluating wastewater flow, oil type, suspended solids, and discharge requirements. Compare gravity, coalescing plate, API, and CPI separator technologies.", href: "blog-detail/how-to-choose-the-right-oil-water-separator-for-your-industry.html" },
  { category: "ZLD", image: "uploads/blogs/1784347337-zero-liquid-discharge-plant.webp", alt: "Zero Liquid Discharge Plant: How It Works and Why It Matters", title: "Zero Liquid Discharge Plant: How It Works and Why It Matters", excerpt: "Learn how a Zero Liquid Discharge Plant helps industries recover wastewater, eliminate liquid discharge, and achieve sustainable water management. This guide explains the ZLD process and key components.", href: "blog-detail/zero-liquid-discharge-plant-how-it-works-and-why-it-matters.html" },
  { category: "RO Plant", image: "uploads/blogs/1784261378-industrial-ro-plant-upgradation-signs.webp", alt: "10 Signs Your Industrial RO Plant Needs Upgradation", title: "10 Signs Your Industrial RO Plant Needs Upgradation", excerpt: "Learn the key signs that indicate your Industrial RO Plant requires upgradation to improve efficiency, water recovery, and system reliability. Ideal for plant heads, engineers, and facility managers.", href: "blog-detail/10-signs-your-industrial-ro-plant-needs-upgradation.html" },
  { category: "Wastewater Treatment", image: "uploads/blogs/1784174599-advanced-mbr-system-industrial-wastewater-treatment.webp", alt: "How Advanced Membrane Bioreactor Systems Are Transforming Industrial Wastewater Treatment", title: "How Advanced Membrane Bioreactor Systems Are Transforming Industrial Wastewater Treatment", excerpt: "Advanced Membrane Bioreactor Systems are transforming industrial wastewater treatment by combining biological treatment with membrane filtration to produce high-quality treated water.", href: "blog-detail/how-advanced-membrane-bioreactor-systems-are-transforming-industrial-wastewater-treatment.html" },
  { category: "Wastewater Treatment", image: "uploads/blogs/1784092724-advanced-wastewater-treatment-protect-lake-victoria-africa.webp", alt: "How Advanced Wastewater Treatment Can Help Protect Lake Victoria in Africa", title: "How Advanced Wastewater Treatment Can Help Protect Lake Victoria in Africa", excerpt: "Advanced wastewater treatment can help reduce pollution entering Lake Victoria in Uganda. Modern treatment systems remove organic matter, nutrients, pathogens, and industrial contaminants.", href: "blog-detail/how-advanced-wastewater-treatment-can-help-protect-lake-victoria-in-Africa.html" },
  { category: "Water Treatment", image: "uploads/blogs/1784002804-industrial-water-treatment-process-step-by-step.webp", alt: "Industrial Water Treatment Process Explained Step by Step", title: "Industrial Water Treatment Process Explained Step by Step", excerpt: "The Industrial Water Treatment Process covers essential stages from raw water analysis and filtration to UF, RO, DM, and disinfection, supporting consistent water quality.", href: "blog-detail/industrial-water-treatment-process-explained-step-by-step.html" },
  { category: "Wastewater Treatment", image: "uploads/blogs/1783915630-industrial-wastewater-treatment-solutions-textile-industry.webp", alt: "Industrial Wastewater Treatment Solutions for the Textile Industry", title: "Industrial Wastewater Treatment Solutions for the Textile Industry", excerpt: "Explore practical industrial wastewater treatment solutions for textile industries, from ETP and biological treatment to UF, RO, and ZLD systems.", href: "blog-detail/industrial-wastewater-treatment-solutions-for-the-textile-industry.html" },
  { category: "Water Treatment", image: "uploads/blogs/1783659010-oem-support-industrial-water-treatment-systems.webp", alt: "How OEM Support Improves the Reliability of Industrial Water Treatment Systems", title: "How OEM Support Improves the Reliability of Industrial Water Treatment Systems", excerpt: "OEM support ensures efficient operation, reduced downtime, and longer equipment life for industrial water treatment plants. This guide covers OEM maintenance and best practices.", href: "blog-detail/how-oem-support-improves-the-reliability-of-industrial-water-treatment-systems.html" },
  { category: "Wastewater Treatment", image: "uploads/blogs/1783578609-ai-in-wastewater-treatment-automation.webp", alt: "How AI and Automation Are Revolutionizing Wastewater Treatment", title: "How AI and Automation Are Revolutionizing Wastewater Treatment", excerpt: "Discover how AI in Wastewater Treatment is transforming industrial water management through smart automation, predictive maintenance, and real-time process optimization.", href: "blog-detail/how-ai-and-automation-are-revolutionizing-wastewater-treatment.html" },
  { category: "Water Treatment", image: "uploads/blogs/1783489641-bandra-lake-rejuvenation-project-mumbai.webp", alt: "Bandra Lake (Talao) Rejuvenation Project Under BMC: Restoring Mumbai's Historic Water Body", title: "Bandra Lake (Talao) Rejuvenation Project Under BMC: Restoring Mumbai's Historic Water Body", excerpt: "The Bandra Lake (Talao) Rejuvenation Project under BMC is restoring one of Mumbai's historic lakes through scientific dewatering, desilting, and advanced MBR water treatment.", href: "blog-detail/bandra-lake-talao-rejuvenation-project-under-bmc-restoring-mumbai-s-historic-water-body.html" },
  { category: "Water Treatment", image: "uploads/blogs/1783398600-activated-carbon-filter-work-water-treatment.webp", alt: "How Does an Activated Carbon Filter Work in Water Treatment?", title: "How Does an Activated Carbon Filter Work in Water Treatment?", excerpt: "An Activated Carbon Filter plays a vital role in improving water quality by removing chlorine, organic contaminants, unpleasant taste, and odor through adsorption.", href: "blog-detail/how-does-an-activated-carbon-filter-work-in-water-treatment.html" },
  { category: "Wastewater Treatment", image: "uploads/blogs/1783312532-wastewater-treatment-solutions-food-beverage-industry.webp", alt: "Wastewater Treatment Solutions for the Food & Beverage Industry", title: "Wastewater Treatment Solutions for the Food & Beverage Industry", excerpt: "Food and beverage industries generate complex wastewater that requires efficient treatment to meet environmental regulations and support sustainable operations.", href: "blog-detail/wastewater-treatment-solutions-for-the-food-beverage-industry.html" },
  { category: "Water Treatment", image: "uploads/blogs/1783142285-how-wte-delivers-sustainable-water-management-solutions.webp", alt: "How WTE Delivers Sustainable Water Management Solutions", title: "How WTE Delivers Sustainable Water Management Solutions", excerpt: "Discover how WTE Infra Projects Pvt. Ltd. delivers sustainable Water Management solutions through advanced industrial water treatment and water recycling systems.", href: "blog-detail/how-wte-delivers-sustainable-water-management-solutions.html" },
  { category: "STP", image: "uploads/blogs/1783052472-signs-your-sewage-treatment-plant-needs-an-upgrade.webp", alt: "Signs Your Sewage Treatment Plant Needs an Upgrade", title: "Signs Your Sewage Treatment Plant Needs an Upgrade", excerpt: "Learn the key signs that indicate your Sewage Treatment Plant needs an upgrade. Discover common operational issues, maintenance best practices, and practical solutions.", href: "blog-detail/signs-your-sewage-treatment-plant-needs-an-upgrade.html" },
  { category: "Water Treatment", image: "uploads/blogs/1782966102-china-solar-desalination-technology-water-treatment.webp", alt: "China's New Solar-Powered Desalination Technology: A Breakthrough in Water Treatment", title: "China's New Solar-Powered Desalination Technology: A Breakthrough in Water Treatment", excerpt: "China's latest Solar Desalination Technology showcases how renewable energy is transforming modern water treatment technology by converting seawater into freshwater more sustainably.", href: "blog-detail/china-s-new-solar-powered-desalination-technology-a-breakthrough-in-water-treatment.html" },
  { category: "Water Treatment", image: "uploads/blogs/1782881699-industrial-water-treatment-plant-manufacturer-in-Ahmedabad.webp", alt: "Industrial Water Treatment Plant Manufacturer in Ahmedabad", title: "Industrial Water Treatment Plant Manufacturer in Ahmedabad", excerpt: "Looking for a reliable Water Treatment Plant Manufacturer in Ahmedabad? Learn how to choose the right industrial water treatment solution and explore technologies like RO, UF, STP, ETP, DM, and ZLD.", href: "blog-detail/industrial-water-treatment-plant-manufacturer-in-ahmedabad.html" },
  { category: "Water Treatment", image: "uploads/blogs/1782793355-industrial-water-treatment-solutions-for-chemical-industry.webp", alt: "Industrial Water Treatment Solutions for the Chemical Industry", title: "Industrial Water Treatment Solutions for the Chemical Industry", excerpt: "Chemical manufacturing requires reliable water treatment systems to ensure efficient production, equipment protection, and environmental compliance.", href: "blog-detail/industrial-water-treatment-solutions-for-the-chemical-industry.html" },
  { category: "Wastewater Treatment", image: "uploads/blogs/1782707453-wastewater-reuse-agriculture-industry-kenya.webp", alt: "How to Reuse Wastewater for Agriculture and Industry in Kenya", title: "How to Reuse Wastewater for Agriculture and Industry in Kenya", excerpt: "As water scarcity grows in Kenya, treated wastewater is becoming a reliable source for agriculture and industrial operations using STP, ETP, MBR, MBBR, UF, and RO.", href: "blog-detail/how-to-reuse-wastewater-for-agriculture-and-industry-in-kenya.html" },
  { category: "Water Treatment", image: "uploads/blogs/1782448078-wte-leading-water-treatment-plant-manufacturers-in-india.webp", alt: "WTE Is Among the Leading Water Treatment Plant Manufacturers in India", title: "WTE Is Among the Leading Water Treatment Plant Manufacturers in India", excerpt: "WTE is among the trusted Water Treatment Plant Manufacturers in India, delivering customized water and wastewater treatment solutions for diverse industries.", href: "blog-detail/wte-is-among-the-leading-water-treatment-plant-manufacturers-in-india.html" },
  { category: "ETP", image: "uploads/blogs/1782362791-10-biggest-mistakes-choosing-etp-plant.webp", alt: "10 Biggest Mistakes to Avoid When Choosing an ETP Plant", title: "10 Biggest Mistakes to Avoid When Choosing an ETP Plant", excerpt: "Choosing the right Effluent Treatment Plant (ETP) is critical for efficient industrial wastewater treatment and long-term compliance.", href: "blog-detail/10-biggest-mistakes-to-avoid-when-choosing-an-etp-plant.html" },
  { category: "Wastewater Treatment", image: "uploads/blogs/1782275159-industrial-wastewater-treatment-africa.webp", alt: "Industrial Wastewater Treatment in Africa: Challenges and Solutions", title: "Industrial Wastewater Treatment in Africa: Challenges and Solutions", excerpt: "Modern industrial wastewater treatment facility in Africa designed for water recycling, sustainability, and regulatory compliance.", href: "blog-detail/industrial-wastewater-treatment-in-africa-challenges-and-solutions.html" },
  { category: "ETP", image: "uploads/blogs/1782186323-how-to-select-the-right-etp-plant-for-water-treatment.webp", alt: "How to Select the Right ETP Plant for Water Treatment", title: "How to Select the Right ETP Plant for Water Treatment", excerpt: "Selecting the right ETP plant is essential for achieving environmental compliance, reducing operating costs, and improving water management.", href: "blog-detail/how-to-select-the-right-etp-plant-for-water-treatment.html" },
  { category: "Water Treatment", image: "uploads/blogs/1782103997-how-to-check-water-tds-at-home.webp", alt: "How to Check Water TDS at Home", title: "How to Check Water TDS at Home", excerpt: "Learn how to check water TDS at home using a simple digital TDS meter. This practical guide explains the normal TDS level for drinking water.", href: "blog-detail/how-to-check-water-tds-at-home.html" },
  { category: "Water Treatment", image: "uploads/blogs/1781843918-reducing-freshwater-consumption-industrial-facilities.webp", alt: "Reducing Freshwater Consumption in Industrial Facilities", title: "Reducing Freshwater Consumption in Industrial Facilities", excerpt: "Freshwater availability is becoming a major challenge for industrial facilities due to rising costs, regulatory requirements, and increasing water scarcity.", href: "blog-detail/reducing-freshwater-consumption-in-industrial-facilities.html" },
  { category: "Water Treatment", image: "uploads/blogs/1781756597-industrial-ro-plant-buying-guide.webp", alt: "Key Parameters to Consider Before Buying an Industrial RO Plant", title: "Key Parameters to Consider Before Buying an Industrial RO Plant", excerpt: "Choosing the right Industrial RO Plant requires more than comparing capacities and prices. This guide explains the critical technical and operational factors.", href: "blog-detail/key-parameters-to-consider-before-buying-an-industrial-ro-plant.html" },
  { category: "Wastewater Treatment", image: "uploads/blogs/1781670343-wastewater-treatment-plant-for-pharma-industry.webp", alt: "Wastewater Treatment Plant for Pharma Industry", title: "Wastewater Treatment Plant for Pharma Industry", excerpt: "Pharmaceutical industries generate complex wastewater containing APIs, solvents, organic compounds, and high COD loads.", href: "blog-detail/wastewater-treatment-plant-for-pharma-industry.html" },
  { category: "STP", image: "uploads/blogs/1781498366-selecting-right-stp-technology-commercial-industrial-applications.webp", alt: "Selecting the Right STP Technology for Commercial & Industrial Applications", title: "Selecting the Right STP Technology for Commercial & Industrial Applications", excerpt: "Learn how to choose the right Sewage Treatment Plant (STP) technology for commercial and industrial facilities. Compare MBBR, SBR, MBR, and ASP systems.", href: "blog-detail/selecting-the-right-stp-technology-for-commercial-industrial-applications.html" },
  { category: "Water Treatment", image: "uploads/blogs/1781243618-water-management-challenges-in-process-industries.jpg", alt: "Water Management Challenges in Process Industries", title: "Water Management Challenges in Process Industries", excerpt: "Water management is becoming increasingly complex for process industries due to rising water costs, stricter environmental regulations, and sustainability requirements.", href: "blog-detail/water-management-challenges-in-process-industries.html" },
  { category: "Water Treatment", image: "uploads/blogs/1781238741-signs-existing-treatment-plant-needs-upgradation.webp", alt: "Signs Your Water & Wastewater Treatment Plant Needs Upgradation", title: "Signs Your Water & Wastewater Treatment Plant Needs Upgradation", excerpt: "An aging treatment plant can lead to higher operating costs, compliance issues, equipment failures, and inconsistent water quality.", href: "blog-detail/signs-your-water-wastewater-treatment-plant-needs-upgradation.html" },
  { category: "Water Treatment", image: "uploads/blogs/1781159618-sustainable-water-management-industrial-growth-wte-infra.webp", alt: "Sustainable Water Management for Industrial Growth", title: "Sustainable Water Management for Industrial Growth", excerpt: "Sustainable water management helps industries reduce freshwater consumption, improve water reuse, and maintain regulatory compliance.", href: "blog-detail/sustainable-water-management-for-industrial-growth.html" },
  { category: "Water Treatment", image: "uploads/blogs/1781069642-water-treatment-plant-process.webp", alt: "Water Treatment Plant Process: Stages, Working Principle & Flow Diagram", title: "Water Treatment Plant Process: Stages, Working Principle & Flow Diagram", excerpt: "Learn the complete Water Treatment Plant Process, including its working principle, major treatment stages, and flow diagram.", href: "blog-detail/water-treatment-plant-process-stages-working-principle-flow-diagram.html" },
  { category: "Vessels", image: "uploads/blogs/1778494609-ASME%20U%20%26%20R%20Stamp%20Pressure%20Vessels.webp", alt: "ASME U & R Stamp Pressure Vessels: Complete Guide to Certified Pressure Vessel Manufacturing", title: "ASME U & R Stamp Pressure Vessels: Complete Guide to Certified Pressure Vessel Manufacturing", excerpt: "In industries where safety, reliability, and compliance are non-negotiable, ASME U Stamp Pressure Vessels and ASME R Stamp certified equipment play a critical role.", href: "blog-detail/asme-u-r-stamp-pressure-vessels.html" },
  { category: "Water Treatment", image: "uploads/blogs/1777979007-1755941400668.jpg", alt: "Water Treatment for Thermal Power Plants | Process, Importance & Technologies", title: "Water Treatment for Thermal Power Plants | Process, Importance & Technologies", excerpt: "Learn the importance of water treatment in thermal power plants. Explore processes, technologies like DM plant, RO, clarifiers, and cooling tower treatment.", href: "blog-detail/water-treatment-for-thermal-power-plants-process-importance-technologies.html" },
  { category: "Water Treatment", image: "water-filtration-plant.webp", alt: "Industrial Water Filtration: PSF, SSF, ACF, DMF, and MMF", title: "Industrial Water Filtration: PSF, SSF, ACF, DMF, and MMF", excerpt: "Industrial water filtration systems play a vital role in maintaining water quality across various industries, using PSF, SSF, ACF, DMF, and MMF technologies.", href: "blog-detail/industrial-water-filtration-psf-ssf-acf-dmf-mmf.html" },
];
 
const BLX_CATEGORIES = [
  "all",
  ...Array.from(new Set(BLX_POSTS.map((p) => p.category))).sort(),
];
 
const PAGE_SIZE = 6;



// SECTION 4

const KX_TOPICS = [
  {
    icon: Droplet,
    num: "01",
    title: "Water Treatment",
    text: "Practical writing on RO, filtration, softening, desalination and treatment system selection.",
  },
  {
    icon: Recycle,
    num: "02",
    title: "Wastewater",
    text: "Insights around STP, ETP, tertiary treatment, reuse, compliance and discharge expectations.",
  },
  {
    icon: Factory,
    num: "03",
    title: "Manufacturing",
    text: "Updates on equipment readiness, vessels, panels and manufacturing support behind project delivery.",
  },
  {
    icon: HardHat,
    num: "04",
    title: "Project Execution",
    text: "Articles on coordination, installation, commissioning, O&M and performance-focused execution.",
  },
];



// section 5

const LR_ARTICLES = [
  {
    tag: "Blog",
    title: "How industries can think about water reuse beyond short-term compliance.",
    text: "Perspective on reuse planning, treatment quality, system reliability and lifecycle support.",
    href: "#",
  },
  {
    tag: "PR Update",
    title: "WTE communicates its project delivery approach for treatment plant requirements.",
    text: "Coverage of engineering discipline, manufacturing capability and site execution support.",
    href: "#",
  },
  {
    tag: "Technical View",
    title: "Why plant performance depends on both design quality and service continuity.",
    text: "An article on commissioning readiness, O&M awareness and long-term system performance.",
    href: "#",
  },
];





// Functions








// Export default

export default function Page() {

    // section 3

      const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
 
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BLX_POSTS.filter((p) => {
      const matchesCategory = category === "all" || p.category === category;
      const matchesQuery =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);
 
  const visiblePosts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
 
  const handleCategoryClick = (cat: string) => {
    setCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };
 
  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setVisibleCount(PAGE_SIZE);
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
                  Updates
                </span>
                <h1>
                  PR, Blog & <span>Expert Insights</span>
                </h1>
                <p>
                    Press notes, industry perspectives and practical insights from WTE’s work across water treatment, wastewater management, manufacturing and project execution.
                </p>
                <div className="life-hero-actions">
                  <a className="btn btn-green" href="#gallery">
                    Read Insights
                  </a>
                  <a className="btn btn-outline-white" href="#contact-footer">
                    Connect With WTE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

    <section className="prm-section" id="pr-overview">
      <div className="prm-container">
        <div className="prm-rule-row">
          <span className="prm-rule-label">Perspective</span>
          <span className="prm-rule-line" />
          <span className="prm-rule-meta">WTE Editorial</span>
        </div>
 
        <div className="prm-grid">
          <div className="prm-copy">
            <h2 className="prm-title">
              Clear communication around serious treatment work.
            </h2>
            <p>
              WTE&rsquo;s PR and blog space brings together company viewpoints,
              project-led learnings and practical communication from the water
              and wastewater treatment sector.
            </p>
            <p>
              The focus is on meaningful updates: how treatment systems are
              planned, how execution challenges are addressed and how
              industries move towards reliable, compliant and sustainable
              water management.
            </p>
          </div>
 
          <div className="prm-divider" aria-hidden="true" />
 
          <div className="prm-note">
            <div className="prm-note-icon">
              <Newspaper size={20} />
            </div>
            <span className="prm-note-chip">Editorial Focus</span>
            <h3>Built for insight, not just announcements.</h3>
            <p>
              Every article is designed to help readers understand WTE&rsquo;s
              engineering approach, project discipline, treatment capabilities
              and the role of technology in long-term plant performance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="blx-section" id="all-blogs">
      <div className="blx-container">
        <div className="blx-head">
          <span className="blx-kicker">Latest Blogs</span>
          <h2 className="blx-title">Explore WTE Blogs &amp; PR Updates</h2>
          <p className="blx-sub">
            Read expert articles, company updates and technical insights on water
            treatment, wastewater treatment, STP, ETP, RO, ZLD and industrial water
            management.
          </p>
        </div>
 
        <div className="blx-layout">
          {/* -------- Sidebar -------- */}
          <aside className="blx-sidebar">
            <div className="blx-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search blogs..."
                value={query}
                onChange={handleQueryChange}
              />
            </div>
            <div className="blx-cat-list">
              {BLX_CATEGORIES.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  className={`blx-cat-btn ${category === cat ? "blx-cat-btn--active" : ""}`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat === "all" ? "All Categories" : cat}
                </button>
              ))}
            </div>
            <div className="blx-result-count">
              {filtered.length} article{filtered.length === 1 ? "" : "s"} found
            </div>
          </aside>
 
          {/* -------- Post list -------- */}
          <div className="blx-list">
            {visiblePosts.length === 0 && (
              <div className="blx-empty">
                No blogs match your search. Try a different keyword or category.
              </div>
            )}
 
            {visiblePosts.map((post) => (
              <article className="blx-card" key={post.href}>
                <div className="blx-card-media">
                  <img src={post.image} alt={post.alt} loading="lazy" />
                </div>
                <div className="blx-card-body">
                  <span className="blx-card-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href={post.href} className="blx-card-link">
                    Read Blog <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
 
            {hasMore && (
              <div className="blx-load-more-wrap">
                <button
                  type="button"
                  className="blx-load-more"
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                >
                  Load More Blogs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

    <section className="kx-section" id="knowledge-series">
      <div className="kx-container">
        <div className="kx-head">
          <span className="kx-kicker">Knowledge Series</span>
          <h2 className="kx-title">
            Topics that matter to industries and project teams.
          </h2>
          <p className="kx-sub">
            Blog categories created around the real concerns of treatment plant
            owners, consultants, project teams and operations teams.
          </p>
        </div>
 
        <div className="kx-list">
          {KX_TOPICS.map((topic) => (
            <a className="kx-row" href="#" key={topic.title}>
              <span className="kx-row-num">{topic.num}</span>
              <span className="kx-row-icon">
                <topic.icon size={20} />
              </span>
              <span className="kx-row-title">{topic.title}</span>
              <span className="kx-row-text">{topic.text}</span>
              <span className="kx-row-arrow">
                <ArrowRight size={18} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="lr-section" id="latest-articles">
      <div className="lr-container">
        <div className="lr-head">
          <span className="lr-kicker">Latest Reads</span>
          <h2 className="lr-title">Recent PR notes and blog articles.</h2>
          <p className="lr-sub">
            A clean reading archive for company communication, technical
            perspectives and sector-focused updates from WTE.
          </p>
        </div>
 
        <div className="lr-grid">
          {LR_ARTICLES.map((article) => (
            <article className="lr-clip" key={article.title}>
              <span className="lr-clip-fold" aria-hidden="true" />
              <Quote className="lr-clip-quote" size={40} aria-hidden="true" />
              <span className="lr-clip-tag">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
              <a className="lr-clip-link" href={article.href}>
                Read <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
      </main>

      <Footer />
    </div>
  );
}
