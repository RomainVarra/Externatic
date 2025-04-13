import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useDebounce } from "use-debounce";
import PartnersCompanies from "../components/companies/PartnersCompanies";
import type { Company } from "../lib/companies.definition";

const PartnersCompaniesPage = () => {
  const companiesArray = useLoaderData() as Company[];
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCompanies = companiesArray.filter((company) => {
    const lowerCaseSearchTerm = debouncedSearchTerm.toLowerCase();
    return (
      company.company_name.toLowerCase().includes(lowerCaseSearchTerm) ||
      company.description.toLowerCase().includes(lowerCaseSearchTerm) ||
      company.sector.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <section className="flex flex-col min-h-screen m-5">
      <input
        type="text"
        placeholder="Rechercher une entreprise..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border-primary-color p-2 mb-4 rounded outline-none"
      />
      <h1 className="text-2xl font-extrabold text-center mb-4">
        Entreprises Partenaires
      </h1>
      <PartnersCompanies companies={filteredCompanies} />
    </section>
  );
};

export default PartnersCompaniesPage;
