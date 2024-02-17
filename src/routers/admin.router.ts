import { Router } from "express";

import { adminController } from "../controllers/admin.controller";
import { subscriberBodyMiddleware } from "../middlewares/subscriberCheckIdMidleware";

const router = Router();

router.get("/getAll", adminController.getAll);
router.delete(
  "/delete",
  subscriberBodyMiddleware.checkId,
  adminController.deleteById,
);

export const adminRouter = router;
