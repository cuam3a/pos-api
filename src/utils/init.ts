import UserModel from "../models/user.model"
import { encrypt } from "./bcypt.handle"

export const initConfig = async () => {
    const existAdmin = await UserModel.findOne({ user: "admin" });
    if (existAdmin) return;
    
    const passHash = await encrypt("admin");
    const admin = await UserModel.create({ name: "admin", user: "admin", password: passHash, super: true, active: true, rol: "admin" })
    console.log(admin)
    return
}