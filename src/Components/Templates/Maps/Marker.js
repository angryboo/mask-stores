/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { MapContext } from '../../../ContextAPI/MapContext';

function Marker({ map }) {
  const { state } = useContext(MapContext);
  const { kakao } = window;
  useEffect(() => {
    const markersPosition = state.stores.map(
      ({ name, lat, lng, remain_stat }) => ({
        title: name,
        latlng: new kakao.maps.LatLng(lat, lng),
        remain_stat,
      }),
    );

    const markers = [];

    const generateMaker = (mapObj) => {
      let imageSrc = '';

      const plentyMarker =
        'https://raw.githubusercontent.com/songseungeun/mask-stores/feature-content/src/img/marker.png';
      const someMarker =
        'https://www.pinpng.com/pngs/m/236-2366474_map-marker-png-blue-map-marker-png-transparent.png';
      const fewMarker =
        'https://www.pinpng.com/pngs/m/236-2366474_map-marker-png-blue-map-marker-png-transparent.png';
      const defaultMarker =
        'https://www.pinpng.com/pngs/m/298-2987475_location-icon-gif-transparent-png-download-map-marker.png';

      markersPosition.forEach((store) => {
        switch (store.remain_stat) {
          case 'plenty':
            imageSrc = plentyMarker;
            break;
          case 'some':
            imageSrc = someMarker;
            break;
          case 'few':
            imageSrc = fewMarker;
            break;
          default:
            imageSrc = defaultMarker;
        }
        // console.log(store.remain_stat + imageSrc);

        const imageSize = new kakao.maps.Size(64, 69);

        const imageOption = { offset: new kakao.maps.Point(27, 69) };

        const markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        );

        const marker = new kakao.maps.Marker({
          title: store.title,
          position: store.latlng,
          image: markerImage,
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

  return <></>;
}

export default Marker;
