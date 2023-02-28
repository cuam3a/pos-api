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
exports.resetpasswordUser = exports.removeUser = exports.updateUser = exports.addUser = exports.getListUser = exports.getSingleUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcypt_handle_1 = require("../utils/bcypt.handle");
const modelToType_1 = require("../utils/modelToType");
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ _id: id });
    if (!user)
        throw Error("NO FOUND USER");
    return user;
});
exports.getSingleUser = getSingleUser;
const getListUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find({ active: ['ACTIVO', 'INACTIVO'] });
    return users.map(user => { return (0, modelToType_1.formatUserData)(user); });
});
exports.getListUser = getListUser;
const addUser = (item) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const passHash = yield (0, bcypt_handle_1.encrypt)((_a = item.password) !== null && _a !== void 0 ? _a : '');
    const newUser = yield user_model_1.default.create({
        name: item.name,
        user: item.user,
        password: passHash,
        rol: item.rol,
        active: item.active
    });
    if (!newUser)
        throw Error("ERROR CREATE USER");
    return (0, modelToType_1.formatUserData)(newUser);
});
exports.addUser = addUser;
const updateUser = (id, item) => __awaiter(void 0, void 0, void 0, function* () {
    const updateUser = yield user_model_1.default.findOneAndUpdate({ _id: id }, item, {
        new: true,
    });
    if (!updateUser)
        throw Error("NO FOUND USER");
    return (0, modelToType_1.formatUserData)(updateUser);
});
exports.updateUser = updateUser;
const removeUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_model_1.default.findOneAndUpdate({ _id: id }, { active: "ELIMINADO" }, {
        new: true,
    });
    if (!deletedUser)
        throw Error("NO FOUND USER");
    return (0, modelToType_1.formatUserData)(deletedUser);
});
exports.removeUser = removeUser;
const resetpasswordUser = (id, newpassword) => __awaiter(void 0, void 0, void 0, function* () {
    const passHash = yield (0, bcypt_handle_1.encrypt)(newpassword);
    const updateUser = yield user_model_1.default.findOneAndUpdate({ _id: id }, { password: passHash }, {
        new: true,
    });
    if (!updateUser)
        throw Error("NO FOUND USER");
    return (0, modelToType_1.formatUserData)(updateUser);
});
exports.resetpasswordUser = resetpasswordUser;
