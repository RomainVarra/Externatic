import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { encodeJWT } from "../../helpers/jwt.helpers";
import UsersRepository from "../item/user/UsersRepository";

export const login: RequestHandler = async (req, res) => {
  const user = await UsersRepository.readByEmail(req.body.email);

  console.log(user);

  const userTokenData = [user.id, user.firstname];
  console.log(userTokenData);

  const token = await encodeJWT(user);

  console.log(token);

  res
    .status(200)
    .cookie("auth-token", token, {
      httpOnly: false,
      secure: false,
      maxAge: 86400,
    })
    .json({ token, userTokenData: userTokenData });
};

export const verifyToken: RequestHandler = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.auth = jwt.verify(token, process.env.APP_SECRET as string) as MyPayload;

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};
