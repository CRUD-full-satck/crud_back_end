import { IClient } from "../../interfaces";
import { Client } from "../../entities/client.entitie";
import dataSource from "../../data-source";
import { hash } from "bcryptjs";

const createClientService = async (clientData: IClient): Promise<Client> => {
  const clientRepository = dataSource.getRepository(Client);

  const { password } = clientData;

  const hashedPassword = await hash(password, 10);

  const client = clientRepository.create({
    ...clientData,
    password: hashedPassword,
  });
  await clientRepository.save(client);

  return client;
};

export default createClientService;
