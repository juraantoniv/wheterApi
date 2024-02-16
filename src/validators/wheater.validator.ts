import joi from "joi";

export class WheaterValidator {
  static city = joi.string().min(2).max(500).trim();

  static cityCheck = joi.object({
    city: this.city.required(),
  });
}
