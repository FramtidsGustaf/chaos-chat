import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    try {
      schema.parse({
        body,
      });
      next();
    } catch (err: any) {
      const errors: Array<any> = JSON.parse(err);
      const errorMessages: Array<string> = errors.map(e => e.message);
      return res.status(400).json({ messages: errorMessages });
    }
  };

export default validate;
