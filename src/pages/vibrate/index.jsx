import React, { useState, useEffect, useRef } from 'react';
import { Support } from 'components';

const PatternMaker = () => {
  const [support, setSupport] = useState(false);
  const [pattern, setPattern] = useState([200, 100, 200]);

  const stopVibration = () => {
    navigator.vibrate(0);
  };
  const playVibration = () => {
    navigator.vibrate(pattern);
  };

  useEffect(() => {
    if (!('vibrate' in navigator)) {
      return;
    }

    setSupport(true);
  }, []);

  return (
    <div>
      <Support support={support} />
      <button onClick={playVibration} disabled={!support}>
        Play
      </button>
      <button onClick={stopVibration} disabled={!support}>
        Stop
      </button>
    </div>
  );
};

export default PatternMaker;
