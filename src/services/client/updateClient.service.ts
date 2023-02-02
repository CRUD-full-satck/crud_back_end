import { Client } from '../../entities/client.entitie'
import { AppError } from '../../errors/index'
import AppDataSource from '../../data-source'

const updateClientService = async (
  clientData: Client,
  clientId: string,
): Promise<Client | null> => {
  const clientRepository = AppDataSource.getRepository(Client)
  const client = await clientRepository.findOneBy({ id: clientId })

  if (!client) throw new AppError('Client not found', 404)

  await clientRepository.update(clientId, {
    ...client,
    ...clientData,
  })
  const updatedClient = await clientRepository.findOneBy({ id: clientId })
  return updatedClient
}

export default updateClientService
