import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import 'semantic-ui-css/semantic.min.css';
import './style/main.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector('.app-wrapper'),
  );
}

document.addEventListener('DOMContentLoaded', main);
