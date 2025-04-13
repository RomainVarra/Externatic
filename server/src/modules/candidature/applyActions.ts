import { type RequestHandler, response } from "express";
import ApplyRepository from "./ApplyRepository";

const addApply: RequestHandler = async (req, res, next) => {
  try {
    const newCandidature = {
      candidate_id: req.body.candidate_id,
      offer_id: req.body.offer_id,
    };

    const insertId = await ApplyRepository.create(newCandidature);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const browseApply: RequestHandler = async (req, res, next) => {
  try {
    const apply = await ApplyRepository.applyOfferDetails(
      req.body.candidate_id,
    );
    res.json(apply);
  } catch (err) {
    next(err);
  }
};

export default { addApply, browseApply };
