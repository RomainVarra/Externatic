import { useState } from "react";
import CompanyImage from "../../assets/images/CompanyImage.jpg";
import type { Offer } from "../../lib/offers.definitions";
import OfferFilter from "./OfferFilter";

type OffersByCompanyProps = {
  offers: Offer[];
};

const OffersByCompany = ({ offers }: OffersByCompanyProps) => {
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>(
    offers.filter((offer) => offer.is_active),
  );

  const handleFilterChange = (newFilteredOffers: Offer[]) => {
    setFilteredOffers(newFilteredOffers);
  };

  const noOffersMessage =
    filteredOffers.length === 0 ? (
      <p>Aucune offre d'emploi trouvée pour cette entreprise.</p>
    ) : null;

  const renderedOffers = filteredOffers.map((offer) => (
    <div
      key={offer.id}
      className="border-2 border-primary m-4 sm:ml-6 md:ml-8 rounded overflow-hidden flex"
    >
      <ul className="p-4 flex-1 bg-white">
        <li className="font-bold text-xl mb-2">{offer.title}</li>
        <li className="text-xl mb-2 font-medium">{offer.location}</li>
        <li className="text-xl mb-2 font-medium">{offer.wage.toFixed(2)} €</li>
        <li className="text-xl mb-2 font-medium">
          {offer.is_teleworking
            ? "Télétravail disponible"
            : "Pas de télétravail"}
        </li>
        <li className="text-xl mb-2 font-medium">
          {offer.is_opened_to_disabled
            ? "Ouvert aux personnes handicapées"
            : "Non ouvert aux personnes handicapées"}
        </li>
      </ul>
      <img
        src={CompanyImage}
        alt="Offre"
        className="w-96 h-auto object-cover"
      />
    </div>
  ));

  return (
    <div>
      <OfferFilter offers={offers} onFilterChange={handleFilterChange} />
      {noOffersMessage}
      {filteredOffers.length > 0 && <div>{renderedOffers}</div>}
    </div>
  );
};

export default OffersByCompany;
