import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import AccountCandidatePages from "./pages/AccountPages/AccountCandidatePages";
import HomePage from "./pages/HomePage";
import LoginCandidatePage from "./pages/LoginPages/CandidateLoginPage";
import CompanyLoginPage from "./pages/LoginPages/CompanyLoginPage";
import OffersPage from "./pages/OffersPage";
import UserCandidateForm from "./pages/UserFormPages/UserCandidateFormPage";
import UserCompanyForm from "./pages/UserFormPages/UserCompanyFormPage";

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
        path: "/OffersPage",
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
        path: "/login/company",
        element: <CompanyLoginPage />,
      },
      {
        path: "/login/candidate",
        element: <LoginCandidatePage />,
      },
      {
        path: "/account/candidate/:id",
        element: <AccountCandidatePages />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
