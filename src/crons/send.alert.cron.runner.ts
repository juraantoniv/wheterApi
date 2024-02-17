import { CronJob } from "cron";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import OpenWeatherAPI from "openweather-api-node";

import { configs } from "../configs/configs";
import { EEmailAction } from "../enums/email.action.enum";
import { subscriber } from "../models/subscriber.model";
import { emailService } from "../services/email.service";

dayjs.extend(utc);

export const SendForecastAlertCronRunner = async () => {
  try {
    const subscribers = await subscriber.find().lean();

    subscribers.map(async (subscrib) => {
      const weather = new OpenWeatherAPI({
        key: configs.Api_Key,
        locationName: subscrib.city,
        units: "standard",
      });

      const allert = await weather.getAlerts();

      allert.map(async (el) => {
        if (el.event) {
          await emailService.sendMail(subscrib.email, EEmailAction.ALLERT, {
            name: subscrib.name,
            city: subscrib.city,
            alert: el.description,
            day: new Date(el.start).toLocaleTimeString("en-US"),
          });
        }
      });
    });
  } catch (e) {}
};

export const sendForecastAlertCronRunner = new CronJob(
  "*/100 * * * * *",
  SendForecastAlertCronRunner,
);
