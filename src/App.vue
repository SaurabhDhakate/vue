<template>
  <div id="app">
    <Header :message="name" />
    <Image :srci="src.slice(0, 3)" /><br />
    <div class="btns">
      <div class="switch" v-on:click="changep()"><h3>Prev</h3></div>
      <div class="switch" v-on:click="changen()"><h3>Next</h3></div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Image from "./components/Image.vue";

export default {
  name: "app",
  components: {
    Header,
    Image,
  },
  data() {
    return {
      name: "Saurabh",
      src: [
        "https://picsum.photos/360/361",
        "https://picsum.photos/360/360",
        "https://picsum.photos/360/359",
        "https://picsum.photos/360/362",
        "https://picsum.photos/360/357",
        "https://picsum.photos/360/358"
      ],
    };
  },
  methods: {
    changen: function () {
      let arr = [...this.src];
      let len = arr.length-1
      let pic1 = arr[len];
      arr.pop();
      arr.unshift(pic1);
      this.src = arr;
      return this.src;
    },
    changep: function () {
      let arr = [...this.src];
      let pic1 = arr[0];
      arr.shift();
      arr.push(pic1);
      this.src = arr;
      return this.src;
    },
    
    },
    mounted(){
      setInterval(() => {
        this.changen()
      }, 7000);
    }
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app {
  background: black;
}
.switch {
  background: aquamarine;
  padding: 1px;
  width: 100px;
  margin: 10px;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
}
template {
  background: black;
}
/* body{
  background: black;
} */
</style>
<style scoped>
template {
  width: 100%;
  background: black;
}
.btns {
  display: inline-flex;
}
</style>
