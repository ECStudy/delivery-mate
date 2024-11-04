import { z } from 'zod';

export const dbStatusSchema = z.object({
  name: z.string(),
  age: z.number().int(),
});
