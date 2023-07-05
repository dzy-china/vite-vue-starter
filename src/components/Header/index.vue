<template>
  <h1> {{ count }} </h1>
  <h1> {{ countComputed }} </h1>

</template>

<script setup>
import { useCounterStore } from "@/store/counter";
import {computed} from "vue";
const store = useCounterStore()

const count = computed( ()=> store.count)
const countComputed = computed( ()=> store.countComputed)

</script>

<style scoped>

</style>