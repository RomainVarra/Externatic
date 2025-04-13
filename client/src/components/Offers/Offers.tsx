import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import type { Offer } from "../../lib/offers.definitions";

type OffersProps = {
  offers: Offer[];
};

const Offers = ({ offers }: OffersProps) => {
  const [imageCount, setImageCount] = useState(4);

  useEffect(() => {
    setImageCount(window.innerWidth < 768 ? 4 : 6);
  }, []);

  const renderOffers = () => {
    return offers.slice(0, imageCount).map((offre) => (
      <NavLink key={offre.id} to={"/offers"}>
        <figure key={offre.id}>
          <img
            src={offre.logo}
            alt="Logo offre d'emploi"
            className="relative h-32 object-cover object-center w-full"
          />
          <figcaption className="mt-2 text-white">{offre.title}</figcaption>
        </figure>
      </NavLink>
    ));
  };

  return (
    <section id="nos-offres" className="py-10 m-10 rounded-md section-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="lg:text-center">
          <h2 className="text-3xl text-center font-extrabold text-white sm:text-4xl">
            Nos offres
          </h2>
        </header>

        <article className="mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {renderOffers()}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Offers;
