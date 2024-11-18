export type OurDate = Date | string;

// mongo test collection schema type
export interface ITest {
  name: string;
  age: number;
}

type IMember = {
  id: string;
  name: string;
};

export interface IParty {
  member: IMember[];
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  maxMember: number;
  limitTime: number;
  createdAt: OurDate;
  updatedAt: OurDate;
  deletedAt: OurDate | null;
}
