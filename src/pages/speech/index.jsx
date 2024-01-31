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
    <div>
      <Support support={support} />
      <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button
        onClick={() => {
          speaker.text = msg;
          window.speechSynthesis.speak(speaker);
        }}
      >
        말하기
      </button>
      <select
        onChange={(e) => {
          speaker.voice = voices.find((voice) => voice.name === e.target.value);
          setSpeaker(speaker);
        }}
      >
        {voices.map((voice) => (
          <option key={voice.name}>{voice.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Speech;
