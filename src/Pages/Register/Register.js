import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [data, setData] = useState("");
    const { register, handleSubmit } = useForm();
    const {userRegister, googleUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin = data => {
        console.log(data);
        userRegister(data.email, data.password)
        .then(result => {
            const user = result.user;
            toast.success('Your registration is successful');
            navigate('/')
        })
        .catch(error => {
            console.error(error)
            toast.error(error.message)
        })
    }

    // google with register

    const handelGooleLogin = () =>{
        googleUser()
        .then(result => {
            const user = result.user;
            navigate('/')
            toast.success(`Your google register is successful`);
        })
        .catch(error => {
            console.error(error);
            toast.error(error.message)
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <form onSubmit={handleSubmit(handleLogin)}>
                <h1 className='text-4xl font-bold text-center mb-6'>Register</h1>
                <div>
                    <label className="label">
                        <span className="label-text font-bold text-lg">Your Name</span>
                    </label>
                    <input type="text"  {...register("name")} className="input rounded-lg input-bordered input-accent w-96 my-3" required/> <br />
                    <label className="label">
                        <span className="label-text font-bold text-lg">Your Email</span>
                    </label>
                    <input type="email" {...register("email")}  className="input rounded-lg input-bordered input-accent w-96 my-3" required/> <br />
                    <label className="label">
                        <span className="label-text font-bold text-lg">Your Password</span>
                    </label>
                    <input type="password" {...register("password")}  className="input rounded-lg input-bordered input-accent w-96 my-3" required/><br />
                </div>
                <input className='btn btn-success w-96 mt-5 rounded-lg' type="submit" />
                <p className='text-center mt-5'>Have you not registered yet? <Link className='text-success font-bold' to={'/loginLaouts/login'}>Login</Link></p>
                <div className="divider  text-white text-center">OR</div>
                <button onClick={handelGooleLogin} className=' btn  btn-outline rounded-lg btn-secondary w-96'>Register with Google</button>
            </form>
        </div>
    );
};

export default Register;