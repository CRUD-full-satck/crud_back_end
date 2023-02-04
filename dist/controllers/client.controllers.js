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
exports.deleteClientControler = exports.updateClientControler = exports.listClientsControler = exports.createClientControler = void 0;
const createClient_service_1 = __importDefault(require("../services/client/createClient.service"));
const listClient_service_1 = __importDefault(require("../services/client/listClient.service"));
const updateClient_service_1 = __importDefault(require("../services/client/updateClient.service"));
const deleteClient_service_1 = __importDefault(require("../services/client/deleteClient.service"));
const class_transformer_1 = require("class-transformer");
const createClientControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const client = yield (0, createClient_service_1.default)(data);
    return res.status(201).json((0, class_transformer_1.instanceToPlain)(client));
});
exports.createClientControler = createClientControler;
const listClientsControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.client.id;
    const clients = yield (0, listClient_service_1.default)(id);
    return res.status(200).json((0, class_transformer_1.instanceToPlain)(clients));
});
exports.listClientsControler = listClientsControler;
const updateClientControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.client.id;
    const client = yield (0, updateClient_service_1.default)(data, id);
    return res.status(200).json((0, class_transformer_1.instanceToPlain)(client));
});
exports.updateClientControler = updateClientControler;
const deleteClientControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.client.id;
    const message = yield (0, deleteClient_service_1.default)(id);
    return res.status(204).json({ message: message });
});
exports.deleteClientControler = deleteClientControler;
