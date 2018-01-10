import React from 'react';
import { Router } from 'react-router-dom';
import Auth from './Auth/Auth';
import history from './history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App.js'

const store = configureStore();

const auth = new Auth();

export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App auth={auth}/>
      </Router>
    </Provider>
  );
}

