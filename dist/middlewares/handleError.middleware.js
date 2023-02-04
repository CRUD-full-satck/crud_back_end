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
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../errors/index");
const handleErrorMiddleware = (err, req, res, _) => __awaiter(void 0, void 0, void 0, function* () {
    if (err instanceof index_1.AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }
    console.log(err);
    return res.status(500).json({
        message: "Internal server error",
    });
});
exports.default = handleErrorMiddleware;
