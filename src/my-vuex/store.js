// eslint-disable-next-line no-unused-vars
let Vue

export class Store {
  constructor (options) {
    console.log(options)
  }
}

export const install = (_Vue, options) => {
  Vue = _Vue
  console.log('install')
}
