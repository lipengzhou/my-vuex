import applyMixin from './mixin'

let Vue

export class Store {
  constructor (options) {
    // 最简单的做法，但是数据不是响应式的
    // this.state = options.state

    const state = options.state

    // 初始化响应式 state 数据
    resetStoreVM(this, state)
  }

  get state () {
    return this._vm._data.$$state
  }
}

function resetStoreVM (store, state) {
  store._vm = new Vue({
    data: {
      // 通过 $xxx 命名的属性不会被代理到 Vue 实例上
      $$state: state
    }
  })
}

export const install = (_Vue, options) => {
  console.log('install')
  Vue = _Vue
  applyMixin(Vue)
}
