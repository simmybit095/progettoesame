import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/characters">Characters</Link></li>
          <li> <Link to="/episodes">Episodes</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>

  )
};

export default Layout;