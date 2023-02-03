import { Router } from "express";
import { 
    deleteContactController,
    createContactController,
    listContactsController,
    updateContactController
} from "../controllers/contact.controllers";
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware';

const contactrouter = Router()

contactrouter.post(
    "/clients", 
    verifyAuthTokenMiddleware, 
    createContactController
)
contactrouter.get(
    "/clients", 
    verifyAuthTokenMiddleware, 
    listContactsController
)
contactrouter.patch(
    "/:id/clients", 
    verifyAuthTokenMiddleware, 
    updateContactController
)
contactrouter.delete(
    "/:id/clients", 
    verifyAuthTokenMiddleware, 
    deleteContactController
)

export default contactrouter