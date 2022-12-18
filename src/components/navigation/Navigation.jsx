import React from 'react';
import './Navigation.css'
import {NavLink} from "react-router-dom";

function Navigation() {
  return (
    <ul className="navigation">
      <li><NavLink to="/" className="navigation__navlink">HOTTEST POSTS</NavLink></li>
      <li><NavLink to="/" className="navigation__navlink">BLOG</NavLink></li>
      <li><NavLink to="/" className="navigation__navlink">MEMES</NavLink></li>
    </ul>
  );
}

export default Navigation;