<template>
  <div class="m-t-20" v-for="(item, index) in cart.list" :key="item.objectId">
    <van-swipe-cell>
      <div class="flex align-center">
        <van-checkbox class="checkbox" v-model="item.ischeck"></van-checkbox>
        <van-card
          class="card"
          :num="item.n"
          :price="item.originprice"
          desc="描述信息"
          :title="item.proname"
          :thumb="item.img1"
        >
          <template #num>
            <van-stepper
              v-model="item.n"
              theme="round"
              button-size="22"
              disable-input
            />
          </template>
        </van-card>
      </div>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
  <van-submit-bar
    class="submit_bar"
    :price="cart.cartAllInfo.checkPrice"
    button-text="提交订单"
    @submit="handleSubmit"
  >
    <van-checkbox
      v-model="cart.cartAllInfo.allCheck"
      @click="cart.cartAllcheckAction"
      >全选</van-checkbox
    >
    <!-- <template #tip>
        你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
      </template> -->
  </van-submit-bar>
</template>

<script setup lang="ts">
import { useCartStore } from "../store/cart";
const cart = useCartStore();
const handleSubmit = () => {};
</script>

<style scoped>
.checkbox {
  margin: 0 15px;
}
.card {
  flex: 1;
}
.submit_bar {
  bottom: 50px;
}
.delete-button {
  height: 100%;
}
</style>
