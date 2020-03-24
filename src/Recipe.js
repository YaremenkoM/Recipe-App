import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
             <ul>
                {ingredients.map(ingredient => (
                    <li>
                        <i>{ingredient.text}</i>, 
                        <br/>weight: {ingredient.weight}
                    </li>
                ))}
            </ul>
            <ListGroup variant="flush">
                {ingredients.map(ingredient => (
                    <ListGroup.Item>
                        <i>{ingredient.text}</i>, 
                        weight: {ingredient.weight}
                    </ListGroup.Item>
                ))}
            </ListGroup> 
            <p>{calories}</p>
            <img src={image} alt=""></img>
        </div>
    );
}

export default Recipe;