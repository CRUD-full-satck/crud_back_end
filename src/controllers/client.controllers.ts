import { Request, Response } from 'express'
import createClientService from '../services/client/createClient.service'
import listClientService from '../services/client/listClient.service'
import updateClientService from '../services/client/updateClient.service'
import deleteClientService from '../services/client/deleteClient.service'
import { instanceToPlain } from "class-transformer"

export const createClientControler = async (req: Request, res: Response) => {
  const data = req.body

  const client = await createClientService(data)

  return res.status(201).json(instanceToPlain(client))
}

export const listClientsControler = async (req: Request, res: Response) => {
  const id = req.client.id
  const clients = await listClientService(id)

  return res.status(200).json(instanceToPlain(clients))
}

export const updateClientControler = async (req: Request, res: Response) => {
  const data = req.body
  const id = req.client.id

  const client = await updateClientService(data, id)
  return res.status(200).json(instanceToPlain(client))
}

export const deleteClientControler = async (req: Request, res: Response) => {
  const id = req.client.id

  const message = await deleteClientService(id)
  return res.status(204).json({ message: message })
}
