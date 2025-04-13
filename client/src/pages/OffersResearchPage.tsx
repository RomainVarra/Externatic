import { useState } from "react";
import OffersList from "../components/Offers/OffersList";
import OffersResearch from "../components/Offers/OffersResearch";
import type { OffersDataType } from "../lib/offers.definitions";
import type { SearchDataType } from "../lib/search.definition";

export default function OffersResearchPage() {
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  const [filteredOffers, setFilteredOffers] = useState<OffersDataType[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFilteredOffers = async (searchData: SearchDataType) => {
    const formatSearch = {
      ...searchData,
      is_teleworking: Boolean(searchData.is_teleworking),
    };
    try {
      const response = await fetch(`${VITE_API_URL}/api/offers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formatSearch),
      });
      if (response.status === 204) {
        const error = await response.json();
        setError(error.message);
      }
      const data: OffersDataType[] = await response.json();
      setFilteredOffers(data);
    } catch (err) {
      err;
    }
  };

  return (
    <>
      <OffersResearch
        handleFilteredOffers={handleFilteredOffers}
        filteredOffers={filteredOffers}
        error={error}
      />
      <OffersList />
    </>
  );
}
