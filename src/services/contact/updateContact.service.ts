import { IContact } from "../../interfaces";
import AppDataSource from '../../data-source';
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors";


const updateContactService = async (contactData: IContact, contactId: string) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOneBy({id: contactId})
    if(!contact) throw new AppError("Contact not found", 404)

    await contactRepository.update(contactId, {
        ...contact,
        ...contactData
    })

    const updateContact = await contactRepository.findOne({
        where: {
            id: contactId
        },
        relations: {
            client: true
        }
    })
    return updateContact
}

export default updateContactService