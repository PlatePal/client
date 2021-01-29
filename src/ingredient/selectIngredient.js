import './selectIngredientStyle.css'
import DairyIcon from './icons/dairyIcon.svg'
import VegetableIcon from './icons/vegetableIcon.svg'
import BakingIcon from './icons/bakingIcon.svg'
import React from 'react'
import Button from './Button'
import { findByLabelText } from '@testing-library/react'

function DairySection(){
    const dairySelection = [
        {
            id: 1,
            text: "butter",
        },
        {   id: 2,
            text: "milk",
        },
        {   id: 3,
            text: "cream cheese",
        },
        {   id: 4,
            text: "sour cream",
        },
        {   id: 5,
            text: "chedder cheese",
        },
        {   id: 6,
            text: "condensed milk",
        },
        {   id: 7,
            text: "yogurt",
        },
        {   id: 8,
            text: "heavy cream",
        },

    ]
    return(
    <div className="dairy-btn">
        {dairySelection.map((dairy) => (
            <Button key={dairy.id} text={dairy.text}/>
        ))}
      
    </div>
    );

}

function VegetablesSection(){
    const dairySelection = [
        {
            id: 1,
            text: "onion",
        },
        {   id: 2,
            text: "garlic",
        },
        {   id: 3,
            text: "bell pepper",
        },
        {   id: 4,
            text: "tomato",
        },
        {   id: 5,
            text: "broccoli",
        },
        {   id: 6,
            text: "potato",
        },
        {   id: 7,
            text: "carrot",
        },
        {   id: 8,
            text: "spanich",
        },
        {   id: 9,
            text: "ginger",
        },
        {   id: 10,
            text: "corn",
        },

    ]
    return(
    <div className="dairy-btn">
        {dairySelection.map((dairy) => (
            <Button key={dairy.id} text={dairy.text}/>
        ))}
        
    </div>
    );

}

function BakingGrainsSection(){
    const dairySelection = [
        {
            id: 1,
            text: "rice",
        },
        {   id: 2,
            text: "pasta",
        },
        {   id: 3,
            text: "baking powder",
        },
        {   id: 4,
            text: "cornstarch",
        },
        {   id: 5,
            text: "yeast",
        },
        {   id: 6,
            text: "flour",
        },
        {   id: 7,
            text: "bread",
        },

        {   id: 8,
            text: "bread crumbs",
        },
        {   id: 9,
            text: "baking soda",
        },
        {   id: 10,
            text: "starch",
        },

    ]
    return(
    <div className="dairy-btn">
        {dairySelection.map((dairy) => (
            <Button key={dairy.id} text={dairy.text}/>
        ))}
        
    </div>
    );

}

function clickNext(){
    console.log("go to the next!");
}
function Ingredient(props){
    return(
        <div className="ingredient-base">
            <p id="title">{props.title}</p>
            <p id="subtitle">{props.subtitle}</p>

            <div className="sections">
                <div className="dairy-section">
                    <div className='icon-section'>
                        <img src={DairyIcon} alt="DairyIcon"/>
                        <p id="section">{props.section1}</p>
                    </div>
                    <DairySection />
                </div>

                <div className="vegetables-section">
                    <div className='icon-section'>
                        <img src={VegetableIcon} alt="VegetableIcon"/>
                        <p id="section">{props.section2}</p>
                    </div>
                    <VegetablesSection />
                </div>

                <div className="bakinggrains-section">
                    <div className='icon-section'>
                        <img src={BakingIcon} alt="BakingIcon"/>
                        <p id="section">{props.section3}</p>
                    </div>
                    <BakingGrainsSection />
                </div>

                <div className="next-btn">
                    <button onClick={clickNext} id="next"><span>Next</span></button>
                </div>
            </div>

            

        </div>
    );
}


Ingredient.defaultProps = {
    title: 'What ingredients do you have?',
    subtitle: '(pick at least 5)',
    section1: 'Dairy',
    section2: 'Vegetables',
    section3: 'Baking & Grains',
}


export default Ingredient;
