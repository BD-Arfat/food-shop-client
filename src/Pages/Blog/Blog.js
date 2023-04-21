import React from 'react';
import BlogItems from './BlogItems';

const Blog = () => {

    const blogs = [
        {
            id : 1,
            Question :"Difference between SQL and NoSQL?",
            Answer : 'SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database. Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data. Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.'
        },
        {
            id : 2,
            Question : "What is JWT, and how does it work?",
            Answer : "JWTs or JSON Web Tokens are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server (to secure its APIs). A JWT is a Base64URL encoded string, split into three sections, delimited by periods.1-Section one is the header. This section contains JWT metadata; typically information about the type of token and the algorithm used to sign it. It is encoded JSON. 2-Section two is the payload. This is the content of the token and is also encoded JSON. 3-Section three is the signature. This is the SHA256 (or some other HMAC) hash of the encoded header, encoded payload, and a secret. This part of the JWT is used to verify the integrity of the message."
        },
        {
            id : 3,
            Question : "What is the difference between javascript and NodeJS?",
            Answer : "JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development.JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser."
        },
        {
            id : 4,
            Question : "How does NodeJS handle multiple requests at the same time?",
            Answer : "NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module."
        }
    ]

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold lg:mt-20 text-warning'>We are thinking about your Question</h1>
                <p className='mt-7'>
                    We thing you have some question about us . Here some demo are presented . You <br /> you have further question then contact us. We are waiting for your curiosity.
                </p>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-36 w-11/12 mx-auto'>
                {
                    blogs.map(blog => <BlogItems
                    key={blog._id}
                    blog={blog}
                    ></BlogItems>)
                }
            </div>
        </div>
    );
};

export default Blog;