"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.provaSchemma = void 0;
var joi_1 = __importDefault(require("joi"));
var provaSchemma = joi_1["default"].object({
    Name: joi_1["default"].string().min(5).required(),
    CategoryId: joi_1["default"].number().required(),
    Prof_DiscId: joi_1["default"].number().required(),
    Link: joi_1["default"].string().max(200).required()
});
exports.provaSchemma = provaSchemma;
