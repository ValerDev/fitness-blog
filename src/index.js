import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

const reRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(() => {
  let state = store.getState();
  reRender(state)
});

reRender(store.getState());
reportWebVitals();
