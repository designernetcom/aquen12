import "server-only";
import { auth } from "@/lib/auth";
import { ApiError } from "@/lib/api";

export async function requireUser(permission?: string) {
  const session = await auth();
  if (!session?.user) throw new ApiError(401, "Authentication required");
  if (permission && session.user.role !== "Super Admin" && !session.user.permissions.includes(permission)) throw new ApiError(403, "Insufficient permission");
  return session.user;
}
