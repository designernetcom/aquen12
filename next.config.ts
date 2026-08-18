import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prisma reads the PostgreSQL CA (sslrootcert) at connect time, so it must
  // exist inside every deployed function bundle. Nothing imports the file, so
  // tracing cannot infer it. Harmless when the provider uses a public root CA.
  outputFileTracingIncludes: {
    "/*": ["./certs/**"],
  },
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [{ source: "/solutions/:category/:slug", destination: "/solutions/:slug", permanent: true }];
  },
  async headers() {
    return [{ source: "/(.*)", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ] }];
  },
};

export default nextConfig;
