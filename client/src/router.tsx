import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import AdminCandidateDetailsPage from "./pages/AdminCandidateDetailsPage";
import AdminCandidatesListPage from "./pages/AdminCandidatesListPage";
import AdminCompaniesListPage from "./pages/AdminCompaniesListPage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminLatestProfilesPage from "./pages/AdminLatestProfilesPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminOffersList from "./pages/AdminOffersList";
import CandidateAccountPage from "./pages/CandidateAccountPage";
import LoginCandidatePage from "./pages/CandidateLoginPage";
import CompanyAccountPage from "./pages/CompanyAccountPage";
import CompanyLoginPage from "./pages/CompanyLoginPage";
import CompanyOffersPage from "./pages/CompanyOffersPage";
import DetailsOfferCandidatPage from "./pages/DetailsOfferCandidatPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import OfferCreationPage from "./pages/OfferCreationPage";
import OffersPage from "./pages/OffersPage";
import OffersResearchPage from "./pages/OffersResearchPage";
import PartnersCompaniesPage from "./pages/PartnersCompaniesPage";
import UpdateCandidateAccountPage from "./pages/UpdateCandidateAccountPage";
import UpdateCompanyAccountPage from "./pages/UpdateCompanyAccountPage";
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
        path: "/OffersResearch",
        element: <OffersResearchPage />,
      },
      {
        path: "/OfferCreation",
        element: <OfferCreationPage />,
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
        path: "/account/candidate",
        element: <CandidateAccountPage />,
      },
      {
        path: "/account/candidate/update",
        element: <UpdateCandidateAccountPage />,
      },
      {
        path: "/account/company",
        element: <CompanyAccountPage />,
      },
      {
        path: "/account/company/update",
        element: <UpdateCompanyAccountPage />,
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
        path: "/offer/:id",
        element: <DetailsOfferCandidatPage />,
      },
      {
        path: "/admin/company/:id/offers",
        element: <AdminOffersList />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/login/admin",
    element: <AdminLoginPage />,
  },
  {
    path: "/admin/home",
    element: <AdminHomePage />,
  },
  {
    path: "/admin/companies-list",
    element: <AdminCompaniesListPage />,
    loader: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/companies`,
        {
          credentials: "include",
        },
      );
      if (!response.ok) {
        throw new Response("Erreur lors de la récupération des entreprises", {
          status: response.status,
        });
      }
      return response.json();
    },
  },
  {
    path: "/admin/candidates",
    element: <AdminCandidatesListPage />,
    loader: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/candidates`,
        {
          credentials: "include",
        },
      );
      if (!response.ok) {
        throw new Response("Erreur lors de la récupération des candidats", {
          status: response.status,
        });
      }
      return response.json();
    },
  },
  {
    path: "/admin/latest-profiles",
    element: <AdminLatestProfilesPage />,
    loader: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/latest-profiles`,
        {
          credentials: "include",
        },
      );
      if (!response.ok) {
        throw new Response("Erreur lors de la récupération des candidats", {
          status: response.status,
        });
      }
      return response.json();
    },
  },
  {
    path: "/admin/candidates/:id",
    element: <AdminCandidateDetailsPage />,
    loader: async ({ params }) => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/candidates/${params.id}`,
        {
          credentials: "include",
        },
      );
      if (!response.ok) {
        throw new Response(
          "Erreur lors de la récupération des détails du candidat",
          {
            status: response.status,
          },
        );
      }
      return response.json();
    },
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
