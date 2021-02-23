import React from 'react';
import {Grid, Container, Box, GridList, GridListTile} from '@material-ui/core';
import {useStyles} from './styles.js';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import recipeImage from './images/Creamy-Watermelon-Smoothie.jpg';
import watermelon from './images/watermelon.jpg';
import honey from './images/honey.jpg';
import milk from './images/milk.jpg';
import strawberries from './images/strawberries copy.jpg';
import mint from './images/mint-leaves-isolated-white-background_33736-2879.jpg';
import yogurt from './images/yogurt.jpg';

const ingredientData = [
    {img: watermelon, title: 'watermelon'},
    {img: strawberries, title: 'strawberries'},
    {img: yogurt, title: 'yogurt'},
    {img: honey, title: 'honey'},
    {img: milk, title: 'milk'},
    {img: mint, title: 'mint'},
]

const ExpandedRecipe = () => {
    const styles = useStyles();
    return (
        <>
            <Box className={styles.navBar}></Box>
            {/* added this as a palceholder for the nav bar */}
            <Grid>
                <h1 item className={styles.recipeName}> Creamy Watermelon Smoothie</h1>
            </Grid>
            <Grid className={styles.recipeInfo}>
                <img item className= {styles.photo} src={recipeImage} alt='recipe image'/>
                <Box container className={styles.informationBox}>
                    <Grid container item className={styles.timeContainer}> 
                        <AccessTimeIcon item className={styles.icon}/>
                        <p item>5 mins</p>
                    </Grid>
                    <Grid item className={styles.costContainer}>
                        <p item className={styles.cost}>$</p>
                    </Grid>
                    <Grid item className={styles.difficultyContainer}>
                        <p item className={styles.difficultyHeader}>Difficulty:</p>
                        <p item>Easy</p>
                    </Grid>
                </Box>
            </Grid>
            <Grid>
                <h3 className={styles.description}>A blend of frozen watermelon cubes, strawberries, and yogurt, with the optional addition of mint or basil 
                    if you feel so inclined, this pink drink is the grown-up equivalent of zipping down a Slip-n-Slide or drinking cold water right from the 
                    hose on the hottest day as a kid: utter exhilaration.</h3>
            </Grid>
            <Grid>
                <h2 className={styles.ingredientHeader}>Ingredients (6):</h2>
                <div className={styles.ingredientList}>
                    <GridList className={styles.gridList}>
                        {ingredientData.map((tile) => (
                        <GridListTile container style={{width: '25%'}} key={tile.img}>
                            <img item src={tile.img} alt={tile.title} className={styles.ingredientImage}/>
                            <p item className={styles.ingredientText}>{tile.title}</p>
                        </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Grid>
        </>
    )
}
export default ExpandedRecipe;