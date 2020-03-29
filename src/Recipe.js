import React from 'react';
import './Recipe.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="RecipeBlock">
            <h1>{title}</h1>
            <img className="RecipeImg" src={image} alt=""></img>
            <p><b>Ingredients:</b> </p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>
                        <i>{ingredient.text}</i>, 
                        <br/>weight: {ingredient.weight}
                    </li>
                ))}
            </ul> 
            <p><b>Calories: </b></p>
            <p>{calories}</p>       
        </div>
    );
}

export default Recipe;