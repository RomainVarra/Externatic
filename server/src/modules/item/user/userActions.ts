import type { RequestHandler } from "express";

import userRepository from "./UsersRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const now = new Date();
    const formattedNow = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
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
      updated_at: formattedNow,
    };
    const insertId = await userRepository.create(newUser);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const browseCandidates: RequestHandler = async (req, res, next) => {
  try {
    const role = await userRepository.getRoleByLabel("Candidat");
    if (role) {
      const candidates = await userRepository.getAllCandidates(role.id);
      res.json(candidates);
    } else {
      res.status(404).json({ message: "Rôle 'candidate' non trouvé." });
    }
  } catch (err) {
    next(err);
  }
};

const browseCompanies: RequestHandler = async (req, res, next) => {
  try {
    const role = await userRepository.getRoleByLabel("Company");
    if (role) {
      const companies = await userRepository.getAllCompanies(role.id);
      res.json(companies);
    } else {
      res.status(404).json({ message: "Rôle 'company' non trouvé." });
    }
  } catch (err) {
    next(err);
  }
};

const anonymizeCandidate: RequestHandler = async (req, res, next) => {
  const candidateId = Number.parseInt(req.params.id);

  try {
    const anonymizedCandidate =
      await userRepository.anonymizeCandidate(candidateId);
    res.status(200).json(anonymizedCandidate);
  } catch (err) {
    next(err);
  }
};

const anonymizeCompany: RequestHandler = async (req, res, next) => {
  const companyId = Number.parseInt(req.params.id);

  try {
    const anonymizedCompany = await userRepository.anonymizeCompany(companyId);
    res.status(200).json(anonymizedCompany);
  } catch (err) {
    next(err);
  }
};

const readUserData: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const user = await userRepository.read(id);

    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};
const getLatestProfiles: RequestHandler = async (req, res, next) => {
  try {
    const profiles = await userRepository.getProfilesUpdatedInLast7Days();
    res.json(profiles);
  } catch (err) {
    next(err);
  }
};

export default {
  add,
  browseCandidates,
  browseCompanies,
  anonymizeCandidate,
  anonymizeCompany,
  readUserData,
  getLatestProfiles,
};
