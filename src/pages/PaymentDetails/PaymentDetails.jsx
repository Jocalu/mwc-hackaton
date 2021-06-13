import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './PaymentDetails.scss';

import Header from '../../components/Header/Header';
import InputForm from '../../components/InputForm/InputForm';
import Modal from '../../components/Modal/Modal';

import constants from '../../constants/constants.json';

import padlockIcon from '../../assets/icons/padlock.png';

const {
  back,
  cardNumberPlaceholder,
  cardNumberText,
  cardNumberTextError,
  closeText,
  createAccount,
  createdCorrectly,
  goNuwe,
  itsFine,
  paymentDetailsText,
  paymentDetailsTitle,
  safeInformation,
  secretNumberPlaceholder,
  secretNumberText,
  secretNumberTextError,
  step,
  verificationCard,
} = constants;

function PaymentDetails() {
  const unchecked = 'unchecked';
  const [open, setOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState({ inputField: '', valid: unchecked });
  const [secretNumber, setSecretNumber] = useState({ inputField: '', valid: unchecked });

  const regex = {
    cardNumber: /^[0-9]{16}$/,
    secretNumber: /^[0-9]{3}$/,
  };

  return (
    <main className="payment-details">
      <Modal
        title={itsFine}
        text={createdCorrectly}
        textbutton={closeText}
        textbutton2={goNuwe}
        open={open}
        setOpen={setOpen}
      />

      <Header
        link="/profile"
        back={back}
        step={step}
        stepNumber="03/03"
        headerTitle={verificationCard}
      />
      <section className="payment-details__wrapper">
        <h3 className="payment-details__title">{paymentDetailsTitle}</h3>

        <p className="payment-details__text grey">{paymentDetailsText}</p>

        <InputForm
          title={cardNumberText}
          placeholder={cardNumberPlaceholder}
          type="text"
          state={cardNumber}
          setState={setCardNumber}
          regex={regex.cardNumber}
          errorText={cardNumberTextError}
        />

        <InputForm
          title={secretNumberText}
          placeholder={secretNumberPlaceholder}
          type="text"
          state={secretNumber}
          setState={setSecretNumber}
          regex={regex.secretNumber}
          errorText={secretNumberTextError}
        />

        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          to="/payment-details"
        >
          <button
            className="button button--green button--mt"
            type="button"
            disabled={
              secretNumber.valid !== 'checked'
            || cardNumber.valid !== 'checked'
            }
            onClick={() => setOpen(true)}
          >
            {createAccount}
          </button>
        </Link>

        <span
          className="payment-details__safe-information  grey display-center"
        >
          <img className="payment-details__safe-information-icon mr-2" src={padlockIcon} alt="candado" />
          <p>
            {safeInformation}
          </p>

        </span>

      </section>
    </main>
  );
}

export default PaymentDetails;
