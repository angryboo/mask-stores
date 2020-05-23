import React, { useState, useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { MapContext } from '../../../ContextAPI/MapContext';
import Overlay from './Overlay';
import Marker from './Marker';

function Map() {
  const { state, getStores, getLocation } = useContext(MapContext);
  const [_map, setState] = useState({});
  const { kakao } = window;

  useEffect(() => {
    // 마운트 될 때 한번만 맵 생성
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.544579, 127.056045),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    // 맵 드래그 완료 시 3번째 인수로 전달 한 콜백 실행
    kakao.maps.event.addListener(map, 'dragend', () => {
      const { Ha, Ga } = map.getCenter();
      getLocation(Ha, Ga); // 위도, 경도 상태 변경
      getStores(Ha, Ga, state.radius); // 마스크 판매처 List 상태 변경
    });
    setState({ map });
  }, []);

  return (
    <>
      <Marker map={_map.map} />
      <Overlay map={_map.map} />
      <div id="map" />
    </>
  );
}

export default Map;
