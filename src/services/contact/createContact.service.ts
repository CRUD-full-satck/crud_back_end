import { Contact } from "../../entities/contact.entitie";
import { IContact } from "../../interfaces";
import dataSource from "../../data-source";
import { Client } from "../../entities/client.entitie";

const createContactService = async (
  contactData: IContact,
  clientId: string
): Promise<Contact> => {
  const contactRepository = dataSource.getRepository(Contact);
  const clientRepository = dataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ id: clientId });

  const contact = contactRepository.create({
    ...contactData,
    client: client!,
  });
  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
