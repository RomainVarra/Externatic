import type { RequestHandler } from "express";
import CandidateRepository from "./CandidateRepository";

const uploadFiles: RequestHandler = async (req, res, next) => {
  try {
    const { photo, cv } = req.files as {
      photo: Express.Multer.File[];
      cv: Express.Multer.File[];
    };
    const photoPath = photo[0].filename;
    const cvPath = cv[0].filename;

    const newCandidate = {
      cv: cvPath,
      photo: photoPath,
      user_id: Number(req.body.user_id),
      is_disabled: req.body.is_disabled,
    };
    console.log(newCandidate);

    const insertId = await CandidateRepository.create(newCandidate);

    res.status(201).json();
  } catch (err) {
    next(err);
  }
};

const readProfil: RequestHandler = async (req, res, next) => {
  try {
    const user_id = Number(req.params.id);
    const candidate = await CandidateRepository.read(user_id);

    if (candidate == null) {
      res.sendStatus(404);
    } else {
      res.json(candidate);
    }
  } catch (err) {
    next(err);
  }
};

export default { uploadFiles, readProfil };
