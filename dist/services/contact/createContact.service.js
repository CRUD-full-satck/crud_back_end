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
const contact_entitie_1 = require("../../entities/contact.entitie");
const data_source_1 = __importDefault(require("../../data-source"));
const client_entitie_1 = require("../../entities/client.entitie");
const createContactService = (contactData, clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.default.getRepository(contact_entitie_1.Contact);
    const clientRepository = data_source_1.default.getRepository(client_entitie_1.Client);
    const client = yield clientRepository.findOneBy({ id: clientId });
    const contact = contactRepository.create(Object.assign(Object.assign({}, contactData), { client: client }));
    yield contactRepository.save(contact);
    return contact;
});
exports.default = createContactService;
