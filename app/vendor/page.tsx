'use client'

import { FormEvent, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Activity, ArrowRight, BadgeCheck, Boxes, Check, CheckCircle2, ChevronDown, CircuitBoard,
  Clock3, Cog, FileCheck2, FileUp, FlaskConical, Gauge, Handshake, Leaf,
  MapPin, Network, PackageCheck, PanelsTopLeft, Pipette, Settings2, ShieldCheck,
  Sparkles, UsersRound, Waves, Wrench,
} from 'lucide-react'

import Header from '../layouts/header'
import Footer from '../layouts/footer'
import styles from './Vendor.module.css'
import "./vendor.css"

const highlights = ['Transparent procurement process', 'Fair and timely communication', 'Long-term business opportunities', 'Quality and compliance standards', 'Nationwide project participation']

const programs = [
  [ShieldCheck, 'Quality Assurance', 'Vendors meet AQUEN’s rigorous quality, documentation, and compliance standards.'],
  [Clock3, 'Timely Delivery', 'A shared commitment to dependable supply schedules that keep every project moving.'],
  [UsersRound, 'Technical Collaboration', 'Work closely with AQUEN engineering and project teams to solve real site challenges.'],
  [Handshake, 'Sustainable Partnership', 'Build long-term, mutually beneficial relationships grounded in trust and performance.'],
] as const

const categories = [
  [Cog, 'Pumps & Motors', 'Process and utility equipment'], [Waves, 'Blowers & Compressors', 'Aeration and air systems'], [Settings2, 'Pipes & Fittings', 'Industrial flow networks'],
  [Gauge, 'Valves & Instrumentation', 'Control and measurement'], [PanelsTopLeft, 'Electrical Panels', 'Power and motor control'], [Wrench, 'FRP & MS/SS Fabrication', 'Built-to-drawing equipment'],
  [FlaskConical, 'Chemicals & Consumables', 'Treatment and operations'], [Pipette, 'Membranes & Filters', 'Separation technologies'], [CircuitBoard, 'Automation & PLC Systems', 'Plant intelligence and control'],
  [Boxes, 'Civil & Mechanical Contractors', 'Site execution partners'],
] as const

const steps = [
  ['Submit Registration', 'Complete the vendor registration form with all required details.'],
  ['Document Verification', 'AQUEN reviews your company documents and certifications.'],
  ['Technical Evaluation', 'We assess technical capability, capacity, and product quality.'],
  ['Approval & Empanelment', 'Approved vendors join AQUEN’s trusted vendor network.'],
  ['Business Collaboration', 'Participate in projects and relevant procurement opportunities.'],
] as const

