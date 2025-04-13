import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import OfferCreation from "../components/Offers/OfferCreation";
import { useCompany } from "../context/CompanyContext";
import type { OffersDataType } from "../lib/offers.definitions";

function OfferCreationPage() {
  const { userId } = useCompany();

  const navigate = useNavigate();

  const handleOfferSubmit = async (offerData: OffersDataType) => {
    const newCompanyOffer = { ...offerData, user_id: userId };
    try {
      const newOffer = await fetch(
        `${import.meta.env.VITE_API_URL}/api/companies/offer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCompanyOffer),
          credentials: "include",
        },
      );
      if (!userId) {
        toast.error("Vous devez être connecté pour publier une offre !");
      }
      if (newOffer.ok) {
        setTimeout(() => {
          navigate("/account/company");
        }, 3000);
        toast.success("L'offre est publiée !");
      } else {
        toast.error("Une erreur est survenue ! Veuillez réessayer");
      }
    } catch (err) {
      err;
    }
  };
  return (
    <section className="flex flex-col items-center justify-center">
      <OfferCreation onSubmit={handleOfferSubmit} />
    </section>
  );
}

export default OfferCreationPage;
