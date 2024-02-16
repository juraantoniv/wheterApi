import { model, Schema } from "mongoose";

import { ISubscriber } from "../types/user.interface";

const subscriberSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 1,
      max: 55,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const subscriber = model<ISubscriber>("subscriber", subscriberSchema);
