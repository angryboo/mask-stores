/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import './Main.css';
import Map from '../Templates/Maps/Map';
import { MapContext } from '../../ContextAPI/MapContext';

function Main() {
  const { state } = useContext(MapContext);
  return (
    <main className="Main">
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        현재 mapState 보기
      </button>
      <Map />
    </main>
  );
}

export default Main;
