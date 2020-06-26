import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import '../styles/mainStyles.css';
import history from '../history';
import Home from './Home';

const App = () => {

  return(
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />       
        </Switch>
      </Router>
    </div>
  );

}

export default App;