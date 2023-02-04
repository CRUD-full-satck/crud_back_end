import { Client } from "../../entities/client.entitie";
import dataSource from "../../data-source";

const listClientsService = async (): Promise<Client[]> => {
  const clientRepository = dataSource.getRepository(Client);
  const clients = await clientRepository.find();
  return clients;
};

export default listClientsService;
