<template>
  <div id="app">
    <goodsdec></goodsdec>
  </div>
</template>

<script>
import goodslist from "./page/goodslist"
import goodsins from "./page/goodsins"
import goodsdec from "./page/goodsdec"
export default {
  name: 'App',
  components:{
    goodslist,
    goodsins,
    goodsdec
  }
}
</script <style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
