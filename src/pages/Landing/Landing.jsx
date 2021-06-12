import React from 'react';
import './Landing.scss';
import constants from '../../constants/constants.json';
import Card from '../../components/Card/Card';
import userIcon from '../../assets/icons/user.png';
import briefcaseIcon from '../../assets/icons/briefcase.png';

const {
  account, logIn, joinCommunity, toGetStarted, developers, developersDesc, business, businessDesc,
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
      <section className="landing__wrapper">
        <h2 className="landing__title">{joinCommunity}</h2>
        <p className="grey-text">{toGetStarted}</p>
        <Card title={developers} description={developersDesc} icon={userIcon} iconName="user" />
        <Card title={business} description={businessDesc} icon={briefcaseIcon} iconName="briefcase" />
      </section>
    </main>
  );
}

export default Landing;
