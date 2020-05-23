/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { MapContext } from '../../../ContextAPI/MapContext';

function Level({ map }) {
  const { state } = useContext(MapContext);
  const { kakao } = window;

  return (
    <div className="Level">
      <button type="button" className="ZoomIn">
        +
      </button>
      <button type="button" className="ZoomOut">
        -
      </button>
    </div>
  );
}

export default Level;
