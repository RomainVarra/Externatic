import { useNavigate } from "react-router-dom";
import mainImage from "../assets/images/Accueil.png";

const SignUp = () => {
  const navigate = useNavigate();
  const handleCandidateSignUpClick = () => navigate("/signup/candidate");
  const handleCompanySignUpClick = () => navigate("/signup/company");

  return (
    <section id="connexion">
      <div className="ml-5 mt-5 mb-0">
        <a
          href="https://www.externatic.fr/entreprise/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-20 mb-0 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800"
        >
          Externatic.fr
        </a>
      </div>
      <div className="pt-0 m-0">
        <div className="flex flex-col lg:flex-row lg:max-w-15xl mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:px-1">
          <div className="mt-10 lg:mt-0 lg:w-7/12">
            <img
              className="w-full h-auto lg:max-w-[95%] lg:h-[600px]"
              src={mainImage}
              alt="Externatic background"
            />
          </div>
          <div className="lg:w-5/12 lg:pr-5">
            <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
              Entreprises : Faisons équipe pour recruter
            </h1>
            <p className="mt-6 text-xl text-black max-w-3xl">
              Vous souhaitez créer ou renforcer votre équipe ?
            </p>
            <p className="mt-6 text-xl text-black max-w-3xl">
              Externatic est là pour tisser les connexions entre vous et le
              candidat idéal. En tant qu’expert du recrutement informatique et
              acteur de l’écosystème tech, nous nous engageons à trouver les
              profils qui correspondent à vos besoins.
            </p>
            <p className="mt-6 text-xl text-black max-w-3xl font-semibold">
              Certains cabinets de recrutement se limitent au CV, pas nous.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 space-x-4 lg:space-x-40">
        <button
          type="button"
          className="flex flex-col items-center px-6 py-2 text-xl font-medium rounded-md btn-secondary sm:px-20 sm:py-4"
          onClick={handleCandidateSignUpClick}
        >
          <span>Candidat</span>
          <span>Inscrivez-vous</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-center px-6 py-2 text-xl font-medium rounded-md btn-secondary sm:px-20 sm:py-4"
          onClick={handleCompanySignUpClick}
        >
          <span>Entreprise</span>
          <span>Inscrivez-vous</span>
        </button>
      </div>
    </section>
  );
};

export default SignUp;
