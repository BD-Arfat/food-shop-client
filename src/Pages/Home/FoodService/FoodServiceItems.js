import React from 'react';
import { Link } from 'react-router-dom';

const FoodServiceItems = ({ food }) => {
    const { _id, name, image, price, description, rating } = food;
    return (
        <div className="card w-96 bg-green-500 shadow-2xl">
            <figure><img className=' w-96 h-80' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-black font-bold text-2xl">Name : {name}</h2>
                <h1 className='font-bold text-yellow-900'>Rating : {rating}</h1>
                <p className='text-black'>{description}</p>
                <p className=' text-zinc-700 font-bold text-lg'>Price : ${price}</p>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`} className="btn btn-primary px-14 rounded-lg">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodServiceItems;