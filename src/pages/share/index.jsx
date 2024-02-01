import { useState, useEffect } from 'react';
import { Support } from 'components';

const Share = () => {
  const [support, setSupport] = useState(false);
  const [data, setData] = useState({
    title: '',
    text: '',
    url: ''
  });

  useEffect(() => {
    if (navigator.canShare) {
      setSupport(true);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Support support={support} />

      <div className="border p-2">
        <h2
          className="
          mb-3 text-lg font-semibold
        "
        >
          공유할 데이터 입력
        </h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="title">title</label>
          <input
            id="title"
            type="text"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="text">text</label>
          <input
            id="text"
            type="text"
            value={data.text}
            onChange={(e) => setData({ ...data, text: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="url">url</label>
          <input
            id="url"
            type="text"
            value={data.url}
            onChange={(e) => setData({ ...data, url: e.target.value })}
          />
        </div>
      </div>

      <button
        className="primary"
        onClick={async () => {
          try {
            if (!navigator.canShare) {
              return;
            }
            await navigator.share(data);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        공유
      </button>
    </div>
  );
};

export default Share;
