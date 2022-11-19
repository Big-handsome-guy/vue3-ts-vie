<template>
  <div class="box">
    <h1>A组件:{{ count.num }}</h1>
    <h2>getters数据:{{ count.double }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../../../store/count";
const count = useCounterStore();
</script>

<style scoped>
.box {
  height: 400px;
  border: 2px solid #333;
}
</style>
