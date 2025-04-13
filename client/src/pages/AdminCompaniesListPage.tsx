import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import logo from "../assets/images/EXTERNATIC-LOGO-VERTICAL-RVB.png";
import UserFormRegister from "../components/user/UserFormRegister";
import type { UserFormData } from "../lib/userForm.definitions";

const AdminCompaniesListPage = () => {
  const initialCompanies = useLoaderData() as UserFormData[];
  const [companies, setCompanies] = useState<UserFormData[]>(initialCompanies);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleAnonymizeCompany = async (companyId: number) => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/admin/companies/${companyId}`;

    const response = await fetch(apiUrl, {
      method: "PUT",
      credentials: "include",
    });

    if (response.ok) {
      const anonymizedCompany = await response.json();
      setCompanies(
        companies.map((company) =>
          company.id === companyId ? anonymizedCompany : company,
        ),
      );
    } else {
      const errorDetail = await response.text();
      console.error(
        "Erreur lors de l'anonymisation du candidat :",
        errorDetail,
      );
    }
  };

  const handleAddCompany = async (data: UserFormData) => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/admin/companies`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (response.ok) {
      const addedCompany = await response.json();
      setCompanies([...companies, { ...data, id: addedCompany.insertId }]);
      setShowForm(false);
    } else {
      console.error("Erreur lors de l'ajout de l'entreprise", response);
    }
  };

  const renderCompaniesRows = () => {
    return companies.map((company) => (
      <tr key={company.id}>
        <td className="border border-gray-300 px-4 py-2">{company.id}</td>
        <td className="border border-gray-300 px-4 py-2">
          {company.firstname}
        </td>
        <td className="border border-gray-300 px-4 py-2">{company.lastname}</td>
        <td className="border border-gray-300 px-4 py-2">
          <button
            type="button"
            onClick={() => handleAnonymizeCompany(company.id)}
            className="bg-blue-500 text-white py-1 px-2 rounded-lg text-center text-2xl hover:bg-red-700 transition duration-200 ease-in-out"
          >
            Supprimer
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <img src={logo} alt="Externatic Logo" className="m-6 w-36 h-auto" />
      <h1 className="text-2xl font-bold mb-4">Liste des Entreprises</h1>

      <table className="min-w-full border-collapse border border-gray-200 my-4">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">
              Nom de l'Entreprise
            </th>
            <th className="border border-gray-300 px-4 py-2">Secteur</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>{renderCompaniesRows()}</tbody>
      </table>
      <div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="bg-gray-500 text-white py-2 px-4 rounded my-4"
        >
          Retour
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          {showForm ? "Annuler" : "Ajouter une Entreprise"}
        </button>
      </div>
      {showForm && <UserFormRegister onSubmit={handleAddCompany} />}
    </div>
  );
};

export default AdminCompaniesListPage;
