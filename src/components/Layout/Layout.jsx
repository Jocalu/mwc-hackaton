import React from 'react';
import './Layout.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import constants from '../../constants/constants.json';
import Landing from '../../pages/Landing/Landing';
import Register from '../../pages/Register/Register';

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
          </Switch>
        </Router>
      </div>
    </main>
  );
}

export default Layout;
