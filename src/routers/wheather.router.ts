import { Router } from "express";

import { adminController } from "../controllers/admin.controller";
import { forecastController } from "../controllers/forecast.controller";
import { subscriberBodyMiddleware } from "../middlewares/subscriberCheckIdMidleware";

const router = Router();

router.get("/cityForecast", forecastController.getCityForecast);
router.post(
  "/subscribe",
  subscriberBodyMiddleware.checkBody,
  subscriberBodyMiddleware.createOrThrow,
  adminController.createSubscribe,
);

export const weatherRouter = router;
