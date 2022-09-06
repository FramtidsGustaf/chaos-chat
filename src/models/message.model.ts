import mongoose from 'mongoose';
import { Message } from '../ts/interfaces/db_interfaces';

const messageSchema = new mongoose.Schema<Message>(
  {
    text: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model('Message', messageSchema);

export default MessageModel;
