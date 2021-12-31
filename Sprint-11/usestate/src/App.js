import React, {useState} from 'react';

import './App.css';

export default function App() {
  const [text, setText] = useState('React Marathon');

  const changeText = () => {
    setText(text.toLowerCase());
  }

  return <div onClick={changeText}>{text}</div>
}

