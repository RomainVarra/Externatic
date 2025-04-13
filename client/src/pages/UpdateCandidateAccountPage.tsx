import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UpdateCandidateAccount from "../components/CandidateAccount/UpdateCandidateAccount";
import { useAuth } from "../context/AuthContext";
import type { CandidateFormData } from "../lib/userForm.definitions";

function CandidateAccountPage() {
  const { userId } = useAuth();
  const navigate = useNavigate();

  const handleUploadCandidateInformation = async (data: CandidateFormData) => {
    try {
      const formData = new FormData();

      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      if (data.cv && data.cv.length > 0) {
        formData.append("cv", data.cv[0]);
      }

      formData.append("user_id", String(userId));
      formData.append("is_disabled", data.is_disabled);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/candidate/account`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        },
      );

      if (response.status === 201) {
        toast.success("Les informations sont bien mis à jour");
        setTimeout(() => {
          navigate("/account/candidate");
        }, 3000);
      } else {
        toast.error("Une erreur s'est produite ! Veuillez réessayer");
      }
    } catch (err) {
      err;
    }
  };

  return (
    <section className=" mt-10 flex justify-center flex-col">
      <article>
        <h1 className=" text-4xl font-bold text-black mt-5 mb-5 justify-center text-center">
          Mes informations (Candidat)
        </h1>

        <UpdateCandidateAccount onSubmit={handleUploadCandidateInformation} />
      </article>
    </section>
  );
}

export default CandidateAccountPage;
