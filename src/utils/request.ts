import axios from "axios";
import { Notify } from "vant";

enum StatusList {
  "注册成功" = 201,
  "操作成功" = 200,
}
const instance = axios.create({
  baseURL: "https://potato.twohcar.top/1.1", //接口的通用路径集中配置
  headers: {
    //向后端携带验证信息
    "X-LC-Id": "JiveSO6uKFuddVvr1DBLcEJ6-gzGzoHsz",
    "X-LC-Key": "UFQ3Kh4mbPVqKN5YCx7pdKd2",
    "Content-Type": "application/json",
  },
});
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // console.log("路过了请求拦截器");
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let { url } = response.config;
    if (url?.indexOf("login") != -1 || url?.indexOf("users") != -1) {
      Notify({ type: "success", message: StatusList[response.status] });
    }
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    Notify({ type: "danger", message: error.response.data.error });
    return Promise.reject(error);
  }
);
export default instance;
