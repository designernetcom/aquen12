import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight, type LucideIcon } from "lucide-react";

type AdminSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  actions: { label: string; href: string; icon: LucideIcon }[];
  items: { label: string; value: string; note: string }[];
};

export default function AdminSection({ eyebrow, title, description, icon: Icon, accent, actions, items }: AdminSectionProps) {
  return (
    <>
      <div className="admin-row admin-section-hero">
        <div>
          <p className="admin-eyebrow">{eyebrow}</p>
          <h1 className="admin-title">{title}</h1>
          <p className="admin-page-description">{description}</p>
        </div>
        <span className="admin-page-hero-icon" style={{ "--hero-accent": accent } as React.CSSProperties}><Icon size={30} strokeWidth={1.5} /></span>
      </div>

      <section className="admin-grid admin-section-stats">
        {items.map((item) => <article className="admin-card" key={item.label}><span className="admin-muted admin-stat-label">{item.label}</span><strong className="admin-section-stat-value">{item.value}</strong><span className="admin-muted admin-section-stat-note"><CheckCircle2 size={13} /> {item.note}</span></article>)}
      </section>

      <section className="admin-section-workspace">
        <article className="admin-card admin-section-feature">
          <div className="admin-section-feature-icon" style={{ background: `${accent}18`, color: accent }}><Icon size={22} /></div>
          <div><p className="admin-eyebrow">Workspace module</p><h2>Everything in one clear view.</h2><p className="admin-muted">Use the shortcuts to manage records, review publishing status, and keep the live website consistent.</p></div>
          <div className="admin-section-feature-line"><span /><span /><span /><span /><span /></div>
        </article>
        <article className="admin-card"><div className="admin-section-head"><div><h2>Common actions</h2><p>Jump into the work that matters.</p></div><ChevronRight size={18} color={accent} /></div><div className="admin-quick-list">{actions.map(({ label, href, icon: ActionIcon }) => <Link className="admin-quick-action" href={href} key={href}><span className="admin-quick-action-icon"><ActionIcon size={16} /></span><span>{label}<small>Open module</small></span><ArrowUpRight size={14} style={{ marginLeft: "auto", color: "#8b9996" }} /></Link>)}</div></article>
      </section>
    </>
  );
}
