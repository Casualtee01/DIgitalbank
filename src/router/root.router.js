import express from "express";
const router = express.Router();
import { RootController } from "../controllers/root.controller.js";

const rootController = new RootController();
router.get("/", rootController.healthCheck);

export default router;
