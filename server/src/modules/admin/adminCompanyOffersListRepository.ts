import dabaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

type OffersDataType = {
  id: number;
  title: string;
  logo: string;
  wage: number;
  description: string;
  location: string;
  is_teleworking: boolean;
  contract_type: string;
  company_id: number;
  is_opened_to_disabled: boolean;
};

class adminCompanyOffersList {
  async readAll(companyId: number) {
    const [rows] = await dabaseClient.query<Rows>(
      "SELECT * FROM offer WHERE company_id=?",
      [companyId],
    );
    return rows as OffersDataType[];
  }
}

export default new adminCompanyOffersList();
