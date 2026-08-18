import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { ApiError, apiError, apiResponse } from "@/lib/api";
import { requireUser } from "@/lib/guard";
import { PERMISSIONS } from "@/lib/permissions";
import { solutionPageSchema } from "@/lib/validation/cms";
import { createSlug } from "@/lib/slug";
import { logActivity } from "@/lib/activity";

type Context = { params: Promise<{ id: string }> };
async function parseId(params: Context["params"]) { const id = Number((await params).id); if (!Number.isInteger(id) || id < 1) throw new ApiError(400, "Invalid page id"); return id; }
export async function GET(_: Request, { params }: Context) { try { await requireUser(PERMISSIONS.CONTENT_EDIT); const id = await parseId(params); const item = await db.solutionPage.findFirst({ where: { id, deletedAt: null }, include: { sections: { orderBy: { sortOrder: "asc" } }, subcategory: { include: { category: true } } } }); if (!item) throw new ApiError(404, "Solution page not found"); return apiResponse(item); } catch (error) { return apiError(error); } }
export async function PUT(request: Request, { params }: Context) { try { const user = await requireUser(PERMISSIONS.CONTENT_EDIT); const id = await parseId(params); const input = solutionPageSchema.parse(await request.json()); const { sections, schemaJson, ...page } = input; const item = await db.$transaction(async tx => { await tx.pageSection.deleteMany({ where: { pageId: id } }); return tx.solutionPage.update({ where: { id }, data: { ...page, slug: createSlug(page.slug || page.title), schemaJson: schemaJson === null ? Prisma.JsonNull : schemaJson as Prisma.InputJsonValue | undefined, publishedAt: page.status === "PUBLISHED" ? (page.publishedAt || new Date()) : page.publishedAt, sections: { create: sections.map(section => ({ type: section.type, title: section.title, content: section.content as Prisma.InputJsonValue, sortOrder: section.sortOrder, isEnabled: section.isEnabled })) } }, include: { sections: true } }); }); await logActivity({ userId: +user.id, action: "UPDATE", entityType: "solution_page", entityId: id, request }); return apiResponse(item); } catch (error) { return apiError(error); } }
export async function DELETE(request: Request, { params }: Context) { try { const user = await requireUser(PERMISSIONS.CONTENT_EDIT); const id = await parseId(params); await db.solutionPage.update({ where: { id }, data: { deletedAt: new Date(), status: "ARCHIVED" } }); await logActivity({ userId: +user.id, action: "DELETE", entityType: "solution_page", entityId: id, request }); return apiResponse({ id }); } catch (error) { return apiError(error); } }
