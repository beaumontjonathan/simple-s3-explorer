module.exports = {
  $schema: 'https://json.schemastore.org/swcrc',
  jsc: {
    experimental: {
      plugins: [
        [
          '@swc/plugin-relay',
          {
            rootDir: __dirname,
            artifactDirectory: 'src/__generated__',
            language: 'typescript',
            eagerEsModules: true,
          },
        ],
      ],
    },
    parser: {
      syntax: 'typescript',
      dynamicImport: false,
      decorators: false,
      tsx: true,
    },
    transform: {
      react: {
        runtime: 'automatic',
        pragma: 'React.createElement',
        pragmaFrag: 'React.Fragment',
        throwIfNamespace: true,
        development: false,
        useBuiltins: false,
      },
    },
    target: 'es2021',
    loose: false,
    externalHelpers: false,
    // Requires v1.2.50 or upper and requires target to be es2016 or upper.
    keepClassNames: false,
  },
  minify: false,
};
