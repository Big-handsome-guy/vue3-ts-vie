<template>
  <div>
    <h1>在选项式API中使用TS</h1>
    <p>{{ name }}--{{ school }}--{{class}}--{{ score }}--{{ scoreType }}</p>
    <button @click="handleEmit">触发emits</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  //启用类型推导
  props: {
    name: {
      type: String,
      required: true,
    },
    school: String,
    class: String,
    score: {
      type: Number,
      required: true,
    },
  },
  emits: {
    //对$emits约束
    changemsg(arg: string) {
      return arg;
    },
  },

  computed: {
    scoreType(): string {
      return this.score >= 60 ? "及格" : "不及格";
    },
  },
  mounted() {
    let num = 100;
    console.log(num);
    // num = this.name; //会报错，推导出来类型不匹配
  },
  methods: {
    handleEmit() {
      this.$emit("changemsg", "123");
    },
  },
});
</script>

<style scoped></style>
