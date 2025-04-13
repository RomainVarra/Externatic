import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

export type OffersDataType = {
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

class OfferRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM offer");

    return rows as OffersDataType[];
  }

  async readByFilter(research: Partial<OffersDataType>) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM offer WHERE title LIKE ? AND contract_type=? AND location=? AND is_teleworking = ?",

      [
        `%${research.title}%`,
        research.contract_type,
        research.location,
        research.is_teleworking,
      ],
    );
    return rows as OffersDataType[];
  }
}

export default new OfferRepository();
