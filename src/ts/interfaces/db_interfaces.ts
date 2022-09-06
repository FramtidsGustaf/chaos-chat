export interface User {
  name: string;
}

export interface Message {
  text: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}
