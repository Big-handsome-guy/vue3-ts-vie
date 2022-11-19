//集中管理项目中所有的异步请求
import request from "../utils/request";

export const bannerGet = () => {
  return request.get("/classes/Banner");
};

export const goodsGet = (page: number = 1) => {
  return request.get("/classes/VueProduct", {
    params: {
      limit: 10,
      skip: (page - 1) * 10,
    },
  });
};
