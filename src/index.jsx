import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
