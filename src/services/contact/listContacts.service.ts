import { Contact } from "../../entities/contact.entitie";
import AppDataSource from '../../data-source';


const listContactsService = async (clientId: string): Promise<Contact[]> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contacts = await contactRepository.find()
    const contactsByClient = contacts.filter(contact => contact.client.id === clientId)

    return contactsByClient
}

export default listContactsService