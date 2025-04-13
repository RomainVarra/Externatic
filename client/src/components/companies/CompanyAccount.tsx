import { useEffect, useState } from "react";
import { useCompany } from "../../context/CompanyContext";
import type { Company } from "../../lib/companies.definition";
import type { UserFormData } from "../../lib/userForm.definitions";

function UserAccount() {
  const [userAccount, setUserAccount] = useState<UserFormData | null>(null);

  const [companyAccount, setCompanyAccount] = useState<Company | null>(null);

  const { userId } = useCompany();

  useEffect(() => {
    if (userId) {
      fetch(`${import.meta.env.VITE_API_URL}/api/user/${userId}`)
        .then((response) => response.json())
        .then((data) => setUserAccount(data))
        .catch((error) => console.error(error));
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetch(`${import.meta.env.VITE_API_URL}/api/companies/account/${userId}`)
        .then((response) => response.json())
        .then((data) => setCompanyAccount(data))
        .catch((error) => console.error(error));
    }
  }, [userId]);

  return (
    <div className="flex justify-center items-center m-2">
      <section className="p-5 w-full max-w-sm md:max-w-md lg:max-w-lg bg-white border border-primary rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h2 className="block text-2xl text-primary font-semibold my-4 text-center pb-4">
          Mon profil
        </h2>
        <article className=" text-xl flex flex-wrap justify-center border-b border-gray-400 py-2 bg-gray-50">
          <p className="whitespace-nowrap">{userAccount?.firstname}</p>
          <p className="whitespace-nowrap ml-2">{userAccount?.lastname}</p>
        </article>

        <h2 className="mb-1 text-xl text-primary font-semibold">
          Mes coordonnées
        </h2>

        <article className="flex flex-col border-b border-gray-400 bg-gray-50 p-2 text-sm sm:text-base">
          <p> Email: {userAccount?.email}</p>
          <p> Tel : {userAccount?.tel}</p>
          <p> Adresse : {userAccount?.address}</p>
          <span> Code postal : {userAccount?.postal_code}</span>
          <span> Ville : {userAccount?.city}</span>
        </article>

        <h2 className="block text-xl text-primary font-semibold my-2">
          Mon entreprise
        </h2>

        <article className="flex flex-col bg-gray-50 p-2 text-sm sm:text-base">
          <p className="flex flex-wrap text-wrap mb-4">
            Nom de l'entreprise : {companyAccount?.company_name}
          </p>
          <p className="flex flex-wrap text-wrap mb-4">
            Descritpion : {companyAccount?.description}
          </p>
          <p className="flex flex-wrap text-wrap mb-4">
            Nombre d'employés : {companyAccount?.employee_number}
          </p>
          <p className="flex flex-wrap text-wrap mb-4">
            Secteur d'activité : {companyAccount?.sector}
          </p>
          <a
            href={companyAccount?.website_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Lien vers le site
          </a>
        </article>
      </section>
    </div>
  );
}
export default UserAccount;
