import React, { useState } from 'react';
import logo from '../../images/Logo_UNICAP.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const NavBar = () => {
  const [active, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!active);
  };

  return (
    <>
      <div id="menu" onClick={toggleMode}>
        <i>{active ? <FaTimes /> : <FaBars />}</i>
      </div>
      <div id="SideBar" className={active ? 'active' : ''}>
        <div className="logo">
          <img src={logo} alt="logo da Clinica Ativamente" height={35} />
        </div>
        <div className={`navLinks ${active ? 'active' : ''}`} id="SidenavLinksUl">
          <NavLink to="/sobre-o-sin" onClick={toggleMode}>
            <li className="navLinksLi">Artigos</li>
          </NavLink>
          <a href="" target='_blank' onClick={toggleMode}>
            <li className="navLinksLi">Professores</li>
          </a>
          <div className="loginButtons">
            <NavLink to='/Login' className="loginButton" onClick={toggleMode}>
              Entrar
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
