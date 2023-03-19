import express, { Router } from "express";

import * as ctrl from "../controllers/movies"
import { validateBody, authenticate,isValidId, ctrlWrapper } from "../middlewares";
import { movieSchema, updateGroupSchema } from "../models/User";

const router: Router = express.Router();
router.get("/",authenticate,ctrlWrapper(ctrl.getAll));
router.post("/",authenticate, validateBody(movieSchema), ctrlWrapper(ctrl.add));
router.delete(
  "/:_id",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.remove)
);
router.patch(
  "/:_id",
  authenticate,
  isValidId,
  validateBody(updateGroupSchema),
  ctrlWrapper(ctrl.update)
);

export default router;


