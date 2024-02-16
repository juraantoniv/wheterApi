import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { ApiError } from "../errors/api.error";
import { subscriber } from "../models/subscriber.model";
import { SubscriberValidator } from "../validators/subscriber.validator";

class SubscriberBodyMiddleware {
  public async checkBody(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;

      const { value, error } = SubscriberValidator.create.validate(body);

      if (error) {
        throw new ApiError(error.message, 400);
      }

      req.res.locals = value;

      next();
    } catch (e) {
      next(e);
    }
  }
  public async checkId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      if (!mongoose.isObjectIdOrHexString(id)) {
        throw new ApiError("Not valid ID", 400);
      }
      next();
    } catch (e) {
      next(e);
    }
  }
  public async createOrThrow(req: Request, res: Response, next: NextFunction) {
    try {
      const value = req.res.locals;
      const user = await subscriber.findOne({ email: value.email });
      if (user) {
        throw new ApiError(`user with ${value.email} is already  in BD`, 404);
      }
      req.res.locals = value;
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const subscriberBodyMiddleware = new SubscriberBodyMiddleware();
