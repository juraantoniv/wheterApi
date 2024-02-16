import { Router } from "express";

import { adminController } from "../controllers/admin.controller";
import { subscriberBodyMiddleware } from "../middlewares/subscriberCheckIdMidleware";

const router = Router();

router.get("/getAll", adminController.getAll);
router.delete(
  "/delete:id",
  subscriberBodyMiddleware.checkId,
  adminController.getById,
);

export const adminRouter = router;
