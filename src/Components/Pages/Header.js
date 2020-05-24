import React from 'react';
import './Main.css';
import Logo from './Logo';
import Search from './Search';

function Header() {
  return (
    <header className="Header">
      <Logo />
      <Search />
      <div className="about">about</div>
    </header>
  );
}

export default Header;
