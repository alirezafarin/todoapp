import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import '../styles/mainStyles.css';
import history from '../history';
import Home from './Home';
import AddPage from './AddPage';

const App = () => {

  return(
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddPage} />          
        </Switch>
      </Router>
    </div>
  );

}

export default App;