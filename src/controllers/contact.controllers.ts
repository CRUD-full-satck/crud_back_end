import { Request, Response } from 'express'
import createContactService from '../services/contact/createContact.service'
import deleteContactService from '../services/contact/deleteContact.service'
import listContactsService from '../services/contact/listContacts.service'
import updateContactService from '../services/contact/updateContact.service'


export const createContactController = async (req: Request, res: Response) => {
    const data = req.body
    const id = req.client.id

    const contact = await createContactService(data, id)

    return res.status(201).json(contact)
}

export const listContactsController = async (req: Request, res: Response) => {
    const id = req.client.id

    const contacts = await listContactsService(id)

    return res.status(200).json(contacts)
}

export const updateContactController = async (req: Request, res: Response) => {
    const data = req.body
    const id = req.params.id

    const contact = await updateContactService(data, id)

    return res.status(200).json(contact)
}

export const deleteContactController = async (req: Request, res: Response) => {
    const id = req.params.id

    const message = await deleteContactService(id)

    return res.status(200).json({
        message: message
    })
}