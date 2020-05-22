// 테스트용 컴포넌트

/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import { MapContext } from '../../../ContextAPI/MapContext';
import './Test.css';

function Main() {
  const { state, getStores, getRange } = useContext(MapContext);
  return (
    <div className="Test">
      테스트용 컴포넌트입니다.
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        현재 mapState 보기
      </button>
      <button
        onClick={() => {
          getRange(500);
          getStores(state.latitude, state.longitude, 500);
        }}
      >
        범위 500m 변경
      </button>
      <button
        onClick={() => {
          getRange(300);
          getStores(state.latitude, state.longitude, 300);
        }}
      >
        범위 300m 변경
      </button>
      <button
        onClick={() => {
          getRange(200);
          getStores(state.latitude, state.longitude, 200);
        }}
      >
        범위 200m 변경
      </button>
    </div>
  );
}

export default Main;
