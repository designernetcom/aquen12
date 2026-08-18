import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Bell, Box, BriefcaseBusiness, ChevronRight, Droplets, ExternalLink,
  FileText, FolderTree, Globe2, Image, LayoutDashboard, LogOut,
  Search, Settings, Tags, UserRound, Users,
} from "lucide-react";
import { auth, signOut } from "@/lib/auth";

const workspaceLinks = [
  ["Overview", "/admin", LayoutDashboard],
  ["Solutions", "/admin/solutions", Box],
  ["Categories", "/admin/categories", Tags],
  ["Sub categories", "/admin/subcategories", FolderTree],
  ["Pages", "/admin/pages", FileText],
  ["Projects", "/admin/projects", BriefcaseBusiness],
  ["Industries", "/admin/industries", Globe2],
] as const;

const systemLinks = [
  ["Media library", "/admin/media", Image],
  ["SEO manager", "/admin/seo", Search],
  ["Users", "/admin/users", Users],
  ["Settings", "/admin/settings", Settings],
  ["Profile", "/admin/profile", UserRound],
] as const;

function NavLinks({ links }: { links: typeof workspaceLinks | typeof systemLinks }) {
  return links.map(([label, href, Icon]) => (
    <Link href={href} key={href}><Icon size={17} strokeWidth={1.8} />{label}</Link>
  ));
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");
  const initials = session.user.name?.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "AD";

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link href="/admin" className="admin-brand">
          <span className="admin-brand-mark"><Droplets size={20} /></span>
          <span className="admin-brand-copy"><strong>AQUEN Studio</strong><small>Content workspace</small></span>
        </Link>

        <div className="admin-nav-label">Workspace</div>
        <nav className="admin-nav" aria-label="Workspace navigation"><NavLinks links={workspaceLinks} /></nav>
        <div className="admin-nav-label">Manage</div>
        <nav className="admin-nav" aria-label="System navigation"><NavLinks links={systemLinks} /></nav>

        <div className="admin-sidebar-footer">
          <div className="admin-sidebar-card">
            <strong>View live website</strong>
            <p>Preview published changes in a new tab.</p>
            <Link href="/" target="_blank">Open website <ExternalLink size={13} /></Link>
          </div>
          <form action={async () => { "use server"; await signOut({ redirectTo: "/admin/login" }); }}>
            <button className="admin-logout"><LogOut size={17} /> Sign out</button>
          </form>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-context"><span className="admin-live-dot" /> Production workspace <ChevronRight size={13} /> AQUEN Fluid</div>
          <div className="admin-top-actions">
            <button className="admin-icon-button" aria-label="Notifications"><Bell size={17} /></button>
            <div className="admin-user">
              <span className="admin-avatar">{initials}</span>
              <span className="admin-user-copy"><strong>{session.user.name}</strong><small>{session.user.role}</small></span>
            </div>
          </div>
        </header>
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}
