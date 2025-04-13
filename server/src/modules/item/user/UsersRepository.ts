import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

export type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  hashed_password: string;
  address: string;
  postal_code: string;
  city: string;
  tel: string;
  is_active: boolean;
  is_role: boolean;
  role_id: number;
  updated_at?: string;
};

class UserRepository {
  async create(user: Omit<UserType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, email, hashed_password, address, postal_code, city, tel, is_active, is_role, role_id, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashed_password,
        user.address,
        user.postal_code,
        user.city,
        user.tel,
        user.is_active,
        user.is_role,
        user.role_id,
        user.updated_at,
      ],
    );
    return result.insertId;
  }

  async readByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE email = ?",
      [email],
    );

    return rows[0] as UserType;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT * FROM user WHERE id = ?
      `,
      [id],
    );

    return rows[0] as UserType;
  }

  async getRoleByLabel(label: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM role WHERE label = ?",
      [label],
    );

    return rows[0];
  }

  async getAllCandidates(role_id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE role_id = ?",
      [role_id],
    );
    return rows as UserType[];
  }

  async getAllCompanies(role_id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE role_id = ?",
      [role_id],
    );
    return rows as UserType[];
  }

  async anonymizeCandidate(candidateId: number) {
    await databaseClient.query(
      `
      UPDATE user 
      SET 
        firstname = '###', 
        lastname = '###', 
        email = CONCAT('###', id), 
        address = '###', 
        postal_code = '###', 
        city = '###', 
        tel = '###' 
      WHERE id = ?`,
      [candidateId],
    );
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, firstname, lastname, email, address, postal_code, city, tel FROM user WHERE id = ?",
      [candidateId],
    );
    return rows[0];
  }

  async anonymizeCompany(companyId: number) {
    await databaseClient.query(
      `
      UPDATE user 
      SET 
        firstname = '###', 
        lastname = '###', 
        email = CONCAT('###', id), 
        address = '###', 
        postal_code = '###', 
        city = '###', 
        tel = '###' 
      WHERE id = ?`,
      [companyId],
    );
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, firstname, lastname, email, address, postal_code, city, tel FROM user WHERE id = ?",
      [companyId],
    );
    return rows[0];
  }

  async getProfilesUpdatedInLast7Days() {
    const [rows] = await databaseClient.query<Rows>(
      `
			SELECT id, firstname, lastname, updated_at FROM user 
			WHERE updated_at >= NOW() - INTERVAL 7 DAY  
			`,
    );
    return rows.map((row) => ({
      ...row,
      updatedAt: row.updated_at,
    }));
  }
}

export default new UserRepository();
