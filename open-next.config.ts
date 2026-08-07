import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No ISR/on-demand revalidation is used by this site, so the default
// in-memory cache is sufficient — no R2 incremental cache binding needed.
// See https://opennext.js.org/cloudflare/caching if that changes.
export default defineCloudflareConfig();
