import React from 'react';
import image2 from '../../../image/banner-2/food-2.jpg'

const Banner2 = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image2 }className="w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div className='w-1/2 ms-3'>
                <h1 className="text-5xl font-bold"><span className='text-primary'>You can buy or sell <span className='text-info'>KFC</span></span> <span className='text-orange-600'>like you want</span></h1>
                    <p className="py-6 font-bold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus ex recusandae dolorem doloremque, totam laboriosam voluptatibus maxime, quae error, mollitia distinctio accusantium consequatur magni dolore culpa consequuntur optio quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquid totamMaiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquid Maiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquid Maiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquid Maiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquid Maiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquid Maiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquid  ut pariatur odio? Maiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquidMaiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquid Maiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquid  praesentium animi. Inventore ad ullam cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores sit minus quae maxime. Quos dolorum vitae voluptates ex nisi odit mollitia repellendus. Delectus atque quae molestiae quos aperiam? Corporis!m</p>
                    <button className="btn btn-primary px-10 rounded-lg">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner2;