import { sendForecastAlertCronRunner } from "./send.alert.cron.runner";
import { sendForecastCronRunner } from "./send.forecast.cron.runner";

export const cronRunner = () => {
  sendForecastCronRunner.start();
  sendForecastAlertCronRunner.start();
};
