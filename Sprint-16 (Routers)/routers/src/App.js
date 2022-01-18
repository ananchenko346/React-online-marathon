import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Layout from './components/Layout';
import Subtask1 from './components/Subtask1';
import Subtask2 from './components/Subtask2';
import Subtask3 from './components/Subtask3';
import Subtask4 from './components/Subtask4';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="subtask1/:id" element={<Subtask1/>}/>
          <Route path="subtask2" element={<Subtask2/>}/>
          <Route path="subtask3" element={<Subtask3/>}/>
          <Route path="subtask4" element={<Subtask4/>}/>
        </Route>
        <Route path="*" element={<Layout/>}/>
      </Routes>
    </div>
  );
}
