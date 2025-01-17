import type { RequestHandler } from "express";
import offersRepository from "./offersRepository";

const browseOffers: RequestHandler = async (req, res, next) => {
  try {
    const offers = await offersRepository.readAllOffers();
    res.json(offers);
  } catch (err) {
    next(err);
  }
};

export default { browseOffers };
