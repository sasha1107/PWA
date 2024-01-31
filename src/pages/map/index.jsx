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
  const [gyroscope, setGyroscope] = useState({
    x: 0,
    y: 0,
    z: 0
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

  useEffect(() => {
    if ('Gyroscope' in window) {
      setSupport((prev) => ({
        ...prev,
        gyroscope: true
      }));
      let gyroscope = new window.Gyroscope({ frequency: 60 });
      gyroscope.addEventListener('reading', () => {
        setGyroscope(gyroscope);
      });
      gyroscope.start();
    } else {
      // alert('Gyroscope is not supported by your browser.');
    }
  }, []);

  return (
    <div className="App h-full">
      <Support support={support.geolocation} target="GPS" />
      <Support support={support.gyroscope} target="자이로스코프" />
      {support.gyroscope && (
        <div className="flex flex-col">
          <div>
            <span>Angular velocity along the X-axis</span>
            <span className="ml-4 text-red-300">{gyroscope.x}</span>
          </div>
          <div>
            <span>Angular velocity along the Y-axis</span>
            <span className="ml-4 text-red-300">{gyroscope.y}</span>
          </div>
          <div>
            <span>Angular velocity along the Z-axis</span>
            <span className="ml-4 text-red-300">{gyroscope.z}</span>
          </div>
        </div>
      )}
      <button
        onClick={() => {
          if ('geolocation' in navigator) {
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
