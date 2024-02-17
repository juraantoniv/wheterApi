import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";
import * as swaggerUi from "swagger-ui-express";

import * as swaggerDocument from "../src/unils/swagger.json";
import { configs } from "./configs/configs";
import { cronRunner } from "./crons/cron.runner";
import { ApiError } from "./errors/api.error";
import { adminRouter } from "./routers/admin.router";
import { weatherRouter } from "./routers/wheather.router";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/weather", weatherRouter);
app.use("/admin", adminRouter);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  "*",
  (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err?.status || 500).json({
      message: err?.message,
      status: err?.status,
    });
  },
);

const PORT = configs.PORT;

app.listen(PORT, async () => {
  await mongoose.connect(`${configs.DB_URL}`);
  cronRunner();
  console.log(`Server has successfully started on PORT ${PORT}`);
});
