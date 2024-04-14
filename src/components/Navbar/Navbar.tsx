import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import { useSelector } from "react-redux";
import React from 'react';
import { Theme } from '../Theme/Theme';

export const Navbar = () => {
  const theme = useSelector((state: any) => state.theme.value)
  const urls = ['/', '/characters', '/episodes'];
  const bold = { fontWeight: "bold" };
  const textColor = { color: theme === 'light' ? 'black' : 'white' }

  const { pathname } = useLocation();
  return (
    // <div className={`${theme}`}>
    <nav>
      <div className={`${theme}`}>
        <div className={`${theme} navbar`}>
          <div className='left-section'>
            <ul className={`${theme} menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box`}>
              <li><Link className={`${theme}`} style={pathname === '/' ? bold : textColor} to="/">Home</Link><br /></li>
              {urls.map((url, index) => (
                <React.Fragment key={index}>
                  <li><Link className={`${theme}`} style={pathname === url ? bold : textColor} to={url}>{url.replace('/', '')}</Link></li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className={`${theme}right-section`}>
            <Theme />
          </div>
        </div>
      </div>
    </nav >
  )
};

export default Navbar;
