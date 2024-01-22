import { useState, useEffect } from 'react';
import { Support } from 'components';

const WakeLock = () => {
  const [support, setSupport] = useState(false);
  const [wakeLock, setWakeLock] = useState(null);
  useEffect(() => {
    if ('wakeLock' in navigator) {
      setSupport(true);
    }
  }, []);
  return (
    <div>
      <Support support={support} />

      {wakeLock && (
        <div>
          <div>type: {wakeLock.type}</div>
          <div>released: {wakeLock.released ? 'true' : 'false'}</div>
        </div>
      )}
      <button
        onClick={async () => {
          try {
            if (!navigator.wakeLock) {
              return;
            }
            const wakeLock = await navigator.wakeLock.request('screen');
            setWakeLock(wakeLock);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        잠금
      </button>
      {wakeLock && !wakeLock.released && (
        <button
          onClick={async () => {
            try {
              if (!navigator.wakeLock) {
                return;
              }
              wakeLock.release();
              setWakeLock(null);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          해제
        </button>
      )}
    </div>
  );
};

export default WakeLock;
