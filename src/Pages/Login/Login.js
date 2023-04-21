import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [data, setData] = useState("");
    const { register, handleSubmit } = useForm();
    const {userLogin, googleUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

    const handleLogin = data => {
        console.log(data)
        userLogin(data.email, data.password)
        .then(result => {
            const user = result.user;
            navigate(from, {replace: true})
            toast.success(`Your login is successful`)
        })
        .catch(error =>{
            console.error(error);
            toast.error(error.message)
        })
    }

    // google with login

    const handelGooleLogin = () =>{
        googleUser()
        .then(result => {
            const user = result.user;
            toast.success(`Your google login is successful`)
        })
        .catch(error => {
            console.error(error);
            toast.error(error.message)
        })
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <form onSubmit={handleSubmit(handleLogin)}>
                <h1 className='text-4xl font-bold text-center mb-6'>Login</h1>
                <div>
                    <label className="label">
                        <span className="label-text font-bold text-lg">Your Email</span>
                    </label>
                    <input required type="eamil" {...register("email")} className="input rounded-lg input-bordered input-accent w-96 my-3" /> <br />
                    <label className="label">
                        <span className="label-text font-bold text-lg">Your Password</span>
                    </label>
                    <input required type="password"{...register("password")} className="input rounded-lg input-bordered input-accent w-96 my-3" /><br />
                </div>
                <input className='btn btn-success w-96 mt-5 rounded-lg' type="submit" />
                <p className='text-center mt-5'>Have you not registered yet? <Link className='text-success font-bold' to={'/loginLaouts/register'}>Register</Link></p>
                <div className="divider  text-white text-center">OR</div>
                <button onClick={handelGooleLogin} className=' btn  btn-outline rounded-lg btn-secondary w-96'>Login with Google</button>
            </form>
        </div>
    );
};

export default Login;