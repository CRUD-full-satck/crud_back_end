import { Client } from "../../entities/client.entitie";
import AppDataSource from "../../data-source";

const listClientsService = async (): Promise<Client[]> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clients = await clientRepository.find();
  return clients;
};

export default listClientsService;
