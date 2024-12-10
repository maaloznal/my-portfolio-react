import Nav from "../Nav/nav"
import headerStyle from './header.module.css'

const Header = () => {
  return (
    <div className={headerStyle.header}>
      <Nav />
    </div>
  )
}

export default Header