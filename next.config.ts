import type { NextConfig } from "next";

const backendInternalUrl =
  process.env.BACKEND_INTERNAL_URL ?? "http://127.0.0.1:8000";

let backendProtocol: "http" | "https" = "http";
let backendHostname = "127.0.0.1";
let backendPort = "8000";
try {
  const u = new URL(backendInternalUrl);
  backendProtocol = u.protocol.startsWith("https") ? "https" : "http";
  backendHostname = u.hostname;
  backendPort = u.port || (backendProtocol === "https" ? "443" : "80");
} catch {
  // مقدار نامعتبر بود؛ از پیش‌فرض‌های بالا استفاده می‌شود
}

const nextConfig: NextConfig = {
  output: "standalone",
  skipTrailingSlashRedirect: true,

  images: {
    unoptimized: process.env.NODE_ENV === "development",
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'django',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: backendProtocol,
        hostname: backendHostname,
        port: backendPort,
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backendInternalUrl}/api/:path*/`,
      },
      {
        source: "/media/:path*",
        destination: `${backendInternalUrl}/media/:path*`,
      },
    ];
  },
};

export default nextConfig;
