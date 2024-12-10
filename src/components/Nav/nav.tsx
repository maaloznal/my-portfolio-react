// import Contact from "../Contact/Contact";
// import BagavdinLogo from "../Logo/Logo";
import navStyle from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <a href="#">Home</a>
      <a href="#">About Me</a>
      <a href="#">Portfolio</a>
      <a href="#">Services</a>
    </nav>
  );
};

export default Nav;
