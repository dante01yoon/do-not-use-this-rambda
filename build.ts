const { build } = require("esbuild");
const { dependencies, peerDependencies } = require("./package.json");

const shared = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  external: Object.keys({
    ...dependencies,
    ...peerDependencies,
  }),
};

build({
  ...shared,
  outfile: "dist/index.js",
});

build({
  ...shared,
  outfile: "dist/index.esm.js",
  format: "esm",
});
