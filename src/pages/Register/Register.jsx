import React from 'react';
import './Register.scss';
import constants from '../../constants/constants.json';
import arrowIcon from '../../assets/icons/arrow-left.png';

const {
  returnText,
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
      <header>
        <div>
          <img src={arrowIcon} alt="arrow left" />
          <span>{returnText}</span>
        </div>
        <div>
          <p>{`${step} 01/03`}</p>
          <p>{personalInfo}</p>
        </div>
      </header>
      <section>
        <h4>{registerTitle}</h4>
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
