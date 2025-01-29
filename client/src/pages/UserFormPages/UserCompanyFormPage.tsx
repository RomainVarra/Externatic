import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserFormRegister from "../../components/userForm/UserFormRegister";
import type { UserFormData } from "../../lib/userForm.definitions";
import companyIcone from "../assets/images/CompanyLogo.jpg";

function UserCompanyForm() {
  const navigate = useNavigate();
  const handleCandidateFormSubmit = async (userData: UserFormData) => {
    try {
      const newCompanyUser = await fetch(
        `${import.meta.env.VITE_API_URL}/api/usercompanyformregister`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );
      if (newCompanyUser.ok) {
        toast.success(
          "Votre compte a bien été créé. Bienvenue sur Externatic !",
        );
        navigate("/login/company");
      } else
        toast.error(
          "Une erreur est survenue lors de votre inscription ! Veuillez réessayer",
        );
    } catch (err) {
      console.info(err);
    }
  };

  return (
    <>
      <section className=" mt-10">
        <article className="flex flex-col justify-center items-center">
          <h1 className=" text-4xl font-bold text-black mt-5 mb-5 justify-center">
            Entreprise
          </h1>
          <img
            className="w-60  mt-10"
            src={companyIcone}
            alt="Icone de création de compte"
          />

          <UserFormRegister onSubmit={handleCandidateFormSubmit} />
        </article>
      </section>
    </>
  );
}

export default UserCompanyForm;
