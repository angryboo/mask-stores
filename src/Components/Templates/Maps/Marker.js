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

    const markers = [];

    const generateMaker = (mapObj) => {
      const imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/2012/img/marker_p.png';

      const imageSize = new kakao.maps.Size(64, 69);

      const imageOption = { offset: new kakao.maps.Point(27, 69) };

      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      markersPosition.forEach((store) => {
        const marker = new kakao.maps.Marker({
          title: store.title,
          position: store.latlng,
          image: markerImage,
        });

        // console.log(marker);
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
