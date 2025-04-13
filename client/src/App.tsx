import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import AccountLink from "./components/NavBar/AccountLink";
import NavBar from "./components/NavBar/NavBar";
import AuthProvider from "./context/AuthContext";
import CompanyProvider from "./context/CompanyContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CompanyProvider>
          <NavBar />
          <AccountLink />
          <main>
            <Outlet />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition={Bounce}
            />
          </main>
          <Footer />
        </CompanyProvider>
      </AuthProvider>
    </>
  );
}
export default App;
