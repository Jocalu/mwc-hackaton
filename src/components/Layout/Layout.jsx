import React from 'react';
import './Layout.scss';
import constants from '../../constants/constants.json';
import Landing from '../../pages/Landing/Landing';

function Layout() {
  return (
    <main className="layout">
      <div className="layout__figure display-center">
        <p className="layout__text">{constants.nuweDescription}</p>
      </div>
      <div className="layout__content">
        <Landing />
      </div>
    </main>
  );
}

export default Layout;
