import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, compose , applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './Components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.querySelector('#root')
);

// if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
//   window.addEventListener('load', function() {
//       navigator.serviceWorker.register('../public/sw.js');
//   });
// }

// serviceWorker.register();