import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  CircleCheck,
  Download,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Landmark,
  Layers3,
  RefreshCw,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import styles from "./page.module.css";

type Step = { title: string; text: string; icon: LucideIcon };

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Droplets,
    title: "Reduced hardness",
    text: "A properly designed softener can reduce calcium and magnesium hardness in suitable water streams.",
  },
  {
    icon: ShieldCheck,
    title: "Scale control",
    text: "Lower hardness can help reduce scale formation in compatible pipes, heat exchangers and equipment.",
  },
  {
    icon: Wrench,
    title: "Equipment protection",
    text: "Softened water may improve suitability for selected equipment and downstream processes.",
  },
  {
    icon: Gauge,
    title: "Consistent treatment",
    text: "Correct sizing and operation support a more consistent water quality for the intended application.",
  },
  {
    icon: RefreshCw,
    title: "Regenerable process",
    text: "Conventional sodium-cycle softeners restore resin capacity through a controlled regeneration cycle.",
  },
  {
    icon: Layers3,
    title: "Flexible design",
    text: "Capacity, controls, resin and vessel construction are selected around the actual water duty.",
  },
];

const vessels: {
  title: string;
  fullName: string;
  note: string;
  status: string;
}[] = [
  {
    title: "FRP Vessel",
    fullName: "Fibreglass Reinforced Plastic",
    note: "An existing FRP softener drawing reference is present in the project. Confirm the current offering, rating and duty before quotation.",
    status: "Existing project reference",
  },
  {
    title: "MSEP Vessel",
    fullName: "Mild Steel Epoxy Painted",
    note: "An existing MSEP softener drawing reference is present in the project. Coating, pressure and compatibility require confirmation.",
    status: "Existing project reference",
  },
  {
    title: "MSRL Vessel",
    fullName: "Mild Steel Rubber Lined",
    note: "No verified Water Softener-specific MSRL source was found in the current project materials. Confirm availability and design limits.",
    status: "Confirmation required",
  },
];

const specificationRows = [
  ["Model", "Technical specifications are being confirmed"],
  ["Rated capacity and service flow", "To be confirmed against the Water Softener data sheet"],
  ["Vessel material", "FRP and MSEP drawing references exist; final availability is to be confirmed"],
  ["Vessel dimensions", "Use the supplied brochure as an indicative reference; confirm against the approved design"],
  ["Resin type and quantity", "To be confirmed for the selected softener design"],
  ["Operating pressure and temperature", "To be confirmed for the selected vessel and control arrangement"],
  ["Inlet / outlet connection", "To be confirmed from the approved process design"],
  ["Regeneration method and control valve", "To be confirmed against the selected configuration"],
  ["Salt storage and regeneration water", "To be confirmed; no assumptions published"],
  ["Power supply", "To be confirmed where automation or pumping is included"],
];

const serviceSteps: Step[] = [
  { title: "Hard water inlet", text: "Hard water enters the softening vessel.", icon: Droplets },
  { title: "Top distributor", text: "Incoming water is distributed across the resin bed.", icon: Layers3 },
  { title: "Ion-exchange resin", text: "Calcium and magnesium ions exchange for sodium ions in a conventional sodium-cycle softener.", icon: RefreshCw },
  { title: "Bottom distributor", text: "Treated water is collected through the lower distribution system.", icon: Gauge },
  { title: "Soft water outlet", text: "Softened water exits the vessel for the intended application.", icon: CircleCheck },
];

const regenerationSteps: Step[] = [
  { title: "Service", text: "Hard water passes through the resin during normal operation.", icon: Droplets },
  { title: "Backwash", text: "The resin bed is loosened and flushed if required by the selected design.", icon: RefreshCw },
  { title: "Brine draw and slow rinse", text: "Regenerant contacts the resin when this stage is part of the valve configuration.", icon: FlaskConical },
  { title: "Fast rinse and refill", text: "The bed is rinsed and the brine tank is replenished where required.", icon: Wrench },
  { title: "Return to service", text: "The system resumes softened-water production after the verified sequence completes.", icon: CircleCheck },
];

