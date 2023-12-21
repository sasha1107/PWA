import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Home = () => {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

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
        },
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  useEffect(() => {
    if ("Gyroscope" in window) {
      let gyroscope = new window.Gyroscope({ frequency: 60 });
      gyroscope.addEventListener("reading", () => {
        alert(`Angular velocity along the X-axis ${gyroscope.x}`);
        alert(`Angular velocity along the Y-axis ${gyroscope.y}`);
        alert(`Angular velocity along the Z-axis ${gyroscope.z}`);
      });
      gyroscope.start();
    } else {
      alert("Gyroscope is not supported by your browser.");
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <button
        onClick={() => {
          // permission
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
              },
            );
          } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            setState((prev) => ({
              ...prev,
              errMsg: "geolocation을 사용할수 없어요..",
              isLoading: false,
            }));
          }
        }}
      >
        내 위치 표시
      </button>
      <div className="w-full h-full">
        <Map // 지도를 표시할 Container
          center={state.center}
          level={3} // 지도의 확대 레벨
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {!state.isLoading && (
            <MapMarker position={state.center}>
              <div style={{ padding: "5px", color: "#000" }}>
                {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
              </div>
            </MapMarker>
          )}
        </Map>
      </div>
    </div>
  );
};

export default Home;
