import React from 'react';
import './Card.scss';
import { PropTypes } from 'prop-types';
import arrowIcon from '../../assets/icons/arrow-right.png';
import polygonFillIcon from '../../assets/icons/polygon-fill.png';

function Card({
  title, description, icon, iconName,
}) {
  return (
    <main className="card">
      <div className="card__wrapper">
        <div className="card__icon-wrapper display-center">
          <img className="card__icon" src={polygonFillIcon} alt="user icon" />
          <img className="card__icon--absolute" src={icon} alt={iconName} />
        </div>
        <div className="card__content">
          <h4 className="card__title">
            {title}
          </h4>
          <p className="card__description grey-text">{description}</p>
        </div>
        <div className="card__arrow display-center">
          <img src={arrowIcon} alt="arrow right" />
        </div>
      </div>
    </main>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
}.isRequired;
