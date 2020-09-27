<template>
  <div class="img">
    <div v-for="item in srci" :key="item">
        <img :src="item" style="margin:10px;border-radius: 0px;" v-if="srci.indexOf(item)==1">
        <img :src="item" style="margin:10px;opacity:0.5;" v-else :class="isbig">
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
  vertical-align: auto;
  display: inline-flex;
  flex-wrap: wrap;
}
img {
  border-radius: 15px;
  max-height: 360px;
}
</style>