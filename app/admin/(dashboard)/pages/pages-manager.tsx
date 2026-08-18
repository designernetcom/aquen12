"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Eye, Pencil, Plus, RefreshCw, Trash2, X } from "lucide-react";
import SectionsEditor, { type CmsSection } from "./sections-editor";

type Subcategory = {
  id: number;
  name: string;
  slug: string;
  category: { name: string; slug: string };
};
type SolutionPage = {
  id: number;
  subcategoryId: number;
  title: string;
  slug: string;
  excerpt: string | null;
  sortOrder: number;
  status: string;
  seoTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  canonicalUrl: string | null;
  robots: string | null;
  twitterCard: string | null;
  subcategory: Subcategory;
  sections?: CmsSection[];
  _count?: { sections: number };
};
type FormState = {
  subcategoryId: string;
  title: string;
  slug: string;
  excerpt: string;
  sortOrder: number;
  status: string;
  seoTitle: string;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl: string;
  robots: string;
  twitterCard: string;
  sections: CmsSection[];
};

const defaultSections = (title: string): CmsSection[] => [
  {
    type: "HERO",
    title: "Hero",
    sortOrder: 0,
    isEnabled: true,
    content: {
      badge: "WATER & WASTEWATER TREATMENT SOLUTIONS",
      title,
      highlight: "Engineered for Reliable Performance",
      description: `AQUEN designs and manufactures high-performance ${title.toLowerCase()} for industrial, commercial, and municipal applications.`,
      backgroundImage: "/banner/water-treatment.png",
    },
  },

  {
    type: "OVERVIEW",
    title: "Overview",
    sortOrder: 2,
    isEnabled: true,
    content: {
      kicker: "Overview",
      heading: `What Is ${title}?`,
      description: `AQUEN engineers ${title.toLowerCase()} around each project's operating requirements.`,
      fullDescription:
        "Designed for seamless integration with complete AQUEN treatment plants and lifecycle support services.",
      image: "/clarifier-img.png",
      imageAlt: `${title} overview`,
      badge: "High-Performance Treatment",
      badgeDescription: "Engineered for your flow, load and footprint",
      highlightTag: "System Highlights",
      highlightTitle:
        "Designed for reliable treatment and long-term performance",
      highlightDescription:
        "Every system is configured to match capacity, inlet quality, treatment objectives, and available space.",
      chips: [
        { icon: "Droplet", label: "Custom engineered" },
        { icon: "ShieldCheck", label: "Reliable operation" },
      ],
      statistics: [
        { value: "24/7", label: "Operational support" },
        { value: "100%", label: "Custom design" },
      ],
    },
  },
  {
    type: "FEATURES",
    title: "Systems We Offer",
    sortOrder: 3,
    isEnabled: true,
    content: {
      heading: `${title} Systems We Offer`,
      description:
        "Different configurations designed for varying capacities, conditions, and treatment requirements.",
      items: [
        {
          icon: "Droplet",
          title: "Standard System",
          description:
            "Reliable configuration for common treatment requirements.",
          image: "/clarifier-img.png",
          alt: title,
          bulletPoints: [
            "Process-led design",
            "Quality fabrication",
            "Easy operation",
          ],
        },
      ],
    },
  },
  {
    type: "BENEFITS",
    title: "Key Benefits",
    sortOrder: 4,
    isEnabled: true,
    content: {
      heading: `${title} Benefits for Daily Performance`,
      description:
        "Designed for stable output, efficient operation, and long service life.",
      items: [
        {
          icon: "ShieldCheck",
          title: "Reliable Performance",
          description:
            "Stable performance across changing operating conditions.",
        },
        {
          icon: "Zap",
          title: "Efficient Operation",
          description: "Optimized for energy and operating efficiency.",
        },
      ],
    },
  },
  {
    type: "PROCESS",
    title: "Working Process",
    sortOrder: 5,
    isEnabled: true,
    content: {
      heading: `How ${title} Works`,
      description:
        "A clear process from inlet through treatment and final outlet.",
      items: [
        {
          stepNumber: "01",
          icon: "Droplet",
          title: "Assessment",
          description: "Review capacity, inlet data, and outlet targets.",
          label: "Input",
        },
        {
          stepNumber: "02",
          icon: "PenTool",
          title: "Engineering",
          description: "Select and size the treatment process.",
          label: "Design",
        },
        {
          stepNumber: "03",
          icon: "Wrench",
          title: "Execution",
          description: "Manufacture, install, and commission.",
          label: "Delivery",
        },
      ],
    },
  },
  {
    type: "APPLICATIONS",
    title: "Applications",
    sortOrder: 6,
    isEnabled: true,
    content: {
      heading: `${title} Applications by Industry`,
      description:
        "Suitable for industrial, commercial, and municipal treatment requirements.",
      items: [
        { icon: "Factory", title: "Industrial Treatment" },
        { icon: "Recycle", title: "Water Recycling" },
        { icon: "Landmark", title: "Municipal Utilities" },
      ],
    },
  },
  {
    type: "GALLERY",
    title: "Project Gallery",
    sortOrder: 7,
    isEnabled: true,
    content: {
      heading: `${title} Installation Views`,
      description:
        "Selected fabrication, installation, and commissioning views.",
      items: [
        {
          image: "/installation-img1.png",
          caption: "System Installation",
          alt: `${title} installation`,
          size: "large",
        },
        {
          image: "/installation-img2.png",
          caption: "Process Equipment",
          alt: `${title} process equipment`,
          size: "small",
        },
      ],
    },
  },
  {
    type: "DESCRIPTION",
    title: "Applications & Engineering",
    sortOrder: 8,
    isEnabled: true,
    content: {
      heading: `Why Choose Our ${title}?`,
      description:
        "Process-led engineering backed by manufacturing, installation, commissioning, and lifecycle support.",
      items: [
        {
          icon: "Layers",
          title: "Applications",
          description: "Designed for diverse treatment requirements.",
          bulletPoints: [
            "Industrial plants",
            "Commercial facilities",
            "Municipal projects",
          ],
        },
        {
          icon: "ClipboardCheck",
          title: "Engineering Approach",
          description: "Every project begins with detailed process evaluation.",
          bulletPoints: [
            "Capacity analysis",
            "Water-quality assessment",
            "Site optimization",
          ],
        },
      ],
    },
  },
  {
    type: "FAQ",
    title: "FAQ",
    sortOrder: 9,
    isEnabled: true,
    content: {
      heading: `${title} FAQs`,
      description: "Answers to frequently asked questions about this solution.",
      items: [
        {
          question: "Can this system be customized?",
          answer:
            "Yes. Every AQUEN solution can be configured around capacity, inlet data, outlet targets, space, and automation requirements.",
        },
      ],
    },
  },
  {
    type: "CTA",
    title: "Call to Action",
    sortOrder: 10,
    isEnabled: true,
    content: {
      badge: "Engineered around your requirements",
      title: `Need a Custom ${title} Solution?`,
      description:
        "Share your flow rate, water quality, and treatment objective with our engineering team.",
      primaryText: "Get a Free Quote",
      primaryLink: "/contact",
      secondaryText: "Call Us Now",
      secondaryLink: "tel:+918888889611",
      contactNumber: "+918888889611",
    },
  },
];
const emptyForm = (): FormState => ({
  subcategoryId: "",
  title: "",
  slug: "",
  excerpt: "",
  sortOrder: 0,
  status: "DRAFT",
  seoTitle: "",
  metaDescription: "",
  metaKeywords: "",
  canonicalUrl: "",
  robots: "index,follow",
  twitterCard: "summary_large_image",
  sections: [],
});

