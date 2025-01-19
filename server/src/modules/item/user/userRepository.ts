import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  address: string;
  postal_code: string;
  city: string;
  tel: string;
  role_id: number;
  is_active: boolean;
  is_role: boolean;
};

class UserRepository {
  async create(user: Omit<UserType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, email, password, address, postal_code, city, tel, role_id, is_active, is_role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.address,
        user.postal_code,
        user.city,
        user.tel,
        user.role_id,
        user.is_active,
        user.is_role,
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from user");

    return rows as UserType[];
  }
}

export default new UserRepository();