type Errors = Record<string, string>

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function SectionHead({ eyebrow, title, copy, center = false }: { eyebrow: string; title: React.ReactNode; copy?: string; center?: boolean }) {
  return <Reveal className={`${styles.sectionHead} ${center ? styles.center : ''}`}><span className={styles.eyebrow}><i />{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</Reveal>
}

export default function VendorPage() {
  const reduced = useReducedMotion()
  const formRef = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  function goToForm() { document.getElementById('register')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }) }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const next: Errors = {}
    const required = ['companyName', 'gstNumber', 'address', 'contactName', 'email', 'phone', 'category', 'offerings', 'companyProfile', 'gstCertificate', 'consent']
    required.forEach(name => { if (!data.get(name)) next[name] = name === 'consent' ? 'You must confirm this declaration.' : 'This field is required.' })
    const email = String(data.get('email') || '')
    const phone = String(data.get('phone') || '')
    const website = String(data.get('website') || '')
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = 'Enter a valid email address.'
    if (phone && !/^[+\d][\d\s()-]{7,17}$/.test(phone)) next.phone = 'Enter a valid phone number.'
    if (website) { try { new URL(website) } catch { next.website = 'Enter a complete URL, including https://' } }
    ;['companyProfile', 'gstCertificate', 'certifications'].forEach(name => {
      const file = data.get(name) as File | null
      if (file?.name && !/\.pdf$/i.test(file.name)) next[name] = 'Upload a PDF file.'
    })
    setErrors(next); setSubmitted(false)
    if (Object.keys(next).length) { setTimeout(() => form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus(), 0); return }
    // Replace with a POST request when the vendor-management API is connected.
    setSubmitted(true); form.reset()
  }

  return <div className={styles.page}>
    <Header />
    <main>
      {/* <section className={styles.hero} aria-labelledby="vendor-title">
        <div className={styles.heroImage}><Image src="/banner/1 (4).png" alt="Industrial water treatment partnership" fill priority sizes="100vw" /></div>
        <div className={styles.heroOverlay} /><div className={styles.grid} aria-hidden="true" />
        <div className={styles.particles} aria-hidden="true">{Array.from({ length: 11 }, (_, i) => <i key={i} />)}</div>
        <motion.div className={`${styles.shell} ${styles.heroContent}`} initial={reduced ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, ease: [0.22, 1, 0.36, 1] }}>
          <div className={styles.heroCopy}>
            <span className={styles.heroKicker}><Network size={17} /> AQUEN Partner Network</span>
            <h1 id="vendor-title">Build better systems. <em>Grow with AQUEN.</em></h1>
            <p>Join a quality-first vendor ecosystem delivering sustainable water and wastewater infrastructure across India.</p>
            <div className={styles.heroActions}><button className={styles.primaryButton} type="button" onClick={goToForm}>Register as Vendor <ArrowRight size={18} /></button><a href="#categories" className={styles.ghostButton}>Explore categories</a></div>
            <span className={styles.heroNote}><BadgeCheck size={17} /> Transparent. Technical. Built for the long term.</span>
          </div>
          <motion.aside className={styles.heroPanel} initial={reduced ? false : { opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .2 }} aria-label="AQUEN vendor network overview">
            <div className={styles.panelHead}><span><i /> Partner network active</span><b>AQ / VN-24</b></div>
            <div className={styles.panelCore}><span>SUPPLY ECOSYSTEM</span><strong>10<sup>+</sup></strong><p>specialist vendor categories</p></div>
            <div className={styles.signal}><span style={{'--level':'82%'} as React.CSSProperties} /><span style={{'--level':'64%'} as React.CSSProperties} /><span style={{'--level':'92%'} as React.CSSProperties} /><span style={{'--level':'73%'} as React.CSSProperties} /><span style={{'--level':'86%'} as React.CSSProperties} /></div>
            <div className={styles.panelMetrics}><span><MapPin /> <b>Pan-India</b><small>project reach</small></span><span><Activity /> <b>5-step</b><small>evaluation</small></span></div>
          </motion.aside>
        </motion.div>
        <div className={styles.heroWave} aria-hidden="true" />
      </section> */}

              <section className="life-hero" id="hero">
          <div className="container">
            <div className="life-hero-grid">
              <div className="life-hero-copy">
                <span className="life-kicker">Vendor Partnership</span>
                <h1>
                  Partner with Aquen as a  <span>Trusted Vendor</span>
                </h1>
                <p>
                  Join Aquen&apos;s trusted vendor network and collaborate in delivering high-quality water and wastewater treatment solutions. Work with us by supplying quality materials, equipment, and services for industrial, commercial, institutional, and municipal projects.
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

      <section className={styles.overview} aria-labelledby="overview-title">
        <div className={`${styles.shell} ${styles.overviewGrid}`}>
          <Reveal className={styles.overviewCopy}>
            <span className={styles.eyebrow}><i /> Partnership philosophy</span>
            <h2 id="overview-title">Vendor <em>Overview</em></h2>
            <p>AQUEN Fluid builds long-term partnerships with reliable, quality-focused vendors and suppliers who share our commitment to engineering excellence. Together, we create dependable supply chains that help deliver efficient water and wastewater infrastructure across sectors and regions.</p>
            <div className={styles.highlightGrid}>{highlights.map((item, i) => <motion.div key={item} whileHover={reduced ? undefined : { x: 5 }} transition={{ duration: .2 }}><span><Check size={15} /></span>{item}<b>0{i + 1}</b></motion.div>)}</div>
            <div className={styles.overviewStats}><div><strong>01</strong><span>Accountable partner team</span></div><div><strong>360°</strong><span>Project lifecycle support</span></div></div>
          </Reveal>
          <Reveal className={styles.overviewVisual} delay={.12}>
            <Image src="/banner/vendor-img.png" alt="AQUEN engineering and vendor collaboration" fill sizes="(max-width: 900px) 100vw, 45vw" />
            <div className={styles.visualOverlay} /><div className={styles.visualBadge}><Handshake size={26} /><span><b>One trusted network</b>Better systems, built together</span></div>
            <span className={styles.visualCode}>AQ / PARTNER / 01</span>
          </Reveal>
        </div>
      </section>

      <section className={styles.program} aria-labelledby="program-title"><div className={styles.shell}>
        <SectionHead eyebrow="How we work" title={<>The AQUEN Vendor <em>Program</em></>} copy="A clear partnership framework that protects quality, project schedules, and shared business value." center />
        <div className={styles.programGrid}>{programs.map(([Icon, title, text], i) => <Reveal className={styles.programCard} key={title} delay={i * .07}><span className={styles.cardIndex}>0{i + 1}</span><div className={styles.cardIcon}><Icon size={27} /></div><h3>{title}</h3><p>{text}</p><div className={styles.cardTrack}><i /></div></Reveal>)}</div>
      </div></section>

      <section className={styles.categories} id="categories" aria-labelledby="categories-title"><div className={styles.shell}>
        <SectionHead eyebrow="Supply ecosystem" title={<>Vendor <em>Categories</em></>} copy="We collaborate with specialist manufacturers, suppliers, fabricators, integrators, and execution partners." />
        <div className={styles.categoryGrid}>{categories.map(([Icon, title, description], i) => <Reveal className={styles.categoryCard} key={title} delay={(i % 5) * .05}><div><Icon size={23} /></div><h3>{title}</h3><p>{description}</p><span>{String(i + 1).padStart(2, '0')}</span><ArrowRight size={16} /></Reveal>)}</div>
      </div></section>

      <section className={styles.process} aria-labelledby="process-title"><div className={styles.shell}>
        <SectionHead eyebrow="Simple and transparent" title={<>Your path to <em>partnership</em></>} copy="A structured evaluation process helps both teams begin with clear expectations." center />
        <div className={styles.timeline}>{steps.map(([title, text], i) => <Reveal className={styles.step} key={title} delay={i * .1}><div className={styles.stepNumber}>{i + 1}</div><span className={styles.stepLine} /><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
      </div></section>

      <section className={styles.registration} id="register" aria-labelledby="registration-title"><div className={styles.shell}>
        <Reveal className={styles.formShell}>
          <aside className={styles.formIntro}><span className={styles.formKicker}><Sparkles size={15} /> Join the network</span><h2 id="registration-title">Bring your capability into the AQUEN ecosystem.</h2><p>Share your credentials once. Our procurement team maps them against live and upcoming project requirements.</p><div className={styles.formProgress}><div><span>Registration readiness</span><b>4 key stages</b></div><i /></div><div className={styles.formBenefits}><span><FileCheck2 /> Structured technical evaluation</span><span><PackageCheck /> Category-matched opportunities</span><span><Leaf /> Long-term sustainable collaboration</span></div><div className={styles.formSupport}><ShieldCheck /><span><b>Your data stays private</b>Used only for vendor evaluation</span></div></aside>
          <form ref={formRef} className={styles.form} onSubmit={submit} noValidate>
            <div className={styles.formTop}><div><span>Vendor registration</span><p>Fields marked * are required</p></div><b>AQ / VR-01</b></div>
            <FormSection title="Company details" number="01">
              <Field label="Company Name" name="companyName" required error={errors.companyName} /><Field label="Company Registration Number" name="registrationNumber" />
              <Field label="GST Number" name="gstNumber" required error={errors.gstNumber} /><Field label="Year of Establishment" name="establishmentYear" type="number" />
              <Field label="Company Address" name="address" required error={errors.address} full />
            </FormSection>
            <FormSection title="Contact person details" number="02">
              <Field label="Contact Person Name" name="contactName" required error={errors.contactName} /><Field label="Designation" name="designation" />
              <Field label="Email Address" name="email" type="email" required error={errors.email} /><Field label="Phone Number" name="phone" type="tel" required error={errors.phone} />
            </FormSection>
            <FormSection title="Business details" number="03">
              <Select label="Vendor Category" name="category" options={categories.map(([, title]) => title)} required error={errors.category} /><Select label="Annual Turnover" name="turnover" options={['Below ₹25 lakh', '₹25 lakh–₹1 crore', '₹1–5 crore', '₹5–25 crore', 'Above ₹25 crore']} />
              <Select label="Number of Employees" name="employees" options={['1–10', '11–50', '51–200', '201–500', '500+']} /><TextArea label="Products/Services Offered" name="offerings" required error={errors.offerings} full />
            </FormSection>
            <FormSection title="Document uploads" number="04"><Upload label="Company Profile" name="companyProfile" required error={errors.companyProfile} /><Upload label="GST Certificate" name="gstCertificate" required error={errors.gstCertificate} /><Upload label="Quality Certifications" name="certifications" error={errors.certifications} /></FormSection>
            {/* <FormSection title="Additional information" number="05"><TextArea label="Previous Project Experience" name="experience" /><TextArea label="Why do you want to partner with AQUEN?" name="partnershipReason" /><Field label="Website URL" name="website" type="url" error={errors.website} full /></FormSection> */}
            <label className={`${styles.consent} ${errors.consent ? styles.invalidConsent : ''}`}><input type="checkbox" name="consent" value="confirmed" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'consent-error' : undefined} /><span>I confirm that the information provided is accurate and complete.</span></label>
            {errors.consent && <small className={styles.error} id="consent-error">{errors.consent}</small>}
            <button className={styles.submitButton} type="submit">Submit Registration <ArrowRight size={18} /></button>
            <p className={styles.privacy}><ShieldCheck size={15} /> Your information will be kept confidential and used only for vendor evaluation purposes.</p>
            {submitted && <p className={styles.success} role="status"><CheckCircle2 size={18} /> Thank you. Your registration is ready for submission once the vendor API is connected.</p>}
          </form>
        </Reveal>
      </div></section>
    </main><Footer />
  </div>
}

