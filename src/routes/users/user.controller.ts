import { Request, Response } from 'express';
import UserModel from '../../models/user.model';
import { User } from '../../ts/interfaces/db_interfaces';
import logger from '../../utils/logger';

export const httpGetAllUsers = async (__: any, res: Response) => {
  try {
    const users: Array<User> = await UserModel.find({}, { _id: 0, _v: 0 });
    return res.json(users);
  } catch (err) {
    logger.error(err);
    res.status(400).json({ messages: ['Oops'] });
  }
};

export const httpAddUser = async (req: Request, res: Response) => {
  const name: string = req.body.name;
  try {
    const isUsernameUsed = await UserModel.findOne({ name });
    if (isUsernameUsed) {
      return res.status(400).json({ message: 'Username used' });
    }
    const newUser = new UserModel({ name });
    newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    logger.error(err);
    res.status(400).json({ messages: ['Oops'] });
  }
};
