<template>
  <div id="app">
    <Header 
    :message="name"
    />
    <Image />
    <button>Next</button>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Image from "./components/Image.vue"

export default {
  name:"app",
  components:{
    Header,
    Image
  },
  data(){
    return{
      name:"Saurabh"
    }
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
</style>
