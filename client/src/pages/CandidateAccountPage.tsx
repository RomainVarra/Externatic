import { useNavigate } from "react-router-dom";
import CandidateUserAccount from "../components/CandidateAccount/CandidateUserAccount";

function CandidateAccountPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/account/candidate/update");

  const handleOffers = () => navigate("/OffersResearch");

  return (
    <>
      <h1 className=" text-4xl font-bold text-black mt-5 mb-5 justify-center text-center">
        Mon compte
      </h1>
      <section>
        <CandidateUserAccount />
      </section>

      <section className="flex justify-center">
        <button
          type="button"
          onClick={handleClick}
          className="px-5 py-4 my-5 rounded btn-submit hover:bg-orange-600 "
        >
          {" "}
          Mettre à jour mon profil
        </button>
        <button
          className="px-5 py-4 mx-5 my-5 rounded btn-primary hover:bg-orange-600 "
          onClick={handleOffers}
          type="button"
        >
          Voir les offres disponibles
        </button>
      </section>
    </>
  );
}

export default CandidateAccountPage;
