import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { MapContext } from '../../../ContextAPI/MapContext';

function Marker({ map }) {
  const { state } = useContext(MapContext);
  const { kakao } = window;
  useEffect(() => {
    // console.log(state.stores);
    const markersPosition = state.stores.map(({ name, lat, lng }) => ({
      title: name,
      latlng: new kakao.maps.LatLng(lat, lng),
    }));

    const generateMaker = (mapObj) => {
      markersPosition.forEach((store) => {
        const marker = new kakao.maps.Marker({
          title: store.title,
          position: store.latlng,
        });
        marker.setMap(mapObj);
      });
    };

    generateMaker(map);

    return () => {
      generateMaker(null);
    };
  }, [state.stores]);

  return <div className="Marker" />;
}

export default Marker;
