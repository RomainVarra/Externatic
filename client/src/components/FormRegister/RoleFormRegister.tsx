import { useFormContext } from "react-hook-form";

export function CandidateRoleForm() {
  const { setValue } = useFormContext();

  setValue("role", { label: "candidate" });
}
