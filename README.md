[![npm version](https://badge.fury.io/js/vue-lazy.svg)](https://badge.fury.io/js/vue-lazy)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-lazy)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bartdominiak/vue-lazy/blob/master/LICENSE.md)

# vue-lazy
> Lightweight Image/Picture lazyload based on Intersection API.

## About
Please note that this lib is on very early stage.

## Storybook
- 📕 [Example](https://vue-lazy.surge.sh)
- 📺 [Props/Events/Slots](https://vue-lazy.surge.sh/?path=/docs/image--default)

## Benefits
- Lightweight
- Picture tag support

## Installation & Usage
### `Vue@3` version
Will be added soon

### `Vue@2` version
#### Installation

```terminal
  yarn add vue-lazy // or npm install vue-lazy
```

#### Usage - Globally

```js
import Vue from 'vue'
import VueLazy from 'vue-lazy'
import 'vue-lazy/dist/vue-lazy.css'

Vue.use(VueLazy)
```

#### Usage - Locally

```js
import { LazyImage } from 'vue-lazy'
import 'vue-lazy/dist/vue-lazy.css'

export default {
  components: { LazyImage }
}
```

### Example usage
If you want to see live examples, please jump to Storybook page.

### Image

```html
<lazy-image
  src="https://via.placeholder.com/250"
  alt="example aternative text"
/>
```

### Image with known width (prevent jumping content on page)
```html
<lazy-image
  src="https://via.placeholder.com/250"
  alt="example aternative text"
  width="250"
  height="250"
/>
```

### Picture
```html
<lazy-image
  src="https://via.placeholder.com/250"
  alt="example aternative text"
  tag="picture"
>
  <source media="(min-width:1366px)" srcset="https://via.placeholder.com/1360x300">
  <source media="(min-width:1024px)" srcset="https://via.placeholder.com/1024x300">
</lazy-image>
```

## Development

Install necessary depandancies with yarn or npm
```
  yarn // or npm install
```

Run Storybook for development mode
```
  yarn storybook:dev
```

Release
```
  yarn release
```

## Contribution
If you have a feature request then feel free to start a new issue, or just grab existing one.

## License
MIT
