import { Router } from "express";
import { 
    deleteContactController,
    createContactController,
    listContactsController,
    updateContactController
} from "../controllers/contact.controllers";
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware';

const contactRouter = Router()

contactRouter.post(
    "/client", 
    verifyAuthTokenMiddleware, 
    createContactController
)
contactRouter.get(
    "/client", 
    verifyAuthTokenMiddleware, 
    listContactsController
)
contactRouter.patch(
    "/:id/client", 
    verifyAuthTokenMiddleware, 
    updateContactController
)
contactRouter.delete(
    "/:id/client", 
    verifyAuthTokenMiddleware, 
    deleteContactController
)

export default contactRouter