import React from 'react';
import './Header.css'
import Navigation from "../navigation/Navigation";
import logo from '../../assets/logo.png'

function Header() {
  return (
    <>
      <header className="header">
        <Navigation></Navigation>
        <div className="header-container">
          <img src={logo} alt="Reddit Logo"/>
          <span>Reddit</span>
        </div>

      </header>
    </>
  );
}

export default Header;