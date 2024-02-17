import { config } from "dotenv";
config();

export const configs = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
  SECRET_SALT: process.env.SECRET_SALT,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
  PASS: process.env.PASS,
  Api_Key: process.env.Api_Key,
};
