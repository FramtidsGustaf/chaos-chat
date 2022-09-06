import { object, string } from 'zod';

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }).min(4, { message: 'Name is to short' }),
  }),
});
