import React from 'react';
import PropTypes from 'prop-types';
import styles from './Options.module.css';


const Options = ({ updateFeedback, resetFeedback, showReset }) => (
  <div className={styles.options}>
    <h2>Give Feedback</h2>
    <div className={styles.buttons}>
      <button onClick={() => updateFeedback('good')} className={styles.buttonGood}>
        Good
      </button>
      <button onClick={() => updateFeedback('neutral')} className={styles.buttonNeutral}>
        Neutral
      </button>
      <button onClick={() => updateFeedback('bad')} className={styles.buttonBad}>
        Bad
      </button>
    </div>
    {showReset && (
      <button onClick={resetFeedback} className={styles.resetButton}>
        Reset
      </button>
    )}
  </div>
);

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
  showReset: PropTypes.bool.isRequired,
};

export default Options;
