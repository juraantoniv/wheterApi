import { CurrentWeather } from "openweather-api-node";

import { convertTemperatures } from "../functions/convert.temperatures";
import { CurrentWeatherT } from "../types/wheather.response.type";

interface IPresenter<I, O> {
  present(payload: I): O;
}

export class ForecastPresenterT
  implements IPresenter<CurrentWeather, Partial<CurrentWeatherT>>
{
  present(data: Partial<CurrentWeather>): Partial<CurrentWeatherT> {
    return {
      weather: {
        temp: {
          cur: convertTemperatures(data.weather.temp.cur),
        },
        feelsLike: {
          cur: convertTemperatures(data.weather.feelsLike.cur),
        },
        clouds: data.weather.clouds,
        wind: data.weather.wind,
        main: data.weather.main,
        description: data.weather.description,
        pressure: data.weather.pressure,
        humidity: data.weather.humidity + "%",
        visibility: Math.ceil(data.weather.visibility / 1000) + "km",
      },
      astronomical: {
        sunrise: data.astronomical.sunrise.toLocaleString(),
        sunset: data.astronomical.sunset.toLocaleString(),
      },
    };
  }
}

export const forecastPresenterT = new ForecastPresenterT();
