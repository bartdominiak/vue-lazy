<script>
import { onMounted, computed, reactive } from 'vue'

export default {
  name: 'LazyImage',
  props: {
    src: {
      required: true,
      type: String
    },
    width: {
      type: String,
      default: () => null
    },
    height: {
      type: String,
      default: () => null
    },
    alt: {
      type: String,
      default: () => null
    },
    srcset: {
      type: String,
      default: () => null
    },
    intersectionConfig: {
      type: Object,
      default: () => ({ threshold: [0, 1] })
    },
    tag: {
      type: String,
      default: () => 'img',
      validator: value => ['img', 'picture'].includes(value)
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      isLoaded: false,
      getSrc: computed(() => state.isLoaded ? state.src : state.placeholder),
      getSrcset: computed(() => state.isLoaded ? state.srcset : null),
      getClass: computed(() => [
        'lazyload',
        { 'lazyloaded': state.isLoaded }
      ]),
      placeholder: computed(() => {
        if (props.width && props.height) {
          return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${props.width} ${props.height}'%3E%3C/svg%3E`
        }

        return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
      })
    })

    function onLoad() {
      state.isLoaded = true
      emit('loaded', true)
    }

    onMounted(() => {
      const observer = new IntersectionObserver(entry => {
        if (entry[0] && entry[0].isIntersecting) {
          onLoad()
          observer.disconnect()
        }
      }, props.intersectionConfig)

      observer.observe(this.$el)
    })

    return () => {
      // TODO
    }
  }
}
</script>
