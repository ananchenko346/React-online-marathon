import {Route, Routes} from 'react-router-dom';
import People from '../pages/people/People';
import Planets from '../pages/planets/Planets';
import Ships from '../pages/ships/Ships';
import '../../style/theme/bootstrap.min.css';

import './App.css';

const App = () => {
  
  return (
    <div className="app">
    <People/>
    </div>
  );
}

export default App;
