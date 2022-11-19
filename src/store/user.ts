//管理用户信息的模块
import { defineStore } from "pinia";
import {
  userLogin,
  addressAdd,
  addressGet,
  addressUpdate,
} from "./../api/user";
import { UserType, UserInfoType, AddressType } from "../types/user";
import { useCartStore } from "./cart";
import router from "../router";

interface UserState {
  userInfo: UserInfoType | null;
}
//用户信息
export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    userInfo: null,
  }),
  actions: {
    //带异步请求的action
    async userLoginAction(params: UserType) {
      let res = await userLogin(params);
      console.log(res);
      this.userInfo = res.data;
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      router.push("/home");
      const cart = useCartStore();
      cart.cartInitAction(); //触发异步actions从数据库加载购物车数据
    },
    // userInitAction:{

    // }
  },
});
//用户地址
interface AddressState {
  list: Array<AddressType>;
  chosenId: string;
}
//新增地址
export const useAddressStore = defineStore("address", {
  state: (): AddressState => ({
    list: [
      // {
      //   id: "1",
      //   name: "张三",
      //   tel: "13000000000",
      //   address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
      //   isDefault: true,
      // },
      // {
      //   id: "2",
      //   name: "李四",
      //   tel: "1310000000",
      //   address: "浙江省杭州市拱墅区莫干山路 50 号",
      // },
    ],
    chosenId: "1",
  }),
  actions: {
    async addressAddAction(addressObj: AddressType) {
      let res = await addressAdd(addressObj);
      console.log(res);
      let { province, city, county, addressDetail } = addressObj;
      addressObj.address = province + city + county + addressDetail;
      this.list.push(addressObj);
    },
    //初始化地址列表
    async addressInitAction() {
      const user = useUserStore();
      let userid = user?.userInfo?.objectId;
      if (userid) {
        let res = await addressGet(userid);
        let { results } = res.data;
        results.forEach((item: AddressType) => {
          let { province, city, county, addressDetail } = item;
          item.address = province + city + county + addressDetail;
        });
        this.list = results;
      }
    },
    //更新地址
    async addressUpdateAction(objectId: string, addressObj: AddressType) {
      const user = useUserStore();
      let userid = user?.userInfo?.objectId;
      if (userid) {
        let res = await addressUpdate(objectId, addressObj);
        console.log(res);
        this.list = res.data.results;
      }
    },
  },
});
