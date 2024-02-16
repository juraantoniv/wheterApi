import { CronJob } from "cron";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { subscriber } from "../models/subscriber.model";

dayjs.extend(utc);

export const SendForecastCronRunner = async () => {
  try {
    const subscribers = await subscriber.find().lean();

    subscribers.map(async (subscrib) => {
      console.log(subscrib.city);
    });
  } catch (e) {}
};

export const sendForecastCronRunner = new CronJob(
  "*/1000 * * * * *",
  SendForecastCronRunner,
);
