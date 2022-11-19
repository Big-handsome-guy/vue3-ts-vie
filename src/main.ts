import { createApp } from "vue";
import "./style.css";
import "./assets/css/base.scss";
import "vant/es/notify/style";
import App from "./App.vue";
import router from "./router/index";
import { initRem } from "./utils/rem";
import { createPinia } from "pinia";
import { useUserStore } from "./store/user";

initRem(); //初始化rem配置
const pinia = createPinia();
const app = createApp(App);
app.use(pinia); //注入pinia
//从本地存储提取用户信息给到状态机
const user = useUserStore();
let userinfo = localStorage.getItem("userInfo");
if (userinfo) {
  user.userInfo = JSON.parse(userinfo);
}
app.use(router); //路由注入
app.mount("#app");
