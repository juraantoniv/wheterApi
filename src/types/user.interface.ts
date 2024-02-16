import { Document } from "mongoose";
export interface ISubscriber extends Document {
  id: number;
  name: string;
  email: string;
  age: number;
  city: string;
}

export interface IQuery {
  page: string;
  limit: string;
  sortedBy: string;

  [key: string]: string;
}

export interface IPaginationResponse<T> {
  page: number;
  limit: number;
  itemsFound: number;
  data: T[];
}
