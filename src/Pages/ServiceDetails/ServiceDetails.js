import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const ServiceDetails = () => {
    const { name, image, price, description, rating } = useLoaderData();
    const {user} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();

    const handelReview = data => {
        const name = data.name;
        const email = data.email;
        const description = data.description;

        const review = {
            name,
            email,
            description
        }
        fetch("http://localhost:5500/review", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success(`Your review has been successful`)
            }
        })

    }

    return (
        <div className=' w-11/12 mx-auto'>
            <div className='flex justify-center items-center'>
                <div>
                    <img className='w-96 mt-16' src={image} alt="" />
                </div>
                <div className='ms-20'>
                    <h1 className='mt-14 text-5xl text-success font-bold mb-10'>{name}</h1>
                    <p className='text-2xl font-bold text-info mb-3'>Price : ${price}</p>
                    <p className='text-xl font-bold text-info mb-2'>Rating : {rating}</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p><span className='text-2xl font-bold text-success'>Say something about this dish : <br />
                        </span>{description}</p>
                    </div>
                </div>
            </div>
            <div className='mt-24 '>
                <div>
                    <h1 className='text-center font-bold text-success text-4xl'>Put a Review</h1>
                </div>
                <div className=' '>
                    <form className='mt-14' onSubmit={handleSubmit(handelReview)}>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold text-lg">Your name</span>
                            </label>
                            <input required type="name" {...register("name")} className="input rounded-lg input-bordered input-accent w-full my-1" /> <br />
                            <label className="label">
                                <span className="label-text font-bold text-lg">Your email</span>
                            </label>
                            <input required defaultValue={user?.email}  type="email"{...register("email")} className="input rounded-lg input-bordered input-accent w-full my-1" /><br />
                            <label className="label">
                                <span className="label-text font-bold text-lg">Your Review</span>
                            </label>
                            <textarea required type="description" {...register("description")} className="textarea rounded-lg w-full h-32 textarea-accent" placeholder="Bio"></textarea>
                        </div>
                        <input className='btn btn-success w-full mt-5 rounded-lg' type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;