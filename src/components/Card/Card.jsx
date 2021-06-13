import React from 'react';
import { PropTypes } from 'prop-types';

import './Card.scss';

import arrowIcon from '../../assets/icons/arrow-right.png';

function Card({
  description,
  icon,
  iconName,
  polygonIcon,
  title,
}) {
  return (
    <main className="card shadow">
      <div className="card__wrapper">
        <div className="card__icon-wrapper display-center">
          <img className="card__icon" src={polygonIcon} alt={iconName} />
          <img className="card__icon--absolute" src={icon} alt={iconName} />
        </div>
        <div className="card__content ml-2">
          <h4 className="card__title">
            {title}
          </h4>
          <p className="card__description grey small">{description}</p>
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
  description: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}.isRequired;
