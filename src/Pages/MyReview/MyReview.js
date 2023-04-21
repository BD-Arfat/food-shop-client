import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5500/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);

    const handelDelete = (id) =>{
        const proceed = window.confirm('Do you really want to delete this product?')
        if (proceed) {
            fetch(`http://localhost:5500/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('The product you want to delete has been successfully deleted')
                    }
                    const remaning = reviews.filter(review => review._id !== id)
                    setReviews(remaning)
                })

        }
    }

    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <h1 className='text-center font-bold text-4xl mt-6 mb-6'>You have total {reviews.length} reviews</h1>
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Description</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.length > 0 &&
                                reviews.map((review, i) => <tr key={review._id}>
                                    <th>{i + 1}</th>
                                    <td>{review.name}</td>
                                    <td>{review.email}</td>
                                    <td>{review.description}</td>
                                    <td><button onClick={()=>handelDelete(review._id)} className='btn btn-error btn-sm rounded-lg'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReview;