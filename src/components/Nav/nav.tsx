import navStyle from "./nav.module.css";
import useScreenSize from "../useScreenSize/useScreenSize";
const Nav: React.FC = () => {
  const width = useScreenSize();
  if (width > 950) {
    return (
      <nav className={navStyle.nav}>
        <a href="#">Home</a>
        <a href="#About">About Me</a>
        <a href="#portfolioSection">Portfolio</a>
        <a href="#services">Services</a>
      </nav>
    );
  } else {
    return null;
  }
};

export default Nav;
