<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Aos from  'aos/dist/aos.js';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  mounted(){
    Aos.init();
  }
}
</script>
<style>

</style>
