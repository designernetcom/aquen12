"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUp, ExternalLink, Eye, FileText, FilterX, Pencil, Plus, Trash2, X } from "lucide-react";

type Category = { id: number; name: string; slug: string };
type Subcategory = {
  id: number;
  categoryId: number;
  name: string;
  slug: string;
  description: string | null;
  seoTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  canonicalUrl: string | null;
  sortOrder: number;
  status: string;
  isEnabled: boolean;
  category: Category;
  pages: { id: number; title: string }[];
  _count: { pages: number };
};
type SavedPage={id:number;title:string;slug:string;excerpt:string|null;status:string;sortOrder:number;updatedAt:string;_count:{sections:number}};
type SubcategoryDetail=Omit<Subcategory,"pages">&{pages:SavedPage[];createdAt:string;updatedAt:string};
const blank = {
  categoryId: "",
  name: "",
  slug: "",
  description: "",
  seoTitle: "",
  metaDescription: "",
  metaKeywords: "",
  canonicalUrl: "",
  sortOrder: 0,
  status: "DRAFT",
  isEnabled: true,
};

export default function SubcategoriesManager() {
  const [items, setItems] = useState<Subcategory[]>([]),
    [categories, setCategories] = useState<Category[]>([]);
  const [form, setForm] = useState(blank);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [visibilityFilter, setVisibilityFilter] = useState("ALL");
  const [pageFilter, setPageFilter] = useState("ALL");
  const [editingId, setEditingId] = useState<number | null>(null),
    [open, setOpen] = useState(false),
    [viewing, setViewing] = useState<SubcategoryDetail | null>(null),
    [viewLoading, setViewLoading] = useState(false),
    [saving, setSaving] = useState(false),
    [loading, setLoading] = useState(true),
    [error, setError] = useState("");
  const filteredItems = useMemo(() => {
    const search = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesSearch = !search || item.name.toLowerCase().includes(search) || item.slug.toLowerCase().includes(search) || item.category.name.toLowerCase().includes(search) || (item.description || "").toLowerCase().includes(search);
      const matchesCategory = categoryFilter === "ALL" || String(item.categoryId) === categoryFilter;
      const matchesStatus = statusFilter === "ALL" || item.status === statusFilter;
      const matchesVisibility = visibilityFilter === "ALL" || (visibilityFilter === "VISIBLE" ? item.isEnabled : !item.isEnabled);
      const matchesPages = pageFilter === "ALL" || (pageFilter === "WITH_PAGES" ? item._count.pages > 0 : item._count.pages === 0);
      return matchesSearch && matchesCategory && matchesStatus && matchesVisibility && matchesPages;
    });
  }, [items, query, categoryFilter, statusFilter, visibilityFilter, pageFilter]);
  const filtersActive = Boolean(query || categoryFilter !== "ALL" || statusFilter !== "ALL" || visibilityFilter !== "ALL" || pageFilter !== "ALL");
  function clearFilters() {
    setQuery("");
    setCategoryFilter("ALL");
    setStatusFilter("ALL");
    setVisibilityFilter("ALL");
    setPageFilter("ALL");
  }
  const load = useCallback(async () => {
    setLoading(true);
    const [sr, cr] = await Promise.all([
      fetch("/api/solutions/subcategories?pageSize=100"),
      fetch("/api/solutions/categories?pageSize=100"),
    ]);
    const [sj, cj] = await Promise.all([sr.json(), cr.json()]);
    if (sr.ok) setItems(sj.data.items);
    else setError(sj.error);
    if (cr.ok) setCategories(cj.data.items);
    setLoading(false);
  }, []);
  useEffect(() => {
    // Loading the protected CMS resources is the external synchronization performed by this effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void load();
  }, [load]);
  function start(item?: Subcategory) {
    setEditingId(item?.id || null);
    setForm(
      item
        ? {
            categoryId: String(item.categoryId),
            name: item.name,
            slug: item.slug,
            description: item.description || "",
            seoTitle: item.seoTitle || "",
            metaDescription: item.metaDescription || "",
            metaKeywords: item.metaKeywords || "",
            canonicalUrl: item.canonicalUrl || "",
            sortOrder: item.sortOrder,
            status: item.status,
            isEnabled: item.isEnabled,
          }
        : { ...blank, sortOrder: items.length },
    );
    setOpen(true);
    setError("");
  }
  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const body = {
      ...form,
      categoryId: Number(form.categoryId),
      description: form.description || null,
      seoTitle: form.seoTitle || null,
      metaDescription: form.metaDescription || null,
      metaKeywords: form.metaKeywords || null,
      canonicalUrl: form.canonicalUrl || null,
    };
    const r = await fetch(
      editingId
        ? `/api/solutions/subcategories/${editingId}`
        : "/api/solutions/subcategories",
      {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    const j = await r.json();
    if (!r.ok) {
      setSaving(false);
      setError(j.error);
      return;
    }
    setSaving(false);
    setOpen(false);
    await load();
  }
  async function view(id:number){setViewLoading(true);setError("");const response=await fetch(`/api/solutions/subcategories/${id}`,{cache:"no-store"});const json=await response.json();setViewLoading(false);if(!response.ok){setError(json.error||"Unable to load the saved record.");return}setViewing(json.data)}
  async function remove(id: number) {
    if (!confirm("Move this subcategory to trash?")) return;
    await fetch(`/api/solutions/subcategories/${id}`, { method: "DELETE" });
    await load();
  }
  async function move(item: Subcategory, direction: -1 | 1) {
    const group = items.filter((x) => x.categoryId === item.categoryId);
    const index = group.findIndex((x) => x.id === item.id),
      swap = group[index + direction];
    if (!swap) return;
    await fetch("/api/solutions/subcategories/reorder", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [
          { id: item.id, sortOrder: swap.sortOrder },
          { id: swap.id, sortOrder: item.sortOrder },
        ],
      }),
    });
    await load();
  }
  return (
    <>
      <div className="admin-row" style={{ marginBottom: 24 }}>
        <div>
          <p className="admin-eyebrow">Solutions CMS</p>
          <h1 className="admin-title">Subcategories</h1>
          <p className="admin-page-description">
            Manage subcategory records and open their complete page content editor.
          </p>
        </div>
        <button className="admin-button" onClick={() => start()}>
          <Plus size={16} /> New subcategory
        </button>
      </div>
      {error && <p className="admin-login-error">{error}</p>}
      {open && (
        <section className="admin-card" style={{ marginBottom: 22 }}>
          <div className="admin-row">
            <h2>{editingId ? "Edit" : "Create"} subcategory</h2>
            <button
              className="admin-button secondary"
              onClick={() => setOpen(false)}
            >
              <X size={15} />
            </button>
          </div>
          <form className="admin-form" onSubmit={save}>
            <div className="admin-grid">
              <label>
                Category
                <select
                  className="admin-input"
                  value={form.categoryId}
                  onChange={(e) =>
                    setForm({ ...form, categoryId: e.target.value })
                  }
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option value={c.id} key={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Name
                <input
                  className="admin-input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </label>
              <label>
                Slug
                <input
                  className="admin-input"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  placeholder="Generated when blank"
                />
              </label>
              <label>
                Status
                <select
                  className="admin-input"
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                  <option>DRAFT</option>
                  <option>PUBLISHED</option>
                  <option>ARCHIVED</option>
                </select>
              </label>
            </div>
            <label>
              Description
              <textarea
                className="admin-input"
                rows={3}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </label>
            <label className="admin-checkbox">
              <input
                type="checkbox"
                checked={form.isEnabled}
                onChange={(e) =>
                  setForm({ ...form, isEnabled: e.target.checked })
                }
              />{" "}
              Visible in the website navigation
            </label>
            <div className="admin-grid">
              <label>Display order<input className="admin-input" type="number" min={0} value={form.sortOrder} onChange={(e)=>setForm({...form,sortOrder:Number(e.target.value)})}/></label>
              <label>SEO title<input className="admin-input" maxLength={191} value={form.seoTitle} onChange={(e)=>setForm({...form,seoTitle:e.target.value})}/></label>
              <label>Canonical URL<input className="admin-input" value={form.canonicalUrl} onChange={(e)=>setForm({...form,canonicalUrl:e.target.value})} placeholder="https://example.com/solutions/page"/></label>
            </div>
            <label>Meta description<textarea className="admin-input" rows={3} maxLength={320} value={form.metaDescription} onChange={(e)=>setForm({...form,metaDescription:e.target.value})}/></label>
            <label>Meta keywords<input className="admin-input" value={form.metaKeywords} onChange={(e)=>setForm({...form,metaKeywords:e.target.value})} placeholder="water treatment, clarifier, industrial"/></label>
            <button className="admin-button" disabled={saving}>
              {saving?"Saving to database…":editingId ? "Save changes" : "Create subcategory"}
            </button>
          </form>
        </section>
      )}
      {(viewing||viewLoading)&&<div className="admin-modal-backdrop" role="presentation" onMouseDown={()=>!viewLoading&&setViewing(null)}><section className="admin-modal" role="dialog" aria-modal="true" aria-label="Saved subcategory record" onMouseDown={(event)=>event.stopPropagation()}>{viewLoading?<p>Loading saved database record…</p>:viewing&&<><div className="admin-row"><div><p className="admin-eyebrow">Saved database record</p><h2>{viewing.name}</h2><p className="admin-muted">ID #{viewing.id} · /{viewing.slug}</p></div><button className="admin-button secondary" onClick={()=>setViewing(null)}><X size={16}/> Close</button></div><div className="admin-record-grid"><div><span>Parent category</span><strong>{viewing.category.name}</strong></div><div><span>Status</span><strong>{viewing.status}</strong></div><div><span>Display order</span><strong>{viewing.sortOrder}</strong></div><div><span>Navigation</span><strong>{viewing.isEnabled?"Visible":"Hidden"}</strong></div><div><span>Created</span><strong>{new Date(viewing.createdAt).toLocaleString()}</strong></div><div><span>Last updated</span><strong>{new Date(viewing.updatedAt).toLocaleString()}</strong></div></div><div className="admin-record-copy"><h3>Description</h3><p>{viewing.description||"No description saved."}</p><h3>SEO</h3><p><strong>Title:</strong> {viewing.seoTitle||"Not set"}</p><p><strong>Description:</strong> {viewing.metaDescription||"Not set"}</p><p><strong>Keywords:</strong> {viewing.metaKeywords||"Not set"}</p><p><strong>Canonical:</strong> {viewing.canonicalUrl||"Not set"}</p></div><div className="admin-section-head"><div><h2>Associated solution pages</h2><p>These page records are saved under this subcategory.</p></div><span className="admin-badge">{viewing.pages.length} pages</span></div>{viewing.pages.length?<div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Order</th><th>Page</th><th>Status</th><th>Open</th></tr></thead><tbody>{viewing.pages.map(page=><tr key={page.id}><td>{page.sortOrder}</td><td><strong>{page.title}</strong><div className="admin-muted">/solutions/{page.slug}</div></td><td><span className="admin-badge">{page.status}</span></td><td><Link className="admin-button secondary" href={`/solutions/${page.slug}`} target="_blank"><ExternalLink size={14}/> View page</Link></td></tr>)}</tbody></table></div>:<div className="admin-empty"><FileText size={24}/><p>No Solution page has been created for this subcategory.</p><Link className="admin-button" href="/admin/pages">Create solution page</Link></div>}<div className="admin-modal-actions"><button className="admin-button secondary" onClick={()=>{const item=items.find(row=>row.id===viewing.id);setViewing(null);if(item)start(item)}}><Pencil size={14}/> Edit record</button><Link className="admin-button" href="/admin/pages"><FileText size={14}/> Manage pages</Link></div></>}</section></div>}
      <section className="admin-card">
        <div className="admin-section-head">
          <div><h2>Subcategory records</h2><p>Showing {filteredItems.length} of {items.length} subcategories</p></div>
          {filtersActive && <button className="admin-button secondary" onClick={clearFilters}><FilterX size={15}/> Clear filters</button>}
        </div>
        <div className="admin-grid" style={{ marginBottom: 20 }}>
          <label>Search<input className="admin-input" type="search" value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Name, slug, category…"/></label>
          <label>Parent category<select className="admin-input" value={categoryFilter} onChange={(event)=>setCategoryFilter(event.target.value)}><option value="ALL">All categories</option>{categories.map((category)=><option key={category.id} value={category.id}>{category.name}</option>)}</select></label>
          <label>Status<select className="admin-input" value={statusFilter} onChange={(event)=>setStatusFilter(event.target.value)}><option value="ALL">All statuses</option><option value="DRAFT">Draft</option><option value="PUBLISHED">Published</option><option value="ARCHIVED">Archived</option></select></label>
          <label>Navigation<select className="admin-input" value={visibilityFilter} onChange={(event)=>setVisibilityFilter(event.target.value)}><option value="ALL">Visible and hidden</option><option value="VISIBLE">Visible only</option><option value="HIDDEN">Hidden only</option></select></label>
          <label>Page content<select className="admin-input" value={pageFilter} onChange={(event)=>setPageFilter(event.target.value)}><option value="ALL">With and without pages</option><option value="WITH_PAGES">Has pages</option><option value="WITHOUT_PAGES">No pages</option></select></label>
        </div>
        {loading ? (
          <p>Loading subcategories…</p>
        ) : filteredItems.length === 0 ? (
          <div className="admin-empty"><FilterX size={24}/><p>No subcategories match the selected filters.</p>{filtersActive && <button className="admin-button secondary" onClick={clearFilters}>Clear filters</button>}</div>
        ) : (
          <div className="admin-table-wrap"><table className="admin-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Subcategory</th>
                <th>Category</th>
                <th>Pages</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <button
                      className="admin-icon-button"
                      onClick={() => move(item, -1)}
                      aria-label="Move up"
                    >
                      <ArrowUp size={14} />
                    </button>
                    <button
                      className="admin-icon-button"
                      onClick={() => move(item, 1)}
                      aria-label="Move down"
                    >
                      <ArrowDown size={14} />
                    </button>
                  </td>
                  <td>
                    <strong>{item.name}</strong>
                    <div className="admin-muted">/{item.slug}</div>
                  </td>
                  <td>{item.category.name}</td>
                  <td>{item._count.pages}</td>
                  <td>
                    <span className="admin-badge">{item.status}</span>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: 7 }}>
                      <button
                        className="admin-button secondary"
                        onClick={()=>void view(item.id)}
                        aria-label={`View saved record for ${item.name}`}
                      >
                        <Eye size={14} />
                      </button>
                      {item.pages[0] ? (
                        <Link
                          className="admin-button secondary"
                          href={`/admin/pages?edit=${item.pages[0].id}`}
                          aria-label={`Edit full page content for ${item.name}`}
                          title="Edit full page content"
                        >
                          <FileText size={14} /> Edit page
                        </Link>
                      ) : (
                        <Link
                          className="admin-button secondary"
                          href={`/admin/pages?subcategory=${item.id}`}
                          aria-label={`Create page content for ${item.name}`}
                        >
                          <FileText size={14} /> Create page
                        </Link>
                      )}
                      <button
                        className="admin-button secondary"
                        onClick={() => start(item)}
                        aria-label={`Edit subcategory settings for ${item.name}`}
                        title="Edit subcategory settings"
                      >
                        <Pencil size={14} /> Settings
                      </button>
                      <button
                        className="admin-button danger"
                        onClick={() => remove(item.id)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        )}
      </section>
    </>
  );
}
