import React from 'react';
import styles from './MainRecipeModal.module.css';
import pass from '../../../assets/images/pass.png';
import star from '../../../assets/images/star.png';
import check from '../../../assets/images/check.png';
import smoothie from "../../../assets/images/Creamy-Watermelon-Smoothie.jpg";

class MainRecipeModal extends React.Component {

    like() {
        // TODO: like (add to recipes, show next)
    }

    dislike() {
        // TODO: dislike (show next)
    }

    star() {
        // TODO: show full recipe
    }

    imageClicked() {
        // TODO: fullsize image?
        console.log("Image clicked");
    }

    render() {

        // This will later come from Spoonacular API
        const name="Creamy Watermelon Smoothie"
        const percentage="87%"
        const price="$"

        return (
            <div className={styles.fullPage}> 
                <h3 className={styles.recipeName}>{name}</h3>
                <div className={styles.recipe}>
                    <img src={smoothie} alt={name} className={styles.recipeImage} onClick={this.imageClicked}></img>
                    <label className={styles.infoLabel1}>{percentage}</label>
                    <label className={styles.infoLabel2}>{price}</label>
                </div>
                <input type="image" className={styles.bigButton} src={pass} onClick={this.dislike}></input>
                <input type="image" className={styles.lilButton} src={star} onClick={this.star}></input>
                <input type="image" className={styles.bigButton} src={check} onClick={this.like}></input>
            </div>
        )
    }
}
export default MainRecipeModal;