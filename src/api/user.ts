import request from "../utils/request";
import { UserType, AddressType } from "../types/user";

//注册
export const userReg = (params: UserType) => {
  return request.post("/users", params);
};

//登录
export const userLogin = (params: UserType) => {
  return request.post("/login", params);
};

//购物车
export const cartAdd = (params: any) => {
  return request.post("/classes/VueCart", params);
};

export const cartGet = (userid: string) => {
  return request.get(`/classes/VueCart?where={"userid":"${userid}"}`);
};

//地址管理
export const addressAdd = (params: AddressType) => {
  return request.post("/classes/VueAddress", params);
};

export const addressGet = (userid: string) => {
  return request.get(`/classes/VueAddress?where={"userid":"${userid}"}`);
};

export const addressUpdate = (objectId: string, params: AddressType) => {
  return request.put(`/classes/VueAddress/${objectId}`, params);
};
