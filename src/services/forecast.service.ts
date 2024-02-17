// import axios from "axios";
import OpenWeatherAPI, {
  CurrentWeather,
  ForecastWeather,
} from "openweather-api-node";

import { configs } from "../configs/configs";
import { ApiError } from "../errors/api.error";

class ForecastService {
  // constructor(private readonly axiosService: typeof axios) {}
  public async getCityForecast(
    city: string,
  ): Promise<{ current: CurrentWeather; days: ForecastWeather[] }> {
    try {
      const weather = new OpenWeatherAPI({
        key: configs.Api_Key,
        locationName: city,
        units: "standard",
      });

      const data = await weather.getCurrent();
      const data1 = await weather.getForecast();

      // const response = await this.axiosService.get(
      //   `https://api.openweathermap.org/data/3.0/onecall`,
      //   {
      //     params: {
      //       q: city,
      //       appid: configs.Api_Key,
      //       lang: "ru ",
      //       // exclude: "hourly",
      //     },
      //   },
      // );

      return {
        current: data,
        days: data1,
      };
    } catch (e) {
      throw new ApiError(e, 401);
    }
  }

  public async gerAirCondition(city: string) {
    try {
      const weather = new OpenWeatherAPI({
        key: configs.Api_Key,
        locationName: city,
        units: "standard",
      });

      const data = await weather.getCurrentAirPollution({ units: "standard" });

      return data;
    } catch (e) {
      throw new ApiError(e.message, 401);
    }
  }
}

export const forecastService = new ForecastService();
