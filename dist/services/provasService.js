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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.listProf_DiscId = exports.listTeacherBySubject = exports.listSubject = exports.listTeacher = exports.listByFilter = exports.send = void 0;
var typeorm_1 = require("typeorm");
var Provas_1 = __importDefault(require("../entities/Provas"));
var Disciplinas_1 = __importDefault(require("../entities/Disciplinas"));
var Professor_1 = __importDefault(require("../entities/Professor"));
var Prof_Disc_1 = __importDefault(require("../entities/Prof_Disc"));
function send(provaBody) {
    return __awaiter(this, void 0, void 0, function () {
        var Name, CategoryId, Prof_DiscId, Link, checkExistent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Name = provaBody.Name, CategoryId = provaBody.CategoryId, Prof_DiscId = provaBody.Prof_DiscId, Link = provaBody.Link;
                    return [4 /*yield*/, (0, typeorm_1.getRepository)(Provas_1["default"]).find({
                            where: { Name: Name, Prof_DiscId: Prof_DiscId }
                        })];
                case 1:
                    checkExistent = _a.sent();
                    if (checkExistent.length > 0) {
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, (0, typeorm_1.getRepository)(Provas_1["default"]).insert(provaBody)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.send = send;
function listByFilter(filter) {
    return __awaiter(this, void 0, void 0, function () {
        var query, isProfessor, isSubject, result, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "SELECT provas.\"Name\",categorias.\"Name\" AS Categoria,professores.\"Name\" AS Professor,disciplinas.\"Name\" as Disciplina,provas.\"Link\" FROM provas JOIN categorias ON provas.\"CategoryId\" = categorias.\"Id\" JOIN prof_disc ON provas.\"Prof_DiscId\" = prof_disc.\"Id\" JOIN professores ON prof_disc.\"ProfessorId\" = professores.\"Id\" JOIN disciplinas ON prof_disc.\"DisciplinaId\" = disciplinas.\"Id\" WHERE";
                    return [4 /*yield*/, (0, typeorm_1.getRepository)(Professor_1["default"]).find({
                            where: {
                                Name: filter
                            }
                        })];
                case 1:
                    isProfessor = _a.sent();
                    return [4 /*yield*/, (0, typeorm_1.getRepository)(Disciplinas_1["default"]).find({
                            where: {
                                Name: filter
                            }
                        })];
                case 2:
                    isSubject = _a.sent();
                    if (!(isProfessor.length > 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, typeorm_1.getManager)().query("".concat(query, " professores.\"Name\" = $1"), [filter])];
                case 3:
                    result = _a.sent();
                    if (result.length === 0)
                        return [2 /*return*/, null];
                    return [2 /*return*/, result];
                case 4:
                    if (!(isSubject.length > 0)) return [3 /*break*/, 6];
                    return [4 /*yield*/, (0, typeorm_1.getManager)().query("".concat(query, " disciplinas.\"Name\" = $1;"), [filter])];
                case 5:
                    result = _a.sent();
                    if (result.length === 0)
                        return [2 /*return*/, null];
                    return [2 /*return*/, result];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.listByFilter = listByFilter;
function listTeacher() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Professor_1["default"]).find()];
                case 1:
                    result = _a.sent();
                    if (result.length === 0)
                        return [2 /*return*/, null];
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.listTeacher = listTeacher;
function listSubject() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Disciplinas_1["default"]).find()];
                case 1:
                    result = _a.sent();
                    if (result.length === 0)
                        return [2 /*return*/, null];
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.listSubject = listSubject;
function listTeacherBySubject(subject) {
    return __awaiter(this, void 0, void 0, function () {
        var subjectData, subjectId, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Disciplinas_1["default"]).findOne({
                        where: {
                            Name: subject
                        }
                    })];
                case 1:
                    subjectData = _a.sent();
                    subjectId = subjectData.getId();
                    return [4 /*yield*/, (0, typeorm_1.getManager)().query("SELECT professores.\"Name\" from prof_disc JOIN professores ON prof_disc.\"ProfessorId\" = professores.\"Id\" WHERE prof_disc.\"DisciplinaId\" = $1;", [subjectId])];
                case 2:
                    result = _a.sent();
                    if (result.length === 0)
                        return [2 /*return*/, null];
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.listTeacherBySubject = listTeacherBySubject;
function listProf_DiscId(professor, disciplina) {
    return __awaiter(this, void 0, void 0, function () {
        var subjectData, teacherData, subjectId, teacherId, Prof_DiscData, prof_discId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Disciplinas_1["default"]).findOne({
                        where: {
                            Name: disciplina
                        }
                    })];
                case 1:
                    subjectData = _a.sent();
                    return [4 /*yield*/, (0, typeorm_1.getRepository)(Professor_1["default"]).findOne({
                            where: {
                                Name: professor
                            }
                        })];
                case 2:
                    teacherData = _a.sent();
                    if (!teacherData || !subjectData)
                        return [2 /*return*/, null];
                    subjectId = subjectData.getId();
                    teacherId = teacherData.getId();
                    return [4 /*yield*/, (0, typeorm_1.getRepository)(Prof_Disc_1["default"]).findOne({
                            where: {
                                ProfessorId: teacherId,
                                DisciplinaId: subjectId
                            }
                        })];
                case 3:
                    Prof_DiscData = _a.sent();
                    prof_discId = Prof_DiscData.getId();
                    return [2 /*return*/, prof_discId];
            }
        });
    });
}
exports.listProf_DiscId = listProf_DiscId;
