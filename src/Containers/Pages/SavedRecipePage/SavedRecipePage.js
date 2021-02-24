import React, { Component } from 'react';
import styles from './SavedRecipe.module.scss';
import CompressedRecipe from '../../../component/CompressedRecipe/CompressedRecipe.js';

export class SavedRecipePage extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <CompressedRecipe />
      </div>
    );
  }
}

export default SavedRecipePage;
