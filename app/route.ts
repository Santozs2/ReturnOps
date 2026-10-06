import { readFile } from "node:fs/promises";
import path from "node:path";

// Serves the prototype at "/". The HTML file stays the single source and is also
// published as a claude.ai Artifact, which wraps it in this same skeleton.
export const dynamic = "force-dynamic";

const HEAD =
  '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">' +
  "<style>:root{color-scheme:light;padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px)}" +
  "body{margin:0;font:14px system-ui,sans-serif;background:#fafaf8}img{max-width:100%}[hidden]{display:none!important}</style>" +
  "</head><body>";

export async function GET() {
  const file = path.join(process.cwd(), "prototipo-devolucoes.html");
  const html = await readFile(file, "utf8");
  return new Response(`${HEAD}${html}</body></html>`, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
