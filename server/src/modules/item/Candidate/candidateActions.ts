import type { RequestHandler } from "express";
import CandidateRepository from "./candidateRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newCandidate = {
      is_disabled: req.body.is_disabled,
      user_id: req.body.user_id,
    };
    const insertId = await CandidateRepository.create(newCandidate);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { add };
