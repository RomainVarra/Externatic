import type { UserFormData } from "../../lib/userForm.definitions";

export const candidateFields = (candidate: UserFormData) => [
  { label: "ID", value: candidate.id },
  { label: "Prénom", value: candidate.firstname },
  { label: "Nom", value: candidate.lastname },
  { label: "Email", value: candidate.email },
  { label: "Adresse", value: candidate.address },
  { label: "Code Postal", value: candidate.postal_code },
  { label: "Ville", value: candidate.city },
  { label: "Téléphone", value: candidate.tel },
];
