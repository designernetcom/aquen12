"use client";

import { FormEvent, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, BriefcaseBusiness, CheckCircle2, FileUp, GraduationCap,
  Handshake, Leaf, Lightbulb, MapPin, ShieldCheck, Sparkles, UsersRound,
} from "lucide-react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import styles from "./Careers.module.css";
import "./careers.css"

const benefits = [
  { icon: Lightbulb, title: "Innovative Work Environment", text: "Work on cutting-edge water treatment technologies and sustainable engineering projects." },
  { icon: GraduationCap, title: "Career Growth", text: "Build expertise through hands-on learning, focused training, and professional development." },
  { icon: UsersRound, title: "Collaborative Culture", text: "Work alongside experienced engineers, designers, and multidisciplinary project teams." },
  { icon: Leaf, title: "Meaningful Impact", text: "Contribute to projects that protect the environment and conserve vital water resources." },
];

const jobs = [
  { title: "Project Engineer", department: "Engineering & Projects", description: "Lead water and wastewater projects from process planning through commissioning, coordinating design, vendors, and site teams." },
  { title: "Water Treatment Operator", department: "Plant Operations", description: "Operate and monitor treatment systems, maintain process quality, and support safe, reliable day-to-day plant performance." },
  { title: "Sales & Service Executive", department: "Business Development", description: "Build client relationships, understand technical requirements, and connect customers with responsive treatment and service solutions." },
];

type Errors = Record<string, string>;

const reveal = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };

