import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userIcone from "../../assets/images/UserIcone.png";
import { useAuth } from "../../context/AuthContext";
import type {
  CandidateFormData,
  UserFormData,
} from "../../lib/userForm.definitions";

function AccountLink() {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const handleAccountClick = () => navigate("/account/candidate");

  const [userAccount, setUserAccount] = useState<UserFormData | null>(null);
  const [candidateAccount, setCandidateAccount] =
    useState<CandidateFormData | null>(null);

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
    <div className="flex justify-end">
      <section>
        {userId ? (
          <section className=" w-64 flex justify-between mt-2 mr-16 rounded px-2 py-2 border-2 border-primary">
            <img
              className="w-20 h-20 object-cover items-center rounded-full"
              src={
                candidateAccount?.photo
                  ? `${import.meta.env.VITE_API_URL}/uploads/${candidateAccount.photo}`
                  : userIcone
              }
              alt="photographie du candidat"
            />
            <article>
              <p className=" my-6 text-primary">
                {" "}
                Bienvenue {userAccount?.firstname}
              </p>
              <button
                type="button"
                onClick={handleAccountClick}
                className="px-2 py-2 rounded btn-submit hover:bg-orange-600"
              >
                {" "}
                Mon compte
              </button>
            </article>
          </section>
        ) : null}
      </section>
    </div>
  );
}

export default AccountLink;
