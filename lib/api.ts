import { ZodError } from "zod";

export class ApiError extends Error {
  constructor(public status: number, message: string, public details?: unknown) {
    super(message);
  }
}

export function apiResponse<T>(data: T, init?: ResponseInit) {
  return Response.json({ success: true, data }, init);
}

export function apiError(error: unknown) {
  if (error instanceof ZodError) {
    return Response.json({ success: false, error: "Validation failed", details: error.flatten() }, { status: 422 });
  }
  if (error instanceof ApiError) {
    return Response.json({ success: false, error: error.message, details: error.details }, { status: error.status });
  }
  console.error(error);
  return Response.json({ success: false, error: "Internal server error" }, { status: 500 });
}

export function pagination(searchParams: URLSearchParams) {
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const pageSize = Math.min(100, Math.max(1, Number(searchParams.get("pageSize")) || 20));
  return { page, pageSize, skip: (page - 1) * pageSize };
}
