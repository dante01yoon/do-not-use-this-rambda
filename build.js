const { build } = require("esbuild");
const { dependencies, peerDependencies } = require("./package.json");
console.log(dependencies, peerDependencies);
build({
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  bundle: true,
  external: Object.keys({
    ...dependencies,
    ...peerDependencies,
  }),
});
