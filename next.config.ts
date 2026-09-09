import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // No Cloudflare Images binding is configured, so skip automatic
    // optimization. See https://opennext.js.org/cloudflare/howtos/image
    unoptimized: true,
  },
};

// Enables local `next dev` to run against the Cloudflare Workers runtime
// (bindings, etc). No-op in production builds.
initOpenNextCloudflareForDev();

export default nextConfig;
