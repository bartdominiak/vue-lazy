import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueLazy',
    file: 'dist/vue-lazy.esm.js',
    format: 'esm',
    globals: {
      'vue': 'vue',
      'intersection-observer': 'intersection-observer'
    }
  },
  external: [
    'vue'
  ]
})

export default config
