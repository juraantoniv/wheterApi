import { WindData } from "openweather-api-node";

export interface CurrentTemperatures {
  /**
   * Current temperature
   */
  cur: number;
}
export interface CurrentConditionsT {
  /**
   * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
   */
  temp: CurrentTemperatures;
  /**
   * This accounts for the human perception of weather. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
   */
  feelsLike: CurrentTemperatures;
  /**
   * Atmospheric pressure on the sea level, hPa
   */
  pressure: number;
  /**
   * Humidity, %
   */
  humidity: string;
  /**
   * Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
   */
  dewPoint: number | undefined;
  /**
   * Cloudiness, %
   */
  clouds: number;
  /**
   * The maximum value of UV index for the day
   */
  uvi: number | undefined;
  /**
   * Average visibility, metres
   */
  visibility: string;
  /**
   * Wind statistics. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour.
   */
  wind: WindData;
  /**
   * Precipitation volume, mm
   */
  rain: number;
  /**
   * Snow volume, mm
   */
  snow: number;
  /**
   * Weather condition id (https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)
   */
  conditionId: number;
  /**
   * Group of weather parameters (Rain, Snow, Extreme etc.)
   */
  main: string;
  /**
   * Description of the weather
   */
  description: string;
  icon: string;
}
export interface CurrentAstronomicalT {
  /**
   * Sunrise time, Unix, UTC
   */
  sunrise: Date | string;
  sunriseRaw: number;
  /**
   * Sunset time, Unix, UTC
   */
  sunset: Date | string;
  sunsetRaw: number;
}
export interface CurrentWeatherT extends Document {
  astronomical: Partial<CurrentAstronomicalT>;
  weather: Partial<CurrentConditionsT>;
}
