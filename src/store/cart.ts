import { defineStore } from "pinia";
import { cloneDeep } from "lodash-es";
import { cartAdd, cartGet } from "../api/user";
import { useUserStore } from "./user";

export interface CartType {
  objectId: string;
  proname: string;
  originprice: number;
  img1: string;
  ischeck: boolean;
  n: number;
}
export interface CartState {
  list: CartType[];
}
export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    list: [
      //   {
      //     objectId: "12321312325",
      //     proname: "手机",
      //     originprice: 999,
      //     img1: "",
      //     ischeck: false,
      //     n: 2,
      //   },
      //   {
      //     objectId: "123213153455",
      //     proname: "洗衣机",
      //     originprice: 1998,
      //     img1: "",
      //     ischeck: true,
      //     n: 3,
      //   },
    ],
  }),
  getters: {
    cartAllInfo() {
      //统计购物车总计信息 （总数、总价、全选）
      let allNum = 0; //总数
      let checkPrice = 0; //应付总价
      let allCheck = true; //全选
      this.list.forEach((item: CartType) => {
        allNum += item.n;
        if (item.ischeck) {
          checkPrice += item.n * item.originprice * 100;
        }
        if (!item.ischeck) {
          allCheck = false;
        }
      });
      return {
        allNum,
        checkPrice,
        allCheck,
      };
    },
  },
  actions: {
    async cartAddAction(cartObj: CartType) {
      //   console.log(cartObj);
      //   this.list.push(cartObj);
      for (let i = 0; i < this.list.length; i++) {
        //判断同类商品是否已存在
        if (this.list[i].objectId === cartObj.objectId) {
          this.list[i].n++;
          // localStorage.setItem("cartList", JSON.stringify(this.list));
          return;
        }
      }
      //新增一条
      const user = useUserStore();
      let userid = user?.userInfo?.objectId;
      if (userid) {
        let { proname, img1, originprice, ischeck, n } = cartObj;
        let res = await cartAdd({
          proname,
          img1,
          originprice,
          ischeck,
          n,
          userid,
        });
        console.log(res);
        this.list = [...this.list, cartObj];
        // localStorage.setItem("cartList", JSON.stringify(this.list));
      }
    },
    async cartInitAction() {
      //初始化购物车数据
      const user = useUserStore();
      let userid = user?.userInfo?.objectId;
      if (userid) {
        let res = await cartGet(userid);
        this.list = res.data.results;
      }
    },
    cartAllcheckAction() {
      //全选按钮
      let arr = cloneDeep(this.list); //深拷贝
      arr.forEach((item: CartType) => {
        item.ischeck = this.cartAllInfo.allCheck;
      });
      this.list = arr;
    },
  },
});
// 15730488855
