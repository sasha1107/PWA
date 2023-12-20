import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { setBadge } from './utils';
function App() {
  console.log(navigator.connection);
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    setBadge(count);
  }, [count]);
  const [message, setMessage] = React.useState('');

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increase Badge Count
        </button>

        <button onClick={() => setCount((prev) => prev - 1)}>
          Decrease Badge Count
        </button>

        <button
          onClick={() => {
            if (navigator.vibrate) {
              navigator.vibrate(200);
            }
          }}
        >
          VIbrate
        </button>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
