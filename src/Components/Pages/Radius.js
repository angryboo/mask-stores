import React from 'react';
import './Main.css';
import MaskList from '../Templates/Maps/MaskList';

function MainContents() {
  // const { state } = useContext(MapContext);
  return (
    <div className="MainContents">
      <MaskList />
    </div>
  );
}

export default MainContents;
