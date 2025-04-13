import AboutCandidat from "../components/About/AboutCandidat";
import OffersList from "../components/Offers/OffersList";

export default function OffersPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <AboutCandidat />
        <OffersList />
      </div>
    </>
  );
}
