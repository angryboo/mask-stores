import React, { useEffect } from 'react';
import './Map.css';

function Map() {
  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.544579, 127.056045),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    kakao.maps.event.addListener(map, 'dragend', () => {
      console.log(map.getCenter());
    });
  }, []);

  return <div id="map" />;
}

export default Map;
