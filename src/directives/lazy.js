export default {
  inserted(el, binding) {
    const { value } = binding

    const config = {
      threshold: 0.5
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        el.src = value
        el.classList.add('lazyloaded')
        observer.disconnect()
      }
    }, config)

    observer.observe(el)
  }
}
