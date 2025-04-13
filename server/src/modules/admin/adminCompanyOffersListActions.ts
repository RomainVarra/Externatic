import type { RequestHandler } from "express";

import adminCompanyOffersListRepository from "./adminCompanyOffersListRepository";

const browse: RequestHandler = async (req, res, next) => {
  const companyId: number = Number.parseInt(req.params.company_id);
  const companyOffersList =
    await adminCompanyOffersListRepository.readAll(companyId);
  if (companyOffersList) {
    res.json(companyOffersList);
  } else {
    res.sendStatus(500).json("Erreur lors de la récupération des données");
  }
};

export default { browse };
