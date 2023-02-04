"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const contact_entitie_1 = require("../../entities/contact.entitie");
const errors_1 = require("../../errors");
const updateContactService = (contactData, contactId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.default.getRepository(contact_entitie_1.Contact);
    const validKeys = ["name", "email", "phone"];
    const datakeys = Object.keys(contactData);
    datakeys.forEach((key) => {
        if (!validKeys.includes(key)) {
            throw new errors_1.AppError("The object must have the following keys: name, email and phone", 401);
        }
    });
    const contact = yield contactRepository.findOneBy({ id: contactId });
    if (!contact)
        throw new errors_1.AppError("Contact not found", 404);
    yield contactRepository.update(contactId, Object.assign(Object.assign({}, contact), contactData));
    const updateContact = yield contactRepository.findOneBy({ id: contactId });
    return updateContact;
});
exports.default = updateContactService;
