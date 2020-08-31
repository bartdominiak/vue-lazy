<script>
export default {
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
  data: () => ({
    isLoaded: false
  }),
  computed: {
    getSrc() {
      return this.isLoaded ? this.src : this.placeholder
    },
    getSrcset() {
      return this.isLoaded ? this.srcset : null
    },
    getClass() {
      return [
        'lazyload',
        { 'lazyloaded': this.isLoaded }
      ]
    },
    placeholder() {
      if (this.width && this.height) {
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${this.width} ${this.height}'%3E%3C/svg%3E`
      }

      return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    }
  },
  mounted() {
    const observer = new IntersectionObserver(entry => {
      if (entry[0] && entry[0].isIntersecting) {
        this.onLoad()
        observer.disconnect()
      }
    }, this.intersectionConfig)

    observer.observe(this.$el)
  },
  methods: {
    onLoad() {
      this.isLoaded = true
      this.$emit('loaded', true)
    }
  },
  render(h) {
    const ImageComponent = h('img', {
      attrs: {
        src: this.getSrc,
        srcset: this.getSrcset,
        width: this.width,
        height: this.height,
        alt: this.alt
      },
      domProps: this.$attrs,
      class: this.getClass
    })

    if (this.tag === 'picture') {
      const pictureComponent = h('picture', this.isLoaded ? [this.$slots.default, ImageComponent] : ImageComponent)
      return pictureComponent
    }

    return ImageComponent
  }
}
</script>
