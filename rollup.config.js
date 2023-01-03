import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser'
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: {
    'headless-styles-rollup': './src/entry-headless-styles.js',
  },
  output: {
    dir: 'dist',
    format: 'es',
    freeze: false,
    sourcemap: true,
  },
  plugins: [
    sourcemaps(),
    replace({
      preventAssignment: true,
      values: {'process.env.NODE_ENV': '"production"'}
    }),
    nodeResolve({
      browser: true,
      exportConditions: ['module', 'import', 'development']
    }),
    commonjs({
      requireReturnsDefault: 'namespace'
    }), 
    process.env.MINIFY === 'true' ? terser() : null,
  ]
}
