import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UpdateCompanyAccount from "../components/companies/UpdateCompanyAccount";
import { useCompany } from "../context/CompanyContext";
import type { Company } from "../lib/companies.definition";

function UpdateCompanyAccountPage() {
  const { userId } = useCompany();
  const navigate = useNavigate();

  const handleUploadCompanyInformation = async (data: Company) => {
    const companyData = { ...data, user_id: userId };

    try {
      const updateCompany = await fetch(
        `${import.meta.env.VITE_API_URL}/api/companies/account`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(companyData),
          credentials: "include",
        },
      );
      if (updateCompany.ok) {
        toast.success("Les informations sont bien mise à jour !");
        setTimeout(() => {
          navigate("/account/company");
        }, 3000);
      } else {
        toast.error("Un problème est survenu ! Veuillez réessayer");
      }
    } catch (err) {
      err;
    }
  };

  return (
    <section className=" mt-10 flex justify-center flex-col">
      <article>
        <h1 className=" text-4xl font-bold text-black mt-5 mb-5 justify-center text-center">
          Mes informations (entreprise)
        </h1>

        <UpdateCompanyAccount onSubmit={handleUploadCompanyInformation} />
      </article>
    </section>
  );
}

export default UpdateCompanyAccountPage;
