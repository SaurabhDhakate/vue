<template>
  <div id="app">
    <Header 
    :message="name"
    />
    <Image
      :src="src"
     />
    <button v-on:click="change()">Next</button>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Image from "./components/Image.vue"

export default {
  name:"app",
  components:{
    Header,
    Image,
  },
  data(){
    return{
      name:"Saurabh",
      src:"https://picsum.photos/360/361"
    }
  },
  methods:{
    change: function(){
      // var one = ["https://picsum.photos/360/361","https://picsum.photos/360/360"]
      var i = Math.floor(Math.random() * 10)
      this.src= "https://picsum.photos/360/36"+String(i)
      return this.src
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
