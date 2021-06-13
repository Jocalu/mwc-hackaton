import React, { useState } from 'react';
import './PaymentDetails.scss';
import { Link } from 'react-router-dom';
import constants from '../../constants/constants.json';
import Header from '../../components/Header/Header';
import InputForm from '../../components/InputForm/InputForm';
import padlockIcon from '../../assets/icons/padlock.png';
import Modal from '../../components/Modal/Modal';

const {
  back,
  verificationCard,
  step,
  paymentDetailsTitle,
  paymentDetailsText,
  cardNumber,
  cardNumberPlaceholder,
  secretNumber,
  secretNumberPlaceholder,
  createAccount,
  safeInformation,
  itsFine,
  createdCorrectly,
  closeText,
  goNuwe,
} = constants;

function PaymentDetails() {
  const [open, setOpen] = useState(false);

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

        <InputForm title={cardNumber} placeholder={cardNumberPlaceholder} />

        <InputForm title={secretNumber} placeholder={secretNumberPlaceholder} />

        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          to="/payment-details"
        >
          <button
            className="button button--green button--mt"
            type="button"
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
