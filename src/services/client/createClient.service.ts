import { IClient } from "../../interfaces";
import { Client } from "../../entities/client.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import { hash } from "bcryptjs";

const createClientService = async (clientData: IClient): Promise<Client> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const { email, password } = clientData;
  const clientAlreadExists = clients.find((client) => client.email === email);
  if (clientAlreadExists) throw new AppError("Email already registered", 401);

  const hashedPassword = await hash(password, 10);

  const client = clientRepository.create({
    ...clientData,
    password: hashedPassword,
  });
  await clientRepository.save(client);

  return client;
};

export default createClientService;
