import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import type { Offer } from "../lib/offers.definitions";

const DetailsOfferCandidatPage = () => {
  const { id } = useParams();
  const { userId } = useAuth();
  const navigate = useNavigate();
  const [offer, setOffer] = useState<Offer | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/offers/${id}`)
      .then((response) => response.json())
      .then((data: Offer) => {
        setOffer(data);
      })
      .catch((err) => err);
  }, [id]);

  const handleClick = async () => {
    try {
      const toApply = await fetch(`${import.meta.env.VITE_API_URL}/api/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ offer_id: id, user_id: userId }),
        credentials: "include",
      });

      if (toApply.ok) {
        toast.success("Bravo! Vous venez de postuler à cette offre");
        navigate("/");
      } else {
        toast.error("Un problème est survenu ! Veuillez réessayer");
      }
    } catch (err) {
      err;
    }
  };

  return (
    <>
      <section className="grid place-items-center gap-6 p-4">
        <div
          className="border-2 border-primary shadow-md bg-slate-100 
            w-full max-w-2xl p-10 mx-auto"
        >
          <h1 className="font-bold text-3xl">{offer?.title}</h1>
          <p className="mb-4">{offer?.company_name}</p>
          <div className="lg:flex">
            <h2 className="text-xl font-bold mr-2">Localisation: </h2>
            <p className="text-xl mb-4">{offer?.location}</p>
          </div>
          <div className="grid-auto-flow">
            <h2 className="font-bold text-xl mr-2">Description du poste: </h2>
            <p className="text-xl mb-4">{offer?.description}</p>
          </div>
          <div className="lg:flex">
            <h2 className="text-xl font-bold mr-2">
              Possibilité de télétravail:{" "}
            </h2>
            <p className="text-xl mb-4">
              {offer?.is_teleworking === 0 ? "Non" : "Oui"}
            </p>
          </div>
          <div className="lg:flex">
            <h2 className="text-xl font-bold mr-2">
              Poste ouvert aux travailleurs en situation de handicap:{" "}
            </h2>
            <p className="text-xl">
              {offer?.is_opened_to_disabled === 0 ? "Non" : "Oui"}
            </p>
          </div>
        </div>
      </section>

      <section className="p-4">
        <div className="flex gap-4 justify-center">
          <button
            type="button"
            className="flex flex-col items-center px-6 py-2 text-xl font-medium rounded-md btn-secondary sm:px-20 sm:py-4"
          >
            Ajouter aux favoris
          </button>
          <button
            type="button"
            onClick={handleClick}
            className="flex flex-col items-center px-6 py-2 text-xl font-medium rounded-md btn-primary sm:px-20 sm:py-4"
          >
            Postuler
          </button>
        </div>
      </section>
    </>
  );
};

export default DetailsOfferCandidatPage;
