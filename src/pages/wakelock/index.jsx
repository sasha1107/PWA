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
    <div className="flex flex-col gap-4">
      <Support support={support} />

      {wakeLock && (
        <div>
          <div>type: {wakeLock.type}</div>
          <div>
            released:{' '}
            <span className="tag">{wakeLock.released.toString()}</span>
          </div>
        </div>
      )}
      <button
        className="primary block w-full"
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
          className="secondary block w-full"
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
          잠금 해제
        </button>
      )}
    </div>
  );
};

export default WakeLock;
