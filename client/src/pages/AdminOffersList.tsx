import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import type { OffersDataType } from "../lib/offers.definitions";

export default function AdminOffersList() {
  const [offersList, setOffersList] = useState<OffersDataType[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const companyId = Number(id);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/api/admin/companyOfferList/${companyId}`,
    )
      .then((res) => res.json())
      .then((data: OffersDataType[]) => {
        setOffersList(data);
      });
  }, [companyId]);

  return (
    <>
      <h1 className="text-center p-4 lg:text-left lg:mb-20">
        ENTREPRISE {`${id}`}
      </h1>
      <section className="flex lg:flex-row lg:flex-wrap gap-4 lg:gap-8 flex-col lg:justify-center items-center pt-4 lg:mb-32 lg:p-12">
        {offersList?.length > 0 ? (
          offersList.map((o) => (
            <section
              key={o.id}
              className="text-white bg-blue-700 rounded-md p-2 w-[15em] h-[5em] flex flex-col"
            >
              <button type="button" onClick={() => navigate(`/offer/${id}`)}>
                <h2>Offre:{o.id}</h2>
                <span>{o.title}</span>
              </button>
            </section>
          ))
        ) : (
          <span>"Aucune offre"</span>
        )}
      </section>
      <button
        type="button"
        className="text-white mt-12 mb-4 rounded-md bg-green-500 p-4 block mx-auto lg:mx-0 lg:ml-20 lg:mb-12"
      >
        Ajouter une offre
      </button>
    </>
  );
}
