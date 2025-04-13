import express from "express";
import adminCompanyOffersListActions from "../modules/admin/adminCompanyOffersListActions";

const router = express.Router();

router.get("/:company_id", adminCompanyOffersListActions.browse);
export default router;