export default function PagesManager() {
  const [items, setItems] = useState<SolutionPage[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    const [pagesResponse, subsResponse] = await Promise.all([
      fetch("/api/solutions/pages?pageSize=100"),
      fetch("/api/solutions/subcategories?pageSize=100"),
    ]);
    const [pagesJson, subsJson] = await Promise.all([
      pagesResponse.json(),
      subsResponse.json(),
    ]);
    if (pagesResponse.ok) setItems(pagesJson.data.items);
    else setError(pagesJson.error);
    if (subsResponse.ok) setSubcategories(subsJson.data.items);
    setLoading(false);
  }, []);
  // Loading the protected CMS resources is the external synchronization performed by this effect.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    void load();
  }, [load]);
  // Direct links from the subcategory manager open the requested database-backed page.
  // This initializes the client editor from the external URL state on first mount.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageId = Number(params.get("edit"));
    const subcategoryId = Number(params.get("subcategory"));
    if (Number.isInteger(pageId) && pageId > 0) {
      void edit(pageId);
    } else if (Number.isInteger(subcategoryId) && subcategoryId > 0) {
      const next = emptyForm();
      next.subcategoryId = String(subcategoryId);
      setEditingId(null);
      setForm(next);
      setOpen(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setSuccess("");
    setForm((current) => ({ ...current, [key]: value }));
  }
  function create() {
    const next = emptyForm();
    next.sortOrder = items.length;
    setEditingId(null);
    setForm(next);
    setOpen(true);
    setError("");
    setSuccess("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  async function edit(id: number) {
    setError("");
    setSuccess("");
    const response = await fetch(`/api/solutions/pages/${id}`);
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      return;
    }
    const page = json.data as SolutionPage;
    setEditingId(id);
    setForm({
      subcategoryId: String(page.subcategoryId),
      title: page.title,
      slug: page.slug,
      excerpt: page.excerpt || "",
      sortOrder: page.sortOrder || 0,
      status: page.status,
      seoTitle: page.seoTitle || "",
      metaDescription: page.metaDescription || "",
      metaKeywords: page.metaKeywords || "",
      canonicalUrl: page.canonicalUrl || "",
      robots: page.robots || "index,follow",
      twitterCard: page.twitterCard || "summary_large_image",
      sections: (page.sections || []).map((section, index) => ({
        ...section,
        sortOrder: index,
      })),
    });
    setOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function ensureSections() {
    if (form.sections.length) return;
    setField("sections", defaultSections(form.title || "New Solution"));
  }
  async function save(event: React.FormEvent) {
    event.preventDefault();
    if (!form.sections.length) {
      setError("Generate the master-template sections before saving.");
      return;
    }
    setSaving(true);
    setError("");
    setSuccess("");
    const body = {
      subcategoryId: Number(form.subcategoryId),
      title: form.title,
      slug: form.slug || undefined,
      excerpt: form.excerpt || null,
      sortOrder: form.sortOrder,
      status: form.status,
      publishedAt: null,
      seoTitle: form.seoTitle || null,
      metaDescription: form.metaDescription || null,
      metaKeywords: form.metaKeywords || null,
      canonicalUrl: form.canonicalUrl || null,
      ogImageId: null,
      twitterCard: form.twitterCard || null,
      schemaJson: null,
      robots: form.robots || null,
      sections: form.sections.map((section, index) => ({
        ...section,
        sortOrder: index,
      })),
    };
    const response = await fetch(
      editingId ? `/api/solutions/pages/${editingId}` : "/api/solutions/pages",
      {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    const json = await response.json();
    setSaving(false);
    if (!response.ok) {
      setError(json.error || "Unable to save the page.");
      return;
    }
    setSuccess(editingId ? "Changes saved." : "Solution page created.");
    if (!editingId && json.data?.id) setEditingId(json.data.id);
    await load();
  }
  async function remove(id: number) {
    if (!confirm("Move this solution page to trash?")) return;
    const response = await fetch(`/api/solutions/pages/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const json = await response.json();
      setError(json.error);
      return;
    }
    await load();
  }
  return (
    <>
      <div className="admin-row" style={{ marginBottom: 24 }}>
        <div>
          <p className="admin-eyebrow">Clarifier master template</p>
          <h1 className="admin-title">Solution pages</h1>
          <p className="admin-page-description">
            Edit every section, repeater, image, icon, SEO field, visibility
            setting, and display order without changing frontend code.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            className="admin-button secondary"
            onClick={() => void load()}
          >
            <RefreshCw size={16} />
          </button>
          <button className="admin-button" onClick={create}>
            <Plus size={16} /> Add solution
          </button>
        </div>
      </div>
      {error && (
        <p className="admin-login-error" style={{ marginBottom: 18 }}>
          {error}
        </p>
      )}
      {success && (
        <p className="admin-login-success" style={{ marginBottom: 18 }}>
          {success}
        </p>
      )}
      {open && (
        <form className="admin-form solution-editor-form" onSubmit={save}>
          <section className="admin-card">
            <div className="admin-row">
              <div>
                <h2>{editingId ? "Edit solution" : "Add solution"}</h2>
                <p className="admin-muted">Basic information and publishing</p>
              </div>
              <button
                type="button"
                className="admin-button secondary"
                onClick={() => setOpen(false)}
              >
                <X size={16} /> Close
              </button>
            </div>
            <div className="admin-grid">
              <label>
                Solution name
                <input
                  className="admin-input"
                  required
                  minLength={2}
                  value={form.title}
                  onChange={(event) => setField("title", event.target.value)}
                />
              </label>
              <label>
                Slug
                <input
                  className="admin-input"
                  value={form.slug}
                  onChange={(event) => setField("slug", event.target.value)}
                  placeholder="Generated automatically when blank"
                />
              </label>
              <label>
                Category / subcategory
                <select
                  className="admin-input"
                  required
                  value={form.subcategoryId}
                  onChange={(event) =>
                    setField("subcategoryId", event.target.value)
                  }
                >
                  <option value="">Select placement</option>
                  {subcategories.map((sub) => (
                    <option value={sub.id} key={sub.id}>
                      {sub.category.name} — {sub.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Status
                <select
                  className="admin-input"
                  value={form.status}
                  onChange={(event) => setField("status", event.target.value)}
                >
                  <option>DRAFT</option>
                  <option>PUBLISHED</option>
                  <option>ARCHIVED</option>
                </select>
              </label>
              <label>
                Display order
                <input
                  type="number"
                  min={0}
                  className="admin-input"
                  value={form.sortOrder}
                  onChange={(event) =>
                    setField("sortOrder", Number(event.target.value))
                  }
                />
              </label>
            </div>
            <label>
              Short description
              <textarea
                className="admin-input"
                rows={3}
                value={form.excerpt}
                onChange={(event) => setField("excerpt", event.target.value)}
              />
            </label>
          </section>
          <section className="admin-card">
            <div className="admin-section-head">
              <div>
                <h2>SEO settings</h2>
                <p>Search and social metadata for this solution.</p>
              </div>
            </div>
            <div className="admin-grid">
              <label>
                Meta title
                <input
                  className="admin-input"
                  maxLength={191}
                  value={form.seoTitle}
                  onChange={(event) => setField("seoTitle", event.target.value)}
                />
              </label>
              <label>
                Canonical URL
                <input
                  className="admin-input"
                  value={form.canonicalUrl}
                  onChange={(event) =>
                    setField("canonicalUrl", event.target.value)
                  }
                />
              </label>
              <label>
                Meta keywords
                <input
                  className="admin-input"
                  value={form.metaKeywords}
                  onChange={(event) =>
                    setField("metaKeywords", event.target.value)
                  }
                />
              </label>
              <label>
                Robots
                <input
                  className="admin-input"
                  value={form.robots}
                  onChange={(event) => setField("robots", event.target.value)}
                />
              </label>
              <label>
                Twitter card
                <select
                  className="admin-input"
                  value={form.twitterCard}
                  onChange={(event) =>
                    setField("twitterCard", event.target.value)
                  }
                >
                  <option value="summary_large_image">Large image</option>
                  <option value="summary">Summary</option>
                </select>
              </label>
            </div>
            <label>
              Meta description
              <textarea
                className="admin-input"
                maxLength={320}
                rows={3}
                value={form.metaDescription}
                onChange={(event) =>
                  setField("metaDescription", event.target.value)
                }
              />
            </label>
          </section>
          <div className="admin-row">
            <div>
              <h2>Page sections</h2>
              <p className="admin-muted">
                Drag cards to reorder them. Disabled cards are not rendered.
              </p>
            </div>
            {form.sections.length === 0 && (
              <button
                type="button"
                className="admin-button"
                onClick={ensureSections}
              >
                <Plus size={15} /> Generate all sections
              </button>
            )}
          </div>
          {form.sections.length > 0 && (
            <SectionsEditor
              value={form.sections}
              onChange={(sections) => setField("sections", sections)}
            />
          )}
          <div className="solution-editor-save">
            <button className="admin-button" disabled={saving}>
              {saving
                ? "Saving…"
                : success
                  ? success
                  : editingId
                    ? "Save all changes"
                    : "Create solution page"}
            </button>
            <button
              type="button"
              className="admin-button secondary"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}{" "}
      {!open && (
        <section className="admin-card admin-table-wrap">
          {loading ? (
            <p>Loading solution pages…</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Page</th>
                  <th>Placement</th>
                  <th>Sections</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.sortOrder}</td>
                    <td>
                      <strong>{item.title}</strong>
                      <div className="admin-muted">/solutions/{item.slug}</div>
                    </td>
                    <td>
                      {item.subcategory.category.name}
                      <br />
                      <span className="admin-muted">
                        {item.subcategory.name}
                      </span>
                    </td>
                    <td>{item._count?.sections || 0}</td>
                    <td>
                      <span className="admin-badge">{item.status}</span>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: 7 }}>
                        <Link
                          className="admin-button secondary"
                          href={`/solutions/${item.slug}`}
                          target="_blank"
                        >
                          <Eye size={14} />
                        </Link>
                        <button
                          className="admin-button secondary"
                          onClick={() => void edit(item.id)}
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          className="admin-button danger"
                          onClick={() => void remove(item.id)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      )}
    </>
  );
}
