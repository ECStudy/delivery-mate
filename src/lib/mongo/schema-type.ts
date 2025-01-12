import { ObjectId } from 'mongodb';

export type OurDate = Date | string;
export type OurId = ObjectId | string;
export type StatusTypes = 'progress' | 'complete' | 'cancel';

type IPartyMember = {
  userId: string;
  nickname: string;
  name: string;
  profile: string;
  price: number;
  status: string;
};
export interface ITest {
  name: string;
  age: number;
}

export interface IParty {
  _id: string;
  member: IPartyMember[];
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  maxMember: number;
  limitTime: number;
  status: StatusTypes;
  startDate: OurDate;
  endDate: OurDate;
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
  profile: string;
  accessToken: string;
  history: IHistory[];
  createdAt: OurDate;
  updatedAt: OurDate;
  deletedAt: OurDate | null;
}

export interface IAuthentication {
  email: string;
  authenticationCode: string;
  codeExpiresAt: OurDate;
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
