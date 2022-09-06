import mongoose from 'mongoose';
import { User } from '../ts/interfaces/db_interfaces';

const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
