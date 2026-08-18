'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight, Award, BadgeCheck, Check, Droplets, Gauge,
  Handshake, HeartHandshake, Leaf, Lightbulb, Mail, Quote,
  ShieldCheck, Sparkles, Target, UsersRound, Waves,
} from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'

import Header from '../layouts/header'
import Footer from '../layouts/footer'
import styles from './Leadership.module.css'
import './leader.css'

const leaders = [
  { name: 'Aarav Mehta', role: 'Director — Engineering', image: '/banner/1 (1).png', text: 'Guides process engineering and technical delivery with a focus on robust, efficient treatment systems.' },
  { name: 'Meera Kulkarni', role: 'Director — Operations', image: '/banner/1 (3).png', text: 'Builds disciplined project and service operations that protect quality from planning through handover.' },
  { name: 'Rohan Deshmukh', role: 'Head — Business Development', image: '/banner/1 (4).png', text: 'Develops lasting customer partnerships by translating complex water challenges into clear solutions.' },
  { name: 'Ananya Iyer', role: 'Head — Sustainability & Quality', image: '/banner/1 (5).png', text: 'Champions responsible engineering, compliance, and continuous improvement across the organization.' },
]

const approaches = [
  [UsersRound, 'Collaborative Decision-Making', 'Leaders work closely with teams to ensure transparent, informed, and effective decisions.'],
  [Lightbulb, 'Innovation-Driven Approach', 'Continuous focus on advanced technologies, smarter processes, and sustainable practices.'],
  [HeartHandshake, 'Customer-Centric Leadership', 'Prioritizing customer success and partnerships that create value well beyond delivery.'],
  [Gauge, 'Operational Excellence', 'Ensuring quality, efficiency, and timely project execution across every operation.'],
] as const

const values = [
  [ShieldCheck, 'Integrity'], [Lightbulb, 'Innovation'], [Leaf, 'Sustainability'],
  [Award, 'Quality'], [Target, 'Customer Commitment'], [Handshake, 'Teamwork'],
] as const

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-65px' }} transition={{ duration: .66, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function SectionHead({ eyebrow, title, copy, center = false, light = false }: { eyebrow: string; title: React.ReactNode; copy?: string; center?: boolean; light?: boolean }) {
  return <Reveal className={`${styles.sectionHead} ${center ? styles.center : ''} ${light ? styles.light : ''}`}><span className={styles.eyebrow}><i />{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</Reveal>
}

