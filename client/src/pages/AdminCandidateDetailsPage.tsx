import { useLoaderData, useNavigate } from "react-router-dom";
import logo from "../assets/images/EXTERNATIC-LOGO-VERTICAL-RVB.png";
import { candidateFields } from "../components/user/CandidateData";
import type { UserFormData } from "../lib/userForm.definitions";

const AdminCandidateDetailsPage = () => {
  const candidate = useLoaderData() as UserFormData;
  const navigate = useNavigate();
  const fields = candidateFields(candidate);

  const renderFields = () => {
    return fields.map((field) => (
      <tr key={field.label}>
        <td className="border border-gray-300 px-4 py-2">{field.label}</td>
        <td className="border border-gray-300 px-4 py-2">{field.value}</td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <img src={logo} alt="Externatic Logo" className="m-6 w-36 h-auto" />
      <h1 className="text-2xl font-bold mb-4">Détails du Candidat</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Champ</th>
            <th className="border border-gray-300 px-4 py-2">Valeur</th>
          </tr>
        </thead>
        <tbody>{renderFields()}</tbody>
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

export default AdminCandidateDetailsPage;
