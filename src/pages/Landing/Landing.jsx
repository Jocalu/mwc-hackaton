import React from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
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

      <header className="landing__log-in--tablet">
        <p className="landing__log-in-text grey mt-8">
          {account}
          <span className="landing__log-in-text--green ml-1">{logIn}</span>
        </p>
      </header>

      <section className="landing__wrapper">
        <h2 className="landing__title">{joinCommunity}</h2>
        <p className="grey">{toGetStarted}</p>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/register">
          <Card
            title={developers}
            description={developersDesc}
            polygonIcon={polygonFillIcon}
            icon={userIcon}
            iconName="user"
          />
        </Link>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/register">
          <Card
            title={business}
            description={businessDesc}
            icon={briefcaseIcon}
            polygonIcon={polygonIcon}
            iconName="briefcase"
          />
        </Link>
      </section>

      <section className="landing__log-in landing__log-in--mobile">
        <p className="landing__log-in-text grey">
          {account}
          <span className="landing__log-in-text--green ml-1">{logIn}</span>
        </p>
      </section>
    </main>
  );
}

export default Landing;
