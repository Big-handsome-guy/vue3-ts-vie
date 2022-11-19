<template>
  <div>
    <h3 :style="{ color: testColor }">通过ref绑定这个组件</h3>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

defineExpose({
  msg: "fuck you",
});
const testColor = inject<string>("color");
</script>

<style scoped></style>
