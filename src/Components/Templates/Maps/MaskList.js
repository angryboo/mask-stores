/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { MapContext } from '../../../ContextAPI/MapContext';

function MaskList() {
  const { state } = useContext(MapContext);

  const StoreList = state.stores;
  useEffect(() => {
    // console.log(state.stores);
  }, [state.stores]);

  // console.log(state.stores);

  // 마스크 수량을 렌더링하는 함수

  const StockValue = (remain_stat) => {
    switch (remain_stat) {
      case 'plenty':
        return '100개 이상';
      case 'some':
        return '30개 ~ 100개';
      case 'few':
        return '30개 미만';
      default:
        return '없습니다';
    }
  };
  // console.log(StoreList);

  return (
    <div className="MaskListWrapper">
      <ul className="MaskList">
        {StoreList.length ? (
          StoreList.map(({ code, addr, name, remain_stat, stock_at }) => (
            <li key={code} className="store">
              <h4>{name}</h4>
              <em>마스크 보유수량 : {StockValue(remain_stat)}</em>
              <span className="date">{stock_at}</span>
              <span className="addr">{addr}</span>
            </li>
          ))
        ) : (
          <li>주변에 약국이 없습니다.</li>
        )}
      </ul>
    </div>
  );
}

export default MaskList;
