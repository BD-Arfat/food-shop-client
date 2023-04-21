import React, { useEffect, useState } from 'react';
import FoodServiceItems from '../Home/FoodService/FoodServiceItems';

const Service = () => {
    const [foods, setFoods] = useState([])
    useEffect( ()=>{
        fetch(`http://localhost:5500/foodService`)
        .then(res => res.json())
        .then(data => setFoods(data))
    } ,[])
    return (
        <div>
            <h1 className='text-center text-warning mt-20 text-5xl font-bold'>Here we have all kinds of services</h1>
            <div className='grid grid-cols-3 gap-4 mt-16'>
            {
                foods.map(food => <FoodServiceItems
                key={food._id}
                food={food}
                ></FoodServiceItems>)
            }
            </div>
        </div>
    );
};

export default Service;