import React from 'react';
import './InputForm.scss';
import { PropTypes } from 'prop-types';

function InputForm({
  title, placeholder,
}) {
  const valid = 'valid';

  return (
    <main className="input grey-text">
      <label htmlFor={title}>
        <input
          className={`input--${valid}`}
          name={title}
          placeholder={placeholder}
          valid={valid}
        />
        <p className={valid}>{`${title} incorrecto`}</p>
      </label>
    </main>

  );
}

export default InputForm;

InputForm.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}.isRequired;
