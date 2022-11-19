<template>
  <van-cell title="个人设置" is-link />
  <van-cell title="地址管理" is-link to="/address/list" />
  <div class="p-30">
    <van-button type="danger" @click="handleLogout" block>
      退出登录
    </van-button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";

const router = useRouter();
const user = useUserStore();
const handleLogout = () => {
  user.userInfo = null;
  localStorage.removeItem("userInfo");
  router.push("/home");
};
</script>

<style scoped></style>
