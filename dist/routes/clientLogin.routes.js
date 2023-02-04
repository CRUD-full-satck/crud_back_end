"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientLogin_controllers_1 = __importDefault(require("../controllers/clientLogin.controllers"));
const validateSerializer_middleware_1 = __importDefault(require("../middlewares/validateSerializer.middleware"));
const login_serializer_1 = require("../serializers/login.serializer");
const clientLoginRouter = (0, express_1.Router)();
clientLoginRouter.post("", (0, validateSerializer_middleware_1.default)(login_serializer_1.loginSerializer), clientLogin_controllers_1.default);
exports.default = clientLoginRouter;
