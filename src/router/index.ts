import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStore } from "../store/user";

const router = createRouter({
  history: createWebHashHistory(), //启用hashi路由模式；
  routes: [
    {
      path: "/",
      component: () => import("../views/main.vue"),
      children: [
        //子路由
        {
          path: "home",
          component: () => import("../views/home/index.vue"),
        },
        {
          path: "cart",
          component: () => import("../views/cart.vue"),
        },
        {
          path: "mine",
          component: () => import("../views/mine.vue"),
        },
      ],
    },
    {
      path: "/detail",
      component: () => import("../views/details.vue"),
    },
    {
      path: "/reg",
      component: () => import("../views/reg.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/login.vue"),
    },
    {
      path: "/address/list",
      component: () => import("../views/address/index.vue"),
    },
    {
      path: "/address/detail/:idx",
      component: () => import("../views/address/detail.vue"),
    },
    {
      path: "/collect",
      component: () => import("../views/collect.vue"),
    },
    {
      path: "/test",
      component: () => import("../views/test/index.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // console.log(to, from);
  const user = useUserStore();
  if (to.path == "/mine" || to.path == "/cart") {
    if (!user.userInfo) {
      next("/login"); //未登录
    } else {
      next(); //已登录
    }
  }
  next(); //不需要拦截的路由
});

export default router;
