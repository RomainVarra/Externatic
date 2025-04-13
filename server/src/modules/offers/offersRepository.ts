import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Offer = {
  id: number;
  logo?: string;
  title: string;
  wage: number;
  description: string;
  location: string;
  is_teleworking: number;
  contract_type: string;
  is_opened_to_disabled: number;
  company_id: number;
};

class OffersRepository {
  async readAllOffers() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM offer");
    return rows as Offer[];
  }

  async readOffersByCompany(companyId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM offer WHERE company_id = ?",
      [companyId],
    );
    return rows as Offer[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select o.*, c.company_name from offer AS o JOIN company AS c ON o.company_id = c.id where o.id = ?",
      [id],
    );

    return rows[0] as Offer;
  }

  async create(offer: Omit<Offer, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO offer (title, description, contract_type, wage, location, is_opened_to_disabled, is_teleworking, company_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        offer.title,
        offer.description,
        offer.contract_type,
        offer.wage,
        offer.location,
        offer.is_opened_to_disabled,
        offer.is_teleworking,
        offer.company_id,
      ],
    );
    return result.insertId;
  }
}

export default new OffersRepository();
