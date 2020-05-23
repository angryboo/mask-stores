import React from 'react';
import './Main.css';
import MaskList from '../Templates/Maps/MaskList';
import Radius from './Radius';
import Search from './Search';
import Logo from './Logo';

function MainContents() {
  // const { state } = useContext(MapContext);
  return (
    <div className="MainContents">
      <Logo />
      <Search />
      <Radius />
      <MaskList />
    </div>
  );
}

export default MainContents;
