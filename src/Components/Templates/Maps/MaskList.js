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
  return (
    <div className="MaskListWrapper">
      <ul className="MaskList">
        {StoreList.map(({ code, addr, name, remain_stat, stock_at }) => (
          <li key={code} className="store">
            <h4>{name}</h4>
            <em>{remain_stat}</em>
            <span className="date">{stock_at}</span>
            <span className="addr">{addr}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MaskList;
