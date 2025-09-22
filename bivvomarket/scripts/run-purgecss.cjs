// scripts/run-purgecss.cjs
const { PurgeCSS } = require("purgecss");
const fs = require("fs");
const path = require("path");

const BROWSER_DIR = "dist/bivvomarket/browser";
const ROOT_DIR = "dist/bivvomarket"; // por si Angular deja algún CSS aquí

function getCssFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".css"))
    .map((f) => path.join(dir, f));
}

(async () => {
  // Busca CSS en browser y (opcional) en la raíz de dist/lecca
  const cssFiles = [...getCssFiles(BROWSER_DIR), ...getCssFiles(ROOT_DIR)];

  if (cssFiles.length === 0) {
    console.warn("⚠️ No se encontraron CSS en", BROWSER_DIR, "ni en", ROOT_DIR);
    process.exit(0);
  }

  console.log(
    "🔎 CSS a purgar:",
    cssFiles.map((f) => path.basename(f)).join(", ")
  );

  // Lee contenido para que podamos escribir aunque PurgeCSS no nos de 'file'
  const cssSources = cssFiles.map((f) => ({
    raw: fs.readFileSync(f, "utf8"),
    name: f, // solo informativo
  }));

  const results = await new PurgeCSS().purge({
    css: cssSources,
    content: [
      "src/**/*.html",
      "src/**/*.ts",
      "public/**/*.html",
      "src/index.html",
    ],
    safelist: {
      standard: [
        // Angular / CDK / Material
        /^cdk-/,
        /^mat-/,
        /^ng-/,
        // Bootstrap estados/dinámicas
        "show",
        "collapse",
        "collapsing",
        "fade",
        "active",
        "modal",
        "modal-backdrop",
        "offcanvas",
        "dropdown",
        "dropdown-menu",
        "dropdown-toggle",
        "toast",
        "alert",
        // Grid/utilidades Bootstrap (regex)
        /^container(-fluid)?$/,
        /^row$/,
        /^col(-sm|-md|-lg|-xl|-xxl)?-\d+$/,
        /^g(-\d+)?$/,
        /^order(-\d+)?$/,
        /^d(-\w+)?$/,
        /^justify-content-/,
        /^align-items-/,
        /^align-self-/,
        /^text-/,
        /^bg-/,
        /^border(-\w+)?$/,
        /^rounded(-\w+)?$/,
        /^position-/,
        /^top-/,
        /^bottom-/,
        /^start-/,
        /^end-/,
        /^z-/,
        /^m[trblxy]?-\d+$/,
        /^p[trblxy]?-\d+$/,
        /^gap-\d+$/,
        // Carousel
        /^carousel/,
        /^carousel-item$/,
        /^carousel-inner$/,
        /^carousel-caption$/,
        /^carousel-control-(prev|next)$/,
        // Bootstrap Icons
        "bi",
        /^bi-/,
      ],
    },
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/.%]+/g) || [],
    keyframes: true,
    fontFace: true,
    variables: true,
  });

  // Escribe siempre por índice 1:1 con cssFiles
  results.forEach((r, i) => {
    const out = cssFiles[i];
    const before = fs.statSync(out).size;
    const backup = `${out}.bak`;
    if (!fs.existsSync(backup)) fs.copyFileSync(out, backup);
    fs.writeFileSync(out, r.css, "utf8");
    const after = fs.statSync(out).size;
    console.log(
      `✅ Purged: ${path.basename(out)}  ${Math.round(
        before / 1024
      )}kB → ${Math.round(after / 1024)}kB`
    );
  });

  console.log("🎉 PurgeCSS terminado.");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
