<template>
    <div class="img">
        <img :src="src">
    </div>
</template>
<script>
export default {
    props:[
        'src'
    ]
}
</script>
<style>
.img{
    margin-top: 15px;
}
</style>