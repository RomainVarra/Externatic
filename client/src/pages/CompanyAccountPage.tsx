import { useNavigate } from "react-router-dom";
import CompanyLogo from "../assets/images/CompanyLogo.jpg";
import CompanyAccount from "../components/companies/CompanyAccount";

function CompanyAccountPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/account/company/update");
  const handleOffersCreation = () => navigate("/OfferCreation");
  return (
    <>
      <h1 className=" text-4xl font-bold text-black mt-5 mb-5 justify-center text-center">
        Mon compte (Entreprise)
      </h1>
      <section className="flex justify-center items-center">
        <img className="w-96" src={CompanyLogo} alt="logo d'une entreprise" />
      </section>
      <section>
        <CompanyAccount />
      </section>

      <section className="flex justify-center">
        <button
          type="button"
          onClick={handleClick}
          className="px-5 py-4 my-5 rounded btn-submit hover:bg-orange-600 "
        >
          {" "}
          Ajouter des informations
        </button>
        <button
          type="button"
          onClick={handleOffersCreation}
          className="px-5 py-4 mx-5 my-5 rounded btn-primary hover:bg-orange-600 "
        >
          Créer une nouvelle offre
        </button>
      </section>
    </>
  );
}

export default CompanyAccountPage;
