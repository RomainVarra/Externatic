import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import OfferByCandidat from "./components/Offers/OfferByCandidat";
import AdminLoginPage from "./pages/AdminLoginPage";
import LoginCandidatePage from "./pages/CandidateLoginPage";
import CompanyLoginPage from "./pages/CompanyLoginPage";
import CompanyOffersPage from "./pages/CompanyOffersPage";
import HomePage from "./pages/HomePage";
import OffersPage from "./pages/OffersPage";
import PartnersCompaniesPage from "./pages/PartnersCompaniesPage";
import UserCandidateForm from "./pages/UserCandidateFormPage";
import UserCompanyForm from "./pages/UserCompanyFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/offers`,
          );
          if (!response.ok) {
            throw new Response("Erreur lors de la récupération des offres", {
              status: response.status,
            });
          }
          return response.json();
        },
      },
      {
        path: "/Offers",
        element: <OffersPage />,
      },
      {
        path: "/signup/candidate",
        element: <UserCandidateForm />,
      },
      {
        path: "/signup/company",
        element: <UserCompanyForm />,
      },
      {
        path: "/partners-companies",
        element: <PartnersCompaniesPage />,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/companies`,
          );
          if (!response.ok) {
            throw new Response(
              "Erreur lors de la récupération des entreprises",
              {
                status: response.status,
              },
            );
          }
          return response.json();
        },
      },
      {
        path: "/login/company",
        element: <CompanyLoginPage />,
      },
      {
        path: "/login/candidate",
        element: <LoginCandidatePage />,
      },
      {
        path: "/offers/:companyId",
        element: <CompanyOffersPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/offersByCompany?companyId=${params.companyId}`,
          );
          if (!response.ok) {
            throw new Response(
              "Erreur lors de la récupération des offres pour cette entreprise",
              {
                status: response.status,
              },
            );
          }
          return response.json();
        },
      },

      {
        path: "/offer/:offerId",
        element: <OfferByCandidat />,
        loader: async ({ params }) => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/offerByCandidate?offerId=${params.offerId}`,
          );
          if (!response.ok) {
            throw new Response("Erreur lors de la récupération de l'offre", {
              status: response.status,
            });
          }
          return response.json();
        },
      },
    ],
  },
  {
    path: "/login/admin",
    element: <AdminLoginPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
