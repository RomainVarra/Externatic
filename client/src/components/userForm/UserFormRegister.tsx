import { useForm } from "react-hook-form";

import type { UserFormData } from "../../lib/userFormTypes";

type UserFormRegisterType = {
  onSubmit: (data: UserFormData) => void;
};

function UserFormRegister({ onSubmit }: UserFormRegisterType) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserFormData>();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <section className="flex justify-center gap-6">
          <label htmlFor="lastName">
            Nom :
            <input
              placeholder="Martin"
              {...register("lastname", {
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
              id="lastName"
              className="rounded ml-1"
            />
            {typeof errors.lastname?.message === "string" && (
              <span className="text-red-500">{errors.lastname.message}</span>
            )}
          </label>
          <label htmlFor="firstName">
            Prénom :
            <input
              placeholder="Pierre"
              {...register("firstname", {
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
              id="firstName"
              className="rounded ml-1"
            />
            {typeof errors.firstname?.message === "string" && (
              <span className="text-red-500">{errors.firstname.message}</span>
            )}
          </label>
        </section>
        <section>
          <label htmlFor="email">
            Adresse Mail :
            <input
              placeholder="pierre.martin@gmail.com"
              {...register("email", {
                required: "Le champ est requis",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  message: "Adresse email invalide",
                },
              })}
              className="w-full py-2 rounded-lg"
              type="email"
              id="email"
            />
            {typeof errors.email?.message === "string" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>
        </section>
        <section>
          <label htmlFor="address">
            Adresse (N°, rue) :
            <input
              placeholder="3 rue de la fleur"
              {...register("address", {
                required: "Le champ est requis",
                maxLength: {
                  value: 100,
                  message:
                    "Le champ ne peut pas contenir plus de 100 caractères",
                },
              })}
              type="text"
              id="address"
              className="rounded w-80 h-20 ml-1"
            />
            {typeof errors.address?.message === "string" && (
              <span className="text-red-500">{errors.address.message}</span>
            )}
          </label>
        </section>
        <section className="flex justify-center gap-6">
          <label htmlFor="town">
            Ville :
            <input
              placeholder="Paris"
              {...register("city", {
                required: "Le champ est requis",
                maxLength: {
                  value: 100,
                  message:
                    "Le champ ne peut pas contenir plus de 100 caractères",
                },
              })}
              type="text"
              id="town"
              className="rounded ml-1"
            />
            {typeof errors.city?.message === "string" && (
              <span className="text-red-500">{errors.city.message}</span>
            )}
          </label>
          <label htmlFor="postCode">
            Code Postal :
            <input
              placeholder="75000"
              {...register("postal_code", {
                required: "Le champ est requis",
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: "Code postal incorrect",
                },
              })}
              type="text"
              id="postCode"
              className="rounded ml-1"
            />
            {typeof errors.postal_code?.message === "string" && (
              <span className="text-red-500">{errors.postal_code.message}</span>
            )}
          </label>
        </section>
        <section className="flex justify-around items-center">
          <label htmlFor="phoneNumber">
            Téléphone :
            <input
              placeholder="0600000000"
              {...register("tel", {
                required: "Le champ est requis",
                pattern: {
                  value: /^[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}$/,
                  message: "Numéro de téléphone invalide",
                },
              })}
              type="tel"
              id="phoneNumber"
              className="rounded w-50 mr-9"
            />
            {typeof errors.tel?.message === "string" && (
              <span className="text-red-500">{errors.tel.message}</span>
            )}
          </label>
        </section>
        {/*
         */}
        <section>
          <label htmlFor="is_active">
            Je souhaite être actif sur le site externatic ?
            <input
              {...register("is_active")}
              type="radio"
              name="is_active"
              id="is_active_true"
              value="1"
            />
            Oui
            <input
              {...register("is_active")}
              type="radio"
              name="is_active"
              id="is_active_false"
              value="0"
              defaultChecked
            />
            Non
          </label>
        </section>
        <section>
          <label htmlFor="is_role">
            Je souhaite rester connecté ?
            <input
              className="ml-4 gap-4"
              {...register("is_role")}
              type="radio"
              name="is_role"
              id="is_role_true"
              value="1"
            />
            Oui
            <input
              {...register("is_role")}
              type="radio"
              name="is_role"
              id="is_role_false"
              value="0"
              defaultChecked
            />
            Non
          </label>
        </section>
        <section>
          <label htmlFor="password">
            Mot de passe :
            <input
              placeholder="••••••••••••"
              {...register("password", {
                required: "Le champ est requis",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s:])[^\s]{12,30}$/,
                  message:
                    "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.",
                },
                minLength: {
                  value: 12,
                  message:
                    "Le mot de passe doit contenir au moins 12 caractères",
                },
                maxLength: {
                  value: 30,
                  message:
                    "Le mot de passe ne peut pas contenir plus de 30 caractères",
                },
              })}
              type="password"
              id="password"
              className="w-full py-2 rounded-lg"
            />
            {typeof errors.password?.message === "string" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </label>
        </section>
        <section>
          <label htmlFor="confirmPassword">
            Confirmez votre mot de passe :
            <input
              placeholder="••••••••••••"
              {...register("confirmPassword", {
                required: "Le champ est requis",
                validate: (value) => {
                  if (watch("password") !== value) {
                    return "Les mots de passe ne correspondent pas";
                  }
                },
              })}
              type="password"
              id="confirmPassword"
              className="w-full py-2 rounded-lg"
            />
            {typeof errors.confirmPassword?.message === "string" && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </label>
        </section>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Envoyer le formulaire
        </button>
      </form>
    </>
  );
}

export default UserFormRegister;
