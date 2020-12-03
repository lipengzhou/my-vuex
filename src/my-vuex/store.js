import applyMixin from './mixin'

let Vue

export class Store {
  constructor (options) {
    console.log(options)
  }
}

export const install = (_Vue, options) => {
  console.log('install')
  Vue = _Vue
  applyMixin(Vue)
}
