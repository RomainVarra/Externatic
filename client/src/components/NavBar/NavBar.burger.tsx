import { Link } from "react-router-dom";
import type { NavbarBurgerProps } from "../../lib/navbar.definition";

const NavBarBurger = ({
  isOpenMenu,
  handleIsOpenedMenu,
  links,
}: NavbarBurgerProps) => {
  const renderedLinks = links.map((link) => (
    <li className="list-none" key={link.href}>
      <Link to={link.href} onClick={handleIsOpenedMenu}>
        {link.label}
      </Link>
    </li>
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
    <nav>
      {isOpenMenu && (
        <section>
          <ul className="flex flex-col gap-2 mr-2">{renderedLinks}</ul>
          {renderedConnexionLinks}
        </section>
      )}
    </nav>
  );
};

export default NavBarBurger;
