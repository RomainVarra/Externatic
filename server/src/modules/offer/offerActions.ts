import type { RequestHandler } from "express";
import offerRepository from "./offerRepository";
import type { OffersDataType } from "./offerRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const offers = await offerRepository.readAll();
    res.json(offers);
  } catch (err) {
    next(err);
  }
};

const readFilteredOffers: RequestHandler = async (req, res, next) => {
  try {
    const research: Partial<OffersDataType> = req.body;

    const filteredOffers = await offerRepository.readByFilter(research);
    if (!filteredOffers || filteredOffers.length === 0) {
      res
        .status(204)
        .json({ message: "Aucune offre correspondante à votre recherche" });
    } else {
      res.status(200).send(filteredOffers);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, readFilteredOffers };
