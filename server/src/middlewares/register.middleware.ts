import type { NextFunction, Request, Response } from "express";
import userRepository from "../modules/item/user/UsersRepository";

export const candidateRegister = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const role = await userRepository.getRoleByLabel("Candidat");
    if (role) {
      req.body.role_id = role.id;
      return next();
    }
    res.status(400).send("Rôle 'Candidat' non trouvé");
  } catch (err) {
    next(err);
  }
};

export const companyRegister = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const role = await userRepository.getRoleByLabel("Company");
    if (role) {
      req.body.role_id = role.id;
      return next();
    }
    res.status(400).send("Rôle 'Company' non trouvé");
  } catch (err) {
    next(err);
  }
};

export const adminRegister = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const role = await userRepository.getRoleByLabel("Admin");
    if (role) {
      req.body.role_id = role.id;
    } else {
      return res.status(400).send("Rôle 'Admin' non trouvé");
    }
    next();
  } catch (err) {
    next(err);
  }
};
