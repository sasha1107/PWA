import React, { useEffect, useState } from 'react';

import { setBadge, sendPush } from './utils';
import Provider from './components/provider';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function App() {
  // console.log(navigator);
  const [count, setCount] = React.useState(0);
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    setBadge(count);
  }, [count]);

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }));
    }
  }, []);

  console.log(process.env.PUBLIC_URL);
  return (
    <div className='App'>
      <Provider>
        <header className='App-header'>
          <button onClick={() => setCount((prev) => prev + 1)}>
            Increase Badge Count
          </button>

          <button onClick={() => setCount((prev) => prev - 1)}>
            Decrease Badge Count
          </button>

          <button
            onClick={() => {
              if (navigator.vibrate) {
                navigator.vibrate(200);
              }
            }}
          >
            VIbrate
          </button>
          <button
            onClick={async () => {
              sendPush({
                title: 'ㅎㅇㅎㅇ',
                onClick: () => console.log('clicked'),
                options: {
                  body: 'ㅎㅇ',
                  icon: 'https://avatars.githubusercontent.com/u/78977003?v=4',
                  image: 'https://web.dev/images/authors/petelepage.jpg?hl=ko',
                },
              });
            }}
          >
            dsfds
          </button>
        </header>
        <button
          onClick={() => {
            // permission
            navigator.geolocation.getCurrentPosition((position) => {
              console.log(position);
            });
          }}
        >
          내 위치 표시
        </button>
        <Map // 지도를 표시할 Container
          center={state.center}
          style={{
            // 지도의 크기
            width: '100%',
            height: '450px',
          }}
          level={3} // 지도의 확대 레벨
        >
          {!state.isLoading && (
            <MapMarker position={state.center}>
              <div style={{ padding: '5px', color: '#000' }}>
                {state.errMsg ? state.errMsg : '여기에 계신가요?!'}
              </div>
            </MapMarker>
          )}
        </Map>
      </Provider>
    </div>
  );
}

export default App;
