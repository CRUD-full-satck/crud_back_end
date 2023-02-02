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

const clientRouter = Router()

clientRouter.post(
  '',
  validateSerializerMiddleware(createClientSerializer),
  createClientControler,
)
clientRouter.get('', listClientsControler)
clientRouter.get('/:id', listClientControler)
clientRouter.patch(
  '/:id',
  updateClientControler,
)
clientRouter.delete('/;id', deleteClientControler)

export default clientRouter
