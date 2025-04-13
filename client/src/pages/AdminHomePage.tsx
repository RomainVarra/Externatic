import { Link } from "react-router-dom";
import logo from "../assets/images/EXTERNATIC-LOGO-ORIGINAL-RVB.png";

const AdminHomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={logo} alt="Externatic Logo" className="m-6" />
      <h1 className="text-3xl text-center font-bold mb-6">
        Bienvenue dans l'Espace Administrateur
      </h1>

      <h2 className="text-xl font-bold mb-4">ESPACE ENTREPRISE</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4">
        <Link
          to="/admin/companies-list"
          className="bg-blue-500 text-white py-10 px-4 rounded-lg text-center text-2xl"
        >
          Liste des entreprises
        </Link>
        <Link
          to="/admin/offers-by-company"
          className="bg-blue-500 text-white py-10 px-4 rounded-lg text-center text-2xl"
        >
          Offres par entreprise
        </Link>
        <Link
          to="/admin/modify-offer"
          className="bg-blue-500 text-white py-10 px-4 rounded-lg text-center text-2xl"
        >
          Modifier offre
        </Link>
      </div>

      <h2 className="text-xl font-bold mb-4 mt-6">ESPACE CANDIDAT</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4">
        <Link
          to="/admin/candidates"
          className="bg-blue-500 text-white py-10 px-4 rounded-lg text-center text-2xl"
        >
          Liste des candidats
        </Link>
        <Link
          to="/admin/latest-profiles"
          className="bg-blue-500 text-white py-10 px-4 rounded-lg text-center text-2xl"
        >
          Derniers profils mis à jour
        </Link>
      </div>
    </div>
  );
};

export default AdminHomePage;
