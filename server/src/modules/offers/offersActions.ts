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

const browseOffersByCompany: RequestHandler = async (req, res, next) => {
  try {
    const companyId = Number.parseInt(req.query.companyId as string);
    const offers = await offersRepository.readOffersByCompany(companyId);
    res.json(offers);
  } catch (err) {
    next(err);
  }
};

const browseOffer: RequestHandler = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id);
    const offer = await offersRepository.read(id);
    res.json(offer);
  } catch (err) {
    next(err);
  }
};

const addOffer: RequestHandler = async (req, res, next) => {
  try {
    const newOffer = {
      title: req.body.title,
      wage: req.body.wage,
      description: req.body.description,
      location: req.body.location,
      is_teleworking: req.body.is_teleworking,
      contract_type: req.body.contract_type,
      company_id: req.body.company_id,
      is_opened_to_disabled: req.body.is_opened_to_disabled,
    };

    const insertId = await offersRepository.create(newOffer);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default {
  browseOffers,
  browseOffersByCompany,
  browseOffer,
  addOffer,
};
