import base from './rollup.config.base'
import resolve from '@rollup/plugin-node-resolve'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueLazy',
    file: 'dist/vue-Lazy.js',
    format: 'iife'
  },
  external: [ 'vue' ]
})

config.plugins.push(resolve())

export default config
