import React, { useEffect, useState } from 'react';
import FoodServiceItems from './FoodServiceItems';
import { Link } from 'react-router-dom';

const FoodService = () => {
    const [foods, setFoods] = useState([])
    if(foods.true){

    }
    useEffect( ()=>{
        fetch(`http://localhost:5500/food`)
        .then(res => res.json())
        .then(data => setFoods(data))
    } ,[])
    return (
        <div>
            <div></div>
            <div className='grid grid-cols-3 gap-4 mt-32'>
            {
                foods.map(food => <FoodServiceItems
                key={food._id}
                food={food}
                
                ></FoodServiceItems>)
            }
            </div>
            <div className='text-center mt-16'>
            <Link to={'/service'} className='btn btn-warning btn-outline rounded-lg px-32'>SEE MORE</Link>
            </div>
        </div>
    );
};

export default FoodService;