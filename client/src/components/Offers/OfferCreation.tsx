import { useForm } from "react-hook-form";
import type { OffersDataType } from "../../lib/offers.definitions";

type OfferFormType = {
  onSubmit: (data: OffersDataType) => void;
};

function OfferCreation({ onSubmit }: OfferFormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OffersDataType>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-8 w-full max-w-lg p-8 rounded-lg shadow-lg bg-primary mx-12"
    >
      <section className="mb-6">
        <label className="block text-sm text-white font-semibold">
          Titre de l'offre :
          <input
            {...register("title", {
              required: "Le champ est requis",
              minLength: {
                value: 5,
                message: "Le titre doit contenir au moins 5 caractères",
              },
              maxLength: {
                value: 50,
                message: "Le titre ne peut pas dépasser 50 caractères",
              },
            })}
            type="text"
            className="mt-2 p-2 block w-full rounded-md text-black border-gray-300 h-7"
          />
          {typeof errors.title?.message === "string" && (
            <span className="text-red-300">{errors.title.message}</span>
          )}
        </label>
      </section>

      <section className="mb-6">
        <label className="block text-sm text-white font-semibold">
          Salaire (en € / an):
          <input
            {...register("wage", {
              required: "Le champ est requis",
              min: {
                value: 0,
                message: "Le salaire ne peut pas être de 0 euros",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Veuillez entrer juste des chiffres pour le salaire",
              },
            })}
            type="number"
            className="mt-2 p-2 block w-full rounded-md text-black border-gray-300 h-7"
          />
          {typeof errors.wage?.message === "string" && (
            <span className="text-red-300">{errors.wage.message}</span>
          )}
        </label>
      </section>

      <section className="mb-6">
        <label className="block text-sm text-white font-semibold">
          Description :
          <textarea
            {...register("description", {
              required: "Le champ est requis",
              minLength: {
                value: 10,
                message: "Le champs doit contenir au moins 10 caractères",
              },
            })}
            className="mt-2 p-2 block w-full rounded-md text-black border-gray-300"
          >
            {""}
          </textarea>
          {typeof errors.description?.message === "string" && (
            <span className="text-red-300">{errors.description.message}</span>
          )}
        </label>
      </section>

      <section className="mb-6">
        <label className="block text-sm text-white font-semibold">
          Localisation :
          <input
            {...register("location", {
              required: "Le champ est requis",
              maxLength: {
                value: 100,
                message: "La localisation ne peut pas dépasser 100 caractères",
              },
            })}
            type="text"
            className="mt-2 p-2 block w-full rounded-md text-black border-gray-300 h-7"
          />
          {typeof errors.location?.message === "string" && (
            <span className="text-red-300">{errors.location.message}</span>
          )}
        </label>
      </section>

      <section className="mb-6">
        <label
          htmlFor="is_teleworking"
          className="block text-sm  text-white font-semibold"
        >
          Possibilité de télétravail ?
          <article>
            <input
              {...register("is_teleworking")}
              type="radio"
              name="is_teleworking"
              id="is_teleworking_true"
              value="1"
              className="mt-2 ml-3 mr-3"
            />
            Oui
            <input
              {...register("is_teleworking")}
              type="radio"
              name="is_teleworking"
              id="is_teleworking_false"
              value="0"
              className="mt-2 ml-6 mr-3"
              defaultChecked
            />
            Non
          </article>
        </label>
      </section>

      <section className="mb-6">
        <label className="block text-sm text-white font-semibold">
          Nature du contrat :
          <select
            {...register("contract_type", { required: "Le champ est requis" })}
            className="mt-2 p-2 block w-full rounded-md text-black border-gray-300"
          >
            <option value="">Sélectionner un type</option>
            <option value="CDI">CDI</option>
            <option value="CDD">CDD</option>
            <option value="Alternance">Alternance</option>
          </select>
          {typeof errors.contract_type?.message === "string" && (
            <span className="text-red-300">{errors.contract_type.message}</span>
          )}
        </label>
      </section>

      <section className="mb-6">
        <label
          htmlFor="is_opened_to_disabled"
          className="block text-sm  text-white font-semibold"
        >
          Le travail est-t'il accessible aux personnes en situation de handicap
          ?
          <article>
            <input
              {...register("is_opened_to_disabled")}
              type="radio"
              name="is_opened_to_disabled"
              id="is_opened_to_disabled_true"
              value="1"
              className="mt-2 ml-3 mr-3"
            />
            Oui
            <input
              {...register("is_opened_to_disabled")}
              type="radio"
              name="is_opened_to_disabled"
              id="is_opened_to_disabled_false"
              value="0"
              className="mt-2 ml-6 mr-3"
              defaultChecked
            />
            Non
          </article>
        </label>
      </section>

      <button
        type="submit"
        className="px-5 py-4 my-5 rounded btn-submit hover:bg-orange-600"
      >
        Publier l'offre
      </button>
    </form>
  );
}

export default OfferCreation;
