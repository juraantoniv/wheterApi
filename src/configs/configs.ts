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
  JWT_ACTIVE_SECRET: process.env.JWT_ACTIVE_SECRET,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  AWS_BUCKED: process.env.AWS_BUCKED,
  AWS_REGION: process.env.AWS_REGION,
  AWS_S3_URL: process.env.AWS_S3_URL,
  Api_Key: process.env.Api_Key,
};
