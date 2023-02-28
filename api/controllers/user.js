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
exports.resetpassword = exports.remove = exports.update = exports.add = exports.list = exports.single = void 0;
const user_1 = require("../services/user");
const error_handle_1 = require("../utils/error.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const single = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, user_1.getSingleUser)(id);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleError)(res, "ERROR SINGLE USER", e);
    }
});
exports.single = single;
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_1.getListUser)();
        const response = {
            status: 200,
            data: users
        };
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleError)(res, "ERROR LIST USER", e);
    }
});
exports.list = list;
const add = ({ body, idUser }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idU = idUser === null || idUser === void 0 ? void 0 : idUser.idUser;
        const newUser = yield (0, user_1.addUser)(body);
        const token = (0, jwt_handle_1.generateToken)(`${idU}`);
        const response = {
            status: 200,
            token: token,
            message: 'OK',
            user: newUser
        };
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleError)(res, "ERROR ADD USER", e);
    }
});
exports.add = add;
const update = ({ params, body, idUser }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const { name, user, password, rol, active } = body;
        const idU = idUser === null || idUser === void 0 ? void 0 : idUser.idUser;
        const editUser = yield (0, user_1.updateUser)(id, { name, user, password, rol, active });
        const token = (0, jwt_handle_1.generateToken)(`${idU}`);
        const response = {
            status: 200,
            token: token,
            message: 'OK',
            user: editUser
        };
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleError)(res, "ERROR UPDATE USER");
    }
});
exports.update = update;
const remove = ({ params, idUser }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const idU = idUser === null || idUser === void 0 ? void 0 : idUser.idUser;
        const deletedUser = yield (0, user_1.removeUser)(id);
        const token = (0, jwt_handle_1.generateToken)(`${idU}`);
        const response = {
            status: 200,
            token: token,
            message: 'OK',
            user: deletedUser
        };
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleError)(res, "ERROR REMOVE USER");
    }
});
exports.remove = remove;
const resetpassword = ({ params, body, idUser }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const { password } = body;
        const idU = idUser === null || idUser === void 0 ? void 0 : idUser.idUser;
        const editUser = yield (0, user_1.resetpasswordUser)(id, password);
        const token = (0, jwt_handle_1.generateToken)(`${idU}`);
        const response = {
            status: 200,
            token: token,
            message: 'OK',
            user: editUser
        };
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleError)(res, "ERROR REMOVE USER");
    }
});
exports.resetpassword = resetpassword;
