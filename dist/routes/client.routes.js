"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateSerializer_middleware_1 = __importDefault(require("../middlewares/validateSerializer.middleware"));
const client_controllers_1 = require("../controllers/client.controllers");
const client_serializer_1 = require("../serializers/client.serializer");
const verifyAuthToken_middleware_1 = __importDefault(require("../middlewares/verifyAuthToken.middleware"));
const verifyEmailAndPhone_middleware_1 = __importDefault(require("../middlewares/verifyEmailAndPhone.middleware"));
const clientRouter = (0, express_1.Router)();
clientRouter.post("", (0, validateSerializer_middleware_1.default)(client_serializer_1.createClientSerializer), verifyEmailAndPhone_middleware_1.default, client_controllers_1.createClientControler);
clientRouter.get("", verifyAuthToken_middleware_1.default, client_controllers_1.listClientsControler);
clientRouter.patch("", verifyAuthToken_middleware_1.default, (0, validateSerializer_middleware_1.default)(client_serializer_1.updateClientSerializer), verifyEmailAndPhone_middleware_1.default, client_controllers_1.updateClientControler);
clientRouter.delete("", verifyAuthToken_middleware_1.default, client_controllers_1.deleteClientControler);
exports.default = clientRouter;
