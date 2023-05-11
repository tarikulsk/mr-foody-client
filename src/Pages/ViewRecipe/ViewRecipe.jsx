// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ViewRecipe = () => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams()
    const recipe = useLoaderData();
    console.log(recipe);
    const { chefPicture, chefName, experience, likes, recipes, description, recipe1, recipe2, recipe3 } = recipe;
    const { name, instructions, ingredients } = recipe1;
    const { name2, instructions2, ingredients2 } = recipe2;
    const { name3, instructions3, ingredients3 } = recipe3;
    console.log(recipe2)
    return (
        <div className='mt-10 grid md:grid-cols-1 justify-center gap-10 p-10 '>
            <div className="card card-compact mx-auto w-80 bg-base-100 p-10 shadow-xl">
                <figure><img className='h-96 w-72' src={chefPicture} alt="Album" /></figure>
                <div className='card-body' >
                    <h2 className="card-title">Chef Name: {chefName}</h2>
                    <p>Bio: {description}</p>
                    <p>Experience:{experience}</p>
                    <p>Likes:{likes}</p>
                    <p>Total Recipes: {recipes}</p>

                </div>
            </div>
            <div className='grid md:grid-cols-3'>
                <div className="card card-compact w-80 bg-base-100 p-3 shadow-xl">
                    <div className='card-body' >
                        <h2 className="card-title">Recipe Name: {name}</h2>
                        <p><span className='font-bold'>Ingredients:</span> {ingredients[0]}
                            {ingredients[1]},
                            {ingredients[2]},
                            {ingredients[3]},
                            {ingredients[4]}

                        </p>
                        <p><span className='font-bold'>Instructions:</span>{instructions}</p>
                        <p className='flex gap-2' >Rating: <div className='text-amber-400 flex gap-2 mt-1'> <FaStar /> <FaStar /> <FaStar /> <FaStar /><FaStarHalfAlt /></div></p>
                        <button className='py-2 px-4  text-white rounded bg-purple-700'>Favorite button</button>

                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 p-3 shadow-xl">
                    <div className='card-body' >
                        <h2 className="card-title">Recipe Name: {name2}</h2>
                        <p><span className='font-bold'>Ingredients:</span> {ingredients2[0]}
                            {ingredients2[1]},
                            {ingredients2[2]},
                            {ingredients2[3]},
                            {ingredients2[4]}

                        </p>
                        <p><span className='font-bold'>Instructions:</span>{instructions2}</p>
                        <p className='flex gap-2' >Rating: <div className='text-amber-400 flex gap-2 mt-1'> <FaStar /> <FaStar /> <FaStar /> <FaStar /><FaStarHalfAlt /></div></p>
                        <button className='py-2 px-4  text-white rounded bg-purple-700'>Favorite button</button>

                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 p-3 shadow-xl">
                    <div className='card-body' >
                        <h2 className="card-title">Recipe Name: {name3}</h2>
                        <p><span className='font-bold'>Ingredients:</span> {ingredients3[0]}
                            {ingredients3[1]},
                            {ingredients3[2]},
                            {ingredients3[3]},
                            {ingredients3[4]}

                        </p>
                        <p><span className='font-bold'>Instructions:</span>{instructions3}</p>
                        <p className='flex gap-2' >Rating: <div className='text-amber-400 flex gap-2 mt-1'> <FaStar /> <FaStar /> <FaStar /> <FaStar /><FaStarHalfAlt /></div></p>
                        <button className='py-2 px-4  text-white rounded bg-purple-700'>Favorite button</button>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default ViewRecipe;