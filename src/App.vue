<template>
  <div id="app">
    <h1>My Vuex</h1>
    <!-- <p>State: {{ $store.state.count }}</p>
    <p>Getters: {{ $store.getters.getterCount }}</p>
    <button @click="$store.commit('increment')">同步修改状态</button>
    <br><br>
    <button @click="$store.dispatch('incrementAsync')">异步修改状态</button> -->
  </div>
</template>

<script>
export default {
  created () {
    console.log(this)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
