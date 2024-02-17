import { Router } from "express";

import { adminController } from "../controllers/admin.controller";
import { forecastController } from "../controllers/forecast.controller";
import { subscriberBodyMiddleware } from "../middlewares/subscriberCheckIdMidleware";

const router = Router();

router.post("/cityForecast", forecastController.getCityForecast);
router.post("/getAirCondition", forecastController.getAirCondition);
router.post(
  "/subscribe",
  subscriberBodyMiddleware.checkBody,
  subscriberBodyMiddleware.createOrThrow,
  adminController.createSubscribe,
);
router.post("/stop-subscribe", adminController.stopSubscribe);

export const weatherRouter = router;
