import { CronJob } from "cron";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { EEmailAction } from "../enums/email.action.enum";
import { subscriber } from "../models/subscriber.model";
import { emailService } from "../services/email.service";

dayjs.extend(utc);

export const SendForecastCronRunner = async () => {
  try {
    const subscribers = await subscriber.find().lean();

    subscribers.map(async (subscrib) => {
      await emailService.sendMail(subscrib.email, EEmailAction.WHEATHER, {
        name: subscrib.name,
        city: subscrib.city,
      });
    });
  } catch (e) {}
};

export const sendForecastCronRunner = new CronJob(
  "*/100000 * * * * *",
  SendForecastCronRunner,
);
