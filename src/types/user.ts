export type UserType = {
  username: string;
  password: string;
};

export type UserInfoType = {
  username: string;
  objectId: string;
  sessionToken: string;
  shortId: string;
  avatar?: string;
};

export type AddressType = {
  objectId: string;
  userid: string;
  name: string;
  tel: string;
  postalCode: string;
  areaCode: string;
  isDefault: boolean;
  province: string;
  city: string;
  county: string;
  addressDetail: string;
  address: string;
};

export type AddressListAddress = {
  name: string;
  tel: string;
  address: string;
  isDefault: boolean;
  id: string;
};
