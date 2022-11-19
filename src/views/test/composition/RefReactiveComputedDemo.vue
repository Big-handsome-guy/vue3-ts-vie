<template>
  <div>
    <h1>为ref reactive computed 添加约束</h1>
    <button @click="num++">点我数字加加{{ num }}--{{ userState }}</button>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { User } from "../types/testType";
const num = ref<number>(666);

const user = reactive<User>({
  name: "hello",
  score: 40,
});
const userState = computed<string>(() => {
  return user.score >= 60 ? "及格" : "不及格";
});
</script>

<style scoped></style>
