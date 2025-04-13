import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Company = {
  id: number;
  company_name: string;
  sector: string;
  employee_number?: number;
  user_id: number;
  website_link: string;
  description: string;
};

class CompaniesRepository {
  async readAllCompanies() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM company");
    return rows as Company[];
  }

  async read(user_id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      select * from company where user_id = ?
      `,
      [user_id],
    );
    return rows[0] as Company;
  }

  async create(company: Omit<Company, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO company (company_name, description, employee_number, sector, website_link, user_id ) VALUES (?,?,?,?,?,?)",
      [
        company.company_name,
        company.description,
        company.employee_number,
        company.sector,
        company.website_link,
        company.user_id,
      ],
    );
    return result.insertId;
  }
}

export default new CompaniesRepository();
