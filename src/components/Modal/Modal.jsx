import React from 'react';
import { PropTypes } from 'prop-types';

import './Modal.scss';

function Modal({
  open,
  setOpen,
  text,
  textbutton,
  textbutton2,
  title,
}) {
  return (
    <main className={`modal ${open ? 'modal--displayed' : ''}`}>
      {open
      && (
      <div className="modal__window slide-fade">
        <div className="modal__wrapper p-6 pt-4 pb-4">
          <h4 className="modal__title mt-8">{title}</h4>
          <p className="modal__text">{text}</p>

          <div className="modal__buttons">
            <button
              className="button button--border button--small button--mt"
              type="button"
              onClick={() => { setOpen(false); }}
            >
              {textbutton}
            </button>
            {textbutton2 && (
            <button
              className="button button--black button--mid button--mt button--ml"
              type="button"
              onClick={() => { setOpen(false); }}
            >
              {textbutton2}
            </button>
            )}
          </div>

        </div>
      </div>
      )}
    </main>
  );
}

export default Modal;

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  textbutton: PropTypes.string,
  textbutton2: PropTypes.string,
  title: PropTypes.string.isRequired,
}.isRequired;
