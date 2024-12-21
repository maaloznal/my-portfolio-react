import React, { useState } from "react";
import Contact from "../Contact/Contact";
import BagavdinLogo from "../Logo/Logo";
import Nav from "../Nav/nav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import headerStyle from "./header.module.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={headerStyle.header}>
      <BagavdinLogo />
      <Nav />
      <BurgerMenu  isOpen={isMenuOpen} onClose={toggleMenu} />
      <div className={headerStyle.burgerMenuDiv}>
        <button
          className={`${headerStyle.burgerMenu} ${
            isMenuOpen ? headerStyle.open : ""
          }`}
          onClick={toggleMenu}
        >
          <div className={headerStyle.burgerLine}></div>
          <div className={headerStyle.burgerLine}></div>
          <div className={headerStyle.burgerLine}></div>
        </button>
      </div>
      <Contact />
    </div>
  );
};

export default Header;
