import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/images/EXTERNATIC-LOGO-ORIGINAL-RVB.png";
import Login from "../components/user/Login";
import type { loginCompanyType } from "../lib/userForm.definitions";

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const handleAdminLogin = async (loginData: loginCompanyType) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login/admin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        },
      );

      if (response.ok) {
        toast.success("Vous êtes bien connecté !");
        navigate("/admin/home");
      } else {
        toast.error(
          "Un problème est survenu lors de votre connexion ! Veuillez réessayer",
        );
      }
    } catch (err) {
      err;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={logo} alt="Externatic Logo" className="mb-4" />
      <h1 className="text-3xl font-bold mb-6">Espace Administrateur</h1>
      <Login onSubmit={handleAdminLogin} />
    </div>
  );
};

export default AdminLoginPage;
