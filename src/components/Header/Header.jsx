import React from 'react';
import './Header.scss';
import { PropTypes } from 'prop-types';
import arrowIcon from '../../assets/icons/arrow-left.png';

function Header({
  back, step, stepNumber, headerTitle,
}) {
  return (
    <main className="header grey-text">
      <div className="header__back display-center">
        <img src={arrowIcon} alt="arrow left" />
        <span>
          {back}
        </span>

      </div>
      <div>
        <p className="header__step">{`${step} ${stepNumber}`}</p>
        <p className="header__title">{headerTitle}</p>
      </div>
    </main>

  );
}

export default Header;

Header.propTypes = {
  returnText: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  stepNumber: PropTypes.string.isRequired,
  headerTitle: PropTypes.string.isRequired,
}.isRequired;
