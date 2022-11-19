<template>
  <div>
    <h2>ref属性获取dom、ref获取组件对象和事件处理类型标注</h2>
    <input type="text" ref="myInput" />
    <ComponA ref="myComp" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ComponA from "./ComponA.vue";
// 1.操作普通input
const myInput = ref<HTMLInputElement | null>(); //绑定标签
onMounted(() => {
  console.log(myInput.value);
  (myInput.value as HTMLInputElement).focus();
});

//2.操作组件
const myComp = ref<InstanceType<typeof ComponA> | null>(null);
onMounted(() => {
  console.log(myComp.value);
});
</script>

<style scoped></style>