export default function CareersPage() {
  const reduceMotion = useReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const motionProps = reduceMotion
    ? {}
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.16 }, variants: reveal, transition: { duration: 0.65, ease: "easeOut" as const } };

  function scrollToForm(position?: string) {
    if (position) {
      const select = formRef.current?.elements.namedItem("position") as HTMLSelectElement | null;
      if (select) select.value = position;
    }
    document.getElementById("apply")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }

  function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};
    const required = ["fullName", "email", "phone", "position", "resume"];
    required.forEach((name) => { if (!data.get(name)) next[name] = "This field is required."; });
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const portfolio = String(data.get("portfolio") || "");
    const resume = data.get("resume") as File | null;
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (phone && !/^[+\d][\d\s()-]{7,17}$/.test(phone)) next.phone = "Enter a valid phone number.";
    if (portfolio) { try { new URL(portfolio); } catch { next.portfolio = "Enter a complete URL, including https://"; } }
    if (resume?.name && !/\.(pdf|doc|docx)$/i.test(resume.name)) next.resume = "Upload a PDF, DOC, or DOCX file.";
    setErrors(next);
    setSent(false);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }
    // Ready to replace with an API request when recruitment storage is connected.
    setSent(true);
    form.reset();
  }

  return (
    <div className={styles.page}>
      <Header />
      <main>
        {/* <section className={styles.hero} aria-labelledby="career-title">
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.orbOne} aria-hidden="true" />
          <div className={styles.orbTwo} aria-hidden="true" />
          <div className={styles.particles} aria-hidden="true">{[...Array(9)].map((_, i) => <i key={i} />)}</div>
          <motion.div className={styles.heroContent} initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className={styles.eyebrow}><span /><Sparkles size={15} /> Build what matters</div>
            <h1 id="career-title">Careers at <em>AQUEN Fluid</em></h1>
            <p>Join our team and help shape the future of sustainable water and wastewater treatment solutions.</p>
            <button className={styles.primaryButton} type="button" onClick={() => scrollToForm()}>
              Apply Now <ArrowRight size={18} />
            </button>
            <div className={styles.heroTrust}><ShieldCheck size={17} /> Engineering careers with real-world impact</div>
          </motion.div>
          <div className={styles.wave} aria-hidden="true" />
        </section> */}

        <section className="life-hero" id="hero">
          <div className="container">
            <div className="life-hero-grid">
              <div className="life-hero-copy">
                <span className="life-kicker">Careers at Aquen</span>
                <h1>
                 Build Your Career in  <span>Water & Wastewater Treatment</span>
                </h1>
                <p>
                  Join Aquen and be part of a team delivering innovative water and wastewater treatment solutions. Work on engineering, manufacturing, installation, commissioning, operation, and maintenance of advanced STP, ETP, WTP, RO, UF, DM, and customized treatment systems for industrial, commercial, institutional, and municipal projects.
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

        <section className={styles.why} aria-labelledby="why-title">
          <div className={styles.container}>
            <motion.div className={styles.sectionHead} {...motionProps}>
              <div className={styles.eyebrowDark}><span /> Life at AQUEN</div>
              <h2 id="why-title">Why Join AQUEN?</h2>
              <p>Do meaningful engineering work in an environment built around curiosity, craft, and shared progress.</p>
            </motion.div>
            <div className={styles.benefitGrid}>
              {benefits.map((item, index) => <motion.article className={styles.benefitCard} key={item.title} {...motionProps} transition={{ duration: .55, delay: index * .09 }}>
                <div className={styles.iconBox}><item.icon size={25} strokeWidth={1.8} /></div>
                <span className={styles.cardNumber}>0{index + 1}</span>
                <h3>{item.title}</h3><p>{item.text}</p>
              </motion.article>)}
            </div>
          </div>
        </section>

        <section className={styles.openings} aria-labelledby="openings-title">
          <div className={styles.container}>
            <motion.div className={styles.sectionHead} {...motionProps}>
              <div className={styles.eyebrowDark}><span /> Opportunities</div>
              <h2 id="openings-title">Current Openings</h2>
              <p>Find the role where your expertise can help transform how water is treated, recovered, and reused.</p>
            </motion.div>
            <div className={styles.jobsGrid}>
              {jobs.map((job, index) => <motion.article className={styles.jobCard} key={job.title} {...motionProps} transition={{ duration: .55, delay: index * .1 }}>
                <div className={styles.jobTop}><div className={styles.jobIcon}><BriefcaseBusiness size={22} /></div><span>Full-time</span></div>
                <p className={styles.department}>{job.department}</p><h3>{job.title}</h3>
                <div className={styles.location}><MapPin size={15} /> Pune, Maharashtra</div>
                <p className={styles.jobDescription}>{job.description}</p>
                <button type="button" className={styles.roleButton} onClick={() => scrollToForm(job.title)}>Apply for this Role <ArrowRight size={17} /></button>
              </motion.article>)}
            </div>
          </div>
        </section>

        <section className={styles.application} id="apply" aria-labelledby="application-title">
          <div className={styles.container}>
            <motion.div className={styles.formShell} {...motionProps}>
              <aside className={styles.formIntro}>
                <div className={styles.eyebrow}><span /> Your next chapter</div>
                <h2 id="application-title">Let&apos;s build a more sustainable future.</h2>
                <p>Tell us what drives you. Our team reviews every application with care and will reach out when your experience matches an opportunity.</p>
                <div className={styles.formPoints}>
                  <span><CheckCircle2 /> Thoughtful application review</span>
                  <span><Handshake /> People-first conversations</span>
                  <span><Leaf /> Work with measurable impact</span>
                </div>
              </aside>
              <form ref={formRef} className={styles.form} onSubmit={submitApplication} noValidate>
                <div className={styles.formHeader}><span>Application form</span><strong>Fields marked * are required</strong></div>
                <div className={styles.formGrid}>
                  <Field label="Full Name" name="fullName" required error={errors.fullName} />
                  <Field label="Email Address" name="email" type="email" required error={errors.email} />
                  <Field label="Phone Number" name="phone" type="tel" required error={errors.phone} />
                  <SelectField label="Position Applying For" name="position" required error={errors.position} options={jobs.map(j => j.title)} />
                  <SelectField label="Years of Experience" name="experience" options={["Fresher", "1–2 years", "3–5 years", "6–10 years", "10+ years"]} />
                  <Field label="Current Location" name="location" />
                  <Field label="Highest Qualification" name="qualification" />
                  <label className={`${styles.field} ${styles.upload} ${errors.resume ? styles.invalid : ""}`}>
                    <span>Resume Upload *</span><span className={styles.uploadInner}><FileUp size={20} /> <b>Choose resume</b><small>PDF, DOC or DOCX</small></span>
                    <input type="file" name="resume" accept=".pdf,.doc,.docx" required aria-invalid={!!errors.resume} aria-describedby={errors.resume ? "resume-error" : undefined} />
                    {errors.resume && <small className={styles.error} id="resume-error">{errors.resume}</small>}
                  </label>
                  <Field label="Portfolio or LinkedIn URL" name="portfolio" type="url" error={errors.portfolio} />
                  <label className={`${styles.field} ${styles.full}`}><span>Cover Letter / Message</span><textarea name="message" rows={5} placeholder="Tell us briefly why you would like to join AQUEN Fluid" /></label>
                </div>
                <button className={styles.submitButton} type="submit">Submit Application <ArrowRight size={18} /></button>
                <p className={styles.privacy}><ShieldCheck size={15} /> Your information will be kept confidential and used only for recruitment purposes.</p>
                {sent && <p className={styles.success} role="status"><CheckCircle2 size={18} /> Thank you. Your application is ready for submission once the recruitment API is connected.</p>}
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required, error }: { label: string; name: string; type?: string; required?: boolean; error?: string }) {
  const id = `career-${name}`;
  return <label className={`${styles.field} ${error ? styles.invalid : ""}`} htmlFor={id}><span>{label}{required && " *"}</span><input id={id} name={name} type={type} required={required} placeholder={`Enter ${label.toLowerCase()}`} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} />{error && <small className={styles.error} id={`${id}-error`}>{error}</small>}</label>;
}

function SelectField({ label, name, options, required, error }: { label: string; name: string; options: string[]; required?: boolean; error?: string }) {
  const id = `career-${name}`;
  return <label className={`${styles.field} ${error ? styles.invalid : ""}`} htmlFor={id}><span>{label}{required && " *"}</span><select id={id} name={name} required={required} defaultValue="" aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined}><option value="" disabled>Select an option</option>{options.map(option => <option key={option}>{option}</option>)}</select>{error && <small className={styles.error} id={`${id}-error`}>{error}</small>}</label>;
}
