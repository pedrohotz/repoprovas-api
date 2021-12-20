"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.listProf_DiscId = exports.listTeacherBySubject = exports.listSubject = exports.listTeacher = exports.listByFilter = exports.send = void 0;
var provaSchemma_1 = require("../schemmas/provaSchemma");
var provasService = __importStar(require("../services/provasService"));
function send(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var provaBody, error, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    provaBody = req.body;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    error = provaSchemma_1.provaSchemma.validate(provaBody).error;
                    if (error)
                        return [2 /*return*/, res.sendStatus(400)];
                    return [4 /*yield*/, provasService.send(provaBody)];
                case 2:
                    result = _a.sent();
                    if (!result)
                        return [2 /*return*/, res.sendStatus(409)];
                    return [2 /*return*/, res.status(201).send("Prova inserida")];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send("Internal Error")];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.send = send;
function listByFilter(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var filter, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filter = req.params.filter;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, provasService.listByFilter(filter)];
                case 2:
                    result = _a.sent();
                    if (!result)
                        return [2 /*return*/, res.sendStatus(404)];
                    return [2 /*return*/, res.status(200).send(result)];
                case 3:
                    error_2 = _a.sent();
                    res.sendStatus(500);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.listByFilter = listByFilter;
function listTeacher(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, provasService.listTeacher()];
                case 1:
                    result = _a.sent();
                    if (!result)
                        return [2 /*return*/, res.sendStatus(404)];
                    return [2 /*return*/, res.status(200).send(result)];
                case 2:
                    error_3 = _a.sent();
                    res.sendStatus(500);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.listTeacher = listTeacher;
function listSubject(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, provasService.listSubject()];
                case 1:
                    result = _a.sent();
                    if (!result)
                        return [2 /*return*/, res.sendStatus(404)];
                    return [2 /*return*/, res.status(200).send(result)];
                case 2:
                    error_4 = _a.sent();
                    res.sendStatus(500);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.listSubject = listSubject;
function listTeacherBySubject(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var subject, result, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    subject = req.params.disciplina;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, provasService.listTeacherBySubject(subject)];
                case 2:
                    result = _a.sent();
                    if (!result)
                        return [2 /*return*/, res.sendStatus(404)];
                    return [2 /*return*/, res.send(result).status(200)];
                case 3:
                    error_5 = _a.sent();
                    return [2 /*return*/, res.sendStatus(500)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.listTeacherBySubject = listTeacherBySubject;
function listProf_DiscId(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, professor, disciplina, result, error_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.params, professor = _a.professor, disciplina = _a.disciplina;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, provasService.listProf_DiscId(professor, disciplina)];
                case 2:
                    result = _b.sent();
                    if (!result)
                        return [2 /*return*/, res.sendStatus(404)];
                    return [2 /*return*/, res.send({ id: result }).status(200)];
                case 3:
                    error_6 = _b.sent();
                    console.log(error_6);
                    return [2 /*return*/, res.sendStatus(500)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.listProf_DiscId = listProf_DiscId;
