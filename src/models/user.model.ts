import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/types";

const UserSchema = new Schema<User>(
    {
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
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const UserModel = model("users", UserSchema);
export default UserModel;