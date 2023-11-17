import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import useForm from "../../formGenerator/form";
import validate from "../../utils/Validator";
import {loginForm} from '../../formGenerator/json/login'

import { useDispatch, useSelector } from "react-redux";
import { onSignup, onLogin, onViewProfile, Action  } from '../../store/actions/index.js'

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("")

    const { haveAccount, user, profile, token } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
  
    useEffect(() => {
        if(token){
            dispatch(onViewProfile())
            navigate("/");
        }
    },[token])

    const loginSubmit = (e) => {
        if (values && values.email && values.password && Object.keys(errors).length === 0) {
           // e.preventDefault();
           dispatch(onLogin({email:values.email, password:values.password}));
        }
    }

    const { values, errors, handleChange, handleSubmit } = useForm(
        loginSubmit,
        validate,
        loginForm
    );
    
    // useEffect(() => {
    //     if (token && user) {
    //         localStorage.setItem('token', token);
    //         localStorage.setItem('user', user);
    //         setError("")
    //         navigate("/");
    //     } else {
    //         // loginDetails && loginDetails.msg ? setError(loginDetails.msg) : loginDetails.error && setError(loginDetails.error)
    //     }
    // },[user])
    
   
    return (
        <div className="login-page">
            <div className="m-auto mt-10  py-12 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 md:max-w-2xl bg-white">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold xl:text-5xl
                xl:text-bold">The Retailer</h2>
                <div className="mt-12">
                    <form>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide text-left">Email Address</div>
                            <input name="email" onChange={handleChange} value={values.email || ""} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Enter email address or mobile Number" />
                            {errors.email && <p className="text-red-500 text-left mt-3 text-xs">{errors.email}</p>}
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </div>
                                <div>
                                    {/* <button className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                    cursor-pointer">
                                        Forgot Password?
                                    </button> */}
                                </div>
                            </div>
                            <input type="password" name="password" onChange={handleChange} value={values.password || ""} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Enter your password" />
                            {errors.password && <p className="text-red-500 text-left mt-3 text-xs">{errors.password}</p>}
                        </div>
                        <div className="text-red-500 text-left mt-3 text-xs">{error}</div>
                        <div className="mt-10">
                            <button onClick={handleSubmit} className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                            shadow-lg">
                                Log In
                            </button>
                        </div>
                    </form>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Don't have an account ? <button onClick={() =>  dispatch({ type:  Action.IS_LOGIN_FORM, payload: false })} className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;