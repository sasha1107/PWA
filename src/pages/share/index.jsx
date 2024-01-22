import { useState, useEffect } from 'react';
import { Support } from 'components';

const Share = () => {
  const [support, setSupport] = useState(false);
  const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  };

  useEffect(() => {
    if (navigator.canShare) {
      setSupport(true);
    }
  }, []);
  return (
    <div>
      <Support support={support} />
      <button
        onClick={async () => {
          try {
            if (!navigator.canShare) {
              return;
            }
            await navigator.share(shareData);
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
