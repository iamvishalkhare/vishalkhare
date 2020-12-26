<template>
  <div>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  created(){
      document.title = "Vishal Khare"
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&family=Roboto+Condensed:wght@300;400;700&display=swap');

body {
  background-color: #0A192F !important;
  scroll-padding-top: 70px;
}
</style>
