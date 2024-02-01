import { Support } from 'components';
import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const MapPage = () => {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667
    },
    errMsg: null,
    isLoading: true
  });
  const [support, setSupport] = useState({
    geolocation: false,
    gyroscope: false
  });

  useEffect(() => {
    if ('geolocation' in navigator) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      setSupport((prev) => ({
        ...prev,
        geolocation: true
      }));
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude // 경도
            },
            isLoading: false
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false
      }));
    }
  }, []);

  return (
    <div className="App h-full">
      <Support support={support.geolocation} />
      <button
        className="primary"
        onClick={() => {
          if ('geolocation' in navigator) {
            setState((prev) => ({
              ...prev,
              isLoading: true
            }));
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setState((prev) => ({
                  ...prev,
                  center: {
                    lat: position.coords.latitude, // 위도
                    lng: position.coords.longitude // 경도
                  },
                  isLoading: false
                }));
              },
              (err) => {
                setState((prev) => ({
                  ...prev,
                  errMsg: err.message,
                  isLoading: false
                }));
              }
            );
          } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            setState((prev) => ({
              ...prev,
              errMsg: 'geolocation을 사용할수 없어요..',
              isLoading: false
            }));
          }
        }}
      >
        내 위치 표시
      </button>
      {state.isLoading && <div>로딩중...</div>}
      <Map
        center={state.center}
        level={3}
        style={{
          width: '100vw - 1rem',
          height: '500px'
        }}
      >
        {!state.isLoading && (
          <MapMarker position={state.center}>
            <div style={{ padding: '5px', color: '#000' }}>
              {state.errMsg ? state.errMsg : '여기에 계신가요?!'}
            </div>
          </MapMarker>
        )}
      </Map>
    </div>
  );
};

export default MapPage;
