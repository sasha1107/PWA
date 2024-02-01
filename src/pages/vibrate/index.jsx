import React, { useState, useEffect } from 'react';
import { Support } from 'components';

const PatternMaker = () => {
  const [support, setSupport] = useState(false);
  const [pattern, setPattern] = useState([
    100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100
  ]); // Vibrate 'SOS' in Morse.

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
    <div className="flex flex-col gap-4">
      <Support support={support} />
      <button className="primary" onClick={playVibration} disabled={!support}>
        Play
      </button>
      <button className="secondary" onClick={stopVibration} disabled={!support}>
        Stop
      </button>
    </div>
  );
};

export default PatternMaker;
