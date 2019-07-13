import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Home from './components/Home';
import Variable from './components/Variable';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/variable" component={Variable} />
      </Router>
    </div>
  );
}

export default App;
