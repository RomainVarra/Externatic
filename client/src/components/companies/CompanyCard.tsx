import { Link } from "react-router-dom";
import CompanyImage from "../../assets/images/CompanyImage.jpg";
import type { Company } from "../../lib/companies.definition";

type CompanyCardProps = {
  company: Company;
};

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <section className="border rounded shadow border-primary-color overflow-hidden">
      <img
        src={CompanyImage}
        alt={company.company_name}
        className="w-full h-40 object-cover rounded-t"
      />
      <Link to={`/offers/${company.id}`} className="block p-4">
        <h2 className="font-bold text-xl text-center mb-2">
          {company.company_name}
        </h2>
        <p>{company.description}</p>
        <p>
          <strong>Secteur:</strong> {company.sector}
        </p>
        <p>
          <strong>Nombre d'employés:</strong> {company.employee_number}
        </p>
      </Link>
      <a
        href={company.website_link}
        target="_blank"
        rel="noreferrer"
        className="link-primary-color p-4"
      >
        Visiter le site
      </a>
    </section>
  );
};

export default CompanyCard;
