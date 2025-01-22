import databaseClient from "../../../../database/client";

import type { Result } from "../../../../database/client";

type CandidateType = {
  is_disabled: boolean;
  user_id: number;
};

class CandidateRepository {
  async create(candidate: Omit<CandidateType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO candidate (is_disabled, user_id) VALUES (?, ?)",
      [candidate.is_disabled, candidate.user_id],
    );
    return result.insertId;
  }
}

export default new CandidateRepository();