export default function LeadershipPage() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const heroDrift = useTransform(scrollYProgress, [0, .2], [0, reduced ? 0 : 55])

  return <div className={styles.page}>
    <Header />
    <main>
      {/* <section className={styles.hero} aria-labelledby="leadership-title">
        <motion.div className={styles.heroImage} style={{ y: heroDrift }}><Image src="/banner/1 (2).png" alt="AQUEN water treatment engineering leadership" fill priority sizes="100vw" /></motion.div>
        <div className={styles.heroOverlay} /><div className={styles.heroGrid} aria-hidden="true" />
        <motion.div className={styles.ripple} aria-hidden="true" animate={reduced ? undefined : { scale: [1, 1.18, 1], opacity: [.24, .06, .24] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
        <div className={styles.particles} aria-hidden="true">{Array.from({ length: 10 }, (_, i) => <i key={i} />)}</div>
        <motion.div className={`${styles.shell} ${styles.heroContent}`} initial={reduced ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .86, ease: [0.22, 1, 0.36, 1] }}>
          <span className={styles.heroKicker}><Sparkles size={16} /> People / Purpose / Progress</span>
          <h1 id="leadership-title">Leadership</h1>
          <p>Meet the visionary leaders driving AQUEN Fluid’s commitment to innovation, sustainability, and excellence in water and wastewater treatment.</p>
          <a className={styles.primaryButton} href="#leaders">Meet Our Leaders <ArrowRight size={18} /></a>
          <span className={styles.heroNote}><BadgeCheck size={17} /> Experience guided by purpose</span>
        </motion.div>
        <div className={styles.heroWave} aria-hidden="true" />
      </section> */}

        <section className="life-hero" id="hero">
          <div className="container">
            <div className="life-hero-grid">
              <div className="life-hero-copy">
                <span className="life-kicker">Aquen Fluid Leadership</span>
                <h1>
                  Leadership Driving <span>Water Excellence</span>
                </h1>
                <p>
                  Meet the leaders behind Aquen&apos;s success in delivering innovative water and wastewater treatment solutions.
                </p>

                <p>
                  With decades of industry expertise, our leadership team drives engineering excellence, innovation, and customer-focused execution, ensuring sustainable, reliable, and high-performance water treatment solutions for industrial, commercial, institutional, and municipal sectors.
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

      <section className={styles.intro} aria-labelledby="intro-title"><div className={`${styles.shell} ${styles.introGrid}`}>
        <Reveal className={styles.introCopy}>
          <span className={styles.eyebrow}><i /> Leadership philosophy</span>
          <h2 id="intro-title">Guided by Vision, <em>Driven by Excellence</em></h2>
          <p>AQUEN’s leadership combines deep engineering perspective with a clear commitment to customers, people, and the environment. We encourage thoughtful innovation, stay accountable for outcomes, and build sustainable water solutions designed to perform for years.</p>
          <blockquote><Quote size={24} /><p>Leadership means creating the clarity, confidence, and conditions for every team to do its best work.</p></blockquote>
          <div className={styles.checks}>{['25+ Years of Industry Experience', 'Sustainable Water Solutions', 'Customer-Centric Approach', 'Innovation & Quality Excellence'].map(item => <span key={item}><i><Check size={14} /></i>{item}</span>)}</div>
        </Reveal>
        <Reveal className={styles.introVisual} delay={.12}>
          <Image src="/banner/leadership-img.png" alt="AQUEN leadership reviewing treatment infrastructure" fill sizes="(max-width: 900px) 100vw, 44vw" />
          <div className={styles.imageShade} /><div className={styles.visualBadge}><Droplets size={25} /><span><b>One shared direction</b>Innovation with measurable impact</span></div><span className={styles.visualCode}>AQ / VISION / 01</span>
        </Reveal>
      </div></section>

      <section className={styles.founder} id="leaders" aria-labelledby="founder-title"><div className={styles.shell}>
        <Reveal className={styles.founderCard}>
          <div className={styles.founderPortrait}><Image src="/banner/person-icon.jpg" alt="Placeholder portrait for AQUEN Fluid Founder and Managing Director" fill sizes="(max-width: 850px) 100vw, 44vw" /><div className={styles.portraitShade} /><span>Founder / 01</span></div>
          <div className={styles.founderCopy}><span className={styles.eyebrow}><i /> Founder &amp; Managing Director</span><h2 id="founder-title">Atul Singh</h2><strong>Chief Executive Officer</strong><p>With more than 25 years of experience across water treatment engineering and project execution, Atul founded AQUEN Fluid with one defining idea: every system should deliver dependable performance and responsible water use.</p><p>His leadership journey has shaped an integrated company where design, manufacturing, commissioning, and long-term service work as one. Today, he continues to guide AQUEN’s growth through technical integrity, customer trust, and a relentless focus on practical innovation.</p><blockquote><Quote size={20} />“The systems we build today must protect the water security of tomorrow.”</blockquote><div className={styles.signature}>Atul Singh <span>Leading with purpose</span></div></div>
        </Reveal>
      </div></section>

      {/* <section className={styles.team} aria-labelledby="team-title"><div className={styles.shell}>
        <SectionHead eyebrow="Leadership team" title={<>Expertise across <em>every discipline</em></>} copy="A multidisciplinary leadership group connecting engineering, operations, customer success, and sustainability." />
        <div className={styles.teamGrid}>{leaders.map((leader, i) => <Reveal className={styles.leaderCard} key={leader.name} delay={i * .07}><div className={styles.leaderImage}><Image src={leader.image} alt={`Placeholder portrait for ${leader.name}`} fill sizes="(max-width: 600px) 100vw, (max-width: 1050px) 45vw, 23vw" /><span>0{i + 1}</span></div><div className={styles.leaderCopy}><h3>{leader.name}</h3><strong>{leader.role}</strong><p>{leader.text}</p><div><a href="mailto:info@aquenfluid.com" aria-label={`Email ${leader.name}`}><Mail size={16} /></a><a href="#" aria-label={`${leader.name} on LinkedIn`}><FaLinkedinIn size={16} /></a></div></div></Reveal>)}</div>
      </div></section> */}

      <section className={styles.approach} aria-labelledby="approach-title"><div className={styles.shell}>
        <SectionHead eyebrow="How leaders work" title={<>Clear thinking. <em>Collective progress.</em></>} copy="Four principles shape how AQUEN leaders make decisions, develop teams, and deliver consistently." center />
        <div className={styles.approachGrid}>{approaches.map(([Icon, title, text], i) => <Reveal className={styles.approachCard} key={title} delay={i * .08}><span className={styles.cardNumber}>0{i + 1}</span><div className={styles.cardIcon}><Icon size={27} /></div><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
      </div></section>

      <section className={styles.values} aria-labelledby="values-title"><div className={styles.shell}>
        <SectionHead eyebrow="What guides us" title={<>Leadership <em>values</em></>} center />
        <div className={styles.valuesGrid}>{values.map(([Icon, title], i) => <Reveal className={styles.value} key={title} delay={i * .05}><Icon size={21} /><span>{title}</span><b>{String(i + 1).padStart(2, '0')}</b></Reveal>)}</div>
      </div></section>

      {/* <section className={styles.cta} aria-labelledby="cta-title"><div className={styles.ctaGrid} aria-hidden="true" /><div className={styles.ctaParticles} aria-hidden="true">{Array.from({ length: 8 }, (_, i) => <i key={i} />)}</div><Reveal className={`${styles.shell} ${styles.ctaInner}`}><span className={styles.heroKicker}><Waves size={16} /> Build the future with AQUEN</span><h2 id="cta-title">Partner with a Visionary Leadership Team</h2><p>Work with a team committed to sustainable thinking, engineering rigor, and innovative water solutions that deliver lasting value.</p><div><Link className={styles.primaryButton} href="/#contact">Contact Us <ArrowRight size={18} /></Link><Link className={styles.secondaryButton} href="/#services">Explore Our Solutions <ArrowRight size={18} /></Link></div></Reveal></section> */}
    </main>
    <Footer />
  </div>
}
