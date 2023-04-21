import React from 'react';
import image1 from "../../../image/banner-1/food-1.jpg"

const Banner1 = () => {
    return (
        <div className="hero lg:my-32">
            <div className="hero-content flex-col  lg:flex-row-reverse">
                <img src={image1} className=" w-1/2 rounded-lg shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold"><span className='text-primary'>You can buy and sell this</span> <span className='text-orange-600'>type of food</span></h1>
                    <p className="py-6 font-bold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus ex recusandae dolorem doloremque, totam laboriosam voluptatibus maxime, quae error, mollitia distinctio accusantium consequatur magni dolore culpa consequuntur optio quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquid totam ut pariatur odio? Maiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquid praesentium animi. Inventore ad ullam cum! Lorem ipsum dolorMaiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquid Maiores laboriosam dolore eaque illum rerum obcaecati amet, incidunt aliquid  sit amet consectetur adipisicing elit. Id asperiores sit minus quae maxime. Delectus atque quae molestiae quos aperiam? Corporis!m</p>
                    <button className="btn btn-primary px-10 rounded-lg">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner1;