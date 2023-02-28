import { Request, Response } from "express";
import { RequestExt } from "../interfaces/interfaces";
import { LoginResponse, UserResponse } from "../interfaces/types";
import { loginService, userInformationService } from "../services/auth";
import { handleError } from "../utils/error.handle";

const login = async ({ body }: Request, res: Response) => {
  const { user, password } = body;
  console.log({ user, password })
  try {
    const userToken = await loginService({ user, password });
    const response: LoginResponse = {
      status: 200,
      token: userToken
    }

    res.send(response);
  }
  catch (e: any) {
    handleError(res, "ERROR LOGIN", e)
  }
};

const userInformation = async ({ idUser }: RequestExt, res: Response) => {
  try {
    console.log(idUser)
    const idU = idUser?.idUser
    const userInformation = await userInformationService(idU);

    const response : UserResponse = {
      status: 200,
      name: userInformation
    }
    console.log(response)
    res.send(response)
  }
  catch (e: any) {
    handleError(res, "ERROR LOGIN", e)
  }
};

export {
  login,
  userInformation,
}