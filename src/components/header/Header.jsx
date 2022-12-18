import React from 'react';
import './Header.css'
import Navigation from "../navigation/Navigation";
import logo from '../../assets/logo.png'

function Header({header}) {

  return (
    <>
      <header className="header">
        <Navigation></Navigation>
        <div className="header-container">
          {header ?
            <>
              <h1>{header}</h1>
              <h4>Subreddit specifications</h4>
            </>
            :
            <>
              <img src={logo} alt="Reddit Logo"/>
              <span>Reddit</span>
            </>
          }
        </div>
      </header>
    </>
  );
}

export default Header;