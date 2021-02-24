import React from 'react';
import styles from '../QuickSummary.module.scss';

const CookingTimeSummary = (props) => {
  return (
    <figure className={styles.QuickSummaryContainer}>
      <img
        className={styles.QuickSummaryIcon}
        src="https://spoonacular.com/application/frontend/images/badges/fast.svg"
        alt="time to cook"
      ></img>
      <figcaption>{props.readyInMinutes} Minutes</figcaption>
    </figure>
  );
};

export default CookingTimeSummary;
