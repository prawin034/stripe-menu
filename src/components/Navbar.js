import React from 'react';
import { useGlobalContext } from './Context';
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  const { OpenSideBar, OpenSubMenu, CloseSubMenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempbtn = e.target.getBoundingClientRect();
    console.log(page, tempbtn);

    const center = (tempbtn.left + tempbtn.right) / 2;
    const bottom = tempbtn.bottom - 3;
    OpenSubMenu(page, {
      center,
      bottom,
    });
  };

  const handle = (e) => {
    if (!e.target.classList.contains('navbar_links_btn')) {
      CloseSubMenu();
    }
  };
  return (
    <div className="navbar" onMouseOver={handle}>
      <div className="navbar_Center">
        <div className="navbar_header">
          <img src={logo} alt="stripe" className="navbar_header_img" />
          <button onClick={OpenSideBar} className="navbar_header_btn">
            <FaBars />
          </button>
        </div>

        <ul className="navbar_links">
          <li>
            <button onMouseOver={displaySubmenu} className="navbar_links_btn">
              products
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="navbar_links_btn">
              developers
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="navbar_links_btn">
              company
            </button>
          </li>
        </ul>
        <button className="sign_in">SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
