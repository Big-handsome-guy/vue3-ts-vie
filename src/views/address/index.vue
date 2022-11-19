<template>
  <van-address-list
    v-model="address.chosenId"
    :list="address.list"
    default-tag-text="默认"
    @add="handleAdd"
    @edit="handleEdit"
  />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAddressStore } from "../../store/user";
import { AddressType } from "../../types/user";

const router = useRouter();
const address = useAddressStore();
const handleAdd = () => {
  console.log("新增");
  router.push(`/address/detail/${-1}`);
};
const handleEdit = (item: AddressType, index: number) => {
  console.log("编辑");
  router.push(`/address/detail/${index}`);
};
</script>

<style scoped></style>
