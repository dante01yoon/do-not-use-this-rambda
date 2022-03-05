const build = require("esbuild");

build({
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  bundle: true,
});
