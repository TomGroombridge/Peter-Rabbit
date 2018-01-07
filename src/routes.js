import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './components/app.js';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  );
}