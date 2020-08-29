import './polyfills'

import LazyImage from './components/LazyImage.vue'
import LazyPicture from './components/LazyPicture.vue'

const install = Vue => {
  Vue.component('lazy-image', LazyImage)
  Vue.component('lazy-picture', LazyPicture)
}

export default {
  install
}

export { LazyImage, LazyPicture }
