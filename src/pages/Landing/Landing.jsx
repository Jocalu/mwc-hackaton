import React from 'react';
import './Landing.scss';
import constants from '../../constants/constants.json';

const {
  account, logIn, joinCommunity, toGetStarted, developers, business,
} = constants;

function Landing() {
  return (
    <main className="landing">
      <header>
        <p className="landing__log-in-text grey-text">
          {account}
          <span className="landing__log-in-text--green ml-1">{logIn}</span>
        </p>
      </header>
      <section>
        <h2 className="landing__title">{joinCommunity}</h2>
        <p className="grey-text">{toGetStarted}</p>
        <div>{developers}</div>
        <div>{business}</div>
      </section>
    </main>
  );
}

export default Landing;
