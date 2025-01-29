import jwt from "jsonwebtoken";
import type { UserType } from "../modules/item/user/UsersRepository";

export const encodeJWT = async (payload: UserType) => {
  const { firstname, email } = payload;
  const obj = { firstname, email };

  return jwt.sign(obj, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};
// jwt.encode()
// récupérer le cookie
// décoder le tooken
// remonter au info
