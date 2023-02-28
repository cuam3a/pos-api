"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        required: true,
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
        unique: true,
    },
    rol: {
        type: String,
        enum: ["ADMIN", "SUPERVISOR", "VENTAS"],
        required: true,
    },
    super: {
        type: Boolean,
        default: false,
    },
    active: {
        type: String,
        enum: ["ACTIVO", "INACTIVO", "ELIMINADO"],
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
const UserModel = (0, mongoose_1.model)("users", UserSchema);
exports.default = UserModel;
