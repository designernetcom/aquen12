import { db } from "@/lib/db";
import { apiError, apiResponse } from "@/lib/api";
import { requireUser } from "@/lib/guard";
import { PERMISSIONS } from "@/lib/permissions";
import { reorderSchema } from "@/lib/validation/cms";

export async function PUT(request: Request) { try { await requireUser(PERMISSIONS.SOLUTIONS_MANAGE); const { items } = reorderSchema.parse(await request.json()); await db.$transaction(items.map(({ id, sortOrder }) => db.solutionSubcategory.update({ where: { id }, data: { sortOrder } }))); return apiResponse({ updated: items.length }); } catch (error) { return apiError(error); } }
