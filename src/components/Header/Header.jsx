import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import arrowIcon from '../../assets/icons/arrow-left.png';

function Header({
  back, step, stepNumber, headerTitle, link,
}) {
  return (
    <main className="header grey small">
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to={link} className="header__back display-center">
        <img src={arrowIcon} alt="arrow left" />
        <span className="header__back-text">
          {back}
        </span>
      </Link>
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
