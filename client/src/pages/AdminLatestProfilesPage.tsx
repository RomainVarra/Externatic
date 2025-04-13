import { useLoaderData, useNavigate } from "react-router-dom";
import logo from "../assets/images/EXTERNATIC-LOGO-VERTICAL-RVB.png";
import type { UserFormData } from "../lib/userForm.definitions";

const AdminLatestProfilesPage = () => {
  const profiles = useLoaderData() as UserFormData[];
  const navigate = useNavigate();

  const renderProfiles = () => {
    return profiles.map((profile) => (
      <tr key={profile.id}>
        <td className="border border-gray-300 px-4 py-2">{profile.id}</td>
        <td className="border border-gray-300 px-4 py-2">
          {profile.firstname}
        </td>
        <td className="border border-gray-300 px-4 py-2">{profile.lastname}</td>
        <td className="border border-gray-300 px-4 py-2">
          {profile.updatedAt
            ? new Date(profile.updatedAt).toLocaleDateString()
            : "N/A"}
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <img src={logo} alt="Externatic Logo" className="m-6 w-36 h-auto" />
      <h1 className="text-2xl font-bold mb-4">Derniers Profils Mis à Jour</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Prénom</th>
            <th className="border border-gray-300 px-4 py-2">Nom</th>
            <th className="border border-gray-300 px-4 py-2">
              Date de Modification
            </th>
          </tr>
        </thead>
        <tbody>{renderProfiles()}</tbody>
      </table>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-lg"
      >
        Retour
      </button>
    </div>
  );
};

export default AdminLatestProfilesPage;
