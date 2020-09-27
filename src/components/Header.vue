<template>
  <div class="header">
    <h1>Hi there ! I am {{ message }}</h1>
  </div>
</template>
<script>
export default {
  props: [
      'message'
  ]
};
</script>>

<style>
    .header{
        background: aquamarine;
        padding:10px;
        margin-top:0 ;
    }

</style>
