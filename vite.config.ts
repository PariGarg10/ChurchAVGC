// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = process.env.VERCEL === "1";
const deployTarget = process.env.DEPLOY_TARGET?.toLowerCase();
const useVercelPreset = isVercel || deployTarget === "vercel";
const basePath = useVercelPreset ? "/" : process.env.SITE_BASE_PATH || "/faithservices/";

export default defineConfig({
  vite: {
    base: basePath,
  },
  nitro: {
    preset: useVercelPreset ? "vercel" : "node-server",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this. Supports both Vercel and Passenger targets.
    server: { entry: "server", preset: useVercelPreset ? "vercel" : "node-server" },
  },
});
