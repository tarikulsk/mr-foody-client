// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Recipe = (recipe) => {
    console.log(recipe.recipe)
    const recipess = recipe.recipe;
    const { chefPicture, chefName, experience, likes, recipes } = recipess;
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 p-10 shadow-xl">
                <figure><img className='h-72 w-40' src={chefPicture} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chef Name: {chefName}</h2>
                    <p>Experience: {experience}</p>
                    <p>Numbers of recipes: {recipes}</p>
                    <p>{FaRegThumbsUp} Total Like: {likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/recipe/${recipess.id}`}

                            className="btn btn-primary">View Recipes</Link >
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipe;