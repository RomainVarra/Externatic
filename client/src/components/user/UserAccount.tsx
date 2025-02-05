import { useEffect, useState } from "react";
import userIcone from "../../assets/images/UserIcone.png";
import type {
  CandidateFormData,
  UserFormData,
} from "../../lib/userForm.definitions";
import { useAuth } from "../../context/AuthContext";

function UserAccount() {
  const [userAccount, setUserAccount] = useState<UserFormData | null>(null);

  const [candidateAccount, setCandidateAccount] =
    useState<CandidateFormData | null>(null);

  const { userId } = useAuth();

  console.log(userId);

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
      fetch(`${import.meta.env.VITE_API_URL}/api/candidate/account/${userId}`)
        .then((response) => response.json())
        .then((data) => setCandidateAccount(data))
        .catch((error) => console.error(error));
    }
  }, [userId]);

  return (
    <section className="py-2 rounded-md mt-10 bg-primary w-full flex flex-col justify-center items-center ">
      <h2 className="block text-2xl  text-white font-semibold my-4 text-center">
        Mon profil
      </h2>
      <article className="flex flex-col items-center">
        <img
          className="w-60 items-center rounded-full"
          src={
            candidateAccount?.photo
              ? `${import.meta.env.VITE_API_URL}/uploads/${candidateAccount.photo}`
              : userIcone
          }
          alt="Représentation photographique du candidat"
        />{" "}
      </article>
      <article className="my-4 block text-base font-medium">
        <p> Prénom: {userAccount?.firstname}</p>
        <p> Nom : {userAccount?.lastname}</p>
        <h2 className="block text-xl  text-white font-semibold my-4 underline">
          Mes coordonnées
        </h2>
        <p> Email: {userAccount?.email}</p>
        <p> Tel : {userAccount?.tel}</p>
        <p> Adresse : {userAccount?.address}</p>
        <span> Ville : {userAccount?.city}</span>
        <span> Code postal : {userAccount?.postal_code}</span>
      </article>
      <article className="my-4 block text-base font-medium">
        <h2 className="block text-xl  text-white font-semibold my-4 underline">
          Mes documents
        </h2>
        <span>
          Reconnaissance travailleur handicapé :{" "}
          {candidateAccount?.is_disabled ? "Oui" : "Non"}
        </span>
        <span className="mt-4">
          {candidateAccount?.cv && (
            <a
              href={`${import.meta.env.VITE_API_URL}/uploads/${candidateAccount.cv}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white underline"
            >
              📄 Visualiser mon CV
            </a>
          )}
        </span>
      </article>
    </section>
  );
}
export default UserAccount;
