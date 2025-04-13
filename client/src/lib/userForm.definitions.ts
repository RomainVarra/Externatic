export type UserFormData = {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  address: string;
  city: string;
  postal_code: number;
  tel: number;
  password: string;
  confirmPassword: string;
  is_active: boolean;
  is_role: boolean;
  updatedAt?: string;
};

export type CandidateFormData = {
  cv: string;
  pdf: string;
  photo: string;
  is_disabled: string;
};

export type loginCompanyType = {
  email: string;
  password: string;
};
