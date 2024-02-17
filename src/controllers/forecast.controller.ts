import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";
import { forecastPresenterT } from "../presenters/response.presenter";
import { forecastService } from "../services/forecast.service";
import { WheaterValidator } from "../validators/wheater.validator";

class ForecastController {
  public async getCityForecast(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { item } = req.query;

      const { value, error } = WheaterValidator.cityCheck.validate(req.body);
      console.log(item);
      if (error) {
        throw new ApiError(`${error.message}`, 401);
      }
      const { current, days } = await forecastService.getCityForecast(
        value.city,
      );

      const data =
        item === "CurrentDay" || !item
          ? forecastPresenterT.present(current)
          : days;

      return res.json({
        data: data,
      });
    } catch (e) {
      next(e);
    }
  }

  public async getAirCondition(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { value, error } = WheaterValidator.cityCheck.validate(req.body);
      console.log(value);
      if (error) {
        throw new ApiError(`${error.message}`, 401);
      }
      const data = await forecastService.gerAirCondition(value.city);

      return res.json({
        data: data,
      });
    } catch (e) {
      next(e);
    }
  }
}

export const forecastController = new ForecastController();
