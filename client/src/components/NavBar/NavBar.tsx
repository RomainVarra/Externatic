import { SquareMenu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/EXTERNATIC-LOGO-ORIGINAL-RVB.png";
import NavBarBurger from "./NavBar.burger";
import { navigationLinks } from "./dataNavBar";

const NavBar = () => {
  const [isOpenMenu, setIsOpenedMenu] = useState(false);

  const handleIsOpenedMenu = () => {
    setIsOpenedMenu(!isOpenMenu);
  };

  const renderedLinks = navigationLinks.map((link) => (
    <Link
      key={link.href}
      to={link.href}
      className="inline-flex items-center px-1 pt-1 text-gray-900"
    >
      {link.label}
    </Link>
  ));

  const renderedConnexionLinks = (
    <div className="flex flex-row gap-4">
      <Link
        to="/login/candidate"
        className="flex items-center justify-center my-2 px-4 py-2 rounded-md btn-accent hover:bg-gray-800 hover:text-white transition duration-300 text-center"
      >
        Connexion Candidat
      </Link>
      <Link
        to="/login/company"
        className="flex items-center justify-center my-2 px-4 py-2 rounded-md btn-accent hover:bg-gray-800 hover:text-white transition duration-300 text-center"
      >
        Connexion Entreprise
      </Link>
    </div>
  );

  return (
    <nav className="bg-white shadow-lg w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="logo-externatic" className="h-10 w-auto" />
            </Link>
          </div>

          <div className="flex md:hidden">
            <button className="mr-6" type="button" onClick={handleIsOpenedMenu}>
              <SquareMenu />
            </button>
          </div>

          <div className="hidden md:flex md:ml-6 md:space-x-8">
            {renderedLinks}
            {renderedConnexionLinks}
          </div>
        </div>

        <NavBarBurger
          isOpenMenu={isOpenMenu}
          handleIsOpenedMenu={handleIsOpenedMenu}
          links={navigationLinks}
        />
      </div>
    </nav>
  );
};

export default NavBar;
