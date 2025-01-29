import type { RequestHandler } from "express";

import userRepository from "./UsersRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      hashed_password: req.body.hashed_password,
      address: req.body.address,
      postal_code: req.body.postal_code,
      city: req.body.city,
      tel: req.body.tel,
      is_active: req.body.is_active,
      is_role: req.body.is_role,
      role_id: req.body.role_id,
    };
    const insertId = await userRepository.create(newUser);
    req.body.insertId;

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { add };
