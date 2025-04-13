import type { RequestHandler } from "express";
import offersListRepository from "./offersListRepository";

const browse: RequestHandler = async (req, res) => {
  const offersFromDB = await offersListRepository.readAll();
  res.json(offersFromDB);
};

export default { browse };
