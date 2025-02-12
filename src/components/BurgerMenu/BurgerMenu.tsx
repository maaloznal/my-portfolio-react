import React from "react";
import navStyle from "../Nav/nav.module.css";

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className={navStyle.mobileMenu}>
        <a href="#" onClick={onClose} className={navStyle.menuLink}>
          Home
        </a>
        <a href="#About" onClick={onClose} className={navStyle.menuLink}>
          About Me
        </a>
        <a href="#portfolioSection" onClick={onClose} className={navStyle.menuLink}>
          Portfolio
        </a>
        <a href="#services" onClick={onClose} className={navStyle.menuLink}>
          Services
        </a>
        <a
          href="#contact"
          className={navStyle.menuLink}
          onClick={onClose}
        >
          Contact Me
        </a>
      </div>
    )
  );
};

export default BurgerMenu;
