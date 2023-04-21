import React from 'react';

const Insights = () => {
    return (
        <div>
            <h1  className='text-center lg:mt-28 text-5xl font-bold'>Our Service Insights</h1>
            <p className='text-center mt-5 font-bold'>Our Quality services is showing on data.</p>
            <div className='grid rounded-2xl px-10 grid-cols-4 w-11/12 mx-auto text-center mt-20 bg-warning text-black font-bold py-20'>
                <div>
                    <p>Happy Client</p>
                    <h1 className='font-bold text-5xl'>17,320</h1>
                    <p>January 1995 to February 2022</p>
                </div>
                <div>
                    <p>Projects</p>
                    <h1 className='font-bold text-5xl'>3,250</h1>
                    <p>↗︎ 40 (12%)</p>
                </div>
                <div>
                    <p>Registered user</p>
                    <h1 className='font-bold text-5xl'>1,200</h1>
                    <p>↘︎ 90 (14%)</p>
                </div>
                <div>
                    <p>Positive Feedback</p>
                    <h1 className='font-bold text-5xl'>97.4%</h1>
                    <p>↗︎ 40 (2%)</p>
                </div>
            </div>
        </div>
    );
};

export default Insights;