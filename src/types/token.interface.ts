import { Document, Types } from "mongoose";

export interface ITokenPayload {
  userId: Types.ObjectId;
  email: string;
}

export interface ITokensPair {
  accessToken: string;
  refreshToken: string;
}
export interface IToken extends ITokensPair {
  _userId: Types.ObjectId;
}

export interface ITokenActive extends Document {
  token: string;
  _userId: Types.ObjectId;
}
