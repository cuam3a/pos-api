import { Router } from "express";
import { login, userInformation } from "../controllers/auth";
import { checkJwt } from "../middlewares/session";

const router = Router();
router.post("/login", login);
router.get("/userInformation", checkJwt, userInformation)

export { router };