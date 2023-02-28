import { User } from "../interfaces/types";

export const formatUserData = (model: User): Partial<User> => {
    var userType: Partial<User> = { id: model.id, name: model.name, user: model.user, rol: model.rol, active: model.active }
    return userType
}