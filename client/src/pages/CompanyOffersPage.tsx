import { useLoaderData } from "react-router-dom";
import OffersByCompany from "../components/Offers/OffersByCompany";
import type { Offer } from "../lib/offers.definitions";

const CompanyOffersPage = () => {
  const offers = useLoaderData() as Offer[];

  return (
    <section className="m-5">
      <h1 className="text-2xl text-center font-extrabold mb-4">
        Offres d'Emploi
      </h1>
      <OffersByCompany offers={offers} />
    </section>
  );
};

export default CompanyOffersPage;
