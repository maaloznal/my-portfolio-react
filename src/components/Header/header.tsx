import Contact from "../Contact/Contact";
import BagavdinLogo from "../Logo/Logo";
import Nav from "../Nav/nav";
import headerStyle from "./header.module.css";

const Header = () => {
  return (
    <div className={headerStyle.header}>
      <BagavdinLogo />
      <Nav />
      <Contact />
    </div>
  );
};

export default Header;
