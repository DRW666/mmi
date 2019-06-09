<template>
  <div id="app">
    <router-view/>
    <Footer v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import Footer from './components/common/footer.vue'
export default {
  name: 'App',
  components:{
    Footer,
  }
}
</script>

<style>
#app{
  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
}

</style>
