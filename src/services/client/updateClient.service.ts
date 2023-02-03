import { Client } from "../../entities/client.entitie";
import { AppError } from "../../errors/index";
import AppDataSource from "../../data-source";
import { ClientProps } from "../../interfaces/index";
import { hash } from "bcryptjs";

const updateClientService = async (
  clientData: ClientProps,
  clientId: string
): Promise<Client | null> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const validKeys: string[] = ["name", "password", "email", "tel"];
  const datakeys: string[] = Object.keys(clientData);

  datakeys.forEach((key) => {
    if (!validKeys.includes(key)) {
      throw new AppError(
        "The object must have the following keys: name, password, email and phone",
        401
      );
    }
  });
  const client = await clientRepository.findOneBy({ id: clientId });

  if (!client) throw new AppError("Client not found", 404);

  const { password } = clientData;
  await clientRepository.update(clientId, {
    ...client,
    ...clientData,
    password: password ? await hash(password, 10) : client.password,
  });

  const updatedClient = await clientRepository.findOneBy({ id: clientId });
  return updatedClient;
};

export default updateClientService;
