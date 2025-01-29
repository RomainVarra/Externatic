import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserFormRegister from "../../components/userForm/UserFormRegister";
import type { UserFormData } from "../../lib/userForm.definitions";
import userIcone from "../assets/images/UserIcone.png";

function UserCandidateForm() {
  const navigate = useNavigate();

  const handleCandidateFormSubmit = async (userData: UserFormData) => {
    try {
      const newCandidateUser = await fetch(
        `${import.meta.env.VITE_API_URL}/api/usercandidateformregister`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );
      if (newCandidateUser.ok) {
        toast.success(
          "Votre compte a bien été créé. Bienvenue sur Externatic !",
        );
        navigate("/");
      } else {
        toast.error(
          "Une erreur est survenue lors de votre inscription ! Veuillez réessayer",
        );
      }
    } catch (err) {
      console.info(err);
    }
  };

  return (
    <>
      <section className=" mt-10">
        <article className="flex flex-col justify-center items-center">
          <h1 className=" text-4xl font-bold text-black mt-5 mb-5 justify-center">
            Candidat
          </h1>
          <img
            className="w-24  mt-10"
            src={userIcone}
            alt="Icone de création de compte"
          />

          <UserFormRegister onSubmit={handleCandidateFormSubmit} />
        </article>
      </section>
    </>
  );
}

export default UserCandidateForm;
