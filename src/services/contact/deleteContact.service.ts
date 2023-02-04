import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors";

const deleteContactService = async (contactId: string): Promise<string> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactAlreadExists = await contactRepository.findOneBy({ id: contactId });
  if (!contactAlreadExists) throw new AppError("Contact not found", 404);

  await contactRepository.delete(contactId);
  return "Contact deleted!";
};

export default deleteContactService;
