<template>
  <div>
    <!-- <h1>组合式API结合TS</h1> -->
    <!-- 1.演示props、emits -->
    <!-- <PropEmitDemoVue name="111" :score="score" @myeventname="handleScore" /> -->

    <!-- 2.演示ref reactive computed -->
    <!-- <RedReactiveComputedDemo /> -->

    <!-- 3.事件、ref属性 -->
    <!-- <EventDemoVue /> -->
    <CompAVue />
    <CompBVue />
  </div>
</template>

<script setup lang="ts">
import CompAVue from "./PiniaDemo/CompA.vue";
import CompBVue from "./PiniaDemo/CompB.vue";
// 1.演示props、emits
// import { ref } from "vue";
// import PropEmitDemoVue from "./composition/PropEmitDemo.vue";
// import { Arg } from "./types/testType";
// const score = ref<number>(80);
// const handleScore = (obj: Arg) => {
//   score.value = obj.num;
// };
// 2.演示ref reactive computed
// import RedReactiveComputedDemo from "./composition/RefReactiveComputedDemo.vue";

// <!-- 3.事件、ref属性 -->
// import EventDemoVue from "./composition/EventDemo.vue";

// 4.演示provide和inject
// import { provide } from "vue";
// provide("color", "red"); //第一个是键名，第二个是键值
</script>

<style scoped></style>
