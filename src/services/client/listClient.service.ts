import { Client } from "../../entities/client.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/index";

const listClientService = async (clientId: string): Promise<Client> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ id: clientId });
  if (!client) throw new AppError("Client not found", 404);
  return client;
};

export default listClientService;
