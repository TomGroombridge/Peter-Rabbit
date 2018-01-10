import React from 'react';
import { Route, Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar.js';
import NavigationFooter from './components/NavigationFooter/NavigationFooter.js';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import BettingOffers from './components/BettingOffers/BettingOffers.js'
import LandingPage from './components/LandingPage/LandingPage.js'
import About from './components/About/About.js'
import FAQs from './components/About/FAQs.js'

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
        <div style={divHeight}>
          <NavigationBar auth={auth} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/faqs" component={FAQs} />
          <Route exact path="/offers" render={(props) => <BettingOffers auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
          <NavigationFooter />
        </div>
      </Router>
    </Provider>
  );
}

const divHeight = {
  height: '100%',
  position: 'absolute',
  width: '100%',
}