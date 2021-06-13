import React, { useState } from 'react';
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
  phoneNumberText,
  addressText,
  addressPlaceholder,
  countryText,
  countryPlaceholder,
  save,
  safeInformation,
  phoneNumberError,
  addressTextError,
  countryTextError,
} = constants;

function Profile() {
  const unchecked = 'unchecked';
  const [phoneNumber, setPhoneNumber] = useState({ inputField: '', valid: false });
  const [address, setAddress] = useState({ inputField: '', valid: unchecked });
  const [country, setCountry] = useState({ inputField: '', valid: unchecked });

  const regex = {
    address: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/,
    country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    phoneNumber: /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/,
  };

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

        <InputForm
          title={phoneNumberText}
          type="text"
          state={phoneNumber}
          setState={setPhoneNumber}
          regex={regex.phoneNumber}
          errorText={phoneNumberError}

        />

        <InputForm
          title={addressText}
          placeholder={addressPlaceholder}
          type="text"
          state={address}
          setState={setAddress}
          regex={regex.address}
          errorText={addressTextError}

        />

        <InputForm
          title={countryText}
          placeholder={countryPlaceholder}
          type="text"
          state={country}
          setState={setCountry}
          regex={regex.country}
          errorText={countryTextError}

        />

        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          to="/payment-details"

        >
          <button
            className="button button--green button--mt"
            type="button"
            disabled={
              phoneNumber.valid.toString() !== 'checked'
            || address.valid.toString() !== 'checked'
            || country.valid.toString() !== 'checked'
            }
          >
            {save}
          </button>
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
