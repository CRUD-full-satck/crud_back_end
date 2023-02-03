import { Router } from "express";
import validateSerializerMiddleware from "../middlewares/validateSerializer.middleware";
import {
  createClientControler,
  deleteClientControler,
  listClientsControler,
  updateClientControler,
} from "../controllers/client.controllers";
import {
  createClientSerializer,
  updateClientSerializer,
} from "../serializers/client.serializer";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const clientRouter = Router();

clientRouter.post(
  "",
  validateSerializerMiddleware(createClientSerializer),
  createClientControler
);
clientRouter.get("", verifyAuthTokenMiddleware, listClientsControler);
clientRouter.patch(
  "",
  verifyAuthTokenMiddleware,
  validateSerializerMiddleware(updateClientSerializer),
  updateClientControler
);
clientRouter.delete("", verifyAuthTokenMiddleware, deleteClientControler);

export default clientRouter;
