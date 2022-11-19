<template>
  <van-search
    shape="round"
    background="pink"
    placeholder="请输入搜索关键词"
    show-action
    class="home-search"
  >
    <template #left>
      <span>首页</span>
    </template>
    <template #action>
      <span>登录</span>
    </template>
  </van-search>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="green">
    <van-swipe-item v-for="(item, index) in bannerList" :key="item.objectId">
      <img :src="item.img" alt="" />
    </van-swipe-item>
  </van-swipe>
  <van-grid>
    <van-grid-item icon="photo-o" text="文字" />
    <van-grid-item icon="photo-o" text="文字" />
    <van-grid-item icon="photo-o" text="文字" />
    <van-grid-item icon="photo-o" text="文字" />
  </van-grid>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="handleLoad"
  >
    <Goods :list="goodslist" />
  </van-list>
  <div class="bottom"></div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { bannerGet } from "../../api/home";
import Goods from "../../components/goods.vue";
import { useGoodsList } from "../../hooks/goodsList";

//轮播
interface Banner {
  img: string;
  objectId: string;
}
const bannerList = ref<Array<Banner>>([]);
const res = await bannerGet();
// console.log(res);
bannerList.value = res.data.results;
//商品列表
const { goodslist, finished, loading, handleLoad } = await useGoodsList();
</script>

<style lang="scss" scoped>
.my-swipe {
  width: 96%;
  margin: 10px auto;
  border-radius: 6px;
  overflow: hidden;
  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.home-search {
  span {
    color: #fff;
  }
}
.bottom {
  height: 100px;
}
</style>
