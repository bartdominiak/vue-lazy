import 'intersection-observer'

import Lazy from './directives/lazy.js'

const install = Vue => {
  Vue.directive('lazy', Lazy)
}

export default {
  install
}

export { Lazy }
