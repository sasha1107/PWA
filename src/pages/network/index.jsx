import { useState, useEffect } from 'react';
import { Support } from 'components';

const Network = () => {
  const [support, setSupport] = useState(false);
  const [connection, setConnection] = useState(null);
  useEffect(() => {
    if (navigator.connection) {
      setSupport(true);
      const NetworkInformation = navigator.connection;
      NetworkInformation.onchange = () => {
        alert('네트워크 상태가 변경되었습니다.');
      };
      setConnection(NetworkInformation);
    }
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <Support support={support} />
      {connection && (
        <div className="card flex flex-col gap-4 divide-y">
          <h2 className="text-lg font-bold">네트워크 정보</h2>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-semibold">type</span>
              <span className="tag">{connection.type}</span>
            </div>
            <p className="bg-slate-50 p-1 text-sm">
              Returns the type of connection a device is using to communicate
              with the network. It will be one of the following values:
              <div className="flex flex-wrap gap-1">
                <code>bluetooth</code>
                <code>cellular</code>
                <code>ethernet</code>
                <code>none</code>
                <code>wifi</code>
                <code>wimax</code>
                <code>other</code>
                <code>unknown</code>
              </div>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-semibold">downlink</span>
              <span className="tag">{connection.downlink}</span>
            </div>
            <p className="bg-slate-50 p-1 text-sm">
              Returns the effective bandwidth estimate in megabits per second,
              rounded to the nearest multiple of 25 kilobits per seconds.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-semibold">downlinkMax</span>
              <span className="tag">{connection.downlinkMax}</span>
            </div>
            <p className="bg-slate-50 p-1 text-sm">
              Returns the maximum downlink speed, in megabits per second (Mbps),
              for the underlying connection technology.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-semibold">effectiveType</span>
              <span className="tag">{connection.effectiveType}</span>
            </div>
            <p className="bg-slate-50 p-1 text-sm">
              Returns the effective type of the connection meaning one of
              <div className="flex flex-wrap gap-1">
                <code>slow-2g</code>
                <code>2g</code>
                <code>3g</code>
                <code>4g</code>
              </div>
              This value is determined using a combination of recently observed
              round-trip time and downlink values.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-semibold">rtt</span>
              <span className="tag">{connection.rtt}</span>
            </div>
            <p className="bg-slate-50 p-1 text-sm">
              Returns the estimated effective round-trip time of the current
              connection, rounded to the nearest multiple of 25 milliseconds.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-semibold">saveData</span>
              <span className="tag">{connection.saveData.toString()}</span>
            </div>
            <p className="bg-slate-50 p-1 text-sm">
              Returns <code>true</code> if the user has set a reduced data usage
              option on the user agent.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Network;
