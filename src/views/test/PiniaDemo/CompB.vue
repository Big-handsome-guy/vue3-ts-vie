<template>
  <div class="box">
    <h1>B组件,{{ count.num }}</h1>
    <button @click="handleAdd">数字+</button>
    <button @click="handleChange">改变数字</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../../../store/count";
const count = useCounterStore();
const handleAdd = () => {
  count.increment(); //触发action
};
const handleChange = () => {
  count.$patch({
    num: 233,
  });
};
</script>

<style scoped>
.box {
  height: 400px;
  border: 2px solid #333;
}
</style>
