import { db } from "@/lib/db";
import { ApiError, apiError, apiResponse } from "@/lib/api";
import { requireUser } from "@/lib/guard";
import { PERMISSIONS } from "@/lib/permissions";
import { subcategorySchema } from "@/lib/validation/cms";
import { createSlug } from "@/lib/slug";
import { logActivity } from "@/lib/activity";

type Context = { params: Promise<{ id: string }> };
async function parseId(params: Context["params"]) { const id = Number((await params).id); if (!Number.isInteger(id) || id < 1) throw new ApiError(400, "Invalid subcategory id"); return id; }

export async function GET(_: Request, { params }: Context) { try { await requireUser(PERMISSIONS.SOLUTIONS_MANAGE); const id = await parseId(params); const item = await db.solutionSubcategory.findFirst({ where: { id, deletedAt: null }, include: { category: true, pages: { where: { deletedAt: null }, orderBy: { sortOrder: "asc" }, include: { _count: { select: { sections: true } } } } } }); if (!item) throw new ApiError(404, "Subcategory not found"); return apiResponse(item); } catch (error) { return apiError(error); } }
export async function PUT(request: Request, { params }: Context) { try { const user = await requireUser(PERMISSIONS.SOLUTIONS_MANAGE); const id = await parseId(params); const input = subcategorySchema.partial().parse(await request.json()); const item = await db.solutionSubcategory.update({ where: { id }, data: { ...input, ...(input.name || input.slug ? { slug: createSlug(input.slug || input.name!) } : {}) } }); await logActivity({ userId: +user.id, action: "UPDATE", entityType: "solution_subcategory", entityId: id, request }); return apiResponse(item); } catch (error) { return apiError(error); } }
export async function DELETE(request: Request, { params }: Context) { try { const user = await requireUser(PERMISSIONS.SOLUTIONS_MANAGE); const id = await parseId(params); await db.solutionSubcategory.update({ where: { id }, data: { deletedAt: new Date(), isEnabled: false } }); await logActivity({ userId: +user.id, action: "DELETE", entityType: "solution_subcategory", entityId: id, request }); return apiResponse({ id }); } catch (error) { return apiError(error); } }
