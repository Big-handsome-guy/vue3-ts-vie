<template>
  <van-address-edit
    :area-list="areaList"
    :address-info="addressInfo"
    show-postal
    show-delete
    show-set-default
    show-search-result
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="handleSave"
    @delete="handleDelete"
  />
</template>

<script setup lang="ts">
import { areaList } from "@vant/area-data";
import { AddressType } from "../../types/user";
import { useAddressStore, useUserStore } from "../../store/user";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const user = useUserStore();
const address = useAddressStore();
const addressInfo = ref<AddressType>();

let idx = Number(route.params.idx);
console.log(idx);
if (idx) {
  addressInfo.value = address.list[idx];
}
const handleSave = (content: AddressType) => {
  console.log("保存", content);
  let userid = user.userInfo?.objectId;
  //新增地址
  if (userid && idx == -1) {
    address.addressAddAction({ ...content, userid });
    return;
  }
  //编辑地址
  address.addressUpdateAction(address.list[idx].objectId, content);
};
const handleDelete = () => {
  console.log("删除");
};
</script>

<style scoped></style>
