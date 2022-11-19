<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserType } from "../types/user";
// import { userLogin } from "../api/user";
import { useUserStore } from "../store/user";

const username = ref("老六");
const password = ref("123456");
const user = useUserStore();
const onSubmit = (values: UserType) => {
  console.log("submit", values);
  // userLogin(values);
  user.userLoginAction(values);
};
</script>

<style scoped></style>
