import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouts = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    const Location = useLocation();

    if(loding){
        return <div className='text-center'><button className="btn loading">loading</button></div>
    }

    if(user){
        return children;
    }
    return (
        <Navigate to={'/loginLaouts/login'} state={{from:Location}} replace></Navigate>
    );
};

export default PrivetRouts;