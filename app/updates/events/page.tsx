"use client";
import { useEffect, useRef, useState, useCallback } from "react";

import { ArrowRight, MessageCircle, Clock } from "lucide-react";

import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import { ReactNode } from "react";
import "./events.css";



// section 2

const FOCUS_AREAS = [
  { num: "01", text: "Industry exhibitions and trade interactions" },
  { num: "02", text: "Project milestones and site updates" },
  { num: "03", text: "Team participation and technical sessions" },
  { num: "04", text: "Customer, partner and public communication" },
];


// section 3

const SECONDARY_ITEMS = [
  {
    num: "01",
    kicker: "Technical Engagement",
    title: "Discussions around RO, STP, ETP and ZLD applications.",
    text: "Events help WTE present treatment capabilities, process understanding and project-ready solutions for different industrial and infrastructure needs.",
    linkLabel: "View Types",
    href: "#event-types",
  },
  {
    num: "02",
    kicker: "Project Communication",
    title: "Project milestones shared through structured event updates.",
    text: "Site activity, manufacturing readiness, commissioning support and project achievements can be communicated clearly through event-led updates.",
    linkLabel: "View Timeline",
    href: "#events-timeline",
  },
  {
    num: "03",
    kicker: "Team Presence",
    title: "Team participation that represents WTE\u2019s execution culture.",
    text: "Events also highlight the people behind WTE\u2019s design, manufacturing, quality, project execution and customer support functions.",
    linkLabel: "Read More",
    href: "#events-overview",
  },
];


//  section 4

type Status = "upcoming" | "recent" | "archive";
 
const TIMELINE_ENTRIES: {
  date: string;
  status: Status;
  statusLabel: string;
  kicker: string;
  title: string;
  text: string;
  meta: string[];
}[] = [
  {
    date: "18",
    status: "upcoming",
    statusLabel: "Upcoming",
    kicker: "Exhibition / Industry Meet",
    title: "WTE participation in water and wastewater treatment industry engagement.",
    text: "Designed for showcasing treatment plant capabilities, application knowledge and customer-focused solutions across industrial and commercial sectors.",
    meta: ["Industry", "Water Treatment", "Public Update"],
  },
  {
    date: "09",
    status: "recent",
    statusLabel: "Recent",
    kicker: "Project Milestone",
    title: "Project-side update connected to plant execution and commissioning support.",
    text: "A milestone-driven update that reflects coordination between engineering, production, quality, logistics and site execution teams.",
    meta: ["Projects", "Execution", "Team Coordination"],
  },
  {
    date: "24",
    status: "archive",
    statusLabel: "Archive",
    kicker: "Team Engagement",
    title: "Internal engagement focused on teamwork, delivery discipline and service readiness.",
    text: "Events also support stronger communication within WTE teams, helping connect project goals with execution standards and customer expectations.",
    meta: ["People", "Operations", "Service Focus"],
  },
];



//  section 5

type EventType = {
  key: string;
  title: string;
  text: string;
  linkLabel: string;
  href: string;
  icon: ReactNode;
};
 
