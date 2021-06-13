import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import constants from '../../constants/constants.json';
import Header from '../../components/Header/Header';
import InputForm from '../../components/InputForm/InputForm';
import googleIcon from '../../assets/icons/google.png';
import Modal from '../../components/Modal/Modal';

const {
  back,
  personalInfo,
  step,
  registerTitle,
  fullName,
  fullNamePlaceholder,
  emailAddress,
  emailAddressPlaceholder,
  password,
  passwordPlaceholder,
  acceptTerms,
  registerAccount,
  registerGoogle,
  registerText,
  somethingWrong,
  mailUsed,
  closeText,
} = constants;

function Register() {
  return (
    <main className="register">
      <Modal
        title={somethingWrong}
        text={mailUsed}
        textbutton={closeText}
        open
      />
      <Header
        link="/"
        back={back}
        step={step}
        stepNumber="01/03"
        headerTitle={personalInfo}
      />
      <section className="register__wrapper">
        <h3 className="register__title">{registerTitle}</h3>

        <p className="register__text grey">{registerText}</p>

        <InputForm title={fullName} placeholder={fullNamePlaceholder} />

        <InputForm title={emailAddress} placeholder={emailAddressPlaceholder} />

        <InputForm title={password} placeholder={passwordPlaceholder} />

        <div className="register__terms mb-6">
          <input className="register__terms-checkbox" type="checkbox" />
          <span className="ml-3 ">{acceptTerms}</span>
        </div>

        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/profile">
          <button className="button button--green" type="button">{registerAccount}</button>
        </Link>

        <hr />

        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/profile">
          <button className="button" type="button">
            <img className="register__google-icon mr-2" src={googleIcon} alt="google" />
            {registerGoogle}
          </button>
        </Link>

      </section>
    </main>
  );
}

export default Register;
