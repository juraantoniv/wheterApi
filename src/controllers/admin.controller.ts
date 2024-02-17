import { NextFunction, Request, Response } from "express";

import { adminService } from "../services/admin.service";
import { ISubscriber } from "../types/user.interface";
import { SubscriberValidator } from "../validators/subscriber.validator";

class AdminController {
  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const subscribers = await adminService.getAllSubscribers();

      return res.json({
        data: subscribers,
      });
    } catch (e) {
      next(e);
    }
  }
  public async createSubscribe(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const dto = req.res.locals as ISubscriber;

      const user = await adminService.createSubscribeUser(dto);

      return res.json({
        data: user,
      });
    } catch (e) {
      next(e);
    }
  }
  public async stopSubscribe(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.body;

      const { error, value } = SubscriberValidator.checkEmail.validate(email);
      console.log(value);
      console.log(error);

      await adminService.deleteSubscribeUser(value.email);

      return res.json({
        data: "You have unsubscribed ",
      });
    } catch (e) {
      next(e);
    }
  }
  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;

      await adminService.deleteSubscribeUser(id);
    } catch (e) {
      next(e);
    }
  }
}

export const adminController = new AdminController();
