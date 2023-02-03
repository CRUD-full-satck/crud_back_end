import { Contact } from "../../entities/contact.entitie";
import { IContact } from "../../interfaces";
import AppDataSource from '../../data-source';
import { Client } from "../../entities/client.entitie";

const createContactService = async (contactData: IContact, clientId: string): Promise<Contact> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({id: clientId})
    
    const contact = contactRepository.create({
        ...contactData,
        client: client!
    })
    await contactRepository.save(contact)

    return contact
}

export default createContactService