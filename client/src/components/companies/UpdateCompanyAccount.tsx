import { useForm } from "react-hook-form";
import type { Company } from "../../lib/companies.definition";

type CompanyFormType = {
  onSubmit: (data: Company) => void;
};

function UpdateCompanyAccount({ onSubmit }: CompanyFormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Company>();

  return (
    <section className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-8 w-full max-w-lg p-8 rounded-lg shadow-lg bg-primary mx-12 "
      >
        <section className="mb-6">
          <label
            htmlFor="company_name"
            className="block text-sm  text-white font-semibold"
          >
            Nom de l'entreprise :
            <input
              placeholder="Decathlon"
              {...register("company_name", {
                required: "Le champ est requis",
                minLength: {
                  value: 2,
                  message: "Le champ doit au moins contenir 2 caractères",
                },
                maxLength: {
                  value: 30,
                  message:
                    "Le champ ne peut pas contenir plus de 30 caractères",
                },
              })}
              type="text"
              id="company_name"
              className="mt-2 p-2 block w-full rounded-md  text-black border-gray-300 h-7"
            />
            {typeof errors.company_name?.message === "string" && (
              <span className="text-red-300">
                {errors.company_name.message}
              </span>
            )}
          </label>
        </section>
        <section className="mt-6">
          <label
            htmlFor="description"
            className="block text-sm  text-white font-semibold"
          >
            Description :
            <input
              placeholder="Décathlon conçoit, fabrique et vend des produits sportifs pour une large gamme de disciplines. Ils proposent aussi bien des équipements pour les sportifs amateurs que professionnels, couvrant des activités variées telles que le football, le running, la natation, le vélo, le fitness, le camping, et bien d'autres."
              {...register("description", {
                required: "Le champ est requis",
                minLength: {
                  value: 2,
                  message: "Le champ doit au moins contenir 2 caractères",
                },
                maxLength: {
                  value: 500,
                  message:
                    "Le champ ne peut pas contenir plus de 500 caractères",
                },
              })}
              type="text"
              id="description"
              className="mt-2 p-2 block w-full rounded-md  text-black border-gray-300 h-7"
            />
            {typeof errors.description?.message === "string" && (
              <span className="text-red-300">{errors.description.message}</span>
            )}
          </label>
        </section>

        <section className="mt-6">
          <label
            htmlFor="sector"
            className="block text-sm  text-white font-semibold"
          >
            Secteur d'activité :
            <input
              placeholder="Commerce de détail d'articles de sport"
              {...register("sector", {
                required: "Le champ est requis",
                minLength: {
                  value: 2,
                  message: "Le champ doit au moins contenir 2 caractères",
                },
                maxLength: {
                  value: 30,
                  message:
                    "Le champ ne peut pas contenir plus de 30 caractères",
                },
              })}
              type="text"
              id="sector"
              className="mt-2 p-2 block w-full rounded-md  text-black border-gray-300 h-7"
            />
            {typeof errors.sector?.message === "string" && (
              <span className="text-red-300">{errors.sector.message}</span>
            )}
          </label>
        </section>
        <section className="mb-6 mt-6">
          <label
            htmlFor="employee_number"
            className="block text-sm  text-white font-semibold"
          >
            Nombre d'employés (facultatif) :
            <input
              placeholder="120 000"
              {...register("employee_number", {
                pattern: {
                  value: /^[0-9]{1,6}$/,
                  message:
                    "Vous ne pouvez pas avoir plus d'un million d'employés",
                },
              })}
              type="text"
              id="employee_number"
              className="mt-2 p-2 block w-full rounded-md  text-black border-gray-300 h-7"
            />
            {typeof errors.employee_number?.message === "string" && (
              <span className="text-red-300">
                {errors.employee_number.message}
              </span>
            )}
          </label>
        </section>
        <section className="mb-6">
          <label
            htmlFor="website_link"
            className="block text-sm  text-white font-semibold"
          >
            Lien vers le site de l'entreprise (facultatif) :
            <input
              placeholder="https://www.decathlon.com"
              {...register("website_link", {
                pattern: {
                  value: /^https?:\/\/.+/,
                  message: "L'URL doit commencer par 'http://' ou 'https://'",
                },
                minLength: {
                  value: 10,
                  message: "Le champ doit au moins contenir 10 caractères",
                },
                maxLength: {
                  value: 30,
                  message:
                    "Le champ ne peut pas contenir plus de 30 caractères",
                },
              })}
              type="text"
              id="website_link"
              className="mt-2 p-2 block w-full rounded-md  text-black border-gray-300 h-7"
            />
            {typeof errors.website_link?.message === "string" && (
              <span className="text-red-300">
                {errors.website_link.message}
              </span>
            )}
          </label>
        </section>
        <button
          type="submit"
          className="px-4 py-2 rounded mt-5 btn-submit hover:bg-orange-600"
        >
          Mettre à jour mon profil
        </button>
      </form>
    </section>
  );
}

export default UpdateCompanyAccount;
