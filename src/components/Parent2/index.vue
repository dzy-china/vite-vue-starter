<template>
  <h1> 组件Parent2 {{myMsg}}</h1>

  <button @click="onEmit" type="button">点击把数据传送到Parent </button>
</template>

<script setup>

import store from "@/store";
const myMsg = ref("我是Parent2信息")

const onEmit = ()=>{
  store.publish("p1", myMsg.value)
}


</script>

<style scoped>

</style>