import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleOptionClick }) => {
  const optionsValue = Object.keys(options);
  return (
    <ul className={styles.list}>
      {optionsValue.map(option => {
        return (
          <li key={option}>
            <button
              className={styles.button}
              type="button"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  handleOptionClick: PropTypes.func.isRequired,
};
