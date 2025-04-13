import { useEffect, useState } from "react";
import type { offersType } from "../lib/offersType";

function OffersList() {
  const [dataOffers, setDataOffers] = useState<offersType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/offers`)
      .then((response) => response.json())
      .then((data: offersType[]) => {
        setDataOffers(data);
      });
  }, []);

  return (
    <>
      <h1 className="max-w-4xl mx-auto px-4 py-6  flex justify-around text-4xl">
        Nos offres en cours
      </h1>
      <section className="grid grid-rows-[minmax(100px,_auto)] grid-cols-3 gap-4">
        {dataOffers?.map((o) => (
          <ul key={o.id} className="border border-red-500 ml-4 md:ml-8">
            <h2>intitulé de l'offre</h2>
            <li className="text-xl mb-2  font-medium  p-6">{o.title} </li>
            <li className=" text-xl mb-2 font-medium p-6">{o.description}</li>
            <li className=" text-xl mb-2 font-medium p-6"> {o.wage}</li>
          </ul>
        ))}
      </section>
    </>
  );
}

export default OffersList;
