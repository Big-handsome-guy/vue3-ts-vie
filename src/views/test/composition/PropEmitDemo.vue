<template>
  <div>
    <h2>{{ name }}--{{ score }}</h2>
    <button @click="handleEmit">点我</button>
  </div>
</template>

<script setup lang="ts">
//方法一：vue中的props验证
// defineProps({
//     name: String,
//     score: {
//         type: Number,
//         required: true,
//     }
// })
//方法二：通过ts泛型的方式验证
interface Stu {
  name: string;
  score: number;
}
defineProps<Stu>();

//方法1:约定emits
// let emits = defineEmits(["myeventname"]);

//方法2:通过泛型约束emits
interface Arg {
  num: number;
  msg: string;
}
const emits = defineEmits<{
  (e: "myeventname", arg: Arg): void;
}>();
const handleEmit = () => {
  emits("myeventname", { num: 666, msg: "fuck you" });
};
</script>

<style scoped></style>
