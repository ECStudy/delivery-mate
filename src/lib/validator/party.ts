import { z } from 'zod';

export const getPartySchema = z.object({
  party_id: z.string(),
});

export type NewParty = z.infer<typeof insertPartySchema>;

export const insertPartySchema = z.object({
  title: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  tags: z.array(z.string()),
  maxMember: z.number().int(),
  limitTime: z.number().int(),
  startDate: z.string(),
  endDate: z.string(),
});

export const insertPartyMemberSchema = z.object({
  userId: z.string(),
  nickname: z.string(),
  name: z.string(),
  profile: z.string(),
  price: z.number().int(),
  status: z.string(),
});

// type IPartyMember = {
//   userId: string;
//   nickname: string;
//   name: string;
//   profile: string;
//   price: number;
//   status: string;
// };
// export interface IParty {
//   member: IPartyMember[];
//   title: string;
//   description: string;
//   thumbnail: string;
//   tags: string[];
//   maxMember: number;
//   limitTime: number;
//   status: string;
// startDate: OurDate;
// endDate: OurDate;//   createdAt: OurDate;
//   updatedAt: OurDate;
//   deletedAt: OurDate | null;
// }
