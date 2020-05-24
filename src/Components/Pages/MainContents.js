import React from 'react';
import './Main.css';
import MaskList from '../Templates/Maps/MaskList';
import Radius from './Radius';

function MainContents() {
  // const { state } = useContext(MapContext);
  return (
    <div className="MainContents">
      <Radius />
      <MaskList />
    </div>
  );
}

export default MainContents;
