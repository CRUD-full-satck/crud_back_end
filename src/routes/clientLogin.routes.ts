import { Router } from "express";
import clientLoginController from "../controllers/clientLogin.controllers";
import validateSerializerMiddleware from "../middlewares/validateSerializer.middleware";
import { loginSerializer } from "../serializers/login.serializer";

const clientLoginRouter = Router();

clientLoginRouter.post(
  "",
  validateSerializerMiddleware(loginSerializer),
  clientLoginController
);

export default clientLoginRouter;
