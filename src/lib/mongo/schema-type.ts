export type OurDate = Date | string;

type IPartyMember = {
  user: IUser;
  price: number;
  status: string;
};
export interface ITest {
  name: string;
  age: number;
}

export interface IParty {
  member: IPartyMember[];
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  maxMember: number;
  limitTime: number;
  status: string;
  due: [OurDate, OurDate];
  createdAt: OurDate;
  updatedAt: OurDate;
  deletedAt: OurDate | null;
}

export interface IHistory {
  party: IParty;
  createdAt: OurDate;
  updatedAt: OurDate;
  deletedAt: OurDate | null;
}

export interface IUser {
  email: string;
  name: string;
  nickname: string;
  accessToken: string;
  history: IHistory[];
  createdAt: OurDate;
  updatedAt: OurDate;
  deletedAt: OurDate | null;
}

export interface IRestaurants {
  name: string;
  address: string;
  phone: string;
  category: string;
  thumbnail: string;
  createdAt: OurDate;
  updatedAt: OurDate;
  deletedAt: OurDate | null;
}

export interface ICategories {
  name: string;
  createdAt: OurDate;
  updatedAt: OurDate;
  deletedAt: OurDate | null;
}
