"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatUserData = void 0;
const formatUserData = (model) => {
    var userType = { id: model.id, name: model.name, user: model.user, rol: model.rol, active: model.active };
    return userType;
};
exports.formatUserData = formatUserData;
