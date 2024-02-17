import joi from "joi";

export class SubscriberValidator {
  static nameUser = joi.string().min(2).max(500).trim();
  static email = joi.string().email().trim();
  static age = joi.number().min(1).max(150);
  static city = joi.string().min(1).max(150);

  static create = joi.object({
    name: this.nameUser.required(),
    email: this.email.required(),
    city: this.city.required(),
    age: this.age.required(),
  });

  static checkEmail = joi.object({
    email: this.email.required(),
  });
}
