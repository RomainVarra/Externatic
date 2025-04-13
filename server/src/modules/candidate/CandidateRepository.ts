import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

export type CandidateType = {
  id: number;
  cv: string;
  photo: string;
  user_id: number;
  is_disabled: boolean;
};

class CandidateRepository {
  async create(candidate: Omit<CandidateType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO candidate (cv, photo, user_id, is_disabled) VALUES (?,?,?,?)",
      [candidate.cv, candidate.photo, candidate.user_id, candidate.is_disabled],
    );
    return result.insertId;
  }

  async readUser(user_id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      select * from candidate where user_id = ?
      `,
      [user_id],
    );
    return rows[0] as CandidateType;
  }
}

export default new CandidateRepository();
