import type { RequestHandler } from "express";
import companiesRepository from "./companiesRepository";

const browseCompanies: RequestHandler = async (req, res, next) => {
  try {
    const companies = await companiesRepository.readAllCompanies();
    res.json(companies);
  } catch (err) {
    next(err);
  }
};

const readCompany: RequestHandler = async (req, res, next) => {
  try {
    const user_id = Number(req.params.id);
    const company = await companiesRepository.read(user_id);

    if (company == null) {
      res.sendStatus(404);
    } else {
      res.json(company);
    }
  } catch (err) {
    next(err);
  }
};

const readCompanyProfil: RequestHandler = async (req, res, next) => {
  try {
    const user_id = req.body.user_id;
    const company = await companiesRepository.read(user_id);

    if (!company) {
      res.sendStatus(404);
      return;
    }

    req.body.company_id = company.id;

    next();
  } catch (err) {
    next(err);
  }
};

const uploadCompany: RequestHandler = async (req, res, next) => {
  try {
    const newCompany = {
      company_name: req.body.company_name,
      sector: req.body.sector,
      employee_number: Number.parseInt(req.body.employee_number),
      description: req.body.description,
      user_id: req.body.user_id,
      website_link: req.body.website_link,
    };

    const insertId = await companiesRepository.create(newCompany);

    res.status(201).json();
  } catch (err) {
    next(err);
  }
};

export default {
  browseCompanies,
  readCompany,
  readCompanyProfil,
  uploadCompany,
};
