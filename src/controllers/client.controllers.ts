import { Request, Response } from 'express'
import createClientService from '../services/client/createClient.service'
import listClientService from '../services/client/listClient.service'
import listClientsService from '../services/client/listClients.service'
import updateClientService from '../services/client/updateClient.service'
import deleteClientService from '../services/client/deleteClient.service'

export const createClientControler = async (req: Request, res: Response) => {
  const data = req.body

  const client = await createClientService(data)

  return res.status(201).json(client)
}

export const listClientsControler = async (req: Request, res: Response) => {
  const clients = await listClientsService()

  return res.status(200).json(clients)
}

export const listClientControler = async (req: Request, res: Response) => {
  const id = req.params.id
  const client = await listClientService(id)

  return res.status(200).json(client)
}

export const updateClientControler = async (req: Request, res: Response) => {
  const data = req.body
  const id = req.params.id

  const client = await updateClientService(data, id)
  return res.status(200).json(client)
}

export const deleteClientControler = async (req: Request, res: Response) => {
  const id = req.params.id

  const message = await deleteClientService(id)
  return res.status(204).json({ message: message })
}
