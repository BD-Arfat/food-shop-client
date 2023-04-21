import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase';


const auth = getAuth(app);
export const AuthContext = createContext();

const Context = ({children}) => {

    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)

    // register Uer
    const userRegister = (email, password) =>{
        setLoding(false)
        return createUserWithEmailAndPassword(auth, email, password);
    } 
    // login user
    const userLogin = (email, password) =>{
        setLoding(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google form
    const googleProvider = new GoogleAuthProvider();
    const googleUser = () =>{
        setLoding(false)
        return signInWithPopup(auth, googleProvider)
    }

    // logOut
    const logout = () =>{
        return signOut(auth)
    }

    // ///////////////////

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoding(false)
        })
        return()=>{
            unsubscribe();
        }
    } ,[])

    // /////////////////

    const authInfo = {user,userRegister,userLogin,googleUser,logout, loding};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;