module.exports = {
  transform: {
    "\\.[jt]sx?$":  [ 'esbuild-jest', { 
        loaders: {
          '.spec.js': 'jsx',
          '.spec.ts': 'tsx',
        }
      }
    ]
  },
}