import "server-only";
import { db } from "@/lib/db";
import type { Prisma } from "@prisma/client";

export async function logActivity(input: {
  userId?: number; action: string; entityType?: string; entityId?: string | number;
  request?: Request; metadata?: Record<string, unknown>;
}) {
  try {
    await db.activityLog.create({ data: {
      userId: input.userId,
      action: input.action,
      entityType: input.entityType,
      entityId: input.entityId === undefined ? undefined : String(input.entityId),
      metadata: input.metadata as Prisma.InputJsonValue | undefined,
      ipAddress: input.request?.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
      userAgent: input.request?.headers.get("user-agent")?.slice(0, 500),
    }});
  } catch (error) {
    console.error("Activity log failed", error);
  }
}
