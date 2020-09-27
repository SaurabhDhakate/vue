<template>
  <div class="img">
    <div v-for="item in srci" :key="item" class="new">
        <img :src="item" style="border-radius: 10px;" v-if="srci.indexOf(item)==1">
        <img :src="item" style="opacity:0.5;" v-if="srci.indexOf(item)==0||srci.indexOf(item)==2" :class="isbig">
        <div v-else style="width:0%"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["srci","isbig"],
};
</script>
<style>
.img {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
img {
  border-radius: 30%;
  max-height: 360px;
  width: 100%;
}
.new{
    width: 30%;
}
</style>