import { sendForecastCronRunner } from "./send.forecast.cron.runner";

export const cronRunner = () => {
  sendForecastCronRunner.start();
};
