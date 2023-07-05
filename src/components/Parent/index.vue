<template>

  <h1> 组件Parent {{ subscribe }}</h1>
</template>

<script setup>
import store from "@/store";

const subscribe = ref("")
store.subscribe("p1", (value)=>{
  subscribe.value = value
})

</script>

<style scoped>

</style>