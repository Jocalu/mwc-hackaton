import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Layout.scss';

import Landing from '../../pages/Landing/Landing';
import Register from '../../pages/Register/Register';
import Profile from '../../pages/Profile/Profile';
import PaymentDetails from '../../pages/PaymentDetails/PaymentDetails';

import constants from '../../constants/constants.json';

const { nuweDescription } = constants;

function Layout() {
  return (
    <main className="layout">
      <div className="layout__image display-center">
        <p className="layout__text">{nuweDescription}</p>
      </div>
      <div className="layout__content">
        <Router>
          <Switch>
            <Route exact path="/"><Landing /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/profile"><Profile /></Route>
            <Route exact path="/payment-details"><PaymentDetails /></Route>
          </Switch>
        </Router>
      </div>
    </main>
  );
}

export default Layout;
