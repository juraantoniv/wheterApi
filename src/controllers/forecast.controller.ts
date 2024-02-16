import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";
import { forecastService } from "../services/forecast.service";
import { WheaterValidator } from "../validators/wheater.validator";

class ForecastController {
  public async getCityForecast(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { value, error } = WheaterValidator.cityCheck.validate(req.body);
      console.log(error);
      if (error) {
        throw new ApiError(`${error.message}`, 401);
      }
      console.log(value);
      const data = await forecastService.getCityForecast(value.city);

      return res.json({
        data: data,
      });
    } catch (e) {
      next(e);
    }
  }
}

export const forecastController = new ForecastController();
