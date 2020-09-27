<template>
  <div id="app">
    <Header 
    :message="name"
    />
    <Image
      :src="src"
     />
    <div class="switch" v-on:click="change()"><h3>Next</h3></div>
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
.app{
  background: black;
}
.switch{
  background: aquamarine;
  padding: 1px;
  width: 100px;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px ;
  cursor: pointer;
}
template{
  background:black;
  
}
/* body{
  background: black;
} */
</style>
<style scoped>
template{
  width: 100%;
  background: black;
}
</style>
