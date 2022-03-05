const { build } = require("esbuild");
const { dependencies, peerDependencies } = require("./package.json");

build({
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  bundle: true,
  external: Object.keys({
    ...dependencies,
    ...peerDependencies,
  }),
});
