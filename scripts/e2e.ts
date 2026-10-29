/**
 * E2E smoke test.
 *
 * Serves the built site from the repo root, then drives it with
 * `use-hdm-cli e2e` (happy-dom) against e2e.yaml.
 *
 * Run with Bun: `bun scripts/e2e.ts`
 * The site assets are produced by `npm run webpack`; rebuild them first when
 * src/ changed.
 */
import { join, resolve, sep } from "node:path";

const ROOT = resolve(import.meta.dir, "..");
const CONFIG = join(ROOT, "e2e.yaml");
const CLI = join(ROOT, "node_modules", ".bin", "use-hdm-cli");

const fail = (message: string): never => {
  console.error(`[e2e] ${message}`);
  process.exit(1);
};

if (!(await Bun.file(join(ROOT, "index.html")).exists())) {
  fail("index.html not found. Run `npm run webpack` to build the site.");
}

const bundles = [...new Bun.Glob("assets/main.*.bundle.js").scanSync(ROOT)];
if (!bundles.length) {
  fail("assets/main.*.bundle.js not found. Run `npm run webpack` to build the site.");
}

const contentType = (path: string) =>
  Bun.file(path).type || "application/octet-stream";

const server = Bun.serve({
  port: 0,
  hostname: "127.0.0.1",
  async fetch(request) {
    const { pathname } = new URL(request.url);
    const relative = decodeURIComponent(pathname === "/" ? "/index.html" : pathname);
    const filePath = resolve(ROOT, "." + relative);

    // Keep the static server inside the repo root.
    if (filePath !== ROOT && !filePath.startsWith(ROOT + sep)) {
      return new Response("Forbidden", { status: 403 });
    }
    if (!(await Bun.file(filePath).exists())) {
      return new Response("Not Found", { status: 404 });
    }
    return new Response(Bun.file(filePath), {
      headers: { "content-type": contentType(filePath) },
    });
  },
});

const baseUrl = `http://127.0.0.1:${server.port}`;
console.log(`[e2e] serving ${ROOT} at ${baseUrl}`);

try {
  const proc = Bun.spawn([CLI, "e2e", baseUrl, "--config", CONFIG], {
    cwd: ROOT,
    stdout: "inherit",
    stderr: "inherit",
  });
  const code = await proc.exited;
  server.stop(true);
  process.exit(code);
} catch (error) {
  server.stop(true);
  fail(error instanceof Error ? error.message : String(error));
}
