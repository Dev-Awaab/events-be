import { Router } from "express";
import { join, verify } from "./event.js";

const router = Router();

router.post("/join", join);
router.post("/verify", verify);

export default router;
