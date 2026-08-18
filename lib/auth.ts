import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { db } from "@/lib/db";

const credentialsSchema = z.object({ email: z.string().email().transform(v => v.toLowerCase()), password: z.string().min(8) });

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  session: { strategy: "jwt", maxAge: 60 * 60 * 8, updateAge: 60 * 15 },
  pages: { signIn: "/admin/login" },
  cookies: { sessionToken: { name: process.env.NODE_ENV === "production" ? "__Secure-aquen.session-token" : "aquen.session-token", options: { httpOnly: true, sameSite: "lax", path: "/", secure: process.env.NODE_ENV === "production" } } },
  providers: [Credentials({
    credentials: { email: {}, password: {} },
    authorize: async (raw) => {
      const parsed = credentialsSchema.safeParse(raw);
      if (!parsed.success) return null;
      const user = await db.user.findFirst({ where: { email: parsed.data.email, status: "ACTIVE", deletedAt: null }, include: { role: { include: { permissions: { include: { permission: true } } } } } });
      if (!user || !(await bcrypt.compare(parsed.data.password, user.passwordHash))) return null;
      await db.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });
      return { id: String(user.id), name: user.name, email: user.email, image: user.profileImageId ? `/api/media/${user.profileImageId}` : null, role: user.role.name, permissions: user.role.permissions.map(p => p.permission.key) };
    },
  })],
  callbacks: {
    jwt({ token, user }) { if (user) { token.id = user.id; token.role = user.role; token.permissions = user.permissions; } return token; },
    session({ session, token }) { if (session.user) { session.user.id = String(token.id); session.user.role = String(token.role); session.user.permissions = (token.permissions as string[]) ?? []; } return session; },
    authorized({ auth: session, request }) { const publicAdmin=["/admin/login","/admin/forgot-password","/admin/reset-password"]; return !request.nextUrl.pathname.startsWith("/admin") || publicAdmin.some(path=>request.nextUrl.pathname.startsWith(path)) || Boolean(session?.user); },
  },
});
