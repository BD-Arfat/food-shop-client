import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import { AuthContext } from '../../Context/Context';

const Navbar = () => {

    const {user,logout} = useContext(AuthContext);

    const handelLogOut =()=>{
        logout()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    const items = <>
        <li><NavLink to={"/"} className={"lg:text-lg lg:px-6 lg:me-2 lg:font-bold"}>Home</NavLink></li>
        <li><NavLink to={"/blog"} className={"lg:text-lg lg:px-6 lg:me-2 lg:font-bold"}>Blog</NavLink></li>
        <li><NavLink to={"/service"} className={"lg:text-lg lg:px-6 lg:me-2 lg:font-bold"}>Service</NavLink></li>
        <li><NavLink to={"/loginLaouts/myReview"} className={"lg:text-lg lg:px-6 lg:me-2 lg:font-bold"}>My Review</NavLink></li>
        <li><NavLink to={"/loginLaouts/addService"} className={"lg:text-lg lg:px-6 lg:me-2 lg:font-bold"}>add Service</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 lg:mt-4">
            <div className="flex-1">
                <a className="font-bold lg:text-3xl">FOOD<span className='ms-2 text-primary'>SHOP</span></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {items}
                    {user?.email ?
                        <Link onClick={handelLogOut} to={'/loginLaouts/login'} className='btn btn-warning lg:px-10'>Log Out</Link> :
                        <Link to={'/loginLaouts/login'} className='btn btn-info lg:px-10'>Log In</Link>
                        
                        }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;