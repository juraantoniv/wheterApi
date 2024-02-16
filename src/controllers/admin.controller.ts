import { NextFunction, Request, Response } from "express";

import { adminService } from "../services/admin.service";
import { ISubscriber } from "../types/user.interface";

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
