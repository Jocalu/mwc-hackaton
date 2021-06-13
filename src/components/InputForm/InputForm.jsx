import React from 'react';
import './InputForm.scss';
import { PropTypes } from 'prop-types';

function InputForm({
  title,
  placeholder,
  type,
  state,
  setState,
  regex,
  errorText,
}) {
  const onChange = (event) => {
    setState({ ...state, inputField: event.target.value });
  };

  const validation = () => {
    if (
      regex.test(state.inputField)) {
      setState({ ...state, valid: true, unchecked: true });
    } else {
      setState({ ...state, valid: false, unchecked: true });
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
        {(!state.valid && state.unchecked)
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
    valid: PropTypes.bool.isRequired,
  }).isRequired,
  setState: PropTypes.func.isRequired,
}.isRequired;
