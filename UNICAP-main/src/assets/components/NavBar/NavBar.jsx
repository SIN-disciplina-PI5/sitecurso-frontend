import React, { useState } from 'react';
import logo from '../../images/logoUnicapNovo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom'; // Importando NavLink e useNavigate do React Router
import '../../components/NavBar/NavBar.css';

const NavBar = () => {
  const [active, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!active);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('edxpiration');
    localStorage.removeItem('userCargo');
    localStorage.removeItem('id');
    localStorage.removeItem('nome');
    navigate('/');
  }

  const renderButtonLoginOrLogout = () => {
    if (localStorage.getItem('accessToken') == null) {
      return (
        <NavLink to='/Login' className="loginButton">
          Entrar
        </NavLink>
      )
    } else {
      return (
        <div className='navLinksUl'>
          <NavLink to='/' className="loginButton" onClick={logout}>
            Sair
          </NavLink>
        </div>
      )
    }
  }

  return (
    <div id="navBar">
      <div className="logo">
        <NavLink to="/">
        <img src={logo} alt="logo da Unicap" height={35} />
        </NavLink>
      </div>
      <div className={`navLinks ${active ? 'active' : ''}`} id="navLinksUl">
        <NavLink to="/sobre-o-sin" onClick={toggleMode}>
          <li className="navLinksLi">Sobre o Sin</li>
        </NavLink>
        <NavLink to="/gestao-e-pessoas" onClick={toggleMode}>
          <li className="navLinksLi">Gestão e pessoas</li>
        </NavLink>
        {/* <NavLink to="/pos-graduacao" onClick={toggleMode}>
          <li className="navLinksLi">Pós-graduação</li>
        </NavLink> */}
        <NavLink to="/pesquisa-e-extensao" onClick={toggleMode}>
          <li className="navLinksLi">Pesquisa e extensão</li>
        </NavLink>
        <NavLink to='/PaginaInicial'>
            <li className='navLinksLi'>Artigos</li>
        </NavLink>
        {/* <a href="https://portal.unicap.br/pesquisa" target='_blank'>
          <li className="navLinksLi">PIBIC</li>
        </a> */}
        <div className="loginButtons">
        {/* <NavLink to='/Login' className="loginButton">
          Entrar
        </NavLink>
        <NavLink to='/' className="loginButton" onClick={logout}>
          Sair
        </NavLink> */}
        {renderButtonLoginOrLogout()}
      </div>
      
      </div>
      <div id="menu" onClick={toggleMode}>
        <i>{active ? <FaTimes /> : <FaBars />}</i>
      </div>
    </div>
  );
};

export default NavBar;
