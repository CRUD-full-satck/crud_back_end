import { Router } from 'express'
import validateSerializerMiddleware from '../middlewares/validateSerializer.middleware'
import {
  createClientControler,
  deleteClientControler,
  listClientControler,
  listClientsControler,
  updateClientControler,
} from '../controllers/client.controllers'
import {
  createClientSerializer
} from '../serializers/client.serializer'
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware'

const clientRouter = Router()

clientRouter.post(
  "",
  validateSerializerMiddleware(createClientSerializer),
  createClientControler,
)
clientRouter.get(
  "", 
  verifyAuthTokenMiddleware, 
  listClientsControler
)
clientRouter.get(
  "/:id", 
  verifyAuthTokenMiddleware, 
  listClientControler
)
clientRouter.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  updateClientControler
)
clientRouter.delete(
  "/;id", 
  verifyAuthTokenMiddleware, 
  deleteClientControler
)

export default clientRouter
