import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const reRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(reRender);
reRender(store.getState());
reportWebVitals();
