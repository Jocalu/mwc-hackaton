import React from 'react';
import './InputForm.scss';
import { PropTypes } from 'prop-types';

function InputForm({
  title, placeholder,
}) {
  const valid = 'valid';

  return (
    <main className="input-form">
      <p className="mb-2">{title}</p>
      <label htmlFor={title}>
        <input
          className={`input input--${valid}`}
          name={title}
          placeholder={placeholder}
          valid={valid}
        />
        <p className={`input__message input--${valid}`}>{`${title} incorrecto`}</p>
      </label>
    </main>

  );
}

export default InputForm;

InputForm.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}.isRequired;
