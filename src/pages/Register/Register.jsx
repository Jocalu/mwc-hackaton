import React from 'react';
import './Register.scss';
import constants from '../../constants/constants.json';
import Header from '../../components/Header/Header';

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
} = constants;

function Register() {
  return (
    <main className="register">
      <Header
        link="/"
        back={back}
        step={step}
        stepNumber="01/03"
        headerTitle={personalInfo}
      />
      <section>
        <h3>{registerTitle}</h3>
        <p>{fullName}</p>
        <input type="text" placeholder={fullNamePlaceholder} />

        <p>{emailAddress}</p>
        <input type="text" placeholder={emailAddressPlaceholder} />

        <p>{password}</p>
        <input type="text" placeholder={passwordPlaceholder} />

        <div>
          <input type="checkbox" />
          <p>{acceptTerms}</p>
        </div>

        <button type="button">{registerAccount}</button>
        <hr />
        <button type="button">{registerGoogle}</button>
      </section>
    </main>
  );
}

export default Register;
