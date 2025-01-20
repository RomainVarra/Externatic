import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

type UserType = {
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
};

class UserRepository {
  async create(user: Omit<UserType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, email, hashed_password, address, postal_code, city, tel, is_active, is_role, role_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from user");

    return rows as UserType[];
  }

  async readByEmail(email: string) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );

    // Return the first row of the result, which represents the user
    return rows[0] as UserType;
  }
}

export default new UserRepository();
