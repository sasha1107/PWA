import { useState, useEffect } from 'react';
import { setBadge, sendPush } from 'utils';

const PushHistory = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setBadge(count);
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Badge Count
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>
        Decrease Badge Count
      </button>
      <button
        onClick={async () => {
          sendPush({
            title: 'ㅎㅇㅎㅇ',
            onClick: () => console.log('clicked'),
            options: {
              body: 'ㅎㅇ',
              icon: 'https://avatars.githubusercontent.com/u/78977003?v=4',
              image: 'https://web.dev/images/authors/petelepage.jpg?hl=ko',
            },
          });
        }}
      >
        dsfds
      </button>
    </div>
  );
};

export default PushHistory;
