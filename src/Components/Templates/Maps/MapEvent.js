import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { MapContext } from '../../../ContextAPI/MapContext';

function MapEvent() {
  const { state, getStores } = useContext(MapContext);

  useEffect(() => {
    console.log(111);
    getStores(state.latitude, state.longitude, state.radius);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.latitude, state.longitude, state.radius]);

  return <></>;
}

export default MapEvent;
