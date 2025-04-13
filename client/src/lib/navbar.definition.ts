export type NavBarLink = {
  label: string;
  href: string;
};

export type NavbarBurgerProps = {
  isOpenMenu: boolean;
  handleIsOpenedMenu: () => void;
  links: NavBarLink[];
};
