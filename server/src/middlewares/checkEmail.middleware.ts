import type { RequestHandler } from "express";
import userRepository from "../modules/item/user/UsersRepository";
import type { UserType } from "../modules/item/user/UsersRepository";
import { hashPassword } from "./argon.middleware";

export const checkEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const verified = await userRepository.readByEmail(email);

    if (verified != null) {
      res.sendStatus(422);
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};

export const verifieEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const verified: UserType | null = await userRepository.readByEmail(email);

    if (!verified) {
      res.sendStatus(422);
      return;
    }
    req.body.dbpassword = verified.hashed_password;
    next();
  } catch (err) {
    next(err);
  }
};
