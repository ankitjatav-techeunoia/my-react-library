import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true,
      exports: 'named'
    }
  ],
  // Exclude React dependencies from the bundle
  external: ["react", "react-dom", "styled-components"],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'] // ✅ Allow resolving .jsx files
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled', // required in @rollup/plugin-babel
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    })
  ]
};
