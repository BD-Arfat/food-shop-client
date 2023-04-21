import React from 'react';

const BlogItems = ({ blog }) => {
    const { Question, Answer } = blog;
    return (
        <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold text-warning">Question : {Question}</h2>
                <p className='mt-4 font-bold text-black'>Answer : {Answer}</p>
            </div>
        </div>
    );
};

export default BlogItems;