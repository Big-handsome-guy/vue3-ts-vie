<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="green">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
    <h2>{{ detail.proname }}</h2>
    <p>{{ detail.originprice }}</p>
    <van-action-bar class="action-bar">
      <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-action-bar-icon
        @click="handleCart"
        icon="cart-o"
        text="购物车"
        :badge="cart.cartAllInfo.allNum"
      />
      <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
      <van-action-bar-button
        @click="handleCartAdd"
        type="warning"
        text="加入购物车"
      />
      <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "../store/cart";

const route = useRoute();
const router = useRouter();
const detail = ref();
detail.value = route.query;
//将详情数据包中的img1、img2这种数据整合成一个数组
const banner = computed<Array<string>>(() => {
  let arr = [];
  for (let attr in detail.value) {
    if (attr.indexOf("img") != -1) {
      arr.push(detail.value[attr]);
    }
  }
  return arr;
});
//加入购物车
const cart = useCartStore();
const handleCartAdd = () => {
  cart.cartAddAction({
    //触发action，提交新的商品数据
    ...detail.value,
    ischeck: true,
    n: 1,
  });
};
//跳转到购物车
const handleCart = () => {
  router.push("/cart");
};
</script>

<style scoped>
.action-bar {
  z-index: 100;
}
</style>
