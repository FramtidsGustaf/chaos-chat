import mongoose from 'mongoose';

export interface Message {
  text: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

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
