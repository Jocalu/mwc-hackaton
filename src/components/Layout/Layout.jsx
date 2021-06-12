import React from 'react';
import './Layout.scss';
import constants from '../../constants/constants.json';
import Register from '../../pages/Register/Register';

const { nuweDescription } = constants;

function Layout() {
  return (
    <main className="layout">
      <div className="layout__figure display-center">
        <p className="layout__text">{nuweDescription}</p>
      </div>
      <div className="layout__content">
        <Register />
      </div>
    </main>
  );
}

export default Layout;
