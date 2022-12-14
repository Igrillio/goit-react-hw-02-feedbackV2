import PropTypes from 'react';

import s from './Feedback.module.css';

const Options = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.buttons}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Options;
