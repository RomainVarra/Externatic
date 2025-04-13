import { useForm } from "react-hook-form";
import type { CandidateFormData } from "../../lib/userForm.definitions";

type CandidateFormType = {
  onSubmit: (data: CandidateFormData) => void;
};

function UpdateCandidateAccount({ onSubmit }: CandidateFormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CandidateFormData>();

  return (
    <section className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-8 w-full max-w-lg p-8 rounded-lg shadow-lg bg-primary mx-12 "
      >
        <label
          htmlFor="photo"
          className="block text-sm  text-white font-semibold "
        >
          Photo de profil :
          <input
            type="file"
            id="photo"
            accept=".jpg,.png,.jpeg"
            className="mt-2 block cursor-pointer mb-6"
            {...register("photo")}
          />
        </label>
        {errors.photo && (
          <span className="text-red-300">{errors.photo.message}</span>
        )}

        <label
          htmlFor="cv"
          className="block text-sm  text-white font-semibold "
        >
          CV (PDF) :
          <input
            type="file"
            id="cv"
            accept=".pdf"
            className="mt-2 block cursor-pointer mb-6"
            {...register("cv")}
          />
        </label>
        {errors.cv && <span className="text-red-300">{errors.cv.message}</span>}

        <section className="mt-6 mb-6">
          <p className="block text-sm  text-white font-semibold">
            Reconnaissance travailleur handicapé ?
          </p>
          <label htmlFor="is_disabled_true">
            <input
              type="radio"
              id="is_disabled_true"
              value="1"
              className="mt-2 ml-3 mr-3"
              {...register("is_disabled", { required: "Ce champ est requis." })}
            />{" "}
            Oui
          </label>

          <label htmlFor="is_disabled_false">
            <input
              type="radio"
              id="is_disabled_false"
              value="0"
              className="mt-2 ml-3 mr-3"
              defaultChecked
              {...register("is_disabled")}
            />{" "}
            Non
          </label>
        </section>
        {errors.is_disabled && (
          <span className="text-red-300">{errors.is_disabled.message}</span>
        )}

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

export default UpdateCandidateAccount;
