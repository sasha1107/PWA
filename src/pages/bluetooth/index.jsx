import { useState, useEffect } from 'react';
import { Support } from 'components';

const Bluetooth = () => {
  const [support, setSupport] = useState(false);
  const [deviceList, setDeviceList] = useState([]);
  useEffect(() => {
    if ('bluetooth' in navigator) {
      setSupport(true);
    }
  }, []);
  const scanDevice = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      });
      setDeviceList(device);
      // setDeviceList([...deviceList, device]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <Support support={support} />
      <button className="primary" onClick={scanDevice}>
        스캔
      </button>
      {deviceList.length > 0 && (
        <div>
          {deviceList.map((device) => (
            <div className="card flex gap-4" key={device.name}>
              <div className="text-semibold">{device.name}</div>
              <div className="flex flex-grow flex-col gap-2">
                <div>id: {device.id}</div>
                <div>uuids: {device.uuids.join(', ')}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bluetooth;
