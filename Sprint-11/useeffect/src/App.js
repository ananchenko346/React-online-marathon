import {useState, useEffect} from 'react';

import './App.css';

export default function App() {

  const [state, setState] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('appData');
    setState(data);
  }, [])

  return (
    <div>
      React Marathon, appData: <input size="5" defaultValue={state}></input>
    </div>
  );
}
