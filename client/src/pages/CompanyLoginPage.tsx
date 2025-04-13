import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Login from "../components/user/Login";
import { useCompany } from "../context/CompanyContext";
import type { loginCompanyType } from "../lib/userForm.definitions";

function CompanyLoginPage() {
  const navigate = useNavigate();
  const { setUserId } = useCompany();

  const handleCompanyLogin = async (loginDataCompany: loginCompanyType) => {
    try {
      const loginCompany = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login/company`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginDataCompany),
          credentials: "include",
        },
      );
      if (loginCompany.ok) {
        const data = await loginCompany.json();
        setUserId(data.userId);
        toast.success("Vous êtes bien connecté !");
        navigate("/account/company");
      } else {
        toast.error(
          "Un problème est survenu lors de votre connexion ! Veuillez réessayer",
        );
      }
    } catch (err) {
      err;
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen ">
      <section className="py-2 m-10 rounded-md mt-20 bg-primary w-10/12 ">
        <article className="max-w-md mx-auto px-4">
          <div className="text-center">
            <FaUsers
              style={{ height: "120px", width: "120px" }}
              className="text-white mx-auto"
            />
            <h2 className="text-3xl font-extrabold text-white mt-4 mb-5">
              Connectez-vous
            </h2>
            <p className="text-3xl font-extrabold text-white mt-4 mb-5">
              (compte entreprise)
            </p>
            <p className="mt-2 font-bold text-lg text-white">S'identifier</p>
          </div>

          <Login onSubmit={handleCompanyLogin} />
        </article>

        <article className="flex flex-col justify-center items-center ">
          <p className="mt-6 text-white text-center">
            Pas encore inscrit chez nous ?
          </p>
          <button
            type="button"
            onClick={() => navigate("/signup/company")}
            className="mt-4 mb-8 bg-black hover:bg-gray-600 rounded-md text-white font-bold py-2 px-4 w-48"
          >
            Créer un compte
          </button>
        </article>
      </section>
    </section>
  );
}

export default CompanyLoginPage;
