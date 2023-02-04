import dataSource from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { AppError } from "../../errors";

const deleteClientService = async (clientId: string): Promise<string> => {
  const clientRepository = dataSource.getRepository(Client);

  const clientAlreadExists = await clientRepository.findOneBy({ id: clientId });
  if (clientAlreadExists) throw new AppError("Client is not found", 404);

  await clientRepository.delete({ id: clientId });

  return "Client deleted!";
};

export default deleteClientService;
