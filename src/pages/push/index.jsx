import { useState, useEffect } from 'react';
import { setBadge } from 'utils';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Support } from 'components';

const PushHistory = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [support, setSupport] = useState({
    notification: false,
    badge: false
  });
  useEffect(() => {
    if ('Notification' in window) {
      setSupport((prev) => ({
        ...prev,
        notification: true
      }));
    }
    if ('setAppBadge' in navigator) {
      setSupport((prev) => ({
        ...prev,
        badge: true
      }));
    }
  }, []);

  useEffect(() => {
    setBadge(count);
  }, [count]);

  const sendNotification = () => {
    if (Notification.permission === 'granted') {
      const notification = new Notification(title, {
        body
      });
      notification.onclick = () => {
        window.open('https://pwa-sasha1107.vercel.app/');
      };
    } else {
      alert('권한이 없습니다.');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Support support={support.notification} target="Notification" />
      <Support support={support.badge} target="Badge" />
      <div className="grid grid-cols-2 gap-2">
        <button
          className="primary flex items-center justify-center gap-2"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increase Badge Count
          <AddCircleIcon />
        </button>
        <button
          className="secondary flex items-center justify-center gap-2"
          onClick={() => setCount((prev) => prev - 1)}
        >
          Decrease Badge Count
          <RemoveCircleIcon />
        </button>
      </div>
      <div className="card">
        <div className="flex flex-col gap-4">
          <h2
            className="
          mb-1 text-lg font-semibold
        "
          >
            푸시 알림 내용 입력
          </h2>
          <div>
            <label htmlFor="1">Title</label>
            <input
              id="1"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="2">Body</label>
            <input
              id="2"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </div>
          <button
            className="primary flex items-center justify-center gap-2"
            onClick={sendNotification}
          >
            Send Push
            <AddAlertIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PushHistory;
