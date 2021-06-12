import React from 'react';
import './Landing.scss';
import constants from '../../constants/constants.json';
import Card from '../../components/Card/Card';
import userIcon from '../../assets/icons/user.png';
import briefcaseIcon from '../../assets/icons/briefcase.png';
import polygonIcon from '../../assets/icons/polygon.png';
import polygonFillIcon from '../../assets/icons/polygon-fill.png';

const {
  account,
  logIn,
  joinCommunity,
  toGetStarted,
  developers,
  developersDesc,
  business,
  businessDesc,
} = constants;

function Landing() {
  return (
    <main className="landing">
      <header className="landing__log-in--tablet landing__log-in--tablet">
        <p className="landing__log-in-text grey-text">
          {account}
          <span className="landing__log-in-text--green ml-1">{logIn}</span>
        </p>
      </header>
      <section className="landing__wrapper">
        <h2 className="landing__title">{joinCommunity}</h2>
        <p className="grey-text">{toGetStarted}</p>
        <Card
          title={developers}
          description={developersDesc}
          polygonIcon={polygonFillIcon}
          icon={userIcon}
          iconName="user"
        />
        <Card
          title={business}
          description={businessDesc}
          icon={briefcaseIcon}
          polygonIcon={polygonIcon}
          iconName="briefcase"
        />
      </section>
      <section className="landing__log-in landing__log-in--mobile">
        <p className="landing__log-in-text grey-text">
          {account}
          <span className="landing__log-in-text--green ml-1">{logIn}</span>
        </p>
      </section>
    </main>
  );
}

export default Landing;
