import LazyImage from '../components/LazyImage.vue'
import '../../dist/vue-lazy.css'

export default {
  title: 'Image',
}

export const Image = () => ({
  components: { LazyImage },
  template: `
    <lazy-image
      src="https://via.placeholder.com/250"
      alt="example aternative text"
      width="250"
      height="250"
    />
  `
})

export const ImageWithSrcset = () => ({
  components: { LazyImage },
  template: `
    <lazy-image
      src="https://via.placeholder.com/250"
      srcset="https://via.placeholder.com/250 250w, https://via.placeholder.com/500 500w, https://via.placeholder.com/1000 1000w"
      alt="example aternative text"
      width="250"
      height="250"
    />
  `
})

export const Picture = () => ({
  components: { LazyImage },
  template: `
    <picture>
      <source media="(min-width:1366px)" srcset="https://via.placeholder.com/1360x300">
      <source media="(min-width:1024px)" srcset="https://via.placeholder.com/1024x300">
      <source media="(min-width:900px)" srcset="https://via.placeholder.com/900x300">
      <source media="(min-width:700px)" srcset="https://via.placeholder.com/700x300">
      <source media="(min-width:300px)" srcset="https://via.placeholder.com/300x300">

      <lazy-image
        src="https://via.placeholder.com/250"
        alt="example aternative text"
      />
    </picture>
  `
})
