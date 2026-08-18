import Link from "next/link";
import { ArrowUpRight, Box, BriefcaseBusiness, FilePlus2, FileText, ImagePlus, Layers3, Plus, Tags, Users } from "lucide-react";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const [solutions, categories, pages, projects, users, activity] = await Promise.all([
    db.solutionPage.count({ where: { deletedAt: null } }),
    db.solutionCategory.count({ where: { deletedAt: null } }),
    db.solutionPage.count({ where: { deletedAt: null } }),
    db.project.count({ where: { deletedAt: null } }),
    db.user.count({ where: { deletedAt: null } }),
    db.activityLog.findMany({ take: 7, orderBy: { createdAt: "desc" }, include: { user: { select: { name: true } } } }),
  ]);

  const cards = [
    { label: "Solutions", value: solutions, icon: Box },
    { label: "Categories", value: categories, icon: Tags },
    { label: "Pages", value: pages, icon: FileText },
    { label: "Projects", value: projects, icon: BriefcaseBusiness },
    { label: "Team members", value: users, icon: Users },
  ];
  const chart = [
    { label: "Solutions", value: solutions },
    { label: "Categories", value: categories },
    { label: "Pages", value: pages },
    { label: "Projects", value: projects },
    { label: "Users", value: users },
  ];
  const maximum = Math.max(...chart.map((item) => item.value), 1);
  const quickActions = [
    { label: "New solution", note: "Build a solution page", href: "/admin/pages", icon: FilePlus2 },
    { label: "Add category", note: "Extend your navigation", href: "/admin/categories", icon: Plus },
    { label: "Upload media", note: "Add reusable assets", href: "/admin/media", icon: ImagePlus },
  ];

  return (
    <>
      <div className="admin-row" style={{ marginBottom: 30 }}>
        <div>
          <p className="admin-eyebrow">Workspace overview</p>
          <h1 className="admin-title">Good to see you.</h1>
          <p className="admin-page-description">A clear view of your content, publishing activity, and website structure.</p>
        </div>
        <Link className="admin-button" href="/admin/pages"><Plus size={15} /> Create content</Link>
      </div>

      <section className="admin-grid">
        {cards.map(({ label, value, icon: Icon }) => (
          <article className="admin-card admin-stat-card" key={label}>
            <span className="admin-stat-icon"><Icon size={18} strokeWidth={1.8} /></span>
            <div className="admin-stat-label">{label}</div>
            <div className="admin-stat">{value.toLocaleString()}</div>
            <span className="admin-stat-trend">Live total</span>
          </article>
        ))}
      </section>

      <section className="admin-dashboard-grid">
        <article className="admin-card">
          <div className="admin-section-head">
            <div><h2>Content landscape</h2><p>Current distribution across your workspace</p></div>
            <Layers3 size={18} color="#087f73" />
          </div>
          <div className="admin-chart" aria-label="Content totals chart">
            {chart.map((item) => (
              <div className="admin-chart-column" key={item.label} title={`${item.label}: ${item.value}`}>
                <div className="admin-chart-bar" style={{ height: `${Math.max(8, (item.value / maximum) * 92)}%` }} />
                <span className="admin-chart-label">{item.label}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="admin-card">
          <div className="admin-section-head"><div><h2>Quick actions</h2><p>Common publishing tasks</p></div></div>
          <div className="admin-quick-list">
            {quickActions.map(({ label, note, href, icon: Icon }) => (
              <Link className="admin-quick-action" href={href} key={label}>
                <span className="admin-quick-action-icon"><Icon size={16} /></span>
                <span>{label}<small>{note}</small></span>
                <ArrowUpRight size={14} style={{ marginLeft: "auto", color: "#8b9996" }} />
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="admin-card" style={{ marginTop: 18 }}>
        <div className="admin-section-head"><div><h2>Recent activity</h2><p>The latest changes across your content studio</p></div><Link className="admin-login-link" href="/admin/settings">View settings</Link></div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead><tr><th>Team member</th><th>Activity</th><th>Resource</th><th>Date &amp; time</th></tr></thead>
            <tbody>
              {activity.length ? activity.map((item) => (
                <tr key={String(item.id)}>
                  <td><strong>{item.user?.name || "System"}</strong></td>
                  <td><span className="admin-badge">{item.action}</span></td>
                  <td>{item.entityType?.replaceAll("_", " ") || "General"}</td>
                  <td className="admin-muted">{item.createdAt.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</td>
                </tr>
              )) : <tr><td colSpan={4} className="admin-muted">No recent activity yet. Your published changes will appear here.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
