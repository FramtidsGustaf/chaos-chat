import { Router } from 'express';
import { httpAddUser, httpGetAllUsers } from './user.controller';
import validate from '../../middlewares/validate';
import { createUserSchema } from '../../schema/user.schema';

const router = Router();

router.get('/', httpGetAllUsers);

router.post('/', validate(createUserSchema), httpAddUser);

export default router;
