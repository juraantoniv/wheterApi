import axios from "axios";

import { configs } from "../configs/configs";
import { ApiError } from "../errors/api.error";

class ForecastService {
  constructor(private readonly axiosService: typeof axios) {}
  public async getCityForecast(city: string) {
    try {
      const response = await this.axiosService.get(
        `http://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: configs.Api_Key,
            units: "standart",
            lang: "pl ",
            exclude: "hourly",
          },
        },
      );

      console.log(response.data);

      return response.data;
    } catch (e) {
      console.log(e);
      throw new ApiError(e, 401);
    }
  }
}

export const forecastService = new ForecastService(axios);
