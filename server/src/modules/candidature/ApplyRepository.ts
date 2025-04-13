import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Apply = {
  id: number;
  statut?: string;
  is_refused?: boolean;
  candidate_id: number;
  offer_id: number;
};

class ApplyRepository {
  async create(apply: Omit<Apply, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO candidature (statut, is_refused, candidate_id, offer_id) VALUES (?, ?, ?, ?)",
      ["En attente", false, apply.candidate_id, apply.offer_id],
    );
    return result.insertId;
  }

  async applyOfferDetails(candidate_id: number) {
    const [Rows] = await databaseClient.query<Rows>(
      `
      SELECT candidature.*, offer.*
      FROM candidature
      JOIN offer ON offer.id = candidature.offer_id
      WHERE candidature.candidate_id = ?
      `,
      [candidate_id],
    );
    return Rows as Apply[];
  }
}

export default new ApplyRepository();
