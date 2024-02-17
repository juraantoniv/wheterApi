import { CronJob } from "cron";
import OpenWeatherAPI from "openweather-api-node";

import { configs } from "../configs/configs";
import { EEmailAction } from "../enums/email.action.enum";
import { convertTemperatures } from "../functions/convert.temperatures";
import { subscriber } from "../models/subscriber.model";
import { emailService } from "../services/email.service";

export const SendForecastCronRunner = async () => {
  try {
    const subscribers = await subscriber.find().lean();

    subscribers.map(async (subscrib) => {
      const weather = new OpenWeatherAPI({
        key: configs.Api_Key,
        locationName: subscrib.city,
        units: "standard",
      });

      const wheater = await weather.getCurrent();

      await emailService.sendMail(subscrib.email, EEmailAction.WHEATHER, {
        name: subscrib.name,
        city: subscrib.city,
        temp: convertTemperatures(wheater.weather.temp.cur),
        wind: Math.ceil(wheater.weather.wind.speed) + "ms",
      });
    });
  } catch (e) {}
};

export const sendForecastCronRunner = new CronJob(
  "*/100 * * * * *",
  SendForecastCronRunner,
);
