<template>
  <div>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="handleLoad"
    >
      <Goods :list="goodslist" />
    </van-list>
  </div>
</template>

<script setup lang="ts">
import goodsVue from "../components/goods.vue";
import { useGoodsList } from "../hooks/goodsList";

const { goodslist, finished, loading, handleLoad } = await useGoodsList();
</script>

<style scoped></style>
