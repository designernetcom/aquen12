"use client";

import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import styles from './header.module.css'
import Link from 'next/link';
import { STATIC_SOLUTION_CATEGORIES } from '@/lib/data/static-solutions';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Industries', to: '/industries-we-serve' },
  { label: 'Contact', to: '/contact' },
]

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Infrastructure', to: '/infrastructure' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Careers', to: '/careers' },
  { label: 'Vendor', to: '/vendor' },
]

const PROJECTS_LINKS = [
  { label: 'OnGoing', to: '/our-projects/ongoing-projects' },
  { label: 'Completed', to: '/our-projects/projects-completed' },
]

type MobileSectionKey = 'company' | 'solutions' | 'projects';

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<MobileSectionKey | null>(null)
  const solutionCategories = STATIC_SOLUTION_CATEGORIES

  /*
   * Dynamic Solutions navigation is paused for now in favor of the static menu above.
   * Restore this effect when the Solutions content is ready to come from the API again.
   *
   * useEffect(() => {
   *   const controller = new AbortController()
   *   fetch('/api/public/navigation', { signal: controller.signal })
   *     .then((response) => response.ok ? response.json() : Promise.reject(new Error('Navigation unavailable')))
   *     .then(({ data }) => setSolutionCategories(data.map((category: { name: string; slug: string; subcategories: { name: string; pages: { title: string; slug: string }[] }[] }) => ({
   *       title: category.name,
   *       links: category.subcategories.flatMap((subcategory) => subcategory.pages.map((page) => ({ label: page.title, to: `/solutions/${page.slug}` }))),
   *     }))))
   *     .catch(() => undefined)
   *   return () => controller.abort()
   * }, [])
   */

  const mobileSections: { key: MobileSectionKey; label: string; count: number }[] = [
    { key: 'company', label: 'Company', count: COMPANY_LINKS.length },
    { key: 'solutions', label: 'Solutions', count: solutionCategories.length },
    { key: 'projects', label: 'Projects', count: PROJECTS_LINKS.length },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while open, reset accordion on close, close on Escape
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeMenu()
      }
      window.addEventListener('keydown', onKey)
      return () => {
        window.removeEventListener('keydown', onKey)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  function closeMenu() {
    setMenuOpen(false)
    setOpenSection(null)
  }
  const toggleSection = (key: MobileSectionKey) => {
    setOpenSection((prev) => (prev === key ? null : key))
  }

  return (
    <div className={styles['navbar-wrap']}>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.logo}>
          <img src="/aquenfluid-logo.png" alt="AQUEN Water and Wastewater Solutions" style={{ height: 52 }} />
        </Link>

        <nav className={styles['nav-links']} aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <div className={styles.dropdown}>
            <button className={styles['dropdown-trigger']} type="button">
              Company <ChevronDown size={15} aria-hidden="true" />
            </button>
            <div className={styles['dropdown-menu']}>
              {COMPANY_LINKS.map((link) => (
                <Link key={link.label} href={link.to}>{link.label}</Link>
              ))}
            </div>
          </div>

          <div className={`${styles.dropdown} ${styles["mega-dropdown"]}`}>
            <button className={styles["dropdown-trigger"]} type="button">
              Solutions <ChevronDown size={15} aria-hidden="true" />
            </button>
            <div className={styles["mega-menu"]}>
              <div className={styles["mega-menu-head"]}>
                <div>
                  <span className={styles["mega-menu-kicker"]}>Solutions directory</span>
                  <p>Water treatment systems, components, and fabrication.</p>
                </div>
                <span className={styles["mega-menu-count"]}>04 categories</span>
              </div>
              <div className={styles["mega-menu-grid"]}>
                {solutionCategories.map((category) => (
                  <div key={category.title} className={styles["mega-col"]}>
                    <h4>{category.title}</h4>
                    {category.links.map((link) => (
                      <Link key={link.label} href={link.to}>{link.label}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.dropdown}>
            <button className={styles['dropdown-trigger']} type="button">
              Projects <ChevronDown size={15} aria-hidden="true" />
            </button>
            <div className={styles['dropdown-menu']}>
              {PROJECTS_LINKS.map((link) => (
                <Link key={link.label} href={link.to}>{link.label}</Link>
              ))}
            </div>
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <Link key={link.label} href={link.to}>{link.label}</Link>
          ))}
        </nav>

        <div className={styles['navbar-actions']}>
          <Link href="/contact" className={`btn btn-primary ${styles['btn-primary']}`}>
            Get Quote <ArrowRight size={16} />
          </Link>
          <button
            className={styles['menu-toggle']}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            type="button"
          >
            <Menu size={24} color="#052C65" />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`${styles['mm-backdrop']} ${menuOpen ? styles['mm-backdrop-open'] : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-nav-drawer"
        className={`${styles['mm-drawer']} ${menuOpen ? styles['mm-drawer-open'] : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className={styles['mm-grid']} aria-hidden="true" />

        <div className={styles['mm-head']}>
          <div className={styles['mm-brand']}>
            <img src="/aquenfluid-logo.png" alt="AQUEN" style={{ height: 30 }} />
          </div>
          <button
            className={styles['mm-close']}
            onClick={closeMenu}
            aria-label="Close menu"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles['mm-status']}>
          <span className={styles['mm-status-dot']} />
          Menu online
        </div>

        <nav className={styles['mm-body']} aria-label="Mobile navigation links">
          <div className={styles['mm-quicklinks']}>
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.to} onClick={closeMenu} className={styles['mm-pill']}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles['mm-panels']}>
            {mobileSections.map(({ key, label, count }) => (
              <div key={key} className={styles['mm-panel']}>
                <button
                  type="button"
                  className={`${styles['mm-panel-trigger']} ${openSection === key ? styles['mm-panel-trigger-open'] : ''}`}
                  onClick={() => toggleSection(key)}
                  aria-expanded={openSection === key}
                >
                  <span className={styles['mm-panel-label']}>
                    <span className={styles['mm-panel-index']}>{count.toString().padStart(2, '0')}</span>
                    {label}
                  </span>
                  <ChevronDown
                    size={17}
                    className={`${styles['mm-chevron']} ${openSection === key ? styles['mm-chevron-open'] : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <div className={`${styles['mm-panel-body']} ${openSection === key ? styles['mm-panel-body-open'] : ''}`}>
                  <div className={styles['mm-panel-inner']}>
                    {key === 'company' && COMPANY_LINKS.map((link) => (
                      <Link key={link.label} href={link.to} onClick={closeMenu}>{link.label}</Link>
                    ))}

                    {key === 'projects' && PROJECTS_LINKS.map((link) => (
                      <Link key={link.label} href={link.to} onClick={closeMenu}>{link.label}</Link>
                    ))}

                    {key === 'solutions' && solutionCategories.map((category) => (
                      <div key={category.title} className={styles['mm-subgroup']}>
                        <strong>{category.title}</strong>
                        {category.links.map((link) => (
                          <Link key={link.label} href={link.to} onClick={closeMenu}>{link.label}</Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </nav>

        <div className={styles['mm-footer']}>
          <Link href="/contact" className={styles['mm-cta']} onClick={closeMenu}>
            Get Quote <ArrowRight size={16} />
          </Link>
          <div className={styles['mm-contact-row']}>
            <a href="tel:+919622554445" className={styles['mm-contact-chip']}>
              <Phone size={14} aria-hidden="true" /> Call us
            </a>
            <a href="mailto:info@aquenfluid.com" className={styles['mm-contact-chip']}>
              <Mail size={14} aria-hidden="true" /> Email us
            </a>
          </div>
        </div>
      </aside>
    </div>
  )
}
