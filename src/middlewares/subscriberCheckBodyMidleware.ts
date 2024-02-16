// import { NextFunction, Request, Response } from "express";
// import * as mongoose from "mongoose";
//
// import { ApiError } from "../errors/api.error";
// import { subscriber } from "../models/subscriber.model";
//
// class UserMiddleware {
//   public async checkId(req: Request, res: Response, next: NextFunction) {
//     try {
//       const { id } = req.body;
//       if (!mongoose.isObjectIdOrHexString(id)) {
//         throw new ApiError("Not valid ID", 400);
//       }
//       next();
//     } catch (e) {
//       next(e);
//     }
//   }
//   public async createOrThrow(req: Request, res: Response, next: NextFunction) {
//     try {
//       const { value } = req.res.locals;
//       const user = await subscriber.findOne({ email: value.email });
//       if (user) {
//         throw new ApiError(`user with ${value.email} is already  in BD`, 404);
//       }
//       req.res.locals = value;
//       next();
//     } catch (e) {
//       next(e);
//     }
//   }
// }
//
// export const userMiddleware = new UserMiddleware();
