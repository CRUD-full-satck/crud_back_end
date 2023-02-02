import { Router } from "express";
import clientLoginController from "../controllers/clientLogin.controllers";

const clientLoginRouter = Router()

clientLoginRouter.post("", clientLoginController)

export default clientLoginRouter