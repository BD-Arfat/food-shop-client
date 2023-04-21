import React from 'react';
import imgae1 from "../../../image/7up.jpeg"
import imgae2 from "../../../image/coka cola.png"
import imgae3 from "../../../image/foodpanda.png"
import imgae4 from "../../../image/kfc.png"
import imgae5 from "../../../image/kurkorre.jpeg"
import imgae6 from "../../../image/potata.png"
import imgae7 from "../../../image/sprite.png"
import imgae8 from "../../../image/tomato.png"

const Companies = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-16'>All the companies we currently work with</h1>
            <div className=' w-11/12 mx-auto flex  items-center justify-between mt-20'>
            <div>
                <div><img className='w-20 rounded-full' src={imgae1} alt="" /></div>
            </div>
            <div>
                <div><img className='w-20 rounded-full' src={imgae2} alt="" /></div>
            </div>
            <div>
                <div><img className='w-20 rounded-full' src={imgae3} alt="" /></div>
            </div>
            <div>
                <div><img className='w-20 rounded-full' src={imgae4} alt="" /></div>
            </div>
            <div>
                <div><img className='w-20 rounded-full' src={imgae5} alt="" /></div>
            </div>
            <div>
                <div><img className='w-20 rounded-full' src={imgae6} alt="" /></div>
            </div>
            <div>
                <div><img className='w-20 rounded-full' src={imgae7} alt="" /></div>
            </div>
            <div>
                <div><img className='w-20 rounded-full' src={imgae8} alt="" /></div>
            </div>
            </div>
        </div>
    );
};

export default Companies;