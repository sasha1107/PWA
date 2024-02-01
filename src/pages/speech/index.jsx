import { useState, useEffect } from 'react';
import { Support } from 'components';
const Speech = () => {
  const [support, setSupport] = useState(false);
  const [msg, setMsg] = useState('Hello World');
  const [voices, setVoices] = useState([]);
  const [speaker, setSpeaker] = useState(null);
  useEffect(() => {
    if (window.speechSynthesis) {
      setSupport(true);
      const voices = window.speechSynthesis.getVoices();
      setVoices(voices);
      const temp = new SpeechSynthesisUtterance();
      setSpeaker(temp);
    }
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <Support support={support} />
      <div className="flex flex-col gap-1 border p-2">
        <label htmlFor="msg">메시지</label>
        <input
          id="msg"
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 border p-2">
        <label htmlFor="voice">목소리</label>
        <select
          id="voice"
          onChange={(e) => {
            speaker.voice = voices.find(
              (voice) => voice.name === e.target.value
            );
            setSpeaker(speaker);
          }}
        >
          {voices.map((voice) => (
            <option key={voice.name}>{voice.name}</option>
          ))}
        </select>
      </div>
      <button
        className="primary"
        onClick={() => {
          speaker.text = msg;
          window.speechSynthesis.speak(speaker);
        }}
      >
        말하기
      </button>
    </div>
  );
};

export default Speech;
