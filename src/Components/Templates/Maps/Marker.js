import React, { useEffect, useContext } from 'react';
import './Map.css';
import { MapContext } from '../../../ContextAPI/MapContext';

function Marker({ map }) {
  const { state } = useContext(MapContext);
  const { kakao } = window;
  useEffect(() => {
    console.log(state.stores);
    const markersPosition = state.stores.map(({ name, lat, lng }) => ({
      title: name,
      latlng: new kakao.maps.LatLng(lat, lng),
    }));

    const markers = [];
    const generateMaker = (mapObj) => {
      markersPosition.forEach((store) => {
        const marker = new kakao.maps.Marker({
          title: store.title,
          position: store.latlng,
        });
        marker.setMap(mapObj);
        markers.push(marker);
      });
    };

    generateMaker(map);

    return () => {
      markers.forEach((marker) => marker.setMap(null));
    };
  }, [state.stores]);

  return <div className="Marker" />;
}

export default Marker;
