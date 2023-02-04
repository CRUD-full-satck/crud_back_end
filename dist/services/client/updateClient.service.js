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
const client_entitie_1 = require("../../entities/client.entitie");
const index_1 = require("../../errors/index");
const data_source_1 = __importDefault(require("../../data-source"));
const bcryptjs_1 = require("bcryptjs");
const updateClientService = (clientData, clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.default.getRepository(client_entitie_1.Client);
    const validKeys = ["name", "password", "email", "phone"];
    const datakeys = Object.keys(clientData);
    datakeys.forEach((key) => {
        if (!validKeys.includes(key)) {
            throw new index_1.AppError("The object must have the following keys: name, password, email and phone", 401);
        }
    });
    const client = yield clientRepository.findOneBy({ id: clientId });
    if (!client)
        throw new index_1.AppError("Client not found", 404);
    const { password } = clientData;
    yield clientRepository.update(clientId, Object.assign(Object.assign(Object.assign({}, client), clientData), { password: password ? yield (0, bcryptjs_1.hash)(password, 10) : client.password }));
    const updatedClient = yield clientRepository.findOneBy({ id: clientId });
    return updatedClient;
});
exports.default = updateClientService;
