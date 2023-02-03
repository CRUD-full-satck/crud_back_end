import { Router } from "express";
import {
  deleteContactController,
  createContactController,
  listContactsController,
  updateContactController,
} from "../controllers/contact.controllers";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import { createContactSerializer } from "../serializers/contact.serializer";
import validateSerializerMiddleware from "../middlewares/validateSerializer.middleware";

const contactRouter = Router();

contactRouter.post(
  "/client",
  verifyAuthTokenMiddleware,
  validateSerializerMiddleware(createContactSerializer),
  createContactController
);
contactRouter.get("/client", verifyAuthTokenMiddleware, listContactsController);
contactRouter.patch("/:id/client", verifyAuthTokenMiddleware, updateContactController);
contactRouter.delete("/:id/client", verifyAuthTokenMiddleware, deleteContactController);

export default contactRouter;
