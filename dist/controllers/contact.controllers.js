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
exports.deleteContactController = exports.updateContactController = exports.listContactsController = exports.createContactController = void 0;
const createContact_service_1 = __importDefault(require("../services/contact/createContact.service"));
const deleteContact_service_1 = __importDefault(require("../services/contact/deleteContact.service"));
const listContacts_service_1 = __importDefault(require("../services/contact/listContacts.service"));
const updateContact_service_1 = __importDefault(require("../services/contact/updateContact.service"));
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.client.id;
    const contact = yield (0, createContact_service_1.default)(data, id);
    return res.status(201).json(contact);
});
exports.createContactController = createContactController;
const listContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.client.id;
    const contacts = yield (0, listContacts_service_1.default)(id);
    return res.status(200).json(contacts);
});
exports.listContactsController = listContactsController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.ids;
    const contact = yield (0, updateContact_service_1.default)(data, id);
    return res.status(200).json(contact);
});
exports.updateContactController = updateContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const message = yield (0, deleteContact_service_1.default)(id);
    return res.status(200).json({
        message: message,
    });
});
exports.deleteContactController = deleteContactController;
