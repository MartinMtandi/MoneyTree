import React from 'react';
import { Router, Route, useHistory } from 'react-router-dom';

import Home from './pages/Home';
import './App.css';

function App() {
  const history = useHistory();
  return (
    <div className="App">
        <Router history={history}>
          <Route exact path="/" component={Home}/>
        </Router>
    </div>
  );
}

export default App;
