import applyMixin from './mixin'

let Vue

export class Store {
  constructor (options) {
    // 最简单的做法，但是数据不是响应式的
    // this.state = options.state

    const state = options.state

    this.getters = {}
    const computed = {}
    for (const [key, fn] of Object.entries(options.getters)) {
      computed[key] = () => {
        return fn(this.state)
      }

      Object.defineProperty(this.getters, key, {
        get: () => {
          return this._vm[key]
        }
      })
    }

    // 初始化响应式 state 数据
    this._vm = new Vue({
      data: {
        // 通过 $xxx 命名的属性不会被代理到 Vue 实例上
        $$state: state
      },
      computed
    })

    // mutations
    this._mutations = {}
    for (const [type, fn] of Object.entries(options.mutations)) {
      this._mutations[type] = payload => {
        fn.call(this, this.state, payload)
      }
    }

    // actions
    this._actions = {}
    for (const [type, fn] of Object.entries(options.actions)) {
      this._actions[type] = payload => {
        fn.call(this, this, payload)
      }
    }
  }

  commit = (type, payload) => { // 确保解构使用 commit 的时候内部 this 指向是正确的
    this._mutations[type](payload)
  }

  dispatch = (type, payload) => {
    this._actions[type](payload)
  }

  get state () {
    return this._vm._data.$$state
  }
}

export const install = (_Vue, options) => {
  console.log('install')
  Vue = _Vue
  applyMixin(Vue)
}
