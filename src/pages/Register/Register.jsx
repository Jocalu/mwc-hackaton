import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.scss';

import Header from '../../components/Header/Header';
import InputForm from '../../components/InputForm/InputForm';
import Modal from '../../components/Modal/Modal';

import constants from '../../constants/constants.json';

import googleIcon from '../../assets/icons/google.png';

const {
  acceptTerms,
  back,
  closeText,
  emailAddress,
  emailAddressErrorMessage,
  emailAddressPlaceholder,
  fullName,
  fullNameErrorMessage,
  fullNamePlaceholder,
  mailUsed,
  passwordErrorMessage,
  passwordPlaceholder,
  passwordText,
  personalInfo,
  registerAccount,
  registerGoogle,
  registerText,
  registerTitle,
  somethingWrong,
  step,
} = constants;

function Register() {
  const unchecked = 'unchecked';
  const [open, setOpen] = useState(false);
  const [name, setName] = useState({ inputField: '', valid: unchecked });
  const [email, setEmail] = useState({ inputField: '', valid: unchecked });
  const [password, setPassword] = useState({ inputField: '', valid: unchecked });

  const regex = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  };

  return (
    <main className="register">
      <Modal
        title={somethingWrong}
        text={mailUsed}
        textbutton={closeText}
        open={open}
        setOpen={setOpen}
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

        <InputForm
          title={fullName}
          placeholder={fullNamePlaceholder}
          type="text"
          state={name}
          setState={setName}
          regex={regex.name}
          errorText={fullNameErrorMessage}
        />

        <InputForm
          title={emailAddress}
          placeholder={emailAddressPlaceholder}
          type="text"
          state={email}
          setState={setEmail}
          regex={regex.email}
          errorText={emailAddressErrorMessage}
        />

        <InputForm
          title={passwordText}
          placeholder={passwordPlaceholder}
          type="password"
          state={password}
          setState={setPassword}
          regex={regex.password}
          errorText={passwordErrorMessage}
        />

        <div className="register__terms mb-6 mt-6">
          <input className="register__terms-checkbox" type="checkbox" checked />
          <span className="ml-3 ">{acceptTerms}</span>
        </div>

        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/profile">
          <button
            disabled={
              name.valid !== 'checked'
            || email.valid !== 'checked'
            || password.valid !== 'checked'
            }
            className="button button--green"
            type="button"
            onClick={() => setOpen(true)}
          >
            {registerAccount}
          </button>
        </Link>

        <hr />

        <button
          className="button"
          type="button"
          onClick={() => setOpen(true)}
        >
          <img className="register__google-icon mr-2" src={googleIcon} alt="google" />
          {registerGoogle}
        </button>

      </section>
    </main>
  );
}

export default Register;
