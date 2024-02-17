import { Document } from "mongoose";
export interface ISubscriber extends Document {
  id: number;
  name: string;
  email: string;
  age: number;
  city: string;
}
