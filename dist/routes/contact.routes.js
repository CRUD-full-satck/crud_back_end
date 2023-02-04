"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controllers_1 = require("../controllers/contact.controllers");
const verifyAuthToken_middleware_1 = __importDefault(require("../middlewares/verifyAuthToken.middleware"));
const contact_serializer_1 = require("../serializers/contact.serializer");
const validateSerializer_middleware_1 = __importDefault(require("../middlewares/validateSerializer.middleware"));
const verifyEmailAndPhone_middleware_1 = __importDefault(require("../middlewares/verifyEmailAndPhone.middleware"));
const contactRouter = (0, express_1.Router)();
contactRouter.post("/client", verifyAuthToken_middleware_1.default, (0, validateSerializer_middleware_1.default)(contact_serializer_1.createContactSerializer), verifyEmailAndPhone_middleware_1.default, contact_controllers_1.createContactController);
contactRouter.get("/client", verifyAuthToken_middleware_1.default, contact_controllers_1.listContactsController);
contactRouter.patch("/:id/client", verifyAuthToken_middleware_1.default, verifyEmailAndPhone_middleware_1.default, contact_controllers_1.updateContactController);
contactRouter.delete("/:id/client", verifyAuthToken_middleware_1.default, contact_controllers_1.deleteContactController);
exports.default = contactRouter;
