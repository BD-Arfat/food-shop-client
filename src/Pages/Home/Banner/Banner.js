import React from 'react';

const Banner = () => {
    return (
        <div className="hero py-20 lg:my-20 bg-black mt-5 rounded-2xl">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-xl md:text-5xl text-orange-600 font-bold">Welcome to Food <span className='text-accent'>Shop</span></h1>
                    <p className="py-6 font-bold text-white">You can buy and sell products from my website The food that we have on this website is one good manre food.</p>
                    <button className="btn btn-warning mt-3 px-20 rounded-lg">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;