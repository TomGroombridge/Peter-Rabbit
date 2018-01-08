import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './components/app.js';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import BettingOffers from './components/BettingOffers/BettingOffers.js'
import LandingPage from './components/LandingPage/LandingPage.js'
import {
  Container,
} from 'semantic-ui-react'

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
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/offers" render={(props) => <BettingOffers auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
    </Provider>
  );
}