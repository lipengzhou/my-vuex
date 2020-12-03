export default Vue => {
  console.log('mixin')
  Vue.mixin({
    beforeCreate: vuexInit
  })

  function vuexInit () {
    const options = this.$options
    if (options.store) { // 根实例
      this.$store = options.store
    } else if (options.parent && options.parent.$store) {
      // 子组件
      this.$store = options.parent.$store
    }
  }
}
