import './polyfills'

import LazyImage from './components/LazyImage.vue'

const install = Vue => {
  Vue.component('lazy-image', LazyImage)
}

export default {
  install
}

export { LazyImage }
