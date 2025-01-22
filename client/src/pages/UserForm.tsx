import { FormProvider, useForm } from "react-hook-form";
import userIcone from "../assets/images/UserIcone.png";

import CandidateFormRegister from "../components/FormRegister/CandidateFormRegister";

import UserFormRegister from "../components/FormRegister/UserFormRegister";

function UserForm() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = async () => {
    try {
      const roleResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/roleformregister`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ label: "candidate" }),
        },
      );

      const { insertId: role_id } = await roleResponse.json();

      const userResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/userformregister`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            role_id,
          }),
        },
      );
      const { user_id } = await userResponse.json();

      await fetch(`${import.meta.env.VITE_API_URL}/api/candidateformregister`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id,
        }),
      });

      alert("Formulaire soumis avec succès !");
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      alert("Une erreur est survenue lors de la soumission.");
    }
  };

  return (
    <>
      <section>
        <h1 className="text-4xl font-bold text-black mb-6">Candidat</h1>
        <img
          className="w-24 mb-8"
          src={userIcone}
          alt="Icône de création de compte"
        />
      </section>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <section className="flex flex-col items-center">
            <UserFormRegister />
          </section>

          <section>
            <CandidateFormRegister />
          </section>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Envoyer le formulaire
          </button>
        </form>
      </FormProvider>
    </>
  );
}

export default UserForm;
