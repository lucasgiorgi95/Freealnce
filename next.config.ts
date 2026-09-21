import type { NextConfig } from "next";

// Security headers applied to every response.
// Tighten the CSP connect-src / script-src once third-party services are known.
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    // Prevent clickjacking
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Stop MIME-type sniffing
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Control referrer information sent with requests
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Restrict browser features
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    // Force HTTPS for 1 year (only effective once deployed to HTTPS)
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    // Content Security Policy
    // Adjust script-src / connect-src if you add analytics or other 3rd-party scripts.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Inline scripts are needed for the anti-flash theme script and JSON-LD
      // 'unsafe-eval' is required by React in development mode for callstack reconstruction
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV !== "production" ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      // WhatsApp and LinkedIn links open in new tab; wa.me is the only external fetch target
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
