import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const imageHosting ='af9874b66f731c4e4a481ac37e948eda';

    const handleAddService = (data) => {
        const image = data.image[0];
        console.log(image)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHosting}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    // console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        reting: data.reting,
                        price: data.price,
                        Description: data.Description,
                        image: imgData.data.url
                    }
                    fetch("http://localhost:5500/food", {
                        method: "POST", // or 'PUT'
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(doctor),
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success('The doctor you tried to add was successful');
                        // navigate('/dashbord/manageDoctor')
                    })
                }
            })
    }

    return (
        <div>
            <h1 className='text-4xl font-bold text-center text-success mt-10'>You can also add your service if you want</h1>
            <div className=' w-96 mx-auto mt-10'>
                <form onSubmit={handleSubmit(handleAddService)}>
                    <div className=''>
                        <label className="label">
                            <span className="label-text font-bold text-lg">Your Title</span>
                        </label>
                        <input type="text"  {...register("name")} className="input rounded-lg input-bordered input-accent w-96 my-3" required /> <br />
                        <label className="label">
                            <span className="label-text font-bold text-lg">Photo url</span>
                        </label>
                        <input type="file" {...register("image")} className="input rounded-lg input-bordered input-accent w-96 my-3" required /> <br />
                        <label className="label">
                            <span className="label-text font-bold text-lg">Rating</span>
                        </label>
                        <input type="number" {...register("reting")} className="input rounded-lg input-bordered input-accent w-96 my-3" required /><br />
                        <label className="label">
                            <span className="label-text font-bold text-lg">Price</span>
                        </label>
                        <input type="number" {...register("price")} className="input rounded-lg input-bordered input-accent w-96 my-3" required /><br />
                        <label className="label">
                            <span className="label-text font-bold text-lg">Description</span>
                        </label>
                        <input type="text" {...register("Description")} className="input rounded-lg input-bordered input-accent w-96 my-3" required /><br />
                        <button className='btn btn-warning w-full rounded-lg'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;