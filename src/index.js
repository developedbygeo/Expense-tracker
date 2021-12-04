import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './styles/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App.js', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
