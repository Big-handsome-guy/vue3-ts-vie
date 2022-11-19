import { ref } from "vue";
import { goodsGet } from "../api/home";
import { GoodsType } from "../types/prod";

export const useGoodsList = async () => {
  //商品列表
  const goodslist = ref<Array<GoodsType>>([]);
  const { data } = await goodsGet();
  goodslist.value = data.results;
  // console.log(data);
  //列表分页
  const finished = ref<boolean>(false); //分页结束的控制
  const loading = ref<boolean>(false); //保证每次触底都能触发load
  let page: number = 2;
  const handleLoad = async () => {
    //触底且finished为false的时候执行
    // console.log("handleLoad触发了");
    const { data } = await goodsGet(page);
    if (data.results.length) {
      page++;
      goodslist.value = [...goodslist.value, ...data.results]; //将新数据包追加到原有的数据包
      loading.value = false; //保证每次触底都能触发请求
      return;
    }
    finished.value = true; //没有更多的数据了
  };
  return {
    goodslist,
    finished,
    loading,
    handleLoad,
  };
};
