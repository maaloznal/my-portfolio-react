import './App.css'
import About from './components/About/About'
import Data from './components/Data/data'
import Header from './components/Header/header'
import RenderImage from './components/RenderImg/RenderImg'
import Title from './components/Title/Title'

function App() {

  return (
    <>
      <Header/>
      <Title />
      <Data />
      <RenderImage />
      <About />
    </>
  )
}

export default App
