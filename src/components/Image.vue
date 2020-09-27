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
    max-height: 360px;
    vertical-align: auto;
}
img{
    border-radius: 15px;
}
</style>