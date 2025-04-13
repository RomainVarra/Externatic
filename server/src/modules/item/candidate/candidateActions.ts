import type { RequestHandler } from "express";
import candidateRepository from "./candidateRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const candidates = await candidateRepository.readAll();
    res.json(candidates);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const candidateId = Number.parseInt(req.params.id);
    const candidate = await candidateRepository.read(candidateId);
    res.json(candidate);
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
