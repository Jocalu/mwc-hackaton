import React from 'react';
import './Profile.scss';
import { Link } from 'react-router-dom';
import constants from '../../constants/constants.json';
import Header from '../../components/Header/Header';
import InputForm from '../../components/InputForm/InputForm';
import padlockIcon from '../../assets/icons/padlock.png';

const {
  back,
  location,
  step,
  profileTitle,
  profileText,
  phoneNumber,
  address,
  addressPlaceholder,
  country,
  countryPlaceholder,
  save,
  safeInformation,
} = constants;

function Profile() {
  return (
    <main className="profile">
      <Header
        link="/register"
        back={back}
        step={step}
        stepNumber="02/03"
        headerTitle={location}
      />
      <section className="profile__wrapper">
        <h3 className="profile__title">{profileTitle}</h3>

        <p className="profile__text grey">{profileText}</p>

        <InputForm title={phoneNumber} />

        <InputForm title={address} placeholder={addressPlaceholder} />

        <InputForm title={country} placeholder={countryPlaceholder} />

        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          to="/profile"

        >
          <button className="button button--green button--mt" type="button">{save}</button>
        </Link>

        <span
          className="profile__safe-information  grey display-center"
        >
          <img className="profile__safe-information-icon mr-2" src={padlockIcon} alt="candado" />
          <p>
            {safeInformation}
          </p>

        </span>

      </section>
    </main>
  );
}

export default Profile;
