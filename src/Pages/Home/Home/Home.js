import React from 'react';
import Banner from '../Banner/Banner';
import Banner1 from '../Banner-1/Banner1';
import Banner2 from '../Banner2/Banner2';
import Insights from '../../Insights/Insights';
import FoodService from '../FoodService/FoodService';
import Companies from '../Companies/Companies';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Banner1/>
            <Banner2/>
            <Insights/>
            <FoodService/>
            <Companies/>
        </div>
    );
};

export default Home;