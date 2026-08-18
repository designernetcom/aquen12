import Link from 'next/link'
import { ArrowUpRight, Droplets, Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

import styles from './footer.module.css'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About AQUEN', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Projects', href: '/#process' },
]

const solutions = [
  'RO & UF systems',
  'ETP / STP plants',
  'Plant operations & maintenance',
  'Retrofitting & automation',
]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.container}>
        <section className={styles.cta} aria-labelledby="footer-cta-title">
          <div>
            <span className={styles.eyebrow}>Have a water challenge?</span>
            <h2 style={{color:'white'}}  id="footer-cta-title">Let&apos;s engineer the right treatment solution.</h2>
          </div>
          <Link href="/#contact" className={styles.ctaButton}>
            Start a conversation <ArrowUpRight size={18} />
          </Link>
        </section>

        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.brandName} aria-label="AQUEN home">
              <span className={styles.brandMark}><Droplets size={24} /></span>
              <span>AQUEN <small>FLUID</small></span>
            </Link>
            <p>Reliable water and wastewater engineering for industrial, commercial, institutional and municipal applications.</p>
            <div className={styles.socials} aria-label="Social media">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="X"><FaXTwitter /></a>
            </div>
          </div>

          <nav className={styles.column} aria-label="Footer navigation">
            <h3>Explore</h3>
            {quickLinks.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}
          </nav>

          <div className={styles.column}>
            <h3>Core solutions</h3>
            {solutions.map((solution) => <span key={solution}>{solution}</span>)}
          </div>

          <div className={`${styles.column} ${styles.contact}`}>
            <h3>Contact</h3>
            <div className={styles.contactItem}><MapPin size={18} /><span>Sr. 165/2/9, Alankapuram Rd, opp. Yashobhumi Society, Adarsha Nagar, Charholi Budruk, Pimpri-Chinchwad, Maharashtra 412105</span></div>
            <a className={styles.contactItem} href="tel:+919622554445"><Phone size={18} /><span>+91 962255 4445</span></a>
            <a className={styles.contactItem} href="mailto:info@aquenfluid.com"><Mail size={18} /><span>info@aquenfluid.com</span></a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} AQUEN Fluid. All rights reserved.</span>
          <span>Transforming water. Preserving the future.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
