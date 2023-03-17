import express, { Router } from "express";

import * as ctrl from "../controllers/movies"
import { validateBody, authenticate,isValidId, ctrlWrapper } from "../middlewares";
import { movieSchema } from "../models/User";

const router: Router = express.Router();

router.post("/add",authenticate, validateBody(movieSchema), ctrlWrapper(ctrl.add));
router.delete(
  "/remove/:_id",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.remove)
);
router.patch("/update/:_id", authenticate, isValidId, ctrlWrapper(ctrl.update));

export default router;


