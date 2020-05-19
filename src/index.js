import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

//Hydrate is related to server side rendering
ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);