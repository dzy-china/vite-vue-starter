<template>
  <el-button @click="countMethod(5)">点击修改值</el-button>
</template>

<script setup>
import { useCounterStore } from "@/store/counter";
const store = useCounterStore()
const {countMethod} = store

</script>

<style scoped>

</style>