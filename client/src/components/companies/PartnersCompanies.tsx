import type { Company } from "../../lib/companies.definition";
import CompanyCard from "./CompanyCard";

type PartnersCompaniesProps = {
  companies: Company[];
};

const PartnersCompanies = ({ companies }: PartnersCompaniesProps) => {
  if (!companies || companies.length === 0) {
    return <div>Aucune entreprise trouvée.</div>;
  }

  const renderedCompanies = companies.map((company) => (
    <CompanyCard key={company.id} company={company} />
  ));

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {renderedCompanies}
    </section>
  );
};

export default PartnersCompanies;
