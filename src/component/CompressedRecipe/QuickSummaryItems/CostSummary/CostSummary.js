import React from 'react';
import styles from '../QuickSummary.module.scss';

const CostSummary = (props) => {
  return (
    <figure className={styles.QuickSummaryContainer}>
      <img
        className={styles.QuickSummaryIcon}
        src="https://spoonacular.com/application/frontend/images/badges/cheap.svg"
        alt="cost"
      ></img>
      <figcaption>${props.pricePerServing}</figcaption>
    </figure>
  );
};

export default CostSummary;
