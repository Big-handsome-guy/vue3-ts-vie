<template>
  <div class="goods-cont">
    <div
      class="goods-item"
      v-for="item in list"
      :key="item.objectId"
      @click="handleDetail(item)"
    >
      <img :src="item.img1" alt="" />
      <h4 class="fs-24">{{ item.proname }}</h4>
      <p class="fs-20 color-red">{{ item.originprice }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
interface Goods {
  objectId: string;
  proname: string;
  originprice: number;
  img1: string;
}
interface List {
  list: Array<Goods>;
}
defineProps<List>();
const handleDetail = (item: Goods) => {
  router.push({
    path: "/detail",
    query: {
      ...item,
    },
  });
};
</script>

<style lang="scss" scoped>
.goods-cont {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.goods-item {
  width: 35rem;
  img {
    height: 30rem;
    background-color: #d8d8d8;
  }
}
</style>
