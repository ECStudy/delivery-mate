import { z } from 'zod';

export const insertPartySchema = z.object({
  member: z
    .array(z.string())
    .min(1)
    .refine((value) => value.length <= 10, {
      message: 'member must be less than or equal to 10',
    }),
  title: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  tags: z.array(z.string()),
  maxMember: z.number().int(),
  limitTime: z.number().int(),
});
