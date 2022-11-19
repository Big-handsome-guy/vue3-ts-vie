//管理数字的模块
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    num: 88,
  }),
  getters: {
    double: (state) => {
      return state.num * 2;
    },
  },
  actions: {
    increment() {
      this.num++;
    },
  },
});
