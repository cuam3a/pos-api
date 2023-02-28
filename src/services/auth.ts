import { User } from "../interfaces/types"
import UserModel from "../models/user.model";
import { verified } from "../utils/bcypt.handle";
import { generateToken } from "../utils/jwt.handle";

const loginService = async ({ user, password }: Partial<User>) => {
  const checkIs = await UserModel.findOne({ user });
  if (!checkIs) return "USER OR PASSWORD INCORRECT";

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password ?? '', passwordHash);

  if (!isCorrect) throw Error("USER OR PASSWORD INCORRECT");

  const token = generateToken(`${checkIs._id}`);
  return token;
}

const userInformationService = async (id: String) => {
  const existUser = await UserModel.findOne({ _id: id })

  if(!existUser)throw Error("USER NO FOUND");

  return existUser.name
}

export {
  loginService,
  userInformationService,
}