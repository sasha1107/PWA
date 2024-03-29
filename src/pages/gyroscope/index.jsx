import { Support } from 'components';
import { useEffect, useState } from 'react';

const Gyroscope = () => {
  const [support, setSupport] = useState(false);
  const [sensor, setSensor] = useState({
    x: 0,
    y: 0,
    z: 0
  }); // [x, y, z
  useEffect(() => {
    if ('Gyroscope' in window) {
      setSupport(true);
      let sensor = new window.Gyroscope({ frequency: 60 });
      sensor.addEventListener('reading', () => {
        setSensor(sensor);
      });
      sensor.start();
    }
  }, []);
  return (
    <div className="flex flex-col">
      <Support support={support} />
      {support && (
        <div className="flex flex-col">
          <div>
            <span>Angular velocity along the X-axis</span>
            <span className="ml-4 text-red-300">{sensor.x}</span>
          </div>
          <div>
            <span>Angular velocity along the Y-axis</span>
            <span className="ml-4 text-red-300">{sensor.y}</span>
          </div>
          <div>
            <span>Angular velocity along the Z-axis</span>
            <span className="ml-4 text-red-300">{sensor.z}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gyroscope;
