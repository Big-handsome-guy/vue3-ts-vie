<script setup lang="ts">
import { useCartStore } from "./store/cart";
import { useAddressStore } from "./store/user";

const address = useAddressStore();
address.addressInitAction(); //触发异步actions从数据库加载地址数据
const cart = useCartStore();
cart.cartInitAction(); //触发异步actions从数据库加载购物车数据
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped></style>
