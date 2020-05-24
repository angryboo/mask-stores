// 테스트용 컴포넌트

/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import { MapContext } from '../../../ContextAPI/MapContext';
import { SearchContext } from '../../../ContextAPI/SearchContext';
import '../../Pages/Main.css';

function Main() {
  const { state, getRange } = useContext(MapContext);
  const { searchState, getAddress } = useContext(SearchContext);

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
        }}
      >
        범위 500m 변경
      </button>
      <button
        onClick={() => {
          getRange(700);
        }}
      >
        범위 7000m 변경
      </button>
      <button
        onClick={() => {
          getRange(1000);
        }}
      >
        범위 1000m 변경
      </button>
      <button
        onClick={() => {
          console.log(searchState);
        }}
      >
        현재 searchState 보기
      </button>
      <button
        onClick={() => {
          getAddress('성수역');
        }}
      >
        주소 가져오기
      </button>
    </div>
  );
}

export default Main;
