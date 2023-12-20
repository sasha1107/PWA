import React, { useEffect } from 'react';
import { setBadge, sendPush } from './utils';
import Provider from './components/provider';
import { Map } from 'react-kakao-maps-sdk';

function App() {
  // console.log(navigator);
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    setBadge(count);
  }, [count]);
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
          center={{
            // 지도의 중심좌표
            lat: 33.450701,
            lng: 126.570667,
          }}
          style={{
            // 지도의 크기
            width: '100dvw',
            height: '100dvh',
          }}
          level={3} // 지도의 확대 레벨
        />
      </Provider>
    </div>
  );
}

export default App;
