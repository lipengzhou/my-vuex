import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ // // 内部会创造一个 Vue 实例用于通信
  state: { // 组件的状态，类似于组件中的 data
    count: 0
  },
  getters: { // 容器中的的 computed 计算属性，有缓存特性，依赖数据变化重新计算
    getterCount (state) {
      return state.count + 10
    }
  },
  mutations: { // 同步修改 state 的方法，类似于组件中的 methods
    increment (state) {
      state.count++
    }
  },
  actions: { // 异步修改 state：执行异步操作，提交 mutation 同步修改 state
    incrementAsync (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }
  },
  modules: { // 数据模块
  }
})
