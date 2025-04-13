import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerImage from "../../assets/images/Footer.png";
import logo from "../../assets/images/externatic_logo.png";
import { navigationLinks, socialLinks } from "../Footer/dataFooter";

const Footer = () => {
  const renderSocialLinks = () => {
    return socialLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-white"
      >
        <FontAwesomeIcon icon={link.icon} className="h-6 w-6" />
      </a>
    ));
  };

  const renderNavigationLinks = () => {
    return navigationLinks.map((link) => (
      <li key={link.label}>
        <a
          href={link.href}
          className="text-base text-gray-300 hover:text-white"
        >
          {link.label}
        </a>
      </li>
    ));
  };

  return (
    <footer>
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-1 section-dark">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex justify-center md:justify-start">
            <img
              className="w-[100%] mx-auto py-2 px-1 sm:p-0 sm:mt-0 sm:mb-0 lg:px-1"
              src={footerImage}
              alt="signature externatic"
            />
          </div>

          <div className="flex flex-col items-center">
            <img
              className="max-w-[100%] mx-auto py-12 px-1 sm:p-0 sm:mt-0 lg:px-1"
              src={logo}
              alt="logo externatic"
            />
            <p className="mt-4 mx-auto text-gray-400 text-sm">02 85 52 26 33</p>

            <div className="mt-4 flex space-x-6 justify-center">
              {renderSocialLinks()}
            </div>
          </div>

          <div className="flex justify-center md:justify-end md:col-span-1">
            <div className="text-center md:text-right">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-4">{renderNavigationLinks()}</ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2025 WCS Externatic. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