function FormSection({ title, number, children }: { title: string; number: string; children: React.ReactNode }) { return <fieldset className={styles.formSection}><legend><b>{number}</b>{title}</legend><div className={styles.formGrid}>{children}</div></fieldset> }
function Field({ label, name, type = 'text', required, error, full }: { label: string; name: string; type?: string; required?: boolean; error?: string; full?: boolean }) { const id = `vendor-${name}`; return <label className={`${styles.field} ${full ? styles.full : ''} ${error ? styles.invalid : ''}`} htmlFor={id}><span>{label}{required && ' *'}</span><input id={id} name={name} type={type} required={required} placeholder={`Enter ${label.toLowerCase()}`} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} />{error && <small className={styles.error} id={`${id}-error`}>{error}</small>}</label> }
function TextArea({ label, name, required, error, full }: { label: string; name: string; required?: boolean; error?: string; full?: boolean }) { const id = `vendor-${name}`; return <label className={`${styles.field} ${full ? styles.full : ''} ${error ? styles.invalid : ''}`} htmlFor={id}><span>{label}{required && ' *'}</span><textarea id={id} name={name} required={required} rows={4} placeholder="Add details" aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} />{error && <small className={styles.error} id={`${id}-error`}>{error}</small>}</label> }
function Select({ label, name, options, required, error }: { label: string; name: string; options: readonly string[]; required?: boolean; error?: string }) { const id = `vendor-${name}`; return <label className={`${styles.field} ${error ? styles.invalid : ''}`} htmlFor={id}><span>{label}{required && ' *'}</span><div className={styles.selectWrap}><select id={id} name={name} required={required} defaultValue="" aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined}><option value="" disabled>Select an option</option>{options.map(option => <option key={option}>{option}</option>)}</select><ChevronDown size={16} /></div>{error && <small className={styles.error} id={`${id}-error`}>{error}</small>}</label> }
function Upload({ label, name, required, error }: { label: string; name: string; required?: boolean; error?: string }) { const id = `vendor-${name}`; return <label className={`${styles.field} ${styles.upload} ${error ? styles.invalid : ''}`} htmlFor={id}><span>{label}{required && ' *'}</span><span className={styles.uploadBox}><FileUp size={21} /><b>Choose PDF</b><small>Maximum recommended: 10 MB</small></span><input id={id} type="file" name={name} accept="application/pdf,.pdf" required={required} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} />{error && <small className={styles.error} id={`${id}-error`}>{error}</small>}</label> }
