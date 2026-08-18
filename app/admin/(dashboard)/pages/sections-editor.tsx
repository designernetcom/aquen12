"use client";

import { useState } from "react";
import {
  GripVertical,
  ImageIcon,
  LoaderCircle,
  Plus,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";

export type CmsSection = {
  type: string;
  title: string | null;
  content: Record<string, unknown>;
  sortOrder: number;
  isEnabled: boolean;
};
type Item = Record<string, unknown>;
type ScalarField = {
  key: string;
  label: string;
  kind?: "text" | "textarea" | "url" | "image";
  placeholder?: string;
};
type ItemField = {
  key: string;
  label: string;
  kind?: "text" | "textarea" | "select" | "lines" | "image";
  options?: string[];
};

const sectionNames: Record<string, string> = {
  HERO: "Hero",
 
  OVERVIEW: "Overview",
  FEATURES: "Systems We Offer",
  BENEFITS: "Key Benefits",
  PROCESS: "Working Process",
  APPLICATIONS: "Applications",
  GALLERY: "Project Gallery",
  DESCRIPTION: "Applications & Engineering Approach",
  FAQ: "Frequently Asked Questions",
  CTA: "Call to Action",
};
const overviewHighlightFields: ScalarField[] = [
  { key: "highlightTag", label: "Highlight-card tag" },
  { key: "highlightTitle", label: "Highlight-card title" },
  {
    key: "highlightDescription",
    label: "Highlight-card description",
    kind: "textarea",
  },
];
const overviewHighlightFieldKeys = new Set(
  overviewHighlightFields.map((field) => field.key),
);
const scalarFields: Record<string, ScalarField[]> = {
  HERO: [
    { key: "badge", label: "Hero badge" },
    { key: "title", label: "Hero title" },
    { key: "highlight", label: "Highlighted text" },
    { key: "description", label: "Description", kind: "textarea" },
    { key: "backgroundImage", label: "Background image", kind: "image" },
  ],

  OVERVIEW: [
    { key: "kicker", label: "Section badge" },
    { key: "heading", label: "Heading" },
    { key: "description", label: "Short description", kind: "textarea" },
    { key: "fullDescription", label: "Full description", kind: "textarea" },
    { key: "image", label: "Overview image", kind: "image" },
    { key: "imageAlt", label: "Image alt text" },
    { key: "badge", label: "Image badge title" },
    { key: "badgeDescription", label: "Image badge description" },
    ...overviewHighlightFields,
  ],
  FEATURES: [
    { key: "heading", label: "Section heading" },
    { key: "description", label: "Section description", kind: "textarea" },
  ],
  BENEFITS: [
    { key: "heading", label: "Section heading" },
    { key: "description", label: "Section description", kind: "textarea" },
  ],
  PROCESS: [
    { key: "heading", label: "Section heading" },
    { key: "description", label: "Section description", kind: "textarea" },
  ],
  APPLICATIONS: [
    { key: "heading", label: "Section heading" },
    { key: "description", label: "Section description", kind: "textarea" },
  ],
  GALLERY: [
    { key: "heading", label: "Section heading" },
    { key: "description", label: "Section description", kind: "textarea" },
  ],
  DESCRIPTION: [
    { key: "heading", label: "Section heading" },
    { key: "description", label: "Section description", kind: "textarea" },
  ],
  FAQ: [
    { key: "heading", label: "Section heading" },
    { key: "description", label: "Section description", kind: "textarea" },
  ],
  CTA: [
    { key: "badge", label: "CTA badge" },
    { key: "title", label: "CTA title" },
    { key: "description", label: "Description", kind: "textarea" },
    { key: "primaryText", label: "Primary button text" },
    { key: "primaryLink", label: "Primary button link", kind: "url" },
    { key: "secondaryText", label: "Secondary button text" },
    { key: "secondaryLink", label: "Secondary button link", kind: "url" },
    { key: "contactNumber", label: "Contact number" },
  ],
};
const repeaterConfig: Record<
  string,
  { key: string; label: string; fields: ItemField[]; defaults: Item }[]
> = {
 
  OVERVIEW: [
    {
      key: "chips",
      label: "Overview chips",
      defaults: { icon: "Droplet", label: "New chip" },
      fields: [
        { key: "icon", label: "Lucide icon" },
        { key: "label", label: "Label" },
      ],
    },
    {
      key: "statistics",
      label: "Statistics",
      defaults: { value: "24/7", label: "New statistic" },
      fields: [
        { key: "value", label: "Value" },
        { key: "label", label: "Label" },
      ],
    },
  ],
  FEATURES: [
    {
      key: "items",
      label: "Systems / tabs",
      defaults: {
        icon: "Droplet",
        title: "New system",
        description: "",
        image: "/clarifier-img.png",
        alt: "",
        bulletPoints: [],
      },
      fields: [
        { key: "icon", label: "Lucide icon" },
        { key: "title", label: "Title" },
        { key: "description", label: "Description", kind: "textarea" },
        { key: "image", label: "Image path", kind: "image" },
        { key: "alt", label: "Image alt text" },
        {
          key: "bulletPoints",
          label: "Bullet points (one per line)",
          kind: "lines",
        },
      ],
    },
  ],
  BENEFITS: [
    {
      key: "items",
      label: "Benefit cards",
      defaults: { icon: "ShieldCheck", title: "New benefit", description: "" },
      fields: [
        { key: "icon", label: "Lucide icon" },
        { key: "title", label: "Title" },
        { key: "description", label: "Description", kind: "textarea" },
      ],
    },
  ],
  PROCESS: [
    {
      key: "items",
      label: "Timeline stages",
      defaults: {
        stepNumber: "01",
        icon: "Droplet",
        title: "New stage",
        description: "",
        label: "Stage label",
      },
      fields: [
        { key: "stepNumber", label: "Step number" },
        { key: "icon", label: "Lucide icon" },
        { key: "title", label: "Title" },
        { key: "description", label: "Description", kind: "textarea" },
        { key: "label", label: "Label" },
      ],
    },
  ],
  APPLICATIONS: [
    {
      key: "items",
      label: "Application cards",
      defaults: { icon: "Factory", title: "New application" },
      fields: [
        { key: "icon", label: "Lucide icon" },
        { key: "title", label: "Title" },
      ],
    },
  ],
  GALLERY: [
    {
      key: "items",
      label: "Gallery images",
      defaults: {
        image: "/installation-img1.png",
        caption: "New image",
        alt: "",
        size: "small",
      },
      fields: [
        { key: "image", label: "Image path", kind: "image" },
        { key: "caption", label: "Caption" },
        { key: "alt", label: "Alt text" },
        {
          key: "size",
          label: "Display size",
          kind: "select",
          options: ["large", "small"],
        },
      ],
    },
  ],
  DESCRIPTION: [
    {
      key: "items",
      label: "SEO content cards",
      defaults: {
        icon: "Layers",
        title: "New card",
        description: "",
        bulletPoints: [],
      },
      fields: [
        { key: "icon", label: "Lucide icon" },
        { key: "title", label: "Title" },
        { key: "description", label: "Description", kind: "textarea" },
        {
          key: "bulletPoints",
          label: "Bullet list (one per line)",
          kind: "lines",
        },
      ],
    },
  ],
  FAQ: [
    {
      key: "items",
      label: "FAQ entries",
      defaults: { question: "New question", answer: "" },
      fields: [
        { key: "question", label: "Question" },
        { key: "answer", label: "Answer", kind: "textarea" },
      ],
    },
  ],
};

function ImageUploadInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: unknown;
  onChange: (value: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const imageUrl = String(value ?? "");
  async function upload(file: File) {
    setUploading(true);
    setError("");
    const data = new FormData();
    data.append("file", file);
    data.append("name", file.name);
    data.append("altText", label);
    try {
      const response = await fetch("/api/media", {
        method: "POST",
        body: data,
      });
      const json = await response.json();
      if (!response.ok)
        throw new Error(json.error || "Unable to upload image.");
      onChange(json.data.url);
    } catch (uploadError) {
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Unable to upload image.",
      );
    } finally {
      setUploading(false);
    }
  }
  return (
    <div className="section-image-field">
      <div className="section-image-label">
        <span>{label}</span>
        <small>JPG, PNG, WebP, GIF or SVG - up to 20 MB</small>
      </div>
      {imageUrl ? (
        <div
          className="section-image-preview"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="section-image-preview-actions">
            <label className="admin-button secondary">
              <UploadCloud size={14} /> Replace
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
                disabled={uploading}
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) void upload(file);
                  event.target.value = "";
                }}
              />
            </label>
            <button
              type="button"
              className="admin-button danger"
              onClick={() => onChange("")}
            >
              <X size={14} /> Remove
            </button>
          </div>
        </div>
      ) : (
        <label
          className={`section-image-dropzone ${uploading ? "is-uploading" : ""}`}
        >
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
            disabled={uploading}
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) void upload(file);
              event.target.value = "";
            }}
          />
          {uploading ? (
            <LoaderCircle className="spin" size={26} />
          ) : (
            <UploadCloud size={26} />
          )}
          <strong>
            {uploading ? "Uploading image…" : `Choose ${label.toLowerCase()}`}
          </strong>
          <span>Click to browse from your device</span>
        </label>
      )}
      <label className="section-image-url">
        <span>Or paste an image path / URL</span>
        <div>
          <ImageIcon size={15} />
          <input
            className="admin-input"
            value={imageUrl}
            onChange={(event) => onChange(event.target.value)}
            placeholder="/uploads/image.webp"
          />
        </div>
      </label>
      {error && <p className="section-image-error">{error}</p>}
    </div>
  );
}
function ScalarInput({
  field,
  value,
  onChange,
}: {
  field: ScalarField;
  value: unknown;
  onChange: (value: string) => void;
}) {
  if (field.kind === "image")
    return (
      <ImageUploadInput
        label={field.label}
        value={value}
        onChange={onChange}
      />
    );
  return (
    <label>
      {field.label}
      {field.kind === "textarea" ? (
        <textarea
          className="admin-input"
          rows={3}
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className="admin-input"
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
        />
      )}
    </label>
  );
}
function LinesInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: unknown;
  onChange: (value: string[]) => void;
}) {
  const lines = Array.isArray(value)
    ? (value as unknown[]).map((line) => String(line))
    : String(value ?? "")
        .split("\n")
        .filter(Boolean);
  const updateLine = (lineIndex: number, next: string) =>
    onChange(lines.map((line, index) => (index === lineIndex ? next : line)));
  return (
    <div className="section-lines-field">
      <div className="admin-row">
        <strong>{label}</strong>
        <button
          type="button"
          className="admin-button secondary"
          onClick={() => onChange([...lines, ""])}
        >
          <Plus size={14} /> Add point
        </button>
      </div>
      {lines.length === 0 && <p className="admin-muted">No points yet.</p>}
      {lines.map((line, lineIndex) => (
        <div className="section-line-row" key={lineIndex}>
          <input
            className="admin-input"
            value={line}
            placeholder={`Point ${lineIndex + 1}`}
            onChange={(event) => updateLine(lineIndex, event.target.value)}
          />
          <button
            type="button"
            className="admin-button danger"
            onClick={() =>
              onChange(lines.filter((_, index) => index !== lineIndex))
            }
          >
            <Trash2 size={14} /> Delete
          </button>
        </div>
      ))}
    </div>
  );
}
function Repeater({
  label,
  items,
  fields,
  onChange,
  onAdd,
}: {
  label: string;
  items: Item[];
  fields: ItemField[];
  onChange: (items: Item[]) => void;
  onAdd: () => void;
}) {
  return (
    <div className="section-repeaters">
      <div className="admin-row">
        <strong>{label}</strong>
        <button
          type="button"
          className="admin-button secondary"
          onClick={onAdd}
        >
          <Plus size={14} /> Add item
        </button>
      </div>
      {items.length === 0 && <p className="admin-muted">No items yet.</p>}
      {items.map((item, index) => (
        <div className="section-repeater-card" key={index}>
          <div className="admin-row">
            <span className="admin-badge">Item {index + 1}</span>
            <button
              type="button"
              className="admin-button danger"
              onClick={() => onChange(items.filter((_, i) => i !== index))}
            >
              <Trash2 size={14} /> Delete
            </button>
          </div>
          <div className="admin-grid">
            {fields.map((field) =>
              field.kind === "image" ? (
                <ImageUploadInput
                  key={field.key}
                  label={field.label}
                  value={item[field.key]}
                  onChange={(next) =>
                    onChange(
                      items.map((row, i) =>
                        i === index ? { ...row, [field.key]: next } : row,
                      ),
                    )
                  }
                />
              ) : field.kind === "lines" ? (
                <LinesInput
                  key={field.key}
                  label={field.label}
                  value={item[field.key]}
                  onChange={(next) =>
                    onChange(
                      items.map((row, i) =>
                        i === index ? { ...row, [field.key]: next } : row,
                      ),
                    )
                  }
                />
              ) : (
                <label key={field.key}>
                  {field.label}
                  {field.kind === "textarea" ? (
                    <textarea
                      className="admin-input"
                      rows={3}
                      value={String(item[field.key] ?? "")}
                      onChange={(e) =>
                        onChange(
                          items.map((row, i) =>
                            i === index
                              ? { ...row, [field.key]: e.target.value }
                              : row,
                          ),
                        )
                      }
                    />
                  ) : field.kind === "select" ? (
                    <select
                      className="admin-input"
                      value={String(item[field.key] ?? "")}
                      onChange={(e) =>
                        onChange(
                          items.map((row, i) =>
                            i === index
                              ? { ...row, [field.key]: e.target.value }
                              : row,
                          ),
                        )
                      }
                    >
                      {field.options?.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      className="admin-input"
                      value={String(item[field.key] ?? "")}
                      onChange={(e) =>
                        onChange(
                          items.map((row, i) =>
                            i === index
                              ? { ...row, [field.key]: e.target.value }
                              : row,
                          ),
                        )
                      }
                    />
                  )}
                </label>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SectionsEditor({
  value,
  onChange,
}: {
  value: CmsSection[];
  onChange: (sections: CmsSection[]) => void;
}) {
  const update = (index: number, patch: Partial<CmsSection>) =>
    onChange(
      value.map((section, i) =>
        i === index ? { ...section, ...patch } : section,
      ),
    );
  const updateContent = (index: number, key: string, next: unknown) =>
    update(index, { content: { ...value[index].content, [key]: next } });
  const move = (from: number, to: number) => {
    if (from === to || to < 0 || to >= value.length) return;
    const next = [...value];
    const [picked] = next.splice(from, 1);
    next.splice(to, 0, picked);
    onChange(next.map((section, index) => ({ ...section, sortOrder: index })));
  };
  return (
    <div className="section-editor">
      {value.map((section, index) => (
        <article
          className="admin-card section-editor-card"
          draggable
          key={`${section.type}-${index}`}
          onDragStart={(event) =>
            event.dataTransfer.setData("text/plain", String(index))
          }
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) =>
            move(Number(event.dataTransfer.getData("text/plain")), index)
          }
        >
          <div className="admin-row">
            <div className="section-editor-title">
              <GripVertical size={18} />
              <div>
                <strong>{sectionNames[section.type] || section.type}</strong>
                <small className="admin-muted"> Drag to reorder</small>
              </div>
              <span className="admin-badge">#{index + 1}</span>
            </div>
            <label className="admin-checkbox">
              <input
                type="checkbox"
                checked={section.isEnabled}
                onChange={(event) =>
                  update(index, { isEnabled: event.target.checked })
                }
              />{" "}
              Show section
            </label>
          </div>
          <div className="admin-grid">
            {(scalarFields[section.type] || [])
              .filter(
                (field) =>
                  section.type !== "OVERVIEW" ||
                  !overviewHighlightFieldKeys.has(field.key),
              )
              .map((field) => (
                <ScalarInput
                  key={field.key}
                  field={field}
                  value={section.content[field.key]}
                  onChange={(next) => updateContent(index, field.key, next)}
                />
              ))}
          </div>
          {(repeaterConfig[section.type] || []).map((group) => {
            const items = Array.isArray(section.content[group.key])
              ? (section.content[group.key] as unknown[]).map((item) =>
                  typeof item === "string" ? { title: item } : (item as Item),
                )
              : [];
            return (
              <div key={group.key}>
                {section.type === "OVERVIEW" && group.key === "statistics" && (
                  <div className="section-repeaters">
                    <div className="admin-row">
                      <strong>Highlight card</strong>
                      <span className="admin-muted">
                        Content shown above these statistics
                      </span>
                    </div>
                    <div className="admin-grid">
                      {overviewHighlightFields.map((field) => (
                        <ScalarInput
                          key={field.key}
                          field={field}
                          value={section.content[field.key]}
                          onChange={(next) =>
                            updateContent(index, field.key, next)
                          }
                        />
                      ))}
                    </div>
                  </div>
                )}
                <Repeater
                  label={group.label}
                  fields={group.fields}
                  items={items}
                  onChange={(next) => updateContent(index, group.key, next)}
                  onAdd={() =>
                    updateContent(index, group.key, [
                      ...items,
                      { ...group.defaults },
                    ])
                  }
                />
              </div>
            );
          })}
        </article>
      ))}
    </div>
  );
}
