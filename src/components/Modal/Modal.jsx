import React from 'react';
import './Modal.scss';
import { PropTypes } from 'prop-types';

function Modal({
  title,
  text,
  textbutton,
  textbutton2,
  open,
}) {
  return (
    <main className="modal modal--displayed">
      {open
      && (
      <div className="modal__window">
        <div className="modal__wrapper p-6 pt-4 pb-4">
          <h4 className="modal__title mt-8">{title}</h4>
          <p className="modal__text">{text}</p>
          <button
            className="button button--border button--small button--mt"
            type="button"
          >
            {textbutton}
          </button>
          {textbutton2 && (
          <button
            className="button button--black button--mid button--mt"
            type="button"
          >
            {textbutton2}
          </button>
          )}
        </div>
      </div>
      )}
    </main>
  );
}

export default Modal;

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textbutton: PropTypes.string,
  textbutton2: PropTypes.string,
  open: PropTypes.bool.isRequired,
}.isRequired;
