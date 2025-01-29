import type { RequestHandler } from "express";
import { encodeJWT } from "../../helpers/jwt.helpers";

export const login: RequestHandler = async (req, res, next) => {
  const user = req.body;
  const token = await encodeJWT(user);

  res
    .status(200)
    .cookie("auth-token", token, {
      httpOnly: false,
      secure: false,
      maxAge: 86400,
    })
    .json();

  next();
};
