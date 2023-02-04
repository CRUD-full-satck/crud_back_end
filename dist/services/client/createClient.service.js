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
const data_source_1 = __importDefault(require("../../data-source"));
const bcryptjs_1 = require("bcryptjs");
const createClientService = (clientData) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.default.getRepository(client_entitie_1.Client);
    const { password } = clientData;
    const hashedPassword = yield (0, bcryptjs_1.hash)(password, 10);
    const client = clientRepository.create(Object.assign(Object.assign({}, clientData), { password: hashedPassword }));
    yield clientRepository.save(client);
    return client;
});
exports.default = createClientService;
