import React from 'react';
import { PropTypes } from 'prop-types';

import './InputForm.scss';

function InputForm({
  errorText,
  placeholder,
  regex,
  setState,
  state,
  title,
  type,
}) {
  const onChange = (event) => {
    setState({ ...state, inputField: event.target.value });
  };

  const validation = () => {
    if (
      regex.test(state.inputField)) {
      setState({ ...state, valid: 'checked' });
    } else {
      setState({ ...state, valid: 'error' });
    }
  };

  return (
    <main className="input-form">
      <p className="mb-2">{title}</p>
      <label htmlFor={title}>
        <input
          className="input"
          name={title}
          type={type}
          regex={regex}
          value={state.inputField}
          onChange={onChange}
          onKeyUp={validation}
          onBlur={validation}
          placeholder={placeholder}
          valid={state.valid}
        />
        {state.valid === 'error'
          ? <p className="input__message">{errorText}</p>
          : <p className="input__message" />}
      </label>
    </main>

  );
}

export default InputForm;

InputForm.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  type: PropTypes.string,
  regex: PropTypes.string,
  state: PropTypes.shape({
    inputField: PropTypes.string.isRequired,
    valid: PropTypes.string.isRequired,
  }).isRequired,
  setState: PropTypes.func.isRequired,
}.isRequired;
