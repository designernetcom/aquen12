import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, CircleAlert } from "lucide-react";
import type { ReactNode } from "react";

import Footer from "@/app/layouts/footer";
import Header from "@/app/layouts/header";
import type { StaticSolution } from "@/lib/data/static-solutions";

import styles from "./static-solution-template.module.css";

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className={styles.sectionHeading}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function DataTable({ solution }: { solution: StaticSolution }) {
  return (
    <div className={styles.tableWrap}>
      <table aria-label={`${solution.title} technical specifications`}>
        <thead>
          <tr><th>Parameter</th><th>Project-specific guidance</th></tr>
        </thead>
        <tbody>
          {solution.specifications.map((row) => (
            <tr key={row.parameter}><th scope="row">{row.parameter}</th><td>{row.value}</td></tr>
          ))}
        </tbody>
      </table>
      <p className={styles.tableNote}>
        <CircleAlert size={15} aria-hidden="true" />
        Final values are confirmed from the feed-water or wastewater analysis, approved process design and selected equipment.
      </p>
    </div>
  );
}

export default function StaticSolutionTemplate({ solution }: { solution: StaticSolution }) {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link href="/">Solutions</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <strong>{solution.title}</strong>
            </nav>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>AQUEN FLUID TECHNOLOGIES LLP · {solution.category}</span>
                <h1>{solution.title}</h1>
                <p>{solution.description}</p>
                <div className={styles.heroActions}>
                  <Link className={styles.primaryButton} href="/contact#contact-form">Discuss this solution <ArrowRight size={17} /></Link>
                  <Link className={styles.textButton} href="/contact">Contact us <ArrowRight size={15} /></Link>
                </div>
                <div className={styles.heroMetrics}>
                  {solution.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
                </div>
                <p className={styles.heroNote}>Configuration, capacity and outlet quality are confirmed after reviewing the project requirement.</p>
              </div>
              <div className={styles.heroVisual}>
                <div className={styles.heroVisualFrame}>
                  <Image src={solution.image} alt={solution.imageAlt} fill priority sizes="(max-width: 850px) 100vw, 52vw" />
                </div>
                <div className={styles.heroBadge}>Solution reference</div>
                <div className={styles.heroCaption}><span>Category</span><strong>{solution.category}</strong><span>Design basis</span><strong>Project-specific</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="overview">
          <div className={styles.container}>
            <SectionHeading eyebrow="01 · SOLUTION OVERVIEW" title={`What is ${solution.title}?`}>{solution.overview}</SectionHeading>
            <div className={styles.processGrid}>
              {solution.process.map((step, index) => (
                <article className={styles.processCard} key={step.title}>
                  <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="benefits">
          <div className={styles.container}>
            <SectionHeading eyebrow="02 · KEY FEATURES & BENEFITS" title="Designed around the treatment duty">These are the practical reasons to consider the solution. Selection, performance and scope remain dependent on the approved project design.</SectionHeading>
            <div className={styles.cardGrid}>
              {solution.benefits.map((benefit) => <article className={styles.featureCard} key={benefit}><span className={styles.icon}><Check size={18} /></span><h3>{benefit}</h3><p>Configured to suit the stated flow, water quality, installation arrangement and operating objective.</p></article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`} id="working-principle">
          <div className={styles.container}>
            <SectionHeading eyebrow="03 · WORKING PRINCIPLE" title="A process train that can be engineered to fit">The process sequence below explains the role of the solution without treating indicative selections as guaranteed product specifications.</SectionHeading>
            <div className={styles.darkGrid}>
              {solution.process.map((step, index) => <div className={styles.darkCard} key={`${step.title}-dark`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.description}</p></div>)}
            </div>
          </div>
        </section>

        <section className={styles.section} id="technical-specifications">
          <div className={styles.container}>
            <SectionHeading eyebrow="04 · TECHNICAL SPECIFICATIONS" title="Selection parameters for a confirmed quotation">The table keeps the available technical information useful without inventing models, capacities, certifications or guaranteed output values.</SectionHeading>
            <DataTable solution={solution} />
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="configurations">
          <div className={styles.container}>
            <SectionHeading eyebrow="05 · CONFIGURATIONS" title="Common ways the solution can be arranged">The final configuration is selected after reviewing the process duty, site constraints, utilities and downstream requirements.</SectionHeading>
            <div className={styles.cardGrid}>
              {solution.configurations.map((configuration) => <article className={styles.configurationCard} key={configuration.title}><span>Configuration</span><h3>{configuration.title}</h3><p>{configuration.description}</p></article>)}
            </div>
          </div>
        </section>

        <section className={styles.section} id="applications">
          <div className={styles.container}>
            <div className={styles.splitGrid}>
              <div><SectionHeading eyebrow="06 · APPLICATIONS" title="Where it fits in a treatment plant">Applications are indicative. The process and material review should confirm suitability for the actual feed and operating conditions.</SectionHeading><div className={styles.tagList}>{solution.applications.map((application) => <span key={application}>{application}</span>)}</div></div>
              <div className={styles.componentPanel}><span className={styles.panelKicker}>SYSTEM COMPONENTS</span><h3>Typical scope</h3><ul>{solution.components.map((component) => <li key={component}><Check size={16} />{component}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="maintenance">
          <div className={styles.container}>
            <SectionHeading eyebrow="07 · OPERATION & MAINTENANCE" title="Plan for reliable day-to-day operation">{solution.maintenance}</SectionHeading>
            <div className={styles.maintenanceNote}><CircleAlert size={19} /><span>Operating procedures, chemical handling, confined-space access, electrical isolation and safety controls must follow the approved site documentation and equipment supplier instructions.</span></div>
          </div>
        </section>

        <section className={styles.faqSection} id="faq">
          <div className={styles.container}>
            <SectionHeading eyebrow="08 · FREQUENTLY ASKED QUESTIONS" title="Questions to resolve before selection" />
            <div className={styles.faqList}>{solution.faqs.map((faq) => <details className={styles.faqItem} key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
          </div>
        </section>

        <section className={styles.relatedSection} id="related-solutions">
          <div className={styles.container}>
            <SectionHeading eyebrow="09 · RELATED SOLUTIONS" title="Continue through the AQUEN solutions directory">Explore adjacent treatment stages and components that may be part of the same project.</SectionHeading>
            <div className={styles.relatedGrid}>{solution.related.map((related) => <Link className={styles.relatedCard} href={related.href} key={related.href}><span>{related.title}</span><ArrowRight size={17} /></Link>)}</div>
          </div>
        </section>

        <section className={styles.ctaSection} id="quote">
          <div className={styles.container}>
            <div className={styles.ctaGrid}><div><span className={styles.eyebrow}>10 · DESIGN, SUPPLY, INSTALLATION & SERVICE</span><h2>Have a {solution.title.toLowerCase()} requirement?</h2><p>Share your flow, feed-water or wastewater analysis, installation location, operating hours and desired outcome. The AQUEN team can review the right configuration and prepare the project-specific discussion.</p><div className={styles.ctaChecklist}><span><Check size={16} />Process and capacity review</span><span><Check size={16} />Configuration-specific technical discussion</span><span><Check size={16} />Supply, installation and service scope</span></div></div><div className={styles.ctaCard}><span>Request a quotation</span><strong>AQUEN Fluid Technologies LLP</strong><p>Complete Water & Wastewater Treatment Solutions</p><Link className={styles.ctaButton} href="/contact#contact-form">Open enquiry form <ArrowRight size={16} /></Link><a href="tel:+919622554445">+91 962255 4445</a><a href="mailto:info@aquenfluid.com">info@aquenfluid.com</a></div></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
