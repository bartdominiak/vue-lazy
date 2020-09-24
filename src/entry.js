import './polyfills'

import LazyImage from './components/LazyImage.vue'

const install = app => {
  app.component('lazy-image', LazyImage)
}

export default {
  install
}

export { LazyImage }
