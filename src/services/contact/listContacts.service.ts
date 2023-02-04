import { Contact } from "../../entities/contact.entitie";
import dataSource from "../../data-source";
import { Client } from "../../entities/client.entitie";

const listContactsService = async (clientId: string): Promise<Contact[]> => {
  const clientRepository = dataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id: clientId,
    },
    relations: {
      contacts: true,
    },
  });

  return client?.contacts!;
};

export default listContactsService;
