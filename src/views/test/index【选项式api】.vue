<template>
  <div>
    <OptionsDemoVue
      name="Tom"
      school="家里蹲大学"
      class="1班"
      :score="55"
      @changemsg="handleMsg"
    />
    <h2>{{ msg }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import OptionsDemoVue from "./OptionsDemo.vue";
const msg = ref<string>("hello");
const handleMsg = (str: string) => {
  msg.value = str;
};
</script>

<style scoped></style>
