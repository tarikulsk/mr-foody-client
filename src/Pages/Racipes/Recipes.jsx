// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://mr-foody-server-side-tarikulsk.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='grid md:grid-cols-3 gap-7 p-5'>
            {
                // eslint-disable-next-line react/jsx-key, no-unused-vars
                recipes.map(recipe => <Recipe recipe={recipe}
                    key={recipe.id} >

                </Recipe>)


            }

        </div>
    );
};

export default Recipes;