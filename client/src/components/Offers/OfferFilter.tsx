import { useState } from "react";
import type { Offer } from "../../lib/offers.definitions";

type OfferFilterProps = {
  offers: Offer[];
  onFilterChange: (filteredOffers: Offer[]) => void;
};

const OfferFilter = ({ offers, onFilterChange }: OfferFilterProps) => {
  const [isActiveOnly, setIsActiveOnly] = useState<boolean>(true);

  const handleToggleChange = () => {
    setIsActiveOnly((prevState) => {
      const filteredOffers = !prevState
        ? offers.filter((offer) => offer.is_active)
        : offers.filter((offer) => !offer.is_active);

      onFilterChange(filteredOffers);
      return !prevState;
    });
  };

  return (
    <div className="flex justify-end mb-4">
      <div className="mt-2 lg:self-center flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isActiveOnly}
            onChange={handleToggleChange}
            className="sr-only peer"
          />
          <div className="mr-2 w-9 h-5 lg:w-11 lg:h-6 bg-black peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 lg:after:h-5 lg:after:w-5 after:transition-all peer-checked:bg-[#CA2060] hover:peer-checked:bg-[#CA2060]" />
        </label>
        <span className="text-gray-700 font-bold">
          {isActiveOnly ? "Actives" : "Pourvues"}
        </span>
      </div>
    </div>
  );
};

export default OfferFilter;
