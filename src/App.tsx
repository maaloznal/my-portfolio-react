import "./App.css";
import About from "./components/About/About";
import Data from "./components/Data/data";
import Header from "./components/Header/header";
import RenderImage from "./components/RenderImg/RenderImg";
import Title from "./components/Title/Title";
import Development from "./components/Development/Development";
import Portfolio from "./components/Portfolio/Portfolio";
import Faqs from "./components/Faqs/Faqs";
import Reviews from "./components/Reviews/Reviews";
import MyName from "./components/MyName/MyName";

function App() {
  return (
    <>
      <Header />
      <Title />
      <Data />
      <RenderImage />
      <About />
      <Development />
      <Portfolio />
      <Faqs />
      <Reviews />
      <MyName />
      <Data />
    </>
  );
}

export default App;