const applications: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Building2, title: "Residential buildings & apartments", text: "Potentially suitable where hardness reduction is required and the system is correctly selected." },
  { icon: Landmark, title: "Commercial buildings", text: "For suitable facility water systems, subject to feed-water quality and downstream requirements." },
  { icon: Factory, title: "Hotels & resorts", text: "May support hardness control for selected utility and service-water duties." },
  { icon: ShieldCheck, title: "Hospitals & healthcare", text: "Requires an appropriate treatment train and confirmed application-specific requirements." },
  { icon: Factory, title: "Industrial facilities", text: "Industrial use depends on process water quality, equipment limits and confirmed design data." },
  { icon: Gauge, title: "Boiler-feed & utility pretreatment", text: "Hardness reduction may be used before suitable boiler or utility-water treatment." },
  { icon: Wrench, title: "Laundries", text: "Can be considered where hardness affects washing performance or equipment maintenance." },
];

const faqItems = [
  ["What is a water softener?", "A water softener is a treatment unit that commonly uses ion-exchange resin to reduce calcium and magnesium hardness. The selected resin, vessel and controls depend on the water analysis and intended use."],
  ["How does ion-exchange softening work?", "In a conventional sodium-cycle system, hardness ions are exchanged for sodium ions as water passes through the resin. The resin eventually needs regeneration according to the approved system design."],
  ["What causes hard water?", "Hardness is primarily associated with dissolved calcium and magnesium salts. The actual hardness composition should be confirmed through feed-water testing."],
  ["How do I select the right capacity?", "Capacity depends on service flow, hardness, operating hours, desired outlet quality, resin selection, regeneration method and available pretreatment. AQUEN can confirm the selection after reviewing the application."],
  ["How often does regeneration occur?", "The interval depends on resin working capacity, feed-water hardness, flow, operating hours and the selected control method. No interval is published here without verified product data."],
  ["How much salt and water does regeneration use?", "Salt and water consumption are configuration-specific. They should be confirmed from the approved Water Softener design rather than inferred from another treatment plant."],
  ["Does softening remove all dissolved contaminants?", "No. Softening is primarily a hardness-control process and does not by itself remove every dissolved contaminant, bacteria, iron, manganese or hydrogen sulphide."],
  ["What maintenance is required?", "Maintenance depends on the vessel, valve, resin, brine system and operating conditions. Follow the approved equipment documentation and service plan."],
  ["How can I request a quotation?", "Use the Enquire Now or Contact Us links on this page and share the application, approximate flow and available feed-water hardness report."],
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function StepList({ steps }: { steps: Step[] }) {
  return (
    <div className={styles.stepList}>
      {steps.map(({ title, text, icon: StepIcon }, index) => (
        <div className={styles.stepItem} key={title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <StepIcon size={18} aria-hidden="true" />
          <div><strong>{title}</strong><p>{text}</p></div>
        </div>
      ))}
    </div>
  );
}

export default function WaterSoftenerContent() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">-&gt;</span><span>Solutions</span><span aria-hidden="true">-&gt;</span><strong>Water Softener</strong>
            </nav>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.heroEyebrow}>AQUEN SOLUTION SYSTEM - HARDNESS CONTROL</span>
                <h1>Water Softener <em>Plant</em></h1>
                <h2>Ion-Exchange Water Softening for Suitable Industrial and Commercial Duties</h2>
                <p>
                  Water softening reduces hardness caused primarily by dissolved calcium and magnesium ions. A conventional softener passes water through suitable ion-exchange resin and may require regeneration when the resin capacity is exhausted. Final configuration and performance depend on verified feed-water and product data.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryButton}>Request a Quote <ArrowRight size={17} /></Link>
                  <a href="#contact" className={styles.textButton}>Contact Us <ArrowRight size={16} /></a>
                  <a href="/water-softener-technical-brochure.pdf" className={styles.downloadButton} download="Aquen-Water-Softener-Technical-Brochure.pdf" aria-label="Download the Aquen Water Softener technical brochure PDF">Download Brochure <Download size={16} /></a>
                </div>
                <div className={styles.heroMetrics}>
                  <div><strong>Ion exchange</strong><span>general process</span></div>
                  <div><strong>Project-specific</strong><span>capacity and resin</span></div>
                  <div><strong>Source review</strong><span>data sheet required</span></div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                <div className={styles.heroVisualMedia}>
                  <Image
                    src="/water-softener-installation-gallery.png"
                    alt="AQUEN water softener installation references with MGF, softener vessels, pumps and regeneration tanks"
                    width={1400}
                    height={1128}
                    priority
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
                <span className={styles.imageCaption}>New supplied installation references · verify final product configuration</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="benefits">
          <div className={styles.container}>
            <SectionHeading eyebrow="01 / General benefits" title="Hardness control for better-suited water systems">
              These are general benefits of properly designed water softening, not quantified AQUEN performance guarantees.
            </SectionHeading>
            <div className={styles.benefitGrid}>
              {benefits.map((benefit) => (
                <article className={styles.benefitCard} key={benefit.title}>
                  <span className={styles.iconBox}><benefit.icon size={21} aria-hidden="true" /></span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="vessel-options">
          <div className={styles.container}>
            <SectionHeading eyebrow="02 / Construction references" title="Water Softener vessel options">
              Existing project assets include FRP and MSEP softener drawing references. Availability, ratings and MSRL suitability must be confirmed against the approved Water Softener design.
            </SectionHeading>
            <div className={styles.vesselGrid}>
              {vessels.map((vessel) => (
                <article className={styles.vesselCard} key={vessel.title}>
                  <div className={styles.vesselBody}>
                    <span className={styles.cardEyebrow}>{vessel.status}</span>
                    <h3>{vessel.title}</h3>
                    <p className={styles.fullName}>{vessel.fullName}</p>
                    <p className={styles.vesselNote}>{vessel.note}</p>
                    <span className={styles.reviewFlag}><CircleCheck size={14} aria-hidden="true" /> Technical review before quotation</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`} id="working-principle">
          <div className={styles.container}>
            <SectionHeading eyebrow="03 / General process illustration" title="How a Water Softener Works">
              This explains a conventional sodium-cycle softener at a general level. The actual AQUEN regeneration arrangement, valve sequence and controls must be confirmed from the selected product design.
            </SectionHeading>
            <div className={styles.processGrid}>
              <article className={styles.processCard}>
                <span className={styles.cycleLabel}>Service cycle</span>
                <h3>Hard water in. Soft water out.</h3>
                <p>Water passes through ion-exchange resin until the available exchange capacity is exhausted.</p>
                <StepList steps={serviceSteps} />
              </article>
              <article className={styles.processCard}>
                <span className={styles.cycleLabel}>Regeneration cycle</span>
                <h3>Restore the resin capacity</h3>
                <p>Regeneration stages vary by equipment. Brine and rinse waste must be discharged according to the approved design.</p>
                <StepList steps={regenerationSteps} />
              </article>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="technical-specifications">
          <div className={styles.container}>
            <SectionHeading eyebrow="04 / Technical data status" title="Water Softener specifications from the supplied brochure">
              The supplied Water Softener brochure now provides the product reference for vessel construction, working principle, indicative capacity, operating parameters, regeneration and salt/water consumption. Final selection remains project-specific.
            </SectionHeading>
            <div className={styles.sourceStatus}>
              <div className={styles.sourceStatusHeader}><span>Source verification</span><strong>Supplied Water Softener brochure</strong></div>
              <p>The brochure is presented in the dedicated section below. The values on this page are indicative brochure references and should be confirmed against the approved process design before quotation.</p>
            </div>
            <div className={styles.technicalCard}>
              <div className={styles.cardTitle}>Specification fields for project confirmation</div>
              <div className={styles.tableWrap}>
                <table>
                  <thead><tr><th>Specification</th><th>Status</th></tr></thead>
                  <tbody>{specificationRows.map(([field, status]) => <tr key={field}><td>{field}</td><td>{status}</td></tr>)}</tbody>
                </table>
              </div>
            </div>
            <p className={styles.dataNote}>Brochure values are indicative. Contact our team for project-specific sizing, resin selection and regeneration details.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="brochure">
          <div className={styles.container}>
            <SectionHeading eyebrow="05 / Product brochure" title="Water Softener brochure">
              Review the supplied AQUEN brochure for FRP, MSEP and MSRL vessel features, working principle, capacity and vessel sizing, design parameters, regeneration sequence, salt and water consumption, applications and an actual site installation reference.
            </SectionHeading>
            <figure className={styles.brochureFigure}>
              <Image
                src="/water-softener-brochure-reference.png"
                alt="AQUEN Water Softener product brochure with vessel options, working principle, sizing, regeneration and applications"
                width={1071}
                height={712}
                sizes="(max-width: 1180px) calc(100vw - 48px), 1180px"
              />
              <figcaption>Supplied Water Softener brochure · Open image in a new tab for detailed reading.</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section} id="applications">
          <div className={styles.container}>
            <SectionHeading eyebrow="06 / Applications" title="Potential water-softening applications">
              Suitability depends on feed-water quality, operating conditions, downstream treatment requirements and confirmation by the technical team.
            </SectionHeading>
            <div className={styles.applicationGrid}>
              {applications.map((application) => (
                <article className={styles.applicationCard} key={application.title}>
                  <span className={styles.iconBox}><application.icon size={21} aria-hidden="true" /></span>
                  <h3>{application.title}</h3>
                  <p>{application.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="faq">
          <div className={styles.container}>
            <SectionHeading eyebrow="07 / Frequently asked questions" title="Water Softener FAQs">
              General guidance is provided below. Product-specific capacities, consumption, guarantees and maintenance intervals require confirmation.
            </SectionHeading>
            <div className={styles.faqList}>
              {faqItems.map(([question, answer]) => (
                <details className={styles.faqItem} key={question}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="installation">
          <div className={styles.container}>
            <SectionHeading eyebrow="08 / Product gallery & installations" title="Water Softener installation references">
              The new supplied collage shows FRP, MSEP and MSRL softener installations with pumps, regeneration tanks and control panels. Labels are kept as source references and should not be treated as customer or project claims.
            </SectionHeading>
            <figure className={styles.referenceCard}>
              <div className={styles.referenceImage}>
                <Image
                  src="/water-softener-installation-gallery.png"
                  alt="Water Softener installation collage showing FRP, MSEP and MSRL vessel configurations"
                  fill
                  sizes="(max-width: 900px) 100vw, 1180px"
                />
              </div>
              <figcaption>New supplied Water Softener installation reference collage</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.ctaSection} id="contact">
          <div className={styles.container}>
            <div className={styles.ctaGrid}>
              <div>
                <span className={styles.eyebrow}>09 / Request a quote</span>
                <h2>Need a Water Softener for your application?</h2>
                <p>Contact AQUEN Fluid Technologies LLP with your application, approximate flow, available feed-water hardness report and operating requirements so the correct configuration can be confirmed.</p>
              </div>
              <div className={styles.ctaCard}>
                <div><span>Company</span><strong>AQUEN Fluid Technologies LLP</strong></div>
                <div><span>Website</span><strong>www.aquenfluid.com</strong></div>
                <div><span>Product</span><strong>Water Softener Plant</strong></div>
                <div className={styles.ctaActions}><Link href="/contact" className={styles.primaryButton}>Request a Quote <ArrowRight size={17} /></Link><Link href="/contact" className={styles.contactButton}>Contact Us</Link></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