const EVENT_TYPES: EventType[] = [
  {
    key: "exhibitions",
    title: "Exhibitions",
    text: "Industry platforms where WTE can present its treatment plant capabilities, applications and sector experience.",
    linkLabel: "View Events",
    href: "#events-timeline",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 22V9.5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2V22" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M8 22v-7h12v7M9 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.5 22h21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "technical",
    title: "Technical Sessions",
    text: "Conversations around RO, STP, ETP, ZLD, desalination and wastewater treatment requirements.",
    linkLabel: "View Focus",
    href: "#event-highlights",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 20.5h16M8 18V8h12v10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 11h7M10.5 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 18l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "project",
    title: "Project Moments",
    text: "Important updates from manufacturing, inspection, dispatch, installation and commissioning milestones.",
    linkLabel: "View Milestones",
    href: "#events-timeline",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 20V8.5h16V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M9 20v-5h10v5M10 11.5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 20h20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "team",
    title: "Team Engagements",
    text: "People-focused moments that reflect coordination across design, production, quality, execution and service teams.",
    linkLabel: "View Culture",
    href: "#events-overview",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M10.5 13a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM19 13.5a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M5.5 21c.7-3.3 2.5-5.2 5-5.2s4.3 1.9 5 5.2M15.5 17c.8-.7 1.9-1.1 3.2-1.1 2.2 0 3.8 1.6 4.3 4.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];



//  section 6

const CONTACT_POINTS = [
  { num: "01", text: "Industry and exhibition participation" },
  { num: "02", text: "Project and technical communication" },
  { num: "03", text: "Customer and partner engagement" },
];






// Functions

// Export default

export default function page() {
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
                  WTE Events & Industry <span>Exhibitions</span>
                </h1>
                <p>
                  Industry events, project moments, exhibitions and team engagements that reflect WTE’s active presence in water and wastewater treatment.
                </p>
                <div className="life-hero-actions">
                  <a className="btn btn-green" href="#gallery">
                    View Event Highlights
                  </a>
                  <a className="btn btn-outline-white" href="#contact-footer">
                    Connect With WTE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

    <section className="ev-section" id="events-overview">
      <div className="ev-container">
        {/* Styled like an event pass / ticket stub — a main panel and a
            torn-off stub, since this section is specifically about
            events, not a generic two-column layout. */}
        <div className="ev-pass">
          <div className="ev-main">
            <span className="ev-label">Events Overview</span>
            <h2 className="ev-title">
              Where WTE&rsquo;s work connects with people, projects and
              industry conversations.
            </h2>
            <p className="ev-copy">
              WTE&rsquo;s events page highlights the company&rsquo;s active
              involvement in exhibitions, technical discussions, customer
              interactions, team engagements and project-related moments
              across the water and wastewater treatment sector.
            </p>
            <p className="ev-copy">
              From industry participation to site-level milestones, these
              updates show how WTE communicates its engineering
              capabilities, manufacturing strength and execution-focused
              approach beyond the project floor.
            </p>
          </div>
 
          <div className="ev-divider" aria-hidden="true">
            <span className="ev-notch ev-notch--top" />
            <span className="ev-divider-line" />
            <span className="ev-notch ev-notch--bottom" />
          </div>
 
          <div className="ev-stub">
            <h3 className="ev-stub-title">Event focus areas</h3>
            <p className="ev-stub-copy">
              Events at WTE are connected to practical work — project
              delivery, treatment technologies, customer needs and
              sector-level collaboration.
            </p>
            <div className="ev-stub-list">
              {FOCUS_AREAS.map((item) => (
                <div className="ev-stub-item" key={item.num}>
                  <span className="ev-stub-num">{item.num}</span>
                  <span className="ev-stub-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="eh-section" id="event-highlights">
      <div className="eh-container">
        <div className="eh-header">
          <span className="eh-label">Event Highlights</span>
          <h2 className="eh-title">Important WTE moments captured through events.</h2>
          <p className="eh-sub">
            A focused view of WTE&rsquo;s participation, project activity and
            industry-facing communication across key events and milestones.
          </p>
        </div>
 
        {/* Gallery wall: framed cards at slight, alternating angles —
            "moments captured" reads more naturally as a wall of framed
            shots than as a data table or dashboard layout. */}
        <div className="eh-wall">
          <article className="eh-frame eh-frame--feature">
            <span className="eh-pin" aria-hidden="true" />
            <div className="eh-photo">
              <span className="eh-photo-mark">▣</span>
              <span className="eh-photo-label">Event Image</span>
            </div>
            <div className="eh-frame-body">
              <span className="eh-kicker">Featured Event</span>
              <span className="eh-eyebrow">Industry Participation</span>
              <h3 className="eh-frame-title">
                WTE connects with industry stakeholders through water and
                wastewater treatment events.
              </h3>
              <p className="eh-frame-text">
                WTE&rsquo;s event presence reflects its commitment to
                practical solutions, technical conversations and stronger
                engagement with customers, partners and industry
                professionals.
              </p>
              <a className="eh-link" href="#events-contact">
                Explore Event Focus <span className="eh-link-arrow">→</span>
              </a>
            </div>
          </article>
 
          {SECONDARY_ITEMS.map((item, i) => (
            <article className={`eh-frame eh-frame--${i + 1}`} key={item.num}>
              <span className="eh-pin" aria-hidden="true" />
              <div className="eh-photo eh-photo--small">
                <span className="eh-photo-num">{item.num}</span>
              </div>
              <div className="eh-frame-body">
                <span className="eh-kicker">{item.kicker}</span>
                <h3 className="eh-frame-title eh-frame-title--small">{item.title}</h3>
                <p className="eh-frame-text">{item.text}</p>
                <a className="eh-link" href={item.href}>
                  {item.linkLabel} <span className="eh-link-arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="et-section" id="events-timeline">
      <div className="et-container">
        <div className="et-header">
          <span className="et-label">Event Timeline</span>
          <h2 className="et-title">A clear archive of WTE event updates.</h2>
          <p className="et-sub">
            Use this section to keep upcoming, ongoing and completed events
            organized with dates, context and purpose.
          </p>
        </div>
 
        {/* Tear-off calendar pages — a date-driven metaphor that fits an
            events timeline more directly than a plain card or table. */}
        <div className="et-calendar-row">
          {TIMELINE_ENTRIES.map((entry) => (
            <article className={`et-card et-card--${entry.status}`} key={entry.title}>
              <div className="et-card-header">
                <span className="et-card-status">{entry.statusLabel}</span>
                <strong className="et-card-date">{entry.date}</strong>
              </div>
              <span className="et-card-tear" aria-hidden="true" />
 
              <div className="et-card-body">
                <span className="et-kicker">{entry.kicker}</span>
                <h3 className="et-card-title">{entry.title}</h3>
                <p className="et-card-text">{entry.text}</p>
                <div className="et-meta">
                  {entry.meta.map((tag) => (
                    <span className="et-meta-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="et-card-link" href="#">
                  Details <span className="et-link-arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="ety-section" id="event-types">
      <div className="ety-container">
        <div className="ety-header">
          <span className="ety-label">Event Types</span>
          <h2 className="ety-title">Events that represent different sides of WTE.</h2>
          <p className="ety-sub">
            WTE event updates can cover external participation, technical
            discussions, project moments and team-led communication.
          </p>
        </div>
 
        {/* One continuous divided strip instead of four separate cards —
            reads like a segmented control rather than a grid of tiles. */}
        <div className="ety-strip">
          {EVENT_TYPES.map((type, i) => (
            <article className={`ety-seg ety-seg--${i + 1}`} key={type.key}>
              <div className="ety-icon">{type.icon}</div>
              <h3 className="ety-seg-title">{type.title}</h3>
              <p className="ety-seg-text">{type.text}</p>
              <a className="ety-link" href={type.href}>
                {type.linkLabel} <span className="ety-link-arrow">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="evc-section" id="events-contact">
      <div className="evc-container">
        <div className="evc-header">
          <span className="evc-label">Event Communication</span>
          <h2 className="evc-title">
            Connect with WTE for event participation and project
            communication.
          </h2>
          <p className="evc-sub">
            Whether it is an exhibition, technical discussion, project
            milestone or industry interaction, WTE&rsquo;s event
            communication is built around clear information, practical
            solutions and meaningful engagement.
          </p>
        </div>
 
        {/* Signal beacons instead of a plain numbered list — each point
            "broadcasts" with a pulsing ring, echoing the idea of
            communication/connection rather than just enumerating items. */}
        <div className="evc-beacons">
          {CONTACT_POINTS.map((point) => (
            <div className="evc-beacon" key={point.num}>
              <div className="evc-signal" aria-hidden="true">
                <span className="evc-ring evc-ring--1" />
                <span className="evc-ring evc-ring--2" />
                <span className="evc-dot" />
              </div>
              <span className="evc-stem" aria-hidden="true" />
              <strong className="evc-num">{point.num}</strong>
              <span className="evc-text">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="icb-section" id="industry-cta">
      <div className="icb-container">
        <div className="icb-panel">
          <div className="icb-copy">
            {/* <span className="icb-tag">Let's Talk</span> */}
            <h2 className="icb-title">
              Planning to attend or host a water treatment event?
            </h2>
            <p className="icb-sub">
                Connect with WTE for exhibitions, conferences, project showcases or collaboration opportunities in water and wastewater treatment.
            </p>
          </div>
 
          <div className="icb-actions">
            <a className="icb-btn icb-btn--quote" href="#contact-footer">
              Contact WTE <ArrowRight size={16} />
            </a>
            <a
              className="icb-btn icb-btn--whatsapp"
              href="https://wa.me/918888889611"
              rel="noopener"
              target="_blank"
            >
              <MessageCircle size={16} /> View Events
            </a>
            <div className="icb-note">
              <Clock size={14} />
              Typical response within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>

      </main>

      <Footer />
    </div>
  );
}
