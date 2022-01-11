import React from 'react';

import First from './First';
import elements from './base';

import './App.css';

export default function App() {
  
  return (
    <div>
      Some data:
      <First elements={elements}/>
    </div>
  );
}
