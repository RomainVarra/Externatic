export type CandidateDataType = {
  cv: string;
  photo: string;
  user_id: number;
  is_disabled: boolean;
};

export type CandidatureType = {
  id: number;
  statut: string;
  title: string;
  location: string;
  contract_type: string;
  is_refused: boolean;
  candidate_id: number;
  offer_id: number;
};
