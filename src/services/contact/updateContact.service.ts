import { IContact } from "../../interfaces";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors";

const updateContactService = async (contactData: IContact, contactId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const validKeys: string[] = ["name", "email", "tel"];
  const datakeys: string[] = Object.keys(contactData);

  datakeys.forEach((key) => {
    if (!validKeys.includes(key)) {
      throw new AppError(
        "The object must have the following keys: name, email and phone",
        401
      );
    }
  });

  const contact = await contactRepository.findOneBy({ id: contactId });
  if (!contact) throw new AppError("Contact not found", 404);

  await contactRepository.update(contactId, {
    ...contact,
    ...contactData,
  });

  const updateContact = await contactRepository.findOneBy({ id: contactId });
  return updateContact;
};

export default updateContactService;
