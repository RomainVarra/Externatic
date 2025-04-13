import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import { encodeJWT } from "../../helpers/jwt.helpers";
import UsersRepository from "../item/user/UsersRepository";

export const login: RequestHandler = async (req, res) => {
  const user = await UsersRepository.readByEmail(req.body.email);
  const userId = user.id;
  const token = await encodeJWT(user);

  res
    .status(200)
    .cookie("auth_token", token, {
      httpOnly: false,
      secure: false,
      maxAge: 8640000,
    })
    .json({ userId: userId });
};

export const verifyToken: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies?.auth_token;

    if (!token) {
      res.json({ authorized: false });
      return;
    }

    const decoded = jwt.verify(
      token,
      process.env.APP_SECRET as string,
    ) as JwtPayload;

    const verifiedUser = await UsersRepository.readByEmail(decoded.email);

    if (!verifiedUser) {
      res.json({ authorized: false });
      return;
    }

    next();
  } catch (err) {
    err;
  }
};
