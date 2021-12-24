import React from 'react';

import elements from './base';

import './App.css';


export default function App() {

  const element = elements.map(item => {
    const uniqueId = Math.floor(Math.random() * 100) + 1;
    return <li key={uniqueId}>{item}</li>;
  });

  return (
    <div>
      Some List:
      <ul>
        {element}
      </ul>
    </div>
  );
}
