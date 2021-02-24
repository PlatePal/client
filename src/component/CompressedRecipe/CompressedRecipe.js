import React from 'react';
import styles from './CompressedRecipe.module.scss';
import CostSummary from './QuickSummaryItems/CostSummary/CostSummary.js';
import CookingTimeSummary from './QuickSummaryItems/CookingTimeSummary/CookingTimeSummary.js';

const CompressedRecipe = (props) => {
  return (
    <div className={styles.recipeContainer}>
      <div className={styles.recipeInfoContainer}>
        <h1 className={styles.recipeName}>Mushroom Pasta with Spinach </h1>
        <div className={styles.recipeQuickSummaryContainer}>
          <CostSummary pricePerServing="10" />
          <CookingTimeSummary readyInMinutes="16" />
        </div>
      </div>
      <div className={styles.recipeImageContainer}>
        <img
          className={styles.recipeImage}
          src="https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
          alt="recipe"
        ></img>
      </div>
    </div>
  );
};

export default CompressedRecipe;
