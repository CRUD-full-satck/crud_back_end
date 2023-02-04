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
import verifyEmailAndPhoneMiddleware from "../middlewares/verifyEmailAndPhone.middleware";

const contactRouter = Router();

contactRouter.post(
  "/client",
  verifyAuthTokenMiddleware,
  validateSerializerMiddleware(createContactSerializer),
  verifyEmailAndPhoneMiddleware,
  createContactController
);
contactRouter.get("/client", verifyAuthTokenMiddleware, listContactsController);
contactRouter.patch(
  "/:id/client",
  verifyAuthTokenMiddleware,
  verifyEmailAndPhoneMiddleware,
  updateContactController
);
contactRouter.delete("/:id/client", verifyAuthTokenMiddleware, deleteContactController);

export default contactRouter;
