# Express Node.js Project

This project utilizes Express.js to create endpoints for various functionalities weather api.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Cron Jobs](#cron-jobs)
- [Configuration](#configuration)
- [Email Configuration](#email-configuration)
- [Contributing](#contributing)
- [License](#license)

# **We have two Cron Jobs which you send for subscriber one is:** 

_~~**These Node.js script that fetches weather alerts using the OpenWeatherAPI 
and sends email alerts to subscribers based on those weather alerts.
Let me break down the main components of your script:

`Imports: We're importing necessary modules and dependencies such as CronJob from the cron package, 
and OpenWeatherAPI from "openweather-api-node".
We're also importing some custom configurations, an enum for email actions, the subscriber model, and an email service.`

`SendForecastAlertCronRunner Function: This function is responsible for fetching subscribers from the database,
iterating over each subscriber, fetching weather alerts for their specified city using the OpenWeatherAPI, 
and sending email alerts if there are any weather alerts. 
It utilizes asynchronous operations and mapping over arrays of subscribers and alerts.`

`SendForecastAlertCronRunner CronJob: This sets up a cron job that runs the SendForecastAlertCronRunner function every day at 7:00 AM (0 minutes, 7 hours). 
This ensures that weather alerts are checked and sent to subscribers on a regular schedule.`

Overall, this script appears to be a background task that periodically 
checks for weather alerts and sends email notifications to subscribers based on those alerts.

--------------------------------------------------------------------------------------------------------
Second Cron job do it:


`Imports: Similar to before, we're importing necessary modules and dependencies such as CronJob from the cron package, 
OpenWeatherAPI from "openweather-api-node", configurations, an enum for email actions, a function for converting temperatures, 
the subscriber model, and an email service.`

`SendForecastCronRunner Function: This function is responsible for fetching subscribers from the database, 
iterating over each subscriber, fetching the current weather for their specified city using the OpenWeatherAPI,
and sending an email with the current weather forecast to each subscriber. It utilizes asynchronous operations and mapping over arrays of subscribers.`

`SendForecastCronRunner CronJob: This sets up a cron job that runs the SendForecastCronRunner function every day at 7:00 AM (0 minutes, 7 hours). 
This ensures that weather forecasts are checked and sent to subscribers on a regular schedule.`

Overall, this script serves to provide subscribers with the current weather forecast for their specified city via email, 
as a background task on a daily schedule.
