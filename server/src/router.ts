import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import offersListActions from "./modules/offersList/offersListActions";

import offersActions from "./modules/offers/offersActions";

router.get("/api/offers", offersActions.browseOffers);
// Define item-related routes

import { comparePassword, hashPassword } from "./middlewares/argon.middleware";
import { checkEmail, verifieEmail } from "./middlewares/checkEmail.middleware";
import {
  candidateRegister,
  companyRegister,
} from "./middlewares/register.middleware";
import {
  checkCandidateRole,
  checkCompanyRole,
} from "./middlewares/role.middleware";
import { login } from "./modules/auth/authActions";
import userActions from "./modules/item/user/userActions";

router.post(
  "/api/usercandidateformregister",
  hashPassword,
  checkEmail,
  candidateRegister,
  userActions.add,
);
router.post(
  "/api/usercompanyformregister",
  hashPassword,
  checkEmail,
  companyRegister,
  userActions.add,
);

router.post(
  "/api/login/company",
  verifieEmail,
  comparePassword,
  checkCompanyRole,
  login,
);

router.post(
  "/api/login/candidate",
  verifieEmail,
  comparePassword,
  checkCandidateRole,
  login,
  userActions.add,
);
/* ************************************************************************* */
router.get("/api/offersPage", offersListActions.browse);

export default router;
